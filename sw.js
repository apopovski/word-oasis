const CACHE_VERSION = "word-oasis-v88";
const PAGE_CACHE = `${CACHE_VERSION}-pages`;
const ASSET_CACHE = `${CACHE_VERSION}-assets`;
const BIBLE_CACHE = `${CACHE_VERSION}-bible`;

const APP_SHELL = [
  "/",
  "/offline.html",
  "/bible/",
  "/answers/",
  "/topics/",
  "/quizzes/",
  "/studies/",
  "/styles.css",
  "/hero-rotation.js",
  "/studies/hero-images.json",
  "/images/hero/bible-study-emmanuel-phaeton.jpg",
  "/images/hero/bible-study-aaron-burden.jpg",
  "/images/hero/bible-study-ben-white.jpg",
  "/images/hero/bible-study-samantha-sophia.jpg",
  "/images/hero/bible-study-patrick-fore.jpg",
  "/images/hero/bible-study-joel-muniz.jpg",
  "/images/hero/bible-study-rod-long.jpg",
  "/images/hero/bible-study-alexandra-fuller.jpg",
  "/images/hero/desktop/bible-study-emmanuel-phaeton.webp",
  "/images/hero/desktop/bible-study-aaron-burden.webp",
  "/images/hero/desktop/bible-study-ben-white.webp",
  "/images/hero/desktop/bible-study-samantha-sophia.webp",
  "/images/hero/desktop/bible-study-patrick-fore.webp",
  "/images/hero/desktop/bible-study-joel-muniz.webp",
  "/images/hero/desktop/bible-study-rod-long.webp",
  "/images/hero/desktop/bible-study-alexandra-fuller.webp",
  "/images/hero/mobile/bible-study-emmanuel-phaeton.webp",
  "/images/hero/mobile/bible-study-aaron-burden.webp",
  "/images/hero/mobile/bible-study-ben-white.webp",
  "/images/hero/mobile/bible-study-samantha-sophia.webp",
  "/images/hero/mobile/bible-study-patrick-fore.webp",
  "/images/hero/mobile/bible-study-joel-muniz.webp",
  "/images/hero/mobile/bible-study-rod-long.webp",
  "/images/hero/mobile/bible-study-alexandra-fuller.webp",
  "/theme.js",
  "/pwa.js",
  "/script.js",
  "/quizzes.js",
  "/studies.js",
  "/studies-hero-rotation.js",
  "/bible-reader.js",
  "/scripture-graphic.js",
  "/local-library.js",
  "/verse-modal.js",
  "/bible-study-referral.js",
  "/site-analytics.js",
  "/tracking-preferences.js",
  "/site.webmanifest?v=20261048",
  "/word-oasis.svg",
  "/SVG/wordoasis-mark.svg",
  "/app-icon-192.png",
  "/apple-touch-icon.png",
  "/apple-touch-icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(ASSET_CACHE).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith("word-oasis-") && ![PAGE_CACHE, ASSET_CACHE, BIBLE_CACHE].includes(key))
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request, cacheName, fallback) {
  const cache = await caches.open(cacheName);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  try {
    const response = await fetch(request, { signal: controller.signal });
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return (await cache.match(request)) || (fallback ? await caches.match(fallback) : Response.error());
  } finally {
    clearTimeout(timeout);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(ASSET_CACHE);
  const cached = await cache.match(request);
  const update = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached || Response.error());
  return cached || update;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, PAGE_CACHE, "/offline.html"));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  if (url.hostname === "bible-api.com") {
    event.respondWith(networkFirst(request, BIBLE_CACHE));
  }
});
