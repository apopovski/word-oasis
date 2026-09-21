(() => {
  const photos = [
    {
      id: "wrrgZwI7qOY",
      file: "/images/hero/bible-study-emmanuel-phaeton.jpg",
      name: "Emmanuel Phaeton",
      username: "emmanuelphaeton",
      position: "center 52%",
      mobilePosition: "58% center",
      shade: "strong",
    },
    {
      id: "P8j0oFw1cJ4",
      file: "/images/hero/bible-study-aaron-burden.jpg",
      name: "Aaron Burden",
      username: "aaronburden",
      position: "center 56%",
      mobilePosition: "58% center",
      shade: "strong",
    },
    {
      id: "W8Qqn1PmQH0",
      file: "/images/hero/bible-study-ben-white.jpg",
      name: "Ben White",
      username: "benwhitephotography",
      position: "center 54%",
      mobilePosition: "58% center",
      shade: "strong",
    },
    {
      id: "NaWKMlp3tVs",
      file: "/images/hero/bible-study-samantha-sophia.jpg",
      name: "Samantha Sophia",
      username: "samanthasophia",
      position: "center 48%",
      mobilePosition: "60% center",
      shade: "strong",
    },
    {
      id: "b_SHPU5M3nk",
      file: "/images/hero/bible-study-patrick-fore.jpg",
      name: "Patrick Fore",
      username: "patrickian4",
      position: "center 52%",
      mobilePosition: "60% center",
      shade: "medium",
    },
    {
      id: "XqXJJhK-c08",
      file: "/images/hero/bible-study-joel-muniz.jpg",
      name: "Joel Muniz",
      username: "jmuniz",
      position: "center 44%",
      mobilePosition: "62% center",
      shade: "strong",
    },
    {
      id: "DRgrzQQsJDA",
      file: "/images/hero/bible-study-rod-long.jpg",
      name: "Rod Long",
      username: "rodlong",
      position: "center 48%",
      mobilePosition: "62% center",
      shade: "medium",
    },
    {
      id: "0-inkOU1cgQ",
      file: "/images/hero/bible-study-alexandra-fuller.jpg",
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

  root.style.setProperty("--hero-image", `url("${photo.file}")`);
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
