#!/usr/bin/env node
/**
 * Sync daily-devotional.json from the Word Oasis Apps Script endpoint.
 *
 * Usage:
 *   WORD_OASIS_FORM_ENDPOINT=https://script.google.com/macros/s/.../exec node scripts/sync-daily-devotional.js
 *
 * The endpoint must support:
 *   GET ?action=daily-devotionals
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUTPUT_PATH = path.join(ROOT, "daily-devotional.json");
const DEFAULT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyp2hNuPJYtX-CGnZSB_Tf-MEbTUrmSkEqwNn2gjtxqF4cv16pMCDMmV3voJeJAFhIYBQ/exec";

function normalizeEntry(entry) {
  return {
    date: String(entry?.date || "").slice(0, 10),
    title: String(entry?.title || "").trim(),
    scripture: String(entry?.scripture || "").trim(),
    reference: String(entry?.reference || "").trim(),
    body: String(entry?.body || "").trim(),
    prayer: String(entry?.prayer || "").trim(),
    ctaText: String(entry?.ctaText || "").trim(),
    ctaUrl: String(entry?.ctaUrl || "").trim()
  };
}

async function fetchFeed(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }
  const payload = await response.json();
  if (!payload || payload.success === false || !Array.isArray(payload.entries)) {
    throw new Error(payload?.error || "Feed did not return a valid entries array.");
  }
  return payload;
}

async function main() {
  const endpoint = String(process.env.WORD_OASIS_FORM_ENDPOINT || DEFAULT_ENDPOINT).trim();
  const url = new URL(endpoint);
  url.searchParams.set("action", "daily-devotionals");
  const payload = await fetchFeed(url.toString());
  const entries = payload.entries
    .map(normalizeEntry)
    .filter((entry) => entry.date && (entry.body || entry.scripture))
    .sort((first, second) => first.date.localeCompare(second.date));
  if (!entries.length) {
    throw new Error("No devotional entries were returned from the endpoint.");
  }
  const output = {
    generatedAt: new Date().toISOString(),
    entries
  };
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  console.log(`Synced ${entries.length} devotional entries to daily-devotional.json`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
