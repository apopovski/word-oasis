(function () {
  const MANIFEST_BASE = "/bible-audio/kjv/";
  const DEFAULT_AUDIO_BASE = "https://pub-50d2b4a98bd9401d87e84e0ead5667fe.r2.dev/kjv/";
  const speedStorageKey = "word-oasis-bible-audio-speed";
  const modeStorageKey = "word-oasis-bible-audio-mode";
  const titlesStorageKey = "word-oasis-bible-audio-titles";
  const dockCollapsedStorageKey = "word-oasis-bible-audio-dock-collapsed";

  const speeds = [0.75, 1, 1.25, 1.5, 1.75, 2];
  const modes = [
    { id: "continuous", label: "Continuous" },
    { id: "chapter", label: "Chapter loop" },
    { id: "verse", label: "Verse loop" },
    { id: "selection", label: "Selection loop" }
  ];
  const playIconSvg = `
    <svg class="bible-audio-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 4.8v14.4c0 .9 1 1.45 1.75.96l11.05-7.2a1.12 1.12 0 0 0 0-1.92L9.75 3.84C9 3.35 8 3.9 8 4.8Z"/>
    </svg>`;
  const pauseIconSvg = `
    <svg class="bible-audio-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="6" y="4.75" width="4.25" height="14.5" rx="1.6"/>
      <rect x="13.75" y="4.75" width="4.25" height="14.5" rx="1.6"/>
    </svg>`;
  const prevIconSvg = `
    <svg class="bible-audio-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.75 5h2.1c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-2.1a1 1 0 0 1-1-1V6c0-.55.45-1 1-1Z"/>
      <path d="M19.3 5.55a1.05 1.05 0 0 1 .05 1.7L11.9 12l7.45 4.75a1.05 1.05 0 1 1-1.15 1.76l-9.2-5.87a1.05 1.05 0 0 1 0-1.76l9.2-5.87a1.05 1.05 0 0 1 1.1-.1Z"/>
    </svg>`;
  const nextIconSvg = `
    <svg class="bible-audio-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4.7 5.55a1.05 1.05 0 0 1 1.1.1l9.2 5.87a1.05 1.05 0 0 1 0 1.76l-9.2 5.87a1.05 1.05 0 1 1-1.15-1.76L12.1 12 4.65 7.25a1.05 1.05 0 0 1 .05-1.7Z"/>
      <path d="M16.15 5h2.1c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-2.1a1 1 0 0 1-1-1V6c0-.55.45-1 1-1Z"/>
    </svg>`;
  const loopIconSvg = `
    <svg class="bible-audio-icon bible-audio-icon-loop" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="m17 3 3.2 3.2L17 9.4"/>
      <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M4 10.5V9.2A4.2 4.2 0 0 1 8.2 5h11"/>
      <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="m7 21-3.2-3.2L7 14.6"/>
      <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M20 13.5v1.3A4.2 4.2 0 0 1 15.8 19h-11"/>
      <path d="M11.2 9.1h1.25V14.9h-1.15v-3.75h-.08l-1.25.78v-1.05l1.23-1.08Z"/>
    </svg>`;
  const minimizeIconSvg = `
    <svg class="bible-audio-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 12h12"/>
    </svg>`;
  const expandIconSvg = `
    <svg class="bible-audio-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4"/>
    </svg>`;

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
  // Per-verse playback choice: "loop" repeats the active verse; "continue" keeps going.
  let playbackIntent = "continue";
  let activeLoopVerse = null;

  const launcher = document.createElement("aside");
  launcher.className = "bible-audio-launcher";
  launcher.hidden = true;
  launcher.innerHTML = `
    <div class="bible-audio-launcher-copy">
      <p class="bible-audio-eyebrow">KJV audio</p>
      <strong id="bible-audio-launcher-title">Ready to listen</strong>
      <p id="bible-audio-note">Tap a verse to play, or start the chapter from the dock.</p>
    </div>
    <div class="bible-audio-launcher-actions">
      <button type="button" class="bible-audio-launcher-play" id="bible-audio-launcher-play">
        ${playIconSvg}
        <span>Listen</span>
      </button>
      <button type="button" class="bible-audio-launcher-open" id="bible-audio-launcher-open">Open player</button>
    </div>
  `;

  const insertBefore = document.querySelector("#bible-selection-home")
    || document.querySelector(".bible-selection-hint")
    || readerBody;
  insertBefore.parentNode.insertBefore(launcher, insertBefore);

  const player = document.createElement("section");
  player.className = "bible-audio-dock";
  player.hidden = true;
  player.dataset.collapsed = "false";
  player.setAttribute("aria-label", "Bible audio player");
  player.innerHTML = `
    <div class="bible-audio-dock-panel">
      <div class="bible-audio-dock-expanded">
        <div class="bible-audio-dock-top">
          <div class="bible-audio-dock-meta">
            <p class="bible-audio-eyebrow">Now playing · KJV</p>
            <strong class="bible-audio-now-playing" id="bible-audio-now-playing">Ready to listen</strong>
          </div>
          <button type="button" class="bible-audio-dock-minimize" id="bible-audio-minimize" aria-label="Minimize player">
            ${minimizeIconSvg}
          </button>
        </div>
        <div class="bible-audio-progress-row">
          <span id="bible-audio-time-current">0:00</span>
          <div class="bible-audio-seek-wrap">
            <input id="bible-audio-seek" type="range" min="0" max="1000" value="0" step="1" aria-label="Seek in current clip">
          </div>
          <span id="bible-audio-time-total">0:00</span>
        </div>
        <div class="bible-audio-dock-controls">
          <div class="bible-audio-transport" role="group" aria-label="Playback controls">
            <button type="button" id="bible-audio-prev" aria-label="Previous clip">${prevIconSvg}</button>
            <button type="button" id="bible-audio-play" aria-label="Play chapter" class="bible-audio-play">${playIconSvg}</button>
            <button type="button" id="bible-audio-next" aria-label="Next clip">${nextIconSvg}</button>
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
              <span>Titles</span>
            </label>
          </div>
        </div>
      </div>
      <div class="bible-audio-dock-mini">
        <button type="button" id="bible-audio-play-mini" class="bible-audio-play bible-audio-play-mini" aria-label="Play chapter">${playIconSvg}</button>
        <div class="bible-audio-dock-mini-copy">
          <p class="bible-audio-eyebrow">KJV audio</p>
          <strong id="bible-audio-now-playing-mini">Ready to listen</strong>
        </div>
        <span class="bible-audio-dock-mini-time" id="bible-audio-mini-time">0:00</span>
        <button type="button" class="bible-audio-dock-expand" id="bible-audio-expand" aria-label="Expand player">
          ${expandIconSvg}
        </button>
      </div>
    </div>
  `;
  document.body.append(player);

  const nowPlaying = player.querySelector("#bible-audio-now-playing");
  const nowPlayingMini = player.querySelector("#bible-audio-now-playing-mini");
  const launcherTitle = launcher.querySelector("#bible-audio-launcher-title");
  const noteEl = launcher.querySelector("#bible-audio-note");
  const playButton = player.querySelector("#bible-audio-play");
  const playButtonMini = player.querySelector("#bible-audio-play-mini");
  const launcherPlayButton = launcher.querySelector("#bible-audio-launcher-play");
  const launcherOpenButton = launcher.querySelector("#bible-audio-launcher-open");
  const prevButton = player.querySelector("#bible-audio-prev");
  const nextButton = player.querySelector("#bible-audio-next");
  const seekInput = player.querySelector("#bible-audio-seek");
  const timeCurrent = player.querySelector("#bible-audio-time-current");
  const timeTotal = player.querySelector("#bible-audio-time-total");
  const miniTime = player.querySelector("#bible-audio-mini-time");
  const speedSelect = player.querySelector("#bible-audio-speed");
  const modeSelect = player.querySelector("#bible-audio-mode");
  const titlesCheckbox = player.querySelector("#bible-audio-titles");
  const minimizeButton = player.querySelector("#bible-audio-minimize");
  const expandButton = player.querySelector("#bible-audio-expand");
  const playButtons = [playButton, playButtonMini];

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
  // Verse looping is controlled per verse now; don't inherit a sticky "verse" mode.
  if (modeSelect.value === "verse") {
    modeSelect.value = "continuous";
    writeStorage(modeStorageKey, "continuous");
  }
  titlesCheckbox.checked = readStorage(titlesStorageKey, "0") === "1";
  audio.playbackRate = Number.parseFloat(speedSelect.value) || 1;
  setDockCollapsed(readStorage(dockCollapsedStorageKey, "0") === "1");

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

  function currentQueueVerse() {
    return queue[queueIndex]?.verse ?? null;
  }

  function setControlIcon(button, playing) {
    button.innerHTML = playing ? pauseIconSvg : playIconSvg;
  }

  function isVerseLoopEnabled(verse) {
    const button = readerBody.querySelector(`.bible-verse-loop[data-verse="${verse}"]`);
    return button?.getAttribute("aria-pressed") === "true";
  }

  function setVerseLoopEnabled(verse, enabled) {
    const button = readerBody.querySelector(`.bible-verse-loop[data-verse="${verse}"]`);
    if (!button) {
      return;
    }
    button.classList.toggle("is-active", enabled);
    button.setAttribute("aria-pressed", enabled ? "true" : "false");
    button.setAttribute(
      "aria-label",
      enabled ? `Turn off loop for verse ${verse}` : `Loop verse ${verse}`
    );
    button.title = enabled ? "Loop on — tap to play through" : "Loop this verse";
  }

  function clearOtherVerseLoops(exceptVerse) {
    readerBody.querySelectorAll(".bible-verse-loop").forEach((button) => {
      const other = Number.parseInt(button.dataset.verse, 10);
      if (Number.isFinite(other) && other !== exceptVerse) {
        setVerseLoopEnabled(other, false);
      }
    });
  }

  function setDockCollapsed(collapsed) {
    player.dataset.collapsed = collapsed ? "true" : "false";
    player.classList.toggle("is-collapsed", collapsed);
    document.body.classList.toggle("bible-audio-dock-collapsed", collapsed);
    writeStorage(dockCollapsedStorageKey, collapsed ? "1" : "0");
    minimizeButton?.setAttribute("aria-expanded", collapsed ? "false" : "true");
    expandButton?.setAttribute("aria-expanded", collapsed ? "false" : "true");
  }

  function setDockVisible(visible) {
    player.hidden = !visible;
    launcher.hidden = !visible;
    document.body.classList.toggle("bible-audio-dock-open", visible);
    if (!visible) {
      document.body.classList.remove("bible-audio-dock-collapsed");
    } else {
      document.body.classList.toggle("bible-audio-dock-collapsed", player.dataset.collapsed === "true");
    }
  }

  function updatePlayButton() {
    const playing = !audio.paused && !audio.ended;
    playButtons.forEach((button) => {
      if (!button) return;
      setControlIcon(button, playing);
      button.setAttribute("aria-label", playing ? "Pause" : "Play");
      button.classList.toggle("is-playing", playing);
    });
    if (launcherPlayButton) {
      const label = document.createElement("span");
      label.textContent = playing ? "Pause" : "Listen";
      setControlIcon(launcherPlayButton, playing);
      launcherPlayButton.append(label);
      launcherPlayButton.setAttribute("aria-label", playing ? "Pause" : "Listen to chapter");
      launcherPlayButton.classList.toggle("is-playing", playing);
    }
    player.classList.toggle("is-playing", playing);

    const activeVerse = currentQueueVerse();
    readerBody.querySelectorAll(".bible-verse-play").forEach((button) => {
      const verse = Number.parseInt(button.dataset.verse, 10);
      const isActivePlaying = playing && Number.isFinite(verse) && verse === activeVerse;
      setControlIcon(button, isActivePlaying);
      button.classList.toggle("is-active", Number.isFinite(verse) && verse === activeVerse);
      button.classList.toggle("is-playing", isActivePlaying);
      button.setAttribute(
        "aria-label",
        isActivePlaying ? `Pause verse ${verse}` : `Play verse ${verse}`
      );
      button.title = isActivePlaying ? "Pause verse" : "Play verse";
    });

    readerBody.querySelectorAll(".bible-verse-loop").forEach((button) => {
      const armed = button.getAttribute("aria-pressed") === "true";
      button.classList.toggle("is-active", armed);
    });
  }

  function updateNowPlaying() {
    const item = queue[queueIndex];
    const label = item
      ? item.label
      : (chapterManifest
        ? `${chapterManifest.bookName} ${chapterManifest.chapter}`
        : "Ready to listen");
    nowPlaying.textContent = label;
    if (nowPlayingMini) {
      nowPlayingMini.textContent = label;
    }
    if (launcherTitle) {
      launcherTitle.textContent = chapterManifest
        ? `${chapterManifest.bookName} ${chapterManifest.chapter}`
        : "Ready to listen";
    }
  }

  function updateProgress() {
    const duration = audio.duration;
    const current = audio.currentTime;
    timeCurrent.textContent = formatTime(current);
    timeTotal.textContent = formatTime(duration);
    if (miniTime) {
      miniTime.textContent = Number.isFinite(duration) && duration > 0
        ? `${formatTime(current)} / ${formatTime(duration)}`
        : "0:00";
    }
    const ratio = Number.isFinite(duration) && duration > 0 ? current / duration : 0;
    const percent = Math.max(0, Math.min(100, ratio * 100));
    seekInput.style.setProperty("--progress", `${percent}%`);
    if (!isSeeking && Number.isFinite(duration) && duration > 0) {
      seekInput.value = String(Math.round(ratio * 1000));
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
    playbackIntent = "continue";
    activeLoopVerse = null;
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

    if (playbackIntent === "loop" && current) {
      await playIndex(queueIndex);
      return;
    }

    if (mode === "verse" && current && playbackIntent !== "continue") {
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

    if (mode === "continuous" || playbackIntent === "continue") {
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
      if (row.querySelector(".bible-verse-audio-actions")) {
        return;
      }
      const verse = Number.parseInt(row.dataset.verse, 10);
      if (!Number.isFinite(verse)) {
        return;
      }

      const actions = document.createElement("div");
      actions.className = "bible-verse-audio-actions";

      const playControl = document.createElement("button");
      playControl.type = "button";
      playControl.className = "bible-verse-play";
      playControl.dataset.verse = String(verse);
      playControl.setAttribute("aria-label", `Play verse ${verse}`);
      playControl.title = "Play verse";
      setControlIcon(playControl, false);
      playControl.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleVersePlayback(verse);
      });

      const loopControl = document.createElement("button");
      loopControl.type = "button";
      loopControl.className = "bible-verse-loop";
      loopControl.dataset.verse = String(verse);
      loopControl.innerHTML = loopIconSvg;
      loopControl.setAttribute("aria-pressed", "false");
      loopControl.setAttribute("aria-label", `Loop verse ${verse}`);
      loopControl.title = "Loop this verse";
      loopControl.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleVerseLoop(verse);
      });

      actions.append(playControl, loopControl);
      row.append(actions);
    });
    updatePlayButton();
  }

  async function applyPlaybackIntent(verse, intent) {
    playbackIntent = intent;
    activeLoopVerse = intent === "loop" ? verse : null;
    if (intent === "loop") {
      clearOtherVerseLoops(verse);
      setVerseLoopEnabled(verse, true);
      queue = buildQueue(verse, { range: { start: verse, end: verse } });
    } else {
      queue = buildQueue(verse);
    }
    if (!queue.length) {
      nowPlaying.textContent = "No audio for this selection";
      return false;
    }
    const startIndex = Math.max(0, queue.findIndex((item) => item.verse === verse));
    return playIndex(startIndex === -1 ? 0 : startIndex);
  }

  async function toggleVerseLoop(verse) {
    const enabling = !isVerseLoopEnabled(verse);
    const current = queue[queueIndex];
    const sameVerseLoaded = current?.verse === verse && Boolean(audio.src);

    if (enabling) {
      clearOtherVerseLoops(verse);
      setVerseLoopEnabled(verse, true);
      // Only change live playback if this verse is already loaded/playing.
      if (sameVerseLoaded) {
        playbackIntent = "loop";
        activeLoopVerse = verse;
        queue = buildQueue(verse, { range: { start: verse, end: verse } });
        queueIndex = 0;
        updateNowPlaying();
        highlightPlayingVerse(verse);
        updatePlayButton();
      } else {
        updatePlayButton();
      }
      return;
    }

    setVerseLoopEnabled(verse, false);
    if (sameVerseLoaded && playbackIntent === "loop") {
      playbackIntent = "continue";
      activeLoopVerse = null;
      queue = buildQueue(verse);
      queueIndex = Math.max(0, queue.findIndex((item) => item.verse === verse));
      updateNowPlaying();
    }
    updatePlayButton();
  }

  async function toggleVersePlayback(verse) {
    const current = queue[queueIndex];
    const sameVerse = current?.verse === verse && Boolean(audio.src);

    if (sameVerse && !audio.paused && !audio.ended) {
      audio.pause();
      updatePlayButton();
      return;
    }

    if (sameVerse && audio.paused && !audio.ended && audio.currentTime > 0) {
      try {
        await audio.play();
        updatePlayButton();
      } catch (error) {
        await playFromVerse(verse);
      }
      return;
    }

    await playFromVerse(verse);
  }

  async function playFromVerse(verse, options = {}) {
    // Loop only when this verse's loop control is explicitly on.
    const loopThisVerse = options.forceLoop === true || isVerseLoopEnabled(verse);

    if (loopThisVerse) {
      await applyPlaybackIntent(verse, "loop");
      return;
    }

    if (modeSelect.value === "selection") {
      const range = options.range || selectedVerseRange() || { start: verse, end: verse };
      playbackIntent = "continue";
      activeLoopVerse = null;
      queue = buildQueue(verse, { range });
      if (!queue.length) {
        nowPlaying.textContent = "No audio for this selection";
        return;
      }
      const startIndex = Math.max(0, queue.findIndex((item) => item.verse === verse));
      await playIndex(startIndex === -1 ? 0 : startIndex);
      return;
    }

    await applyPlaybackIntent(verse, "continue");
  }

  async function playChapter() {
    if (modeSelect.value === "selection") {
      const range = selectedVerseRange();
      if (range) {
        playbackIntent = "continue";
        activeLoopVerse = null;
        queue = buildQueue(range.start, { range });
        if (!queue.length) {
          nowPlaying.textContent = "No audio for this selection";
          return;
        }
        await playIndex(0);
        return;
      }
    }
    if (modeSelect.value === "verse") {
      await applyPlaybackIntent(1, "loop");
      return;
    }
    playbackIntent = "continue";
    activeLoopVerse = null;
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
      setDockVisible(false);
      return;
    }

    const slug = audioSlugForBook(bookName);
    if (!availableSlugs.has(slug)) {
      setDockVisible(false);
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
      setDockVisible(false);
      chapterManifest = null;
      return;
    }

    setDockVisible(true);
    noteEl.textContent = translationId && translationId !== "kjv"
      ? "Audio is King James Version. Text can stay on your selected translation."
      : "Play any verse, or start the chapter from the sticky player.";
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

  playButtons.forEach((button) => {
    button?.addEventListener("click", () => {
      togglePlay();
    });
  });
  launcherPlayButton?.addEventListener("click", () => {
    setDockCollapsed(false);
    togglePlay();
  });
  launcherOpenButton?.addEventListener("click", () => {
    setDockCollapsed(false);
    player.classList.add("is-attention");
    window.setTimeout(() => player.classList.remove("is-attention"), 700);
  });
  minimizeButton?.addEventListener("click", () => setDockCollapsed(true));
  expandButton?.addEventListener("click", () => setDockCollapsed(false));
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
