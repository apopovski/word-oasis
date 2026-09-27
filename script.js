const answers = window.WORD_OASIS_ANSWERS;
if (!Array.isArray(answers)) {
  throw new Error("Bible answers data is missing. Load answers-data.json before script.js.");
}

const state = {
  query: "",
  topic: "All"
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function answerUrl(answer) {
  return `/answers/${answer.slug}/`;
}

function topicUrl(topic) {
  return `/topics/${slugify(topic)}/`;
}

const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");
const navSearchInput = document.querySelector("#nav-search-input");
const navSearchForm = document.querySelector("#nav-search-form");
const answersList = document.querySelector("#answers-list");
const resultMeta = document.querySelector("#result-meta");
const emptyState = document.querySelector("#empty-state");
const topicGrid = document.querySelector("#topic-grid");
const topicTotalCount = document.querySelector("#topic-total-count");
const resultsPanel = document.querySelector("#results-panel");
const resultsClear = document.querySelector("#results-clear");
const answerSpotlight = document.querySelector("#answer-spotlight");
const spotlightTags = document.querySelector("#spotlight-tags");
const spotlightLink = document.querySelector("#spotlight-link");
const spotlightShort = document.querySelector("#spotlight-short");
const spotlightCta = document.querySelector("#spotlight-cta");
const spotlightPrevious = document.querySelector("#spotlight-previous");
const spotlightNext = document.querySelector("#spotlight-next");
const spotlightProgressFill = document.querySelector("#spotlight-progress-fill");
const promiseText = document.querySelector("#promise-text");
const promiseReference = document.querySelector("#promise-reference");
const promiseCategory = document.querySelector("#promise-category");
const promiseTranslation = document.querySelector("#promise-translation");
const promisePrevious = document.querySelector("#promise-previous");
const promiseNext = document.querySelector("#promise-next");
const promiseToday = document.querySelector("#promise-today");
const promiseRandom = document.querySelector("#promise-random");
const promisePosition = document.querySelector("#promise-position");
const promiseProgressFill = document.querySelector("#promise-progress-fill");
const promiseShare = document.querySelector("#promise-share");
const promiseShareTextButton = document.querySelector("#promise-share-text");
const promiseCopy = document.querySelector("#promise-copy");
const promiseSaveImage = document.querySelector("#promise-save-image");
const promiseShareModeText = document.querySelector("#promise-share-mode-text");
const promiseShareModeGraphic = document.querySelector("#promise-share-mode-graphic");
const promiseTextActions = document.querySelector("#promise-text-actions");
const promiseGraphicActions = document.querySelector("#promise-graphic-actions");
const promisePlatformButtons = [...document.querySelectorAll("[data-promise-share-platform]")];
const promiseStatus = document.querySelector("#promise-status");
const questionForm = document.querySelector("#question-form");
const questionInput = document.querySelector("#question-input");
const questionInputLabel = document.querySelector("#question-input-label");
const questionTopic = document.querySelector("#question-topic");
const questionTopicRow = document.querySelector("#question-topic-row");
const questionEmail = document.querySelector("#question-email");
const questionGender = document.querySelector("#question-gender");
const questionLocation = document.querySelector("#question-location");
const questionAge = document.querySelector("#question-age");
const questionFaith = document.querySelector("#question-faith");
const questionStatus = document.querySelector("#question-status");
const questionResults = document.querySelector("#question-results");
const questionResultsTitle = document.querySelector("#question-results-title");
const questionResultsList = document.querySelector("#question-results-list");
const questionSubmit = document.querySelector("#question-submit");
const questionSubmitLabel = document.querySelector("#question-submit-label");
const askModeInputs = document.querySelectorAll('input[name="ask-mode"]');
const askEyebrowText = document.querySelector("#ask-eyebrow-text");
const askHeading = document.querySelector("#ask-heading");
const askIntro = document.querySelector("#ask-intro");
const questionSubmissionEndpoint = window.WORD_OASIS_FORM_ENDPOINT || "";
const questionSubmissionEmailTo = window.WORD_OASIS_FORM_EMAIL_TO || "";

const askModeContent = {
  question: {
    eyebrow: "Find answers to your Bible questions",
    heading: "Ask a Bible Question",
    intro: "Have a Bible related question? We'll do our best to provide you with Scripture answers.",
    inputLabel: "Your question",
    placeholder: "Type your question... (e.g. How can I trust God when I am anxious?)",
    submitLabel: "Find a Bible answer"
  },
  general: {
    eyebrow: "Reach out to the Word Oasis team",
    heading: "General Inquiry",
    intro: "Have feedback, a prayer request, or a general question about the site? Send us a message.",
    inputLabel: "Your message",
    placeholder: "Type your message... (e.g. feedback, a prayer request, or a question about the site)",
    submitLabel: "Send message"
  }
};

function currentAskMode() {
  const checked = document.querySelector('input[name="ask-mode"]:checked');
  return checked ? checked.value : "question";
}

function applyAskMode(mode) {
  const content = askModeContent[mode] || askModeContent.question;
  if (askEyebrowText) askEyebrowText.textContent = content.eyebrow;
  if (askHeading) askHeading.textContent = content.heading;
  if (askIntro) askIntro.textContent = content.intro;
  if (questionInputLabel) questionInputLabel.textContent = content.inputLabel;
  if (questionInput) questionInput.placeholder = content.placeholder;
  if (questionSubmitLabel) questionSubmitLabel.textContent = content.submitLabel;
  if (questionTopicRow) {
    questionTopicRow.hidden = mode === "general";
  }
  if (questionEmail) {
    questionEmail.classList.toggle("full-width", mode === "general");
  }
  questionStatus.textContent = "";
}

askModeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      applyAskMode(input.value);
    }
  });
});

const requestedInquiryMode = new URLSearchParams(window.location.search).get("inquiry");
if (askModeContent[requestedInquiryMode]) {
  const requestedInput = document.querySelector(`input[name="ask-mode"][value="${requestedInquiryMode}"]`);
  if (requestedInput) {
    requestedInput.checked = true;
    applyAskMode(requestedInquiryMode);
  }
}

const biblePromises = [
  {
    text: "He has said, “I will in no way leave you, neither will I in any way forsake you.”",
    reference: "Hebrews 13:5",
    categories: ["faith"]
  },
  {
    text: "Yahweh is my shepherd: I shall lack nothing. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.",
    reference: "Psalm 23:1-4",
    categories: ["peace", "provision", "rest"]
  },
  {
    text: "“Come to me, all you who labor and are heavily burdened, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and humble in heart; and you will find rest for your souls. For my yoke is easy, and my burden is light.”",
    reference: "Matthew 11:28-30",
    categories: ["peace", "comfort", "rest"]
  },
  {
    text: "He has said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Most gladly therefore I will rather glory in my weaknesses, that the power of Christ may rest on me.",
    reference: "2 Corinthians 12:9",
    categories: ["comfort"]
  },
  {
    text: "Behold, I am with you always, even to the end of the age.",
    reference: "Matthew 28:20",
    categories: ["faith"]
  },
  {
    text: "Yahweh is near to those who have a broken heart, and saves those who have a crushed spirit.",
    reference: "Psalm 34:18",
    categories: ["comfort"]
  },
  {
    text: "Haven’t I commanded you? Be strong and courageous. Don’t be afraid. Don’t be dismayed, for Yahweh your God is with you wherever you go.”",
    reference: "Joshua 1:9",
    categories: ["courage"]
  },
  {
    text: "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.",
    reference: "John 3:16",
    categories: ["love", "salvation"]
  },
  {
    text: "Casting all your worries on him, because he cares for you.",
    reference: "1 Peter 5:7",
    categories: ["peace"]
  },
  {
    text: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.",
    reference: "Philippians 4:6-7",
    categories: ["peace", "prayer"]
  },
  {
    text: "Peace I leave with you. My peace I give to you; not as the world gives, give I to you. Don’t let your heart be troubled, neither let it be fearful.",
    reference: "John 14:27",
    categories: ["peace", "rest"]
  },
  {
    text: "We know that all things work together for good for those who love God, to those who are called according to his purpose.",
    reference: "Romans 8:28",
    categories: ["faith", "love", "hope"]
  },
  {
    text: "It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail. They are new every morning. Great is your faithfulness.",
    reference: "Lamentations 3:22-23",
    categories: ["hope", "gratitude"]
  },
  {
    text: "I can do all things through Christ, who strengthens me.",
    reference: "Philippians 4:13",
    categories: ["courage"]
  },
  {
    text: "Yahweh will fight for you, and you shall be still.”",
    reference: "Exodus 14:14",
    categories: ["protection"]
  },
  {
    text: "“Ask, and it will be given you. Seek, and you will find. Knock, and it will be opened for you. For everyone who asks receives. He who seeks finds. To him who knocks it will be opened.",
    reference: "Matthew 7:7-8",
    categories: ["prayer"]
  },
  {
    text: "Let us hold fast the confession of our hope without wavering, for he who promised is faithful.",
    reference: "Hebrews 10:23",
    categories: ["faith"]
  },
  {
    text: "Yahweh is my light and my salvation. Whom shall I fear? Yahweh is the strength of my life. Of whom shall I be afraid?",
    reference: "Psalm 27:1",
    categories: ["protection"]
  },
  {
    text: "For I know the thoughts that I think toward you,” says Yahweh, “thoughts of peace, and not of evil, to give you hope and a future.",
    reference: "Jeremiah 29:11",
    categories: ["hope"]
  },
  {
    text: "But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.",
    reference: "Isaiah 40:31",
    categories: ["courage"]
  },
  {
    text: "Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.",
    reference: "Isaiah 41:10",
    categories: ["courage", "comfort"]
  },
  {
    text: "For God didn’t give us a spirit of fear, but of power, love, and self-control.",
    reference: "2 Timothy 1:7",
    categories: ["courage"]
  },
  {
    text: "Don’t be afraid, for I have redeemed you. I have called you by your name. You are mine. When you pass through the waters, I will be with you.",
    reference: "Isaiah 43:1-2",
    categories: ["courage", "protection"]
  },
  {
    text: "Yahweh, your God, is among you, a mighty one who will save. He will rejoice over you with joy. He will calm you in his love. He will rejoice over you with singing.",
    reference: "Zephaniah 3:17",
    categories: ["love", "comfort"]
  },
  {
    text: "For his anger is but for a moment. His favor is for a lifetime. Weeping may stay for the night, but joy comes in the morning.",
    reference: "Psalm 30:5",
    categories: ["hope", "comfort"]
  },
  {
    text: "Draw near to God, and he will draw near to you. Cleanse your hands, you sinners; and purify your hearts, you double-minded.",
    reference: "James 4:8",
    categories: ["faith", "prayer"]
  },
  {
    text: "Yahweh is good, a stronghold in the day of trouble; and he knows those who take refuge in him.",
    reference: "Nahum 1:7",
    categories: ["courage", "protection"]
  },
  {
    text: "Blessed are those who mourn, for they shall be comforted.",
    reference: "Matthew 5:4",
    categories: ["comfort"]
  },
  {
    text: "God is our refuge and strength, a very present help in trouble.",
    reference: "Psalm 46:1",
    categories: ["courage", "protection", "comfort"]
  },
  {
    text: "My God will supply every need of yours according to his riches in glory in Christ Jesus.",
    reference: "Philippians 4:19",
    categories: ["provision"]
  },
  {
    text: "There is therefore now no condemnation to those who are in Christ Jesus, who don’t walk according to the flesh, but according to the Spirit.",
    reference: "Romans 8:1",
    categories: ["forgiveness", "salvation"]
  },
  {
    text: "If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.",
    reference: "1 John 1:9",
    categories: ["forgiveness", "salvation"]
  },
  {
    text: "Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.",
    reference: "2 Corinthians 5:17",
    categories: ["forgiveness", "salvation"]
  },
  {
    text: "By grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.",
    reference: "Ephesians 2:8-9",
    categories: ["forgiveness", "salvation"]
  },
  {
    text: "Blessed is the man who endures temptation, for when he has been approved, he will receive the crown of life, which the Lord promised to those who love him.",
    reference: "James 1:12",
    categories: ["hope"]
  },
  {
    text: "Then he said to them, “Go your way. Eat the fat, drink the sweet, and send portions to him for whom nothing is prepared, for today is holy to our Lord. Don’t be grieved, for the joy of Yahweh is your strength.”",
    reference: "Nehemiah 8:10",
    categories: ["gratitude"]
  },
  {
    text: "No, in all these things, we are more than conquerors through him who loved us.",
    reference: "Romans 8:37",
    categories: ["faith", "courage"]
  },
  {
    text: "Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    categories: ["faith", "guidance"]
  },
  {
    text: "Also delight yourself in Yahweh, and he will give you the desires of your heart. Commit your way to Yahweh. Trust also in him, and he will do this:",
    reference: "Psalm 37:4-5",
    categories: ["faith", "guidance"]
  },
  {
    text: "He who dwells in the secret place of the Most High will rest in the shadow of the Almighty. I will say of Yahweh, “He is my refuge and my fortress; my God, in whom I trust.”",
    reference: "Psalm 91:1-4",
    categories: ["protection"]
  },
  {
    text: "Yahweh will keep you from all evil. He will keep your soul. Yahweh will keep your going out and your coming in, from this time forward, and forever more.",
    reference: "Psalm 121:7-8",
    categories: ["protection"]
  },
  {
    text: "Yahweh himself is who goes before you. He will be with you. He will not fail you nor forsake you. Don’t be afraid. Don’t be discouraged.”",
    reference: "Deuteronomy 31:8",
    categories: ["courage", "protection"]
  },
  {
    text: "My sheep hear my voice, and I know them, and they follow me. I give eternal life to them. They will never perish, and no one will snatch them out of my hand.",
    reference: "John 10:27-29",
    categories: ["protection"]
  },
  {
    text: "But the Lord is faithful, who will establish you, and guard you from the evil one.",
    reference: "2 Thessalonians 3:3",
    categories: ["faith", "protection"]
  },
  {
    text: "Neither death, nor life, nor things present, nor things to come, nor any other created thing will be able to separate us from God’s love in Christ Jesus our Lord.",
    reference: "Romans 8:38-39",
    categories: ["faith", "love"]
  },
  {
    text: "But God commends his own love toward us, in that while we were yet sinners, Christ died for us.",
    reference: "Romans 5:8",
    categories: ["love"]
  },
  {
    text: "See how great a love the Father has given to us, that we should be called children of God! For this cause the world doesn’t know us, because it didn’t know him.",
    reference: "1 John 3:1",
    categories: ["love"]
  },
  {
    text: "For the mountains may depart, and the hills be removed; but my loving kindness will not depart from you, and my covenant of peace will not be removed,” says Yahweh who has mercy on you.",
    reference: "Isaiah 54:10",
    categories: ["love"]
  },
  {
    text: "Yahweh appeared of old to me, saying, “Yes, I have loved you with an everlasting love. Therefore I have drawn you with loving kindness.",
    reference: "Jeremiah 31:3",
    categories: ["love"]
  },
  {
    text: "For as the heavens are high above the earth, so great is his loving kindness toward those who fear him. As far as the east is from the west, so far has he removed our transgressions from us.",
    reference: "Psalm 103:11-12",
    categories: ["love"]
  },
  {
    text: "Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope, in the power of the Holy Spirit.",
    reference: "Romans 15:13",
    categories: ["hope", "gratitude"]
  },
  {
    text: "According to his great mercy, God caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead.",
    reference: "1 Peter 1:3-4",
    categories: ["hope"]
  },
  {
    text: "He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away.”",
    reference: "Revelation 21:4",
    categories: ["hope", "comfort"]
  },
  {
    text: "We don’t faint. Though our outward person is decaying, our inward person is renewed day by day. Our light affliction works for us an eternal weight of glory.",
    reference: "2 Corinthians 4:16-18",
    categories: ["courage", "hope", "comfort"]
  },
  {
    text: "This hope we have as an anchor of the soul, a hope both sure and steadfast and entering into that which is within the veil;",
    reference: "Hebrews 6:19",
    categories: ["hope"]
  },
  {
    text: "I will instruct you and teach you in the way which you shall go. I will counsel you with my eye on you.",
    reference: "Psalm 32:8",
    categories: ["guidance"]
  },
  {
    text: "Your word is a lamp to my feet, and a light for my path.",
    reference: "Psalm 119:105",
    categories: ["guidance"]
  },
  {
    text: "But if any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach; and it will be given to him.",
    reference: "James 1:5",
    categories: ["guidance"]
  },
  {
    text: "Your ears will hear a voice behind you, saying, “This is the way. Walk in it,” whenever you turn to the right hand or to the left.",
    reference: "Isaiah 30:21",
    categories: ["guidance"]
  },
  {
    text: "However when he, the Spirit of truth, has come, he will guide you into all truth, for he will not speak from himself; but whatever he hears, he will speak. He will declare to you things that are coming.",
    reference: "John 16:13",
    categories: ["guidance"]
  },
  {
    text: "‘Call to me, and I will answer you, and will show you great and difficult things, which you don’t know.’",
    reference: "Jeremiah 33:3",
    categories: ["guidance", "prayer"]
  },
  {
    text: "The righteous cry, and Yahweh hears, and delivers them out of all their troubles.",
    reference: "Psalm 34:17",
    categories: ["prayer"]
  },
  {
    text: "Yahweh is near to all those who call on him, to all who call on him in truth. He will fulfill the desire of those who fear him. He also will hear their cry, and will save them.",
    reference: "Psalm 145:18-19",
    categories: ["prayer"]
  },
  {
    text: "This is the boldness which we have toward him, that, if we ask anything according to his will, he listens to us. And if we know that he listens to us, whatever we ask, we know that we have the petitions which we have asked of him.",
    reference: "1 John 5:14-15",
    categories: ["prayer"]
  },
  {
    text: "Let us therefore draw near with boldness to the throne of grace, that we may receive mercy, and may find grace for help in time of need.",
    reference: "Hebrews 4:16",
    categories: ["prayer"]
  },
  {
    text: "This is the day that Yahweh has made. We will rejoice and be glad in it!",
    reference: "Psalm 118:24",
    categories: ["gratitude"]
  },
  {
    text: "I have spoken these things to you, that my joy may remain in you, and that your joy may be made full.",
    reference: "John 15:11",
    categories: ["gratitude"]
  },
  {
    text: "You will show me the path of life. In your presence is fullness of joy. In your right hand there are pleasures forever more.",
    reference: "Psalm 16:11",
    categories: ["gratitude"]
  },
  {
    text: "“Come now, and let us reason together,” says Yahweh: “Though your sins be as scarlet, they shall be as white as snow. Though they be red like crimson, they shall be as wool.",
    reference: "Isaiah 1:18",
    categories: ["forgiveness"]
  },
  {
    text: "He will again have compassion on us. He will tread our iniquities under foot, and will cast all our sins into the depths of the sea.",
    reference: "Micah 7:18-19",
    categories: ["forgiveness"]
  },
  {
    text: "“Repent therefore, and turn again, that your sins may be blotted out, so that there may come times of refreshing from the presence of the Lord,",
    reference: "Acts 3:19",
    categories: ["forgiveness", "salvation"]
  },
  {
    text: "In him we have our redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace.",
    reference: "Ephesians 1:7",
    categories: ["forgiveness", "salvation"]
  },
  {
    text: "For I will be merciful to their unrighteousness. I will remember their sins and lawless deeds no more.”",
    reference: "Hebrews 8:12",
    categories: ["forgiveness"]
  },
  {
    text: "He heals the broken in heart, and binds up their wounds.",
    reference: "Psalm 147:3",
    categories: ["comfort"]
  },
  {
    text: "He was pierced for our transgressions and crushed for our iniquities. The punishment that brought our peace was on him, and by his wounds we are healed.",
    reference: "Isaiah 53:4-5",
    categories: ["comfort"]
  },
  {
    text: "The Father of mercies and God of all comfort comforts us in all our affliction, so that we may comfort others with the comfort we receive from God.",
    reference: "2 Corinthians 1:3-4",
    categories: ["comfort"]
  },
  {
    text: "The prayer of faith will heal the sick, and the Lord will raise them up. If they have committed sins, they will be forgiven.",
    reference: "James 5:15",
    categories: ["comfort"]
  },
  {
    text: "Oh fear Yahweh, you his saints, for there is no lack with those who fear him. The young lions do lack, and suffer hunger, but those who seek Yahweh shall not lack any good thing.",
    reference: "Psalm 34:9-10",
    categories: ["provision"]
  },
  {
    text: "Your heavenly Father knows that you need these things. But seek first God’s Kingdom and his righteousness, and all these things will be given to you as well.",
    reference: "Matthew 6:31-33",
    categories: ["provision"]
  },
  {
    text: "If you then, being evil, know how to give good gifts to your children, how much more will your Father who is in heaven give good things to those who ask him!",
    reference: "Matthew 7:11",
    categories: ["provision"]
  },
  {
    text: "He who didn’t spare his own Son, but delivered him up for us all, how would he not also with him freely give us all things?",
    reference: "Romans 8:32",
    categories: ["provision"]
  },
  {
    text: "Jesus said to them, “I am the bread of life. He who comes to me will not be hungry, and he who believes in me will never be thirsty.",
    reference: "John 6:35",
    categories: ["provision"]
  },
  {
    text: "I will give you a new heart, and I will put a new spirit within you. I will take away the stony heart and give you a heart of flesh.",
    reference: "Ezekiel 36:26-27",
    categories: ["forgiveness", "salvation"]
  },
  {
    text: "But as many as received him, to them he gave the right to become God’s children, to those who believe in his name:",
    reference: "John 1:12",
    categories: ["salvation"]
  },
  {
    text: "“Most certainly I tell you, he who hears my word, and believes him who sent me, has eternal life, and doesn’t come into judgment, but has passed out of death into life.",
    reference: "John 5:24",
    categories: ["salvation"]
  },
  {
    text: "All those whom the Father gives me will come to me. He who comes to me I will in no way throw out.",
    reference: "John 6:37",
    categories: ["salvation"]
  },
  {
    text: "They said, “Believe in the Lord Jesus Christ, and you will be saved, you and your household.”",
    reference: "Acts 16:31",
    categories: ["salvation"]
  },
  {
    text: "Being therefore justified by faith, we have peace with God through our Lord Jesus Christ;",
    reference: "Romans 5:1",
    categories: ["salvation"]
  },
  {
    text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
    reference: "Romans 6:23",
    categories: ["salvation"]
  },
  {
    text: "The testimony is this, that God gave to us eternal life, and this life is in his Son. He who has the Son has the life. He who doesn’t have God’s Son doesn’t have the life.",
    reference: "1 John 5:11-12",
    categories: ["salvation"]
  },
  {
    text: "He said, “My presence will go with you, and I will give you rest.”",
    reference: "Exodus 33:14",
    categories: ["rest"]
  },
  {
    text: "In peace I will both lay myself down and sleep, for you, Yahweh alone, make me live in safety.",
    reference: "Psalm 4:8",
    categories: ["peace", "rest"]
  },
  {
    text: "My soul rests in God alone. My salvation is from him. He alone is my rock and my salvation, my fortress— I will never be greatly shaken.",
    reference: "Psalm 62:1-2",
    categories: ["peace", "rest"]
  },
  {
    text: "You will keep whoever’s mind is steadfast in perfect peace, because he trusts in you.",
    reference: "Isaiah 26:3",
    categories: ["peace", "rest"]
  },
  {
    text: "Don’t let your heart be troubled. Believe in God. Believe also in me. I am going to prepare a place for you, and I will come again and receive you to myself.",
    reference: "John 14:1-3",
    categories: ["peace", "rest"]
  },
  {
    text: "I have told you these things, that in me you may have peace. In the world you have oppression; but cheer up! I have overcome the world.”",
    reference: "John 16:33",
    categories: ["courage", "peace"]
  },
  {
    text: "No temptation has taken you except what is common to man. God is faithful, who will not allow you to be tempted above what you are able, but will with the temptation also make the way of escape, that you may be able to endure it.",
    reference: "1 Corinthians 10:13",
    categories: ["faith"]
  },
  {
    text: "Let us not be weary in doing good, for we will reap in due season, if we don’t give up.",
    reference: "Galatians 6:9",
    categories: ["faith", "hope"]
  },
  {
    text: "Cast your burden on Yahweh, and he will sustain you. He will never allow the righteous to be moved.",
    reference: "Psalm 55:22",
    categories: ["peace", "rest"]
  },
  {
    text: "Though I walk in the middle of trouble, you will revive me. You will stretch out your hand against the wrath of my enemies. Your right hand will save me.",
    reference: "Psalm 138:7",
    categories: ["courage", "protection"]
  }
];

const promiseCategories = [
  { id: "faith", label: "Faith & trust" },
  { id: "courage", label: "Courage & strength" },
  { id: "peace", label: "Peace & anxiety" },
  { id: "protection", label: "Fear & protection" },
  { id: "love", label: "God's love" },
  { id: "hope", label: "Hope" },
  { id: "guidance", label: "Guidance & wisdom" },
  { id: "prayer", label: "Prayer" },
  { id: "gratitude", label: "Gratitude & joy" },
  { id: "forgiveness", label: "Forgiveness" },
  { id: "comfort", label: "Comfort & healing" },
  { id: "provision", label: "Provision" },
  { id: "salvation", label: "Grace & salvation" },
  { id: "rest", label: "Rest & renewal" }
];

const promiseTranslations = {
  web: { id: "web", label: "WEB" },
  kjv: { id: "kjv", label: "KJV" },
  asv: { id: "asv", label: "ASV" }
};
const promiseTranslationStorageKey = "word-oasis-bible-translation";
const legacyPromiseTranslationStorageKey = "word-oasis-promise-translation";
const promiseCategoryStorageKey = "word-oasis-promise-category";
const promiseCacheStorageKey = "word-oasis-promise-text-cache-v1";
const promiseTranslationCache = new Map();
let promiseIndex = 0;
let displayedPromise = null;
let promiseRenderRequest = 0;
let promiseRotation;
let promiseHeightResizeTimer;

const topicIcons = {
  All: `
    <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
  `,
  Salvation: `
    <path d="M12 2v20"></path>
    <path d="M5 8h14"></path>
  `,
  Faith: `
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
    <path d="M12 22V2"></path>
  `,
  Comfort: `
    <path d="M15 10V9"></path>
    <path d="M16.472 15a6 6 0 0 1-8.943 0"></path>
    <path d="M9 10V9"></path>
    <circle cx="12" cy="12" r="10"></circle>
  `,
  "Christian Living": `
    <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path>
    <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path>
    <path d="M16 17h4"></path>
    <path d="M4 13h4"></path>
  `,
  Sabbath: `
    <path d="M6.75 3v2.25M17.25 3v2.25"></path>
    <path d="M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path>
    <text x="12" y="17.4" fill="currentColor" stroke="none" text-anchor="middle" font-size="8" font-weight="800" font-family="Arial, sans-serif">7</text>
  `,
  Prophecy: `
    <path d="M15 12h-5"></path>
    <path d="M15 8h-5"></path>
    <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
  `,
  "Second Coming": `
    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.204a1 1 0 0 1-.962.733H5.815a1 1 0 0 1-.962-.733L2.019 6.019a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
    <path d="M5 21h14"></path>
  `,
  "State of the Dead": `
    <g transform="scale(0.046875)" fill="currentColor" stroke="none">
      <path d="M428.466 386.01V164.97C428.451 73.851 354.608.008 263.493 0H248.51C157.392.008 83.548 73.851 83.541 164.97v221.04H44.166V512h423.668v-14.997V386.01H428.466zM113.535 164.97c.008-37.318 15.086-70.974 39.529-95.446 24.473-24.444 58.129-39.521 95.446-39.529h14.983c37.32.008 70.962 15.085 95.435 39.529 24.459 24.473 39.529 58.129 39.544 95.446v221.04H113.535V164.97zM74.161 416.004h363.679v66.001H74.161V416.004z"></path>
      <polygon points="275.297,149.504 236.706,149.504 236.706,203.092 181.799,203.092 181.799,241.823 236.706,241.823 236.706,327.596 275.297,327.596 275.297,241.823 330.208,241.823 330.208,203.092 275.297,203.092"></polygon>
    </g>
  `,
  Hell: `
    <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
  `,
  "Great Controversy": `
    <path d="m13 19 6-6"></path>
    <path d="M14.5 17.5 3.586 6.586A2 2 0 0 1 3 5.172V3h2.172a2 2 0 0 1 1.414.586L17.5 14.5"></path>
    <path d="m14.828 6.172 2.586-2.586A2 2 0 0 1 18.828 3H21v2.172a2 2 0 0 1-.586 1.414l-2.586 2.586"></path>
    <path d="m16 16 4 4"></path>
    <path d="m19 21 2-2"></path>
    <path d="m5 14 4 4"></path>
    <path d="m5 21-2-2"></path>
    <path d="M7.5 16.5 4 20"></path>
  `,
  "Holy Spirit": `
    <path d="M2 17.2c3.2.5 5.9.6 8.2-.1-3.8-2.4-5.8-6.4-5.5-11.6 2.2 1.7 4.5 2.9 6.8 3.8L14.2 2c1.2 3.4 4.1 5 5.2 8.7 1.5-.5 3.1.1 4.1 2l-2.1 1.1c-.7 5.3-3.9 8.2-8.7 8.2-4.8 0-8.4-1.7-10.7-4.8Z"></path>
    <path d="M4.7 5.5c.5 5.8 3.4 8.9 7.9 10.1"></path>
    <path d="M11.5 9.3c4.8 1.5 7.1 3.8 6.8 6.8"></path>
    <path d="M14.2 2c.4 3.8 2.5 5.1 5.2 8.7"></path>
    <path d="M7.2 12.4c.7.7 1.6 1.2 2.7 1.5"></path>
    <circle cx="19.8" cy="12.1" r=".55" fill="currentColor" stroke="none"></circle>
  `,
  Baptism: `
    <path d="M12 10L12 2"></path>
    <path d="M16 6L12 10L8 6"></path>
    <path d="M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15"></path>
    <path d="M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21"></path>
  `,
  "Marriage and Family": `
    <circle cx="4.3" cy="7" r="2.2"></circle>
    <path d="M.8 21v-2.1a3.5 3.5 0 0 1 7 0V21"></path>
    <path d="M10.2 6a2.2 2.2 0 0 1 4.4 0c0 1.9.4 3.3.9 4.5H9.3c.5-1.2.9-2.6.9-4.5z"></path>
    <path d="M8.6 21v-2.3a3.6 3.6 0 0 1 7.2 0V21"></path>
    <circle cx="20.5" cy="11.4" r="1.6"></circle>
    <path d="M18 21v-1.6a2.5 2.5 0 0 1 5 0V21"></path>
  `,
  Stewardship: `
    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
    <path d="m2 16 6 6"></path>
    <circle cx="16" cy="9" r="2.9"></circle>
    <circle cx="6" cy="5" r="3"></circle>
  `,
  Church: `
    <path d="M10 9h4"></path>
    <path d="M12 7v5"></path>
    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
    <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9"></path>
    <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14"></path>
  `,
  Creation: `
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
    <path d="M2 12h20"></path>
  `,
  Forgiveness: `
    <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
    <path d="m21 3 1 11h-2"></path>
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
    <path d="M3 4h8"></path>
  `,
  "Bible Study": `
    <path d="M12 5v16"></path>
    <path d="M16 13h2"></path>
    <path d="M16 9h2"></path>
    <path d="M20.001 19A2 2 0 0 0 22 17V5a2 2 0 0 0-1.999-2L16 3.002A5 5 0 0 0 12 5a5 5 0 0 0-4-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 1.999 2H8a5 5 0 0 1 4 2 5 5 0 0 1 4-2z"></path>
    <path d="M6 13h2"></path>
    <path d="M6 9h2"></path>
  `,
  Health: `
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
  `,
  Law: `
    <path d="M4 21V8a4 4 0 0 1 8 0v13"></path>
    <path d="M12 21V8a4 4 0 0 1 8 0v13"></path>
    <path d="M2.5 21h19"></path>
    <path d="M6.5 11h3"></path>
    <path d="M6.5 14.5h3"></path>
    <path d="M14.5 11h3"></path>
    <path d="M14.5 14.5h3"></path>
  `,
  Sanctuary: `
    <path d="M3 9.75 12 4l9 5.75"></path>
    <path d="M5.5 10.5v7.5"></path>
    <path d="M10 10.5v7.5"></path>
    <path d="M14 10.5v7.5"></path>
    <path d="M18.5 10.5v7.5"></path>
    <path d="M3.5 18h17"></path>
    <path d="M2.5 21h19"></path>
  `,
  "Three Angels": `
    <g fill="currentColor" stroke="none">
      <circle cx="4.3" cy="6.68" r="1.28"></circle>
      <path d="M4.3 8.4C3.46 10.2 2.63 13.8 2.63 20.4L5.97 20.4C5.97 13.8 5.14 10.2 4.3 8.4Z"></path>
      <path d="M3.1 9.3C1.64 6.6 0.5 7.86 0.73 13.2C2.02 11.1 2.46 12 3 14.1Z"></path>
      <path d="M5.5 9.3C6.96 6.6 8.1 7.86 7.87 13.2C6.58 11.1 6.14 12 5.6 14.1Z"></path>
      <circle cx="12" cy="4.3" r="1.5"></circle>
      <path d="M12 6.32C11.12 8.43 10.24 12.66 10.24 20.4L13.76 20.4C13.76 12.66 12.88 8.43 12 6.32Z"></path>
      <path d="M10.73 7.38C9.2 4.21 8 5.69 8.24 11.95C9.6 9.49 10.06 10.54 10.63 13.01Z"></path>
      <path d="M13.27 7.38C14.8 4.21 16 5.69 15.76 11.95C14.4 9.49 13.94 10.54 13.37 13.01Z"></path>
      <circle cx="19.7" cy="6.68" r="1.28"></circle>
      <path d="M19.7 8.4C18.86 10.2 18.03 13.8 18.03 20.4L21.37 20.4C21.37 13.8 20.54 10.2 19.7 8.4Z"></path>
      <path d="M18.5 9.3C17.04 6.6 15.9 7.86 16.13 13.2C17.42 11.1 17.86 12 18.4 14.1Z"></path>
      <path d="M20.9 9.3C22.36 6.6 23.5 7.86 23.27 13.2C21.98 11.1 21.54 12 21 14.1Z"></path>
    </g>
  `,
  Prayer: `
    <g transform="translate(-1.549 -3.6264) scale(0.8464)" fill="currentColor" stroke="none">
      <path d="M25.063 15.214c-0.458-1.030-0.941-1.905-1.49-2.732l0.043 0.068c-0.174-0.282-0.348-0.563-0.518-0.849-0.807-1.36-1.51-2.448-2.215-3.425-0.342-0.479-0.679-0.897-1.037-1.294l0.011 0.013c-0.267-0.326-0.6-0.587-0.981-0.763l-0.017-0.007c-0.081-0.031-0.175-0.050-0.274-0.050-0.055 0-0.108 0.006-0.159 0.016l0.005-0.001c-0.88 0.128-1.615 0.658-2.021 1.395l-0.007 0.014c-0.155 0.365-0.245 0.79-0.245 1.236 0 0.496 0.111 0.967 0.311 1.387l-0.008-0.020 2.077 4.622c-1.166 0.027-2.102 0.979-2.102 2.149 0 0.057 0.002 0.113 0.007 0.169l-0-0.007v3.11l-0.435 1.485-0.435-1.485v-3.11c0.004-0.048 0.006-0.104 0.006-0.16 0-1.171-0.936-2.123-2.1-2.148l-0.002-0 2.072-4.613c0.194-0.404 0.307-0.878 0.307-1.379 0-0.445-0.090-0.87-0.252-1.256l0.008 0.021c-0.413-0.751-1.148-1.282-2.013-1.408l-0.015-0.002c-0.047-0.010-0.1-0.015-0.155-0.015-0.099 0-0.193 0.018-0.28 0.051l0.005-0.002c-0.405 0.189-0.744 0.457-1.010 0.787l-0.004 0.005c-0.342 0.379-0.672 0.79-0.979 1.22l-0.028 0.042c-0.707 0.977-1.411 2.064-2.216 3.424-0.167 0.281-0.34 0.561-0.512 0.84-0.509 0.762-0.994 1.639-1.406 2.557l-0.047 0.116c-0.459 1.106-0.726 2.39-0.726 3.737 0 1.178 0.204 2.309 0.579 3.358l-0.022-0.070c0.452 1.090 0.82 2.367 1.044 3.692l0.015 0.107h-0.69c-0.414 0-0.75 0.336-0.75 0.75v0 3.211c0 0.414 0.336 0.75 0.75 0.75h17.712c0.414-0 0.75-0.336 0.75-0.75v0-3.211c-0-0.414-0.336-0.75-0.75-0.75h-0.691c0.244-1.444 0.616-2.731 1.114-3.951l-0.045 0.123c0.347-0.971 0.548-2.092 0.548-3.259 0-1.347-0.267-2.632-0.752-3.805l0.024 0.066zM8.187 21.715c-0.289-0.823-0.456-1.771-0.456-2.758 0-1.143 0.224-2.234 0.63-3.231l-0.021 0.057c0.424-0.948 0.871-1.753 1.379-2.514l-0.039 0.062c0.178-0.287 0.355-0.575 0.527-0.865 0.78-1.318 1.461-2.369 2.139-3.307 0.305-0.429 0.606-0.804 0.926-1.16l-0.010 0.011c0.083-0.089 0.184-0.199 0.276-0.28 0.31 0.075 0.566 0.267 0.724 0.525l0.003 0.005c0.059 0.168 0.092 0.363 0.092 0.565 0 0.277-0.064 0.539-0.177 0.773l0.005-0.011-2.892 6.436c-0.041 0.090-0.065 0.196-0.065 0.308v0 6.437c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-5.632c0-1.271 1.343-1.268 1.345 0v3.218c0 0.001 0 0.002 0 0.003 0 0.074 0.011 0.146 0.032 0.213l-0.001-0.005 1.147 3.918v1.557h-5.902c-0.236-1.618-0.642-3.074-1.207-4.449l0.045 0.124zM24.113 29.25h-16.212v-1.711h16.212zM23.838 21.686c-0.522 1.258-0.931 2.724-1.158 4.25l-0.013 0.104h-5.902v-1.557l1.147-3.918c0.019-0.062 0.030-0.134 0.030-0.208 0-0.001 0-0.002 0-0.003v0-3.218c-0.001-0.969 0.784-1.019 1.118-0.678 0.142 0.163 0.229 0.378 0.229 0.613 0 0.023-0.001 0.045-0.002 0.067l0-0.003v5.632c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-6.437c-0-0.111-0.025-0.217-0.068-0.312l0.002 0.005-2.896-6.446c-0.104-0.221-0.165-0.481-0.165-0.754 0-0.199 0.032-0.391 0.092-0.57l-0.004 0.013c0.16-0.266 0.418-0.46 0.721-0.534l0.008-0.002c0.094 0.084 0.201 0.199 0.295 0.303 0.303 0.337 0.597 0.704 0.871 1.087l0.026 0.038c0.676 0.938 1.357 1.988 2.139 3.309 0.174 0.293 0.354 0.582 0.531 0.872 0.467 0.697 0.914 1.5 1.294 2.338l0.044 0.107c0.386 0.939 0.61 2.029 0.61 3.172 0 0.977-0.164 1.916-0.466 2.791l0.018-0.060z"></path>
    </g>
  `
};

function topicIconMarkup(topic) {
  const content = topicIcons[topic] || topicIcons.Faith;
  return `<svg viewBox="0 0 24 24" focusable="false">${content}</svg>`;
}

const topicDescriptions = {
  All: "View every Bible answer in the library",
  Salvation: "Grace, faith, repentance, eternal life",
  Faith: "Trusting God, growing through doubt, and living by His promises",
  Law: "God's commandments, obedience, and faithful living",
  Sanctuary: "Christ's ministry, redemption, and the plan of salvation",
  "Three Angels": "God's final message of worship, warning, and hope",
  Prayer: "How to pray, unanswered prayer, worship",
  Comfort: "Hope in suffering, grief, anxiety, and difficult seasons",
  "Christian Living": "Obedience, holiness, daily discipleship",
  Sabbath: "Rest, worship, creation, and God's commandments",
  Prophecy: "Second coming, judgment, hope, and restoration",
  "Second Coming": "Jesus' return, readiness, resurrection, and lasting hope",
  "State of the Dead": "What happens at death and the hope of resurrection",
  Hell: "Final judgment, the lake of fire, and the end of sin",
  "Great Controversy": "The conflict between good and evil, and why it matters",
  "Holy Spirit": "The Comforter, spiritual fruit, and power for living",
  Baptism: "New life in Christ and public commitment to Him",
  "Marriage and Family": "Marriage, parenting, and home life God's way",
  Stewardship: "Money, giving, time, and faithful living",
  Church: "Fellowship, worship, and life together as believers",
  Creation: "Origins, God as Creator, and the foundation of Sabbath",
  Forgiveness: "Releasing resentment, healing relationships, and wise boundaries",
  "Bible Study": "Understanding Scripture, context, and practical application",
  Health: "Honoring God with the body, mind, and everyday choices"
};

function normalize(value) {
  return value.trim().toLowerCase();
}

function allTopics() {
  return ["All", ...new Set(["Law", "Sanctuary", "Three Angels", ...answers.flatMap((answer) => answer.topics)].sort())];
}

function matchesQuery(answer, query) {
  if (!query) {
    return true;
  }

  const searchable = [
    answer.question,
    answer.shortAnswer,
    answer.longAnswer,
    answer.category,
    ...answer.topics,
    ...answer.scriptures,
    ...answer.keywords
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(query);
}

function filteredAnswers() {
  const query = normalize(state.query);

  return answers.filter((answer) => {
    const topicMatches = state.topic === "All" || answer.topics.includes(state.topic);
    return topicMatches && matchesQuery(answer, query);
  });
}

// The homepage keeps every answer's data client-side for instant search, but
// only renders the full list once a visitor asks for it (a topic or a
// search), rather than dumping all 72 cards on first paint.
function hasActiveFilter() {
  return state.topic !== "All" || state.query.trim() !== "";
}

function renderTopicFilters() {
  topicGrid.innerHTML = "";
  topicTotalCount.textContent = answers.length.toLocaleString();

  allTopics()
    .filter((topic) => topic !== "All")
    .forEach((topic) => {
      const count = answers.filter((answer) => answer.topics.includes(topic)).length;
      // Real links keep topics reachable without JavaScript; the click handler
      // below intercepts them to filter in place when scripting is available.
      const card = document.createElement("a");
      card.href = topicUrl(topic);
      card.className = `topic-card${topic === state.topic ? " active" : ""}`;
      card.dataset.topic = topic;
      const description = topicDescriptions[topic] || "";
      card.innerHTML = `
        <span class="topic-icon" aria-hidden="true">${topicIconMarkup(topic)}</span>
        <span class="topic-card-title">${topic}</span>
        <small>${description}</small>
        <strong class="topic-card-count">${count}</strong>
      `;
      topicGrid.append(card);
    });
}

function populateQuestionTopics() {
  // Reset to the placeholder option first so re-running this on top of
  // pre-rendered static markup never duplicates <option> entries.
  questionTopic.innerHTML = '<option value="">Topic (optional)</option>';
  allTopics()
    .filter((topic) => topic !== "All")
    .forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      questionTopic.append(option);
    });
}

function relatedAnswers(question, topic) {
  const words = normalize(question)
    .split(/[^a-z0-9']+/)
    .filter((word) => word.length > 3);

  return answers
    .map((answer) => {
      const searchable = [
        answer.question,
        answer.shortAnswer,
        answer.longAnswer,
        answer.category,
        ...answer.topics,
        ...answer.keywords
      ]
        .join(" ")
        .toLowerCase();
      const wordScore = words.reduce((score, word) => score + (searchable.includes(word) ? 1 : 0), 0);
      const topicScore = topic && answer.topics.includes(topic) ? 2 : 0;
      return { answer, score: wordScore + topicScore };
    })
    .filter((result) => result.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3)
    .map((result) => result.answer);
}

async function submitQuestionToSheet(payload) {
  if (!questionSubmissionEndpoint) {
    return { enabled: false };
  }

  // text/plain keeps this a "simple" CORS request. Apps Script web apps do not
  // answer preflight OPTIONS requests, so anything that triggers one fails.
  const response = await fetch(questionSubmissionEndpoint, {
    method: "POST",
    mode: "cors",
    redirect: "follow",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Submission failed with status ${response.status}`);
  }

  const text = await response.text();
  let result;

  try {
    result = JSON.parse(text);
  } catch (error) {
    throw new Error("Endpoint did not return JSON. Re-deploy the Apps Script web app with access set to Anyone.");
  }

  if (result && result.success === false) {
    throw new Error(result.error || "Endpoint reported a failure.");
  }

  return { enabled: true, result };
}

async function handleQuestionSubmit(event) {
  event.preventDefault();
  const mode = currentAskMode();
  const question = questionInput.value.trim();
  const email = questionEmail.value.trim();
  const gender = questionGender ? questionGender.value.trim() : "";
  const location = questionLocation ? questionLocation.value.trim() : "";
  const age = questionAge && questionAge.value ? Number(questionAge.value) : "";
  const faith = questionFaith ? questionFaith.value.trim() : "";
  const topic = mode === "general" ? "General Inquiry" : questionTopic.value || "General";

  if (!question) {
    questionStatus.textContent =
      mode === "general" ? "Please enter a message before submitting." : "Please enter a question before submitting.";
    return;
  }

  let matches = [];
  if (mode === "question") {
    matches = relatedAnswers(question, questionTopic.value);

    questionResults.hidden = false;
    questionResultsList.innerHTML = matches.map(answerTemplate).join("");
    if (matches.length) {
      questionResultsTitle.textContent = `Related answers for “${question}”`;
      questionStatus.textContent = `We found ${matches.length} related answer${matches.length === 1 ? "" : "s"} to start your study.`;
    } else {
      questionResultsTitle.textContent = "No close match yet";
      questionResultsList.innerHTML = `
        <div class="empty-state">
          <h3>Keep exploring</h3>
          <p>Try fewer keywords, choose a topic, or browse the answer library below.</p>
        </div>
      `;
      questionStatus.textContent = "No close match was found, but your question is ready for a broader search.";
    }
  } else {
    questionResults.hidden = true;
    questionStatus.textContent = "Sending your message…";
  }

  const payload = {
    question,
    topic,
    inquiryType: mode,
    email,
    gender,
    location,
    age,
    faith,
    source: "word-oasis",
    submittedAt: new Date().toISOString(),
    relatedMatches: matches.map((answer) => answer.question),
    notificationEmail: questionSubmissionEmailTo || ""
  };

  if (!questionSubmissionEndpoint) {
    questionStatus.textContent =
      mode === "general"
        ? "Your message is ready. Add a Google Apps Script endpoint in the site config to enable email and spreadsheet logging."
        : "Your question is ready for local search. Add a Google Apps Script endpoint in the site config to enable email and spreadsheet logging.";
    if (mode === "question") {
      questionResults.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (mode === "question") {
    questionStatus.textContent = "Sending your question…";
  }

  try {
    const result = await submitQuestionToSheet(payload);
    if (result.enabled) {
      questionStatus.textContent =
        mode === "general" ? "Thanks! Your message was sent to our team." : "Your question was sent for follow-up.";
    }
  } catch (error) {
    console.error("Question submission failed", error);
    questionStatus.textContent =
      mode === "general"
        ? "Your message could not be sent right now. Please try again shortly."
        : "Your question was found locally, but it could not be sent for follow-up right now.";
  }

  if (mode === "question") {
    questionResults.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function answerTemplate(answer) {
  const perspective = biblicalPerspective(answer);
  return `
    <article class="answer-card" id="${answer.id}">
      <div class="answer-tags">
        ${answer.topics.map((topic) => `<button type="button" class="tag-link" data-topic="${topic}">${topic}</button>`).join("")}
      </div>
      <h3><a href="${answerUrl(answer)}">${answer.question}</a></h3>
      <p class="answer-short">${answer.shortAnswer}</p>
      <div class="answer-long" hidden>
        <p>${answer.longAnswer}</p>
        ${perspective ? `<p>${perspective}</p>` : ""}
        <section class="scripture-quotes" aria-label="Bible passages" data-scriptures="${encodeURIComponent(JSON.stringify(answer.scriptures))}"></section>
      </div>
      <button type="button" class="read-more" aria-expanded="false">
        Read the full answer
      </button>
      <div class="scriptures" aria-label="Bible references">
        ${answer.scriptures
          .map(
            (scripture) =>
              `<button type="button" class="scripture-link" data-scripture="${scripture}">${scripture}</button>`
          )
          .join("")}
      </div>
    </article>
  `;
}

function availablePromises() {
  const category = promiseCategory?.value || "all";
  return category === "all"
    ? biblePromises
    : biblePromises.filter((promise) => promise.categories?.includes(category));
}

function currentPromiseSource() {
  const promises = availablePromises();
  return promises[promiseIndex] || promises[0] || biblePromises[0];
}

function currentPromise() {
  return displayedPromise || currentPromiseSource();
}

function selectedPromiseTranslation() {
  return promiseTranslations[promiseTranslation?.value] || promiseTranslations.web;
}

function readStoredPromiseCache() {
  try {
    return JSON.parse(localStorage.getItem(promiseCacheStorageKey) || "{}");
  } catch (error) {
    console.warn("Word Oasis could not read the promise cache.", error);
    return {};
  }
}

function storeTranslatedPromise(cacheKey, promise) {
  const stored = readStoredPromiseCache();
  stored[cacheKey] = { ...promise, cachedAt: Date.now() };
  const recentEntries = Object.entries(stored)
    .sort(([, first], [, second]) => second.cachedAt - first.cachedAt)
    .slice(0, 300);
  localStorage.setItem(promiseCacheStorageKey, JSON.stringify(Object.fromEntries(recentEntries)));
}

async function translatedPromise(source, translation) {
  const cacheKey = `${translation.id}:${source.reference}`;
  if (promiseTranslationCache.has(cacheKey)) {
    return promiseTranslationCache.get(cacheKey);
  }

  const storedPromise = readStoredPromiseCache()[cacheKey];
  if (storedPromise?.text && storedPromise?.reference) {
    const cached = Promise.resolve({
      text: storedPromise.text,
      reference: storedPromise.reference
    });
    promiseTranslationCache.set(cacheKey, cached);
    return cached;
  }

  const request = fetch(
    `https://bible-api.com/${encodeURIComponent(source.reference)}?translation=${translation.id}`
  ).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Bible translation request failed with status ${response.status}`);
    }
    const data = await response.json();
    const text = String(data.text || "").replace(/\s+/g, " ").trim();
    if (!text) {
      throw new Error("Bible translation response did not include verse text");
    }
    const translated = {
      text,
      reference: `${data.reference || source.reference} (${translation.label})`
    };
    storeTranslatedPromise(cacheKey, translated);
    return translated;
  });

  promiseTranslationCache.set(cacheKey, request);
  request.catch(() => promiseTranslationCache.delete(cacheKey));
  return request;
}

async function renderPromise() {
  const request = ++promiseRenderRequest;
  const source = currentPromiseSource();
  const translation = selectedPromiseTranslation();

  if (window.WORD_OASIS_PRERENDER) {
    displayedPromise = source.text
      ? { ...source, reference: `${source.reference} (WEB)` }
      : { text: "This promise could not be loaded right now.", reference: source.reference };
    promiseText.replaceChildren(promiseQuoteSpan(displayedPromise.text));
    promiseReference.textContent = displayedPromise.reference;
    updatePromiseMetadata();
    return;
  }

  promiseStatus.textContent = `Loading ${translation.label}…`;

  try {
    const promise = await translatedPromise(source, translation);
    if (request !== promiseRenderRequest) {
      return;
    }
    displayedPromise = promise;
  } catch (error) {
    if (request !== promiseRenderRequest) {
      return;
    }
    displayedPromise = source.text
      ? { ...source, reference: `${source.reference} (WEB)` }
      : { text: "This promise could not be loaded right now.", reference: source.reference };
    promiseStatus.textContent = `${translation.label} could not be loaded. Showing the available promise text.`;
  }

  const promise = currentPromise();
  replayElementAnimation(promiseText.closest(".promise-copy"), "is-transitioning");
  updatePromiseTextHeight();
  promiseText.replaceChildren(promiseQuoteSpan(promise.text));
  promiseReference.textContent = promise.reference;
  updatePromiseMetadata();
  updatePromiseShareLinks();
  if (!promiseStatus.textContent.includes("could not be loaded")) {
    promiseStatus.textContent = "";
  }

  preparePromiseImage();
}

function promiseBibleUrl() {
  const source = currentPromiseSource();
  const match = source.reference.match(/^(.+?)\s+(\d+):(\d+)/);
  const url = new URL("/bible/", window.location.origin);
  if (match) {
    const book = match[1] === "Psalm" ? "Psalms" : match[1];
    url.searchParams.set("book", book);
    url.searchParams.set("chapter", match[2]);
    url.searchParams.set("verse", match[3]);
  }
  url.searchParams.set("translation", selectedPromiseTranslation().id);
  return `${url.pathname}${url.search}`;
}

function updatePromiseMetadata() {
  const promises = availablePromises();
  promisePosition.textContent = `${promiseIndex + 1} of ${promises.length}`;
  promiseReference.href = promiseBibleUrl();
  const source = currentPromiseSource();
}

// The quote marks live on this inner span rather than the blockquote so they
// hug the verse itself instead of pinning to the fixed-height card corners.
function promiseQuoteSpan(text) {
  const span = document.createElement("span");
  span.className = "promise-quote";
  span.textContent = text;
  return span;
}

function updatePromiseTextHeight() {
  if (!promiseText || !promiseText.parentElement) {
    return;
  }

  const width = promiseText.getBoundingClientRect().width;
  if (!width) {
    return;
  }

  const measurement = promiseText.cloneNode(false);
  measurement.removeAttribute("id");
  measurement.classList.add("promise-measure");
  measurement.style.width = `${width}px`;
  promiseText.parentElement.appendChild(measurement);

  const measuredPromises = displayedPromise ? [...availablePromises(), displayedPromise] : availablePromises();
  const maxHeight = measuredPromises.reduce((height, promise) => {
    if (!promise.text) {
      return height;
    }
    measurement.replaceChildren(promiseQuoteSpan(promise.text));
    return Math.max(height, measurement.scrollHeight);
  }, 0);

  measurement.remove();

  if (maxHeight) {
    promiseText.style.setProperty("--promise-text-height", `${Math.ceil(maxHeight)}px`);
  }
}

function schedulePromiseTextHeightUpdate() {
  window.clearTimeout(promiseHeightResizeTimer);
  promiseHeightResizeTimer = window.setTimeout(updatePromiseTextHeight, 120);
}

function advancePromise(direction = 1) {
  const promiseCount = availablePromises().length;
  promiseIndex = (promiseIndex + direction + promiseCount) % promiseCount;
  displayedPromise = null;
  renderPromise();
  restartTimedProgress(promiseProgressFill);
}

function dailyPromiseIndex() {
  const category = promiseCategory?.value || "all";
  const date = new Date();
  const seed = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}:${category}`;
  let hash = 0;
  for (const character of seed) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }
  return hash % availablePromises().length;
}

function showTodaysPromise() {
  promiseIndex = dailyPromiseIndex();
  displayedPromise = null;
  renderPromise();
  restartPromiseRotation();
  trackPromiseEvent("today");
}

function showRandomPromise() {
  const count = availablePromises().length;
  const offset = count > 1 ? 1 + Math.floor(Math.random() * (count - 1)) : 0;
  promiseIndex = (promiseIndex + offset) % count;
  displayedPromise = null;
  renderPromise();
  restartPromiseRotation();
  trackPromiseEvent("surprise");
}

function trackPromiseEvent(action) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "promise_action", {
    action,
    category: promiseCategory.value,
    translation: promiseTranslation.value
  });
}

function updatePromiseUrl() {
  const url = new URL(window.location.href);
  if (promiseCategory.value === "all") {
    url.searchParams.delete("promise");
  } else {
    url.searchParams.set("promise", promiseCategory.value);
  }
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function promiseShareText() {
  const promise = currentPromise();
  return `"${promise.text}" — ${promise.reference}`;
}

function promiseShareUrl() {
  const url = new URL("https://wordoasis.org/");
  url.searchParams.set("utm_source", "social");
  url.searchParams.set("utm_medium", "share");
  url.searchParams.set("utm_campaign", "bible_promise");
  return url.href;
}

function promiseShareContent() {
  return `${promiseShareText()}\n\nShared from Word Oasis: ${promiseShareUrl()}`;
}

/* ------------------------------------------------------------------ *
 * Shareable promise graphic
 *
 * Social networks strip prefilled text, so the verse travels as a PNG
 * instead: a branded 1080x1350 card drawn on a canvas at share time.
 * ------------------------------------------------------------------ */

const PROMISE_IMAGE_WIDTH = 1080;
const PROMISE_IMAGE_HEIGHT = 1350;
const PROMISE_IMAGE_MARGIN = 130;
const PROMISE_LOGO_SOURCE_COLOR = "#102a43";
const PROMISE_LOGO_RATIO = 179.3 / 250;
const PROMISE_MARK_RATIO = 77.77 / 212.76;

const promiseSvgImageCache = new Map();
let promiseHeroImagesPromise = null;
let promiseImageFontsPromise = null;

// The brand assets ship as single-colour navy SVGs, so each promise graphic
// recolours them to harmonize with its generated palette.
function loadTintedPromiseSvg(path, color, dimensions) {
  const cacheKey = `${path}:${color}`;
  if (promiseSvgImageCache.has(cacheKey)) {
    return promiseSvgImageCache.get(cacheKey);
  }

  const imagePromise = fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Brand asset request failed with ${response.status}`);
      }
      return response.text();
    })
    .then((markup) => {
      const tinted = markup
        .replace(new RegExp(PROMISE_LOGO_SOURCE_COLOR, "gi"), color)
        // Without explicit dimensions the SVG has no intrinsic size, which makes
        // some browsers letterbox it when it is drawn at a chosen width.
        .replace(/<svg\b(?![^>]*\bwidth=)/i, `<svg width="${dimensions.width}" height="${dimensions.height}" `);

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
          reject(new Error("Logo image could not be decoded"));
        };
        image.src = url;
      });
    })
    .catch((error) => {
      // Let a later share retry the fetch rather than caching the failure.
      promiseSvgImageCache.delete(cacheKey);
      throw error;
    });

  promiseSvgImageCache.set(cacheKey, imagePromise);
  return imagePromise;
}

function loadPromiseLogoImage(color) {
  return loadTintedPromiseSvg("/word-oasis.svg", color, { width: 1000, height: 717.2 });
}

function loadPromiseMarkImage(color) {
  return loadTintedPromiseSvg("/SVG/wordoasis-mark.svg", color, { width: 1000, height: 365.53 });
}

function loadPromiseHeroImages() {
  if (!promiseHeroImagesPromise) {
    promiseHeroImagesPromise = fetch("/studies/hero-images.json")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => (data && Array.isArray(data.images) ? data.images : []))
      .catch(() => []);
  }
  return promiseHeroImagesPromise;
}

function pickPromiseHeroImage(images) {
  return images.length ? images[Math.floor(Math.random() * images.length)] : null;
}

function loadPromisePhotoImage(src) {
  const cacheKey = `photo:${src}`;
  if (promiseSvgImageCache.has(cacheKey)) {
    return promiseSvgImageCache.get(cacheKey);
  }

  const imagePromise = new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Promise background image could not be decoded"));
    image.src = src;
  }).catch((error) => {
    promiseSvgImageCache.delete(cacheKey);
    throw error;
  });

  promiseSvgImageCache.set(cacheKey, imagePromise);
  return imagePromise;
}

function drawPromiseImageCover(ctx, image) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const scale = Math.max(PROMISE_IMAGE_WIDTH / imageWidth, PROMISE_IMAGE_HEIGHT / imageHeight);
  const drawWidth = imageWidth * scale;
  const drawHeight = imageHeight * scale;
  ctx.drawImage(
    image,
    (PROMISE_IMAGE_WIDTH - drawWidth) / 2,
    (PROMISE_IMAGE_HEIGHT - drawHeight) / 2,
    drawWidth,
    drawHeight
  );
}

// Canvas silently falls back to a default face if a web font has not loaded, so
// the exact weights used below are requested before any drawing happens.
function loadPromiseImageFonts() {
  if (!document.fonts) {
    return Promise.resolve();
  }

  if (!promiseImageFontsPromise) {
    promiseImageFontsPromise = Promise.all([
      document.fonts.load('500 72px "Inter"'),
      document.fonts.load('800 28px "Inter"'),
      document.fonts.load('600 26px "Inter"')
    ]).catch(() => undefined);
  }

  return promiseImageFontsPromise;
}

function traceRoundedRect(ctx, x, y, width, height, radius) {
  const limit = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + limit, y);
  ctx.arcTo(x + width, y, x + width, y + height, limit);
  ctx.arcTo(x + width, y + height, x, y + height, limit);
  ctx.arcTo(x, y + height, x, y, limit);
  ctx.arcTo(x, y, x + width, y, limit);
  ctx.closePath();
}

// ctx.letterSpacing is not available everywhere, so tracked text is positioned
// glyph by glyph to keep the eyebrow and reference looking consistent.
function drawTrackedText(ctx, text, centerX, y, spacing) {
  const characters = Array.from(text);
  const widths = characters.map((character) => ctx.measureText(character).width);
  const total = widths.reduce((sum, width) => sum + width, 0) + spacing * Math.max(characters.length - 1, 0);
  const previousAlign = ctx.textAlign;

  ctx.textAlign = "left";
  let x = centerX - total / 2;
  characters.forEach((character, index) => {
    ctx.fillText(character, x, y);
    x += widths[index] + spacing;
  });
  ctx.textAlign = previousAlign;

  return total;
}

function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";

  text.split(/\s+/).forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = word;
      return;
    }
    line = candidate;
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

// Promises range from one line to a full paragraph, so the type size steps down
// until the wrapped verse fits the space reserved for it.
function fitPromiseVerse(ctx, text, maxWidth, maxHeight) {
  let fitted = null;

  for (let size = 74; size >= 28; size -= 2) {
    ctx.font = `500 ${size}px "Inter", system-ui, sans-serif`;
    const lines = wrapCanvasText(ctx, text, maxWidth);
    const lineHeight = Math.round(size * 1.28);
    fitted = { size, lines, lineHeight, height: lines.length * lineHeight };

    if (fitted.height <= maxHeight) {
      break;
    }
  }

  return fitted;
}

// Each promise is matched to a colour palette plus an abstract decorative
// motif based on the *content* of the verse (its keywords), so the shared
// graphic's mood always relates to what the verse is about - warm gold tones
// for joy, cool blues for peace, and so on - while the shapes themselves stay
// purely geometric (rings, arcs, dots, diagonals, waves) rather than
// religious symbols. Categories are checked in order and the first keyword
// match wins, so more specific themes (like the Psalm 23 "shepherd" verses)
// are listed before broader ones.
const PROMISE_IMAGE_CATEGORIES = [
  {
    id: "shepherd",
    icon: "waves",
    keywords: ["psalm 23", "shepherd", "restores my soul", "green pastures", "paths of righteousness", "darkest valley"],
    gradient: ["#173a2c", "#0f261d", "#081711"],
    glowTop: "rgba(110, 200, 150, 0.22)",
    glowBottom: "rgba(140, 214, 168, 0.16)",
    eyebrow: "#e8c56d",
    reference: "#bfe8d0",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(191, 232, 208, 0.14)"
  },
  {
    id: "joy",
    icon: "arcs",
    keywords: ["rejoice", "rejoicing", "rejoiced", "crown of life", "crown", "conquerors", "joy of the lord", "singing", "victor", "victory"],
    gradient: ["#22232f", "#16171f", "#0a0a10"],
    glowTop: "rgba(228, 186, 110, 0.16)",
    glowBottom: "rgba(200, 158, 92, 0.14)",
    eyebrow: "#f6ce74",
    reference: "#e8d9b0",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(246, 206, 116, 0.14)"
  },
  {
    id: "light",
    icon: "rings",
    keywords: ["light", "salvation", "father of lights", "shine", "radiant"],
    gradient: ["#3a2a12", "#241a0c", "#120d05"],
    glowTop: "rgba(246, 200, 120, 0.28)",
    glowBottom: "rgba(250, 214, 150, 0.2)",
    eyebrow: "#ffe08a",
    reference: "#f6d9a0",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(255, 224, 150, 0.14)"
  },
  {
    id: "grace",
    icon: "dots",
    keywords: ["grace", "blood", "sin", "sins", "saved", "condemnation", "redeemed", "new creation", "eternal life", "jesus christ", "forgive", "cleanse"],
    gradient: ["#2d2050", "#1c1536", "#0d0a1c"],
    glowTop: "rgba(168, 132, 224, 0.24)",
    glowBottom: "rgba(140, 110, 214, 0.18)",
    eyebrow: "#f0c96a",
    reference: "#d9c9f7",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(216, 190, 250, 0.16)"
  },
  {
    id: "peace",
    icon: "waves",
    keywords: ["rest", "weary", "burdened", "brokenhearted", "crushed in spirit", "peace", "troubled", "anxious", "anxiety", "cares for you", "mourn", "comforted"],
    gradient: ["#1c3350", "#12243a", "#0a1522"],
    glowTop: "rgba(96, 152, 214, 0.26)",
    glowBottom: "rgba(128, 178, 236, 0.2)",
    eyebrow: "#f3c86a",
    reference: "#bcd9f5",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(255, 255, 255, 0.14)"
  },
  {
    id: "provision",
    icon: "dots",
    keywords: ["needs", "riches", "gift", "everything we need", "godly life"],
    gradient: ["#3a2e14", "#241d0c", "#100c05"],
    glowTop: "rgba(214, 176, 96, 0.22)",
    glowBottom: "rgba(196, 160, 92, 0.16)",
    eyebrow: "#f3c86a",
    reference: "#e8d8a8",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(232, 210, 150, 0.18)"
  },
  {
    id: "prayer",
    icon: "rings",
    keywords: ["ask", "seek", "knock", "petition", "prayer", "draw near", "requests"],
    gradient: ["#20204a", "#15152f", "#0a0a18"],
    glowTop: "rgba(126, 132, 224, 0.22)",
    glowBottom: "rgba(140, 150, 220, 0.16)",
    eyebrow: "#f0c96a",
    reference: "#c8cdf5",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(200, 205, 245, 0.16)"
  },
  {
    id: "refuge",
    icon: "arcs",
    keywords: ["refuge", "stronghold", "fortified tower", "fortress", "fight for you", "safe"],
    gradient: ["#28323c", "#1a222a", "#0c1116"],
    glowTop: "rgba(150, 178, 200, 0.2)",
    glowBottom: "rgba(140, 168, 190, 0.16)",
    eyebrow: "#f3c86a",
    reference: "#c6d8e4",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(198, 216, 228, 0.16)"
  },
  {
    id: "strength",
    icon: "diagonal",
    keywords: ["strong and courageous", "strength", "eagles", "wings", "soar", "strengthen you", "power"],
    gradient: ["#1c3a4a", "#12262f", "#081319"],
    glowTop: "rgba(120, 200, 224, 0.24)",
    glowBottom: "rgba(150, 210, 230, 0.18)",
    eyebrow: "#f3c86a",
    reference: "#bfe6f2",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(191, 230, 242, 0.1)"
  },
  {
    id: "hope",
    icon: "rings",
    keywords: ["forsake", "never leave", "always", "hope", "plans", "future", "trust", "faithful", "purpose", "against us"],
    gradient: ["#123244", "#0d2733", "#061318"],
    glowTop: "rgba(94, 196, 210, 0.22)",
    glowBottom: "rgba(120, 200, 208, 0.16)",
    eyebrow: "#f3c86a",
    reference: "#bfe7f2",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(191, 231, 242, 0.08)"
  },
  {
    id: "love",
    icon: "dots",
    keywords: ["precious", "love you", "delight", "heart", "cherish"],
    gradient: ["#3d1f28", "#26141c", "#130a0e"],
    glowTop: "rgba(224, 130, 120, 0.2)",
    glowBottom: "rgba(214, 150, 118, 0.16)",
    eyebrow: "#f3c86a",
    reference: "#f2c9c4",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(255, 214, 190, 0.16)"
  },
  {
    id: "covenant",
    icon: "arcs",
    keywords: ["steadfast love", "mercies", "forever", "never ceases"],
    gradient: ["#3d2436", "#261622", "#130b11"],
    glowTop: "rgba(230, 160, 150, 0.22)",
    glowBottom: "rgba(240, 190, 140, 0.18)",
    eyebrow: "#f6ce74",
    reference: "#f0c9c4",
    divider: "rgba(255, 255, 255, 0.16)",
    frame: "rgba(255, 255, 255, 0.14)",
    motifColor: "rgba(240, 200, 180, 0.16)"
  }
];

// Falls back to a neutral, generic look for any verse that doesn't match a
// more specific category above.
const DEFAULT_PROMISE_IMAGE_CATEGORY = {
  id: "default",
  icon: "rings",
  gradient: ["#1c3350", "#12243a", "#0a1522"],
  glowTop: "rgba(96, 152, 214, 0.26)",
  glowBottom: "rgba(128, 178, 236, 0.2)",
  eyebrow: "#f3c86a",
  reference: "#bcd9f5",
  divider: "rgba(255, 255, 255, 0.16)",
  frame: "rgba(255, 255, 255, 0.14)",
  motifColor: "rgba(255, 255, 255, 0.05)"
};

// Whole-word match for single words (so "sin" doesn't fire on "singing"),
// plain substring match for multi-word phrases.
function promiseTextMatchesKeyword(haystack, keyword) {
  if (keyword.includes(" ")) {
    return haystack.includes(keyword);
  }
  return new RegExp(`\\b${keyword}\\b`).test(haystack);
}

function pickPromiseImageTheme(promise) {
  const haystack = `${promise.text || ""} ${promise.reference || ""}`.toLowerCase();
  const match = PROMISE_IMAGE_CATEGORIES.find((category) =>
    category.keywords.some((keyword) => promiseTextMatchesKeyword(haystack, keyword))
  );
  return match || DEFAULT_PROMISE_IMAGE_CATEGORY;
}

function drawPromiseMotifRings(ctx, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  [320, 460, 600].forEach((radius) => {
    ctx.beginPath();
    ctx.arc(980, 1240, radius, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.restore();
}

function drawPromiseMotifArcs(ctx, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  [260, 400, 540, 680].forEach((radius) => {
    ctx.beginPath();
    ctx.arc(-40, -40, radius, 0, Math.PI / 2);
    ctx.stroke();
  });
  ctx.restore();
}

function drawPromiseMotifDots(ctx, color) {
  ctx.save();
  ctx.fillStyle = color;
  const spacing = 46;
  for (let row = 0; row < 6; row += 1) {
    for (let col = 0; col < 6; col += 1) {
      const x = PROMISE_IMAGE_WIDTH - 70 - col * spacing;
      const y = 70 + row * spacing;
      ctx.beginPath();
      ctx.arc(x, y, 3.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawPromiseMotifDiagonal(ctx, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.rect(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);
  ctx.clip();
  for (let x = -PROMISE_IMAGE_HEIGHT; x < PROMISE_IMAGE_WIDTH + PROMISE_IMAGE_HEIGHT; x += 96) {
    ctx.beginPath();
    ctx.moveTo(x, PROMISE_IMAGE_HEIGHT);
    ctx.lineTo(x + PROMISE_IMAGE_HEIGHT, 0);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPromiseMotifWaves(ctx, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  [PROMISE_IMAGE_HEIGHT - 160, PROMISE_IMAGE_HEIGHT - 110, PROMISE_IMAGE_HEIGHT - 60].forEach((baseY, waveIndex) => {
    ctx.beginPath();
    const amplitude = 18 + waveIndex * 4;
    const wavelength = 260;
    for (let x = -40; x <= PROMISE_IMAGE_WIDTH + 40; x += 8) {
      const y = baseY + Math.sin((x / wavelength) * Math.PI * 2) * amplitude;
      if (x === -40) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  });
  ctx.restore();
}

function drawPromiseImageMotif(ctx, category) {
  switch (category.icon) {
    case "arcs":
      drawPromiseMotifArcs(ctx, category.motifColor);
      return;
    case "dots":
      drawPromiseMotifDots(ctx, category.motifColor);
      return;
    case "diagonal":
      drawPromiseMotifDiagonal(ctx, category.motifColor);
      return;
    case "waves":
      drawPromiseMotifWaves(ctx, category.motifColor);
      return;
    case "rings":
    default:
      drawPromiseMotifRings(ctx, category.motifColor);
  }
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  if (!/^[\da-f]{6}$/i.test(normalized)) {
    return null;
  }
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16)
  };
}

function rgbaFromHex(hex, alpha) {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

function drawPromiseCheerfulWash(ctx, theme) {
  const warmWash = ctx.createRadialGradient(150, 170, 0, 150, 170, 640);
  warmWash.addColorStop(0, rgbaFromHex(theme.eyebrow, 0.22));
  warmWash.addColorStop(0.52, rgbaFromHex(theme.eyebrow, 0.08));
  warmWash.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = warmWash;
  ctx.fillRect(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);

  const colorWash = ctx.createRadialGradient(920, 260, 0, 920, 260, 720);
  colorWash.addColorStop(0, rgbaFromHex(theme.reference, 0.2));
  colorWash.addColorStop(0.48, rgbaFromHex(theme.reference, 0.07));
  colorWash.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = colorWash;
  ctx.fillRect(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);
}

async function drawPromiseImageBackground(ctx, theme) {
  try {
    const photo = pickPromiseHeroImage(await loadPromiseHeroImages());
    if (photo?.file) {
      const image = await loadPromisePhotoImage(photo.file);
      drawPromiseImageCover(ctx, image);
    }
  } catch (error) {
    console.warn("Word Oasis promise graphic photo background failed.", error);
  }

  const base = ctx.createLinearGradient(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);
  base.addColorStop(0, theme.gradient[0]);
  base.addColorStop(0.55, theme.gradient[1]);
  base.addColorStop(1, theme.gradient[2]);
  ctx.save();
  ctx.globalAlpha = 0.84;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);
  ctx.restore();

  const topGlow = ctx.createRadialGradient(250, 180, 0, 250, 180, 760);
  topGlow.addColorStop(0, theme.glowTop);
  topGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);

  const bottomGlow = ctx.createRadialGradient(900, 1180, 0, 900, 1180, 620);
  bottomGlow.addColorStop(0, theme.glowBottom);
  bottomGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = bottomGlow;
  ctx.fillRect(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);

  drawPromiseCheerfulWash(ctx, theme);
  drawPromiseImageMotif(ctx, theme);

  ctx.strokeStyle = theme.frame;
  ctx.lineWidth = 2;
  traceRoundedRect(ctx, 44, 44, PROMISE_IMAGE_WIDTH - 88, PROMISE_IMAGE_HEIGHT - 88, 52);
  ctx.stroke();
}

async function drawPromiseBrandMark(ctx, theme) {
  try {
    const mark = await loadPromiseMarkImage(theme.reference);
    const markWidth = 1380;
    const markHeight = markWidth * PROMISE_MARK_RATIO;
    ctx.save();
    ctx.globalAlpha = 0.025;
    const markX = PROMISE_IMAGE_WIDTH - markWidth * 0.6;
    const markY = PROMISE_IMAGE_HEIGHT - markHeight + 50;
    ctx.drawImage(mark, markX, markY, markWidth, markHeight);
    ctx.restore();
  } catch (error) {
    // Decorative only; the share graphic should still render without it.
  }
}

async function renderPromiseImage(promise) {
  await loadPromiseImageFonts();

  const canvas = document.createElement("canvas");
  canvas.width = PROMISE_IMAGE_WIDTH;
  canvas.height = PROMISE_IMAGE_HEIGHT;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas is not available");
  }

  const theme = pickPromiseImageTheme(promise);
  await drawPromiseImageBackground(ctx, theme);
  await drawPromiseBrandMark(ctx, theme);

  const centerX = PROMISE_IMAGE_WIDTH / 2;
  const textWidth = PROMISE_IMAGE_WIDTH - PROMISE_IMAGE_MARGIN * 2;
  let eyebrowY = 260;

  try {
    const logo = await loadPromiseLogoImage("#ffffff");
    const logoWidth = 200;
    const logoHeight = logoWidth * PROMISE_LOGO_RATIO;
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.drawImage(logo, centerX - logoWidth / 2, 126, logoWidth, logoHeight);
    ctx.restore();
    eyebrowY = 126 + logoHeight + 92;
  } catch (error) {
    // The verse still reads perfectly without the lockup, so a failed logo
    // fetch should never block the share.
  }

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = theme.eyebrow;
  ctx.font = '800 26px Inter, system-ui, sans-serif';
  drawTrackedText(ctx, "TODAY'S BIBLE PROMISE", centerX, eyebrowY, 7);

  const verseTop = eyebrowY + 96;
  const verseBottom = PROMISE_IMAGE_HEIGHT - 250;
  const referenceGap = 74;
  const referenceHeight = 36;
  const verse = fitPromiseVerse(ctx, promise.text, textWidth, verseBottom - verseTop - referenceGap - referenceHeight);

  const blockHeight = verse.height + referenceGap + referenceHeight;
  let y = verseTop + Math.max((verseBottom - verseTop - blockHeight) / 2, 0);

  ctx.save();
  ctx.globalAlpha = 0.07;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = '700 390px Georgia, "Times New Roman", serif';
  ctx.fillText("\u201C", centerX, y + verse.height / 2 + 90);
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
  ctx.fillStyle = theme.reference;
  ctx.font = '700 32px Inter, system-ui, sans-serif';
  drawTrackedText(ctx, promise.reference.toUpperCase(), centerX, y, 4);

  ctx.strokeStyle = theme.divider;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX - 60, PROMISE_IMAGE_HEIGHT - 196);
  ctx.lineTo(centerX + 60, PROMISE_IMAGE_HEIGHT - 196);
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.62)";
  ctx.font = '600 26px Inter, system-ui, sans-serif';
  drawTrackedText(ctx, "WORDOASIS.ORG", centerX, PROMISE_IMAGE_HEIGHT - 136, 5);

  return canvas;
}

function promiseImageFileName(promise) {
  const slug = promise.reference
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `word-oasis-${slug || "promise"}.png`;
}

function replayElementAnimation(element, className) {
  if (!element) {
    return;
  }

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

async function createPromiseImageBlob(promise) {
  const canvas = await renderPromiseImage(promise);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

  if (!blob) {
    throw new Error("The promise image could not be encoded");
  }

  return blob;
}

async function createPromiseImageFile() {
  const promise = currentPromise();
  const blob = await createPromiseImageBlob(promise);
  return new File([blob], promiseImageFileName(promise), { type: "image/png" });
}

// Safari drops the user-gesture grant while a canvas is being encoded, which
// makes navigator.share reject. Rendering the graphic ahead of the tap keeps a
// finished File on hand so the share sheet can open immediately.
let promiseImageCache = { key: "", file: null };

function readyPromiseImageFile() {
  const key = `${currentPromiseSource().reference}:${selectedPromiseTranslation().id}`;
  return promiseImageCache.key === key ? promiseImageCache.file : null;
}

function preparePromiseImage() {
  const key = `${currentPromiseSource().reference}:${selectedPromiseTranslation().id}`;
  if (promiseImageCache.key === key) {
    return;
  }

  promiseImageCache = { key, file: null };

  const build = () => {
    createPromiseImageFile()
      .then((file) => {
        if (promiseImageCache.key === key) {
          promiseImageCache.file = file;
        }
      })
      .catch(() => undefined);
  };

  build();
}

async function downloadPromiseImage() {
  promiseStatus.textContent = "Creating your Scripture graphic…";

  try {
    const promise = currentPromise();
    const blob = await createPromiseImageBlob(promise);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = promiseImageFileName(promise);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);

    promiseStatus.textContent = "Scripture graphic saved. Attach it to your post to share the verse.";
  } catch (error) {
    promiseStatus.textContent = "The Scripture graphic could not be created. Please use Copy instead.";
  }
}

function updatePromiseShareLinks() {
  promisePlatformButtons.forEach((button) => {
    const format = promiseShareModeGraphic.getAttribute("aria-pressed") === "true" ? "graphic" : "text";
    button.setAttribute("aria-label", `Share Scripture as ${format} on ${button.dataset.promiseSharePlatform}`);
  });
}

function prefersNativeShare() {
  // Mobile browsers block sized pop-ups, and tapping a facebook.com link inside
  // the Facebook in-app browser drops the share payload and lands on the feed.
  // The native sheet hands the text and URL straight to the chosen app instead.
  return Boolean(navigator.share) && window.matchMedia("(max-width: 900px), (pointer: coarse)").matches;
}

function openPromiseShareWindow(url) {
  // Pop-up geometry is desktop-only; on mobile it triggers the blocker.
  const features = prefersNativeShare()
    ? "noopener"
    : "width=720,height=720,left=120,top=80,menubar=no,toolbar=no,location=no,status=no";
  const shareWindow = window.open(url, "wordOasisPromiseShare", features);

  if (shareWindow) {
    shareWindow.focus();
    promiseStatus.textContent = "A share composer opened. Choose Post or Share there to publish.";
    return true;
  }

  promiseStatus.textContent = "Your browser blocked the share window. Please allow pop-ups or use Copy.";
  return false;
}

async function sharePromiseViaSystemSheet(platform) {
  const payload = {
    title: "Today’s Scripture",
    text: promiseShareText(),
    url: promiseShareUrl()
  };

  try {
    await navigator.share(payload);
    promiseStatus.textContent = `Scripture shared${platform ? ` to ${platform}` : ""}.`;
    return true;
  } catch (error) {
    if (error && error.name === "AbortError") {
      promiseStatus.textContent = "Sharing was canceled.";
      return true;
    }

    return false;
  }
}

async function sharePromiseWithClipboard(shareUrl, platform) {
  if (prefersNativeShare() && (await sharePromiseViaSystemSheet(platform))) {
    return;
  }

  const copyOperation = navigator.clipboard?.writeText(promiseShareContent());
  const composerOpened = openPromiseShareWindow(shareUrl);

  if (!copyOperation) {
    if (composerOpened) {
      promiseStatus.textContent = `${platform} opened with the Word Oasis preview. Add the Scripture text there before publishing.`;
    }
    return;
  }

  try {
    await copyOperation;
    if (composerOpened) {
      promiseStatus.textContent = `The Scripture was copied. Paste it into the ${platform} composer, then publish.`;
    }
  } catch (error) {
    if (composerOpened) {
      promiseStatus.textContent = `${platform} opened with the Word Oasis preview. Add the Scripture text there before publishing.`;
    }
  }
}

function setPromiseShareMode(mode) {
  const graphicMode = mode === "graphic";
  const selector = promiseShareModeText.parentElement;
  selector.classList.toggle("is-graphic", graphicMode);
  selector.style.setProperty("--share-thumb-left", graphicMode ? "50%" : "3px");
  promiseShareModeText.classList.toggle("active", !graphicMode);
  promiseShareModeText.setAttribute("aria-pressed", String(!graphicMode));
  promiseShareModeText.style.color = graphicMode ? "rgba(255, 255, 255, 0.82)" : "#111827";
  promiseShareModeGraphic.classList.toggle("active", graphicMode);
  promiseShareModeGraphic.setAttribute("aria-pressed", String(graphicMode));
  promiseShareModeGraphic.style.color = graphicMode ? "#111827" : "rgba(255, 255, 255, 0.82)";
  promiseTextActions.hidden = graphicMode;
  promiseGraphicActions.hidden = !graphicMode;
  promiseStatus.textContent = "";
  updatePromiseShareLinks();
}

async function sharePromiseTextOnPlatform(platform) {
  const url = promiseShareUrl();
  const content = promiseShareContent();

  if (platform === "Facebook") {
    await sharePromiseWithClipboard(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, platform);
    return;
  }
  if (platform === "X") {
    openPromiseShareWindow(`https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`);
    return;
  }
  if (platform === "WhatsApp") {
    openPromiseShareWindow(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`);
    return;
  }
  if (platform === "Text") {
    window.location.href = `sms:?&body=${encodeURIComponent(content)}`;
    return;
  }
  if (navigator.share && (await sharePromiseViaSystemSheet(platform))) {
    return;
  }
  await copyPromise();
  promiseStatus.textContent = "Scripture copied. Paste it into Instagram.";
}

async function sharePromise() {
  await sharePromiseGraphic();
}

async function sharePromiseTextOrLink() {
  if (navigator.share && (await sharePromiseViaSystemSheet(""))) {
    return;
  }
  await copyPromise();
  promiseStatus.textContent = "Scripture text and link copied. Paste them into the app where you want to share.";
}

async function sharePromiseGraphic(platform = "") {
  const file = readyPromiseImageFile();
  if (file && navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      promiseStatus.textContent = "Scripture graphic shared.";
      trackPromiseEvent("graphic_share");
      return;
    } catch (error) {
      if (error && error.name === "AbortError") {
        promiseStatus.textContent = "Sharing was canceled.";
        return;
      }
    }
  }

  await downloadPromiseImage();
  promiseStatus.textContent = platform
    ? `Graphic downloaded. Add it to ${platform}.`
    : "Scripture graphic downloaded.";
}

async function copyPromise() {
  try {
    await navigator.clipboard.writeText(promiseShareContent());
    promiseStatus.textContent = "Scripture copied to your clipboard.";
  } catch (error) {
    promiseStatus.textContent = "Could not copy automatically. Select the Scripture text to copy it.";
  }
}

function renderAnswers() {
  const active = hasActiveFilter();
  resultsPanel.hidden = !active;

  if (!active) {
    // Nothing to filter, so skip building 70+ cards that will not be shown.
    answersList.innerHTML = "";
    emptyState.hidden = true;
    resultMeta.textContent = "";
    return;
  }

  const results = filteredAnswers();
  answersList.innerHTML = results.map(answerTemplate).join("");
  emptyState.hidden = results.length > 0;

  const topicText = state.topic === "All" ? "all topics" : state.topic;
  const queryText = state.query ? ` matching “${state.query}”` : "";
  resultMeta.textContent = `${results.length} answer${results.length === 1 ? "" : "s"} in ${topicText}${queryText}`;
}

function setSearch(value) {
  state.query = value;
  searchInput.value = value;
  if (navSearchInput) navSearchInput.value = value;
  renderAnswers();
  scrollToResults();
}

function setTopic(topic) {
  state.topic = topic;
  renderTopicFilters();
  renderAnswers();
  scrollToResults();
}

function clearAnswerFilters() {
  state.topic = "All";
  state.query = "";
  searchInput.value = "";
  if (navSearchInput) navSearchInput.value = "";
  renderTopicFilters();
  renderAnswers();
  answerSpotlight.scrollIntoView({ behavior: "smooth", block: "start" });
}

let spotlightAnswerIndex = -1;
let spotlightRotation;

function currentSpotlightAnswer() {
  return answers[spotlightAnswerIndex] || answers[0];
}

function renderSpotlightAnswer(direction = 1) {
  if (!answers.length) {
    return;
  }

  replayElementAnimation(document.querySelector("#spotlight-body"), "is-transitioning");

  spotlightAnswerIndex =
    spotlightAnswerIndex === -1
      ? 0
      : (spotlightAnswerIndex + direction + answers.length) % answers.length;

  const answer = answers[spotlightAnswerIndex];
  const url = answerUrl(answer);

  spotlightTags.innerHTML = answer.topics
    .slice(0, 2)
    .map((topic) => `<button type="button" class="tag-link" data-topic="${topic}">${topic}</button>`)
    .join("");
  spotlightLink.textContent = answer.question;
  spotlightLink.href = url;
  spotlightShort.textContent = answer.shortAnswer;
  spotlightCta.href = url;
  restartTimedProgress(spotlightProgressFill);
}

function restartSpotlightRotation() {
  window.clearInterval(spotlightRotation);
  spotlightRotation = window.setInterval(() => renderSpotlightAnswer(), 10000);
  restartTimedProgress(spotlightProgressFill);
}

const perspectivesByAnswer = {
  "answer-sabbath":
    "The seventh-day Sabbath, from Friday sunset to Saturday sunset, is God's blessed memorial of creation and redemption. It is not a means of earning salvation, but a weekly sign of trust in the Creator, a time for worship, fellowship, mercy, rest, and delight in God.",
  "answer-commandments":
    "The Ten Commandments retain their moral significance, including the fourth commandment. The law is not a ladder by which sinners climb to God; it is a loving description of life with God, written on the heart by the Spirit and lived out through faith in Jesus.",
  "answer-death":
    "Human beings do not possess an inherently immortal soul. Immortality is God's gift in Christ, received at the resurrection, so Christian hope rests in Jesus' literal, bodily return rather than in communication with the dead or an immediately conscious afterlife.",
  "answer-judgment":
    "Daniel 7 and related passages teach a pre-Advent judgment. This heavenly judgment does not inform God of facts He lacks; it publicly reveals His justice, confirms the genuineness of faith, and shows the universe that God saves those who trust in Christ while respecting human freedom.",
  "answer-sanctuary":
    "The sanctuary unites the cross, Christ's present intercession, the judgment, and the final removal of sin. The earthly services pointed forward to Jesus, the true High Priest, whose once-for-all sacrifice provides forgiveness and whose heavenly ministry applies the benefits of redemption.",
  "answer-three-angels":
    "Revelation 14:6-12 is a present, worldwide gospel appeal: worship the Creator, leave Babylon's confusion, reject coercive false worship, and remain loyal to Jesus through faith that produces obedience. The message is urgent, but it is good news centered on the everlasting gospel.",
  "answer-health":
    "People are an inseparable unity of body, mind, and spirit. Rest, exercise, wholesome food, temperance, avoiding addictive substances, and care for mental health are invitations to greater usefulness and joy, not tests by which God decides who is worthy of salvation.",
  "answer-stewardship":
    "Stewardship begins with the truth that God owns everything and people are His managers. Tithes support gospel ministry, offerings express willing generosity, and time, abilities, possessions, and the body are all entrusted for mission and neighbor-love. Giving is worship and gratitude, not a transaction that obligates God.",
  "answer-creation":
    "Creation is a recent, literal, six-day work of God and the biblical foundation for human dignity, marriage, the seventh-day Sabbath, and worship of God as Creator. This conviction also gives the first angel's message its force: in a world of competing loyalties, worship belongs to the One who made heaven and earth.",
  "answer-church":
    "The church is a worldwide community raised up to proclaim the everlasting gospel, make disciples, care for people, and prepare the world for Christ's return. No congregation replaces a personal relationship with Jesus, but believers are called to worship, serve, practice spiritual gifts, and pursue unity together.",
  "answer-second-coming":
    "The Bible presents a visible, audible, and glorious second coming rather than a secret rapture. Jesus returns personally to resurrect the righteous, gather His people, and bring the long conflict with sin to its decisive close; readiness means faithful relationship and mission, not predicting a date.",
  "answer-hell":
    "The final fire is the second death: the complete and irreversible destruction of sin and unrepentant sinners, not eternal conscious torment. This preserves both God's justice and His character of love, and it leaves the universe truly free from pain, rebellion, and death.",
  "answer-women-ministry":
    "Men and women possess equal dignity before God, but Scripture assigns the pastoral and elder office to qualified men. Women remain essential to the church's mission and should be equipped and encouraged to use their spiritual gifts faithfully in the many ministries Scripture entrusts to them."
};

function biblicalPerspective(answer) {
  return perspectivesByAnswer[answer.id] || "";
}

function scrollToResults() {
  // Jump straight to the results, skipping past the topic filter list on
  // mobile where it stacks above the answers instead of beside them. If a
  // search was cleared back to "no filter", scroll to the topic grid instead
  // since the results panel is hidden again.
  const target = resultsPanel.hidden ? document.querySelector("#topics") : resultsPanel;
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  if (resultsPanel.hidden) {
    return;
  }

  resultMeta.classList.remove("flash");
  // Force reflow so the animation can restart on repeated clicks.
  void resultMeta.offsetWidth;
  resultMeta.classList.add("flash");
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setSearch(searchInput.value);
});

navSearchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  setSearch(navSearchInput.value);
});

questionForm.addEventListener("submit", handleQuestionSubmit);

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  if (navSearchInput) navSearchInput.value = event.target.value;
  renderAnswers();
});

navSearchInput?.addEventListener("input", (event) => {
  searchInput.value = event.target.value;
});

document.addEventListener("click", (event) => {
  const searchButton = event.target.closest("[data-search]");
  const topicButton = event.target.closest("[data-topic]");
  const readMoreButton = event.target.closest(".read-more");
  const scriptureButton = event.target.closest(".scripture-link");

  if (searchButton) {
    setSearch(searchButton.dataset.search);
  }

  if (topicButton) {
    // Topic pills are real links to /topics/<slug>/ for no-JS visitors; once
    // scripting runs, intercept the click and filter in place instead.
    event.preventDefault();
    setTopic(topicButton.dataset.topic);
  }

  if (readMoreButton) {
    toggleReadMore(readMoreButton);
  }

  if (scriptureButton) {
    openVerseModal(scriptureButton.dataset.scripture);
  }
});

promiseNext.addEventListener("click", () => {
  advancePromise();
  restartPromiseRotation();
});

promisePrevious.addEventListener("click", () => {
  advancePromise(-1);
  restartPromiseRotation();
});

promiseToday.addEventListener("click", showTodaysPromise);
promiseRandom.addEventListener("click", showRandomPromise);

promiseShare.addEventListener("click", async () => {
  try {
    await sharePromise();
  } catch (error) {
    promiseStatus.textContent = "Sharing was canceled.";
  }
});

promiseShareTextButton.addEventListener("click", sharePromiseTextOrLink);

promiseCopy.addEventListener("click", copyPromise);

promiseSaveImage.addEventListener("click", downloadPromiseImage);

spotlightNext.addEventListener("click", () => {
  renderSpotlightAnswer();
  restartSpotlightRotation();
});

spotlightPrevious.addEventListener("click", () => {
  renderSpotlightAnswer(-1);
  restartSpotlightRotation();
});

promiseShareModeText.addEventListener("click", () => setPromiseShareMode("text"));
promiseShareModeGraphic.addEventListener("click", () => setPromiseShareMode("graphic"));

promisePlatformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.dataset.promiseSharePlatform;
    if (promiseShareModeGraphic.getAttribute("aria-pressed") === "true") {
      sharePromiseGraphic(platform);
    } else {
      sharePromiseTextOnPlatform(platform);
    }
  });
});

window.addEventListener("resize", schedulePromiseTextHeightUpdate);

promiseTranslation.addEventListener("change", () => {
  localStorage.setItem(promiseTranslationStorageKey, promiseTranslation.value);
  displayedPromise = null;
  promiseImageCache = { key: "", file: null };
  renderPromise();
  restartPromiseRotation();
  trackPromiseEvent("translation");
});

promiseCategory.addEventListener("change", () => {
  localStorage.setItem(promiseCategoryStorageKey, promiseCategory.value);
  promiseIndex = dailyPromiseIndex();
  displayedPromise = null;
  promiseImageCache = { key: "", file: null };
  updatePromiseUrl();
  updatePromiseTextHeight();
  renderPromise();
  restartPromiseRotation();
  trackPromiseEvent("category");
});

window.addEventListener("wordoasis:library-change", updatePromiseMetadata);

if (document.fonts) {
  document.fonts.ready.then(updatePromiseTextHeight);
}

function restartTimedProgress(progressFill) {
  if (!progressFill) {
    return;
  }
  progressFill.classList.remove("is-running");
  // Force a reflow so removing/re-adding the class restarts the CSS
  // animation from zero instead of continuing where it left off.
  void progressFill.offsetWidth;
  progressFill.classList.add("is-running");
}

function restartPromiseProgress() {
  restartTimedProgress(promiseProgressFill);
}

function restartPromiseRotation() {
  window.clearInterval(promiseRotation);
  promiseRotation = window.setInterval(() => advancePromise(), 10000);
  restartPromiseProgress();
}

const savedPromiseTranslation =
  localStorage.getItem(promiseTranslationStorageKey)
  || localStorage.getItem(legacyPromiseTranslationStorageKey);
if (promiseTranslations[savedPromiseTranslation]) {
  promiseTranslation.value = savedPromiseTranslation;
}

promiseCategories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.id;
  const promiseCount = biblePromises.filter((promise) => promise.categories.includes(category.id)).length;
  option.textContent = `${category.label} (${promiseCount})`;
  promiseCategory.append(option);
});
promiseCategory.options[0].textContent = `All promises (${biblePromises.length})`;

const savedPromiseCategory = localStorage.getItem(promiseCategoryStorageKey);
const linkedPromiseCategory = new URLSearchParams(window.location.search).get("promise");
const initialPromiseCategory = linkedPromiseCategory || savedPromiseCategory;
if (initialPromiseCategory === "all" || promiseCategories.some((category) => category.id === initialPromiseCategory)) {
  promiseCategory.value = initialPromiseCategory;
}

promiseIndex = dailyPromiseIndex();
updatePromiseTextHeight();
renderPromise();
restartPromiseRotation();

function toggleReadMore(button) {
  const card = button.closest(".answer-card");
  const longAnswer = card.querySelector(".answer-long");
  const isOpen = !longAnswer.hidden;

  longAnswer.hidden = isOpen;
  button.setAttribute("aria-expanded", String(!isOpen));
  button.textContent = isOpen ? "Read the full answer" : "Show shorter answer";

  if (!isOpen) {
    loadScriptureQuotes(card);
  }
}

/* Bible verse modal: fetches public-domain verse text from bible-api.com. */
const verseModal = document.querySelector("#verse-modal");
const verseModalTitle = document.querySelector("#verse-modal-title");
const verseModalBody = document.querySelector("#verse-modal-body");
const verseModalClose = document.querySelector("#verse-modal-close");
const verseModalTranslation = document.querySelector("#verse-modal-translation");
const verseCache = new Map();
let lastFocusedElement = null;
let activeVerseReference = "";
let verseModalRequest = 0;

function storedBibleTranslation() {
  const stored =
    localStorage.getItem(promiseTranslationStorageKey)
    || localStorage.getItem(legacyPromiseTranslationStorageKey);
  return promiseTranslations[stored] ? stored : "web";
}

function setVerseModalStatus(message) {
  const status = document.createElement("p");
  status.className = "verse-status";
  status.textContent = message;
  verseModalBody.replaceChildren(status);
}

function renderVerseModalText(text, translation) {
  const verse = document.createElement("p");
  verse.className = "verse-text";
  verse.textContent = text;
  const credit = document.createElement("p");
  credit.className = "verse-credit";
  const labels = {
    web: "World English Bible",
    kjv: "King James Version",
    asv: "American Standard Version"
  };
  credit.textContent = `${labels[translation.id]} (public domain)`;
  verseModalBody.replaceChildren(verse, credit);
}

async function loadVerseModalText() {
  const request = ++verseModalRequest;
  const translation = promiseTranslations[verseModalTranslation.value] || promiseTranslations.web;
  setVerseModalStatus(`Loading ${translation.label}...`);

  try {
    const text = await fetchVerseText(activeVerseReference, translation);
    if (request === verseModalRequest && !verseModal.hidden) {
      renderVerseModalText(text, translation);
    }
  } catch (error) {
    if (request === verseModalRequest && !verseModal.hidden) {
      setVerseModalStatus("Could not load this verse in the selected version. Please check your connection and try again.");
    }
  }
}

function openVerseModal(reference) {
  lastFocusedElement = document.activeElement;
  activeVerseReference = reference;
  verseModalTitle.textContent = reference;
  verseModalTranslation.value = storedBibleTranslation();
  verseModal.hidden = false;
  document.body.classList.add("modal-open");
  verseModalClose.focus();
  loadVerseModalText();
}

function closeVerseModal() {
  verseModalRequest += 1;
  verseModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

async function fetchVerseText(reference, translation = promiseTranslations.web) {
  const cacheKey = `${translation.id}:${reference}`;
  if (verseCache.has(cacheKey)) {
    return verseCache.get(cacheKey);
  }

  const query = encodeURIComponent(reference).replace(/%20/g, "+");
  const response = await fetch(`https://bible-api.com/${query}?translation=${translation.id}`);

  if (!response.ok) {
    throw new Error("Verse lookup failed");
  }

  const data = await response.json();
  const text = String(data.text || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/"([^"]*)"/g, "“$1”");
  if (!text) {
    throw new Error("Verse lookup returned no text");
  }
  verseCache.set(cacheKey, text);
  return text;
}

async function loadScriptureQuotes(card) {
  const quotes = card.querySelector(".scripture-quotes");
  if (quotes.dataset.loaded || quotes.dataset.loading) {
    return;
  }

  const references = JSON.parse(decodeURIComponent(quotes.dataset.scriptures));
  quotes.dataset.loading = "true";
  quotes.innerHTML = `<p class="scripture-quotes-heading">Bible passages</p><p class="verse-status">Loading passage text...</p>`;

  try {
    const passages = await Promise.all(
      references.map(async (reference) => ({
        reference,
        text: await fetchVerseText(reference)
      }))
    );
    quotes.innerHTML = `
      <p class="scripture-quotes-heading">Bible passages</p>
      ${passages
        .map(
          ({ reference, text }) => `
            <blockquote class="scripture-quote">
              <p>${text}</p>
              <cite>${reference} (WEB)</cite>
            </blockquote>
          `
        )
        .join("")}
    `;
    quotes.dataset.loaded = "true";
  } catch (error) {
    quotes.innerHTML = `
      <p class="scripture-quotes-heading">Bible passages</p>
      <p class="verse-status">Could not load the passage text right now. Please check your connection and try again.</p>
    `;
  } finally {
    delete quotes.dataset.loading;
  }
}

verseModalClose.addEventListener("click", closeVerseModal);

verseModalTranslation.value = storedBibleTranslation();
verseModalTranslation.addEventListener("change", () => {
  localStorage.setItem(promiseTranslationStorageKey, verseModalTranslation.value);
  promiseTranslation.value = verseModalTranslation.value;
  displayedPromise = null;
  promiseImageCache = { key: "", file: null };
  renderPromise();
  if (!verseModal.hidden && activeVerseReference) {
    loadVerseModalText();
  }
});

verseModal.addEventListener("click", (event) => {
  if (event.target === verseModal) {
    closeVerseModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !verseModal.hidden) {
    closeVerseModal();
  }
});

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get("q");
if (initialQuery) {
  state.query = initialQuery;
  searchInput.value = initialQuery;
  if (navSearchInput) navSearchInput.value = initialQuery;
}

renderTopicFilters();
populateQuestionTopics();
renderAnswers();
renderSpotlightAnswer();
restartSpotlightRotation();

resultsClear.addEventListener("click", clearAnswerFilters);
window.WORD_OASIS_MAIN_READY = true;
