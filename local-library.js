(() => {
  "use strict";

  const STORAGE_KEY = "word-oasis-local-library";
  const MAX_SAVED_ITEMS = 50;
  const MAX_RECENT_ITEMS = 12;

  function emptyLibrary() {
    return { version: 1, saved: [], recent: [] };
  }

  function readLibrary() {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (!value) return emptyLibrary();

    try {
      const parsed = JSON.parse(value);
      return {
        version: 1,
        saved: Array.isArray(parsed.saved) ? parsed.saved : [],
        recent: Array.isArray(parsed.recent) ? parsed.recent : []
      };
    } catch (error) {
      console.warn("Word Oasis could not read the local library.", error);
      return emptyLibrary();
    }
  }

  function writeLibrary(library) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
    window.dispatchEvent(new CustomEvent("wordoasis:library-change", { detail: library }));
  }

  function normalizeItem(item) {
    if (!item || !item.id || !item.title || !item.url) {
      throw new TypeError("Library items require an id, title, and URL.");
    }

    return {
      id: String(item.id),
      type: String(item.type || "item"),
      title: String(item.title),
      subtitle: String(item.subtitle || ""),
      url: String(item.url),
      savedAt: new Date().toISOString()
    };
  }

  function save(item) {
    const normalized = normalizeItem(item);
    const library = readLibrary();
    library.saved = [
      normalized,
      ...library.saved.filter((savedItem) => savedItem.id !== normalized.id)
    ].slice(0, MAX_SAVED_ITEMS);
    writeLibrary(library);
    return normalized;
  }

  function remove(id) {
    const library = readLibrary();
    library.saved = library.saved.filter((item) => item.id !== id);
    writeLibrary(library);
  }

  function isSaved(id) {
    return readLibrary().saved.some((item) => item.id === id);
  }

  function addRecent(item) {
    const normalized = normalizeItem(item);
    const library = readLibrary();
    library.recent = [
      normalized,
      ...library.recent.filter((recentItem) => recentItem.id !== normalized.id)
    ].slice(0, MAX_RECENT_ITEMS);
    writeLibrary(library);
  }

  function clear() {
    writeLibrary(emptyLibrary());
  }

  function createItemElement(item, removable) {
    const row = document.createElement("div");
    row.className = "library-item";

    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.title;
    if (item.subtitle) {
      const subtitle = document.createElement("small");
      subtitle.textContent = item.subtitle;
      link.append(subtitle);
    }
    row.append(link);

    if (removable) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "library-remove";
      button.textContent = "Remove";
      button.setAttribute("aria-label", `Remove ${item.title} from saved items`);
      button.addEventListener("click", () => remove(item.id));
      row.append(button);
    }

    return row;
  }

  function render() {
    const section = document.querySelector("[data-local-library]");
    if (!section) return;

    const library = readLibrary();
    const savedList = section.querySelector("[data-saved-list]");
    const recentList = section.querySelector("[data-recent-list]");
    const hasItems = library.saved.length > 0 || library.recent.length > 0;
    section.hidden = !hasItems;

    savedList.replaceChildren(
      ...library.saved.map((item) => createItemElement(item, true))
    );
    recentList.replaceChildren(
      ...library.recent.map((item) => createItemElement(item, false))
    );

    if (!library.saved.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = "No saved items yet.";
      savedList.append(empty);
    }
    if (!library.recent.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = "No recently viewed answers yet.";
      recentList.append(empty);
    }
  }

  window.WordOasisLibrary = {
    addRecent,
    clear,
    getAll: readLibrary,
    isSaved,
    remove,
    render,
    save
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("[data-library-clear]")?.addEventListener("click", clear);
    window.addEventListener("wordoasis:library-change", render);
    render();
  });
})();
