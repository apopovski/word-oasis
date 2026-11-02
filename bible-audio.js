(function () {
  const MANIFEST_BASE = "/bible-audio/kjv/";
  const DEFAULT_AUDIO_BASE = "https://pub-50d2b4a98bd9401d87e84e0ead5667fe.r2.dev/kjv/";
  const speedStorageKey = "word-oasis-bible-audio-speed";
  const modeStorageKey = "word-oasis-bible-audio-mode";
  const titlesStorageKey = "word-oasis-bible-audio-titles";
  const volumeStorageKey = "word-oasis-bible-audio-volume";
  const dockCollapsedStorageKey = "word-oasis-bible-audio-dock-collapsed";

  const speeds = [0.75, 1, 1.25, 1.5, 1.75, 2];
  const modes = [
    { id: "continuous", label: "Continuous" },
    { id: "chapter", label: "Chapter" },
    { id: "verse", label: "Verse" },
    { id: "selection", label: "Selection" }
  ];

  // Lucide icons (ISC) — stroke-based official paths.
  function lucideIcon(inner) {
    return `
      <svg class="bible-audio-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        ${inner}
      </svg>`;
  }
  const playIconSvg = lucideIcon('<polygon points="6 3 20 12 6 21 6 3"/>');
  const pauseIconSvg = lucideIcon('<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>');
  const prevIconSvg = lucideIcon('<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" x2="5" y1="19" y2="5"/>');
  const nextIconSvg = lucideIcon('<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>');
  const loopIconSvg = lucideIcon('<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/><path d="M11 10h1v4"/>');
  const continuousIconSvg = lucideIcon('<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>');
  const chapterIconSvg = lucideIcon('<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>');
  const selectionIconSvg = lucideIcon('<path d="M3 5h.01"/><path d="M7 5h14"/><path d="M3 12h.01"/><path d="M7 12h14"/><path d="M3 19h.01"/><path d="M7 19h10"/>');
  const volumeIconSvg = lucideIcon('<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.109 7.607a.7.7 0 0 1-.465.182H2.7a.7.7 0 0 0-.7.7v7.022a.7.7 0 0 0 .7.7h2.944a.7.7 0 0 1 .465.182l3.688 3.403A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>');
  const minimizeIconSvg = lucideIcon('<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>');
  const expandIconSvg = lucideIcon('<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>');
  const typeIconSvg = lucideIcon('<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>');
  const modeIcons = {
    continuous: continuousIconSvg,
    chapter: chapterIconSvg,
    verse: loopIconSvg,
    selection: selectionIconSvg
  };
  const modeTitles = {
    continuous: "Continuous",
    chapter: "Chapter loop",
    verse: "Verse loop",
    selection: "Selection loop"
  };

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
      <p id="bible-audio-note">Play any verse, or start from the dock.</p>
    </div>
    <div class="bible-audio-launcher-actions">
      <button type="button" class="bible-audio-launcher-play" id="bible-audio-launcher-play">
        ${playIconSvg}
        <span>Listen</span>
      </button>
      <button type="button" class="bible-audio-launcher-open" id="bible-audio-launcher-open">Player</button>
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
      <div class="bible-audio-dock-bar">
        <div class="bible-audio-transport" role="group" aria-label="Playback controls">
          <button type="button" class="bible-audio-full-only" id="bible-audio-prev" aria-label="Previous clip">${prevIconSvg}</button>
          <button type="button" id="bible-audio-play" aria-label="Play chapter" class="bible-audio-play">${playIconSvg}</button>
          <button type="button" class="bible-audio-full-only" id="bible-audio-next" aria-label="Next clip">${nextIconSvg}</button>
        </div>
        <div class="bible-audio-dock-meta bible-audio-full-only">
          <p class="bible-audio-eyebrow">KJV</p>
          <strong class="bible-audio-now-playing" id="bible-audio-now-playing">Ready to listen</strong>
        </div>
        <span class="bible-audio-dock-time bible-audio-full-only" id="bible-audio-time-display">0:00</span>
        <div class="bible-audio-seek-wrap bible-audio-full-only">
          <input id="bible-audio-seek" type="range" min="0" max="1000" value="0" step="1" aria-label="Seek in current clip">
        </div>
        <div class="bible-audio-volume bible-audio-full-only" title="Volume">
          <span class="bible-audio-volume-icon" aria-hidden="true">${volumeIconSvg}</span>
          <input id="bible-audio-volume" type="range" min="0" max="100" value="100" step="1" aria-label="Volume">
        </div>
        <label class="bible-audio-pill bible-audio-full-only" title="Speed">
          <select id="bible-audio-speed" aria-label="Playback speed"></select>
        </label>
        <div class="bible-audio-mode-group bible-audio-full-only" role="group" aria-label="Repeat mode">
          <button type="button" class="bible-audio-mode-btn" data-mode="continuous" aria-label="Continuous" title="Continuous">${continuousIconSvg}</button>
          <button type="button" class="bible-audio-mode-btn" data-mode="chapter" aria-label="Chapter loop" title="Chapter loop">${chapterIconSvg}</button>
          <button type="button" class="bible-audio-mode-btn" data-mode="verse" aria-label="Verse loop" title="Verse loop">${loopIconSvg}</button>
          <button type="button" class="bible-audio-mode-btn" data-mode="selection" aria-label="Selection loop" title="Selection loop">${selectionIconSvg}</button>
        </div>
        <select id="bible-audio-mode" class="bible-audio-mode-native" aria-hidden="true" tabindex="-1"></select>
        <button type="button" class="bible-audio-tool bible-audio-full-only" id="bible-audio-titles" aria-pressed="false" aria-label="Play chapter titles" title="Play chapter titles">
          ${typeIconSvg}
        </button>
        <button type="button" class="bible-audio-dock-toggle" id="bible-audio-dock-toggle" aria-label="Minimize player" aria-expanded="true">
          ${minimizeIconSvg}
        </button>
      </div>
    </div>
  `;
  document.body.append(player);

  const nowPlaying = player.querySelector("#bible-audio-now-playing");
  const nowPlayingMini = null;
  const launcherTitle = launcher.querySelector("#bible-audio-launcher-title");
  const noteEl = launcher.querySelector("#bible-audio-note");
  const playButton = player.querySelector("#bible-audio-play");
  const playButtonMini = null;
  const launcherPlayButton = launcher.querySelector("#bible-audio-launcher-play");
  const launcherOpenButton = launcher.querySelector("#bible-audio-launcher-open");
  const prevButton = player.querySelector("#bible-audio-prev");
  const nextButton = player.querySelector("#bible-audio-next");
  const seekInput = player.querySelector("#bible-audio-seek");
  const volumeInput = player.querySelector("#bible-audio-volume");
  const timeDisplay = player.querySelector("#bible-audio-time-display");
  const timeCurrent = { textContent: "" };
  const timeTotal = { textContent: "" };
  const miniTime = null;
  const speedSelect = player.querySelector("#bible-audio-speed");
  const modeSelect = player.querySelector("#bible-audio-mode");
  const modeButtons = [...player.querySelectorAll(".bible-audio-mode-btn")];
  const titlesButton = player.querySelector("#bible-audio-titles");
  const titlesCheckbox = {
    get checked() {
      return titlesButton?.getAttribute("aria-pressed") === "true";
    },
    set checked(value) {
      titlesButton?.setAttribute("aria-pressed", value ? "true" : "false");
      titlesButton?.classList.toggle("is-active", Boolean(value));
      titlesButton?.setAttribute("title", value ? "Playing chapter titles" : "Play chapter titles");
    },
    addEventListener(type, handler) {
      titlesButton?.addEventListener(type, handler);
    }
  };
  const dockToggleButton = player.querySelector("#bible-audio-dock-toggle");
  const minimizeButton = dockToggleButton;
  const expandButton = dockToggleButton;
  const playButtons = [playButton].filter(Boolean);

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

  function syncModeButtons() {
    modeButtons.forEach((button) => {
      const active = button.dataset.mode === modeSelect.value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

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
  syncModeButtons();
  titlesCheckbox.checked = readStorage(titlesStorageKey, "0") === "1";
  const storedVolume = Number.parseFloat(readStorage(volumeStorageKey, "1"));
  audio.volume = Number.isFinite(storedVolume) ? Math.min(1, Math.max(0, storedVolume)) : 1;
  if (volumeInput) {
    volumeInput.value = String(Math.round(audio.volume * 100));
    volumeInput.style.setProperty("--progress", `${audio.volume * 100}%`);
  }
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
    if (dockToggleButton) {
      dockToggleButton.innerHTML = collapsed ? expandIconSvg : minimizeIconSvg;
      dockToggleButton.setAttribute("aria-expanded", collapsed ? "false" : "true");
      dockToggleButton.setAttribute("aria-label", collapsed ? "Expand player" : "Minimize player");
      dockToggleButton.title = collapsed ? "Expand player" : "Minimize player";
    }
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
    const currentLabel = formatTime(current);
    const totalLabel = formatTime(duration);
    timeCurrent.textContent = currentLabel;
    timeTotal.textContent = totalLabel;
    if (timeDisplay) {
      timeDisplay.textContent = `${currentLabel} / ${totalLabel}`;
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
  dockToggleButton?.addEventListener("click", () => {
    setDockCollapsed(player.dataset.collapsed !== "true");
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
    syncModeButtons();
  });
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modeSelect.value = button.dataset.mode;
      writeStorage(modeStorageKey, modeSelect.value);
      syncModeButtons();
    });
  });
  titlesButton?.addEventListener("click", () => {
    titlesCheckbox.checked = !titlesCheckbox.checked;
    writeStorage(titlesStorageKey, titlesCheckbox.checked ? "1" : "0");
  });
  volumeInput?.addEventListener("input", () => {
    const nextVolume = Number.parseInt(volumeInput.value, 10) / 100;
    audio.volume = Number.isFinite(nextVolume) ? Math.min(1, Math.max(0, nextVolume)) : 1;
    volumeInput.style.setProperty("--progress", `${audio.volume * 100}%`);
    writeStorage(volumeStorageKey, String(audio.volume));
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
