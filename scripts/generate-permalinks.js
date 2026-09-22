#!/usr/bin/env node
/*
 * Generates a static permalink page for every quiz (/quizzes/<id>/index.html)
 * and every Bible study (/studies/<id>/index.html).
 *
 * Each permalink page is a copy of the shared app shell (quizzes/index.html or
 * studies/index.html) with the <head> metadata (title, description, canonical,
 * Open Graph, Twitter Card, JSON-LD) swapped for content specific to that quiz
 * or study, so shared links get a proper rich preview and can be indexed
 * individually. The client-side JS (quizzes.js / studies.js) reads the id from
 * the URL path and opens the right quiz/study automatically.
 *
 * Run with: node scripts/generate-permalinks.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function extractQuizzes() {
  const src = fs.readFileSync(path.join(ROOT, "quizzes.js"), "utf8");
  const re = /id:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]+)",\s*\n\s*description:\s*"([^"]+)"/g;
  const items = [];
  let match;
  while ((match = re.exec(src))) {
    items.push({ id: match[1], title: match[2], description: match[3] });
  }
  return items;
}

function extractStudies() {
  const src = fs.readFileSync(path.join(ROOT, "studies.js"), "utf8");
  const re = /id:\s*"([^"]+)",\s*\n\s*category:\s*"[^"]+",\s*\n\s*categoryLabel:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]+)",\s*\n\s*summary:\s*"([^"]+)"/g;
  const items = [];
  let match;
  while ((match = re.exec(src))) {
    items.push({ id: match[1], category: match[2], title: match[3], summary: match[4] });
  }
  return items;
}

function replaceOnce(html, target, replacement, label) {
  const index = html.indexOf(target);
  if (index === -1) {
    throw new Error(`Could not find expected markup for ${label}: ${target.slice(0, 80)}...`);
  }
  return html.slice(0, index) + replacement + html.slice(index + target.length);
}

function buildQuizPage(baseHtml, quiz) {
  const title = `${quiz.title} Bible Quiz | Word Oasis`;
  const description = quiz.description;
  const canonical = `https://wordoasis.org/quizzes/${quiz.id}/`;

  let html = baseHtml;
  html = replaceOnce(html, "<title>Bible Knowledge Quizzes | Word Oasis</title>", `<title>${escapeAttribute(title)}</title>`, "title");
  html = replaceOnce(
    html,
    '<meta name="description" content="Test your Bible knowledge with free quizzes about Bible basics, Jesus, the Old and New Testaments, and the prophecies of Daniel.">',
    `<meta name="description" content="${escapeAttribute(description)}">`,
    "meta description"
  );
  html = replaceOnce(html, '<link rel="canonical" href="https://wordoasis.org/quizzes/">', `<link rel="canonical" href="${canonical}">`, "canonical");
  html = replaceOnce(
    html,
    '<meta property="og:title" content="Bible Knowledge Quizzes | Word Oasis">',
    `<meta property="og:title" content="${escapeAttribute(title)}">`,
    "og:title"
  );
  html = replaceOnce(
    html,
    '<meta property="og:description" content="How well do you know the Bible? Take a free Word Oasis Bible quiz and share your score.">',
    `<meta property="og:description" content="${escapeAttribute(description)}">`,
    "og:description"
  );
  html = replaceOnce(html, '<meta property="og:url" content="https://wordoasis.org/quizzes/">', `<meta property="og:url" content="${canonical}">`, "og:url");
  html = replaceOnce(
    html,
    '<meta property="og:image:alt" content="Word Oasis Bible knowledge quizzes">',
    `<meta property="og:image:alt" content="${escapeAttribute(title)}">`,
    "og:image:alt"
  );
  html = replaceOnce(
    html,
    '<meta name="twitter:title" content="Bible Knowledge Quizzes | Word Oasis">',
    `<meta name="twitter:title" content="${escapeAttribute(title)}">`,
    "twitter:title"
  );
  html = replaceOnce(
    html,
    '<meta name="twitter:description" content="How well do you know the Bible? Take a free Word Oasis Bible quiz and share your score.">',
    `<meta name="twitter:description" content="${escapeAttribute(description)}">`,
    "twitter:description"
  );
  html = replaceOnce(
    html,
    `"name": "Bible Knowledge Quizzes",\n        "url": "https://wordoasis.org/quizzes/",\n        "description": "Ten free Bible knowledge quizzes with Scripture references and shareable scores."`,
    `"name": "${title.replace(/"/g, '\\"')}",\n        "url": "${canonical}",\n        "description": "${description.replace(/"/g, '\\"')}"`,
    "json-ld"
  );
  return html;
}

function buildStudyPage(baseHtml, study) {
  const title = `${study.title} | Word Oasis Bible Study`;
  const description = study.summary;
  const canonical = `https://wordoasis.org/studies/${study.id}/`;

  let html = baseHtml;
  html = replaceOnce(html, "<title>Interactive Bible Studies | Word Oasis</title>", `<title>${escapeAttribute(title)}</title>`, "title");
  html = replaceOnce(
    html,
    '<meta name="description" content="Free, interactive Bible studies you can take at your own pace — covering God\'s love, the Bible\'s reliability, Jesus, the Ten Commandments, the Sabbath, death, and Bible prophecy.">',
    `<meta name="description" content="${escapeAttribute(description)}">`,
    "meta description"
  );
  html = replaceOnce(html, '<link rel="canonical" href="https://wordoasis.org/studies/">', `<link rel="canonical" href="${canonical}">`, "canonical");
  html = replaceOnce(
    html,
    '<meta property="og:title" content="Interactive Bible Studies | Word Oasis">',
    `<meta property="og:title" content="${escapeAttribute(title)}">`,
    "og:title"
  );
  html = replaceOnce(
    html,
    '<meta property="og:description" content="Take a free, self-paced interactive Bible study — read a key thought, fill in the Scripture, and grow in your walk with God.">',
    `<meta property="og:description" content="${escapeAttribute(description)}">`,
    "og:description"
  );
  html = replaceOnce(html, '<meta property="og:url" content="https://wordoasis.org/studies/">', `<meta property="og:url" content="${canonical}">`, "og:url");
  html = replaceOnce(
    html,
    '<meta property="og:image:alt" content="Word Oasis interactive Bible studies">',
    `<meta property="og:image:alt" content="${escapeAttribute(title)}">`,
    "og:image:alt"
  );
  html = replaceOnce(
    html,
    '<meta name="twitter:title" content="Interactive Bible Studies | Word Oasis">',
    `<meta name="twitter:title" content="${escapeAttribute(title)}">`,
    "twitter:title"
  );
  html = replaceOnce(
    html,
    '<meta name="twitter:description" content="Take a free, self-paced interactive Bible study — read a key thought, fill in the Scripture, and grow in your walk with God.">',
    `<meta name="twitter:description" content="${escapeAttribute(description)}">`,
    "twitter:description"
  );
  html = replaceOnce(
    html,
    `"name": "Interactive Bible Studies",\n        "url": "https://wordoasis.org/studies/",\n        "description": "21 free, self-paced interactive Bible studies with Scripture references and key thoughts."`,
    `"name": "${title.replace(/"/g, '\\"')}",\n        "url": "${canonical}",\n        "description": "${description.replace(/"/g, '\\"')}"`,
    "json-ld"
  );
  return html;
}

function main() {
  const quizzesBase = fs.readFileSync(path.join(ROOT, "quizzes", "index.html"), "utf8");
  const studiesBase = fs.readFileSync(path.join(ROOT, "studies", "index.html"), "utf8");
  const quizzes = extractQuizzes();
  const studies = extractStudies();

  if (quizzes.length === 0) throw new Error("No quizzes were extracted from quizzes.js — check the regex.");
  if (studies.length === 0) throw new Error("No studies were extracted from studies.js — check the regex.");

  quizzes.forEach((quiz) => {
    const html = buildQuizPage(quizzesBase, quiz);
    const dir = path.join(ROOT, "quizzes", quiz.id);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  });

  studies.forEach((study) => {
    const html = buildStudyPage(studiesBase, study);
    const dir = path.join(ROOT, "studies", study.id);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  });

  console.log(`Generated ${quizzes.length} quiz permalink pages and ${studies.length} study permalink pages.`);
}

main();
