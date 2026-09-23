(() => {
  const hero = document.querySelector(".study-hero");
  if (!hero) return;

  const heroImagesUrl = hero.dataset.heroJson || "/studies/hero-images.json";
  const previousKey = "word-oasis-previous-study-hero";

  function applyPhoto(photo) {
    hero.style.setProperty("--study-hero-image", `url("${photo.file}")`);
    hero.style.setProperty("--study-hero-position", photo.position || "center 50%");
    hero.style.setProperty("--study-hero-mobile-position", photo.mobilePosition || photo.position || "center 50%");
    hero.dataset.heroShade = photo.shade || "medium";
    hero.classList.add("has-hero-photo");

    const credit = hero.querySelector("[data-study-hero-credit]");
    if (!credit) return;
    const photographer = credit.querySelector("[data-study-hero-photographer]");
    const photoLink = credit.querySelector("[data-study-hero-photo-link]");
    if (photographer) {
      photographer.textContent = photo.name;
      photographer.href = `https://unsplash.com/@${photo.username}?utm_source=word_oasis&utm_medium=referral`;
    }
    if (photoLink) {
      photoLink.href = `https://unsplash.com/photos/${photo.id}?utm_source=word_oasis&utm_medium=referral`;
    }
    credit.hidden = false;
  }

  fetch(heroImagesUrl)
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      const photos = data && Array.isArray(data.images) ? data.images : [];
      if (!photos.length) return;

      let previousId = "";
      try {
        previousId = localStorage.getItem(previousKey) || "";
      } catch (error) {
        // Rotation still works when storage is unavailable.
      }

      const choices = photos.filter((photo) => photo.id !== previousId);
      const photo = choices[Math.floor(Math.random() * choices.length)] || photos[0];

      applyPhoto(photo);

      try {
        localStorage.setItem(previousKey, photo.id);
      } catch (error) {
        // A repeat is acceptable when storage is unavailable.
      }
    })
    .catch(() => {
      // Keep the existing gradient-only hero when the manifest can't load.
    });
})();
