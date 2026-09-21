#!/usr/bin/env node
/**
 * Prerender build step for Word Oasis.
 *
 * This script runs the browser-rendered homepage in jsdom so crawlers can see
 * the answer library in index.html, then generates dedicated static pages for
 * every answer and topic for stronger search indexing.
 *
 * Run with: npm run prerender
 */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = path.join(__dirname, "..");
const INDEX_PATH = path.join(ROOT, "index.html");
const SCRIPT_PATH = path.join(ROOT, "script.js");
const SITE_URL = "https://wordoasis.org";
const BUILD_DATE = new Date().toISOString().slice(0, 10);

function extractAnswersData(scriptSource) {
  const start = scriptSource.indexOf("const answers = [");
  if (start === -1) {
    throw new Error("Could not find `const answers = [` in script.js");
  }
  const arrayStart = scriptSource.indexOf("[", start);
  let depth = 0;
  let end = -1;
  for (let i = arrayStart; i < scriptSource.length; i += 1) {
    const char = scriptSource[i];
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) {
    throw new Error("Could not find end of answers array in script.js");
  }
  // eslint-disable-next-line no-eval
  return eval(scriptSource.slice(arrayStart, end));
}

function extractConstData(scriptSource, constName) {
  const start = scriptSource.indexOf(`const ${constName} = {`);
  if (start === -1) {
    throw new Error(`Could not find \`const ${constName} = {\` in script.js`);
  }
  const objectStart = scriptSource.indexOf("{", start);
  let depth = 0;
  let end = -1;
  for (let i = objectStart; i < scriptSource.length; i += 1) {
    const char = scriptSource[i];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) {
    throw new Error(`Could not find end of ${constName} object in script.js`);
  }
  // eslint-disable-next-line no-eval
  return eval(`(${scriptSource.slice(objectStart, end)})`);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function answerPath(answer) {
  return `/answers/${slugify(answer.question)}/`;
}

function topicPath(topic) {
  return `/topics/${slugify(topic)}/`;
}

function topicIconMarkup(topic, topicIcons) {
  const content = topicIcons[topic] || topicIcons.Faith;
  return `<svg viewBox="0 0 24 24" focusable="false">${content}</svg>`;
}

function absoluteUrl(urlPath) {
  return `${SITE_URL}${urlPath}`;
}

function buildTopicListJsonLd(answers) {
  const topics = Array.from(new Set(answers.flatMap((answer) => answer.topics))).sort();

  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Word Oasis Bible topics",
      numberOfItems: topics.length,
      itemListElement: topics.map((topic, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: topic,
        url: absoluteUrl(topicPath(topic))
      }))
    },
    null,
    2
  );
}

function renderWithJsdom(html, scriptSource) {
  const htmlWithoutAppScript = html.replace(
    /\s*<script src="script\.js(?:\?[^"]*)?"><\/script>\s*/,
    "\n"
  );

  const dom = new JSDOM(htmlWithoutAppScript, {
    url: "https://wordoasis.org/",
    runScripts: "dangerously",
    pretendToBeVisual: true
  });

  const { window } = dom;

  if (!window.navigator.clipboard) {
    window.navigator.clipboard = { writeText: () => Promise.resolve() };
  }
  if (!window.matchMedia) {
    window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
  }
  window.WORD_OASIS_PRERENDER = true;

  window.eval(scriptSource);

  const topicGridHtml = window.document.querySelector("#topic-grid").innerHTML.trim();
  const answersListHtml = window.document.querySelector("#answers-list").innerHTML.trim();
  const resultMetaText = window.document.querySelector("#result-meta").textContent.trim();
  const spotlightBodyHtml = window.document
    .querySelector("#spotlight-body")
    .innerHTML.replace(/<!--\s*prerender:spotlight-body\s*-->/g, "")
    .trim();
  const questionTopicOptions = Array.from(window.document.querySelectorAll("#question-topic option"))
    .filter((option) => option.value !== "")
    .map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.textContent)}</option>`)
    .join("\n                    ");

  window.close();

  return { topicGridHtml, answersListHtml, resultMetaText, spotlightBodyHtml, questionTopicOptions };
}

function injectContainerContent(html, containerId, marker, innerHtml) {
  const openTagRegex = new RegExp(`(<[^>]+\\bid="${containerId}"[^>]*>)([\\s\\S]*?)(<!-- ${escapeRegExp(marker)} -->)`);
  if (!openTagRegex.test(html)) {
    throw new Error(`Could not locate container #${containerId} with marker ${marker}`);
  }
  return html.replace(openTagRegex, (_match, openTag, _old, markerComment) => `${openTag}${innerHtml}${markerComment}`);
}

function injectSelectOptions(html, marker, optionsHtml) {
  const regex = new RegExp(
    `(<select id="question-topic" name="topic">\\s*<option value="">[^<]*<\\/option>)([\\s\\S]*?)(<!-- ${escapeRegExp(marker)} -->)`
  );
  if (!regex.test(html)) {
    throw new Error("Could not locate #question-topic select for prerendering");
  }
  return html.replace(regex, (_match, openPart, _old, markerComment) => `${openPart}\n                  ${optionsHtml}${markerComment}`);
}

function injectHomepageContentJsonLd(html, contentJson) {
  const regex = /<script type="application\/ld\+json" id="(?:faq|homepage-content)-jsonld">[\s\S]*?<\/script>/;
  if (!regex.test(html)) {
    throw new Error("Could not locate homepage content structured data in index.html");
  }
  return html.replace(
    regex,
    `<script type="application/ld+json" id="homepage-content-jsonld">\n${contentJson}\n    </script>`
  );
}

function injectHomepageAnswerCount(html, answerCount) {
  return html.replace(
    /Search \d+\+? Scripture-based Bible answers/g,
    `Search ${answerCount} Scripture-based Bible answers`
  );
}

function keyTakeaway(answer, perspectivesByAnswer) {
  return perspectivesByAnswer[answer.id] || answer.shortAnswer;
}

function metaDescription(answer) {
  const references = answer.scriptures.slice(0, 3).join(", ");
  const description = `${answer.shortAnswer} Bible references: ${references}.`;
  if (description.length <= 155) {
    return description;
  }
  return `${description.slice(0, 152).replace(/\s+\S*$/, "")}...`;
}

function pageShell({ title, description, canonicalPath, body, structuredData = [], ogType = "article" }) {
  const canonical = absoluteUrl(canonicalPath);
  const activeSection = canonicalPath.startsWith("/answers/")
    ? "answers"
    : canonicalPath.startsWith("/topics/")
      ? "topics"
      : canonicalPath.startsWith("/bible/")
        ? "bible"
        : "home";
  const currentPage = (section) => activeSection === section ? ' aria-current="page"' : "";
  const jsonLd = structuredData
    .map((data) => `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n    </script>`)
    .join("\n    ");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeAttribute(description)}">
    <meta name="author" content="Word Oasis">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <meta name="theme-color" content="#102a43">
    <meta name="application-name" content="Word Oasis">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Word Oasis">
    <script>
      (() => {
        let saved = null;
        try {
          saved = localStorage.getItem("word-oasis-theme");
        } catch (error) {}
        const systemDark = typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = saved === "dark" || saved === "light" ? saved : systemDark ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
      })();
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5WRW513RFW"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-5WRW513RFW");
    </script>
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/SVG/wordoasis-mark.svg" type="image/svg+xml">
    <link rel="alternate icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest?v=20261048">
    <link rel="sitemap" type="application/xml" href="/sitemap.xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css?v=20261076">
    <meta property="og:type" content="${ogType}">
    <meta property="og:title" content="${escapeAttribute(title)}">
    <meta property="og:description" content="${escapeAttribute(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="Word Oasis">
    <meta property="og:image" content="${SITE_URL}/og-image.png?v=20261031">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Word Oasis logo with a daily Scripture, hope, and encouragement message">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttribute(title)}">
    <meta name="twitter:description" content="${escapeAttribute(description)}">
    <meta name="twitter:image" content="${SITE_URL}/og-image.png?v=20261031">
    <meta name="twitter:image:alt" content="Word Oasis logo with a daily Scripture, hope, and encouragement message">
    ${jsonLd}
  </head>
  <body>
    <header class="site-header">
      <nav class="nav container" aria-label="Primary navigation">
        <a class="brand" href="/" aria-label="Word Oasis home">
          <img src="/word-oasis.svg" alt="Word Oasis" class="brand-mark">
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-menu">
          <span class="sr-only">Open menu</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="primary-menu" class="nav-links">
          <li><a href="/"${currentPage("home")}>Home</a></li>
          <li><a href="/answers/"${currentPage("answers")}>Answers</a></li>
          <li><a href="/topics/"${currentPage("topics")}>Topics</a></li>
          <li><a href="/bible/"${currentPage("bible")}>Bible</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#ask">Ask a question</a></li>
          <li class="nav-search-item">
            <form class="nav-search" action="/" method="get" role="search" data-nav-search>
              <button class="nav-search-toggle" type="button" aria-expanded="false" aria-controls="nav-search-fields" aria-label="Search Bible answers">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m20 20-4-4"></path>
                </svg>
              </button>
              <div class="nav-search-fields" id="nav-search-fields">
              <label class="sr-only" for="nav-search-input">Search Bible questions</label>
              <input
                id="nav-search-input"
                type="search"
                name="q"
                placeholder="Search"
                autocomplete="off"
              >
              <button class="nav-search-submit" type="submit" aria-label="Submit search">Search</button>
              </div>
            </form>
          </li>
          <li class="nav-theme-item">
            <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch color mode" aria-pressed="false">
              <span class="theme-toggle-icon" aria-hidden="true">
                <svg class="theme-icon-moon" viewBox="0 0 24 24" focusable="false">
                  <path d="M20.1 14.6A8.4 8.4 0 0 1 9.4 3.9a8.4 8.4 0 1 0 10.7 10.7Z"></path>
                </svg>
                <svg class="theme-icon-sun" viewBox="0 0 24 24" focusable="false">
                  <circle cx="12" cy="12" r="4.1"></circle>
                  <path d="M12 2.4v2.2"></path>
                  <path d="M12 19.4v2.2"></path>
                  <path d="M4.8 4.8l1.6 1.6"></path>
                  <path d="M17.6 17.6l1.6 1.6"></path>
                  <path d="M2.4 12h2.2"></path>
                  <path d="M19.4 12h2.2"></path>
                  <path d="M4.8 19.2l1.6-1.6"></path>
                  <path d="M17.6 6.4l1.6-1.6"></path>
                </svg>
              </span>
              <span class="theme-toggle-text" data-theme-label>Dark</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
    ${body}
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand-col">
            <a class="brand footer-brand" href="/" aria-label="Word Oasis home">
              <img src="/word-oasis.svg" alt="Word Oasis" class="brand-mark">
            </a>
            <p class="footer-tagline">Bible answers to your questions.</p>
            <blockquote class="footer-verse">
              &ldquo;And let the one who is thirsty come. And he willing, let him take of the Water
              of Life freely.&rdquo;
              <cite>Revelation 22:17</cite>
            </blockquote>
          </div>

          <nav class="footer-col" aria-label="Explore Word Oasis">
            <h2>Explore</h2>
            <ul class="footer-list">
              <li><a href="/answers/">All answers</a></li>
              <li><a href="/topics/">Browse topics</a></li>
              <li><a href="/bible/">Read the Bible</a></li>
              <li><a href="/#about">About Word Oasis</a></li>
            </ul>
          </nav>

          <nav class="footer-col" aria-label="Popular topics">
            <h2>Popular topics</h2>
            <ul class="footer-list">
              <li><a href="/topics/salvation/">Salvation</a></li>
              <li><a href="/topics/prayer/">Prayer</a></li>
              <li><a href="/topics/faith/">Faith</a></li>
              <li><a href="/topics/forgiveness/">Forgiveness</a></li>
              <li><a href="/topics/prophecy/">Prophecy</a></li>
              <li><a href="/topics/sabbath/">Sabbath</a></li>
            </ul>
          </nav>

          <nav class="footer-col" aria-label="Connect with Word Oasis">
            <h2>Connect</h2>
            <ul class="footer-list">
              <li><a href="/#ask">Ask a question</a></li>
              <li><a href="/#ask">Email us</a></li>
              <li><a href="#top">Back to top</a></li>
            </ul>
          </nav>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">&copy; ${new Date().getFullYear()} Word Oasis. All rights reserved.</p>
          <p class="footer-note">Scripture quotations are shared for study and personal encouragement.</p>
        </div>
      </div>
    </footer>

    <div class="verse-modal" id="verse-modal" role="dialog" aria-modal="true" aria-labelledby="verse-modal-title" hidden>
      <div class="verse-modal-card">
        <div class="verse-modal-header">
          <h2 id="verse-modal-title">Reference</h2>
          <button type="button" class="verse-modal-close" id="verse-modal-close" aria-label="Close verse">
            &times;
          </button>
        </div>
        <div class="verse-modal-toolbar">
          <label for="verse-modal-translation">Bible version</label>
          <select id="verse-modal-translation">
            <option value="web">WEB - World English Bible</option>
            <option value="kjv">KJV - King James Version</option>
            <option value="asv">ASV - American Standard Version</option>
          </select>
        </div>
        <div class="verse-modal-body" id="verse-modal-body"></div>
      </div>
    </div>

    <script src="/theme.js?v=20261073"></script>
    <script src="/pwa.js?v=20261073"></script>
    <script src="/scripture-graphic.js?v=20261073"></script>
    <script src="/local-library.js?v=20261073"></script>
    <script src="/verse-modal.js?v=20261073"></script>
  </body>
</html>
`;
}

function tagsHtml(topics) {
  return topics
    .map((topic) => `<a class="tag-link" href="${topicPath(topic)}">${escapeHtml(topic)}</a>`)
    .join("");
}

function scripturesHtml(scriptures) {
  return scriptures
    .map(
      (scripture) =>
        `<button type="button" class="scripture-link" data-scripture="${escapeAttribute(scripture)}">${escapeHtml(scripture)}</button>`
    )
    .join("");
}

/**
 * Cross-links topic keywords found inside answer body text to the matching
 * /topics/<slug>/ page, so a mention of "prayer" inside an answer whose main
 * subject is something else (e.g. anxiety) still helps readers discover the
 * Prayer topic hub. Each topic is only linked once per answer, and topics the
 * answer is already tagged with are left as plain text (they are already
 * shown as tag pills above the body).
 */
const TOPIC_KEYWORDS = {
  Baptism: ["baptism", "baptized", "baptize", "immersion", "Lord's Supper", "Communion"],
  "Bible Study": ["Bible study", "studying Scripture", "Scripture", "the Bible", "God's Word", "Gospels", "Old Testament", "New Testament"],
  "Christian Living": ["Christian living", "discipleship", "obedience", "holiness", "spiritual growth", "daily life"],
  Church: ["the church", "local church", "congregation", "pastors", "elders", "church leadership"],
  Comfort: ["comfort", "comforted", "suffering", "grief", "anxiety", "depression", "loneliness", "fear", "pain"],
  Creation: ["creation", "the Creator", "creation week", "created", "Genesis", "Flood", "dinosaurs"],
  Faith: ["faith", "trust", "believe", "belief", "doubt", "assurance"],
  Forgiveness: ["forgiveness", "forgive", "forgiving", "repentance", "mercy", "reconciliation"],
  "Great Controversy": ["great controversy", "Satan", "the devil", "demons", "spiritual warfare", "war in heaven", "conflict between good and evil"],
  Health: ["physical health", "mental health", "health", "body", "clean and unclean", "alcohol", "temperance", "body temple"],
  "Holy Spirit": ["Holy Spirit", "Spirit of God", "spiritual gifts", "gift of tongues"],
  Law: ["Ten Commandments", "God's law", "commandments", "law and grace", "covenant", "obedience"],
  "Marriage and Family": ["marriage", "family", "divorce", "sexual intimacy", "husband", "wife", "children", "parents"],
  Prayer: ["prayer", "praying", "pray", "answered prayer", "unanswered prayer"],
  Prophecy: ["prophecy", "prophetic", "prophecies", "Daniel", "Revelation", "mark of the beast", "Babylon"],
  Sabbath: ["Sabbath", "seventh day", "Saturday", "Sunday", "day of rest"],
  Salvation: ["salvation", "saved", "grace", "the gospel", "eternal life", "cross", "resurrection", "forgiven"],
  Sanctuary: ["sanctuary", "Day of Atonement", "High Priest", "heavenly ministry", "atonement"],
  "Second Coming": ["second coming", "Christ's return", "return of Christ", "Jesus returns", "coming soon", "last days"],
  "State of the Dead": ["state of the dead", "death", "dead", "soul", "hell", "lake of fire", "resurrection"],
  Stewardship: ["stewardship", "tithing", "tithe", "offerings", "money", "giving"],
  "Three Angels": ["three angels' messages", "three angels", "first angel", "second angel", "third angel", "everlasting gospel"]
};

const KEYWORD_TOPIC_MAP = new Map();
Object.entries(TOPIC_KEYWORDS).forEach(([topic, phrases]) => {
  phrases.forEach((phrase) => KEYWORD_TOPIC_MAP.set(phrase.toLowerCase(), topic));
});

const TOPIC_KEYWORD_PATTERN = new RegExp(
  `\\b(${Array.from(KEYWORD_TOPIC_MAP.keys())
    .sort((a, b) => b.length - a.length)
    .map((phrase) => escapeRegExp(phrase))
    .join("|")})\\b`,
  "gi"
);

function linkifyKeywords(text, currentTopics, usedTopics) {
  return text.replace(TOPIC_KEYWORD_PATTERN, (match) => {
    const topic = KEYWORD_TOPIC_MAP.get(match.toLowerCase());
    if (!topic || currentTopics.includes(topic) || usedTopics.has(topic)) {
      return match;
    }
    usedTopics.add(topic);
    return `<a class="inline-topic-link" href="${topicPath(topic)}">${match}</a>`;
  });
}

const BIBLE_BOOK_PATTERN = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
  "[1-2] Samuel", "[1-2] Kings", "[1-2] Chronicles", "Ezra", "Nehemiah", "Esther", "Job",
  "Psalms?", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
  "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum",
  "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John",
  "Acts", "Romans", "[1-2] Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
  "[1-2] Thessalonians", "[1-2] Timothy", "Titus", "Philemon", "Hebrews", "James", "[1-2] Peter",
  "[1-3] John", "Jude", "Revelation"
].join("|");

const INLINE_SCRIPTURE_PATTERN = new RegExp(
  `\\b(?:${BIBLE_BOOK_PATTERN})\\s+\\d{1,3}(?::\\d{1,3}(?:[-–]\\d{1,3})?)?(?:,\\s*\\d{1,3}(?:[-–]\\d{1,3})?)*`,
  "g"
);

function linkifyScriptureReferences(text) {
  return text.replace(INLINE_SCRIPTURE_PATTERN, (reference, offset, source) => {
    const before = source.slice(0, offset);
    const after = source.slice(offset + reference.length);
    const alreadyParenthetical = before.endsWith("(") && after.startsWith(")");
    const followsQuotation = /(?:&quot;|["”])\s*$/.test(before);
    const button = `<button type="button" class="scripture-link scripture-link-inline" data-scripture="${escapeAttribute(reference)}">${escapeHtml(reference)}</button>`;
    return followsQuotation && !alreadyParenthetical ? `(${button})` : button;
  });
}

function linkifyTopicTextNodes(html, currentTopics, usedTopics) {
  let protectedElement = "";
  return html
    .split(/(<[^>]+>)/g)
    .map((part) => {
      if (part.startsWith("<")) {
        const opening = part.match(/^<(button|a)\b/i);
        const closing = part.match(/^<\/(button|a)>/i);
        if (opening) protectedElement = opening[1].toLowerCase();
        if (closing && closing[1].toLowerCase() === protectedElement) protectedElement = "";
        return part;
      }
      return protectedElement ? part : linkifyKeywords(part, currentTopics, usedTopics);
    })
    .join("");
}

function renderAnswerText(text, currentTopics, usedTopics) {
  return linkifyTopicTextNodes(linkifyScriptureReferences(escapeHtml(text)), currentTopics, usedTopics);
}

function relatedAnswers(currentAnswer, answers) {
  const stopWords = new Set(["a", "an", "and", "are", "as", "at", "be", "by", "did", "do", "does", "for", "from", "how", "in", "is", "it", "of", "on", "or", "that", "the", "this", "to", "what", "when", "where", "who", "why", "with"]);
  const normalizeConcept = (word) => {
    if (["exist", "exists", "existence", "real", "reality"].includes(word)) return "existence";
    if (["create", "created", "creator", "creation"].includes(word)) return "creation";
    if (["die", "dies", "death", "dead"].includes(word)) return "death";
    return word;
  };
  const wordsFor = (text) =>
    new Set(
      text
        .toLowerCase()
        .match(/[a-z0-9]+/g)
        ?.filter((word) => word.length > 2 && !stopWords.has(word) && word !== "bible" && word !== "scripture")
        .map(normalizeConcept) || []
    );
  const currentQuestionWords = wordsFor(currentAnswer.question);
  const currentKeywords = wordsFor((currentAnswer.keywords || []).join(" "));

  return answers
    .filter((answer) => answer.id !== currentAnswer.id)
    .map((answer) => {
      const sharedTopics = answer.topics.filter((topic) => currentAnswer.topics.includes(topic)).length;
      const sharedQuestionWords = [...wordsFor(answer.question)].filter((word) => currentQuestionWords.has(word)).length;
      const sharedKeywords = [...wordsFor((answer.keywords || []).join(" "))].filter((word) => currentKeywords.has(word)).length;
      const sharedScriptures = answer.scriptures.filter((reference) => currentAnswer.scriptures.includes(reference)).length;
      const categoryMatch = answer.category === currentAnswer.category ? 1 : 0;
      return {
        answer,
        score: sharedQuestionWords * 8 + sharedKeywords * 4 + sharedScriptures * 5 + sharedTopics * 2 + categoryMatch
      };
    })
    .filter(({ score }) => score > 0)
    .sort((first, second) => second.score - first.score || first.answer.question.localeCompare(second.answer.question))
    .slice(0, 5)
    .map(({ answer }) => answer);
}

function answerPage(answer, answers, perspectivesByAnswer) {
  const takeaway = keyTakeaway(answer, perspectivesByAnswer);
  const related = relatedAnswers(answer, answers);
  const canonicalPath = answerPath(answer);
  const title = `${answer.question} | Word Oasis`;
  const description = metaDescription(answer);
  const usedTopics = new Set();

  return pageShell({
    title,
    description,
    canonicalPath,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
          "@type": "Question",
          name: answer.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${answer.shortAnswer} ${answer.longAnswer} (${answer.scriptures.join(", ")})`
          }
        }
      }
    ],
    body: `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/answers/">Answers</a> / ${escapeHtml(answer.question)}</nav>
          <p class="eyebrow">${escapeHtml(answer.category)}</p>
          <h1>${escapeHtml(answer.question)}</h1>
          <p class="page-intro">${escapeHtml(answer.shortAnswer)}</p>
        </div>
      </section>
      <section class="section section-answer">
        <div class="container answer-page-layout">
          <article class="answer-page-card" data-answer-page data-answer-id="${escapeAttribute(answer.id)}" data-answer-category="${escapeAttribute(answer.category)}">
            <div class="answer-tags">${tagsHtml(answer.topics)}</div>
            <h2>Biblical explanation</h2>
            <p class="lead-answer">${renderAnswerText(answer.longAnswer, answer.topics, usedTopics)}</p>
            <div class="answer-key-takeaway">
              <p class="eyebrow">Key takeaway</p>
              <p>${renderAnswerText(takeaway, answer.topics, usedTopics)}</p>
            </div>
            <h2>Bible references</h2>
            <div class="scriptures">${scripturesHtml(answer.scriptures)}</div>
            <div class="answer-share-panel" data-answer-share>
              <div class="share-action-group">
                <span class="promise-share-label">Share this answer</span>
                <div class="share-mode-selector" role="group" aria-label="Choose answer sharing format">
                  <button type="button" data-answer-share-mode="text" class="active" aria-pressed="true">Text</button>
                  <button type="button" data-answer-share-mode="graphic" aria-pressed="false">Graphic</button>
                </div>
                <div class="promise-share-buttons">
                  <div class="share-social-icons">
                    <button type="button" class="promise-social-share promise-social-facebook" data-answer-share-platform="Facebook" aria-label="Share answer on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21.9V13.9h2.7l.5-3.1h-3.2V8.8c0-.9.3-1.7 1.6-1.7h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.4H7.6v3.1h2.8v8h3.1Z"/></svg></button>
                    <button type="button" class="promise-social-share promise-social-x" data-answer-share-platform="X" aria-label="Share answer on X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.2 4.4h2.6l-5.7 6.5 6.7 8.8h-5.2l-4.1-5.4-4.7 5.4H4.2l6.1-7-6.4-8.3h5.4l3.7 4.9 4.2-4.9Zm-.9 13.8h1.4L8.5 5.8H7l9.3 12.4Z"/></svg></button>
                    <button type="button" class="promise-social-share promise-social-whatsapp" data-answer-share-platform="WhatsApp" aria-label="Share answer on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.4a8.5 8.5 0 0 0-7.3 12.9L3.6 20.6l4.4-1.1A8.5 8.5 0 1 0 12 3.4Zm0 1.7a6.8 6.8 0 1 1-3.5 12.7l-.3-.2-2.6.7.7-2.5-.2-.3A6.8 6.8 0 0 1 12 5.1Zm3.9 8.5c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1l-.6.8c-.1.1-.2.1-.4 0a5.6 5.6 0 0 1-2.8-2.4c-.1-.2 0-.3.1-.4l.3-.4.2-.4v-.3l-.7-1.6c-.2-.4-.3-.3-.5-.3h-.4a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 1 2.3 9.2 9.2 0 0 0 3.6 3.1c1.3.5 1.8.5 2.4.4a2 2 0 0 0 1.4-1c.2-.5.2-.9.1-1l-.4-.4Z"/></svg></button>
                    <button type="button" class="promise-social-share promise-social-instagram" data-answer-share-platform="Instagram" aria-label="Share answer on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm10.1 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg></button>
                    <button type="button" class="promise-social-share answer-social-sms" data-answer-share-platform="Text" aria-label="Share answer by text"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.5L12 21l4.5-4H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg></button>
                  </div>
                  <div class="promise-share-primary">
                    <button type="button" class="promise-share" data-answer-share-primary>Share</button>
                    <button type="button" class="promise-copy-button" data-answer-share-secondary>Copy</button>
                  </div>
                </div>
              </div>
              <p class="answer-share-status" data-answer-share-status role="status" aria-live="polite"></p>
            </div>
            <div class="answer-editorial-note">
              <strong>Editorial note</strong>
              <p>This answer is presented with its supporting references so you can examine each passage in context. If you notice an error or unclear statement, please <a href="/?inquiry=general#ask">suggest a correction</a>.</p>
            </div>
          </article>
          <aside class="related-card" aria-label="Related answers">
            <h2>Related answers</h2>
            <ul>
              ${related.map((item) => `<li><a href="${answerPath(item)}">${escapeHtml(item.question)}</a></li>`).join("")}
            </ul>
          </aside>
        </div>
      </section>
    </main>`
  });
}

function answersIndexPage(answers) {
  const topics = Array.from(new Set(answers.flatMap((answer) => answer.topics))).sort();

  return pageShell({
    title: "Bible Questions and Answers | Word Oasis",
    description: "Browse every Word Oasis Bible answer by topic and category, with Scripture references for further study.",
    canonicalPath: "/answers/",
    ogType: "website",
    body: `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / Answers</nav>
          <p class="eyebrow">All answers</p>
          <h1>Bible questions and answers</h1>
          <p class="page-intro">Browse the full Word Oasis library of Scripture-based answers for questions about faith, salvation, prayer, prophecy, Christian living, and more.</p>
          <div class="page-hero-stats" aria-label="Answer library overview">
            <span><strong>${answers.length}</strong> answers</span>
            <span><strong>${topics.length}</strong> topics</span>
            <span>Scripture references included</span>
          </div>
        </div>
      </section>
      <section class="section answers-directory-section">
        <div class="container">
          <div class="answers-directory-toolbar" aria-labelledby="answers-topic-filter-heading">
            <div class="answers-directory-heading">
              <p class="eyebrow">Explore the library</p>
              <h2 id="answers-topic-filter-heading">Find the answer you need</h2>
              <p>Search by question or choose a topic to narrow the library.</p>
            </div>
            <div class="answers-directory-controls">
              <div class="answers-search-filter">
                <label for="answers-search-input">Search answers</label>
                <input id="answers-search-input" type="search" data-answer-search placeholder="Try: prayer, anxiety, salvation..." autocomplete="off">
              </div>
              <div class="answers-topic-filter">
                <label for="answers-topic-select">Topic</label>
                <select id="answers-topic-select" data-answer-topic-select>
                  <option value="all">All topics</option>
                  ${topics.map((topic) => `<option value="${slugify(topic)}">${escapeHtml(topic)}</option>`).join("")}
                </select>
              </div>
            </div>
            <p class="answers-directory-count" data-answer-topic-count aria-live="polite">Showing ${answers.length} answers</p>
          </div>
          <div class="answers-directory" id="all-answers" data-answers-directory>
            ${answers
              .map((answer) => {
                const answerTopicSlugs = answer.topics.map(slugify);
                return `
                  <article class="directory-answer-card" data-answer-topics="${answerTopicSlugs.join(" ")}" data-answer-search-text="${escapeAttribute(`${answer.question} ${answer.shortAnswer} ${answer.topics.join(" ")} ${answer.keywords.join(" ")}`.toLowerCase())}">
                    <span class="directory-answer-meta">${escapeHtml(answer.topics[0])}</span>
                    <h2><a class="directory-answer-title" href="${answerPath(answer)}">${escapeHtml(answer.question)}</a></h2>
                    <p>${escapeHtml(answer.shortAnswer)}</p>
                    <div class="directory-answer-topics" aria-label="Related topics">
                      ${answer.topics
                        .slice(0, 3)
                        .map((topic) => `<a href="#topic-${slugify(topic)}" data-answer-topic-filter="${slugify(topic)}">${escapeHtml(topic)}</a>`)
                        .join("")}
                    </div>
                    <a class="directory-read-more" href="${answerPath(answer)}" aria-label="Read the full answer to ${escapeAttribute(answer.question)}">Read the full answer</a>
                  </article>
                `;
              })
              .join("")}
          </div>
          <div class="answers-directory-empty" data-answer-empty hidden>
            <h2>No matching answers</h2>
            <p>Try a broader search or choose another topic.</p>
            <button type="button" data-answer-clear>Clear filters</button>
          </div>
        </div>
      </section>
    </main>
    <script>
      (() => {
        const topicSelect = document.querySelector("[data-answer-topic-select]");
        const topicLinks = Array.from(document.querySelectorAll(".directory-answer-topics [data-answer-topic-filter]"));
        const cards = Array.from(document.querySelectorAll("[data-answer-topics]"));
        const count = document.querySelector("[data-answer-topic-count]");
        const searchInput = document.querySelector("[data-answer-search]");
        const emptyState = document.querySelector("[data-answer-empty]");
        const clearButton = document.querySelector("[data-answer-clear]");

        if (!topicSelect || !cards.length) return;

        const applyFilter = (topic, query = searchInput ? searchInput.value : "") => {
          const normalizedQuery = query.trim().toLowerCase();
          topicSelect.value = topic;

          topicLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.answerTopicFilter === topic);
          });

          let visibleCount = 0;
          cards.forEach((card) => {
            const matchesTopic = topic === "all" || card.dataset.answerTopics.split(" ").includes(topic);
            const matchesQuery = !normalizedQuery || card.dataset.answerSearchText.includes(normalizedQuery);
            const isVisible = matchesTopic && matchesQuery;
            card.hidden = !isVisible;
            if (isVisible) visibleCount += 1;
          });

          if (count) {
            count.textContent = "Showing " + visibleCount + " answer" + (visibleCount === 1 ? "" : "s");
          }
          if (emptyState) {
            emptyState.hidden = visibleCount !== 0;
          }
        };

        topicSelect.addEventListener("change", () => {
          const topic = topicSelect.value;
          applyFilter(topic);
          history.replaceState(null, "", topic === "all" ? "#all-answers" : "#topic-" + topic);
        });

        if (searchInput) {
          searchInput.addEventListener("input", () => applyFilter(topicSelect.value));
        }

        if (clearButton) {
          clearButton.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            applyFilter("all", "");
            history.replaceState(null, "", "#all-answers");
            if (searchInput) searchInput.focus();
          });
        }

        topicLinks.forEach((link) => {
          link.addEventListener("click", (event) => {
            const topic = link.dataset.answerTopicFilter;
            if (!topic) return;
            event.preventDefault();
            applyFilter(topic);
            history.replaceState(null, "", "#topic-" + topic);
            document.querySelector(".answers-directory-toolbar").scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });

        const initialTopic = location.hash.replace("#topic-", "");
        if (initialTopic && cards.some((card) => card.dataset.answerTopics.split(" ").includes(initialTopic))) {
          applyFilter(initialTopic);
        }
      })();
    </script>`
  });
}

function topicsIndexPage(answers, topics, topicIcons, topicDescriptions) {
  return pageShell({
    title: "Bible Topics | Word Oasis",
    description: "Explore Word Oasis Bible answers by topic, including salvation, prayer, prophecy, Sabbath, Christian living, comfort, and more.",
    canonicalPath: "/topics/",
    ogType: "website",
    body: `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / Topics</nav>
          <p class="eyebrow">Topics</p>
          <h1>Explore Bible answers by topic</h1>
          <p class="page-intro">Explore ${answers.length} Bible answers organized by topic, with clear explanations and Scripture passages for deeper study.</p>
        </div>
      </section>
      <section class="section section-soft">
        <div class="container">
          <div class="topic-grid">
          ${topics
            .map((topic) => {
              const count = answers.filter((answer) => answer.topics.includes(topic)).length;
              return `
                <a class="topic-card" href="${topicPath(topic)}">
                  <span class="topic-icon" aria-hidden="true">${topicIconMarkup(topic, topicIcons)}</span>
                  <span class="topic-card-title">${escapeHtml(topic)}</span>
                  <small>${escapeHtml(topicDescriptions[topic] || "Explore Scripture-based answers about this topic")}</small>
                  <strong class="topic-card-count">${count}</strong>
                </a>
              `;
            })
            .join("")}
          </div>
        </div>
      </section>
    </main>`
  });
}

function topicPage(topic, answers, topicIcons, topicDescriptions) {
  const topicAnswers = answers.filter((answer) => answer.topics.includes(topic));

  return pageShell({
    title: `${topic} Bible Answers | Word Oasis`,
    description: `Browse Scripture-based answers about ${topic.toLowerCase()} from Word Oasis, with Bible references for further study.`,
    canonicalPath: topicPath(topic),
    ogType: "website",
    body: `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/topics/">Topics</a> / ${escapeHtml(topic)}</nav>
          <div class="topic-page-heading">
            <span class="topic-page-icon" aria-hidden="true">${topicIconMarkup(topic, topicIcons)}</span>
            <div>
              <p class="eyebrow">Topic</p>
              <h1>${escapeHtml(topic)} Bible answers</h1>
              <p class="page-intro">${escapeHtml(topicDescriptions[topic] || `Read clear Bible answers related to ${topic.toLowerCase()}`)}. Explore ${topicAnswers.length} Scripture-based answer${topicAnswers.length === 1 ? "" : "s"}.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-soft">
        <div class="container">
          <div class="topic-answer-grid">
            ${topicAnswers
              .map(
                (answer) => `
                  <article class="directory-answer-card">
                    <span class="directory-answer-meta">${escapeHtml(topic)}</span>
                    <h2><a class="directory-answer-title" href="${answerPath(answer)}">${escapeHtml(answer.question)}</a></h2>
                    <p>${escapeHtml(answer.shortAnswer)}</p>
                    <a class="directory-read-more" href="${answerPath(answer)}" aria-label="Read the full answer to ${escapeAttribute(answer.question)}">Read the full answer</a>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    </main>`
  });
}

function writePage(relativePath, content) {
  const outputPath = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content.replace(/[ \t]+$/gm, ""), "utf8");
}

function resetGeneratedDirectory(relativePath) {
  fs.rmSync(path.join(ROOT, relativePath), {
    recursive: true,
    force: true,
    maxRetries: 5,
    retryDelay: 100
  });
}

function writeSitemap(answers, topics) {
  const entries = [
    { loc: "/", priority: "1.0" },
    { loc: "/answers/", priority: "0.9" },
    { loc: "/bible/", priority: "0.9" },
    { loc: "/topics/", priority: "0.8" },
    ...answers.map((answer) => ({ loc: answerPath(answer), priority: "0.8" })),
    ...topics.map((topic) => ({ loc: topicPath(topic), priority: "0.7" }))
  ]
    .map(
      ({ loc, priority }) => `  <url>
    <loc>${absoluteUrl(loc)}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  fs.writeFileSync(
    path.join(ROOT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`,
    "utf8"
  );
}

function writeStaticPages(answers, perspectivesByAnswer, topicIcons, topicDescriptions) {
  const topics = Array.from(new Set(answers.flatMap((answer) => answer.topics))).sort();

  resetGeneratedDirectory("answers");
  resetGeneratedDirectory("topics");

  writePage("answers/index.html", answersIndexPage(answers));
  writePage("topics/index.html", topicsIndexPage(answers, topics, topicIcons, topicDescriptions));

  answers.forEach((answer) => {
    writePage(path.join(answerPath(answer).slice(1), "index.html"), answerPage(answer, answers, perspectivesByAnswer));
  });

  topics.forEach((topic) => {
    writePage(path.join(topicPath(topic).slice(1), "index.html"), topicPage(topic, answers, topicIcons, topicDescriptions));
  });

  writeSitemap(answers, topics);
  return topics;
}

function main() {
  const html = fs.readFileSync(INDEX_PATH, "utf8");
  const scriptSource = fs.readFileSync(SCRIPT_PATH, "utf8");
  const answers = extractAnswersData(scriptSource);
  const perspectivesByAnswer = extractConstData(scriptSource, "perspectivesByAnswer");
  const topicIcons = extractConstData(scriptSource, "topicIcons");
  const topicDescriptions = extractConstData(scriptSource, "topicDescriptions");

  const { topicGridHtml, answersListHtml, resultMetaText, spotlightBodyHtml, questionTopicOptions } = renderWithJsdom(
    html,
    scriptSource
  );

  let output = html;
  output = injectContainerContent(output, "topic-grid", "prerender:topic-grid", `\n${topicGridHtml}\n          `);
  output = injectContainerContent(output, "answers-list", "prerender:answers-list", `\n${answersListHtml}\n              `);
  output = injectContainerContent(output, "result-meta", "prerender:result-meta", resultMetaText);
  output = injectContainerContent(output, "spotlight-body", "prerender:spotlight-body", `\n              ${spotlightBodyHtml}\n              `);
  output = injectSelectOptions(output, "prerender:question-topic", questionTopicOptions);
  output = injectHomepageContentJsonLd(output, buildTopicListJsonLd(answers));
  output = injectHomepageAnswerCount(output, answers.length);

  fs.writeFileSync(INDEX_PATH, output, "utf8");
  const topics = writeStaticPages(
    answers,
    perspectivesByAnswer,
    topicIcons,
    topicDescriptions
  );
  console.log(`Prerendered ${answers.length} answers, ${topics.length} topics, and sitemap.xml`);
}

main();
