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
      <button type="button" id="bible-share-graphic" aria-expanded="false" disabled>Share graphic</button>
      <button type="button" id="bible-save-selection" aria-pressed="false" disabled>Save passage</button>
      <button type="button" id="bible-memorize-selection" disabled>Memorize</button>
      <a id="bible-text-selection" aria-disabled="true">Text</a>
      <a id="bible-x-selection" target="_blank" rel="noopener" aria-disabled="true">X</a>
      <a id="bible-facebook-selection" target="_blank" rel="noopener" aria-disabled="true">Facebook</a>
    </div>
    <div class="bible-graphic-customizer" id="bible-graphic-customizer" hidden>
      <fieldset>
        <legend>Choose a background</legend>
        <div class="bible-graphic-palettes">
          <label class="bible-graphic-palette bible-graphic-palette-midnight">
            <input type="radio" name="bible-graphic-palette" value="midnight">
            <span aria-hidden="true"></span>
            <small>Midnight</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-ocean">
            <input type="radio" name="bible-graphic-palette" value="ocean">
            <span aria-hidden="true"></span>
            <small>Ocean</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-forest">
            <input type="radio" name="bible-graphic-palette" value="forest">
            <span aria-hidden="true"></span>
            <small>Forest</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-plum">
            <input type="radio" name="bible-graphic-palette" value="plum">
            <span aria-hidden="true"></span>
            <small>Plum</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-rose">
            <input type="radio" name="bible-graphic-palette" value="rose">
            <span aria-hidden="true"></span>
            <small>Rose</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-golden">
            <input type="radio" name="bible-graphic-palette" value="golden">
            <span aria-hidden="true"></span>
            <small>Golden</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-teal">
            <input type="radio" name="bible-graphic-palette" value="teal">
            <span aria-hidden="true"></span>
            <small>Teal</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-sunset">
            <input type="radio" name="bible-graphic-palette" value="sunset">
            <span aria-hidden="true"></span>
            <small>Sunset</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-lavender">
            <input type="radio" name="bible-graphic-palette" value="lavender">
            <span aria-hidden="true"></span>
            <small>Lavender</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-auto">
            <input type="radio" name="bible-graphic-palette" value="auto" checked>
            <span aria-hidden="true">✦</span>
            <small>Automatic</small>
          </label>
          <label class="bible-graphic-palette bible-graphic-palette-custom">
            <input type="radio" name="bible-graphic-palette" value="custom">
            <span aria-hidden="true">+</span>
            <small>Custom</small>
          </label>
        </div>
      </fieldset>
      <label class="bible-graphic-custom-color" id="bible-graphic-custom-color" hidden>
        Custom color
        <span>
          <input type="color" id="bible-graphic-color-input" value="#2563a6">
          <output id="bible-graphic-color-value" for="bible-graphic-color-input">#2563A6</output>
        </span>
      </label>
      <button class="bible-graphic-create" id="bible-share-graphic-confirm" type="button">
        Share selected color
      </button>
    </div>
    <div class="bible-memory-lab" id="bible-memory-lab" hidden>
      <div class="bible-memory-controls">
        <label>
          Version
          <select id="bible-memory-version"></select>
        </label>
        <label>
          Practice mode
          <select id="bible-memory-mode">
            <option value="full">Show full passage</option>
            <option value="keywords">Show key words only</option>
            <option value="initials">Show first letters</option>
            <option value="hidden">Hide the passage</option>
          </select>
        </label>
      </div>
      <button class="bible-memory-card" id="bible-memory-card" type="button" aria-pressed="false">
        <span class="bible-memory-face bible-memory-front">
          <span class="bible-memory-label">Memorize</span>
          <strong id="bible-memory-reference">Select a passage</strong>
          <small>Tap to reveal your practice prompt.</small>
        </span>
        <span class="bible-memory-face bible-memory-back">
          <span class="bible-memory-label">Practice prompt</span>
          <span id="bible-memory-text"></span>
        </span>
      </button>
      <div class="bible-memory-actions">
        <button type="button" id="bible-memory-flip">Flip card</button>
        <button type="button" id="bible-memory-reset">Show reference first</button>
        <button type="button" id="bible-memory-save">Save for practice</button>
      </div>
      <p class="bible-memory-status" id="bible-memory-status" aria-live="polite"></p>
    </div>
    <p class="bible-selection-status" id="bible-selection-status" aria-live="polite"></p>
  `;
  selectionHome.append(selectionPanel);
  const selectionLabel = selectionPanel.querySelector("#bible-selection-label");
  const includeSourceCheckbox = selectionPanel.querySelector("#bible-include-source");
  const copySelectionButton = selectionPanel.querySelector("#bible-copy-selection");
  const shareSelectionButton = selectionPanel.querySelector("#bible-share-selection");
  const shareGraphicButton = selectionPanel.querySelector("#bible-share-graphic");
  const graphicCustomizer = selectionPanel.querySelector("#bible-graphic-customizer");
  const graphicPaletteInputs = [...selectionPanel.querySelectorAll('input[name="bible-graphic-palette"]')];
  const graphicCustomColorField = selectionPanel.querySelector("#bible-graphic-custom-color");
  const graphicColorInput = selectionPanel.querySelector("#bible-graphic-color-input");
  const graphicColorValue = selectionPanel.querySelector("#bible-graphic-color-value");
  const shareGraphicConfirmButton = selectionPanel.querySelector("#bible-share-graphic-confirm");
  const memorizeSelectionButton = selectionPanel.querySelector("#bible-memorize-selection");
  const saveSelectionButton = selectionPanel.querySelector("#bible-save-selection");
  const textSelectionLink = selectionPanel.querySelector("#bible-text-selection");
  const xSelectionLink = selectionPanel.querySelector("#bible-x-selection");
  const facebookSelectionLink = selectionPanel.querySelector("#bible-facebook-selection");
  const selectionStatus = selectionPanel.querySelector("#bible-selection-status");
  const memoryLab = selectionPanel.querySelector("#bible-memory-lab");
  const memoryVersionSelect = selectionPanel.querySelector("#bible-memory-version");
  const memoryModeSelect = selectionPanel.querySelector("#bible-memory-mode");
  const memoryCard = selectionPanel.querySelector("#bible-memory-card");
  const memoryReference = selectionPanel.querySelector("#bible-memory-reference");
  const memoryText = selectionPanel.querySelector("#bible-memory-text");
  const memoryFlipButton = selectionPanel.querySelector("#bible-memory-flip");
  const memoryResetButton = selectionPanel.querySelector("#bible-memory-reset");
  const memorySaveButton = selectionPanel.querySelector("#bible-memory-save");
  const memoryStatus = selectionPanel.querySelector("#bible-memory-status");

  const chapterCache = new Map();
  let currentRequest = null;
  let currentChapterVerses = [];
  let pendingHighlightVerse = null;
  let selectedVerseStart = null;
  let selectedVerseEnd = null;
  let textSizeValue = defaultTextSize;
  let initialSearchQuery = "";
  let memoryIsFlipped = false;
  let scriptureGraphicCache = { key: "", file: null, promise: null };

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

  function updateUrl(book, chapter, translation, verse) {
    const params = new URLSearchParams({
      book: book.name,
      chapter: String(chapter),
      translation: translation.id
    });
    if (verse) {
      params.set("verse", String(verse));
    }
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

  function libraryItemForRange(type, book, chapter, range, translation, verses) {
    const reference = referenceForRange(book, chapter, range, translation);
    return {
      id: `${type}:${translation.id}:${book.name}:${chapter}:${range.start}-${range.end}`,
      type,
      title: reference,
      subtitle: plainPassageForRange(range, verses),
      url: buildReaderUrl(book, chapter, translation, range.start)
    };
  }

  function saveCurrentPassage() {
    const range = selectedRange();
    if (!range || !window.WordOasisLibrary) return;
    const { book, chapter, translation } = selectedState();
    const item = libraryItemForRange("passage", book, chapter, range, translation, currentChapterVerses);

    if (window.WordOasisLibrary.isSaved(item.id)) {
      window.WordOasisLibrary.remove(item.id);
      selectionStatus.textContent = "Passage removed from your private library.";
    } else {
      window.WordOasisLibrary.save(item);
      selectionStatus.textContent = "Passage saved in your private library.";
      trackAnalyticsEvent("bible_passage_save", { bible_version: translation.shortLabel });
    }
    updateSelectionTools();
  }

  async function saveMemoryPassage() {
    const range = selectedRange();
    if (!range || !window.WordOasisLibrary) return;
    const { book, chapter } = selectedState();
    const translation = findTranslation(memoryVersionSelect.value || translationSelect.value);
    memoryStatus.textContent = "Saving passage for practice...";

    try {
      const data = translation.id === translationSelect.value
        ? { verses: currentChapterVerses }
        : await fetchChapter(book, chapter, translation);
      const item = libraryItemForRange("memory", book, chapter, range, translation, data.verses);
      window.WordOasisLibrary.save(item);
      memoryStatus.textContent = `${item.title} saved for practice in this browser.`;
      trackAnalyticsEvent("bible_memory_save", { bible_version: translation.shortLabel });
    } catch (error) {
      memoryStatus.textContent = "That passage could not be saved right now.";
    }
  }

  function passageForRangeFromVerses(range, verses) {
    return verses
      .filter((verse) => verse.verse >= range.start && verse.verse <= range.end)
      .map((verse) => `${verse.verse}. ${cleanVerseText(verse.text)}`)
      .join("\n");
  }

  function passageForRange(range) {
    return passageForRangeFromVerses(range, currentChapterVerses);
  }

  function plainPassageForRange(range, verses) {
    return verses
      .filter((verse) => verse.verse >= range.start && verse.verse <= range.end)
      .map((verse) => cleanVerseText(verse.text))
      .join(" ");
  }

  const memoryKeyWordStopWords = new Set([
    "a", "an", "and", "are", "as", "at", "be", "been", "being", "but", "by",
    "did", "do", "does", "for", "from", "had", "has", "have", "he", "her",
    "hers", "him", "his", "i", "if", "in", "is", "it", "its", "me", "my",
    "nor", "not", "of", "on", "or", "our", "ours", "she", "so", "than",
    "that", "the", "their", "theirs", "them", "then", "there", "these",
    "they", "this", "those", "to", "us", "was", "we", "were", "what",
    "when", "where", "which", "who", "whom", "why", "will", "with", "you",
    "your", "yours"
  ]);

  const shortMemoryKeyWords = new Set([
    "god", "joy", "law", "life", "lord", "love", "peace", "sin", "son"
  ]);

  function isMemoryKeyWord(word) {
    const normalized = word.toLowerCase().replace(/[’']/g, "");
    return shortMemoryKeyWords.has(normalized)
      || (normalized.length >= 4 && !memoryKeyWordStopWords.has(normalized));
  }

  function renderKeyWordPrompt(text) {
    const fragment = document.createDocumentFragment();

    text.split(/(\b[\w’'-]+\b)/g).forEach((part) => {
      if (!/^\b[\w’'-]+\b$/.test(part)) {
        fragment.append(document.createTextNode(part));
        return;
      }

      if (isMemoryKeyWord(part)) {
        fragment.append(document.createTextNode(part));
        return;
      }

      const hiddenWord = document.createElement("span");
      hiddenWord.className = "bible-memory-blurred-word";
      hiddenWord.setAttribute("aria-hidden", "true");
      hiddenWord.textContent = part;
      fragment.append(hiddenWord);
    });

    memoryText.replaceChildren(fragment);
  }

  function initialsPrompt(text) {
    return text.replace(/\b[\w’'-]+\b/g, (word) => `${word.charAt(0) || ""}.`);
  }

  function memoryPromptText(text, mode) {
    if (mode === "initials") {
      return initialsPrompt(text);
    }
    if (mode === "hidden") {
      return "Passage hidden. Recite it from memory, then switch modes or flip again to review.";
    }
    return text;
  }

  function renderMemoryPrompt(text, mode) {
    if (mode === "keywords") {
      memoryText.setAttribute("aria-label", "Key words are shown. The remaining words are blurred.");
      renderKeyWordPrompt(text);
      return;
    }

    memoryText.removeAttribute("aria-label");
    memoryText.textContent = memoryPromptText(text, mode);
  }

  function setMemoryFlipped(isFlipped) {
    memoryIsFlipped = isFlipped;
    memoryCard.classList.toggle("is-flipped", memoryIsFlipped);
    memoryCard.setAttribute("aria-pressed", String(memoryIsFlipped));
    memoryFlipButton.textContent = memoryIsFlipped ? "Show reference" : "Reveal prompt";
  }

  async function updateMemoryCard() {
    const range = selectedRange();
    if (!range || memoryLab.hidden) {
      return;
    }
    const { book, chapter } = selectedState();
    const memoryTranslation = findTranslation(memoryVersionSelect.value || translationSelect.value);
    memoryStatus.textContent = "Preparing memory card...";
    try {
      const data = memoryTranslation.id === translationSelect.value
        ? { verses: currentChapterVerses }
        : await fetchChapter(book, chapter, memoryTranslation);
      const reference = referenceForRange(book, chapter, range, memoryTranslation);
      const passageText = plainPassageForRange(range, data.verses);
      memoryReference.textContent = reference;
      renderMemoryPrompt(passageText, memoryModeSelect.value);
      memoryStatus.textContent = `Practicing ${reference}.`;
    } catch (error) {
      memoryStatus.textContent = "Could not load that version for memorization. Try another version.";
    }
  }

  function openMemoryCard() {
    const range = selectedRange();
    if (!range) {
      return;
    }
    memoryLab.hidden = false;
    memoryVersionSelect.value = translationSelect.value;
    setMemoryFlipped(false);
    updateMemoryCard();
    trackAnalyticsEvent("bible_memorize_open", selectedAnalyticsPayload());
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

  function selectedGraphicOptions() {
    const range = selectedRange();
    if (!range) {
      return null;
    }
    const { book, chapter, translation } = selectedState();
    return {
      text: plainPassageForRange(range, currentChapterVerses),
      reference: referenceForRange(book, chapter, range, translation),
      label: range.start === range.end ? "Bible verse" : "Scripture passage",
      palette: graphicPaletteInputs.find((input) => input.checked)?.value || "auto",
      customColor: graphicColorInput.value
    };
  }

  function prepareSelectedGraphic() {
    const options = selectedGraphicOptions();
    const renderer = window.WordOasisScriptureGraphic;
    if (!options || !renderer) {
      scriptureGraphicCache = { key: "", file: null, promise: null };
      return;
    }

    const key = `${options.reference}:${options.text}:${options.palette}:${options.customColor}`;
    if (scriptureGraphicCache.key === key) {
      return;
    }

    const promise = renderer.createFile(options);
    scriptureGraphicCache = { key, file: null, promise };
    promise
      .then((file) => {
        if (scriptureGraphicCache.key === key) {
          scriptureGraphicCache.file = file;
        }
      })
      .catch(() => {
        if (scriptureGraphicCache.key === key) {
          scriptureGraphicCache.promise = null;
        }
      });
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
    shareGraphicButton.disabled = !hasSelection;
    saveSelectionButton.disabled = !hasSelection;
    memorizeSelectionButton.disabled = !hasSelection;
    setShareLinkState(textSelectionLink, hasSelection, `sms:?&body=${encodeURIComponent(text)}`);
    setShareLinkState(xSelectionLink, hasSelection, `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
    setShareLinkState(facebookSelectionLink, hasSelection, `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(text)}`);
    updateSelectedVerseStyles();

    if (hasSelection && window.WordOasisLibrary) {
      const item = libraryItemForRange("passage", book, chapter, range, translation, currentChapterVerses);
      const saved = window.WordOasisLibrary.isSaved(item.id);
      saveSelectionButton.setAttribute("aria-pressed", String(saved));
      saveSelectionButton.textContent = saved ? "Saved" : "Save passage";
    } else {
      saveSelectionButton.setAttribute("aria-pressed", "false");
      saveSelectionButton.textContent = "Save passage";
    }

    if (hasSelection) {
      updateUrl(book, chapter, translation, range.start);
      const endRow = readerBody.querySelector(`.bible-verse[data-verse="${range.end}"]`);
      if (endRow) {
        readerBody.insertBefore(selectionPanel, endRow.nextSibling);
      }
      if (!memoryLab.hidden) {
        updateMemoryCard();
      }
      prepareSelectedGraphic();
    } else {
      memoryLab.hidden = true;
      setMemoryFlipped(false);
      scriptureGraphicCache = { key: "", file: null, promise: null };
      graphicCustomizer.hidden = true;
      shareGraphicButton.setAttribute("aria-expanded", "false");
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

  async function shareSelectedGraphic() {
    const options = selectedGraphicOptions();
    const renderer = window.WordOasisScriptureGraphic;
    if (!options || !renderer) {
      selectionStatus.textContent = "The Scripture graphic tools are not available right now.";
      return;
    }

    const key = `${options.reference}:${options.text}:${options.palette}:${options.customColor}`;
    selectionStatus.textContent = "Creating your Scripture graphic...";

    try {
      if (scriptureGraphicCache.key !== key) {
        prepareSelectedGraphic();
      }
      const file = scriptureGraphicCache.file || await scriptureGraphicCache.promise;
      if (!file) {
        throw new Error("The Scripture graphic could not be created.");
      }

      const sharePayload = { files: [file] };
      if (includeSourceCheckbox.checked) {
        const range = selectedRange();
        const { book, chapter, translation } = selectedState();
        sharePayload.url = buildReaderUrl(book, chapter, translation, range.start);
      }
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share(sharePayload);
          selectionStatus.textContent = "Scripture graphic shared.";
          trackAnalyticsEvent("bible_passage_graphic_share", {
            ...selectedAnalyticsPayload(),
            graphic_palette: options.palette,
            share_method: "native"
          });
          return;
        } catch (error) {
          if (error.name === "AbortError") {
            selectionStatus.textContent = "";
            return;
          }
        }
      }

      renderer.downloadFile(file);
      selectionStatus.textContent = "Scripture graphic saved. Attach it to your post or message.";
      trackAnalyticsEvent("bible_passage_graphic_share", {
        ...selectedAnalyticsPayload(),
        graphic_palette: options.palette,
        share_method: "download"
      });
    } catch (error) {
      selectionStatus.textContent = error.message || "The Scripture graphic could not be created. Try a shorter passage.";
    }
  }

  function toggleGraphicCustomizer() {
    const willOpen = graphicCustomizer.hidden;
    graphicCustomizer.hidden = !willOpen;
    shareGraphicButton.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) {
      graphicPaletteInputs.find((input) => input.checked)?.focus();
    }
  }

  function updateCustomColorControls() {
    const isCustom = graphicPaletteInputs.some((input) => input.checked && input.value === "custom");
    graphicCustomColorField.hidden = !isCustom;
    graphicColorValue.value = graphicColorInput.value.toUpperCase();
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

      const memoryOption = document.createElement("option");
      memoryOption.value = translation.id;
      memoryOption.textContent = `${translation.shortLabel} - ${translation.label}`;
      memoryVersionSelect.append(memoryOption);
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
        bible_version: translation.shortLabel,
        search_mode: parsedQuery.mode,
        search_scope: searchScope.value,
        result_count: filteredResults.length,
        has_results: filteredResults.length > 0
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
    updateUrl(book, chapter, translation, pendingHighlightVerse);
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
  shareGraphicButton.addEventListener("click", toggleGraphicCustomizer);
  shareGraphicConfirmButton.addEventListener("click", shareSelectedGraphic);
  graphicPaletteInputs.forEach((input) => {
    input.addEventListener("change", () => {
      updateCustomColorControls();
      scriptureGraphicCache = { key: "", file: null, promise: null };
      prepareSelectedGraphic();
    });
  });
  graphicColorInput.addEventListener("input", () => {
    const customInput = graphicPaletteInputs.find((input) => input.value === "custom");
    customInput.checked = true;
    updateCustomColorControls();
    scriptureGraphicCache = { key: "", file: null, promise: null };
    prepareSelectedGraphic();
  });
  memorizeSelectionButton.addEventListener("click", openMemoryCard);
  saveSelectionButton.addEventListener("click", saveCurrentPassage);
  memoryVersionSelect.addEventListener("change", updateMemoryCard);
  memoryModeSelect.addEventListener("change", updateMemoryCard);
  memoryCard.addEventListener("click", () => setMemoryFlipped(!memoryIsFlipped));
  memoryFlipButton.addEventListener("click", () => setMemoryFlipped(!memoryIsFlipped));
  memoryResetButton.addEventListener("click", () => setMemoryFlipped(false));
  memorySaveButton.addEventListener("click", saveMemoryPassage);
  window.addEventListener("wordoasis:library-change", updateSelectionTools);
})();
