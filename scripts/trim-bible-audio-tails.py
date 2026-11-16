#!/usr/bin/env python3
"""
Trim uneven trailing silence/breaths from Bible verse MP3s and apply a short
fade-out to reduce end thumps when clips are played back-to-back.

Uses ffmpeg:
  1) reverse → silenceremove (treats trailing silence as leading) → reverse
  2) keep a short pad, then fade out the last N ms

Usage:
  python3 scripts/trim-bible-audio-tails.py
  python3 scripts/trim-bible-audio-tails.py --root "BIble (KJV)/Audio"
  python3 scripts/trim-bible-audio-tails.py --dry-run --limit 20
  python3 scripts/trim-bible-audio-tails.py --workers 8 --threshold-db -35
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_ROOT = REPO_ROOT / "BIble (KJV)" / "Audio"


def which_ffmpeg() -> tuple[str, str]:
    ffmpeg = shutil.which("ffmpeg")
    ffprobe = shutil.which("ffprobe")
    if not ffmpeg or not ffprobe:
        raise SystemExit("ffmpeg and ffprobe are required on PATH.")
    return ffmpeg, ffprobe


def list_mp3s(root: Path) -> list[Path]:
    files: list[Path] = []
    for path in root.rglob("*.mp3"):
        if not path.is_file():
            continue
        # Skip voice samples / non-verse packs
        parts = {p.lower() for p in path.parts}
        if "samples" in parts or "videos" in parts:
            continue
        files.append(path)
    files.sort()
    return files


def probe_duration(ffprobe: str, path: Path) -> float:
    out = subprocess.check_output(
        [
            ffprobe,
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=nk=1:nw=1",
            str(path),
        ],
        text=True,
    ).strip()
    return float(out)


def trim_one(
    ffmpeg: str,
    ffprobe: str,
    path: Path,
    *,
    threshold_db: float,
    pad_ms: int,
    fade_ms: int,
    dry_run: bool,
) -> tuple[str, Path, str]:
    """
    Returns (status, path, detail) where status is ok|skip|error.
    """
    try:
        before = probe_duration(ffprobe, path)
    except Exception as exc:  # noqa: BLE001
        return ("error", path, f"probe failed: {exc}")

    if before < 0.35:
        return ("skip", path, f"too short ({before:.2f}s)")

    pad_s = max(pad_ms, 0) / 1000.0
    fade_s = max(fade_ms, 0) / 1000.0
    # Remove trailing quiet; leave pad_s of silence after speech.
    silence_filter = (
        "areverse,"
        f"silenceremove=start_periods=1:start_duration=0.05:start_threshold={threshold_db}dB:"
        f"detection=peak:start_silence={pad_s},"
        "areverse"
    )

    if dry_run:
        return ("ok", path, f"would trim ({before:.2f}s)")

    tmp_dir = Path(tempfile.mkdtemp(prefix="bible-trim-"))
    stage = tmp_dir / "stage.mp3"
    final = tmp_dir / "final.mp3"
    try:
        subprocess.check_call(
            [
                ffmpeg,
                "-y",
                "-hide_banner",
                "-loglevel",
                "error",
                "-i",
                str(path),
                "-af",
                silence_filter,
                "-c:a",
                "libmp3lame",
                "-b:a",
                "128k",
                str(stage),
            ]
        )
        after_trim = probe_duration(ffprobe, stage)
        if after_trim < 0.2:
            return ("error", path, f"trim too aggressive ({after_trim:.2f}s)")

        fade_st = max(0.0, after_trim - fade_s)
        fade_filter = f"afade=t=out:st={fade_st:.4f}:d={fade_s:.4f}"
        subprocess.check_call(
            [
                ffmpeg,
                "-y",
                "-hide_banner",
                "-loglevel",
                "error",
                "-i",
                str(stage),
                "-af",
                fade_filter,
                "-c:a",
                "libmp3lame",
                "-b:a",
                "128k",
                str(final),
            ]
        )
        after = probe_duration(ffprobe, final)
        # Replace path entry (breaks hardlinks intentionally; re-normalize after).
        os.replace(final, path)
        saved = before - after
        return ("ok", path, f"{before:.2f}s → {after:.2f}s (−{saved:.2f}s)")
    except Exception as exc:  # noqa: BLE001
        return ("error", path, str(exc))
    finally:
        shutil.rmtree(tmp_dir, ignore_errors=True)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--root",
        type=Path,
        default=DEFAULT_ROOT,
        help="Folder to scan for mp3s (default: BIble (KJV)/Audio)",
    )
    parser.add_argument("--workers", type=int, default=6)
    parser.add_argument("--threshold-db", type=float, default=-35.0)
    parser.add_argument("--pad-ms", type=int, default=100)
    parser.add_argument("--fade-ms", type=int, default=40)
    parser.add_argument("--limit", type=int, default=0, help="Process only first N files")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    root = args.root if args.root.is_absolute() else REPO_ROOT / args.root
    if not root.is_dir():
        print(f"Missing root: {root}", file=sys.stderr)
        return 1

    ffmpeg, ffprobe = which_ffmpeg()
    files = list_mp3s(root)
    if args.limit > 0:
        files = files[: args.limit]

    print(
        f"Trimming {len(files)} mp3s under {root.relative_to(REPO_ROOT)} "
        f"(threshold={args.threshold_db}dB pad={args.pad_ms}ms fade={args.fade_ms}ms "
        f"workers={args.workers}{' DRY' if args.dry_run else ''})"
    )

    ok = skip = err = 0
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as pool:
        futures = [
            pool.submit(
                trim_one,
                ffmpeg,
                ffprobe,
                path,
                threshold_db=args.threshold_db,
                pad_ms=args.pad_ms,
                fade_ms=args.fade_ms,
                dry_run=args.dry_run,
            )
            for path in files
        ]
        done = 0
        for fut in as_completed(futures):
            status, path, detail = fut.result()
            done += 1
            if status == "ok":
                ok += 1
            elif status == "skip":
                skip += 1
            else:
                err += 1
                print(f"ERROR {path}: {detail}", file=sys.stderr)
            if done % 100 == 0 or done == len(files):
                print(f"  progress {done}/{len(files)} (ok={ok} skip={skip} err={err})")

    print(f"Done. ok={ok} skip={skip} err={err}")
    return 1 if err else 0


if __name__ == "__main__":
    raise SystemExit(main())
