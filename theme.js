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
  const navSearch = document.querySelector("[data-nav-search]");
  const navSearchToggle = navSearch?.querySelector(".nav-search-toggle");
  const navSearchInput = navSearch?.querySelector('input[type="search"]');
  const navDropdowns = document.querySelectorAll(".nav-item-dropdown");

  function closeNavDropdowns() {
    navDropdowns.forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
  }

  navDropdowns.forEach((item) => {
    const toggle = item.querySelector(".nav-dropdown-toggle");
    toggle?.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      closeNavDropdowns();
      if (!isOpen) {
        item.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (![...navDropdowns].some((item) => item.contains(event.target))) {
      closeNavDropdowns();
    }
  });

  function closeNavSearch() {
    if (!navSearch || !navSearchToggle) return;
    navSearch.classList.remove("is-open");
    navSearchToggle.setAttribute("aria-expanded", "false");
  }

  navSearchToggle?.addEventListener("click", () => {
    const isOpen = navSearch.classList.toggle("is-open");
    navSearchToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      navSearchInput?.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (navSearch?.classList.contains("is-open") && !navSearch.contains(event.target)) {
      closeNavSearch();
    }
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
      // Ignore clicks on the search input/field or the Learn dropdown toggle
      // so they don't immediately collapse the open menu.
      if (event.target.closest(".nav-search") || event.target.closest(".nav-dropdown-toggle")) {
        return;
      }
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      closeNavDropdowns();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavSearch();
        closeNavDropdowns();
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  const studyInvitations = document.querySelectorAll(".bible-study-invitation");
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  if (studyInvitations.length && !reducedMotion) {
    studyInvitations.forEach((invitation) => invitation.classList.add("cta-reveal-pending"));

    const revealInvitation = (invitation) => {
      invitation.classList.remove("cta-reveal-pending");
      invitation.classList.add("cta-revealed");
    };

    if ("IntersectionObserver" in window) {
      const invitationObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealInvitation(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
      );
      studyInvitations.forEach((invitation) => invitationObserver.observe(invitation));
    } else {
      studyInvitations.forEach(revealInvitation);
    }
  }
})();
