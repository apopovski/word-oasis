(() => {
  const endpoint = window.WORD_OASIS_FORM_ENDPOINT || "";
  const answerPage = document.querySelector("[data-answer-page]");
  const answerStats = document.querySelector("[data-answer-public-stats]");
  const mostReadSection = document.querySelector("[data-most-read-section]");
  const mostReadList = document.querySelector("[data-most-read-list]");
  const libraryReadership = document.querySelector("[data-library-readership]");

  if (!endpoint || (!answerPage && !mostReadSection)) {
    return;
  }

  const numberFormatter = new Intl.NumberFormat();

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function safeArticlePath(value) {
    try {
      const url = new URL(value, window.location.origin);
      return /^\/answers\/[a-z0-9-]+\/$/.test(url.pathname)
        ? url.pathname
        : "";
    } catch (error) {
      return "";
    }
  }

  function publicStatsUrl(answerId = "") {
    const url = new URL(endpoint);
    url.searchParams.set("action", "public-stats");
    if (answerId) {
      url.searchParams.set("answerId", answerId);
    }
    return url.toString();
  }

  function safeVisitorToken() {
    const key = "word-oasis-anonymous-reader";
    try {
      const existing = localStorage.getItem(key);
      if (existing) {
        return existing;
      }
      const token =
        typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(key, token);
      return token;
    } catch (error) {
      return "";
    }
  }

  function shouldRecordAnswerView(answerId) {
    if (
      window.WORD_OASIS_TRACKING_DISABLED ||
      navigator.doNotTrack === "1" ||
      window.doNotTrack === "1"
    ) {
      return false;
    }
    const key = `word-oasis-view:${answerId}`;
    const today = new Date().toISOString().slice(0, 10);
    try {
      const currentValue = localStorage.getItem(key) || "";
      if (currentValue === today) {
        return false;
      }
      if (
        currentValue.startsWith("pending:") &&
        Date.now() - Number(currentValue.slice(8)) < 120000
      ) {
        return false;
      }
      localStorage.setItem(key, `pending:${Date.now()}`);
      return true;
    } catch (error) {
      return true;
    }
  }

  function finishViewRecord(answerId, success) {
    const key = `word-oasis-view:${answerId}`;
    try {
      if (success) {
        localStorage.setItem(key, new Date().toISOString().slice(0, 10));
      } else if ((localStorage.getItem(key) || "").startsWith("pending:")) {
        localStorage.removeItem(key);
      }
    } catch (error) {
      // Storage may be unavailable in privacy-focused browser modes.
    }
  }

  async function postView() {
    if (!answerPage) {
      return;
    }
    const answerId = answerPage.dataset.answerId || "";
    if (!answerId || !shouldRecordAnswerView(answerId)) {
      return;
    }

    const payload = {
      eventType: "article-view",
      answerId,
      answerTitle: document.querySelector("h1")?.textContent?.trim() || "",
      answerUrl: `${window.location.origin}${window.location.pathname}`,
      visitorToken: safeVisitorToken(),
      viewedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.error || "Article view was not recorded.");
      }
      finishViewRecord(answerId, true);
      loadPublicStats();
    } catch (error) {
      finishViewRecord(answerId, false);
      console.error("Article readership tracking failed", error);
    }
  }

  function renderAnswerStats(article) {
    if (!answerStats) {
      return;
    }
    const views = Number(article?.views || 0);
    const readers = Number(article?.readers || 0);
    answerStats.querySelector("[data-answer-view-count]").textContent =
      numberFormatter.format(views);
    const readerCount = answerStats.querySelector("[data-answer-reader-count]");
    if (readerCount) {
      readerCount.textContent = numberFormatter.format(readers);
    }
    answerStats.hidden = false;
  }

  function renderMostRead(data) {
    if (!mostReadSection || !mostReadList || !Array.isArray(data.topArticles)) {
      return;
    }
    const articles = data.topArticles
      .map((article) => ({ ...article, path: safeArticlePath(article.url) }))
      .filter((article) => article.path && article.title && article.views);
    if (!articles.length) {
      return;
    }

    mostReadList.innerHTML = articles
      .slice(0, 6)
      .map(
        (article, index) => `
          <article class="most-read-card">
            <span class="most-read-rank">${index + 1}</span>
            <div>
              <h3><a href="${article.path}">${escapeHtml(article.title)}</a></h3>
              <p>${numberFormatter.format(article.views)} view${article.views === 1 ? "" : "s"}</p>
            </div>
          </article>
        `,
      )
      .join("");
    mostReadSection.hidden = false;

    if (libraryReadership && data.totalViews) {
      libraryReadership.querySelector("[data-total-readers]").textContent =
        numberFormatter.format(data.totalReaders);
      libraryReadership.querySelector("[data-total-views]").textContent =
        numberFormatter.format(data.totalViews);
      libraryReadership.hidden = false;
    }
  }

  async function loadPublicStats() {
    try {
      const response = await fetch(
        publicStatsUrl(answerPage?.dataset.answerId || ""),
      );
      const data = await response.json();
      if (!response.ok || data.success === false) {
        throw new Error(data.error || "Public readership could not be loaded.");
      }
      renderAnswerStats(data.article);
      renderMostRead(data);
    } catch (error) {
      console.error("Public readership loading failed", error);
    }
  }

  loadPublicStats();

  if (answerPage) {
    const scheduleView = () => {
      if (document.visibilityState !== "visible") {
        return;
      }
      document.removeEventListener("visibilitychange", scheduleView);
      window.setTimeout(() => {
        if (document.visibilityState === "visible") {
          postView();
        } else {
          document.addEventListener("visibilitychange", scheduleView);
        }
      }, 8000);
    };
    if (document.visibilityState === "visible") {
      scheduleView();
    } else {
      document.addEventListener("visibilitychange", scheduleView);
    }
  }
})();
