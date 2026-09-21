(() => {
  const storageKey = "word-oasis-tracking-disabled";
  const parameterName = "word_oasis_tracking";
  const measurementId = "G-5WRW513RFW";
  const params = new URLSearchParams(window.location.search);
  const requestedSetting = params.get(parameterName);

  function writePreference(disabled) {
    try {
      if (disabled) {
        localStorage.setItem(storageKey, "true");
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch (error) {
      // The cookie below is the fallback when storage is unavailable.
    }
    document.cookie = `${storageKey}=${disabled ? "true" : "false"}; Max-Age=31536000; Path=/; SameSite=Lax`;
  }

  function storedPreference() {
    try {
      if (localStorage.getItem(storageKey) === "true") {
        return true;
      }
    } catch (error) {
      // Fall through to the cookie check.
    }
    return document.cookie
      .split(";")
      .some((part) => part.trim() === `${storageKey}=true`);
  }

  function removeTrackingParameter() {
    if (!params.has(parameterName) || !window.history?.replaceState) {
      return;
    }
    params.delete(parameterName);
    const query = params.toString();
    const cleanUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", cleanUrl);
  }

  function clearAnalyticsCookies() {
    const cookieNames = document.cookie
      .split(";")
      .map((part) => part.trim().split("=")[0])
      .filter((name) => name === "_ga" || name.startsWith("_ga_"));
    const host = window.location.hostname;
    const domains = ["", host, `.${host}`];

    cookieNames.forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; Path=/${domain ? `; Domain=${domain}` : ""}; SameSite=Lax`;
      });
    });
  }

  if (requestedSetting === "off") {
    writePreference(true);
  } else if (requestedSetting === "on") {
    writePreference(false);
  }

  const disabled = storedPreference();
  window.WORD_OASIS_TRACKING_DISABLED = disabled;
  window[`ga-disable-${measurementId}`] = disabled;

  if (disabled) {
    clearAnalyticsCookies();
  }
  removeTrackingParameter();
})();
