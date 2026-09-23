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
const BIBLE_INDEX_PATH = path.join(ROOT, "bible", "index.html");
const BIBLE_READER_PATH = path.join(ROOT, "bible-reader.js");
const SITE_URL = "https://wordoasis.org";
const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbyp2hNuPJYtX-CGnZSB_Tf-MEbTUrmSkEqwNn2gjtxqF4cv16pMCDMmV3voJeJAFhIYBQ/exec";
const BIBLE_STUDY_URL = "https://www.amazingbiblestudies.com/";
const SITE_PUBLISHED_DATE = "2026-09-13";
const BUILD_DATE = new Date().toISOString().slice(0, 10);
const STYLES_VERSION = "20261144";
const EDITORIAL_TEAM_NAME = "Word Oasis Editorial Team";
const EDITORIAL_TEAM_ID = `${SITE_URL}/about/#editorial-team`;

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

function extractArrayData(source, constName) {
  const start = source.indexOf(`const ${constName} = [`);
  if (start === -1) {
    throw new Error(`Could not find \`const ${constName} = [\``);
  }
  const arrayStart = source.indexOf("[", start);
  let depth = 0;
  let end = -1;
  for (let i = arrayStart; i < source.length; i += 1) {
    const char = source[i];
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
    throw new Error(`Could not find end of ${constName} array`);
  }
  // eslint-disable-next-line no-eval
  return eval(source.slice(arrayStart, end));
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

function bibleChapterPath(book, chapter) {
  return `/bible/${slugify(book.name)}-${chapter}/`;
}

function topicIconMarkup(topic, topicIcons) {
  const content = topicIcons[topic] || topicIcons.Faith;
  return `<svg viewBox="0 0 24 24" focusable="false">${content}</svg>`;
}

function absoluteUrl(urlPath) {
  return `${SITE_URL}${urlPath}`;
}

function siteOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Word Oasis",
    alternateName: ["WordOasis", "Word Oasis Bible Answers"],
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/apple-touch-icon-512.png`,
      width: 512,
      height: 512
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "corrections and reader questions",
      email: "wordoasis7@gmail.com",
      url: `${SITE_URL}/about/#contact`
    },
    description:
      "Word Oasis publishes clear, Scripture-based Bible answers, Bible studies, quizzes, and topic guides for everyday questions about faith, salvation, prayer, prophecy, Sabbath, health, forgiveness, and Christian living.",
    publishingPrinciples: `${SITE_URL}/about/#editorial-policy`
  };
}

function editorialTeamJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": EDITORIAL_TEAM_ID,
    name: EDITORIAL_TEAM_NAME,
    url: `${SITE_URL}/about/#editorial-team`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    publishingPrinciples: `${SITE_URL}/about/#editorial-policy`
  };
}

function siteWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Word Oasis",
    alternateName: "Word Oasis Bible Answers",
    url: `${SITE_URL}/`,
    description: "Clear Bible answers grounded in Scripture, with references for deeper study.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
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
        : canonicalPath.startsWith("/about/")
          ? "about"
          : "home";
  const currentPage = (section) => activeSection === section ? ' aria-current="page"' : "";
  const jsonLd = [siteOrganizationJsonLd(), siteWebSiteJsonLd(), editorialTeamJsonLd(), ...structuredData]
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
    <script src="/tracking-preferences.js?v=20261086"></script>
    <script>
      if (!window.WORD_OASIS_TRACKING_DISABLED) {
        const analyticsScript = document.createElement("script");
        analyticsScript.async = true;
        analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-5WRW513RFW";
        document.head.appendChild(analyticsScript);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments);};
        window.gtag("js", new Date());
        window.gtag("config", "G-5WRW513RFW");
      }
    </script>
    <script>
      window.WORD_OASIS_FORM_ENDPOINT = ${JSON.stringify(FORM_ENDPOINT)};
      window.WORD_OASIS_BIBLE_STUDY_URL = ${JSON.stringify(BIBLE_STUDY_URL)};
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
    <link rel="stylesheet" href="/styles.css?v=${STYLES_VERSION}">
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
          <li><a href="/about/"${currentPage("about")}>About</a></li>
          <li><a href="/answers/"${currentPage("answers")}>Answers</a></li>
          <li><a href="/topics/"${currentPage("topics")}>Topics</a></li>
          <li class="nav-item-dropdown">
            <button type="button" class="nav-dropdown-toggle" aria-expanded="false" aria-controls="nav-learn-menu">
              Learn
              <svg class="nav-dropdown-caret" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <ul class="nav-dropdown-menu" id="nav-learn-menu">
              <li><a href="/bible/"${currentPage("bible")}><svg class="nav-dropdown-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 3.75A.75.75 0 0 1 .75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.495 4.495 0 0 1 15.75 3h7.5a.75.75 0 0 1 .75.75v15.063a.752.752 0 0 1-.755.75l-7.682-.052a3 3 0 0 0-2.142.878l-.89.891a.75.75 0 0 1-1.061 0l-.902-.901a2.996 2.996 0 0 0-2.121-.879H.75a.75.75 0 0 1-.75-.75Zm12.75 15.232a4.503 4.503 0 0 1 2.823-.971l6.927.047V4.5h-6.75a3 3 0 0 0-3 3ZM11.247 7.497a3 3 0 0 0-3-2.997H1.5V18h6.947c1.018 0 2.006.346 2.803.98Z"/></svg>Bible</a></li>
              <li><a href="/studies/"${currentPage("studies")}><svg class="nav-dropdown-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.292 2.06v-.001l11.25 4.75a.749.749 0 0 1 0 1.382L19 10.108V15a.75.75 0 0 1-.11.391h-.001a2.84 2.84 0 0 1-.392.482c-.249.256-.625.58-1.163.896-1.08.638-2.776 1.23-5.334 1.23-.673 0-1.286-.041-1.846-.113a.75.75 0 0 1 .192-1.487c.492.063 1.042.1 1.654.1 2.317 0 3.746-.533 4.572-1.021.31-.178.596-.397.849-.65l.079-.085V10.74l-5.208 2.2a.75.75 0 0 1-.584 0L5.75 10.424v3.17c.502.129.96.391 1.327.758.579.578.923 1.41.923 2.428v4.5a.761.761 0 0 1-.345.634 2.157 2.157 0 0 1-.21.117 3.923 3.923 0 0 1-.52.213A6.121 6.121 0 0 1 5 22.532a6.092 6.092 0 0 1-1.925-.288 4.065 4.065 0 0 1-.52-.213 1.816 1.816 0 0 1-.22-.124.757.757 0 0 1-.335-.624v-4.5c0-1.02.344-1.85.923-2.43a2.904 2.904 0 0 1 1.327-.757V9.793L.458 8.19a.75.75 0 0 1 0-1.38l11.25-4.75a.75.75 0 0 1 .584 0ZM12 11.436 21.322 7.5 12 3.564 2.678 7.5ZM5 15c-.377 0-.745.141-1.017.413-.265.265-.483.7-.483 1.368v4.022c.299.105.797.228 1.5.228s1.201-.123 1.5-.228V16.78c0-.669-.218-1.103-.483-1.368A1.433 1.433 0 0 0 5 15Z"/></svg>Bible Studies</a></li>
              <li><a href="/quizzes/"${currentPage("quizzes")}><svg class="nav-dropdown-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"/><path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"/></svg>Quizzes</a></li>
            </ul>
          </li>
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
              <li><a href="/quizzes/">Bible quizzes</a></li>
              <li><a href="/studies/">Bible studies</a></li>
              <li><a href="/about/">About Word Oasis</a></li>
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
              <li><a href="/about/#contact">Email us</a></li>
              <li><a href="#top">Back to top</a></li>
            </ul>
          </nav>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">&copy; ${new Date().getFullYear()} Word Oasis. All rights reserved.</p>
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
    <script src="/verse-modal.js?v=20261125"></script>
    <script src="/bible-study-referral.js?v=20261084"></script>
    <script src="/site-analytics.js?v=20261085"></script>
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
  const primaryTopic = answer.topics[0] || answer.category;

  return pageShell({
    title,
    description,
    canonicalPath,
    structuredData: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Bible Questions and Answers", path: "/answers/" },
        { name: answer.question, path: canonicalPath }
      ]),
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        "@id": `${absoluteUrl(canonicalPath)}#qa`,
        name: answer.question,
        headline: answer.question,
        description,
        url: absoluteUrl(canonicalPath),
        datePublished: SITE_PUBLISHED_DATE,
        dateModified: BUILD_DATE,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: { "@id": EDITORIAL_TEAM_ID },
        reviewedBy: { "@id": EDITORIAL_TEAM_ID },
        publisher: { "@id": `${SITE_URL}/#organization` },
        accountablePerson: { "@id": EDITORIAL_TEAM_ID },
        publishingPrinciples: `${SITE_URL}/about/#editorial-policy`,
        about: answer.topics.map((topic) => ({ "@type": "Thing", name: topic })),
        keywords: Array.from(new Set([primaryTopic, answer.category, ...(answer.keywords || [])])).join(", "),
        mainEntity: {
          "@type": "Question",
          name: answer.question,
          dateCreated: SITE_PUBLISHED_DATE,
          author: { "@id": EDITORIAL_TEAM_ID },
          about: primaryTopic,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${answer.shortAnswer} ${answer.longAnswer} (${answer.scriptures.join(", ")})`,
            dateCreated: SITE_PUBLISHED_DATE,
            dateModified: BUILD_DATE,
            url: absoluteUrl(canonicalPath),
            author: { "@id": EDITORIAL_TEAM_ID },
            reviewedBy: { "@id": EDITORIAL_TEAM_ID }
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
          <p class="answer-date-meta">Published ${SITE_PUBLISHED_DATE} · Updated ${BUILD_DATE}</p>
          <p class="answer-review-meta">Written and reviewed by the <a href="/about/#editorial-team">${EDITORIAL_TEAM_NAME}</a>. <a href="/about/#editorial-policy">Read our editorial policy</a>.</p>
          <div class="answer-public-stats" data-answer-public-stats hidden aria-label="Article readership">
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
                <circle cx="12" cy="12" r="2.5"></circle>
              </svg>
              <strong data-answer-view-count>0</strong> views
            </span>
            <span><strong data-answer-reader-count>0</strong> readers</span>
          </div>
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
            <details class="bible-study-invitation" data-bible-study>
              <summary>
                <span class="bible-study-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3H6.5A2.5 2.5 0 0 0 4 20.5Z"></path>
                    <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H14v18a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 2.5 2.5Z"></path>
                  </svg>
                </span>
                <span>
                  <strong>Want to go deeper into God's Word?</strong>
                  <small>Sign up for a free online Bible study course</small>
                </span>
                <span class="bible-study-summary-action">
                  <span class="bible-study-action-closed">Start free</span>
                  <span class="bible-study-action-open">Close</span>
                </span>
              </summary>
              <div class="bible-study-content">
                <p>Grow in your understanding of Scripture through the free Amazing Facts Bible Study Guides. Tell us a little about yourself, then continue to the official Bible School to enroll.</p>
                <form class="bible-study-form" data-bible-study-form>
                  <div class="bible-study-form-grid">
                    <label>
                      <span>Name</span>
                      <input type="text" name="name" autocomplete="name" maxlength="80" required>
                    </label>
                    <label>
                      <span>Email</span>
                      <input type="email" name="email" autocomplete="email" maxlength="120" required>
                    </label>
                    <label>
                      <span>Age range <small>(optional)</small></span>
                      <select name="ageRange">
                        <option value="">Prefer not to say</option>
                        <option value="Under 18">Under 18</option>
                        <option value="18-24">18–24</option>
                        <option value="25-34">25–34</option>
                        <option value="35-44">35–44</option>
                        <option value="45-54">45–54</option>
                        <option value="55-64">55–64</option>
                        <option value="65+">65+</option>
                      </select>
                    </label>
                    <label>
                      <span>Gender <small>(optional)</small></span>
                      <select name="gender">
                        <option value="">Prefer not to say</option>
                        <option value="Woman">Woman</option>
                        <option value="Man">Man</option>
                        <option value="Self-described">Self-described</option>
                      </select>
                    </label>
                    <label>
                      <span>Country <small>(optional)</small></span>
                      <input type="text" name="country" autocomplete="country-name" maxlength="80">
                    </label>
                    <label>
                      <span>Faith background <small>(optional)</small></span>
                      <select name="faith">
                        <option value="">Prefer not to say</option>
                        <option value="Christian">Christian</option>
                        <option value="Another faith">Another faith</option>
                        <option value="No religious background">No religious background</option>
                        <option value="Exploring">Exploring faith</option>
                      </select>
                    </label>
                  </div>
                  <label class="bible-study-consent">
                    <input type="checkbox" name="consent" required>
                    <span>I agree that Word Oasis may store these details to track my Bible-study referral. Amazing Facts separately handles enrollment on its website.</span>
                  </label>
                  <button class="bible-study-submit" type="submit">
                    Continue to free Bible studies
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                  <p class="bible-study-disclosure">You will leave Word Oasis and continue at Amazing Bible Studies. Optional demographic answers are used only for aggregate referral insights.</p>
                  <p class="bible-study-status" data-bible-study-status role="status" aria-live="polite"></p>
                  <a class="bible-study-direct-link" data-bible-study-direct-link href="${BIBLE_STUDY_URL}" rel="noopener">Continue without sharing details</a>
                </form>
              </div>
            </details>
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
              <p>This answer is written and reviewed by the Word Oasis Editorial Team, and is presented with supporting references so you can examine each passage in context. If you notice an error or unclear statement, please <a href="/about/#contact">suggest a correction</a>.</p>
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
    structuredData: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Bible Questions and Answers", path: "/answers/" }
      ]),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/answers/#collection`,
        name: "Bible Questions and Answers",
        description: "Browse every Word Oasis Bible answer by topic and category, with Scripture references for further study.",
        url: `${SITE_URL}/answers/`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        datePublished: SITE_PUBLISHED_DATE,
        dateModified: BUILD_DATE,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: answers.length,
          itemListElement: answers.slice(0, 50).map((answer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: answer.question,
            url: absoluteUrl(answerPath(answer))
          }))
        }
      }
    ],
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
            <span data-library-readership hidden><strong data-total-readers>0</strong> readers · <strong data-total-views>0</strong> article views</span>
          </div>
        </div>
      </section>
      <section class="section most-read-section" data-most-read-section hidden>
        <div class="container">
          <div class="section-heading most-read-heading">
            <p class="eyebrow">Popular with readers</p>
            <h2>Most read Bible answers</h2>
            <p>See which Scripture-based answers visitors are exploring most.</p>
          </div>
          <div class="most-read-grid" data-most-read-list></div>
          <p class="public-stats-note">Readership totals are anonymous and approximate. Repeat visits may be counted as additional views.</p>
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
    structuredData: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Bible Topics", path: "/topics/" }
      ]),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/topics/#collection`,
        name: "Bible Topics",
        description: "Explore Word Oasis Bible answers by topic, including salvation, prayer, prophecy, Sabbath, Christian living, comfort, and more.",
        url: `${SITE_URL}/topics/`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        datePublished: SITE_PUBLISHED_DATE,
        dateModified: BUILD_DATE,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: topics.length,
          itemListElement: topics.map((topic, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: topic,
            url: absoluteUrl(topicPath(topic))
          }))
        }
      }
    ],
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
    structuredData: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Bible Topics", path: "/topics/" },
        { name: `${topic} Bible Answers`, path: topicPath(topic) }
      ]),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${absoluteUrl(topicPath(topic))}#collection`,
        name: `${topic} Bible Answers`,
        description: `Browse Scripture-based answers about ${topic.toLowerCase()} from Word Oasis, with Bible references for further study.`,
        url: absoluteUrl(topicPath(topic)),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        datePublished: SITE_PUBLISHED_DATE,
        dateModified: BUILD_DATE,
        about: { "@type": "Thing", name: topic },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: topicAnswers.length,
          itemListElement: topicAnswers.map((answer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: answer.question,
            url: absoluteUrl(answerPath(answer))
          }))
        }
      }
    ],
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

function aboutPage() {
  return pageShell({
    title: "About Word Oasis | Editorial Policy and Bible Answer Review",
    description: "Learn about Word Oasis, our Scripture-first editorial process, correction policy, beliefs, and how Bible answers are written and reviewed.",
    canonicalPath: "/about/",
    ogType: "website",
    structuredData: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About Word Oasis", path: "/about/" }
      ]),
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about/#about-page`,
        name: "About Word Oasis",
        description: "Word Oasis publishes clear, Scripture-based Bible answers, studies, quizzes, and Bible reading tools.",
        url: `${SITE_URL}/about/`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        reviewedBy: { "@id": EDITORIAL_TEAM_ID },
        datePublished: SITE_PUBLISHED_DATE,
        dateModified: BUILD_DATE,
        mainEntity: {
          "@id": `${SITE_URL}/#organization`
        }
      }
    ],
    body: `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / About Word Oasis</nav>
          <p class="eyebrow">About Word Oasis</p>
          <h1>Clear Bible answers with an open editorial process</h1>
          <p class="page-intro">Word Oasis exists to help people understand Scripture, examine Bible passages in context, and apply biblical truth with clarity, humility, and hope.</p>
        </div>
      </section>
      <section class="section section-soft">
        <div class="container trust-page-layout">
          <article class="trust-page-card">
            <h2>Our mission</h2>
            <p>Word Oasis points readers back to the Bible. Every answer is designed to give a direct response, show the supporting passages, and encourage personal study rather than asking readers to accept a claim without checking Scripture.</p>
            <p>We write for people asking honest questions about God, salvation, prayer, suffering, prophecy, Christian living, and the hope found in Jesus Christ.</p>
          </article>

          <article class="trust-page-card" id="editorial-team">
            <h2>Who writes and reviews the answers?</h2>
            <p>Word Oasis content is written and reviewed by the <strong>Word Oasis Editorial Team</strong>. The team reviews answers for biblical faithfulness, clarity, tone, and whether the cited passages support the answer being given.</p>
            <p>Because Word Oasis is built as a Scripture study resource, our authority claim is not personal celebrity. Our aim is transparency: each answer should provide enough references for readers to examine the reasoning for themselves.</p>
          </article>

          <article class="trust-page-card" id="editorial-policy">
            <h2>Editorial policy</h2>
            <ol class="trust-policy-list">
              <li><strong>Scripture first.</strong> Answers should be anchored in Bible passages and should not treat opinion as equal to Scripture.</li>
              <li><strong>Context matters.</strong> We aim to cite passages in a way that respects the surrounding chapter, book, and biblical theme.</li>
              <li><strong>Clear language.</strong> We avoid needlessly technical wording and write for readers who may be new to the Bible.</li>
              <li><strong>Practical application.</strong> Where appropriate, answers explain how biblical truth connects to daily life.</li>
              <li><strong>Corrections welcome.</strong> If an answer is unclear, incomplete, or inaccurate, readers can contact us and request review.</li>
            </ol>
          </article>

          <article class="trust-page-card">
            <h2>What we believe</h2>
            <p>Word Oasis is guided by historic biblical Christianity: the Bible is God’s inspired Word, Jesus Christ is the divine Son of God and Savior, salvation is God’s gift of grace received through faith, and genuine faith bears fruit in a transformed life.</p>
            <p>We also emphasize the authority of Scripture, the hope of Christ’s return, the resurrection, prayer, obedience flowing from love, and the restoration of all things in God’s kingdom.</p>
          </article>

          <article class="trust-page-card" id="contact">
            <h2>Contact and corrections</h2>
            <p>If you find an error, unclear wording, a broken link, or a Bible reference that should be reconsidered, please contact Word Oasis. Correction requests are reviewed and, when appropriate, reflected in the updated date shown on answer pages.</p>
            <p><a class="text-link" href="/?inquiry=general#ask">Send a correction or question <span aria-hidden="true">→</span></a></p>
            <p class="trust-small-note">Email contact: <a href="mailto:wordoasis7@gmail.com">wordoasis7@gmail.com</a></p>
          </article>
        </div>
      </section>
    </main>`
  });
}

function replaceTagContent(html, regex, replacement, label) {
  if (!regex.test(html)) {
    throw new Error(`Could not update ${label} in Bible chapter template`);
  }
  return html.replace(regex, replacement);
}

function bibleChapterPage(baseHtml, book, chapter) {
  const canonicalPath = bibleChapterPath(book, chapter);
  const canonical = absoluteUrl(canonicalPath);
  const title = `${book.name} ${chapter} | Read the Bible Online | Word Oasis`;
  const description = `Read ${book.name} ${chapter} online in WEB, KJV, or ASV. Copy, share, search, and study this Bible chapter with Word Oasis.`;
  const safeTitle = escapeAttribute(title);
  const safeDescription = escapeAttribute(description);
  const chapterJsonLd = [
    siteOrganizationJsonLd(),
    siteWebSiteJsonLd(),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Read the Bible", path: "/bible/" },
      { name: `${book.name} ${chapter}`, path: canonicalPath }
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Chapter",
      "@id": `${canonical}#chapter`,
      name: `${book.name} ${chapter}`,
      headline: `${book.name} ${chapter}`,
      url: canonical,
      isPartOf: {
        "@type": "Book",
        name: "The Bible",
        url: `${SITE_URL}/bible/`
      },
      inLanguage: "en",
      datePublished: SITE_PUBLISHED_DATE,
      dateModified: BUILD_DATE,
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: [
        { "@type": "Thing", name: "Bible chapter" },
        { "@type": "Thing", name: book.name },
        { "@type": "Thing", name: "Scripture reading" }
      ],
      potentialAction: {
        "@type": "ReadAction",
        target: canonical
      }
    }
  ];

  let html = baseHtml;
  html = replaceTagContent(html, /<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`, "title");
  html = replaceTagContent(
    html,
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${safeDescription}">`,
    "description"
  );
  html = replaceTagContent(
    html,
    /<meta name="keywords" content="[^"]*">/,
    `<meta name="keywords" content="${escapeAttribute(`${book.name} ${chapter}, read ${book.name} ${chapter}, Bible chapter, online Bible, KJV Bible, WEB Bible, ASV Bible`)}">`,
    "keywords"
  );
  html = replaceTagContent(html, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`, "canonical");
  html = replaceTagContent(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${safeTitle}">`, "og:title");
  html = replaceTagContent(html, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${safeDescription}">`, "og:description");
  html = replaceTagContent(html, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonical}">`, "og:url");
  html = replaceTagContent(html, /<meta property="og:image:alt" content="[^"]*">/, `<meta property="og:image:alt" content="${escapeAttribute(`${book.name} ${chapter} on Word Oasis`)}">`, "og:image:alt");
  html = replaceTagContent(html, /<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${safeTitle}">`, "twitter:title");
  html = replaceTagContent(html, /<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${safeDescription}">`, "twitter:description");
  html = replaceTagContent(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${JSON.stringify(chapterJsonLd, null, 2)}\n    </script>`,
    "structured data"
  );
  html = replaceTagContent(
    html,
    /<nav class="breadcrumb" aria-label="Breadcrumb"><a href="\/">Home<\/a> \/ Bible<\/nav>/,
    `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/bible/">Bible</a> / ${escapeHtml(book.name)} ${chapter}</nav>`,
    "chapter breadcrumb"
  );
  html = replaceTagContent(html, /<p class="eyebrow">Read and search<\/p>/, '<p class="eyebrow">Bible chapter</p>', "chapter eyebrow");
  html = replaceTagContent(html, /<h1>Read and search the Bible online\.<\/h1>/, `<h1>Read ${escapeHtml(book.name)} ${chapter}</h1>`, "chapter heading");
  html = replaceTagContent(
    html,
    /<p class="page-intro">\s*Browse all 66 books in WEB, KJV, or ASV, search Scripture across the whole\s*Bible or selected sections, and copy, share, or memorize selected verse ranges\.\s*<\/p>/,
    `<p class="page-intro">Read ${escapeHtml(book.name)} ${chapter} online, choose WEB, KJV, or ASV, search Scripture, select verses, copy passages, and share this Bible chapter.</p>`,
    "chapter intro"
  );
  html = html.replace('<h2 id="bible-reader-title">John 3</h2>', `<h2 id="bible-reader-title">${escapeHtml(book.name)} ${chapter}</h2>`);
  return html;
}

function writeBibleChapterPages(books) {
  const bibleBaseHtml = fs.readFileSync(BIBLE_INDEX_PATH, "utf8");
  const bibleDir = path.join(ROOT, "bible");
  fs.readdirSync(bibleDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .forEach((entry) => fs.rmSync(path.join(bibleDir, entry.name), {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 100
    }));

  let count = 0;
  books.forEach((book) => {
    for (let chapter = 1; chapter <= book.chapters; chapter += 1) {
      writePage(path.join(bibleChapterPath(book, chapter).slice(1), "index.html"), bibleChapterPage(bibleBaseHtml, book, chapter));
      count += 1;
    }
  });
  return count;
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

function extractQuizIds() {
  const src = fs.readFileSync(path.join(ROOT, "quizzes.js"), "utf8");
  const re = /id:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]+)"/g;
  const ids = [];
  let match;
  while ((match = re.exec(src))) ids.push(match[1]);
  return ids;
}

function extractStudyIds() {
  const src = fs.readFileSync(path.join(ROOT, "studies.js"), "utf8");
  const re = /id:\s*"([^"]+)",\s*\n\s*category:\s*"[^"]+",\s*\n\s*categoryLabel:/g;
  const ids = [];
  let match;
  while ((match = re.exec(src))) ids.push(match[1]);
  return ids;
}

function writeSitemap(answers, topics, bibleBooks = []) {
  const quizIds = extractQuizIds();
  const studyIds = extractStudyIds();
  const bibleChapterEntries = bibleBooks.flatMap((book) =>
    Array.from({ length: book.chapters }, (_item, index) => ({
      loc: bibleChapterPath(book, index + 1),
      priority: "0.6"
    }))
  );
  const entries = [
    { loc: "/", priority: "1.0" },
    { loc: "/about/", priority: "0.9" },
    { loc: "/answers/", priority: "0.9" },
    { loc: "/bible/", priority: "0.9" },
    { loc: "/quizzes/", priority: "0.8" },
    { loc: "/studies/", priority: "0.8" },
    { loc: "/topics/", priority: "0.8" },
    ...answers.map((answer) => ({ loc: answerPath(answer), priority: "0.8" })),
    ...topics.map((topic) => ({ loc: topicPath(topic), priority: "0.7" })),
    ...quizIds.map((id) => ({ loc: `/quizzes/${id}/`, priority: "0.7" })),
    ...studyIds.map((id) => ({ loc: `/studies/${id}/`, priority: "0.7" })),
    ...bibleChapterEntries
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

function writeStaticPages(answers, perspectivesByAnswer, topicIcons, topicDescriptions, bibleBooks) {
  const topics = Array.from(new Set(answers.flatMap((answer) => answer.topics))).sort();

  resetGeneratedDirectory("answers");
  resetGeneratedDirectory("topics");

  writePage("answers/index.html", answersIndexPage(answers));
  writePage("topics/index.html", topicsIndexPage(answers, topics, topicIcons, topicDescriptions));
  writePage("about/index.html", aboutPage());

  answers.forEach((answer) => {
    writePage(path.join(answerPath(answer).slice(1), "index.html"), answerPage(answer, answers, perspectivesByAnswer));
  });

  topics.forEach((topic) => {
    writePage(path.join(topicPath(topic).slice(1), "index.html"), topicPage(topic, answers, topicIcons, topicDescriptions));
  });

  const bibleChapterCount = writeBibleChapterPages(bibleBooks);
  writeSitemap(answers, topics, bibleBooks);
  console.log(`Generated ${bibleChapterCount} Bible chapter permalink pages`);
  return topics;
}

function main() {
  const html = fs.readFileSync(INDEX_PATH, "utf8");
  const scriptSource = fs.readFileSync(SCRIPT_PATH, "utf8");
  const bibleReaderSource = fs.readFileSync(BIBLE_READER_PATH, "utf8");
  const answers = extractAnswersData(scriptSource);
  const perspectivesByAnswer = extractConstData(scriptSource, "perspectivesByAnswer");
  const topicIcons = extractConstData(scriptSource, "topicIcons");
  const topicDescriptions = extractConstData(scriptSource, "topicDescriptions");
  const bibleBooks = extractArrayData(bibleReaderSource, "books");

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
    topicDescriptions,
    bibleBooks
  );
  console.log(`Prerendered ${answers.length} answers, ${topics.length} topics, and sitemap.xml`);
}

main();
