(() => {
  "use strict";

  let deferredInstallPrompt = null;
  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);

  function trackInstall(action) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "web_app_install", { action });
    }
  }

  function closeInstructions(dialog) {
    dialog.close();
    dialog.remove();
  }

  function showInstallInstructions() {
    const dialog = document.createElement("dialog");
    dialog.className = "install-dialog";
    dialog.setAttribute("aria-labelledby", "install-dialog-title");
    dialog.innerHTML = `
      <div class="install-dialog-head">
        <img src="/apple-touch-icon.png" alt="" width="52" height="52">
        <div>
          <p>Word Oasis web app</p>
          <h2 id="install-dialog-title">Install Word Oasis</h2>
        </div>
        <button type="button" aria-label="Close install instructions">&times;</button>
      </div>
      <div class="install-dialog-body">
        ${
          isIos
            ? "<p>In Safari, tap the <strong>Share</strong> button, then choose <strong>Add to Home Screen</strong> and tap <strong>Add</strong>.</p>"
            : "<p>Open your browser menu and choose <strong>Install Word Oasis</strong> or <strong>Add to Home screen</strong>.</p>"
        }
        <p>After installation, Word Oasis opens like an app and previously visited pages can remain available offline.</p>
      </div>
    `;
    document.body.append(dialog);
    const closeButton = dialog.querySelector("button");
    closeButton.addEventListener("click", () => closeInstructions(dialog));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeInstructions(dialog);
    });
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeInstructions(dialog);
    });
    dialog.showModal();
    closeButton.focus();
    trackInstall("instructions");
  }

  async function requestInstall(button) {
    if (!deferredInstallPrompt) {
      showInstallInstructions();
      return;
    }

    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    trackInstall(choice.outcome);
    deferredInstallPrompt = null;
    if (choice.outcome === "accepted") {
      button.hidden = true;
    }
  }

  function createInstallButton() {
    if (isStandalone() || document.querySelector("[data-install-app]")) return;

    const footer = document.querySelector(".footer-bottom");
    if (!footer) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "install-app-button";
    button.dataset.installApp = "";
    button.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"></path>
      </svg>
      Install app
    `;
    button.addEventListener("click", () => requestInstall(button));
    footer.append(button);
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    const button = document.querySelector("[data-install-app]");
    if (button) {
      button.hidden = false;
    } else {
      createInstallButton();
    }
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    document.querySelector("[data-install-app]")?.remove();
    trackInstall("installed");
  });

  if ("serviceWorker" in navigator && window.isSecureContext) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" }).catch((error) => {
        console.error("Word Oasis app service worker registration failed.", error);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", createInstallButton);
})();
