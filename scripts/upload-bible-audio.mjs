#!/usr/bin/env node
/**
 * Upload normalized KJV audio from local-assets/audio/kjv to Cloudflare R2.
 *
 * Prerequisites:
 *   1. npx wrangler login
 *   2. npx wrangler r2 bucket create word-oasis-bible-audio
 *   3. Enable public access / custom domain audio.wordoasis.org in Cloudflare dashboard
 *
 * Usage:
 *   node scripts/upload-bible-audio.mjs
 *   node scripts/upload-bible-audio.mjs --bucket word-oasis-bible-audio --concurrency 8
 */

import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "local-assets", "audio", "kjv");
const WRANGLER = path.join(ROOT, "node_modules", ".bin", "wrangler");

function parseArgs(argv) {
  const args = {
    bucket: "word-oasis-bible-audio",
    concurrency: 6,
    dryRun: false
  };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    if (flag === "--bucket") args.bucket = argv[++i];
    else if (flag === "--concurrency") args.concurrency = Number.parseInt(argv[++i], 10) || 6;
    else if (flag === "--dry-run") args.dryRun = true;
  }
  return args;
}

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkFiles(full));
    } else if (entry.isFile() && /\.(mp3|json)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function runWrangler(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(WRANGLER, args, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "pipe"]
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(stderr || stdout || `wrangler exited ${code}`));
      }
    });
  });
}

function contentTypeFor(filePath) {
  if (filePath.endsWith(".mp3")) return "audio/mpeg";
  if (filePath.endsWith(".json")) return "application/json; charset=utf-8";
  return "application/octet-stream";
}

async function uploadOne(bucket, filePath, dryRun) {
  const relative = path.relative(SOURCE, filePath).split(path.sep).join("/");
  const key = `kjv/${relative}`;
  if (dryRun) {
    return key;
  }
  await runWrangler([
    "r2",
    "object",
    "put",
    `${bucket}/${key}`,
    "--file",
    filePath,
    "--remote",
    "--content-type",
    contentTypeFor(filePath),
    "--cache-control",
    "public, max-age=31536000, immutable"
  ]);
  return key;
}

async function mapPool(items, concurrency, worker) {
  let index = 0;
  let completed = 0;
  const failures = [];
  async function lane() {
    while (index < items.length) {
      const current = items[index];
      index += 1;
      try {
        await worker(current);
      } catch (error) {
        failures.push({ file: current, error: String(error.message || error) });
      }
      completed += 1;
      if (completed % 25 === 0 || completed === items.length) {
        process.stdout.write(`\rUploaded ${completed}/${items.length}`);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => lane()));
  process.stdout.write("\n");
  return failures;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(SOURCE)) {
    console.error(`Missing source folder: ${SOURCE}`);
    console.error("Run: python3 scripts/normalize-bible-audio.py");
    process.exit(1);
  }
  if (!fs.existsSync(WRANGLER)) {
    console.error("Missing wrangler. Run: npm install");
    process.exit(1);
  }

  const files = walkFiles(SOURCE);
  console.log(`Uploading ${files.length} files to R2 bucket "${args.bucket}" (prefix kjv/)`);
  if (args.dryRun) {
    console.log("Dry run — no uploads.");
  }

  const failures = await mapPool(files, args.concurrency, (filePath) =>
    uploadOne(args.bucket, filePath, args.dryRun)
  );

  if (failures.length) {
    console.error(`Failed: ${failures.length}`);
    failures.slice(0, 10).forEach((failure) => {
      console.error(` - ${path.relative(SOURCE, failure.file)}: ${failure.error}`);
    });
    process.exit(1);
  }
  console.log("Upload complete.");
  console.log("Next: point audio.wordoasis.org at this R2 bucket (public development URL or custom domain).");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
