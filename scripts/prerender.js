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

function absoluteUrl(urlPath) {
  return `${SITE_URL}${urlPath}`;
}

function buildFaqJsonLd(answers) {
  const mainEntity = answers.map((answer) => ({
    "@type": "Question",
    name: answer.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: `${answer.shortAnswer} (${answer.scriptures.join(", ")})`
    }
  }));

  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity
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

  window.eval(scriptSource);

  const topicFiltersHtml = window.document.querySelector("#topic-filters").innerHTML.trim();
  const answersListHtml = window.document.querySelector("#answers-list").innerHTML.trim();
  const resultMetaText = window.document.querySelector("#result-meta").textContent.trim();
  const questionTopicOptions = Array.from(window.document.querySelectorAll("#question-topic option"))
    .filter((option) => option.value !== "")
    .map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.textContent)}</option>`)
    .join("\n                    ");

  window.close();

  return { topicFiltersHtml, answersListHtml, resultMetaText, questionTopicOptions };
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

function injectFaqJsonLd(html, faqJson) {
  const regex = /<script type="application\/ld\+json" id="faq-jsonld">[\s\S]*?<\/script>/;
  if (!regex.test(html)) {
    throw new Error('Could not locate <script type="application/ld+json" id="faq-jsonld"> in index.html');
  }
  return html.replace(regex, `<script type="application/ld+json" id="faq-jsonld">\n${faqJson}\n    </script>`);
}

function biblicalPerspective(answer, perspectivesByCategory, perspectivesByAnswer) {
  return perspectivesByAnswer[answer.id] || perspectivesByCategory[answer.category];
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
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/word-oasis.svg" type="image/svg+xml">
    <link rel="alternate icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="sitemap" type="application/xml" href="/sitemap.xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css?v=20260915">
    <meta property="og:type" content="${ogType}">
    <meta property="og:title" content="${escapeAttribute(title)}">
    <meta property="og:description" content="${escapeAttribute(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="Word Oasis">
    <meta property="og:image" content="${SITE_URL}/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttribute(title)}">
    <meta name="twitter:description" content="${escapeAttribute(description)}">
    <meta name="twitter:image" content="${SITE_URL}/og-image.png">
    ${jsonLd}
  </head>
  <body>
    <header class="site-header">
      <nav class="nav container" aria-label="Primary navigation">
        <a class="brand" href="/" aria-label="Word Oasis home">
          <img src="/word-oasis.svg" alt="Word Oasis" class="brand-mark">
        </a>
        <ul id="primary-menu" class="nav-links nav-links-static">
          <li><a href="/answers/">Answers</a></li>
          <li><a href="/topics/">Topics</a></li>
          <li><a href="/#categories">Categories</a></li>
          <li><a href="/#study">Study Guide</a></li>
          <li><a href="/#ask">Ask a question</a></li>
        </ul>
      </nav>
    </header>
    ${body}
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="/" aria-label="Word Oasis home">
            <img src="/word-oasis.svg" alt="Word Oasis" class="brand-mark">
          </a>
          <p>Clear Bible answers for real questions about faith, hope, prophecy, and Christian living.</p>
          <p class="footer-copyright">&copy; ${new Date().getFullYear()} Word Oasis. All rights reserved.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href="/answers/">All answers</a>
          <a href="/topics/">Topics</a>
          <a href="/#study">Study Guide</a>
        </div>
        <div>
          <h2>Popular topics</h2>
          <a href="/topics/salvation/">Salvation</a>
          <a href="/topics/prayer/">Prayer</a>
          <a href="/topics/prophecy/">Prophecy</a>
        </div>
      </div>
    </footer>
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
  return scriptures.map((scripture) => `<span>${escapeHtml(scripture)}</span>`).join("");
}

function relatedAnswers(currentAnswer, answers) {
  return answers
    .filter((answer) => answer.id !== currentAnswer.id && answer.topics.some((topic) => currentAnswer.topics.includes(topic)))
    .slice(0, 5);
}

function answerPage(answer, answers, perspectivesByCategory, perspectivesByAnswer) {
  const perspective = biblicalPerspective(answer, perspectivesByCategory, perspectivesByAnswer);
  const related = relatedAnswers(answer, answers);
  const canonicalPath = answerPath(answer);
  const title = `${answer.question} | Word Oasis`;
  const description = metaDescription(answer);

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
            text: `${answer.shortAnswer} ${answer.longAnswer} ${perspective} (${answer.scriptures.join(", ")})`
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
      <section class="section">
        <div class="container answer-page-layout">
          <article class="answer-page-card">
            <div class="answer-tags">${tagsHtml(answer.topics)}</div>
            <p class="lead-answer">${escapeHtml(answer.shortAnswer)}</p>
            <p>${escapeHtml(answer.longAnswer)}</p>
            <p>${escapeHtml(perspective)}</p>
            <h2>Bible references</h2>
            <div class="scriptures">${scripturesHtml(answer.scriptures)}</div>
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
  const grouped = answers.reduce((groups, answer) => {
    if (!groups[answer.category]) groups[answer.category] = [];
    groups[answer.category].push(answer);
    return groups;
  }, {});

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
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="category-grid">
            ${Object.entries(grouped)
              .map(
                ([category, categoryAnswers]) => `
                  <article class="directory-card">
                    <h2>${escapeHtml(category)}</h2>
                    <ul class="answer-list-page">
                      ${categoryAnswers.map((answer) => `<li><a href="${answerPath(answer)}">${escapeHtml(answer.question)}</a></li>`).join("")}
                    </ul>
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

function topicsIndexPage(answers, topics) {
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
          <p class="page-intro">Choose a topic to find related Bible questions, clear answers, and Scripture passages for deeper study.</p>
        </div>
      </section>
      <section class="section">
        <div class="container topic-link-grid">
          ${topics
            .map((topic) => {
              const count = answers.filter((answer) => answer.topics.includes(topic)).length;
              return `
                <a class="directory-card" href="${topicPath(topic)}">
                  <h2>${escapeHtml(topic)}</h2>
                  <p>${count} Bible answer${count === 1 ? "" : "s"}</p>
                </a>
              `;
            })
            .join("")}
        </div>
      </section>
    </main>`
  });
}

function topicPage(topic, answers) {
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
          <p class="eyebrow">Topic</p>
          <h1>${escapeHtml(topic)} Bible answers</h1>
          <p class="page-intro">Read clear Bible answers related to ${escapeHtml(topic.toLowerCase())}, with Scripture references for each question.</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <ul class="answer-list-page">
            ${topicAnswers
              .map(
                (answer) => `
                  <li class="directory-card">
                    <h2><a href="${answerPath(answer)}">${escapeHtml(answer.question)}</a></h2>
                    <p>${escapeHtml(answer.shortAnswer)}</p>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>
      </section>
    </main>`
  });
}

function writePage(relativePath, content) {
  const outputPath = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content, "utf8");
}

function resetGeneratedDirectory(relativePath) {
  fs.rmSync(path.join(ROOT, relativePath), { recursive: true, force: true });
}

function writeSitemap(answers, topics) {
  const entries = [
    { loc: "/", priority: "1.0" },
    { loc: "/answers/", priority: "0.9" },
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

function writeStaticPages(answers, perspectivesByCategory, perspectivesByAnswer) {
  const topics = Array.from(new Set(answers.flatMap((answer) => answer.topics))).sort();

  resetGeneratedDirectory("answers");
  resetGeneratedDirectory("topics");

  writePage("answers/index.html", answersIndexPage(answers));
  writePage("topics/index.html", topicsIndexPage(answers, topics));

  answers.forEach((answer) => {
    writePage(path.join(answerPath(answer).slice(1), "index.html"), answerPage(answer, answers, perspectivesByCategory, perspectivesByAnswer));
  });

  topics.forEach((topic) => {
    writePage(path.join(topicPath(topic).slice(1), "index.html"), topicPage(topic, answers));
  });

  writeSitemap(answers, topics);
  return topics;
}

function main() {
  const html = fs.readFileSync(INDEX_PATH, "utf8");
  const scriptSource = fs.readFileSync(SCRIPT_PATH, "utf8");
  const answers = extractAnswersData(scriptSource);
  const perspectivesByCategory = extractConstData(scriptSource, "perspectivesByCategory");
  const perspectivesByAnswer = extractConstData(scriptSource, "perspectivesByAnswer");

  const { topicFiltersHtml, answersListHtml, resultMetaText, questionTopicOptions } = renderWithJsdom(
    html,
    scriptSource
  );

  let output = html;
  output = injectContainerContent(output, "topic-filters", "prerender:topic-filters", `\n${topicFiltersHtml}\n              `);
  output = injectContainerContent(output, "answers-list", "prerender:answers-list", `\n${answersListHtml}\n              `);
  output = injectContainerContent(output, "result-meta", "prerender:result-meta", resultMetaText);
  output = injectSelectOptions(output, "prerender:question-topic", questionTopicOptions);
  output = injectFaqJsonLd(output, buildFaqJsonLd(answers));

  fs.writeFileSync(INDEX_PATH, output, "utf8");
  const topics = writeStaticPages(answers, perspectivesByCategory, perspectivesByAnswer);
  console.log(`Prerendered ${answers.length} answers, ${topics.length} topics, and sitemap.xml`);
}

main();
