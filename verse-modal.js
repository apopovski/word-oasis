/* Lightweight Bible verse modal shared by every static answer/topic page.
   Tapping a Scripture reference bubble fetches the public-domain World
   English Bible text from bible-api.com and shows it in an accessible
   dialog, without needing the full homepage script.js bundle. */
(function () {
  const verseModal = document.querySelector("#verse-modal");
  const verseModalTitle = document.querySelector("#verse-modal-title");
  const verseModalBody = document.querySelector("#verse-modal-body");
  const verseModalClose = document.querySelector("#verse-modal-close");
  const answerSharePanel = document.querySelector("[data-answer-share]");

  if (!verseModal || !verseModalTitle || !verseModalBody || !verseModalClose) {
    return;
  }

  const verseCache = new Map();
  let lastFocusedElement = null;

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

  function initializeAnswerLibrary() {
    const answerPage = document.querySelector("[data-answer-page]");
    const saveButton = answerPage?.querySelector("[data-answer-save]");
    const library = window.WordOasisLibrary;
    if (!answerPage || !saveButton || !library) return;

    const item = {
      id: `answer:${answerPage.dataset.answerId}`,
      type: "answer",
      title: answerTitle(),
      subtitle: answerPage.dataset.answerCategory || "Bible answer",
      url: new URL(answerCanonicalUrl()).pathname
    };

    const updateButton = () => {
      const saved = library.isSaved(item.id);
      saveButton.setAttribute("aria-pressed", String(saved));
      saveButton.textContent = saved ? "Saved" : "Save answer";
    };

    library.addRecent(item);
    updateButton();
    saveButton.addEventListener("click", () => {
      if (library.isSaved(item.id)) {
        library.remove(item.id);
        setAnswerShareStatus("Answer removed from your private library.");
      } else {
        library.save(item);
        setAnswerShareStatus("Answer saved in your private library.");
        trackAnswerEvent("save");
      }
      updateButton();
    });
    window.addEventListener("wordoasis:library-change", updateButton);
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
    const shareLinks = {
      "[data-answer-share-facebook]": `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "[data-answer-share-x]": `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`,
      "[data-answer-share-whatsapp]": `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`,
      "[data-answer-share-sms]": `sms:?&body=${encodeURIComponent(content)}`
    };

    Object.entries(shareLinks).forEach(([selector, href]) => {
      const link = answerSharePanel.querySelector(selector);
      if (link) {
        link.href = href;
      }
    });

    answerSharePanel.querySelector("[data-answer-share-native]")?.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.querySelector("h1")?.textContent.trim() || document.title,
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
        setAnswerShareStatus("Answer copied to your clipboard.");
        trackAnswerEvent("copy");
      } catch (error) {
        setAnswerShareStatus("Could not copy automatically. Select the answer text to copy it.");
      }
    });

    answerSharePanel.querySelector("[data-answer-share-copy]")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(content);
        setAnswerShareStatus("Answer copied to your clipboard.");
      } catch (error) {
        setAnswerShareStatus("Could not copy automatically. Select the answer text to copy it.");
      }
    });

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
            setAnswerShareStatus(`Answer graphic shared${platform ? ` to ${platform}` : ""}.`);
            trackAnswerEvent(platform ? "instagram_graphic" : "graphic");
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

    answerSharePanel.querySelector("[data-answer-share-graphic]")?.addEventListener("click", () => {
      shareAnswerGraphic();
    });

    answerSharePanel.querySelector("[data-answer-share-instagram]")?.addEventListener("click", () => {
      shareAnswerGraphic("Instagram");
    });
  }

  async function fetchVerseText(reference) {
    if (verseCache.has(reference)) {
      return verseCache.get(reference);
    }

    const query = encodeURIComponent(reference).replace(/%20/g, "+");
    const response = await fetch(`https://bible-api.com/${query}`);

    if (!response.ok) {
      throw new Error("Verse lookup failed");
    }

    const data = await response.json();
    const text = data.text.trim().replace(/\s+/g, " ");
    verseCache.set(reference, text);
    return text;
  }

  async function openVerseModal(reference) {
    lastFocusedElement = document.activeElement;
    verseModalTitle.textContent = reference;
    verseModalBody.innerHTML = `<p class="verse-status">Loading verse...</p>`;
    verseModal.hidden = false;
    document.body.classList.add("modal-open");
    verseModalClose.focus();

    try {
      const text = await fetchVerseText(reference);
      verseModalBody.innerHTML = `<p class="verse-text">${text}</p><p class="verse-credit">World English Bible (public domain)</p>`;
    } catch (error) {
      verseModalBody.innerHTML = `<p class="verse-status">Could not load this verse right now. Please check your connection and try again.</p>`;
    }
  }

  function closeVerseModal() {
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
  initializeAnswerLibrary();
})();
