(() => {
  const photos = [
    {
      id: "wrrgZwI7qOY",
      file: "/images/hero/bible-study-emmanuel-phaeton.jpg",
      mobileFile: "/images/hero/mobile/bible-study-emmanuel-phaeton.webp",
      name: "Emmanuel Phaeton",
      username: "emmanuelphaeton",
      position: "center 52%",
      mobilePosition: "58% center",
      shade: "strong",
    },
    {
      id: "P8j0oFw1cJ4",
      file: "/images/hero/bible-study-aaron-burden.jpg",
      mobileFile: "/images/hero/mobile/bible-study-aaron-burden.webp",
      name: "Aaron Burden",
      username: "aaronburden",
      position: "center 56%",
      mobilePosition: "58% center",
      shade: "strong",
    },
    {
      id: "W8Qqn1PmQH0",
      file: "/images/hero/bible-study-ben-white.jpg",
      mobileFile: "/images/hero/mobile/bible-study-ben-white.webp",
      name: "Ben White",
      username: "benwhitephotography",
      position: "center 54%",
      mobilePosition: "58% center",
      shade: "strong",
    },
    {
      id: "NaWKMlp3tVs",
      file: "/images/hero/bible-study-samantha-sophia.jpg",
      mobileFile: "/images/hero/mobile/bible-study-samantha-sophia.webp",
      name: "Samantha Sophia",
      username: "samanthasophia",
      position: "center 48%",
      mobilePosition: "60% center",
      shade: "strong",
    },
    {
      id: "b_SHPU5M3nk",
      file: "/images/hero/bible-study-patrick-fore.jpg",
      mobileFile: "/images/hero/mobile/bible-study-patrick-fore.webp",
      name: "Patrick Fore",
      username: "patrickian4",
      position: "center 52%",
      mobilePosition: "60% center",
      shade: "medium",
    },
    {
      id: "XqXJJhK-c08",
      file: "/images/hero/bible-study-joel-muniz.jpg",
      mobileFile: "/images/hero/mobile/bible-study-joel-muniz.webp",
      name: "Joel Muniz",
      username: "jmuniz",
      position: "center 44%",
      mobilePosition: "62% center",
      shade: "strong",
    },
    {
      id: "DRgrzQQsJDA",
      file: "/images/hero/bible-study-rod-long.jpg",
      mobileFile: "/images/hero/mobile/bible-study-rod-long.webp",
      name: "Rod Long",
      username: "rodlong",
      position: "center 48%",
      mobilePosition: "62% center",
      shade: "medium",
    },
    {
      id: "0-inkOU1cgQ",
      file: "/images/hero/bible-study-alexandra-fuller.jpg",
      mobileFile: "/images/hero/mobile/bible-study-alexandra-fuller.webp",
      name: "Alexandra Fuller",
      username: "alexandrajf",
      position: "center 50%",
      mobilePosition: "60% center",
      shade: "medium",
    },
  ];
  const previousKey = "word-oasis-previous-hero";
  let previousId = "";

  try {
    previousId = localStorage.getItem(previousKey) || "";
  } catch (error) {
    // Rotation still works when storage is unavailable.
  }

  const choices = photos.filter((photo) => photo.id !== previousId);
  const photo = choices[Math.floor(Math.random() * choices.length)] || photos[0];
  const root = document.documentElement;
  const isMobile = typeof matchMedia === "function" && matchMedia("(max-width: 620px)").matches;
  const preload = document.createElement("link");
  preload.rel = "preload";
  preload.as = "image";
  preload.href = isMobile ? photo.mobileFile || photo.file : photo.file;
  preload.fetchPriority = "high";
  document.head.append(preload);

  root.style.setProperty("--hero-image", `url("${photo.file}")`);
  root.style.setProperty("--hero-mobile-image", `url("${photo.mobileFile || photo.file}")`);
  root.style.setProperty("--hero-position", photo.position);
  root.style.setProperty("--hero-mobile-position", photo.mobilePosition);
  root.dataset.heroShade = photo.shade;

  try {
    localStorage.setItem(previousKey, photo.id);
  } catch (error) {
    // A repeat is acceptable when storage is unavailable.
  }

  function updateCredit() {
    const credit = document.querySelector("[data-hero-photo-credit]");
    if (!credit) {
      return;
    }
    const photographer = credit.querySelector("[data-hero-photographer]");
    const photoLink = credit.querySelector("[data-hero-photo-link]");
    photographer.textContent = photo.name;
    photographer.href = `https://unsplash.com/@${photo.username}?utm_source=word_oasis&utm_medium=referral`;
    photoLink.href = `https://unsplash.com/photos/${photo.id}?utm_source=word_oasis&utm_medium=referral`;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateCredit, { once: true });
  } else {
    updateCredit();
  }
})();
