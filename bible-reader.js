(function () {
  const translations = [
    {
      id: "web",
      apiId: "WEB",
      label: "World English Bible",
      shortLabel: "WEB",
      note: "Modern public-domain English"
    },
    {
      id: "kjv",
      apiId: "KJV",
      label: "King James Version",
      shortLabel: "KJV",
      note: "Classic public-domain English"
    },
    {
      id: "asv",
      apiId: "ASV",
      label: "American Standard Version",
      shortLabel: "ASV",
      note: "Public-domain English, 1901"
    }
  ];

  const defaultTextSize = 1.08;
  const minTextSize = 0.9;
  const maxTextSize = 1.8;
  const textSizeStep = 0.04;
  const textSizeStorageKey = "word-oasis-bible-text-size";
  const siteUrl = "https://wordoasis.org/bible/";

  const books = [
    { name: "Genesis", chapters: 50, audioCode: "GEN" },
    { name: "Exodus", chapters: 40, audioCode: "EXO" },
    { name: "Leviticus", chapters: 27, audioCode: "LEV" },
    { name: "Numbers", chapters: 36, audioCode: "NUM" },
    { name: "Deuteronomy", chapters: 34, audioCode: "DEU" },
    { name: "Joshua", chapters: 24, audioCode: "JOS" },
    { name: "Judges", chapters: 21, audioCode: "JDG" },
    { name: "Ruth", chapters: 4, audioCode: "RUT" },
    { name: "1 Samuel", chapters: 31, audioCode: "1SA" },
    { name: "2 Samuel", chapters: 24, audioCode: "2SA" },
    { name: "1 Kings", chapters: 22, audioCode: "1KI" },
    { name: "2 Kings", chapters: 25, audioCode: "2KI" },
    { name: "1 Chronicles", chapters: 29, audioCode: "1CH" },
    { name: "2 Chronicles", chapters: 36, audioCode: "2CH" },
    { name: "Ezra", chapters: 10, audioCode: "EZR" },
    { name: "Nehemiah", chapters: 13, audioCode: "NEH" },
    { name: "Esther", chapters: 10, audioCode: "EST" },
    { name: "Job", chapters: 42, audioCode: "JOB" },
    { name: "Psalms", chapters: 150, audioCode: "PSA" },
    { name: "Proverbs", chapters: 31, audioCode: "PRO" },
    { name: "Ecclesiastes", chapters: 12, audioCode: "ECC" },
    { name: "Song of Solomon", chapters: 8, audioCode: "SNG" },
    { name: "Isaiah", chapters: 66, audioCode: "ISA" },
    { name: "Jeremiah", chapters: 52, audioCode: "JER" },
    { name: "Lamentations", chapters: 5, audioCode: "LAM" },
    { name: "Ezekiel", chapters: 48, audioCode: "EZK" },
    { name: "Daniel", chapters: 12, audioCode: "DAN" },
    { name: "Hosea", chapters: 14, audioCode: "HOS" },
    { name: "Joel", chapters: 3, audioCode: "JOL" },
    { name: "Amos", chapters: 9, audioCode: "AMO" },
    { name: "Obadiah", chapters: 1, audioCode: "OBA" },
    { name: "Jonah", chapters: 4, audioCode: "JON" },
    { name: "Micah", chapters: 7, audioCode: "MIC" },
    { name: "Nahum", chapters: 3, audioCode: "NAM" },
    { name: "Habakkuk", chapters: 3, audioCode: "HAB" },
    { name: "Zephaniah", chapters: 3, audioCode: "ZEP" },
    { name: "Haggai", chapters: 2, audioCode: "HAG" },
    { name: "Zechariah", chapters: 14, audioCode: "ZEC" },
    { name: "Malachi", chapters: 4, audioCode: "MAL" },
    { name: "Matthew", chapters: 28, audioCode: "MAT" },
    { name: "Mark", chapters: 16, audioCode: "MRK" },
    { name: "Luke", chapters: 24, audioCode: "LUK" },
    { name: "John", chapters: 21, audioCode: "JHN" },
    { name: "Acts", chapters: 28, audioCode: "ACT" },
    { name: "Romans", chapters: 16, audioCode: "ROM" },
    { name: "1 Corinthians", chapters: 16, audioCode: "1CO" },
    { name: "2 Corinthians", chapters: 13, audioCode: "2CO" },
    { name: "Galatians", chapters: 6, audioCode: "GAL" },
    { name: "Ephesians", chapters: 6, audioCode: "EPH" },
    { name: "Philippians", chapters: 4, audioCode: "PHP" },
    { name: "Colossians", chapters: 4, audioCode: "COL" },
    { name: "1 Thessalonians", chapters: 5, audioCode: "1TH" },
    { name: "2 Thessalonians", chapters: 3, audioCode: "2TH" },
    { name: "1 Timothy", chapters: 6, audioCode: "1TI" },
    { name: "2 Timothy", chapters: 4, audioCode: "2TI" },
    { name: "Titus", chapters: 3, audioCode: "TIT" },
    { name: "Philemon", chapters: 1, audioCode: "PHM" },
    { name: "Hebrews", chapters: 13, audioCode: "HEB" },
    { name: "James", chapters: 5, audioCode: "JAS" },
    { name: "1 Peter", chapters: 5, audioCode: "1PE" },
    { name: "2 Peter", chapters: 3, audioCode: "2PE" },
    { name: "1 John", chapters: 5, audioCode: "1JN" },
    { name: "2 John", chapters: 1, audioCode: "2JN" },
    { name: "3 John", chapters: 1, audioCode: "3JN" },
    { name: "Jude", chapters: 1, audioCode: "JUD" },
    { name: "Revelation", chapters: 22, audioCode: "REV" }
  ];

  const bookSelect = document.querySelector("#bible-book");
  const chapterSelect = document.querySelector("#bible-chapter");
  const translationSelect = document.querySelector("#bible-translation");
  const chapterGrid = document.querySelector("#bible-chapter-grid");
  const readerTitle = document.querySelector("#bible-reader-title");
  const readerMeta = document.querySelector("#bible-reader-meta");
  const readerBody = document.querySelector("#bible-reader-body");
  const readerCard = document.querySelector(".bible-reader-card");
  const prevButton = document.querySelector("#bible-prev");
  const nextButton = document.querySelector("#bible-next");
  const readerPrevButton = document.querySelector("#bible-reader-prev");
  const readerNextButton = document.querySelector("#bible-reader-next");
  const bottomPrevButton = document.querySelector("#bible-bottom-prev");
  const bottomNextButton = document.querySelector("#bible-bottom-next");
  const smallerTextButton = document.querySelector("#bible-text-smaller");
  const largerTextButton = document.querySelector("#bible-text-larger");
  const textSizeRange = document.querySelector("#bible-text-size-range");
  const textSizeLabel = document.querySelector("#bible-text-size-label");
  const searchForm = document.querySelector("#bible-search-form");
  const searchInput = document.querySelector("#bible-search-input");
  const searchScope = document.querySelector("#bible-search-scope");
  const searchBooksField = document.querySelector("#bible-search-books-field");
  const searchBooksSelect = document.querySelector("#bible-search-books");
  const searchResults = document.querySelector("#bible-search-results");
  const selectionHome = document.querySelector("#bible-selection-home");

  if (!bookSelect || !chapterSelect || !translationSelect || !chapterGrid || !readerTitle || !readerMeta || !readerBody || !readerCard || !prevButton || !nextButton || !readerPrevButton || !readerNextButton || !bottomPrevButton || !bottomNextButton || !smallerTextButton || !largerTextButton || !textSizeRange || !textSizeLabel || !searchForm || !searchInput || !searchScope || !searchBooksField || !searchBooksSelect || !searchResults || !selectionHome) {
    return;
  }

  const selectionPanel = document.createElement("div");
  selectionPanel.className = "bible-selection-panel";
  selectionPanel.setAttribute("aria-label", "Selected Bible passage tools");
  selectionPanel.innerHTML = `
    <p id="bible-selection-label">Click a verse number to select it. Click another verse number to select a range.</p>
    <label class="bible-share-source">
      <input type="checkbox" id="bible-include-source" checked>
      Include Word Oasis link
    </label>
    <div class="bible-selection-actions">
      <button type="button" id="bible-copy-selection" disabled>Copy passage</button>
      <button type="button" id="bible-share-selection" disabled>Share</button>
      <a id="bible-text-selection" aria-disabled="true">Text</a>
      <a id="bible-x-selection" target="_blank" rel="noopener" aria-disabled="true">X</a>
      <a id="bible-facebook-selection" target="_blank" rel="noopener" aria-disabled="true">Facebook</a>
    </div>
    <p class="bible-selection-status" id="bible-selection-status" aria-live="polite"></p>
  `;
  selectionHome.append(selectionPanel);
  const selectionLabel = selectionPanel.querySelector("#bible-selection-label");
  const includeSourceCheckbox = selectionPanel.querySelector("#bible-include-source");
  const copySelectionButton = selectionPanel.querySelector("#bible-copy-selection");
  const shareSelectionButton = selectionPanel.querySelector("#bible-share-selection");
  const textSelectionLink = selectionPanel.querySelector("#bible-text-selection");
  const xSelectionLink = selectionPanel.querySelector("#bible-x-selection");
  const facebookSelectionLink = selectionPanel.querySelector("#bible-facebook-selection");
  const selectionStatus = selectionPanel.querySelector("#bible-selection-status");

  const chapterCache = new Map();
  let currentRequest = null;
  let currentChapterVerses = [];
  let pendingHighlightVerse = null;
  let selectedVerseStart = null;
  let selectedVerseEnd = null;
  let textSizeValue = defaultTextSize;
  let initialSearchQuery = "";

  function clampTextSize(value) {
    return Math.max(minTextSize, Math.min(value, maxTextSize));
  }

  function storedTextSizeValue() {
    try {
      const stored = Number.parseFloat(window.localStorage.getItem(textSizeStorageKey));
      return Number.isFinite(stored) ? clampTextSize(stored) : defaultTextSize;
    } catch (error) {
      return defaultTextSize;
    }
  }

  function saveTextSizeValue(value) {
    try {
      window.localStorage.setItem(textSizeStorageKey, value.toFixed(2));
    } catch (error) {
      return;
    }
  }

  function applyTextSize(value) {
    textSizeValue = clampTextSize(value);
    readerCard.style.setProperty("--bible-text-size", `${textSizeValue.toFixed(2)}rem`);
    textSizeRange.value = textSizeValue.toFixed(2);
    textSizeLabel.value = `${Math.round((textSizeValue / defaultTextSize) * 100)}%`;
    smallerTextButton.disabled = textSizeValue <= minTextSize;
    largerTextButton.disabled = textSizeValue >= maxTextSize;
    saveTextSizeValue(textSizeValue);
  }

  function findTranslation(id) {
    return translations.find((translation) => translation.id === id) || translations[0];
  }

  function findBook(name) {
    return books.find((book) => book.name === name) || books[0];
  }

  function sanitizeChapter(book, chapter) {
    const numericChapter = Number.parseInt(chapter, 10);
    if (!Number.isInteger(numericChapter) || numericChapter < 1) {
      return 1;
    }
    return Math.min(numericChapter, book.chapters);
  }

  function updateUrl(book, chapter, translation) {
    const params = new URLSearchParams({
      book: book.name,
      chapter: String(chapter),
      translation: translation.id
    });
    window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  }

  function trackAnalyticsEvent(name, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  }

  function setReaderStatus(message) {
    currentChapterVerses = [];
    readerBody.innerHTML = "";
    const status = document.createElement("p");
    status.className = "bible-reader-status";
    status.textContent = message;
    readerBody.append(status);
  }

  function cleanVerseText(text) {
    return text
      .replace(/<S>.*?<\/S>/gi, "")
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function normalizeSearchText(text) {
    return cleanVerseText(text).toLowerCase();
  }

  function parseSearchQuery(query) {
    const exactPhrases = [];
    const queryWithoutPhrases = query.replace(/"([^"]+)"/g, (_, phrase) => {
      const cleaned = phrase.trim();
      if (cleaned) {
        exactPhrases.push(cleaned);
      }
      return " ";
    });
    const andTerms = queryWithoutPhrases
      .split("&")
      .map((term) => term.trim())
      .filter(Boolean);

    if (exactPhrases.length > 0 || andTerms.length > 1) {
      return {
        mode: "standard",
        seed: exactPhrases[0] || andTerms[0],
        exactPhrases,
        andTerms
      };
    }

    return {
      mode: "broad",
      seed: andTerms[0] || exactPhrases[0] || query,
      exactPhrases,
      andTerms
    };
  }

  function resultMatchesParsedQuery(result, parsedQuery) {
    const text = normalizeSearchText(result.text);
    return parsedQuery.exactPhrases.every((phrase) => text.includes(phrase.toLowerCase()))
      && parsedQuery.andTerms.every((term) => text.includes(term.toLowerCase()));
  }

  function updateSearchBooksVisibility() {
    const showBooks = searchScope.value === "selected";
    searchBooksField.hidden = !showBooks;
    if (showBooks && searchBooksSelect.selectedOptions.length === 0) {
      const currentBookId = books.indexOf(findBook(bookSelect.value)) + 1;
      const option = searchBooksSelect.querySelector(`option[value="${currentBookId}"]`);
      if (option) {
        option.selected = true;
      }
    }
  }

  function selectedSearchBookIds() {
    const scope = searchScope.value;
    const currentBookId = books.indexOf(findBook(bookSelect.value)) + 1;

    if (scope === "ot") {
      return books.map((_, index) => index + 1).filter((bookId) => bookId <= 39);
    }
    if (scope === "nt") {
      return books.map((_, index) => index + 1).filter((bookId) => bookId >= 40);
    }
    if (scope === "current") {
      return [currentBookId];
    }
    if (scope === "selected") {
      return Array.from(searchBooksSelect.selectedOptions).map((option) => Number.parseInt(option.value, 10));
    }
    return [];
  }

  function resultMatchesSearchScope(result, allowedBookIds) {
    return allowedBookIds.length === 0 || allowedBookIds.includes(result.book);
  }

  function searchScopeLabel() {
    if (searchScope.value === "ot") {
      return "Old Testament";
    }
    if (searchScope.value === "nt") {
      return "New Testament";
    }
    if (searchScope.value === "current") {
      return findBook(bookSelect.value).name;
    }
    if (searchScope.value === "selected") {
      const selectedNames = Array.from(searchBooksSelect.selectedOptions).map((option) => option.textContent);
      return selectedNames.length > 0 ? selectedNames.join(", ") : "selected books";
    }
    return "entire Bible";
  }

  function bookById(bookId) {
    return books[bookId - 1] || books[0];
  }

  function buildReaderUrl(book, chapter, translation, verse) {
    const params = new URLSearchParams({
      book: book.name,
      chapter: String(chapter),
      translation: translation.id
    });
    if (verse) {
      params.set("verse", String(verse));
    }
    return `${siteUrl}?${params.toString()}`;
  }

  function selectedRange() {
    if (!selectedVerseStart || !selectedVerseEnd) {
      return null;
    }
    const start = Math.min(selectedVerseStart, selectedVerseEnd);
    const end = Math.max(selectedVerseStart, selectedVerseEnd);
    return { start, end };
  }

  function referenceForRange(book, chapter, range, translation) {
    const verses = range.start === range.end ? `${range.start}` : `${range.start}-${range.end}`;
    return `${book.name} ${chapter}:${verses} (${translation.shortLabel})`;
  }

  function passageForRange(range) {
    return currentChapterVerses
      .filter((verse) => verse.verse >= range.start && verse.verse <= range.end)
      .map((verse) => `${verse.verse}. ${cleanVerseText(verse.text)}`)
      .join("\n");
  }

  function setShareLinkState(link, enabled, href) {
    if (enabled) {
      link.href = href;
      link.setAttribute("aria-disabled", "false");
      link.tabIndex = 0;
    } else {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.tabIndex = -1;
    }
  }

  function selectedPassageText() {
    const range = selectedRange();
    if (!range) {
      return "";
    }
    const { book, chapter, translation } = selectedState();
    const lines = [
      referenceForRange(book, chapter, range, translation),
      passageForRange(range)
    ];
    if (includeSourceCheckbox.checked) {
      lines.push("", `Read on Word Oasis: ${buildReaderUrl(book, chapter, translation, range.start)}`);
    }
    return lines.join("\n");
  }

  function updateSelectedVerseStyles() {
    const range = selectedRange();
    readerBody.querySelectorAll(".bible-verse").forEach((verseRow) => {
      const verseNumber = Number.parseInt(verseRow.dataset.verse, 10);
      verseRow.classList.toggle("is-selected", Boolean(range && verseNumber >= range.start && verseNumber <= range.end));
    });
  }

  function updateSelectionTools() {
    const range = selectedRange();
    const hasSelection = Boolean(range);
    const { book, chapter, translation } = selectedState();
    const reference = hasSelection ? referenceForRange(book, chapter, range, translation) : "";
    const text = hasSelection ? selectedPassageText() : "";
    const shareUrl = hasSelection ? buildReaderUrl(book, chapter, translation, range.start) : "";

    selectionLabel.textContent = hasSelection
      ? `Selected: ${reference}`
      : "Click a verse number to select it. Click another verse number to select a range.";
    copySelectionButton.disabled = !hasSelection;
    shareSelectionButton.disabled = !hasSelection;
    setShareLinkState(textSelectionLink, hasSelection, `sms:?&body=${encodeURIComponent(text)}`);
    setShareLinkState(xSelectionLink, hasSelection, `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
    setShareLinkState(facebookSelectionLink, hasSelection, `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(text)}`);
    updateSelectedVerseStyles();

    if (hasSelection) {
      const endRow = readerBody.querySelector(`.bible-verse[data-verse="${range.end}"]`);
      if (endRow) {
        readerBody.insertBefore(selectionPanel, endRow.nextSibling);
      }
    } else {
      selectionHome.append(selectionPanel);
    }
  }

  function clearSelection() {
    selectedVerseStart = null;
    selectedVerseEnd = null;
    selectionStatus.textContent = "";
    updateSelectionTools();
  }

  function selectVerse(verseNumber) {
    selectionStatus.textContent = "";
    if (!selectedVerseStart || selectedVerseEnd !== selectedVerseStart) {
      selectedVerseStart = verseNumber;
      selectedVerseEnd = verseNumber;
    } else {
      selectedVerseEnd = verseNumber;
    }
    updateSelectionTools();
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    document.body.append(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    textArea.remove();
    if (!copied) {
      throw new Error("Copy command failed");
    }
  }

  async function copySelectedPassage() {
    const text = selectedPassageText();
    if (!text) {
      return;
    }
    try {
      await copyText(text);
      selectionStatus.textContent = "Passage copied.";
      trackAnalyticsEvent("bible_passage_copy", selectedAnalyticsPayload());
    } catch (error) {
      selectionStatus.textContent = "Could not copy automatically. Please select and copy the passage manually.";
    }
  }

  function selectedAnalyticsPayload() {
    const range = selectedRange();
    const { book, chapter, translation } = selectedState();
    return {
      bible_book: book.name,
      bible_chapter: chapter,
      bible_version: translation.shortLabel,
      verse_start: range ? range.start : undefined,
      verse_end: range ? range.end : undefined
    };
  }

  async function shareSelectedPassage() {
    const range = selectedRange();
    if (!range) {
      return;
    }
    const { book, chapter, translation } = selectedState();
    const text = selectedPassageText();
    const url = buildReaderUrl(book, chapter, translation, range.start);
    if (navigator.share) {
      try {
        await navigator.share({
          title: referenceForRange(book, chapter, range, translation),
          text,
          url
        });
        trackAnalyticsEvent("bible_passage_share", selectedAnalyticsPayload());
      } catch (error) {
        if (error.name !== "AbortError") {
          selectionStatus.textContent = "Could not open the share sheet. The passage is still selected.";
        }
      }
      return;
    }
    await copySelectedPassage();
    selectionStatus.textContent = "Sharing is not available in this browser, so the passage was copied instead.";
  }

  function highlightVerse(verseNumber) {
    const row = readerBody.querySelector(`.bible-verse[data-verse="${verseNumber}"]`);
    if (!row) {
      return;
    }
    row.classList.add("is-highlighted");
    row.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => row.classList.remove("is-highlighted"), 2600);
  }

  function renderChapterButtons(book, activeChapter) {
    chapterGrid.innerHTML = "";
    for (let chapter = 1; chapter <= book.chapters; chapter += 1) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bible-chapter-button";
      button.textContent = String(chapter);
      button.setAttribute("aria-label", `${book.name} chapter ${chapter}`);
      if (chapter === activeChapter) {
        button.classList.add("active");
        button.setAttribute("aria-current", "true");
      }
      button.addEventListener("click", () => {
        chapterSelect.value = String(chapter);
        loadSelectedChapter();
      });
      chapterGrid.append(button);
    }
  }

  function renderVerses(data) {
    readerBody.innerHTML = "";
    currentChapterVerses = data.verses;
    clearSelection();

    data.verses.forEach((verse) => {
      const verseRow = document.createElement("p");
      verseRow.className = "bible-verse";
      verseRow.dataset.verse = String(verse.verse);

      const verseNumber = document.createElement("button");
      verseNumber.type = "button";
      verseNumber.className = "bible-verse-number";
      verseNumber.textContent = String(verse.verse);
      verseNumber.setAttribute("aria-label", `Select verse ${verse.verse}`);
      verseNumber.addEventListener("click", () => selectVerse(verse.verse));

      const verseText = document.createElement("span");
      verseText.className = "bible-verse-text";
      verseText.textContent = cleanVerseText(verse.text);

      verseRow.append(verseNumber, " ", verseText);
      readerBody.append(verseRow);
    });

    if (pendingHighlightVerse) {
      const verse = pendingHighlightVerse;
      pendingHighlightVerse = null;
      window.setTimeout(() => {
        highlightVerse(verse);
        selectVerse(verse);
      }, 50);
    }
  }

  function populateSelectors() {
    translations.forEach((translation) => {
      const option = document.createElement("option");
      option.value = translation.id;
      option.textContent = `${translation.shortLabel} - ${translation.label}`;
      translationSelect.append(option);
    });

    books.forEach((book) => {
      const option = document.createElement("option");
      option.value = book.name;
      option.textContent = book.name;
      bookSelect.append(option);

      const searchOption = document.createElement("option");
      searchOption.value = String(books.indexOf(book) + 1);
      searchOption.textContent = book.name;
      searchBooksSelect.append(searchOption);
    });
  }

  function populateChapterSelect(book, activeChapter) {
    chapterSelect.innerHTML = "";
    for (let chapter = 1; chapter <= book.chapters; chapter += 1) {
      const option = document.createElement("option");
      option.value = String(chapter);
      option.textContent = String(chapter);
      chapterSelect.append(option);
    }
    chapterSelect.value = String(activeChapter);
  }

  async function fetchChapter(book, chapter, translation, signal) {
    const cacheKey = `${translation.id}:${book.name}:${chapter}`;
    if (chapterCache.has(cacheKey)) {
      return chapterCache.get(cacheKey);
    }

    const bookId = books.indexOf(book) + 1;
    const response = await fetch(`https://bolls.life/get-text/${translation.apiId}/${bookId}/${chapter}/`, { signal });
    if (!response.ok) {
      throw new Error(`Bible API request failed with status ${response.status}`);
    }

    const verses = await response.json();
    if (!Array.isArray(verses) || verses.length === 0) {
      throw new Error("Bible API response did not include verses");
    }

    const data = { verses };
    chapterCache.set(cacheKey, data);
    return data;
  }

  function setSearchStatus(message) {
    searchResults.innerHTML = "";
    const status = document.createElement("p");
    status.className = "bible-search-status";
    status.textContent = message;
    searchResults.append(status);
  }

  async function fetchSearchPage(translation, parsedQuery, bookFilter) {
    const params = new URLSearchParams({
      search: parsedQuery.seed,
      limit: "1000",
      page: "1"
    });
    if (bookFilter) {
      params.set("book", String(bookFilter));
    }
    if (parsedQuery.mode === "standard") {
      params.set("match_case", "false");
      params.set("match_whole", "true");
    }
    const response = await fetch(`https://bolls.life/v2/find/${translation.apiId}?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`Bible search failed with status ${response.status}`);
    }
    return response.json();
  }

  async function fetchScopedSearchResults(translation, parsedQuery) {
    if (searchScope.value === "ot") {
      return fetchSearchPage(translation, parsedQuery, "ot");
    }
    if (searchScope.value === "nt") {
      return fetchSearchPage(translation, parsedQuery, "nt");
    }
    if (searchScope.value === "current") {
      const currentBookId = books.indexOf(findBook(bookSelect.value)) + 1;
      return fetchSearchPage(translation, parsedQuery, currentBookId);
    }
    if (searchScope.value === "selected") {
      const selectedIds = selectedSearchBookIds();
      const pages = await Promise.all(selectedIds.map((bookId) => fetchSearchPage(translation, parsedQuery, bookId)));
      return {
        results: pages.flatMap((page) => Array.isArray(page.results) ? page.results : []),
        total: pages.reduce((sum, page) => sum + (Number.isFinite(page.total) ? page.total : 0), 0)
      };
    }
    return fetchSearchPage(translation, parsedQuery, "");
  }

  function renderSearchResults(data, query, translation, options = {}) {
    searchResults.innerHTML = "";
    const results = Array.isArray(data.results) ? data.results : [];
    if (results.length === 0) {
      setSearchStatus(`No Bible verses found for "${query}".`);
      return;
    }

    const summary = document.createElement("p");
    summary.className = "bible-search-status";
    const total = typeof options.total === "number" ? options.total : results.length;
    summary.textContent = `${results.length} of ${total} result${total === 1 ? "" : "s"} shown for "${query}".${options.note ? ` ${options.note}` : ""}`;
    searchResults.append(summary);

    const list = document.createElement("ul");
    list.className = "bible-search-list";
    results.forEach((result) => {
      const book = bookById(result.book);
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bible-search-result";
      const reference = document.createElement("span");
      reference.textContent = `${book.name} ${result.chapter}:${result.verse} (${translation.shortLabel})`;
      const preview = document.createElement("small");
      preview.textContent = cleanVerseText(result.text);
      button.append(reference, preview);
      button.addEventListener("click", () => {
        bookSelect.value = book.name;
        populateChapterSelect(book, result.chapter);
        chapterSelect.value = String(result.chapter);
        pendingHighlightVerse = result.verse;
        loadSelectedChapter();
        trackAnalyticsEvent("bible_search_result_click", {
          bible_book: book.name,
          bible_chapter: result.chapter,
          bible_verse: result.verse,
          bible_version: translation.shortLabel
        });
      });
      item.append(button);
      list.append(item);
    });
    searchResults.append(list);
  }

  async function runBibleSearch() {
    const query = searchInput.value.trim();
    if (query.length < 2) {
      setSearchStatus("Enter at least two characters to search the Bible.");
      return;
    }

    const { translation } = selectedState();
    const allowedBookIds = selectedSearchBookIds();
    if (searchScope.value === "selected" && allowedBookIds.length === 0) {
      setSearchStatus("Choose at least one book in Advanced search.");
      return;
    }
    setSearchStatus("Searching the Bible...");

    try {
      const parsedQuery = parseSearchQuery(query);
      const data = await fetchScopedSearchResults(translation, parsedQuery);
      const rawResults = Array.isArray(data.results) ? data.results : [];
      const scopedResults = rawResults.filter((result) => resultMatchesSearchScope(result, allowedBookIds));
      const filteredResults = parsedQuery.mode === "standard"
        ? scopedResults.filter((result) => resultMatchesParsedQuery(result, parsedQuery))
        : scopedResults;
      renderSearchResults(
        { results: filteredResults },
        query,
        translation,
        {
          total: filteredResults.length,
          note: `${parsedQuery.mode === "standard" ? "Exact phrase and & searches are matched strictly. " : ""}Scope: ${searchScopeLabel()}.`
        }
      );
      trackAnalyticsEvent("bible_search", {
        search_term: query,
        bible_version: translation.shortLabel,
        search_mode: parsedQuery.mode,
        search_scope: searchScope.value
      });
    } catch (error) {
      setSearchStatus("Could not search the Bible right now. Please check your connection and try again.");
    }
  }

  function selectedState() {
    const book = findBook(bookSelect.value);
    const chapter = sanitizeChapter(book, chapterSelect.value);
    const translation = findTranslation(translationSelect.value);
    return { book, chapter, translation };
  }

  async function loadSelectedChapter() {
    const { book, chapter, translation } = selectedState();
    populateChapterSelect(book, chapter);
    renderChapterButtons(book, chapter);

    readerTitle.textContent = `${book.name} ${chapter}`;
    readerMeta.textContent = `${translation.label} (${translation.shortLabel}) - ${translation.note}`;
    const previousDisabled = books.indexOf(book) === 0 && chapter === 1;
    const nextDisabled = books.indexOf(book) === books.length - 1 && chapter === book.chapters;
    [prevButton, readerPrevButton, bottomPrevButton].forEach((button) => {
      button.disabled = previousDisabled;
    });
    [nextButton, readerNextButton, bottomNextButton].forEach((button) => {
      button.disabled = nextDisabled;
    });
    updateUrl(book, chapter, translation);
    clearSelection();
    setReaderStatus("Loading Bible chapter...");

    if (currentRequest) {
      currentRequest.abort();
    }
    currentRequest = new AbortController();

    try {
      const data = await fetchChapter(book, chapter, translation, currentRequest.signal);
      renderVerses(data);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }
      setReaderStatus("Could not load this chapter right now. Please check your connection and try again.");
    }
  }

  function moveChapter(direction) {
    const { book, chapter } = selectedState();
    const bookIndex = books.indexOf(book);
    let nextBook = book;
    let nextChapter = chapter + direction;

    if (nextChapter < 1 && bookIndex > 0) {
      nextBook = books[bookIndex - 1];
      nextChapter = nextBook.chapters;
    } else if (nextChapter > book.chapters && bookIndex < books.length - 1) {
      nextBook = books[bookIndex + 1];
      nextChapter = 1;
    }

    bookSelect.value = nextBook.name;
    chapterSelect.value = String(nextChapter);
    loadSelectedChapter();
  }

  function applyInitialState() {
    const params = new URLSearchParams(window.location.search);
    const initialBook = findBook(params.get("book") || "John");
    const initialChapter = sanitizeChapter(initialBook, params.get("chapter") || "3");
    const initialTranslation = findTranslation(params.get("translation") || "web");
    const initialVerse = Number.parseInt(params.get("verse"), 10);
    initialSearchQuery = (params.get("q") || params.get("search") || "").trim();

    bookSelect.value = initialBook.name;
    translationSelect.value = initialTranslation.id;
    populateChapterSelect(initialBook, initialChapter);
    chapterSelect.value = String(initialChapter);
    if (Number.isInteger(initialVerse) && initialVerse > 0) {
      pendingHighlightVerse = initialVerse;
    }
    if (initialSearchQuery) {
      searchInput.value = initialSearchQuery;
    }
  }

  populateSelectors();
  applyTextSize(storedTextSizeValue());
  updateSearchBooksVisibility();
  applyInitialState();
  loadSelectedChapter();
  if (initialSearchQuery) {
    runBibleSearch();
  }

  bookSelect.addEventListener("change", () => {
    const book = findBook(bookSelect.value);
    populateChapterSelect(book, 1);
    loadSelectedChapter();
  });

  chapterSelect.addEventListener("change", loadSelectedChapter);
  translationSelect.addEventListener("change", loadSelectedChapter);
  prevButton.addEventListener("click", () => moveChapter(-1));
  nextButton.addEventListener("click", () => moveChapter(1));
  readerPrevButton.addEventListener("click", () => moveChapter(-1));
  readerNextButton.addEventListener("click", () => moveChapter(1));
  bottomPrevButton.addEventListener("click", () => moveChapter(-1));
  bottomNextButton.addEventListener("click", () => moveChapter(1));
  smallerTextButton.addEventListener("click", () => applyTextSize(textSizeValue - textSizeStep));
  largerTextButton.addEventListener("click", () => applyTextSize(textSizeValue + textSizeStep));
  textSizeRange.addEventListener("input", () => applyTextSize(Number.parseFloat(textSizeRange.value)));
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runBibleSearch();
  });
  searchScope.addEventListener("change", updateSearchBooksVisibility);
  includeSourceCheckbox.addEventListener("change", updateSelectionTools);
  copySelectionButton.addEventListener("click", copySelectedPassage);
  shareSelectionButton.addEventListener("click", shareSelectedPassage);
})();
