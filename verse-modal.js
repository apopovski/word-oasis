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

  function answerShareText() {
    const title = document.querySelector("h1")?.textContent.trim() || document.title;
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

  function initializeAnswerShare() {
    if (!answerSharePanel) {
      return;
    }

    const url = answerShareUrl();
    const content = answerShareContent();
    const shareLinks = {
      "[data-answer-share-facebook]": `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "[data-answer-share-x]": `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`,
      "[data-answer-share-linkedin]": `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
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
    }
  });

  initializeAnswerShare();
})();
