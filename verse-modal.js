/* Lightweight Bible verse modal shared by every static answer/topic page.
   Tapping a Scripture reference bubble fetches the public-domain World
   English Bible text from bible-api.com and shows it in an accessible
   dialog, without needing the full homepage script.js bundle. */
(function () {
  const verseModal = document.querySelector("#verse-modal");
  const verseModalTitle = document.querySelector("#verse-modal-title");
  const verseModalBody = document.querySelector("#verse-modal-body");
  const verseModalClose = document.querySelector("#verse-modal-close");

  if (!verseModal || !verseModalTitle || !verseModalBody || !verseModalClose) {
    return;
  }

  const verseCache = new Map();
  let lastFocusedElement = null;

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
})();
