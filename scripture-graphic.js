(function initializeScriptureGraphic(global) {
  "use strict";

  const WIDTH = 1080;
  const HEIGHT = 1350;
  const MARGIN = 130;
  const LOGO_SOURCE_COLOR = "#102a43";
  const LOGO_RATIO = 179.3 / 250;
  const MARK_RATIO = 77.77 / 212.76;
  const imageCache = new Map();
  let heroImagesPromise = null;
  let fontsPromise = null;

  const palettes = [
    {
      id: "midnight",
      gradient: ["#263445", "#172231", "#090f18"],
      accent: "#f4d487",
      secondary: "#c8d8eb"
    },
    {
      id: "forest",
      gradient: ["#173a2c", "#0f261d", "#081711"],
      accent: "#e8c56d",
      secondary: "#bfe8d0"
    },
    {
      id: "plum",
      gradient: ["#2d2050", "#1c1536", "#0d0a1c"],
      accent: "#f0c96a",
      secondary: "#d9c9f7"
    },
    {
      id: "ocean",
      gradient: ["#1c3350", "#12243a", "#0a1522"],
      accent: "#f3c86a",
      secondary: "#bcd9f5"
    },
    {
      id: "rose",
      gradient: ["#3d1f28", "#26141c", "#130a0e"],
      accent: "#f3c86a",
      secondary: "#f2c9c4"
    },
    {
      id: "golden",
      gradient: ["#3a2a12", "#241a0c", "#120d05"],
      accent: "#ffe08a",
      secondary: "#f6d9a0"
    },
    {
      id: "teal",
      gradient: ["#0f4c4f", "#0b3034", "#06191c"],
      accent: "#f5d77b",
      secondary: "#a9ece5"
    },
    {
      id: "sunset",
      gradient: ["#663744", "#3c2335", "#1c1221"],
      accent: "#ffd18a",
      secondary: "#f7c4c0"
    },
    {
      id: "lavender",
      gradient: ["#514176", "#30284e", "#171329"],
      accent: "#f6d785",
      secondary: "#ddd0ff"
    }
  ];

  function normalizeHexColor(value) {
    return /^#[\da-f]{6}$/i.test(value || "") ? value.toLowerCase() : "#2563a6";
  }

  function mixHexColors(first, second, weight) {
    const firstColor = normalizeHexColor(first).slice(1);
    const secondColor = normalizeHexColor(second).slice(1);
    const mixChannel = (offset) => {
      const start = Number.parseInt(firstColor.slice(offset, offset + 2), 16);
      const end = Number.parseInt(secondColor.slice(offset, offset + 2), 16);
      return Math.round(start + (end - start) * weight).toString(16).padStart(2, "0");
    };
    return `#${mixChannel(0)}${mixChannel(2)}${mixChannel(4)}`;
  }

  function customPalette(color) {
    const base = normalizeHexColor(color);
    return {
      id: "custom",
      gradient: [
        mixHexColors(base, "#09131f", 0.28),
        mixHexColors(base, "#07101a", 0.58),
        mixHexColors(base, "#03080e", 0.82)
      ],
      accent: mixHexColors(base, "#ffe29a", 0.72),
      secondary: mixHexColors(base, "#ffffff", 0.72)
    };
  }

  function paletteFor(reference, paletteId, customColor) {
    if (paletteId === "custom") {
      return customPalette(customColor);
    }
    const selected = palettes.find((palette) => palette.id === paletteId);
    if (selected) {
      return selected;
    }
    const hash = Array.from(reference || "").reduce(
      (total, character) => total + character.codePointAt(0),
      0
    );
    return palettes[hash % palettes.length];
  }

  function loadFonts() {
    if (!document.fonts) {
      return Promise.resolve();
    }
    if (!fontsPromise) {
      fontsPromise = Promise.all([
        document.fonts.load('500 72px "Inter"'),
        document.fonts.load('800 28px "Inter"'),
        document.fonts.load('600 26px "Inter"')
      ]).catch(() => undefined);
    }
    return fontsPromise;
  }

  function loadTintedSvg(path, color, width, height) {
    const cacheKey = `${path}:${color}`;
    if (imageCache.has(cacheKey)) {
      return imageCache.get(cacheKey);
    }

    const promise = fetch(path)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Brand asset request failed with ${response.status}`);
        }
        return response.text();
      })
      .then((markup) => {
        const tinted = markup
          .replace(new RegExp(LOGO_SOURCE_COLOR, "gi"), color)
          .replace(/<svg\b(?![^>]*\bwidth=)/i, `<svg width="${width}" height="${height}" `);
        const url = URL.createObjectURL(new Blob([tinted], { type: "image/svg+xml" }));
        const image = new Image();
        image.decoding = "async";

        return new Promise((resolve, reject) => {
          image.onload = () => {
            URL.revokeObjectURL(url);
            resolve(image);
          };
          image.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("Brand asset could not be decoded"));
          };
          image.src = url;
        });
      })
      .catch((error) => {
        imageCache.delete(cacheKey);
        throw error;
      });

    imageCache.set(cacheKey, promise);
    return promise;
  }

  function loadHeroImages() {
    if (!heroImagesPromise) {
      heroImagesPromise = fetch("/studies/hero-images.json")
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => (data && Array.isArray(data.images) ? data.images : []))
        .catch(() => []);
    }
    return heroImagesPromise;
  }

  function pickHeroImage(images, seed) {
    if (!images.length) {
      return null;
    }
    if (!seed) {
      return images[Math.floor(Math.random() * images.length)];
    }
    const hash = Array.from(seed).reduce(
      (total, character) => total + character.codePointAt(0),
      0
    );
    return images[hash % images.length];
  }

  function loadPhotoImage(src) {
    const cacheKey = `photo:${src}`;
    if (imageCache.has(cacheKey)) {
      return imageCache.get(cacheKey);
    }

    const promise = new Promise((resolve, reject) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Background image could not be decoded"));
      image.src = src;
    }).catch((error) => {
      imageCache.delete(cacheKey);
      throw error;
    });

    imageCache.set(cacheKey, promise);
    return promise;
  }

  function drawImageCover(ctx, image, width, height) {
    const imageWidth = image.naturalWidth || image.width;
    const imageHeight = image.naturalHeight || image.height;
    const scale = Math.max(width / imageWidth, height / imageHeight);
    const drawWidth = imageWidth * scale;
    const drawHeight = imageHeight * scale;
    ctx.drawImage(
      image,
      (width - drawWidth) / 2,
      (height - drawHeight) / 2,
      drawWidth,
      drawHeight
    );
  }

  function rgba(hex, alpha) {
    const normalized = hex.replace("#", "");
    const red = Number.parseInt(normalized.slice(0, 2), 16);
    const green = Number.parseInt(normalized.slice(2, 4), 16);
    const blue = Number.parseInt(normalized.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function drawTrackedText(ctx, text, centerX, y, spacing) {
    const characters = Array.from(text);
    const widths = characters.map((character) => ctx.measureText(character).width);
    const totalWidth = widths.reduce((total, width) => total + width, 0)
      + spacing * Math.max(characters.length - 1, 0);
    const previousAlign = ctx.textAlign;
    let x = centerX - totalWidth / 2;

    ctx.textAlign = "left";
    characters.forEach((character, index) => {
      ctx.fillText(character, x, y);
      x += widths[index] + spacing;
    });
    ctx.textAlign = previousAlign;
  }

  function wrapText(ctx, text, maxWidth) {
    const lines = [];
    let line = "";
    text.split(/\s+/).forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(candidate).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    });
    if (line) {
      lines.push(line);
    }
    return lines;
  }

  function fitVerse(ctx, text, maxWidth, maxHeight) {
    let fitted = null;
    for (let size = 74; size >= 24; size -= 2) {
      ctx.font = `500 ${size}px "Inter", system-ui, sans-serif`;
      const lines = wrapText(ctx, text, maxWidth);
      const lineHeight = Math.round(size * 1.28);
      fitted = { size, lines, lineHeight, height: lines.length * lineHeight };
      if (fitted.height <= maxHeight) {
        return fitted;
      }
    }
    throw new Error("Select a shorter passage to create a readable graphic.");
  }

  function fitFooter(ctx, text, maxWidth) {
    for (let size = 32; size >= 18; size -= 1) {
      ctx.font = `600 ${size}px "Inter", system-ui, sans-serif`;
      const tokens = text.match(/[^/-]+[/-]?|[/-]/g) || [text];
      const lines = [];
      let line = "";
      tokens.forEach((token) => {
        const nextLine = `${line}${token}`;
        if (line && ctx.measureText(nextLine).width > maxWidth) {
          lines.push(line);
          line = token;
        } else {
          line = nextLine;
        }
      });
      if (line) {
        lines.push(line);
      }
      if (lines.length <= 3) {
        return { lines, size };
      }
    }
    return { lines: [text], size: 14 };
  }

  async function drawBackground(ctx, palette, seed) {
    try {
      const photo = pickHeroImage(await loadHeroImages(), seed);
      if (photo?.file) {
        const image = await loadPhotoImage(photo.file);
        drawImageCover(ctx, image, WIDTH, HEIGHT);
      }
    } catch (error) {
      console.warn("Word Oasis Scripture graphic photo background failed.", error);
    }

    const base = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    base.addColorStop(0, palette.gradient[0]);
    base.addColorStop(0.55, palette.gradient[1]);
    base.addColorStop(1, palette.gradient[2]);
    ctx.save();
    ctx.globalAlpha = 0.84;
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.restore();

    const warmGlow = ctx.createRadialGradient(150, 170, 0, 150, 170, 680);
    warmGlow.addColorStop(0, rgba(palette.accent, 0.24));
    warmGlow.addColorStop(0.52, rgba(palette.accent, 0.08));
    warmGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = warmGlow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const coolGlow = ctx.createRadialGradient(920, 280, 0, 920, 280, 720);
    coolGlow.addColorStop(0, rgba(palette.secondary, 0.2));
    coolGlow.addColorStop(0.48, rgba(palette.secondary, 0.07));
    coolGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = coolGlow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(44, 44, WIDTH - 88, HEIGHT - 88, 52);
    ctx.stroke();
  }

  async function drawBranding(ctx, palette) {
    const [logo, mark] = await Promise.all([
      loadTintedSvg("/word-oasis.svg", "#ffffff", 1000, 717.2),
      loadTintedSvg("/SVG/wordoasis-mark.svg", palette.secondary, 1000, 365.53)
    ]);

    const logoWidth = 200;
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.drawImage(logo, WIDTH / 2 - logoWidth / 2, 126, logoWidth, logoWidth * LOGO_RATIO);
    ctx.restore();

    const markWidth = 1380;
    const markHeight = markWidth * MARK_RATIO;
    ctx.save();
    ctx.globalAlpha = 0.055;
    ctx.drawImage(mark, WIDTH - markWidth * 0.6, HEIGHT - markHeight + 50, markWidth, markHeight);
    ctx.restore();
  }

  async function render(options) {
    const text = String(options?.text || "").trim();
    const reference = String(options?.reference || "").trim();
    const label = String(options?.label || "BIBLE VERSE").trim().toUpperCase();
    const footer = String(options?.footer || "WORDOASIS.ORG").trim().toUpperCase();
    const watermark = String(options?.watermark || "\u201C").trim();
    if (!text || !reference) {
      throw new Error("Graphic text and a supporting line are required.");
    }

    await loadFonts();
    const canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas is not available.");
    }

    const palette = paletteFor(options?.paletteSeed || reference, options?.palette, options?.customColor);
    await drawBackground(ctx, palette);
    try {
      await drawBranding(ctx, palette);
    } catch (error) {
      // The Scripture remains usable if a decorative brand asset cannot load.
    }

    const centerX = WIDTH / 2;
    const eyebrowY = 126 + 200 * LOGO_RATIO + 92;
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = palette.accent;
    ctx.font = '800 26px "Inter", system-ui, sans-serif';
    drawTrackedText(ctx, label, centerX, eyebrowY, 7);

    const verseTop = eyebrowY + 96;
    const verseBottom = HEIGHT - 250;
    const referenceGap = 74;
    const referenceHeight = 36;
    const verse = fitVerse(
      ctx,
      text,
      WIDTH - MARGIN * 2,
      verseBottom - verseTop - referenceGap - referenceHeight
    );
    const blockHeight = verse.height + referenceGap + referenceHeight;
    let y = verseTop + Math.max((verseBottom - verseTop - blockHeight) / 2, 0);

    ctx.save();
    ctx.globalAlpha = 0.07;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = watermark === "?"
      ? '700 360px "Inter", system-ui, sans-serif'
      : '700 390px Georgia, "Times New Roman", serif';
    ctx.fillText(watermark, centerX, y + verse.height / 2 + (watermark === "?" ? 5 : 90));
    ctx.restore();

    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.font = `500 ${verse.size}px "Inter", system-ui, sans-serif`;
    verse.lines.forEach((line) => {
      y += verse.lineHeight;
      ctx.fillText(line, centerX, y);
    });

    y += referenceGap;
    ctx.fillStyle = palette.secondary;
    ctx.font = '700 32px "Inter", system-ui, sans-serif';
    drawTrackedText(ctx, reference.toUpperCase(), centerX, y, 4);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - 60, HEIGHT - 196);
    ctx.lineTo(centerX + 60, HEIGHT - 196);
    ctx.stroke();

    ctx.fillStyle = "rgba(255, 255, 255, 0.68)";
    const fittedFooter = fitFooter(ctx, footer, WIDTH - 150);
    const footerLineHeight = fittedFooter.size * 1.3;
    const footerTop = HEIGHT - 136 - ((fittedFooter.lines.length - 1) * footerLineHeight) / 2;
    ctx.font = `600 ${fittedFooter.size}px "Inter", system-ui, sans-serif`;
    fittedFooter.lines.forEach((line, index) => {
      ctx.fillText(line, centerX, footerTop + index * footerLineHeight);
    });
    return canvas;
  }

  function fileName(options) {
    const slug = String(options?.fileName || options?.reference || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `word-oasis-${slug || "scripture"}.png`;
  }

  async function createBlob(options) {
    const canvas = await render(options);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) {
      throw new Error("The Scripture graphic could not be created.");
    }
    return blob;
  }

  async function createFile(options) {
    const blob = await createBlob(options);
    return new File([blob], fileName(options), { type: "image/png" });
  }

  function downloadFile(file) {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  global.WordOasisScriptureGraphic = {
    createFile,
    downloadFile
  };
})(window);
