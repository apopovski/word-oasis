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

  const textSizes = [
    { label: "Small", value: "1rem" },
    { label: "Regular", value: "1.08rem" },
    { label: "Large", value: "1.22rem" },
    { label: "Extra large", value: "1.36rem" }
  ];
  const textSizeStorageKey = "word-oasis-bible-text-size";

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
  const listenLink = document.querySelector("#bible-listen-link");
  const smallerTextButton = document.querySelector("#bible-text-smaller");
  const largerTextButton = document.querySelector("#bible-text-larger");
  const textSizeLabel = document.querySelector("#bible-text-size-label");

  if (!bookSelect || !chapterSelect || !translationSelect || !chapterGrid || !readerTitle || !readerMeta || !readerBody || !readerCard || !prevButton || !nextButton || !listenLink || !smallerTextButton || !largerTextButton || !textSizeLabel) {
    return;
  }

  const chapterCache = new Map();
  let currentRequest = null;
  let textSizeIndex = 1;

  function storedTextSizeIndex() {
    try {
      const stored = Number.parseInt(window.localStorage.getItem(textSizeStorageKey), 10);
      return Number.isInteger(stored) && stored >= 0 && stored < textSizes.length ? stored : 1;
    } catch (error) {
      return 1;
    }
  }

  function saveTextSizeIndex(index) {
    try {
      window.localStorage.setItem(textSizeStorageKey, String(index));
    } catch (error) {
      return;
    }
  }

  function applyTextSize(index) {
    textSizeIndex = Math.max(0, Math.min(index, textSizes.length - 1));
    const size = textSizes[textSizeIndex];
    readerCard.style.setProperty("--bible-text-size", size.value);
    textSizeLabel.value = size.label;
    smallerTextButton.disabled = textSizeIndex === 0;
    largerTextButton.disabled = textSizeIndex === textSizes.length - 1;
    saveTextSizeIndex(textSizeIndex);
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

  function buildListenUrl(book, chapter) {
    return `https://live.bible.is/bible/ENGESV/${book.audioCode}/${chapter}`;
  }

  function trackAnalyticsEvent(name, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  }

  function setReaderStatus(message) {
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

    data.verses.forEach((verse) => {
      const verseRow = document.createElement("p");
      verseRow.className = "bible-verse";

      const verseNumber = document.createElement("sup");
      verseNumber.textContent = String(verse.verse);

      const verseText = document.createElement("span");
      verseText.textContent = cleanVerseText(verse.text);

      verseRow.append(verseNumber, " ", verseText);
      readerBody.append(verseRow);
    });
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
    listenLink.href = buildListenUrl(book, chapter);
    listenLink.setAttribute("aria-label", `Listen to ${book.name} chapter ${chapter} on Bible.is`);
    prevButton.disabled = books.indexOf(book) === 0 && chapter === 1;
    nextButton.disabled = books.indexOf(book) === books.length - 1 && chapter === book.chapters;
    updateUrl(book, chapter, translation);
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

    bookSelect.value = initialBook.name;
    translationSelect.value = initialTranslation.id;
    populateChapterSelect(initialBook, initialChapter);
    chapterSelect.value = String(initialChapter);
  }

  populateSelectors();
  applyTextSize(storedTextSizeIndex());
  applyInitialState();
  loadSelectedChapter();

  bookSelect.addEventListener("change", () => {
    const book = findBook(bookSelect.value);
    populateChapterSelect(book, 1);
    loadSelectedChapter();
  });

  chapterSelect.addEventListener("change", loadSelectedChapter);
  translationSelect.addEventListener("change", loadSelectedChapter);
  prevButton.addEventListener("click", () => moveChapter(-1));
  nextButton.addEventListener("click", () => moveChapter(1));
  smallerTextButton.addEventListener("click", () => applyTextSize(textSizeIndex - 1));
  largerTextButton.addEventListener("click", () => applyTextSize(textSizeIndex + 1));
  listenLink.addEventListener("click", () => {
    const { book, chapter, translation } = selectedState();
    trackAnalyticsEvent("bible_audio_click", {
      bible_book: book.name,
      bible_chapter: chapter,
      bible_version: translation.shortLabel
    });
  });
})();
