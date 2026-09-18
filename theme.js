(function () {
  const storageKey = "word-oasis-theme";
  const root = document.documentElement;
  const mediaQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : { matches: false, addEventListener() {} };

  function storedTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function preferredTheme() {
    const saved = storedTheme();
    return saved === "dark" || saved === "light" ? saved : mediaQuery.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
      const text = button.querySelector("[data-theme-label]");
      if (text) {
        text.textContent = isDark ? "Light" : "Dark";
      }
    });
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  applyTheme(preferredTheme());

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-toggle]");
    if (!button) {
      return;
    }
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    saveTheme(nextTheme);
    applyTheme(nextTheme);
  });

  const syncSystemTheme = () => {
    if (!storedTheme()) {
      applyTheme(preferredTheme());
    }
  };
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", syncSystemTheme);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(syncSystemTheme);
  }

  // Mobile burger menu toggle. Lives here (rather than script.js) so every
  // page shares identical nav behavior, since theme.js loads site-wide while
  // script.js only loads on the homepage.
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector("#primary-menu");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
      // Ignore clicks on the search input/field itself so typing a query
      // doesn't immediately collapse the open menu.
      if (event.target.closest("input")) {
        return;
      }
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
