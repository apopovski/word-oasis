#!/usr/bin/env node
/**
 * Sync the Bible Studies hero background photos from the Unsplash
 * collection: https://unsplash.com/collections/V5AZZAmP4ZY/bible-study
 *
 * For every photo currently in the collection this downloads a sized copy
 * to images/hero/study-<id>.jpg (skipping ones already downloaded) and
 * writes studies/hero-images.json, the manifest that studies-hero-rotation.js
 * picks a random entry from on every page load. Photos removed from the
 * collection have their local file deleted and are dropped from the
 * manifest. Re-run this by hand, or let the scheduled GitHub Action
 * (.github/workflows/sync-unsplash-hero.yml) run it, any time the
 * collection changes - the studies hero picks up the change automatically
 * next time the manifest is regenerated and committed.
 *
 * Usage: UNSPLASH_ACCESS_KEY=xxxx node scripts/sync-unsplash-hero.js
 *
 * Requires a free Unsplash "Access Key":
 *   1. Go to https://unsplash.com/developers and log in / sign up.
 *   2. Click "New Application", accept the terms, and give it any name
 *      (e.g. "Word Oasis hero sync"). Approval is instant for demo apps.
 *   3. Copy the "Access Key" from the app's Keys tab.
 *   4. Add it as a GitHub repo secret named UNSPLASH_ACCESS_KEY so the
 *      scheduled sync workflow can use it automatically, or export it
 *      locally to run this by hand.
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const COLLECTION_ID = "V5AZZAmP4ZY";
const ROOT = path.join(__dirname, "..");
const IMAGE_DIR = path.join(ROOT, "images", "hero");
const MANIFEST_PATH = path.join(ROOT, "studies", "hero-images.json");
const IMAGE_WIDTH = 2000;
const FILE_PREFIX = "study-";

function fetchJson(url, headers) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers }, (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Request to ${url} failed with status ${res.statusCode}`));
          res.resume();
          return;
        }
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          downloadFile(res.headers.location, destPath).then(resolve, reject);
          return;
        }
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Download of ${url} failed with status ${res.statusCode}`));
          res.resume();
          return;
        }
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
        file.on("error", reject);
      })
      .on("error", reject);
  });
}

async function fetchCollectionPhotos(accessKey) {
  const photos = [];
  let page = 1;
  for (;;) {
    const url = `https://api.unsplash.com/collections/${COLLECTION_ID}/photos?per_page=30&page=${page}`;
    const batch = await fetchJson(url, { Authorization: `Client-ID ${accessKey}` });
    if (!Array.isArray(batch) || batch.length === 0) break;
    photos.push(...batch);
    if (batch.length < 30) break;
    page += 1;
  }
  return photos;
}

function focusFor(photo) {
  const portrait = typeof photo.width === "number" && typeof photo.height === "number" && photo.height > photo.width;
  return {
    position: portrait ? "center 30%" : "center 50%",
    mobilePosition: portrait ? "center 30%" : "58% center",
    shade: "medium"
  };
}

async function main() {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    console.warn(
      "UNSPLASH_ACCESS_KEY is not set - skipping sync and leaving the existing studies/hero-images.json and images/hero/study-*.jpg files untouched.\n" +
        "See the comment at the top of this script for how to get a free Access Key."
    );
    return;
  }

  const photos = await fetchCollectionPhotos(accessKey);
  if (!photos.length) {
    console.warn("No photos returned from Unsplash; leaving existing hero-images.json untouched.");
    return;
  }

  fs.mkdirSync(IMAGE_DIR, { recursive: true });

  const keepFiles = new Set();
  const entries = [];
  for (const photo of photos) {
    const fileName = `${FILE_PREFIX}${photo.id}.jpg`;
    const filePath = path.join(IMAGE_DIR, fileName);
    keepFiles.add(fileName);

    if (!fs.existsSync(filePath)) {
      const base = (photo.urls && photo.urls.raw) || `https://images.unsplash.com/photo-${photo.id}`;
      const separator = base.includes("?") ? "&" : "?";
      const downloadUrl = `${base}${separator}auto=format&fit=crop&w=${IMAGE_WIDTH}&q=80`;
      console.log(`Downloading ${photo.id} -> ${fileName}`);
      await downloadFile(downloadUrl, filePath);
    }

    const focus = focusFor(photo);
    entries.push({
      id: photo.id,
      file: `/images/hero/${fileName}`,
      name: (photo.user && photo.user.name) || "Unsplash contributor",
      username: (photo.user && photo.user.username) || "",
      ...focus
    });
  }

  // Remove local copies of photos that were taken out of the collection.
  const existingFiles = fs.existsSync(IMAGE_DIR)
    ? fs.readdirSync(IMAGE_DIR).filter((name) => name.startsWith(FILE_PREFIX))
    : [];
  for (const name of existingFiles) {
    if (!keepFiles.has(name)) {
      fs.unlinkSync(path.join(IMAGE_DIR, name));
      console.log(`Removed ${name} (no longer in the collection)`);
    }
  }

  const output = {
    source: `https://unsplash.com/collections/${COLLECTION_ID}/bible-study`,
    generatedAt: new Date().toISOString(),
    images: entries
  };

  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  console.log(`Synced ${entries.length} hero images from Unsplash collection ${COLLECTION_ID}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
