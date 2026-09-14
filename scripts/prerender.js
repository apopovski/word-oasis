#!/usr/bin/env node
/**
 * Prerender build step for Word Oasis.
 *
 * Word Oasis is a static site whose Bible Q&A content is normally rendered
 * into the DOM by script.js at runtime. That is great for interactivity, but
 * it means search engines and AI crawlers that do not execute JavaScript
 * (many still don't, or only sometimes do) would see an almost-empty page.
 *
 * This script actually runs the site's own script.js inside a real DOM
 * (via jsdom) so the exact same markup the browser would produce is baked
 * into index.html between marker comments. script.js re-renders the same
 * content on load, so nothing changes for users — but crawlers now see the
 * full 57-question library, topic filters, and question form options
 * directly in the page source.
 *
 * It also regenerates the FAQPage JSON-LD structured data block in <head>
 * from the same answers data, so it always includes every question.
 *
 * Run with: npm run prerender
 */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = path.join(__dirname, "..");
const INDEX_PATH = path.join(ROOT, "index.html");
const SCRIPT_PATH = path.join(ROOT, "script.js");

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
  const arrayLiteral = scriptSource.slice(arrayStart, end);
  // eslint-disable-next-line no-eval
  return eval(arrayLiteral);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
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
  // Strip the external script tag; we eval script.js directly into the
  // window context below so no network access or file resolution is needed.
  const htmlWithoutAppScript = html.replace(
    /\s*<script src="script\.js"><\/script>\s*/,
    "\n"
  );

  const dom = new JSDOM(htmlWithoutAppScript, {
    url: "https://wordoasis.org/",
    runScripts: "dangerously",
    pretendToBeVisual: true
  });

  const { window } = dom;

  // Minimal stubs for browser APIs jsdom does not implement, in case any
  // top-level code path touches them during initial render.
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
  const questionTopicOptions = Array.from(
    window.document.querySelectorAll("#question-topic option")
  )
    .filter((option) => option.value !== "")
    .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.textContent)}</option>`)
    .join("\n                    ");

  // Stop the promise-rotation interval and close the window so the Node
  // process can exit cleanly instead of hanging on a live timer.
  window.close();

  return { topicFiltersHtml, answersListHtml, resultMetaText, questionTopicOptions };
}

function replaceBetweenMarker(html, markerComment, replacement) {
  const marker = `<!-- ${markerComment} -->`;
  if (!html.includes(marker)) {
    throw new Error(`Marker not found in index.html: ${marker}`);
  }
  // Replace everything between the container's opening tag content and the
  // marker itself: we keep the marker in place and put fresh content right
  // before it, then strip any previously-generated content above it up to
  // the nearest `prerender:start` marker pair. To keep this simple and
  // idempotent, each container uses a single marker and we regenerate the
  // full inner content, re-inserting the marker at the end so this script
  // can be run again safely.
  const pattern = new RegExp(`([\\s\\S]*?)${escapeRegExp(marker)}`);
  return html.replace(pattern, () => `$PLACEHOLDER$${marker}`).replace("$PLACEHOLDER$", "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function injectContainerContent(html, containerId, marker, innerHtml) {
  const openTagRegex = new RegExp(`(<div[^>]*\\bid="${containerId}"[^>]*>)([\\s\\S]*?)(<!-- ${marker} -->)`);
  if (!openTagRegex.test(html)) {
    throw new Error(`Could not locate container #${containerId} with marker ${marker}`);
  }
  return html.replace(openTagRegex, (_match, openTag, _old, markerComment) => `${openTag}${innerHtml}${markerComment}`);
}

function injectSelectOptions(html, marker, optionsHtml) {
  const regex = new RegExp(
    `(<select id="question-topic" name="topic">\\s*<option value="">[^<]*<\\/option>)([\\s\\S]*?)(<!-- ${marker} -->)`
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

function main() {
  const html = fs.readFileSync(INDEX_PATH, "utf8");
  const scriptSource = fs.readFileSync(SCRIPT_PATH, "utf8");
  const answers = extractAnswersData(scriptSource);

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
  console.log(`Prerendered ${answers.length} answers, ${questionTopicOptions.split("<option").length - 1} topics into index.html`);
}

main();
