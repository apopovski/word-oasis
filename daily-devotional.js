(() => {
  "use strict";

  const card = document.querySelector("[data-devotional-card]");
  if (!card) return;

  const elements = {
    title: card.querySelector("[data-devotional-title]"),
    date: card.querySelector("[data-devotional-date]"),
    scripture: card.querySelector("[data-devotional-scripture]"),
    reference: card.querySelector("[data-devotional-reference]"),
    body: card.querySelector("[data-devotional-body]"),
    prayer: card.querySelector("[data-devotional-prayer]"),
    cta: card.querySelector("[data-devotional-cta]"),
    status: card.querySelector("[data-devotional-status]")
  };

  const FEED_PATH = "/daily-devotional.json";

  function todayLocalIso() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

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

  function chooseEntry(entries, today) {
    const exact = entries.find((entry) => entry.date === today);
    if (exact) return { entry: exact, mode: "today" };
    const earlier = entries.filter((entry) => entry.date <= today);
    if (earlier.length) return { entry: earlier[earlier.length - 1], mode: "fallback-latest" };
    return { entry: entries[0], mode: "fallback-earliest" };
  }

  function prettyDate(dateIso) {
    const parsed = new Date(`${dateIso}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return dateIso;
    return parsed.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

  function render(entry, mode) {
    elements.title.textContent = entry.title || "Today’s devotional";
    elements.date.textContent = prettyDate(entry.date);
    elements.scripture.textContent = entry.scripture || "“Open my eyes, that I may behold wondrous things out of your law.”";
    elements.reference.textContent = entry.reference || "Psalm 119:18";
    elements.body.textContent = entry.body || "Keep spending time in God’s Word today, trusting Him to lead each step.";
    if (entry.prayer) {
      elements.prayer.hidden = false;
      elements.prayer.textContent = `Prayer: ${entry.prayer}`;
    } else {
      elements.prayer.hidden = true;
      elements.prayer.textContent = "";
    }
    if (entry.ctaText) {
      elements.cta.textContent = entry.ctaText;
    }
    if (entry.ctaUrl && /^\/[a-z0-9\-/_]*$/i.test(entry.ctaUrl)) {
      elements.cta.href = entry.ctaUrl;
    }
    if (mode === "today") {
      elements.status.textContent = "Showing today’s devotional.";
    } else if (mode === "fallback-latest") {
      elements.status.textContent = "Today’s devotional is not published yet, showing the latest available.";
    } else {
      elements.status.textContent = "No earlier devotional found for today, showing the first available entry.";
    }
  }

  async function loadDevotional() {
    const response = await fetch(FEED_PATH, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Devotional feed failed with status ${response.status}`);
    }
    const payload = await response.json();
    if (!payload || !Array.isArray(payload.entries)) {
      throw new Error("Devotional feed is not in the expected format.");
    }
    const entries = payload.entries
      .map(normalizeEntry)
      .filter((entry) => entry.date && (entry.body || entry.scripture))
      .sort((first, second) => first.date.localeCompare(second.date));
    if (!entries.length) {
      throw new Error("No devotional entries were found in the feed.");
    }
    const chosen = chooseEntry(entries, todayLocalIso());
    render(chosen.entry, chosen.mode);
  }

  loadDevotional().catch((error) => {
    console.error("Daily devotional could not be loaded", error);
    elements.status.textContent = "Daily devotional is temporarily unavailable.";
  });
})();
