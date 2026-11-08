#!/usr/bin/env python3
"""
Normalize ElevenLabs Studio Bible exports into a stable verse URL tree.

Source layout (generation artifact):
  BIble (KJV)/Audio/Old Testament/01-Genesis/ElevenLabs_Bible_Genesis_1-15/1_….mp3

Clip order inside each chapter-range batch matches studio manuscripts:
  [book title]  ← only the first batch of a book
  Chapter N heading
  verse 1…v
  Chapter N+1 heading
  …

Output layout (CDN-ready):
  local-assets/audio/kjv/genesis/_book.mp3
  local-assets/audio/kjv/genesis/001/_chapter.mp3
  local-assets/audio/kjv/genesis/001/001.mp3
  local-assets/audio/kjv/genesis/001.json
  local-assets/audio/kjv/genesis/manifest.json
  local-assets/audio/kjv/manifest.json

Usage:
  python3 scripts/normalize-bible-audio.py
  python3 scripts/normalize-bible-audio.py --books genesis exodus leviticus numbers deuteronomy
  python3 scripts/normalize-bible-audio.py --copy   # copy instead of hardlink
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
SOURCE_JSON = REPO_ROOT / "BIble (KJV)" / "en_kjv.json"
AUDIO_ROOT = REPO_ROOT / "BIble (KJV)" / "Audio"
OUT_ROOT = REPO_ROOT / "local-assets" / "audio" / "kjv"

# Leading integer in ElevenLabs export names: "42_Genesis_(1-15).mp3"
CLIP_NUM_RE = re.compile(r"^(\d+)_")

# Batches in playback order. chapter_end inclusive.
# include_book_title: first clip in that batch is the book name.
BOOK_BATCHES: dict[str, dict] = {
    "genesis": {
        "name": "Genesis",
        "slug": "genesis",
        "testament": "Old Testament",
        "book_dir": "01-Genesis",
        "batches": [
            {
                "dir": "ElevenLabs_Bible_Genesis_1-15",
                "chapters": (1, 15),
                "include_book_title": True,
            },
            {
                "dir": "ElevenLabs_Bible_Genesis_16-26",
                "chapters": (16, 26),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Genesis_27-36",
                "chapters": (27, 36),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Genesis_37-47",
                "chapters": (37, 47),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Genesis_48-50",
                "chapters": (48, 50),
                "include_book_title": False,
            },
        ],
    },
    "exodus": {
        "name": "Exodus",
        "slug": "exodus",
        "testament": "Old Testament",
        "book_dir": "02-Exodus",
        "batches": [
            {
                "dir": "ElevenLabs_Bible_Exodus_1-13",
                "chapters": (1, 13),
                "include_book_title": True,
            },
            {
                "dir": "ElevenLabs_Bible_Chapter_14-26",
                "chapters": (14, 26),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Chapter_27-37",
                "chapters": (27, 37),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Chapter_38-40",
                "chapters": (38, 40),
                "include_book_title": False,
            },
        ],
    },
    "leviticus": {
        "name": "Leviticus",
        "slug": "leviticus",
        "testament": "Old Testament",
        "book_dir": "03-Leviticus",
        "batches": [
            {
                "dir": "ElevenLabs_Bible_Leviticus_1-13",
                "chapters": (1, 13),
                "include_book_title": True,
            },
            {
                "dir": "ElevenLabs_Bible_Leviticus_14-24",
                "chapters": (14, 24),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Leviticus_25-27",
                "chapters": (25, 27),
                "include_book_title": False,
            },
        ],
    },
    "numbers": {
        "name": "Numbers",
        "slug": "numbers",
        "testament": "Old Testament",
        "book_dir": "04-Numbers",
        "batches": [
            {
                "dir": "ElevenLabs_Bible_Numbers_1-9",
                "chapters": (1, 9),
                "include_book_title": True,
            },
            {
                "dir": "ElevenLabs_Bible_Numbers_10-21",
                "chapters": (10, 21),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Numbers_22-32",
                "chapters": (22, 32),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Numbers_33-36",
                "chapters": (33, 36),
                "include_book_title": False,
            },
        ],
    },
    "deuteronomy": {
        "name": "Deuteronomy",
        "slug": "deuteronomy",
        "testament": "Old Testament",
        "book_dir": "05-Deuteronomy",
        "batches": [
            {
                "dir": "ElevenLabs_Bible_Deuteronomy_1-12",
                "chapters": (1, 12),
                "include_book_title": True,
            },
            {
                "dir": "ElevenLabs_Bible_Deuteronomy_13-27",
                "chapters": (13, 27),
                "include_book_title": False,
            },
            {
                "dir": "ElevenLabs_Bible_Deuteronomy_28-34",
                "chapters": (28, 34),
                "include_book_title": False,
            },
        ],
    },
}


def load_bible() -> list[dict]:
    with open(SOURCE_JSON, encoding="utf-8-sig") as f:
        return json.load(f)


def find_book(bible: list[dict], name: str) -> dict:
    for book in bible:
        if book["name"] == name:
            return book
    raise SystemExit(f"Book not found in KJV JSON: {name}")


def list_clips(batch_dir: Path) -> list[Path]:
    clips = [p for p in batch_dir.iterdir() if p.suffix.lower() == ".mp3"]
    missing_num = [p.name for p in clips if not CLIP_NUM_RE.match(p.name)]
    if missing_num:
        raise SystemExit(
            f"Clips without leading index in {batch_dir}: {missing_num[:5]}"
        )

    def sort_key(p: Path) -> int:
        return int(CLIP_NUM_RE.match(p.name).group(1))

    clips.sort(key=sort_key)
    # Detect gaps / duplicates in numbering
    nums = [sort_key(p) for p in clips]
    expected = list(range(1, len(clips) + 1))
    if nums != expected:
        raise SystemExit(
            f"Non-contiguous clip numbering in {batch_dir}: "
            f"got {nums[:3]}…{nums[-3:]} expected 1…{len(clips)}"
        )
    return clips


def expected_clip_count(book: dict, start: int, end: int, include_title: bool) -> int:
    n = 1 if include_title else 0
    for chapter_num in range(start, end + 1):
        verses = book["chapters"][chapter_num - 1]
        n += 1 + len(verses)  # chapter heading + verses
    return n


def place_file(src: Path, dest: Path, copy: bool) -> str:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() or dest.is_symlink():
        dest.unlink()
    if copy:
        shutil.copy2(src, dest)
        return "copied"
    try:
        os.link(src, dest)
        return "linked"
    except OSError:
        shutil.copy2(src, dest)
        return "copied"


def rel_url(path: Path) -> str:
    """Path relative to OUT_ROOT, POSIX-style for CDN URLs."""
    return path.relative_to(OUT_ROOT).as_posix()


def normalize_book(meta: dict, book: dict, copy: bool) -> dict:
    book_out = OUT_ROOT / meta["slug"]
    if book_out.exists():
        shutil.rmtree(book_out)
    book_out.mkdir(parents=True)

    source_book = AUDIO_ROOT / meta["testament"] / meta["book_dir"]
    if not source_book.is_dir():
        raise SystemExit(f"Missing source folder: {source_book}")

    book_manifest = {
        "translation": "kjv",
        "name": meta["name"],
        "slug": meta["slug"],
        "bookUrl": None,
        "chapterCount": len(book["chapters"]),
        "verseCount": sum(len(c) for c in book["chapters"]),
        "chaptersIndex": [],
    }

    chapter_manifests: dict[int, dict] = {}
    linked = copied = 0

    for batch in meta["batches"]:
        batch_dir = source_book / batch["dir"]
        if not batch_dir.is_dir():
            raise SystemExit(f"Missing batch folder: {batch_dir}")

        start, end = batch["chapters"]
        include_title = batch["include_book_title"]
        clips = list_clips(batch_dir)
        expected = expected_clip_count(book, start, end, include_title)
        if len(clips) < expected:
            raise SystemExit(
                f"{meta['name']} {start}-{end}: expected {expected} clips, "
                f"found {len(clips)} in {batch_dir.name}"
            )
        if len(clips) > expected:
            extra = len(clips) - expected
            print(
                f"  warning: {batch_dir.name} has {extra} trailing extra clip(s); "
                f"using first {expected}"
            )
            clips = clips[:expected]

        i = 0
        if include_title:
            dest = book_out / "_book.mp3"
            mode = place_file(clips[i], dest, copy)
            linked += mode == "linked"
            copied += mode == "copied"
            book_manifest["bookUrl"] = rel_url(dest)
            i += 1

        for chapter_num in range(start, end + 1):
            verses = book["chapters"][chapter_num - 1]
            chapter_dir = book_out / f"{chapter_num:03d}"
            chapter_dir.mkdir(parents=True, exist_ok=True)

            chapter_dest = chapter_dir / "_chapter.mp3"
            mode = place_file(clips[i], chapter_dest, copy)
            linked += mode == "linked"
            copied += mode == "copied"
            i += 1

            verse_urls: list[str] = []
            for verse_num in range(1, len(verses) + 1):
                verse_dest = chapter_dir / f"{verse_num:03d}.mp3"
                mode = place_file(clips[i], verse_dest, copy)
                linked += mode == "linked"
                copied += mode == "copied"
                verse_urls.append(rel_url(verse_dest))
                i += 1

            chapter_info = {
                "translation": "kjv",
                "book": meta["slug"],
                "bookName": meta["name"],
                "chapter": chapter_num,
                "chapterUrl": rel_url(chapter_dest),
                "verseCount": len(verses),
                "verses": verse_urls,
            }
            if book_manifest["bookUrl"]:
                chapter_info["bookUrl"] = book_manifest["bookUrl"]

            chapter_manifests[chapter_num] = chapter_info
            chapter_json = book_out / f"{chapter_num:03d}.json"
            chapter_json.write_text(
                json.dumps(chapter_info, indent=2) + "\n", encoding="utf-8"
            )
            book_manifest["chaptersIndex"].append(
                {
                    "chapter": chapter_num,
                    "verseCount": len(verses),
                    "manifest": rel_url(chapter_json),
                    "chapterUrl": rel_url(chapter_dest),
                }
            )

        if i != len(clips):
            raise SystemExit(
                f"Internal mapping error for {batch_dir}: used {i}/{len(clips)}"
            )

    book_manifest_path = book_out / "manifest.json"
    book_manifest_path.write_text(
        json.dumps(book_manifest, indent=2) + "\n", encoding="utf-8"
    )
    print(
        f"  {meta['name']}: {book_manifest['chapterCount']} chapters, "
        f"{book_manifest['verseCount']} verses "
        f"({linked} hardlinked, {copied} copied)"
    )
    return {
        "name": meta["name"],
        "slug": meta["slug"],
        "chapterCount": book_manifest["chapterCount"],
        "verseCount": book_manifest["verseCount"],
        "manifest": rel_url(book_manifest_path),
        "bookUrl": book_manifest["bookUrl"],
        "available": True,
    }


def write_root_manifest(books: list[dict]) -> None:
    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    existing_path = OUT_ROOT / "manifest.json"
    existing_books: dict[str, dict] = {}
    if existing_path.exists():
        try:
            prev = json.loads(existing_path.read_text(encoding="utf-8"))
            for entry in prev.get("books", []):
                existing_books[entry["slug"]] = entry
        except json.JSONDecodeError:
            pass

    for entry in books:
        existing_books[entry["slug"]] = entry

    # Stable canonical order for known books; unknowns last
    order = list(BOOK_BATCHES.keys())
    ordered = []
    for slug in order:
        if slug in existing_books:
            ordered.append(existing_books.pop(slug))
    ordered.extend(sorted(existing_books.values(), key=lambda b: b["slug"]))

    payload = {
        "translation": "kjv",
        "voice": "elevenlabs",
        "pathPrefix": "kjv",
        "books": ordered,
    }
    existing_path.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {existing_path.relative_to(REPO_ROOT)}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--books",
        nargs="+",
        default=list(BOOK_BATCHES.keys()),
        help="Book slugs to normalize (default: all configured)",
    )
    parser.add_argument(
        "--copy",
        action="store_true",
        help="Copy files instead of hardlinking (uses more disk)",
    )
    args = parser.parse_args()

    unknown = [b for b in args.books if b.lower() not in BOOK_BATCHES]
    if unknown:
        print(f"Unknown book slugs: {unknown}", file=sys.stderr)
        print(f"Configured: {', '.join(BOOK_BATCHES)}", file=sys.stderr)
        return 1

    if not SOURCE_JSON.exists():
        print(f"Missing {SOURCE_JSON}", file=sys.stderr)
        return 1

    bible = load_bible()
    OUT_ROOT.mkdir(parents=True, exist_ok=True)

    print(f"Output → {OUT_ROOT.relative_to(REPO_ROOT)}/")
    results = []
    for slug in args.books:
        slug = slug.lower()
        meta = BOOK_BATCHES[slug]
        book = find_book(bible, meta["name"])
        print(f"Normalizing {meta['name']}…")
        results.append(normalize_book(meta, book, copy=args.copy))

    write_root_manifest(results)
    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
