(() => {
  const studyPanel = document.querySelector("[data-bible-study]");
  const form = document.querySelector("[data-bible-study-form]");

  if (!studyPanel || !form) {
    return;
  }

  const endpoint = window.WORD_OASIS_FORM_ENDPOINT || "";
  const baseStudyUrl =
    window.WORD_OASIS_BIBLE_STUDY_URL || "https://www.amazingbiblestudies.com/";
  const answerPage = document.querySelector("[data-answer-page]");
  const status = form.querySelector("[data-bible-study-status]");
  const submitButton = form.querySelector(".bible-study-submit");
  const directLink = form.querySelector("[data-bible-study-direct-link]");

  function track(eventName, parameters = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, parameters);
    }
  }

  function destinationUrl() {
    const url = new URL(baseStudyUrl);
    url.searchParams.set("utm_source", "word_oasis");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "answer_bible_study");
    url.searchParams.set(
      "utm_content",
      window.location.pathname.split("/").filter(Boolean).pop() || "answer",
    );
    return url.toString();
  }

  async function recordReferral(payload) {
    if (!endpoint) {
      throw new Error("Bible study referral tracking is not configured.");
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const text = await response.text();
    let result;

    try {
      result = JSON.parse(text);
    } catch (error) {
      throw new Error("The referral service returned an invalid response.");
    }

    if (!response.ok || result.success === false) {
      throw new Error(result.error || "The referral could not be recorded.");
    }

    return result;
  }

  const studyUrl = destinationUrl();
  directLink.href = studyUrl;

  studyPanel.addEventListener("toggle", () => {
    if (studyPanel.open) {
      track("bible_study_interest_open", {
        answer_id: answerPage?.dataset.answerId || "",
        answer_title: document.querySelector("h1")?.textContent || "",
      });
    }
  });

  directLink.addEventListener("click", () => {
    track("bible_study_direct_referral", {
      answer_id: answerPage?.dataset.answerId || "",
      destination: "amazing_bible_studies",
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const fields = new FormData(form);
    const name = String(fields.get("name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const answerTitle = document.querySelector("h1")?.textContent?.trim() || "";
    const payload = {
      eventType: "bible-study-referral",
      question: `Bible study referral request from ${name}`,
      name,
      email,
      ageRange: String(fields.get("ageRange") || ""),
      age: String(fields.get("ageRange") || ""),
      gender: String(fields.get("gender") || ""),
      country: String(fields.get("country") || "").trim(),
      location: String(fields.get("country") || "").trim(),
      faith: String(fields.get("faith") || ""),
      consent: fields.get("consent") === "on",
      source: "word-oasis-answer",
      sourceAnswerId: answerPage?.dataset.answerId || "",
      sourceAnswerTitle: answerTitle,
      sourceUrl: window.location.href,
      destinationUrl: studyUrl,
      submittedAt: new Date().toISOString(),
      relatedMatches: [answerTitle, window.location.href],
    };

    submitButton.disabled = true;
    status.textContent = "Saving your referral securely…";

    try {
      await recordReferral(payload);
      track("bible_study_referral_recorded", {
        answer_id: payload.sourceAnswerId,
        destination: "amazing_bible_studies",
      });
      status.textContent = "Referral recorded. Opening the free Bible studies…";
      window.setTimeout(() => window.location.assign(studyUrl), 350);
    } catch (error) {
      console.error("Bible study referral failed", error);
      status.textContent =
        "We could not record your referral. Try again, or continue without sharing details.";
      submitButton.disabled = false;
    }
  });
})();
