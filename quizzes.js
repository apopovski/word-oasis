(() => {
  "use strict";

  const quizzes = [
    {
      id: "bible-basics",
      title: "Bible Basics",
      description: "Test your knowledge of the Bible's books, structure, and best-known passages.",
      icon: "book",
      questions: [
        {
          question: "What is the first book of the Bible?",
          options: ["Exodus", "Genesis", "Psalms", "Matthew"],
          answer: 1,
          reference: "Genesis 1:1",
          explanation: "Genesis opens the Bible with the account of creation."
        },
        {
          question: "What is the final book of the Bible?",
          options: ["Jude", "Acts", "Revelation", "Malachi"],
          answer: 2,
          reference: "Revelation 1:1",
          explanation: "Revelation is the final book in the New Testament and the Bible."
        },
        {
          question: "How many books are in the Protestant Bible?",
          options: ["39", "66", "72", "80"],
          answer: 1,
          reference: "2 Timothy 3:16",
          explanation: "The Protestant canon contains 39 Old Testament books and 27 New Testament books."
        },
        {
          question: "Which book contains the Ten Commandments first given at Mount Sinai?",
          options: ["Genesis", "Leviticus", "Exodus", "Joshua"],
          answer: 2,
          reference: "Exodus 20:1-17",
          explanation: "The Ten Commandments are recorded in Exodus 20 and repeated in Deuteronomy 5."
        },
        {
          question: "Which book is the longest in the Bible by number of chapters?",
          options: ["Isaiah", "Genesis", "Psalms", "Jeremiah"],
          answer: 2,
          reference: "Psalm 1:1",
          explanation: "Psalms has 150 chapters, more than any other book of the Bible."
        },
        {
          question: "Which New Testament book tells the history of the early church?",
          options: ["Romans", "Acts", "Hebrews", "Revelation"],
          answer: 1,
          reference: "Acts 1:1-8",
          explanation: "Acts records the Holy Spirit's work through the apostles and the growth of the early church."
        },
        {
          question: "Who wrote many of the Psalms?",
          options: ["David", "Moses", "Solomon", "Isaiah"],
          answer: 0,
          reference: "Psalm 3:1",
          explanation: "David is named in the headings of many Psalms, though several other writers contributed."
        },
        {
          question: "Which Gospel begins, “In the beginning was the Word”?",
          options: ["Matthew", "Mark", "Luke", "John"],
          answer: 3,
          reference: "John 1:1",
          explanation: "John opens by identifying Jesus as the eternal Word."
        },
        {
          question: "What are the first four books of the New Testament called?",
          options: ["The Prophets", "The Gospels", "The Epistles", "The Wisdom Books"],
          answer: 1,
          reference: "Mark 1:1",
          explanation: "Matthew, Mark, Luke, and John are the four Gospels."
        },
        {
          question: "Which chapter is often called the Bible's “love chapter”?",
          options: ["Psalm 23", "Romans 8", "1 Corinthians 13", "Hebrews 11"],
          answer: 2,
          reference: "1 Corinthians 13:4-8",
          explanation: "First Corinthians 13 gives the Bible's famous description of selfless love."
        }
      ]
    },
    {
      id: "life-of-jesus",
      title: "The Life of Jesus",
      description: "Follow Jesus from Bethlehem through His ministry, death, resurrection, and commission.",
      icon: "cross",
      questions: [
        {
          question: "In which town was Jesus born?",
          options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
          answer: 2,
          reference: "Matthew 2:1",
          explanation: "Jesus was born in Bethlehem during the reign of Herod."
        },
        {
          question: "Who baptized Jesus?",
          options: ["Peter", "John the Baptist", "Andrew", "Nicodemus"],
          answer: 1,
          reference: "Matthew 3:13-17",
          explanation: "John baptized Jesus in the Jordan River."
        },
        {
          question: "What was Jesus' first recorded miracle in the Gospel of John?",
          options: ["Feeding five thousand", "Walking on water", "Healing a blind man", "Turning water into wine"],
          answer: 3,
          reference: "John 2:1-11",
          explanation: "At a wedding in Cana, Jesus turned water into wine."
        },
        {
          question: "How many apostles did Jesus appoint?",
          options: ["7", "10", "12", "40"],
          answer: 2,
          reference: "Mark 3:13-19",
          explanation: "Jesus appointed twelve apostles to be with Him and to preach."
        },
        {
          question: "Which prayer did Jesus teach His disciples as a model?",
          options: ["The prayer of Jabez", "The Lord's Prayer", "Hannah's prayer", "Solomon's prayer"],
          answer: 1,
          reference: "Matthew 6:9-13",
          explanation: "Jesus gave the Lord's Prayer while teaching about sincere prayer."
        },
        {
          question: "Whom did Jesus raise after he had been in a tomb four days?",
          options: ["Jairus", "Stephen", "Lazarus", "Bartimaeus"],
          answer: 2,
          reference: "John 11:38-44",
          explanation: "Jesus called Lazarus out of the tomb at Bethany."
        },
        {
          question: "Where did Jesus pray shortly before His arrest?",
          options: ["Mount Carmel", "Garden of Gethsemane", "Bethlehem", "Caesarea"],
          answer: 1,
          reference: "Matthew 26:36-46",
          explanation: "Jesus prayed in Gethsemane before Judas and the arresting crowd arrived."
        },
        {
          question: "Who denied knowing Jesus three times?",
          options: ["John", "Thomas", "Peter", "Philip"],
          answer: 2,
          reference: "Luke 22:54-62",
          explanation: "Peter denied Jesus three times, then wept bitterly when the rooster crowed."
        },
        {
          question: "On what day did Jesus rise from the dead?",
          options: ["The same day", "The third day", "The seventh day", "After forty days"],
          answer: 1,
          reference: "1 Corinthians 15:3-4",
          explanation: "Scripture teaches that Jesus was raised on the third day."
        },
        {
          question: "What mission did Jesus give His followers before ascending?",
          options: ["Build a palace", "Write a new law", "Make disciples of all nations", "Return to fishing"],
          answer: 2,
          reference: "Matthew 28:18-20",
          explanation: "The Great Commission calls Christ's followers to make disciples of all nations."
        }
      ]
    },
    {
      id: "old-testament",
      title: "Old Testament",
      description: "Journey through creation, the patriarchs, Israel's history, wisdom, and the prophets.",
      icon: "scroll",
      questions: [
        {
          question: "Who built the ark before the flood?",
          options: ["Abraham", "Noah", "Moses", "Job"],
          answer: 1,
          reference: "Genesis 6:13-22",
          explanation: "God instructed Noah to build the ark."
        },
        {
          question: "Who led the Israelites out of Egypt?",
          options: ["Joseph", "Aaron", "Moses", "Joshua"],
          answer: 2,
          reference: "Exodus 3:7-10",
          explanation: "God called Moses to lead Israel out of slavery in Egypt."
        },
        {
          question: "Who defeated Goliath?",
          options: ["Saul", "Jonathan", "Samson", "David"],
          answer: 3,
          reference: "1 Samuel 17:45-50",
          explanation: "David defeated Goliath with a sling and a stone while trusting in God."
        },
        {
          question: "Who was thrown into a den of lions?",
          options: ["Daniel", "Jeremiah", "Elijah", "Isaiah"],
          answer: 0,
          reference: "Daniel 6:16-23",
          explanation: "Daniel was placed in the lions' den because he continued praying to God."
        },
        {
          question: "Which city's walls fell after Israel marched around them?",
          options: ["Jerusalem", "Jericho", "Nineveh", "Babylon"],
          answer: 1,
          reference: "Joshua 6:15-20",
          explanation: "The walls of Jericho fell after Israel followed God's instructions."
        },
        {
          question: "Which queen courageously approached the king to save her people?",
          options: ["Jezebel", "Bathsheba", "Esther", "Sheba"],
          answer: 2,
          reference: "Esther 4:13-16",
          explanation: "Esther risked her life by approaching the king on behalf of the Jewish people."
        },
        {
          question: "Which king asked God for wisdom?",
          options: ["David", "Solomon", "Hezekiah", "Josiah"],
          answer: 1,
          reference: "1 Kings 3:5-12",
          explanation: "Solomon asked for an understanding heart to judge God's people."
        },
        {
          question: "Which prophet was swallowed by a great fish?",
          options: ["Jonah", "Amos", "Hosea", "Micah"],
          answer: 0,
          reference: "Jonah 1:17",
          explanation: "God appointed a great fish to swallow Jonah."
        },
        {
          question: "Who interpreted Pharaoh's dreams about years of plenty and famine?",
          options: ["Jacob", "Joseph", "Moses", "Samuel"],
          answer: 1,
          reference: "Genesis 41:25-36",
          explanation: "God gave Joseph the meaning of Pharaoh's dreams."
        },
        {
          question: "Which prophet challenged the prophets of Baal on Mount Carmel?",
          options: ["Elisha", "Isaiah", "Elijah", "Ezekiel"],
          answer: 2,
          reference: "1 Kings 18:20-39",
          explanation: "Elijah called Israel to recognize Yahweh as the true God."
        }
      ]
    },
    {
      id: "new-testament",
      title: "New Testament",
      description: "Explore Acts, the apostles, the early church, and New Testament teaching.",
      icon: "church",
      questions: [
        {
          question: "On which day did the Holy Spirit come upon the disciples in Acts 2?",
          options: ["Passover", "Pentecost", "Day of Atonement", "Purim"],
          answer: 1,
          reference: "Acts 2:1-4",
          explanation: "The Holy Spirit filled the gathered believers on the day of Pentecost."
        },
        {
          question: "Who encountered Jesus on the road to Damascus?",
          options: ["Barnabas", "Saul", "Silas", "Timothy"],
          answer: 1,
          reference: "Acts 9:1-9",
          explanation: "Saul, later known as Paul, encountered the risen Jesus on the road to Damascus."
        },
        {
          question: "Who is identified as the first Christian martyr in Acts?",
          options: ["James", "Stephen", "Philip", "Ananias"],
          answer: 1,
          reference: "Acts 7:54-60",
          explanation: "Stephen was stoned after bearing witness before the council."
        },
        {
          question: "Who wrote both the Gospel of Luke and Acts?",
          options: ["Luke", "Paul", "Peter", "Mark"],
          answer: 0,
          reference: "Acts 1:1",
          explanation: "Acts continues the account Luke began in his Gospel."
        },
        {
          question: "In which city were believers first called Christians?",
          options: ["Rome", "Jerusalem", "Antioch", "Corinth"],
          answer: 2,
          reference: "Acts 11:26",
          explanation: "The disciples were first called Christians at Antioch."
        },
        {
          question: "Where did Paul and Silas sing hymns while imprisoned?",
          options: ["Philippi", "Athens", "Ephesus", "Damascus"],
          answer: 0,
          reference: "Acts 16:22-26",
          explanation: "Paul and Silas prayed and sang in the Philippian jail before an earthquake opened the doors."
        },
        {
          question: "Which letter describes the armor of God?",
          options: ["Romans", "Ephesians", "Titus", "Philemon"],
          answer: 1,
          reference: "Ephesians 6:10-18",
          explanation: "Ephesians 6 uses armor to describe spiritual readiness and faithfulness."
        },
        {
          question: "Which letter lists the fruit of the Spirit?",
          options: ["Galatians", "Hebrews", "James", "1 Peter"],
          answer: 0,
          reference: "Galatians 5:22-23",
          explanation: "Galatians names love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control."
        },
        {
          question: "Which people were praised for examining the Scriptures daily?",
          options: ["Corinthians", "Bereans", "Romans", "Ephesians"],
          answer: 1,
          reference: "Acts 17:10-12",
          explanation: "The Bereans received the message eagerly and searched the Scriptures daily."
        },
        {
          question: "On which island did John receive the Revelation?",
          options: ["Crete", "Cyprus", "Malta", "Patmos"],
          answer: 3,
          reference: "Revelation 1:9",
          explanation: "John says he was on the island of Patmos when he received the vision."
        }
      ]
    },
    {
      id: "people-and-places",
      title: "People & Places",
      description: "Match well-known Bible people with their families, callings, journeys, and locations.",
      icon: "map",
      questions: [
        {
          question: "Who was Abraham's wife?",
          options: ["Rachel", "Sarah", "Rebekah", "Leah"],
          answer: 1,
          reference: "Genesis 17:15",
          explanation: "God changed Sarai's name to Sarah and promised she would bear Isaac."
        },
        {
          question: "Who was Ruth's mother-in-law?",
          options: ["Naomi", "Miriam", "Deborah", "Elizabeth"],
          answer: 0,
          reference: "Ruth 1:3-5",
          explanation: "Ruth remained faithfully with Naomi after both women were widowed."
        },
        {
          question: "In which river was Naaman told to wash?",
          options: ["Nile", "Euphrates", "Jordan", "Tigris"],
          answer: 2,
          reference: "2 Kings 5:10-14",
          explanation: "Elisha instructed Naaman to wash seven times in the Jordan."
        },
        {
          question: "Who was Samuel's mother?",
          options: ["Hannah", "Abigail", "Esther", "Martha"],
          answer: 0,
          reference: "1 Samuel 1:20",
          explanation: "Hannah prayed for a son and dedicated Samuel to God's service."
        },
        {
          question: "Which tax collector climbed a tree to see Jesus?",
          options: ["Matthew", "Zacchaeus", "Cornelius", "Nicodemus"],
          answer: 1,
          reference: "Luke 19:1-6",
          explanation: "Zacchaeus climbed a sycamore tree because he was short."
        },
        {
          question: "Where did Jesus grow up?",
          options: ["Bethlehem", "Jericho", "Nazareth", "Bethany"],
          answer: 2,
          reference: "Luke 4:16",
          explanation: "Luke identifies Nazareth as the place where Jesus had been brought up."
        },
        {
          question: "Who helped carry Jesus' cross?",
          options: ["Simon of Cyrene", "Joseph of Arimathea", "Barabbas", "Thomas"],
          answer: 0,
          reference: "Luke 23:26",
          explanation: "The soldiers compelled Simon of Cyrene to carry the cross behind Jesus."
        },
        {
          question: "Which woman sat at Jesus' feet while her sister served?",
          options: ["Mary", "Martha", "Joanna", "Lydia"],
          answer: 0,
          reference: "Luke 10:38-42",
          explanation: "Mary listened at Jesus' feet while Martha was distracted with serving."
        },
        {
          question: "Where were Jesus' followers first called Christians?",
          options: ["Antioch", "Bethlehem", "Samaria", "Galilee"],
          answer: 0,
          reference: "Acts 11:26",
          explanation: "The name Christian was first used for the disciples in Antioch."
        },
        {
          question: "Who replaced Judas among the twelve apostles?",
          options: ["Barnabas", "Matthias", "Paul", "Silas"],
          answer: 1,
          reference: "Acts 1:23-26",
          explanation: "Matthias was chosen to join the eleven apostles."
        }
      ]
    }
  ];

  const directory = document.querySelector("[data-quiz-directory]");
  const player = document.querySelector("[data-quiz-player]");
  if (!directory || !player) {
    return;
  }

  const elements = {
    directory,
    player,
    back: player.querySelector("[data-quiz-back]"),
    eyebrow: player.querySelector("[data-quiz-eyebrow]"),
    title: player.querySelector("[data-quiz-title]"),
    description: player.querySelector("[data-quiz-description]"),
    progress: player.querySelector("[data-quiz-progress]"),
    progressBar: player.querySelector("[data-quiz-progress-bar]"),
    score: player.querySelector("[data-quiz-score]"),
    question: player.querySelector("[data-quiz-question]"),
    options: player.querySelector("[data-quiz-options]"),
    feedback: player.querySelector("[data-quiz-feedback]"),
    next: player.querySelector("[data-quiz-next]"),
    questionPanel: player.querySelector("[data-quiz-question-panel]"),
    result: player.querySelector("[data-quiz-result]"),
    challenge: player.querySelector("[data-quiz-challenge]"),
    resultScore: player.querySelector("[data-quiz-result-score]"),
    resultTitle: player.querySelector("[data-quiz-result-title]"),
    resultMessage: player.querySelector("[data-quiz-result-message]"),
    resultReference: player.querySelector("[data-quiz-result-reference]"),
    retake: player.querySelector("[data-quiz-retake]")
  };

  let activeQuiz = null;
  let questionIndex = 0;
  let score = 0;
  let answered = false;

  function bibleUrl(reference) {
    const match = reference.match(/^(.+?)\s+(\d+):(\d+)/);
    if (!match) return "/bible/";
    const book = match[1] === "Psalm" ? "Psalms" : match[1];
    const params = new URLSearchParams({
      book,
      chapter: match[2],
      verse: match[3],
      translation: "web"
    });
    return `/bible/?${params}`;
  }

  function setQuizUrl(quizId, preserveSharedScore = false) {
    const url = new URL(window.location.href);
    if (quizId) {
      url.searchParams.set("quiz", quizId);
    } else {
      url.searchParams.delete("quiz");
    }
    if (!preserveSharedScore) {
      url.searchParams.delete("score");
      url.searchParams.delete("total");
    }
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function showDirectory() {
    activeQuiz = null;
    player.hidden = true;
    directory.hidden = false;
    setQuizUrl("");
    document.querySelector("main h1")?.focus();
  }

  function scoreMessage(points, total) {
    const percentage = Math.round((points / total) * 100);
    if (percentage === 100) return ["Outstanding!", "You answered every question correctly. You know this part of Scripture exceptionally well."];
    if (percentage >= 80) return ["Excellent work!", "You have a strong knowledge of this part of the Bible."];
    if (percentage >= 60) return ["Well done!", "You have a solid foundation. Review the references and try again for an even higher score."];
    if (percentage >= 40) return ["Good start!", "You are building your Bible knowledge. The Scripture references can help you learn more."];
    return ["Keep exploring!", "Every question is a chance to learn. Read the references and give the quiz another try."];
  }

  function resultShareText() {
    const total = activeQuiz.questions.length;
    return `I scored ${score}/${total} on the “${activeQuiz.title}” Bible quiz at Word Oasis. Can you beat my score?`;
  }

  function resultShareUrl() {
    const url = new URL("/quizzes/", window.location.origin);
    url.searchParams.set("quiz", activeQuiz.id);
    url.searchParams.set("score", String(score));
    url.searchParams.set("total", String(activeQuiz.questions.length));
    return url.href;
  }

  async function copyResult() {
    const content = `${resultShareText()} ${resultShareUrl()}`;
    try {
      await navigator.clipboard.writeText(content);
      elements.resultReference.textContent = "Result copied to your clipboard.";
      return;
    } catch (error) {
      // Continue to the legacy clipboard fallback below.
    }

    const textArea = document.createElement("textarea");
    textArea.value = content;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    try {
      if (!document.execCommand("copy")) {
        throw new Error("The browser rejected the copy command.");
      }
      elements.resultReference.textContent = "Result copied to your clipboard.";
    } catch (error) {
      elements.resultReference.textContent = "This browser could not copy the result. Please copy the page address from the address bar.";
    } finally {
      textArea.remove();
    }
  }

  function openShareUrl(url) {
    window.open(url, "_blank", "noopener,noreferrer,width=720,height=620");
  }

  async function shareResult(platform) {
    const text = resultShareText();
    const url = resultShareUrl();
    if (platform === "native" && navigator.share) {
      try {
        await navigator.share({ title: `${activeQuiz.title} Bible Quiz`, text, url });
      } catch (error) {
        if (error.name !== "AbortError") await copyResult();
      }
      return;
    }
    if (platform === "facebook") {
      openShareUrl(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
      return;
    }
    if (platform === "x") {
      openShareUrl(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${text} ${url}`)}`);
      return;
    }
    if (platform === "whatsapp") {
      openShareUrl(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`);
      return;
    }
    await copyResult();
  }

  function finishQuiz() {
    const [title, message] = scoreMessage(score, activeQuiz.questions.length);
    elements.questionPanel.hidden = true;
    elements.result.hidden = false;
    elements.resultScore.textContent = `${score}/${activeQuiz.questions.length}`;
    elements.resultTitle.textContent = title;
    elements.resultMessage.textContent = message;
    elements.resultReference.textContent = "Your result is stored only on this page and is not sent to Word Oasis.";
    elements.resultTitle.focus();
  }

  function renderQuestion() {
    const item = activeQuiz.questions[questionIndex];
    answered = false;
    elements.feedback.hidden = true;
    elements.feedback.replaceChildren();
    elements.next.hidden = true;
    elements.progress.textContent = `Question ${questionIndex + 1} of ${activeQuiz.questions.length}`;
    elements.score.textContent = `Score: ${score}`;
    elements.progressBar.style.width = `${((questionIndex + 1) / activeQuiz.questions.length) * 100}%`;
    elements.question.textContent = item.question;
    elements.options.replaceChildren();

    item.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.dataset.optionIndex = String(optionIndex);
      button.innerHTML = `<span class="quiz-option-letter" aria-hidden="true">${String.fromCharCode(65 + optionIndex)}</span><span></span>`;
      button.lastElementChild.textContent = option;
      elements.options.append(button);
    });
    elements.question.focus();
  }

  function selectAnswer(button) {
    if (answered) return;
    answered = true;
    const item = activeQuiz.questions[questionIndex];
    const selected = Number(button.dataset.optionIndex);
    const correct = selected === item.answer;
    if (correct) score += 1;

    elements.options.querySelectorAll(".quiz-option").forEach((optionButton) => {
      const optionIndex = Number(optionButton.dataset.optionIndex);
      optionButton.disabled = true;
      if (optionIndex === item.answer) optionButton.classList.add("is-correct");
      if (optionIndex === selected && !correct) optionButton.classList.add("is-incorrect");
    });

    const heading = document.createElement("strong");
    heading.textContent = correct ? "Correct!" : `Not quite. The correct answer is ${item.options[item.answer]}.`;
    const explanation = document.createElement("span");
    explanation.textContent = item.explanation;
    const reference = document.createElement("a");
    reference.href = bibleUrl(item.reference);
    reference.textContent = item.reference;
    reference.className = "quiz-reference";
    elements.feedback.className = `quiz-feedback ${correct ? "is-correct" : "is-incorrect"}`;
    elements.feedback.replaceChildren(heading, explanation, reference);
    elements.feedback.hidden = false;
    elements.score.textContent = `Score: ${score}`;
    elements.next.textContent = questionIndex === activeQuiz.questions.length - 1 ? "See my result" : "Next question";
    elements.next.hidden = false;
    elements.next.focus();
  }

  function startQuiz(quizId, sharedChallenge = null) {
    activeQuiz = quizzes.find((quiz) => quiz.id === quizId);
    if (!activeQuiz) return;
    questionIndex = 0;
    score = 0;
    elements.eyebrow.textContent = `${activeQuiz.questions.length}-question quiz`;
    elements.title.textContent = activeQuiz.title;
    elements.description.textContent = activeQuiz.description;
    elements.result.hidden = true;
    elements.questionPanel.hidden = false;
    directory.hidden = true;
    player.hidden = false;
    elements.challenge.hidden = !sharedChallenge;
    if (sharedChallenge) {
      elements.challenge.textContent = `A friend scored ${sharedChallenge.score}/${sharedChallenge.total}. Can you beat that score?`;
    }
    setQuizUrl(activeQuiz.id, Boolean(sharedChallenge));
    renderQuestion();
    player.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("click", (event) => {
    const startButton = event.target.closest("[data-start-quiz]");
    if (startButton) {
      startQuiz(startButton.dataset.startQuiz);
      return;
    }
    const optionButton = event.target.closest(".quiz-option");
    if (optionButton && elements.options.contains(optionButton)) {
      selectAnswer(optionButton);
      return;
    }
    const shareButton = event.target.closest("[data-quiz-share]");
    if (shareButton) {
      shareResult(shareButton.dataset.quizShare);
    }
  });

  elements.next.addEventListener("click", () => {
    if (!answered) return;
    if (questionIndex === activeQuiz.questions.length - 1) {
      elements.progressBar.style.width = "100%";
      finishQuiz();
      return;
    }
    questionIndex += 1;
    renderQuestion();
  });
  player.querySelectorAll("[data-quiz-back]").forEach((button) => {
    button.addEventListener("click", showDirectory);
  });
  elements.retake.addEventListener("click", () => startQuiz(activeQuiz.id));

  const initialParams = new URLSearchParams(window.location.search);
  const sharedQuiz = initialParams.get("quiz");
  const sharedScore = Number(initialParams.get("score"));
  const sharedTotal = Number(initialParams.get("total"));
  if (quizzes.some((quiz) => quiz.id === sharedQuiz)) {
    const challenge = Number.isInteger(sharedScore)
      && Number.isInteger(sharedTotal)
      && sharedScore >= 0
      && sharedTotal === 10
      && sharedScore <= sharedTotal
      ? { score: sharedScore, total: sharedTotal }
      : null;
    startQuiz(sharedQuiz, challenge);
  }
})();
