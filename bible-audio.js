(function () {
  const MANIFEST_BASE = "/bible-audio/kjv/";
  const DEFAULT_AUDIO_BASE = "https://pub-50d2b4a98bd9401d87e84e0ead5667fe.r2.dev/kjv/";
  const speedStorageKey = "word-oasis-bible-audio-speed";
  const modeStorageKey = "word-oasis-bible-audio-mode";
  const titlesStorageKey = "word-oasis-bible-audio-titles";

  const speeds = [0.75, 1, 1.25, 1.5, 1.75, 2];
  const modes = [
    { id: "continuous", label: "Continuous" },
    { id: "chapter", label: "Chapter loop" },
    { id: "verse", label: "Verse loop" },
    { id: "selection", label: "Selection loop" }
  ];

  const readerCard = document.querySelector(".bible-reader-card");
  const readerBody = document.querySelector("#bible-reader-body");
  if (!readerCard || !readerBody) {
    return;
  }

  const audioBase = String(window.WORD_OASIS_AUDIO_BASE || DEFAULT_AUDIO_BASE).replace(/\/?$/, "/");
  const audio = new Audio();
  audio.preload = "auto";

  let rootManifestPromise = null;
  let availableSlugs = new Set();
  let chapterManifest = null;
  let currentBook = null;
  let currentChapter = null;
  let queue = [];
  let queueIndex = -1;
  let isSeeking = false;
  let prefetchAudio = null;

  const player = document.createElement("section");
  player.className = "bible-audio-player";
  player.hidden = true;
  player.setAttribute("aria-label", "Bible audio player");
  player.innerHTML = `
    <div class="bible-audio-player-main">
      <div class="bible-audio-player-copy">
        <p class="bible-audio-eyebrow">KJV audio</p>
        <strong class="bible-audio-now-playing" id="bible-audio-now-playing">Ready to listen</strong>
        <p class="bible-audio-note" id="bible-audio-note">Listen continuously, or loop a verse to memorize.</p>
      </div>
      <div class="bible-audio-transport" role="group" aria-label="Playback controls">
        <button type="button" id="bible-audio-prev" aria-label="Previous clip">⏮</button>
        <button type="button" id="bible-audio-play" aria-label="Play chapter" class="bible-audio-play">▶</button>
        <button type="button" id="bible-audio-next" aria-label="Next clip">⏭</button>
      </div>
    </div>
    <div class="bible-audio-progress-row">
      <span id="bible-audio-time-current">0:00</span>
      <input id="bible-audio-seek" type="range" min="0" max="1000" value="0" step="1" aria-label="Seek in current clip">
      <span id="bible-audio-time-total">0:00</span>
    </div>
    <div class="bible-audio-settings">
      <label class="bible-audio-field">
        <span>Speed</span>
        <select id="bible-audio-speed" aria-label="Playback speed"></select>
      </label>
      <label class="bible-audio-field">
        <span>Repeat</span>
        <select id="bible-audio-mode" aria-label="Repeat mode"></select>
      </label>
      <label class="bible-audio-check">
        <input id="bible-audio-titles" type="checkbox">
        <span>Play chapter title</span>
      </label>
    </div>
  `;

  const insertBefore = document.querySelector("#bible-selection-home")
    || document.querySelector(".bible-selection-hint")
    || readerBody;
  insertBefore.parentNode.insertBefore(player, insertBefore);

  const nowPlaying = player.querySelector("#bible-audio-now-playing");
  const noteEl = player.querySelector("#bible-audio-note");
  const playButton = player.querySelector("#bible-audio-play");
  const prevButton = player.querySelector("#bible-audio-prev");
  const nextButton = player.querySelector("#bible-audio-next");
  const seekInput = player.querySelector("#bible-audio-seek");
  const timeCurrent = player.querySelector("#bible-audio-time-current");
  const timeTotal = player.querySelector("#bible-audio-time-total");
  const speedSelect = player.querySelector("#bible-audio-speed");
  const modeSelect = player.querySelector("#bible-audio-mode");
  const titlesCheckbox = player.querySelector("#bible-audio-titles");

  speeds.forEach((speed) => {
    const option = document.createElement("option");
    option.value = String(speed);
    option.textContent = speed === 1 ? "1×" : `${speed}×`;
    speedSelect.append(option);
  });
  modes.forEach((mode) => {
    const option = document.createElement("option");
    option.value = mode.id;
    option.textContent = mode.label;
    modeSelect.append(option);
  });

  function readStorage(key, fallback) {
    try {
      const value = window.localStorage.getItem(key);
      return value == null ? fallback : value;
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore private-mode quota errors.
    }
  }

  speedSelect.value = readStorage(speedStorageKey, "1");
  if (![...speedSelect.options].some((option) => option.value === speedSelect.value)) {
    speedSelect.value = "1";
  }
  modeSelect.value = readStorage(modeStorageKey, "continuous");
  if (![...modeSelect.options].some((option) => option.value === modeSelect.value)) {
    modeSelect.value = "continuous";
  }
  titlesCheckbox.checked = readStorage(titlesStorageKey, "0") === "1";
  audio.playbackRate = Number.parseFloat(speedSelect.value) || 1;

  function audioSlugForBook(bookName) {
    return String(bookName)
      .toLowerCase()
      .replace(/([1-3])\s+/g, "$1-")
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function mediaUrl(relativePath) {
    return `${audioBase}${String(relativePath).replace(/^\//, "")}`;
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }
    const whole = Math.floor(seconds);
    const mins = Math.floor(whole / 60);
    const secs = String(whole % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function trackAnalyticsEvent(name, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  }

  async function loadRootManifest() {
    if (!rootManifestPromise) {
      rootManifestPromise = fetch(`${MANIFEST_BASE}manifest.json`, { cache: "no-cache" })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error("Audio manifest unavailable");
          }
          const data = await response.json();
          availableSlugs = new Set(
            (Array.isArray(data.books) ? data.books : [])
              .filter((book) => book && book.available !== false)
              .map((book) => book.slug)
          );
          return data;
        })
        .catch((error) => {
          availableSlugs = new Set();
          throw error;
        });
    }
    return rootManifestPromise;
  }

  function selectedVerseRange() {
    const selected = readerBody.querySelectorAll(".bible-verse.is-selected[data-verse]");
    if (!selected.length) {
      return null;
    }
    const numbers = [...selected].map((row) => Number.parseInt(row.dataset.verse, 10)).filter(Number.isFinite);
    if (!numbers.length) {
      return null;
    }
    return { start: Math.min(...numbers), end: Math.max(...numbers) };
  }

  function buildQueue(startVerse = 1, options = {}) {
    if (!chapterManifest) {
      return [];
    }
    const items = [];
    const includeTitles = options.forceTitles ?? titlesCheckbox.checked;
    const range = options.range || null;
    const fromVerse = range ? range.start : startVerse;

    if (includeTitles && chapterManifest.chapterUrl && !range && fromVerse <= 1) {
      items.push({
        type: "chapter",
        label: `${chapterManifest.bookName} ${chapterManifest.chapter} title`,
        verse: null,
        url: mediaUrl(chapterManifest.chapterUrl)
      });
    }

    (chapterManifest.verses || []).forEach((relativePath, index) => {
      const verse = index + 1;
      if (range && (verse < range.start || verse > range.end)) {
        return;
      }
      if (!range && verse < fromVerse) {
        return;
      }
      items.push({
        type: "verse",
        label: `${chapterManifest.bookName} ${chapterManifest.chapter}:${verse}`,
        verse,
        url: mediaUrl(relativePath)
      });
    });
    return items;
  }

  function clearPlayingHighlight() {
    readerBody.querySelectorAll(".bible-verse.is-playing").forEach((row) => {
      row.classList.remove("is-playing");
    });
  }

  function highlightPlayingVerse(verse) {
    clearPlayingHighlight();
    if (!verse) {
      return;
    }
    const row = readerBody.querySelector(`.bible-verse[data-verse="${verse}"]`);
    if (!row) {
      return;
    }
    row.classList.add("is-playing");
    row.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function updatePlayButton() {
    const playing = !audio.paused && !audio.ended;
    playButton.textContent = playing ? "⏸" : "▶";
    playButton.setAttribute("aria-label", playing ? "Pause" : "Play");
  }

  function updateNowPlaying() {
    const item = queue[queueIndex];
    if (!item) {
      nowPlaying.textContent = chapterManifest
        ? `${chapterManifest.bookName} ${chapterManifest.chapter} audio`
        : "Ready to listen";
      return;
    }
    nowPlaying.textContent = item.label;
  }

  function updateProgress() {
    const duration = audio.duration;
    const current = audio.currentTime;
    timeCurrent.textContent = formatTime(current);
    timeTotal.textContent = formatTime(duration);
    if (!isSeeking && Number.isFinite(duration) && duration > 0) {
      seekInput.value = String(Math.round((current / duration) * 1000));
    }
  }

  function prefetchNext() {
    const next = queue[queueIndex + 1];
    if (!next) {
      prefetchAudio = null;
      return;
    }
    prefetchAudio = new Audio();
    prefetchAudio.preload = "auto";
    prefetchAudio.src = next.url;
  }

  async function playIndex(index) {
    if (index < 0 || index >= queue.length) {
      return false;
    }
    queueIndex = index;
    const item = queue[queueIndex];
    updateNowPlaying();
    highlightPlayingVerse(item.verse);
    audio.src = item.url;
    audio.playbackRate = Number.parseFloat(speedSelect.value) || 1;
    try {
      await audio.play();
      updatePlayButton();
      prefetchNext();
      trackAnalyticsEvent("bible_audio_play", {
        bible_book: chapterManifest?.bookName,
        bible_chapter: chapterManifest?.chapter,
        bible_verse: item.verse || 0,
        audio_mode: modeSelect.value
      });
      return true;
    } catch (error) {
      nowPlaying.textContent = "Could not play audio";
      noteEl.textContent = "Check your connection, or try again in a moment.";
      updatePlayButton();
      return false;
    }
  }

  function stopPlayback({ keepHighlight = false } = {}) {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    queue = [];
    queueIndex = -1;
    if (!keepHighlight) {
      clearPlayingHighlight();
    }
    updatePlayButton();
    updateNowPlaying();
    seekInput.value = "0";
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = "0:00";
  }

  async function advanceAfterEnded() {
    const mode = modeSelect.value;
    const current = queue[queueIndex];

    if (mode === "verse" && current) {
      await playIndex(queueIndex);
      return;
    }

    if (mode === "selection" && current) {
      if (queueIndex < queue.length - 1) {
        await playIndex(queueIndex + 1);
      } else {
        await playIndex(0);
      }
      return;
    }

    if (queueIndex < queue.length - 1) {
      await playIndex(queueIndex + 1);
      return;
    }

    if (mode === "chapter") {
      await playIndex(0);
      return;
    }

    if (mode === "continuous") {
      const nextButtonEl = document.querySelector("#bible-reader-next");
      if (nextButtonEl && !nextButtonEl.disabled) {
        const resume = { book: currentBook, chapter: currentChapter };
        window.WordOasisBibleAudio._resumeAfterChapterChange = {
          from: resume,
          play: true
        };
        nextButtonEl.click();
        return;
      }
    }

    updatePlayButton();
    clearPlayingHighlight();
  }

  function enhanceVerseRows() {
    readerBody.querySelectorAll(".bible-verse").forEach((row) => {
      if (row.querySelector(".bible-verse-play")) {
        return;
      }
      const verse = Number.parseInt(row.dataset.verse, 10);
      if (!Number.isFinite(verse)) {
        return;
      }
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bible-verse-play";
      button.setAttribute("aria-label", `Play verse ${verse}`);
      button.title = "Play verse";
      button.textContent = "▶";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        playFromVerse(verse);
      });
      row.append(button);
    });
  }

  async function playFromVerse(verse, options = {}) {
    const range = modeSelect.value === "selection"
      ? (options.range || selectedVerseRange() || { start: verse, end: verse })
      : null;
    queue = buildQueue(verse, { range });
    if (!queue.length) {
      nowPlaying.textContent = "No audio for this selection";
      return;
    }
    const startIndex = range
      ? Math.max(0, queue.findIndex((item) => item.verse === verse))
      : 0;
    await playIndex(startIndex === -1 ? 0 : startIndex);
  }

  async function playChapter() {
    if (modeSelect.value === "selection") {
      const range = selectedVerseRange();
      if (range) {
        await playFromVerse(range.start, { range });
        return;
      }
    }
    queue = buildQueue(1);
    if (!queue.length) {
      nowPlaying.textContent = "No audio clips found";
      return;
    }
    await playIndex(0);
  }

  async function togglePlay() {
    if (!chapterManifest) {
      return;
    }
    if (!audio.paused && audio.src) {
      audio.pause();
      updatePlayButton();
      return;
    }
    if (queueIndex >= 0 && audio.src) {
      try {
        await audio.play();
        updatePlayButton();
      } catch (error) {
        await playChapter();
      }
      return;
    }
    await playChapter();
  }

  async function bindChapter(bookName, chapter, translationId) {
    currentBook = bookName;
    currentChapter = chapter;
    stopPlayback();

    try {
      await loadRootManifest();
    } catch (error) {
      player.hidden = true;
      return;
    }

    const slug = audioSlugForBook(bookName);
    if (!availableSlugs.has(slug)) {
      player.hidden = true;
      chapterManifest = null;
      return;
    }

    try {
      const response = await fetch(
        `${MANIFEST_BASE}${slug}/${String(chapter).padStart(3, "0")}.json`,
        { cache: "no-cache" }
      );
      if (!response.ok) {
        throw new Error("Chapter audio missing");
      }
      chapterManifest = await response.json();
    } catch (error) {
      player.hidden = true;
      chapterManifest = null;
      return;
    }

    player.hidden = false;
    noteEl.textContent = translationId && translationId !== "kjv"
      ? "Audio is King James Version. Text can stay on your selected translation."
      : "Listen continuously, or loop a verse to memorize.";
    updateNowPlaying();
    enhanceVerseRows();

    const resume = window.WordOasisBibleAudio._resumeAfterChapterChange;
    if (
      resume?.play
      && resume.from
      && (resume.from.book !== bookName || resume.from.chapter !== chapter)
    ) {
      window.WordOasisBibleAudio._resumeAfterChapterChange = null;
      window.setTimeout(() => {
        playChapter();
      }, 40);
    }
  }

  playButton.addEventListener("click", () => {
    togglePlay();
  });
  prevButton.addEventListener("click", async () => {
    if (queueIndex > 0) {
      await playIndex(queueIndex - 1);
      return;
    }
    audio.currentTime = 0;
  });
  nextButton.addEventListener("click", async () => {
    if (queueIndex < queue.length - 1) {
      await playIndex(queueIndex + 1);
      return;
    }
    await advanceAfterEnded();
  });
  speedSelect.addEventListener("change", () => {
    audio.playbackRate = Number.parseFloat(speedSelect.value) || 1;
    writeStorage(speedStorageKey, speedSelect.value);
  });
  modeSelect.addEventListener("change", () => {
    writeStorage(modeStorageKey, modeSelect.value);
  });
  titlesCheckbox.addEventListener("change", () => {
    writeStorage(titlesStorageKey, titlesCheckbox.checked ? "1" : "0");
  });
  seekInput.addEventListener("pointerdown", () => {
    isSeeking = true;
  });
  seekInput.addEventListener("pointerup", () => {
    isSeeking = false;
  });
  seekInput.addEventListener("input", () => {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
      return;
    }
    audio.currentTime = (Number.parseInt(seekInput.value, 10) / 1000) * audio.duration;
    updateProgress();
  });
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", updateProgress);
  audio.addEventListener("play", updatePlayButton);
  audio.addEventListener("pause", updatePlayButton);
  audio.addEventListener("ended", () => {
    advanceAfterEnded();
  });

  window.WordOasisBibleAudio = {
    bindChapter,
    stop: stopPlayback,
    playChapter,
    playFromVerse,
    _resumeAfterChapterChange: null
  };
})();
