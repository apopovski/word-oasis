/* Lightweight Bible verse modal shared by every static answer/topic page. */
(function () {
  const verseModal = document.querySelector("#verse-modal");
  const verseModalTitle = document.querySelector("#verse-modal-title");
  const verseModalBody = document.querySelector("#verse-modal-body");
  const verseModalClose = document.querySelector("#verse-modal-close");
  const verseModalTranslation = document.querySelector("#verse-modal-translation");
  const answerSharePanel = document.querySelector("[data-answer-share]");

  if (!verseModal || !verseModalTitle || !verseModalBody || !verseModalClose || !verseModalTranslation) {
    return;
  }

  const translations = {
    web: { id: "web", label: "World English Bible" },
    kjv: { id: "kjv", label: "King James Version" },
    asv: { id: "asv", label: "American Standard Version" }
  };
  const translationStorageKey = "word-oasis-bible-translation";
  const legacyTranslationStorageKey = "word-oasis-promise-translation";
  const verseCache = new Map();
  let lastFocusedElement = null;
  let activeReference = "";
  let verseRequest = 0;

  function storedTranslationId() {
    try {
      const stored = localStorage.getItem(translationStorageKey)
        || localStorage.getItem(legacyTranslationStorageKey);
      return translations[stored] ? stored : "web";
    } catch (error) {
      return "web";
    }
  }

  function saveTranslationId(translationId) {
    try {
      localStorage.setItem(translationStorageKey, translationId);
    } catch (error) {
      console.warn("Could not save the Bible version preference.", error);
    }
  }

  function setVerseStatus(message) {
    const status = document.createElement("p");
    status.className = "verse-status";
    status.textContent = message;
    verseModalBody.replaceChildren(status);
  }

  function renderVerse(text, translation) {
    const verse = document.createElement("p");
    verse.className = "verse-text";
    verse.textContent = text;
    const credit = document.createElement("p");
    credit.className = "verse-credit";
    credit.textContent = `${translation.label} (public domain)`;
    verseModalBody.replaceChildren(verse, credit);
  }

  function answerShareUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set("utm_source", "social");
    url.searchParams.set("utm_medium", "share");
    url.searchParams.set("utm_campaign", "answer_page");
    return url.toString();
  }

  function answerCanonicalUrl() {
    return document.querySelector('link[rel="canonical"]')?.href || window.location.href.split(/[?#]/)[0];
  }

  function answerTitle() {
    return document.querySelector("h1")?.textContent.trim() || document.title;
  }

  function answerShareText() {
    const title = answerTitle();
    const intro = document.querySelector(".page-intro")?.textContent.trim() || "";
    return intro ? `${title}\n\n${intro}` : title;
  }

  function answerShareContent() {
    return `${answerShareText()}\n\nRead on Word Oasis: ${answerShareUrl()}`;
  }

  function setAnswerShareStatus(message) {
    const status = answerSharePanel?.querySelector("[data-answer-share-status]");
    if (status) {
      status.textContent = message;
    }
  }

  function trackAnswerEvent(action) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "answer_action", { action });
    }
  }

  function answerGraphicOptions() {
    return {
      text: answerTitle(),
      reference: "Find the biblical answer",
      label: "Bible answer",
      fileName: answerTitle(),
      paletteSeed: answerTitle(),
      watermark: "?"
    };
  }

  function initializeAnswerShare() {
    if (!answerSharePanel) {
      return;
    }

    const url = answerShareUrl();
    const content = answerShareContent();
    const graphicRenderer = window.WordOasisScriptureGraphic;
    let answerGraphicError = null;
    let answerGraphicFilePromise = graphicRenderer
      ? graphicRenderer.createFile(answerGraphicOptions()).catch((error) => {
          answerGraphicError = error;
          return null;
        })
      : null;
    const modeButtons = Array.from(answerSharePanel.querySelectorAll("[data-answer-share-mode]"));
    const platformButtons = Array.from(answerSharePanel.querySelectorAll("[data-answer-share-platform]"));
    const primaryButton = answerSharePanel.querySelector("[data-answer-share-primary]");
    const secondaryButton = answerSharePanel.querySelector("[data-answer-share-secondary]");
    const modeSelector = answerSharePanel.querySelector(".share-mode-selector");
    const shareModeStorageKey = "word-oasis-answer-share-mode";
    let shareMode = "text";

    function storedShareMode() {
      try {
        const storedMode = sessionStorage.getItem(shareModeStorageKey);
        return storedMode === "graphic" ? "graphic" : "text";
      } catch (error) {
        console.warn("Could not read the saved answer sharing mode.", error);
        return "text";
      }
    }

    function setShareMode(mode, persist = true) {
      shareMode = mode;
      modeButtons.forEach((button) => {
        const selected = button.dataset.answerShareMode === mode;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      if (modeSelector) {
        modeSelector.style.setProperty("--share-thumb-left", mode === "graphic" ? "50%" : "3px");
      }
      if (secondaryButton) {
        secondaryButton.textContent = mode === "graphic" ? "Download" : "Copy";
      }
      platformButtons.forEach((button) => {
        const platform = button.dataset.answerSharePlatform;
        const preposition = platform === "Text" ? "by" : "on";
        button.setAttribute("aria-label", `Share answer as ${mode} ${preposition} ${platform}`);
      });
      if (persist) {
        try {
          sessionStorage.setItem(shareModeStorageKey, mode);
        } catch (error) {
          console.warn("Could not save the answer sharing mode.", error);
        }
      }
      setAnswerShareStatus("");
    }

    async function shareAnswerText() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: answerTitle(),
            text: document.querySelector(".page-intro")?.textContent.trim() || "",
            url
          });
          setAnswerShareStatus("Answer shared.");
          trackAnswerEvent("share");
          return;
        } catch (error) {
          if (error && error.name === "AbortError") {
            setAnswerShareStatus("Sharing was canceled.");
            return;
          }
        }
      }

      try {
        await navigator.clipboard.writeText(content);
        setAnswerShareStatus("Answer text and link copied. Paste them into the app where you want to share.");
        trackAnswerEvent("copy");
      } catch (error) {
        setAnswerShareStatus("Could not copy automatically. Copy the answer link from your address bar.");
      }
    }

    async function copyAnswerText() {
      try {
        await navigator.clipboard.writeText(content);
        setAnswerShareStatus("Answer text and link copied.");
        trackAnswerEvent("copy");
      } catch (error) {
        setAnswerShareStatus("Could not copy automatically. Copy the answer link from your address bar.");
      }
    }

    async function shareAnswerTextOnPlatform(platform) {
      const destinations = {
        Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        X: `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`,
        WhatsApp: `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`,
        Text: `sms:?&body=${encodeURIComponent(content)}`
      };

      if (platform === "Instagram") {
        await shareAnswerText();
        return;
      }

      const destination = destinations[platform];
      if (!destination) return;
      if (platform === "Text") {
        window.location.href = destination;
      } else {
        window.open(destination, "_blank", "noopener,noreferrer");
      }
      setAnswerShareStatus(`Opening ${platform} with the answer text and link.`);
      trackAnswerEvent(`${platform.toLowerCase()}_text`);
    }

    async function shareAnswerGraphic(platform = "") {
      if (!graphicRenderer || !answerGraphicFilePromise) {
        setAnswerShareStatus("The answer graphic tools are not available right now.");
        return;
      }

      setAnswerShareStatus("Creating your answer graphic...");
      try {
        const file = await answerGraphicFilePromise;
        if (!file) {
          throw answerGraphicError || new Error("The answer graphic could not be created.");
        }
        const canonicalUrl = answerCanonicalUrl();
        const sharePayload = {
          title: answerTitle(),
          text: `Find the answer at: ${canonicalUrl}`,
          files: [file]
        };

        if (navigator.share && navigator.canShare?.({ files: [file] })) {
          try {
            await navigator.share(sharePayload);
            setAnswerShareStatus("Answer graphic shared.");
            trackAnswerEvent(platform ? `${platform.toLowerCase()}_graphic` : "graphic");
            return;
          } catch (error) {
            if (error.name === "AbortError") {
              setAnswerShareStatus("");
              return;
            }
          }
        }

        graphicRenderer.downloadFile(file);
        const linkCaption = `Find the answer at: ${canonicalUrl}`;
        try {
          await navigator.clipboard.writeText(linkCaption);
          setAnswerShareStatus("Answer graphic saved and its answer link copied. Paste the link beneath the graphic.");
        } catch (error) {
          setAnswerShareStatus("Answer graphic saved. Add its answer link when you post it.");
        }
      } catch (error) {
        answerGraphicFilePromise = graphicRenderer.createFile(answerGraphicOptions()).catch((nextError) => {
          answerGraphicError = nextError;
          return null;
        });
        setAnswerShareStatus(error.message || "The answer graphic could not be created.");
      }
    }

    async function downloadAnswerGraphic() {
      if (!graphicRenderer || !answerGraphicFilePromise) {
        setAnswerShareStatus("The answer graphic tools are not available right now.");
        return;
      }

      setAnswerShareStatus("Creating your answer graphic...");
      try {
        const file = await answerGraphicFilePromise;
        if (!file) {
          throw answerGraphicError || new Error("The answer graphic could not be created.");
        }
        graphicRenderer.downloadFile(file);
        setAnswerShareStatus("Answer graphic downloaded.");
        trackAnswerEvent("graphic_download");
      } catch (error) {
        answerGraphicFilePromise = graphicRenderer.createFile(answerGraphicOptions()).catch((nextError) => {
          answerGraphicError = nextError;
          return null;
        });
        setAnswerShareStatus(error.message || "The answer graphic could not be created.");
      }
    }

    modeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setShareMode(button.dataset.answerShareMode);
      });
    });

    platformButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const platform = button.dataset.answerSharePlatform;
        if (shareMode === "graphic") {
          shareAnswerGraphic(platform);
        } else {
          shareAnswerTextOnPlatform(platform);
        }
      });
    });

    primaryButton?.addEventListener("click", () => {
      if (shareMode === "graphic") {
        shareAnswerGraphic();
      } else {
        shareAnswerText();
      }
    });

    secondaryButton?.addEventListener("click", () => {
      if (shareMode === "graphic") {
        downloadAnswerGraphic();
      } else {
        copyAnswerText();
      }
    });

    setShareMode(storedShareMode(), false);
  }

  async function fetchVerseText(reference, translation) {
    const cacheKey = `${translation.id}:${reference}`;
    if (verseCache.has(cacheKey)) {
      return verseCache.get(cacheKey);
    }

    const query = encodeURIComponent(reference).replace(/%20/g, "+");
    const response = await fetch(`https://bible-api.com/${query}?translation=${translation.id}`);

    if (!response.ok) {
      throw new Error("Verse lookup failed");
    }

    const data = await response.json();
    const text = String(data.text || "")
      .trim()
      .replace(/\s+/g, " ")
      .replace(/"([^"]*)"/g, "“$1”");
    if (!text) {
      throw new Error("Verse lookup returned no text");
    }
    verseCache.set(cacheKey, text);
    return text;
  }

  async function loadActiveVerse() {
    const request = ++verseRequest;
    const translation = translations[verseModalTranslation.value] || translations.web;
    setVerseStatus(`Loading ${translation.label}...`);

    try {
      const text = await fetchVerseText(activeReference, translation);
      if (request === verseRequest && !verseModal.hidden) {
        renderVerse(text, translation);
      }
    } catch (error) {
      if (request === verseRequest && !verseModal.hidden) {
        setVerseStatus("Could not load this verse in the selected version. Please check your connection and try again.");
      }
    }
  }

  function openVerseModal(reference) {
    lastFocusedElement = document.activeElement;
    activeReference = reference;
    verseModalTitle.textContent = reference;
    verseModalTranslation.value = storedTranslationId();
    verseModal.hidden = false;
    document.body.classList.add("modal-open");
    verseModalClose.focus();
    loadActiveVerse();
  }

  function closeVerseModal() {
    verseRequest += 1;
    verseModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  document.addEventListener("click", (event) => {
    const scriptureButton = event.target.closest(".scripture-link");
    if (scriptureButton) {
      openVerseModal(scriptureButton.dataset.scripture);
    }
  });

  verseModalClose.addEventListener("click", closeVerseModal);

  verseModalTranslation.value = storedTranslationId();
  verseModalTranslation.addEventListener("change", () => {
    saveTranslationId(verseModalTranslation.value);
    if (!verseModal.hidden && activeReference) {
      loadActiveVerse();
    }
  });

  verseModal.addEventListener("click", (event) => {
    if (event.target === verseModal) {
      closeVerseModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !verseModal.hidden) {
      closeVerseModal();
      return;
    }

    if (event.key === "Tab" && !verseModal.hidden) {
      const focusable = Array.from(
        verseModal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  initializeAnswerShare();
})();
