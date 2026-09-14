const answers = [
  {
    id: "answer-gospel",
    question: "What is the gospel?",
    shortAnswer:
      "The gospel is the good news that Jesus Christ died for our sins, was buried, and rose again. Salvation is God's gift, received by faith, and it leads to a transformed life of love, obedience, and hope in Christ's soon return.",
    longAnswer:
      "The gospel announces both a finished work and an ongoing one. Christ's death satisfied the penalty of sin so that no one needs to earn forgiveness, and His resurrection guarantees victory over death for everyone who trusts Him. At the same time, receiving the gospel is not the end of the story: the same grace that saves also transforms, producing a growing love for God and others, a desire to obey out of gratitude rather than fear, and a settled hope that looks forward to the day Christ returns to finish what He started.",
    topics: ["Salvation", "Faith", "Christian Living"],
    category: "Faith and Salvation",
    scriptures: ["1 Corinthians 15:3-4", "John 3:16", "Ephesians 2:8-10"],
    keywords: ["good news", "Jesus", "cross", "resurrection", "saved", "grace", "obedience"]
  },
  {
    id: "answer-anxiety",
    question: "What does the Bible say about anxiety?",
    shortAnswer:
      "The Bible does not shame people for feeling anxiety. It invites us to bring every care to God in prayer, trust His Fatherly care, receive His peace, and remember the weekly gift of Sabbath rest.",
    longAnswer:
      "Anxiety is a normal human response to an uncertain world, and Scripture meets it with practical, repeatable steps rather than empty reassurance. Philippians 4 pairs prayer with thanksgiving, teaching that gratitude reframes worry even before circumstances change. Peter's invitation to cast every care on God pictures a deliberate, repeated action, not a one-time decision. And the weekly rhythm of Sabbath rest gives a built-in reminder to set down burdens, remember God's faithfulness, and receive rest for the body and soul alongside the peace He promises for the mind.",
    topics: ["Comfort", "Prayer", "Christian Living", "Sabbath"],
    category: "Life and Relationships",
    scriptures: ["Philippians 4:6-7", "1 Peter 5:7", "Exodus 20:8-11"],
    keywords: ["worry", "fear", "stress", "peace", "mental health", "rest"]
  },
  {
    id: "answer-forgiveness",
    question: "How do I forgive someone who hurt me?",
    shortAnswer:
      "Biblical forgiveness begins with remembering how God has forgiven us in Christ. Forgiveness releases vengeance to God, pursues peace where possible, and can coexist with wise boundaries.",
    longAnswer:
      "Forgiveness is a decision to release the debt someone owes you, modeled on how completely God has forgiven us in Christ. It is not the same as instant trust, forgetting what happened, or pretending harm did not occur; Scripture allows for wise boundaries even while a heart lets go of bitterness. Romans 12 teaches believers to leave vengeance to God rather than repaying evil for evil, which frees the offended person from carrying a burden that was never theirs to punish. Reconciliation, where it is safe and possible, is the fuller goal, but forgiveness itself does not require the other person's cooperation.",
    topics: ["Christian Living", "Comfort", "Forgiveness"],
    category: "Life and Relationships",
    scriptures: ["Ephesians 4:32", "Romans 12:18-19", "Colossians 3:13"],
    keywords: ["hurt", "bitterness", "relationships", "enemy", "healing"]
  },
  {
    id: "answer-prayer",
    question: "How should I pray according to the Bible?",
    shortAnswer:
      "Jesus taught His followers to pray with reverence, dependence, confession, and trust. Prayer is not performance; it is communion with the Father through faith and a daily surrender of the heart to God.",
    longAnswer:
      "The Lord's Prayer gives a simple pattern: honoring God's name, seeking His kingdom and will, asking for daily needs, confessing sin while forgiving others, and asking for protection from temptation. Prayer works best as an honest conversation rather than a performance — it can include praise, thanksgiving, confession, and requests, offered boldly because believers can approach God's throne with confidence. Persistence matters, too; Scripture encourages continuing to pray even when answers are delayed, trusting that God hears and responds according to His will and timing rather than on demand.",
    topics: ["Prayer", "Faith"],
    category: "Knowing God",
    scriptures: ["Matthew 6:9-13", "Hebrews 4:16", "1 John 5:14"],
    keywords: ["Lord's prayer", "ask", "worship", "confession", "Father"]
  },
  {
    id: "answer-gods-love",
    question: "How can I know God loves me?",
    shortAnswer:
      "The clearest demonstration of God's love is the death and resurrection of Jesus Christ for sinners. God's love is also seen in His desire to restore people fully: heart, mind, body, relationships, and future.",
    longAnswer:
      "God's love is not measured by easy circumstances but by what He was willing to give: His own Son, while people were still sinners and enemies of God. That love reaches into every area of life — forgiving guilt, healing shame, restoring broken relationships, and giving purpose for the future. It is also patient and pursuing, shown in the Holy Spirit's ongoing work to draw hearts back to God, and it will be fully displayed when Christ returns to make all things new and remove every trace of sin's damage.",
    topics: ["Faith", "Comfort", "Salvation"],
    category: "Knowing God",
    scriptures: ["Romans 5:8", "1 John 4:9-10", "John 15:13"],
    keywords: ["love", "God's love", "cross", "grace", "assurance"]
  },
  {
    id: "answer-suffering",
    question: "Why does God allow suffering?",
    shortAnswer:
      "The Bible presents suffering as part of a larger conflict between good and evil, while showing that God is compassionate, near to the brokenhearted, and able to work even suffering toward eternal good.",
    longAnswer:
      "Suffering entered the world through sin, not from God's original design, and the Bible frames history as a great controversy between good and evil in which humanity is caught. God is not the author of suffering, but He enters into it: He is described as near to the brokenhearted, present in affliction, and able to work even painful circumstances toward good purposes for those who love Him. The cross is the clearest evidence that God takes suffering seriously enough to bear it Himself, and the promise of a coming new earth assures that suffering will not have the last word.",
    topics: ["Comfort", "Faith", "Great Controversy"],
    category: "Hope and Prophecy",
    scriptures: ["Psalm 34:18", "Romans 8:28", "Revelation 21:4"],
    keywords: ["pain", "evil", "grief", "trial", "hard times", "great controversy", "conflict between good and evil"]
  },
  {
    id: "answer-assurance",
    question: "Can I be sure that I am saved?",
    shortAnswer:
      "Assurance rests on the promise and finished work of Christ, not on the strength of our emotions. Scripture encourages believers to trust Christ, examine spiritual fruit, and rest in God's keeping power.",
    longAnswer:
      "Assurance of salvation is anchored in God's promises rather than shifting feelings, because faith and feelings are not the same thing. Jesus said His sheep hear His voice, follow Him, and that no one can snatch them from His hand, which points believers to His keeping power rather than their own performance. At the same time, Scripture invites honest self-examination — not to earn salvation, but to notice growing fruit of the Spirit as evidence that the relationship with Christ is real and active. Doubts can be brought honestly to God, who is able to complete the good work He began.",
    topics: ["Salvation", "Faith"],
    category: "Faith and Salvation",
    scriptures: ["John 10:27-29", "1 John 5:11-13", "Philippians 1:6"],
    keywords: ["assurance", "eternal security", "doubt", "saved", "confidence"]
  },
  {
    id: "answer-bible-study",
    question: "How can I understand the Bible better?",
    shortAnswer:
      "Read prayerfully, pay attention to context, compare Scripture with Scripture, and apply what you learn. A helpful pattern is observation, interpretation, and application.",
    longAnswer:
      "Meaningful Bible study starts before you open the page, with a short prayer asking God to give understanding. From there, observation asks what a passage actually says, interpretation asks what it meant in its original context, and application asks how it applies to your life today. Comparing Scripture with Scripture — letting clearer passages shed light on harder ones — protects against taking a single verse out of context. Keeping a simple journal of insights, discussing questions with others, and returning to the same passages over time all deepen understanding far beyond a single reading.",
    topics: ["Christian Living", "Faith", "Bible Study"],
    category: "Knowing God",
    scriptures: ["2 Timothy 3:16-17", "Psalm 119:105", "Acts 17:11"],
    keywords: ["study", "interpretation", "devotions", "scripture", "context"]
  },
  {
    id: "answer-sabbath",
    question: "Is the Sabbath still important for Christians?",
    shortAnswer:
      "The Sabbath points back to creation, honors God's commandments, and offers a weekly rhythm of worship, rest, mercy, and delight in the Lord. Jesus kept the Sabbath and taught that it was made as a blessing for humanity.",
    longAnswer:
      "The Sabbath was established at creation, before sin entered the world, when God rested on the seventh day and blessed it — making it a gift for all humanity, not a rule invented later. It was reaffirmed in the Ten Commandments and consistently kept by Jesus, who described it as something made for people's good, not a burden. Practically, the Sabbath offers a weekly rhythm of setting aside ordinary work to focus on worship, rest, family, nature, and acts of mercy, echoing both the beginning of creation and pointing forward to the final, eternal rest God promises His people.",
    topics: ["Sabbath", "Christian Living", "Faith"],
    category: "Life and Relationships",
    scriptures: ["Genesis 2:2-3", "Exodus 20:8-11", "Mark 2:27-28"],
    keywords: ["seventh day", "rest", "commandments", "law", "Saturday", "worship"]
  },
  {
    id: "answer-commandments",
    question: "What role do God's commandments have in the Christian life?",
    shortAnswer:
      "The Bible teaches that we are saved by grace through faith, not by earning God's favor. At the same time, God's commandments reveal His character and guide the grateful obedience of those who love Him.",
    longAnswer:
      "Salvation has always been by grace through faith, never by keeping rules well enough to earn it — no amount of obedience can pay a debt only Christ's sacrifice can cover. Yet Scripture is equally clear that faith does not make the law void; instead, God's commandments describe what love for God and others looks like in practice. Once the heart is transformed by grace, obedience becomes a natural response of gratitude rather than an attempt to be accepted, and the Holy Spirit empowers believers to live out what the law describes rather than merely demands.",
    topics: ["Christian Living", "Faith", "Salvation", "Sabbath"],
    category: "Faith and Salvation",
    scriptures: ["John 14:15", "Romans 3:31", "Revelation 14:12"],
    keywords: ["law", "obedience", "ten commandments", "grace", "faith", "love"]
  },
  {
    id: "answer-death",
    question: "What happens when a person dies?",
    shortAnswer:
      "Scripture often describes death as sleep. The dead are not conscious, and the believer's hope is the resurrection at Christ's return, when God will raise His people to eternal life.",
    longAnswer:
      "Throughout Scripture, death is repeatedly compared to sleep — a state without awareness, thought, or activity, rather than immediate conscious existence somewhere else. Jesus used this same picture when He described Lazarus as asleep before raising him, and Paul comforted grieving believers not by describing the dead as already present with God, but by pointing them to the resurrection, when Christ returns and the dead in Him rise first. This understanding offers real comfort: those who have died in faith are, in a sense, resting safely, unaware of time passing, until they are reunited body and soul at the resurrection.",
    topics: ["Prophecy", "Comfort", "Faith", "State of the Dead"],
    category: "Hope and Prophecy",
    scriptures: ["Ecclesiastes 9:5", "John 11:11-14", "1 Thessalonians 4:16-17"],
    keywords: ["death", "sleep", "resurrection", "afterlife", "heaven", "grief", "conscious", "soul"]
  },
  {
    id: "answer-second-coming",
    question: "How will Jesus return?",
    shortAnswer:
      "The return of Jesus will be visible, personal, glorious, and unmistakable — seen by every eye, not secret or hidden. The Bible calls believers to watch, be ready, and live faithfully while looking forward to His coming kingdom.",
    longAnswer:
      "The Bible pictures the second coming as a public, worldwide event: Christ descending visibly from heaven, seen by every eye, accompanied by angels and unmistakable in its glory — nothing like a quiet or secret event only some people notice. Scripture warns against being misled by claims that Christ has returned secretly or in a hidden way. Instead, believers are called to a posture of watching and readiness, not through fearful speculation about dates, but through a faithful daily walk with God, trusting that His return will bring full reunion with loved ones and the restoration of everything sin has broken.",
    topics: ["Prophecy", "Second Coming", "Faith", "Christian Living"],
    category: "Hope and Prophecy",
    scriptures: ["Acts 1:11", "Matthew 24:30-31", "Revelation 1:7"],
    keywords: ["second coming", "return of Jesus", "end times", "visible return", "kingdom"]
  },
  {
    id: "answer-judgment",
    question: "What does the Bible teach about judgment?",
    shortAnswer:
      "Judgment shows that God takes evil seriously, vindicates His character, and brings justice with mercy. Believers can face judgment with confidence because Jesus is both Savior and Advocate.",
    longAnswer:
      "The Bible describes a judgment in which books of record are opened and God's justice is displayed before the watching universe, answering every question raised about His fairness and character. Rather than something to dread, this judgment is good news for those who trust Christ, because Jesus serves as their Advocate, presenting His own righteousness on their behalf. Judgment ultimately demonstrates that God is both perfectly just and abundantly merciful — evil will not go unanswered forever, but for those in Christ, the outcome is already secure through His finished work.",
    topics: ["Prophecy", "Salvation", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Daniel 7:9-10", "Ecclesiastes 12:14", "1 John 2:1"],
    keywords: ["judgment", "advocate", "justice", "mercy", "Daniel", "sanctuary"]
  },
  {
    id: "answer-hell",
    question: "Does the Bible teach eternal torment?",
    shortAnswer:
      "The Bible teaches that sin leads to death, and that final judgment ends evil completely. God's purpose is not endless cruelty but the full destruction of sin and the restoration of a new creation.",
    longAnswer:
      "Scripture consistently describes the penalty for sin as death, not endless conscious torment — the wages of sin is death, not eternal life in agony. The imagery of a lake of fire represents complete and final destruction, consuming sin and its effects entirely rather than preserving them forever, which would make evil as immortal as good. This is consistent with God's character: His goal is not unending cruelty, but the full, final end of suffering, sin, and death, clearing the way for a new heaven and new earth where nothing harmful remains.",
    topics: ["Prophecy", "Salvation", "Comfort"],
    category: "Hope and Prophecy",
    scriptures: ["Romans 6:23", "Malachi 4:1", "Revelation 21:4"],
    keywords: ["hell", "lake of fire", "judgment", "death", "destruction", "new earth"]
  },
  {
    id: "answer-health",
    question: "Does God care about my physical health?",
    shortAnswer:
      "The Bible presents the body as belonging to God and calls believers to honor Him in every part of life. Caring for health is not a way to earn salvation; it is a grateful response to God's desire to restore the whole person.",
    longAnswer:
      "Because the body is described as a temple of the Holy Spirit, Scripture calls believers to care for it wisely — through rest, nourishing food, physical activity, and avoiding what harms the body or clouds the mind. This is never framed as a way to earn God's favor; it is a grateful, practical response to being bought at a price and belonging fully to God. Healthy choices also support a clear mind for prayer, service, and discernment, reflecting God's desire to restore the whole person — body, mind, and spirit — rather than treating physical health as separate from spiritual life.",
    topics: ["Christian Living", "Faith", "Health"],
    category: "Life and Relationships",
    scriptures: ["1 Corinthians 6:19-20", "Romans 12:1", "3 John 1:2"],
    keywords: ["health", "body", "temperance", "food", "whole person", "wellness"]
  },
  {
    id: "answer-holy-spirit",
    question: "Who is the Holy Spirit and what does He do?",
    shortAnswer:
      "The Holy Spirit is God at work in the believer's life, convicting of sin, teaching truth, comforting, and producing spiritual fruit. He empowers Christians for godly living, prayer, and service.",
    longAnswer:
      "The Holy Spirit is fully God, sent to indwell believers, convict the world of sin, and guide them into truth. His work is both inward and practical: producing the fruit of the Spirit such as love, joy, peace, and self-control, and equipping believers with gifts for serving the church and others. Being filled with the Spirit is not a one-time event but an ongoing, daily surrender, as believers rely on His power for prayer, discernment, and the strength to live differently than they could on their own.",
    topics: ["Holy Spirit", "Faith", "Christian Living"],
    category: "Knowing God",
    scriptures: ["John 14:26", "John 16:8", "Galatians 5:22-23"],
    keywords: ["holy spirit", "comforter", "fruit of the spirit", "conviction", "power"]
  },
  {
    id: "answer-baptism",
    question: "Why is baptism important?",
    shortAnswer:
      "Baptism is a public expression of faith in Christ, symbolizing His death, burial, and resurrection, and the believer's new life in Him. It follows repentance and a decision to walk with Jesus.",
    longAnswer:
      "Baptism by immersion pictures the gospel itself: going under the water symbolizes being buried with Christ, and rising out of the water symbolizes being raised to walk in newness of life. It is meant to follow genuine repentance and instruction, marking a conscious decision to follow Jesus rather than a ritual performed without understanding. Baptism does not cause salvation, but it publicly and meaningfully confirms it, and it becomes the starting point for an ongoing life of discipleship, growth, and participation in the church community.",
    topics: ["Baptism", "Salvation", "Faith"],
    category: "Faith and Salvation",
    scriptures: ["Romans 6:3-4", "Acts 2:38", "Matthew 28:19-20"],
    keywords: ["baptism", "immersion", "new life", "repentance", "public confession"]
  },
  {
    id: "answer-marriage",
    question: "What does the Bible teach about marriage?",
    shortAnswer:
      "Marriage is God's design for a man and woman to become one in a lifelong covenant marked by love, faithfulness, and mutual respect, reflecting the relationship between Christ and His church.",
    longAnswer:
      "From the beginning, marriage was designed as a lifelong covenant in which two people become one, built on companionship, faithfulness, and mutual commitment rather than convenience. Paul describes marriage as a living picture of Christ's sacrificial love for the church, calling husbands to lead with self-giving love and wives to respond with respect, in a relationship of mutual honor rather than domination. Because marriage reflects something bigger than the couple themselves, Scripture treats it seriously, encouraging couples to build their relationship on shared faith, ongoing forgiveness, and ongoing investment rather than treating it as easily disposable.",
    topics: ["Marriage and Family", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Genesis 2:24", "Ephesians 5:25-33", "Matthew 19:4-6"],
    keywords: ["marriage", "husband", "wife", "family", "covenant", "relationships"]
  },
  {
    id: "answer-parenting",
    question: "How should parents raise their children according to the Bible?",
    shortAnswer:
      "Scripture calls parents to teach children about God consistently, discipline with love rather than anger, and model a life of faith at home so children grow up knowing and trusting the Lord.",
    longAnswer:
      "Deuteronomy pictures teaching children about God as a constant, woven-in part of everyday life — talked about at home, on the road, at bedtime, and in the morning, not confined to a single lesson each week. Discipline is meant to shape the heart, not merely control behavior, and Paul specifically warns fathers against provoking children to anger, pointing instead toward instruction and correction rooted in love. Modeling authentic faith at home, admitting mistakes, and praying with and for children all shape a home environment where trust in God feels natural rather than forced.",
    topics: ["Marriage and Family", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Deuteronomy 6:6-7", "Ephesians 6:4", "Proverbs 22:6"],
    keywords: ["parenting", "children", "family", "discipline", "raising kids"]
  },
  {
    id: "answer-stewardship",
    question: "What does the Bible say about money and stewardship?",
    shortAnswer:
      "The Bible teaches that everything belongs to God and believers are stewards, not owners, of their time, talents, and resources. Faithful giving, honesty, and contentment flow from trusting God's provision.",
    longAnswer:
      "Scripture consistently teaches that everything ultimately belongs to God, and people are entrusted as managers, or stewards, of the time, abilities, and resources placed in their care. Faithful stewardship includes giving — such as the tithe and additional offerings — not as a transaction to gain God's blessing, but as an act of worship and trust. Contentment, honesty in finances, and generosity toward those in need flow naturally once ownership is understood correctly: everything is on loan from a generous God, and giving cheerfully reflects His own character.",
    topics: ["Stewardship", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Malachi 3:10", "Matthew 6:19-21", "2 Corinthians 9:7"],
    keywords: ["money", "tithe", "giving", "finances", "stewardship", "generosity"]
  },
  {
    id: "answer-church",
    question: "Why is the church important?",
    shortAnswer:
      "The church is the community of believers united in Christ for worship, teaching, fellowship, encouragement, and mission. Scripture calls believers not to neglect gathering together as one body.",
    longAnswer:
      "The church is described as a body with many parts, each contributing different gifts for the good of the whole, held together by a shared faith in Christ rather than uniformity of personality or background. Gathering together for worship, teaching, prayer, and fellowship is not optional or old-fashioned; Hebrews specifically warns against neglecting this habit, especially as challenges increase. Beyond weekly worship, the early church modeled shared meals, mutual care, and active mission together, showing that spiritual growth happens best in community rather than in isolation.",
    topics: ["Church", "Christian Living", "Faith"],
    category: "Life and Relationships",
    scriptures: ["Hebrews 10:24-25", "Acts 2:42", "1 Corinthians 12:27"],
    keywords: ["church", "fellowship", "community", "body of Christ", "worship together"]
  },
  {
    id: "answer-creation",
    question: "What does the Bible teach about creation?",
    shortAnswer:
      "The Bible presents God as the intentional Creator of the heavens, the earth, and humanity in His own image. Creation reveals God's power and care, and it is the foundation for the Sabbath rest.",
    longAnswer:
      "Genesis describes a deliberate, purposeful creation — not a random accident — in which God speaks the universe into existence and forms humanity in His own image, giving people inherent dignity and purpose. The created world itself testifies to God's power and character, as the heavens are said to declare His glory even without words. Creation is also the foundation for the Sabbath: God rested on the seventh day not because He was tired, but to establish a pattern of rest and worship that would remind every generation of who made them and why they matter.",
    topics: ["Creation", "Faith", "Sabbath"],
    category: "Knowing God",
    scriptures: ["Genesis 1:1", "Genesis 1:27", "Psalm 19:1"],
    keywords: ["creation", "creator", "genesis", "origins", "image of god"]
  },
  {
    id: "answer-temptation",
    question: "How can I overcome temptation?",
    shortAnswer:
      "The Bible promises that God provides a way of escape from every temptation and that His strength, not willpower alone, enables believers to resist sin and grow in godliness.",
    longAnswer:
      "Paul's promise that God will always provide a way of escape from temptation means no one faces an impossible situation — help is always available, even when it does not feel that way. Jesus modeled the pattern for resisting temptation Himself, responding to each test in the wilderness with Scripture rather than self-effort alone. Practically, this means knowing God's Word well enough to recall it under pressure, avoiding known triggers where possible, staying honest with trusted others for accountability, and depending on the Spirit's strength rather than relying solely on willpower, which tends to run out.",
    topics: ["Christian Living", "Faith"],
    category: "Life and Relationships",
    scriptures: ["1 Corinthians 10:13", "James 4:7", "Hebrews 4:15-16"],
    keywords: ["temptation", "sin", "overcome", "willpower", "victory", "self-control"]
  },
  {
    id: "answer-heaven",
    question: "What will heaven and the new earth be like?",
    shortAnswer:
      "The Bible describes a coming new heaven and new earth where God dwells with His people, sorrow and death are no more, and believers enjoy perfect fellowship with God forever.",
    longAnswer:
      "Rather than a vague, disembodied existence, the Bible describes a renewed, physical new earth — restored to conditions even better than the original creation — where God's people live in resurrected bodies, free from sickness, sorrow, and death. Revelation pictures God dwelling personally among His people, wiping away every tear, with no more pain or crying because the old order of things has fully passed away. This future is described as beyond human imagination in its goodness, offering real hope that present suffering is temporary and that a tangible, joyful, eternal life is still ahead.",
    topics: ["Prophecy", "Comfort", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 21:1-4", "Isaiah 65:17", "1 Corinthians 2:9"],
    keywords: ["heaven", "new earth", "new creation", "eternal life", "hope"]
  },
  {
    id: "answer-trinity",
    question: "Who is God? Is the Trinity biblical?",
    shortAnswer:
      "The Bible reveals one God who exists as Father, Son, and Holy Spirit — three distinct persons, fully united in purpose, character, and eternal love, not three separate gods.",
    longAnswer:
      "Scripture consistently affirms that there is only one God, yet it also presents Father, Son, and Holy Spirit each as fully divine, distinct in role, and inseparably united in love and purpose. At Jesus' baptism, all three are present together: the Son in the water, the Spirit descending like a dove, and the Father speaking from heaven. Jesus commanded baptism in the single name of the Father, Son, and Holy Spirit, and the Spirit is described with the same divine attributes as the Father and Son. This is a mystery beyond full human comprehension, but it shapes how believers understand God's nature as inherently relational and loving, even before creation existed.",
    topics: ["Faith", "Holy Spirit"],
    category: "Knowing God",
    scriptures: ["Matthew 28:19", "Matthew 3:16-17", "2 Corinthians 13:14"],
    keywords: ["trinity", "godhead", "father son spirit", "one god", "three persons"]
  },
  {
    id: "answer-jesus-divinity",
    question: "Is Jesus really God?",
    shortAnswer:
      "The Bible presents Jesus as fully God and fully human — eternal, the Creator, worshiped as divine, yet born as a man to live, die, and rise again for humanity's salvation.",
    longAnswer:
      "John's Gospel opens by identifying Jesus as the Word who was with God, who was God, and through whom everything was created, then describes Him becoming flesh and living among us. Jesus accepted worship, claimed unity with the Father, and forgave sins — something Scripture reserves for God alone. At the same time, He hungered, wept, grew tired, and died, showing genuine humanity. This dual nature is essential to the gospel: only someone fully divine could pay an infinite debt, and only someone fully human could represent humanity as a substitute.",
    topics: ["Faith", "Salvation"],
    category: "Knowing God",
    scriptures: ["John 1:1-3, 14", "Colossians 2:9", "Philippians 2:6-8"],
    keywords: ["jesus christ", "deity of christ", "incarnation", "god the son", "fully god fully man"]
  },
  {
    id: "answer-doubt",
    question: "What should I do when I struggle with doubt?",
    shortAnswer:
      "Doubt is not condemned in Scripture; honest questions can be brought to God. Faith grows through seeking answers, remembering God's past faithfulness, and staying in community.",
    longAnswer:
      "Many biblical figures, including John the Baptist and Thomas, expressed real doubt, and God met their honesty with patient answers rather than rejection. Bringing questions to God directly — through prayer, Scripture study, and honest conversation with trusted believers — is far healthier than suppressing doubt or hiding it out of shame. Remembering specific ways God has been faithful in the past builds a foundation for trusting Him with what is still unclear. Doubt handled honestly, rather than ignored, can actually deepen and mature genuine faith over time.",
    topics: ["Faith", "Christian Living"],
    category: "Knowing God",
    scriptures: ["Mark 9:24", "John 20:27-29", "Jude 1:22"],
    keywords: ["doubt", "questions", "unbelief", "struggling faith", "uncertainty"]
  },
  {
    id: "answer-guidance",
    question: "How can I know God's will for my life?",
    shortAnswer:
      "God guides through Scripture, prayer, wise counsel, and the quiet leading of the Holy Spirit. Most of His will is already revealed; specific decisions are made trusting His care.",
    longAnswer:
      "A large part of God's will is already clearly revealed in Scripture — to love God and others, live with integrity, and reflect Christ's character — so seeking direction starts there rather than waiting for a special sign. For specific decisions, Scripture models seeking wise counsel, praying for clarity, watching for how God provides or closes doors, and paying attention to the peace or conviction of the Holy Spirit. Trusting God's care means moving forward in faith on decisions that align with biblical wisdom, resting in the confidence that He directs the steps of those who commit their way to Him.",
    topics: ["Faith", "Prayer", "Christian Living"],
    category: "Knowing God",
    scriptures: ["Proverbs 3:5-6", "Psalm 32:8", "James 1:5"],
    keywords: ["god's will", "guidance", "decisions", "direction", "calling"]
  },
  {
    id: "answer-spiritual-gifts",
    question: "What are spiritual gifts and how do I find mine?",
    shortAnswer:
      "Spiritual gifts are abilities given by the Holy Spirit to build up the church. Every believer receives at least one, meant to be discovered and used in service to others.",
    longAnswer:
      "Spiritual gifts are Spirit-given abilities such as teaching, encouragement, service, leadership, mercy, or generosity, distributed to different believers so the whole church functions like a healthy body with many necessary parts. No one receives every gift, and no gift is more spiritually significant than another when used in love — the goal is mutual benefit, not personal status. Gifts are often discovered through serving, noticing what brings genuine fruit and joy, and receiving feedback from other believers, rather than through abstract self-reflection alone.",
    topics: ["Holy Spirit", "Church", "Christian Living"],
    category: "Knowing God",
    scriptures: ["1 Corinthians 12:4-7", "Romans 12:4-8", "1 Peter 4:10-11"],
    keywords: ["spiritual gifts", "gifts of the spirit", "serving", "talents", "calling"]
  },
  {
    id: "answer-fasting",
    question: "What does the Bible teach about fasting?",
    shortAnswer:
      "Fasting is voluntarily setting aside food (or other things) for a time to focus more fully on prayer and seeking God, not a way to manipulate God or earn favor.",
    longAnswer:
      "Throughout Scripture, fasting accompanies serious prayer — seeking guidance, repenting, or drawing near to God in times of crisis or decision. Jesus assumed His followers would fast and taught that it should be done sincerely, without seeking public attention or praise for the sacrifice. Fasting is not a technique to force God's hand or a means of earning spiritual credit; rather, it is a physical way of expressing humility and dependence, clearing space so attention can focus more fully on prayer and listening to God.",
    topics: ["Prayer", "Christian Living"],
    category: "Knowing God",
    scriptures: ["Matthew 6:16-18", "Joel 2:12-13", "Acts 13:2-3"],
    keywords: ["fasting", "prayer and fasting", "self-denial", "seeking god"]
  },
  {
    id: "answer-mission",
    question: "Why does the church share the gospel with others?",
    shortAnswer:
      "Jesus commissioned His followers to share the good news with everyone, everywhere, because the gospel is meant to be shared, not kept private, out of love for others.",
    longAnswer:
      "Before returning to heaven, Jesus gave His followers a clear commission: go and make disciples of all nations, teaching them to follow everything He commanded. This mission flows naturally from grace — those who have experienced forgiveness and hope want others to know it is available too. Sharing the gospel is not about pressure or manipulation; it includes living a visibly transformed life, serving practical needs, and speaking honestly about faith when opportunities arise. This mission is described as continuing until Christ's return, giving urgency and purpose to how believers live and relate to others.",
    topics: ["Church", "Christian Living", "Faith"],
    category: "Life and Relationships",
    scriptures: ["Matthew 28:18-20", "Matthew 24:14", "Romans 10:14-15"],
    keywords: ["evangelism", "great commission", "sharing faith", "mission", "witnessing"]
  },
  {
    id: "answer-grief",
    question: "How does the Bible help with grief and loss?",
    shortAnswer:
      "Scripture allows honest grief while offering real comfort: God is near to the brokenhearted, and death is not the final word for those who trust in the resurrection.",
    longAnswer:
      "The Bible never treats grief as a sign of weak faith — Jesus Himself wept at the tomb of a friend, and the Psalms are full of raw, honest sorrow brought openly to God. At the same time, grief for believers is described as different from grief without hope, because death is temporary, not final, for those united to Christ. God is described as especially near to the brokenhearted and to those crushed in spirit, inviting honest lament rather than forced positivity. The promise of the resurrection, when God will reunite loved ones and wipe away every tear, offers a future hope that can hold real grief and real comfort together.",
    topics: ["Comfort", "State of the Dead", "Prophecy"],
    category: "Life and Relationships",
    scriptures: ["Psalm 34:18", "John 11:33-35", "1 Thessalonians 4:13-14"],
    keywords: ["grief", "loss", "mourning", "death of loved one", "comfort"]
  },
  {
    id: "answer-work",
    question: "Does the Bible say anything about work and career?",
    shortAnswer:
      "Work is part of God's original design, meant to be done with integrity and diligence as service to God, not merely to people, regardless of the type of job.",
    longAnswer:
      "Work existed before sin entered the world, given to humanity as a meaningful part of caring for creation, not as a punishment. Paul instructs believers to work heartily, as if working for the Lord rather than merely for human supervisors, which reframes even ordinary tasks as an act of worship. Honesty, diligence, and fair treatment of others are consistently emphasized, along with a caution against greed or defining identity entirely by career success. Rest is also built into the pattern of work through the Sabbath, protecting against the exhaustion of nonstop labor.",
    topics: ["Christian Living", "Stewardship"],
    category: "Life and Relationships",
    scriptures: ["Colossians 3:23-24", "Genesis 2:15", "Proverbs 12:24"],
    keywords: ["work", "career", "job", "labor", "workplace"]
  },
  {
    id: "answer-anger",
    question: "How should I handle anger according to the Bible?",
    shortAnswer:
      "Anger itself is not automatically sinful, but Scripture warns against letting it control actions or linger unresolved, urging quick reconciliation and self-control instead.",
    longAnswer:
      "Scripture acknowledges that anger is a real human emotion — even Jesus displayed righteous anger at injustice — but it draws a clear line between feeling anger and being controlled by it. Paul's instruction not to let the sun go down on anger points to resolving conflict promptly rather than letting resentment build. James urges believers to be slow to become angry, since human anger rarely produces the righteousness God desires. Practically, this means pausing before reacting, seeking to understand the other person, and pursuing reconciliation quickly rather than nursing a grudge.",
    topics: ["Christian Living", "Comfort"],
    category: "Life and Relationships",
    scriptures: ["Ephesians 4:26-27", "James 1:19-20", "Proverbs 15:1"],
    keywords: ["anger", "self-control", "conflict", "resentment", "emotions"]
  },
  {
    id: "answer-end-times-signs",
    question: "What are the signs that Jesus is coming soon?",
    shortAnswer:
      "Jesus described signs such as wars, natural disasters, moral decline, and the gospel reaching the whole world, while warning against date-setting and urging constant readiness.",
    longAnswer:
      "In the Olivet Discourse, Jesus described a range of signs — wars, earthquakes, famines, false teachers, increasing lawlessness, and the gospel being preached to the whole world — pointing to His return without giving an exact timeline. He explicitly said no one knows the day or hour, warning against confident date-setting, which Scripture consistently discourages. Instead of promoting fear or speculation, these signs are meant to encourage steady faithfulness: staying spiritually alert, continuing to love and serve others, and living each day ready to meet Christ rather than anxious about timing.",
    topics: ["Prophecy", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Matthew 24:6-14", "Matthew 24:36", "Luke 21:34-36"],
    keywords: ["signs of the end", "last days", "end times", "olivet discourse", "readiness"]
  },
  {
    id: "answer-daniel-revelation",
    question: "How should I understand prophecy in Daniel and Revelation?",
    shortAnswer:
      "Daniel and Revelation use symbolic language to reveal God's control over history, the rise and fall of powers, and the certainty of Christ's ultimate victory over evil.",
    longAnswer:
      "Daniel and Revelation are often called apocalyptic literature, using vivid symbols — beasts, horns, numbers, and visions — to communicate real historical and future events in a way meant to be interpreted symbolically rather than always literally. A reliable approach lets Scripture interpret Scripture, comparing similar symbols across both books and other prophetic passages rather than relying on outside speculation. The consistent message across these prophecies is reassurance: despite the rise of powerful, opposing forces throughout history, God remains sovereign, and the story ends with Christ's decisive victory and the full establishment of His kingdom.",
    topics: ["Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["Daniel 2:44", "Revelation 1:1-3", "Revelation 19:11-16"],
    keywords: ["daniel", "revelation", "apocalyptic", "bible prophecy", "symbols"]
  },
  {
    id: "answer-tithing",
    question: "Is tithing required for Christians today?",
    shortAnswer:
      "Tithing — returning a tenth — reflects a long biblical pattern of honoring God first with material blessings, offered willingly out of trust rather than compulsion or fear.",
    longAnswer:
      "The practice of tithing predates the law given at Sinai, appearing when Abraham gave a tenth to Melchizedek, and it continues through the Old Testament as a way of acknowledging God as the source of every blessing. Malachi describes tithing as a test of trust, with a promise of blessing tied to faithfulness in this area. In the New Testament, Jesus affirms tithing while emphasizing that justice, mercy, and faithfulness must not be neglected. Giving is meant to flow from a willing, cheerful heart rather than pressure or guilt, with tithing serving as a meaningful, tangible starting point for broader biblical generosity.",
    topics: ["Stewardship", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Malachi 3:8-10", "Genesis 14:18-20", "Matthew 23:23"],
    keywords: ["tithing", "tenth", "giving", "offerings", "money"]
  },
  {
    id: "answer-loneliness",
    question: "What does the Bible say to someone feeling lonely?",
    shortAnswer:
      "God promises never to leave or forsake His people, offering His presence, the support of Christian community, and purpose even in seasons of deep loneliness.",
    longAnswer:
      "Scripture repeatedly promises that believers are never truly alone, since God Himself promises to never leave or forsake His people, even in the most isolating circumstances. At the same time, God designed people for community, which is part of why the church is described as a body — meant to notice, include, and care for members who are struggling or isolated. Practical steps include being honest about loneliness rather than hiding it, actively seeking connection within a faith community, and serving others, which often reduces isolation while creating meaningful relationships over time.",
    topics: ["Comfort", "Church"],
    category: "Life and Relationships",
    scriptures: ["Deuteronomy 31:6", "Psalm 68:6", "Hebrews 10:24-25"],
    keywords: ["loneliness", "isolation", "alone", "community", "belonging"]
  },
  {
    id: "answer-gods-law",
    question: "What is the purpose of God's law?",
    shortAnswer:
      "God's law reveals His character, shows what love for God and others looks like, and helps us recognize sin. We are not saved by keeping the law; we obey because God's grace has already reached us.",
    longAnswer:
      "The law of God is a gracious expression of His holy and loving character. It points out sin, gives a trustworthy standard for right and wrong, and teaches believers how to love God and their neighbors in practical ways. The law cannot justify sinners or replace faith in Christ, but grace does not make obedience meaningless. Through the Spirit, believers learn to delight in God's instruction and live it out as a response of gratitude.",
    topics: ["Law", "Faith", "Christian Living"],
    category: "Faith and Salvation",
    scriptures: ["Romans 3:20", "Matthew 22:37-40", "John 14:15"],
    keywords: ["law", "commandments", "obedience", "sin", "God's character", "grace"]
  },
  {
    id: "answer-sanctuary",
    question: "What does the Bible teach about the sanctuary?",
    shortAnswer:
      "The biblical sanctuary illustrates God's plan to dwell with His people and deal with sin. Its services point forward to Jesus, whose sacrifice and heavenly ministry provide forgiveness, cleansing, and access to God.",
    longAnswer:
      "The sanctuary was designed as a visible lesson about God's presence, the seriousness of sin, and the way He restores sinners. Its sacrifices pointed to Christ's once-for-all death, while the priestly ministry anticipated Jesus as our compassionate High Priest in heaven. The sanctuary message assures believers that salvation is not only pardon for the past but also Christ's continuing work to cleanse, intercede, and prepare His people for His return.",
    topics: ["Sanctuary", "Salvation", "Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["Exodus 25:8", "Hebrews 8:1-2", "Hebrews 9:11-14"],
    keywords: ["sanctuary", "tabernacle", "high priest", "Jesus", "atonement", "heavenly ministry"]
  },
  {
    id: "answer-three-angels",
    question: "What is the message of the three angels?",
    shortAnswer:
      "The three angels' messages in Revelation 14 call the world to worship the Creator, announce the fall of false religious systems, reject allegiance to the beast, and patiently remain faithful to Jesus.",
    longAnswer:
      "The three angels' messages are a final gospel proclamation before Christ's return. The first angel announces the eternal gospel and calls every nation to fear God, give Him glory, and worship Him as Creator. The second exposes the fall of Babylon, representing systems that turn people away from biblical truth. The third warns against worshiping the beast and receiving its mark, while Scripture highlights the endurance of God's people who keep His commandments and hold to faith in Jesus.",
    topics: ["Three Angels", "Prophecy", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 14:6-12", "Revelation 18:1-4", "Exodus 20:11"],
    keywords: ["three angels", "first angel", "second angel", "third angel", "Babylon", "beast", "mark", "worship", "Revelation 14"]
  },
  {
    id: "answer-women-ministry",
    question: "Are women permitted to serve as pastors or elders according to scripture?",
    shortAnswer:
      "Scripture shows women prophesying, teaching, leading, and serving as deacons under the Spirit's gifting, while a few passages about church order have been understood differently regarding the ordained elder or pastor role. Sincere believers hold different convictions on this question.",
    longAnswer:
      "The Bible records women such as Deborah leading Israel as a judge and prophet, Phoebe serving as a deacon, Priscilla teaching Apollos alongside her husband, and Joel's promise — quoted at Pentecost — that God's Spirit would fall on sons and daughters alike, enabling both to prophesy. At the same time, Paul's instructions in 1 Corinthians 14 and 1 Timothy 2 about order in worship and the office of elder have been read by some as limiting the ordained pastoral role to men, while others read them as addressing specific local disruptions rather than a universal rule for every context. Galatians 3:28 affirms that in Christ there is no spiritual hierarchy between male and female. Given this range within Scripture, believers can affirm women serving fully in ministry, teaching, and leadership according to their spiritual gifts, while extending grace and humility toward fellow Christians who apply these specific passages differently regarding ordination.",
    topics: ["Church", "Christian Living", "Holy Spirit"],
    category: "Life and Relationships",
    scriptures: ["Judges 4:4-5", "Romans 16:1-2", "Acts 2:17-18", "Galatians 3:28"],
    keywords: ["women pastors", "women elders", "women in ministry", "ordination", "church leadership", "deborah", "phoebe"]
  },
  {
    id: "answer-homosexuality",
    question: "How does scripture view homosexuality, and is engaging in homosexual behavior considered sinful?",
    shortAnswer:
      "Scripture consistently presents marriage between a man and a woman as God's design for sexual intimacy, and identifies same-sex sexual behavior as outside that design. Temptation itself is not sin, and every person — regardless of their struggles — bears God's image and is offered the same grace and dignity.",
    longAnswer:
      "From creation, Scripture presents marriage as a covenant between a man and a woman becoming one flesh, and passages such as Romans 1 and 1 Corinthians 6 name same-sex sexual activity among behaviors that fall outside God's design for intimacy. It is important to distinguish attraction or temptation, which is not itself sin, from chosen behavior. Scripture is equally clear that no struggle places a person beyond grace: 1 Corinthians 6:11 tells believers who once lived in various sins, 'such were some of you,' before describing how they were washed, sanctified, and justified in Christ. Every person carries the image of God and deserves to be treated with compassion, respect, and welcome in the church community. Like every other believer, those who experience same-sex attraction are called to grow in Christlike character through the Spirit's ongoing, patient work, not to be singled out, shamed, or excluded.",
    topics: ["Marriage and Family", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Genesis 2:24", "Romans 1:26-27", "1 Corinthians 6:9-11"],
    keywords: ["homosexuality", "same-sex", "lgbtq", "sexuality", "sin", "grace", "identity"]
  },
  {
    id: "answer-tattoos",
    question: "Does biblical text prohibit getting tattoos or body modifications?",
    shortAnswer:
      "The Old Testament's specific prohibition against cutting or marking the body was tied to pagan mourning rituals, not a timeless ban on all body art. The broader biblical principle is that the body belongs to God and should be honored with wisdom rather than treated as a matter of legalistic rule-keeping.",
    longAnswer:
      "Leviticus 19:28 forbids cutting the body for the dead or marking it with tattoos, a command given in the context of pagan mourning and idol-worship practices common among Israel's neighbors, rather than a general command applying to every era and culture. The New Testament shifts the emphasis from external rule-keeping to the underlying principle that the body is a temple of the Holy Spirit, bought at a price and meant to glorify God. This means decisions about tattoos or body modification are best weighed through wisdom rather than a flat rule: considering motive, permanence, message, health, and whether a choice reflects self-control and honors God, rather than treating ink itself as inherently sinful.",
    topics: ["Christian Living", "Health"],
    category: "Life and Relationships",
    scriptures: ["Leviticus 19:28", "1 Corinthians 6:19-20", "1 Corinthians 10:31"],
    keywords: ["tattoos", "body modification", "body art", "piercings", "temple of the holy spirit"]
  },
  {
    id: "answer-eternal-security",
    question: "Can a true believer ever lose their salvation, or is eternal security a solid biblical doctrine?",
    shortAnswer:
      "Salvation is secure for everyone who continues trusting and abiding in Christ, and nothing outside a person can snatch them from His hand. Scripture also warns that willful, persistent turning away from Christ — not ordinary struggle or weakness — can result in someone abandoning the faith they once professed.",
    longAnswer:
      "Romans 8 promises that nothing in all creation can separate believers from the love of God, and Jesus said no one can snatch His sheep out of His hand — powerful assurance for anyone who is trusting Him today. At the same time, Jesus described Himself as the vine and believers as branches, warning that a branch that does not abide in Him withers and is removed, and Hebrews and 2 Peter both warn soberly about those who deliberately, knowingly turn back from a genuine relationship with Christ. The consistent picture is not that salvation is earned or that momentary sin or doubt cancels it, but that salvation is kept secure through an ongoing, living faith relationship with Christ; security is real and trustworthy for all who continue to abide in Him by grace, while Scripture takes seriously the danger of deliberately, finally rejecting Him.",
    topics: ["Salvation", "Faith"],
    category: "Faith and Salvation",
    scriptures: ["John 15:4-6", "Romans 8:38-39", "Hebrews 6:4-6"],
    keywords: ["eternal security", "losing salvation", "once saved always saved", "apostasy", "assurance", "abiding in christ"]
  },
  {
    id: "answer-masturbation",
    question: "Is self-pleasure considered a sin in the eyes of biblical scripture?",
    shortAnswer:
      "Scripture never names this act directly, but it repeatedly calls believers to guard the heart and mind from lust, to practice self-control, and to honor the body as a temple of the Holy Spirit. This is an area for honest, grace-filled reflection rather than fear or shame.",
    longAnswer:
      "The Bible does not explicitly mention masturbation, so any application depends on broader biblical principles rather than a direct command. Jesus taught that lust itself, not only outward action, matters to God, which points believers toward examining the thoughts and desires connected to any behavior. Paul calls believers to sexual self-control and holiness, and to treat the body as belonging to God rather than being ruled by unchecked desire, especially where habits become compulsive or entangled with pornography. Rather than a legalistic rule, Scripture invites honest self-examination before God, freedom from shame through grace, and reliance on the Holy Spirit's help to grow in purity and self-control over time.",
    topics: ["Christian Living", "Health"],
    category: "Life and Relationships",
    scriptures: ["Matthew 5:27-28", "1 Thessalonians 4:3-5", "1 Corinthians 6:19-20"],
    keywords: ["masturbation", "self-pleasure", "lust", "purity", "self-control", "sexuality"]
  },
  {
    id: "answer-interracial-marriage",
    question: "Does the Bible address or restrict marriage between different racial or ethnic backgrounds?",
    shortAnswer:
      "Scripture does not prohibit marriage across racial or ethnic lines. All people descend from one common origin and are equally made in God's image, and the biblical concerns about intermarriage were about shared faith, not race.",
    longAnswer:
      "Acts 17:26 teaches that God made every nation of humanity 'from one man,' establishing a shared human origin that undercuts any notion of racial superiority or a biblical basis for restricting marriage by race. When Miriam and Aaron criticized Moses for marrying a Cushite woman, God rebuked their objection rather than Moses' marriage. The Old Testament warnings against intermarrying with certain surrounding nations were rooted in the danger of being drawn into idol worship, not ethnicity itself, and Galatians 3:28 affirms that in Christ, ethnic distinctions carry no spiritual hierarchy. What matters for a lasting, God-honoring marriage is shared faith, character, and commitment, not racial or ethnic background.",
    topics: ["Marriage and Family", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Acts 17:26", "Numbers 12:1-10", "Galatians 3:28"],
    keywords: ["interracial marriage", "race", "ethnicity", "intermarriage", "marriage"]
  },
  {
    id: "answer-cain-wife",
    question: "Where did Cain find his wife after being banished?",
    shortAnswer:
      "Scripture does not name her directly, but Genesis records that Adam and Eve had many other sons and daughters, so Cain most likely married a close relative — a sister or niece — which was not yet prohibited at that early point in human history.",
    longAnswer:
      "Genesis 5:4 states that Adam lived many years after Seth's birth and had additional sons and daughters, indicating a growing human family beyond the individuals named in the early chapters of Genesis. Since Scripture teaches that the entire human race descended from a single first pair, Cain's wife would necessarily have been a close relative, most likely a sister or niece. This kind of marriage was not forbidden until much later, when the Mosaic law restricted close-relative marriage, likely both for moral order and because accumulated genetic effects had made such unions medically riskier by that time. Scripture is intentionally brief here, focused on the moral and spiritual lessons of Cain's story rather than exhaustive genealogical detail, so some uncertainty about the exact details remains appropriate.",
    topics: ["Creation", "Bible Study"],
    category: "Knowing God",
    scriptures: ["Genesis 4:16-17", "Genesis 5:4", "Acts 17:26"],
    keywords: ["cain's wife", "cain and abel", "genesis", "early humanity", "genealogy"]
  },
  {
    id: "answer-suicide",
    question: "How does Christian theology view suicide, and what is the eternal standing of a believer who takes their own life?",
    shortAnswer:
      "Suicide is a profound tragedy, not an automatic, unforgivable sin that overrides a person's relationship with Christ. Scripture teaches that final judgment belongs to God alone, who alone knows the full state of a person's heart and mind. Anyone in crisis should reach out immediately for help — you are not alone, and God is near.",
    longAnswer:
      "Scripture never singles out suicide as an unforgivable act, and it does not authorize any human being to declare another person's eternal destiny — that judgment belongs to God alone, who alone sees the full picture of pain, illness, and struggle behind such a moment. Salvation rests on a relationship with Christ sustained by grace, not on the circumstances of a person's final moment, and God is described as especially near to the brokenhearted and to those crushed in spirit. Rather than offering false certainty in either direction, Scripture calls the church to surround grieving families with compassion, and calls anyone experiencing thoughts of suicide to reach out immediately — to a trusted friend, pastor, counselor, or a crisis helpline — trusting that God's presence and help are available in the darkest moments, and that no situation is beyond His care.",
    topics: ["Comfort", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Psalm 34:18", "Romans 14:10-12", "Psalm 139:13-16"],
    keywords: ["suicide", "self-harm", "mental health", "crisis", "grief", "hope", "eternal destiny"]
  },
  {
    id: "answer-animals-afterlife",
    question: "Do animals possess souls, and will pets exist in the afterlife?",
    shortAnswer:
      "Scripture describes both people and animals as sharing the 'breath of life,' but only humans are made in God's image with the hope of resurrection. The Bible does not explicitly promise pets in the afterlife, yet its pictures of the restored new earth include animals living in peace, offering real, though not fully detailed, hope.",
    longAnswer:
      "Genesis describes animals receiving the same 'breath of life' given to humanity, and Ecclesiastes 3 candidly admits that no one can be fully certain where the spirit of an animal goes compared to a human being. Scripture does not promise personal, individual reunions with pets the way it promises resurrection for people made in God's image. At the same time, the prophetic picture of the new earth in Isaiah 11 describes animals such as the wolf and lamb living together in peace, suggesting that animal life in general has a place in God's restored creation. Combined with the tenderness Scripture shows toward animals — from the righteous caring for the life of their animal to God's own attention to the sparrows — this gives comfort and hope, even where specific details are left unstated.",
    topics: ["Creation", "Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["Ecclesiastes 3:19-21", "Isaiah 11:6-9", "Matthew 10:29"],
    keywords: ["animals", "pets", "afterlife", "new earth", "souls", "animal souls"]
  },
  {
    id: "answer-tongues",
    question: "Is the spiritual gift of speaking and praying in tongues active for believers today?",
    shortAnswer:
      "At Pentecost, the gift of tongues enabled believers to proclaim the gospel in real, known languages they had not learned. Paul lists tongues among the Spirit's gifts, while also instructing that it must be exercised in order, with interpretation, and never above intelligible teaching that builds up the whole church.",
    longAnswer:
      "In Acts 2, tongues appear as actual human languages, allowing the gospel to be understood immediately by people from many nations without a language barrier. Paul confirms tongues as one of several genuine gifts distributed by the Spirit for the church's benefit, but in 1 Corinthians 14 he places clear guardrails on its use in public worship: it should be interpreted so the whole congregation can be built up, exercised in turn rather than chaos, and never elevated above intelligible teaching and prophecy, which edify the church far more directly. Whether or not the specific gift continues in exactly its New Testament form, the underlying principle stands: any spiritual gift, including tongues, is meant to build up the church in an orderly, understandable way, not to draw attention to the individual or create confusion.",
    topics: ["Holy Spirit", "Church"],
    category: "Knowing God",
    scriptures: ["Acts 2:4-6", "1 Corinthians 12:7-11", "1 Corinthians 14:12-13, 40"],
    keywords: ["tongues", "speaking in tongues", "gift of tongues", "pentecost", "spiritual gifts"]
  },
  {
    id: "answer-dinosaurs",
    question: "Does the Bible mention dinosaurs or ancient prehistoric creatures?",
    shortAnswer:
      "The word 'dinosaur' does not appear in the Bible, but Job describes massive land and water creatures, Behemoth and Leviathan, in vivid detail. Scripture places the creation of all land animals within the same creation week as humanity, rather than millions of years earlier.",
    longAnswer:
      "Because the term 'dinosaur' was coined in the nineteenth century, Scripture naturally does not use it, but Job 40-41 describes Behemoth and Leviathan as enormous, powerful creatures unlike anything commonly seen today, which many readers connect to large ancient animals. Genesis places the creation of land animals and humanity within the same sixth day of the creation week, rather than separated by long ages, so any such creatures would have existed alongside early humanity rather than millions of years before. Their disappearance is often understood in light of the global Flood described in Genesis 6-9 and the dramatic climate changes that followed it. Scripture does not give exhaustive detail here, so some humility about specifics is appropriate, but its consistent framework places these creatures within a relatively recent, unified creation history.",
    topics: ["Creation", "Bible Study"],
    category: "Knowing God",
    scriptures: ["Job 40:15-24", "Job 41:1", "Genesis 1:24-25"],
    keywords: ["dinosaurs", "prehistoric creatures", "behemoth", "leviathan", "creation", "flood"]
  },
  {
    id: "answer-alcohol",
    question: "Does scripture forbid consuming alcohol, or is moderate drinking acceptable for Christians?",
    shortAnswer:
      "Scripture consistently and strongly warns against drunkenness and the dangers wine and strong drink bring, and even commends avoiding alcohol altogether as the wisest path. Because the body is a temple of the Holy Spirit meant to stay clear-headed for prayer, service, and self-control, abstaining entirely is the safest and most consistent application of these principles.",
    longAnswer:
      "Proverbs vividly warns against the sorrow, danger, and deception that come with strong drink, going so far as to counsel not even looking at wine when it sparkles in the cup. Priests were forbidden from drinking before entering the tabernacle so their judgment and service to God would stay clear, and Ephesians commands believers not to be drunk with wine, contrasting it with being filled with the Spirit. Since the body belongs to God as a temple of the Holy Spirit, and since alcohol can cloud judgment, harm health, and lead others into destructive habits, choosing total abstinence honors both the clear biblical warnings against drunkenness and the broader call to full self-control, a clear mind, and a body kept fit for God's service.",
    topics: ["Health", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Proverbs 23:29-32", "Ephesians 5:18", "1 Corinthians 6:19-20"],
    keywords: ["alcohol", "drinking", "wine", "drunkenness", "temperance", "self-control"]
  },
  {
    id: "answer-gambling",
    question: "Is participating in gambling or games of chance considered a sin?",
    shortAnswer:
      "The Bible never mentions gambling by name, but its consistent principles — trusting God's providence rather than chance, working honestly for what you have, contentment, and guarding against the love of money — all caution strongly against it.",
    longAnswer:
      "Scripture repeatedly warns that the love of money is a root of many kinds of evil, and that those eager to get rich fall into temptation and harmful desires. Gambling relies on chance and the hope of gaining at another person's loss rather than honest labor, and Proverbs observes that wealth gained quickly and carelessly tends to dwindle away. Ecclesiastes notes that those who love money are never satisfied by it, describing a restless cycle gambling often feeds. Instead, Scripture calls believers to trust God's provision, work diligently and honestly for their needs, hold money loosely with contentment, and avoid practices that stir greed or exploit others' losses for personal gain.",
    topics: ["Stewardship", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["1 Timothy 6:9-10", "Proverbs 13:11", "Ecclesiastes 5:10"],
    keywords: ["gambling", "lottery", "games of chance", "money", "greed", "stewardship"]
  },
  {
    id: "answer-premarital-sex",
    question: "What are the biblical boundaries regarding sexual intimacy before marriage?",
    shortAnswer:
      "Scripture reserves sexual intimacy for the covenant of marriage between husband and wife, calling unmarried believers to purity and self-control. Those who have crossed this boundary are offered genuine forgiveness and a renewed path of purity through grace.",
    longAnswer:
      "From the beginning, Genesis describes a man and woman becoming 'one flesh' within the covenant of marriage, and the New Testament reinforces this pattern by calling believers to abstain from sexual immorality and to control their bodies in holiness and honor rather than in the passion of uncontrolled desire. Hebrews states plainly that the marriage bed is undefiled but that God will judge sexual immorality outside of it, and Paul teaches that sexual union itself creates a profound, uniting bond meant to be reserved for marriage. This is never presented as a barrier to full acceptance for those who have already crossed this line; grace fully forgives, and believers are called forward into ongoing growth in purity, self-control, and honoring both their own body and a future spouse.",
    topics: ["Marriage and Family", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["1 Corinthians 6:18-20", "1 Thessalonians 4:3-8", "Hebrews 13:4"],
    keywords: ["premarital sex", "sexual purity", "fornication", "dating", "chastity", "marriage"]
  },
  {
    id: "answer-christ-descended-dead",
    question: "Did Christ descend into the realm of the dead during the period between His crucifixion and resurrection?",
    shortAnswer:
      "Scripture does not describe Jesus consciously journeying to a realm of the dead to preach between His crucifixion and resurrection. Passages sometimes read this way are better understood as describing His incarnation and burial, or His Spirit-empowered preaching through Noah generations earlier, consistent with death being an unconscious rest until the resurrection.",
    longAnswer:
      "Ephesians 4:9 describes Christ 'descending into the lower parts of the earth,' language most naturally understood as referring to His incarnation and burial — coming down to our mortal, earthly existence and the grave — rather than a literal journey to a place of conscious punishment. First Peter 3:18-20's mention of Christ preaching 'to the spirits in prison' fits naturally with Peter's own explanation elsewhere that the Spirit of Christ was at work through Noah, 'a preacher of righteousness,' warning the disobedient people of his day who are now, from our present vantage point, spirits awaiting final judgment. On the cross, Jesus committed His spirit to the Father and later told the thief he would be with Him 'in paradise,' language pointing to the certainty of the promise rather than a same-day conscious meeting, consistent with death being described elsewhere in Scripture as a sleep until the resurrection.",
    topics: ["State of the Dead", "Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["Ephesians 4:9-10", "1 Peter 3:18-20", "Luke 23:43, 46"],
    keywords: ["descended into hell", "harrowing of hell", "spirits in prison", "state of the dead", "crucifixion"]
  },
  {
    id: "answer-divorce-remarriage",
    question: "What are the scriptural grounds permitted for divorce and subsequent remarriage?",
    shortAnswer:
      "God's design is a lifelong marriage covenant, but Jesus permitted divorce in the case of sexual immorality breaking that covenant, and Paul added that a believer is not bound if an unbelieving spouse abandons the marriage. Beyond these narrow grounds, divorce is discouraged, though grace and restoration remain available to anyone who has been through one.",
    longAnswer:
      "Jesus taught that God's original design was for marriage to be a lifelong, one-flesh union, but He identified sexual immorality as grounds on which the marriage covenant could rightly be considered broken, permitting divorce in that situation. Paul, addressing a different scenario, taught that if an unbelieving spouse chooses to leave the marriage, the believing spouse is 'not bound' and is free, since God has called believers to peace rather than being forced to hold together what the other person has abandoned. Malachi's statement that God hates divorce reflects the real pain and brokenness divorce causes, not a condemnation of those who have suffered through it. Outside of these specific situations, Scripture consistently urges couples toward reconciliation, patience, and forgiveness, while also offering genuine grace, healing, and a renewed path forward to anyone who has already experienced divorce.",
    topics: ["Marriage and Family", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Matthew 19:3-9", "1 Corinthians 7:10-15", "Malachi 2:16"],
    keywords: ["divorce", "remarriage", "marriage", "adultery", "abandonment", "separation"]
  }
];

const state = {
  query: "",
  topic: "All"
};

const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");
const navSearchInput = document.querySelector("#nav-search-input");
const navSearchForm = document.querySelector("#nav-search-form");
const answersList = document.querySelector("#answers-list");
const resultMeta = document.querySelector("#result-meta");
const emptyState = document.querySelector("#empty-state");
const topicFilters = document.querySelector("#topic-filters");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#primary-menu");
const promiseText = document.querySelector("#promise-text");
const promiseReference = document.querySelector("#promise-reference");
const promisePrevious = document.querySelector("#promise-previous");
const promiseNext = document.querySelector("#promise-next");
const promiseShare = document.querySelector("#promise-share");
const promiseCopy = document.querySelector("#promise-copy");
const promiseStatus = document.querySelector("#promise-status");
const questionForm = document.querySelector("#question-form");
const questionInput = document.querySelector("#question-input");
const questionTopic = document.querySelector("#question-topic");
const questionEmail = document.querySelector("#question-email");
const questionStatus = document.querySelector("#question-status");
const questionResults = document.querySelector("#question-results");
const questionResultsTitle = document.querySelector("#question-results-title");
const questionResultsList = document.querySelector("#question-results-list");
const questionSubmissionEndpoint = window.WORD_OASIS_FORM_ENDPOINT || "";
const questionSubmissionEmailTo = window.WORD_OASIS_FORM_EMAIL_TO || "";

const biblePromises = [
  {
    text: "I will never leave you nor forsake you.",
    reference: "Hebrews 13:5"
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1"
  },
  {
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28"
  },
  {
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    reference: "2 Corinthians 12:9"
  },
  {
    text: "I am with you always, even to the end of the age.",
    reference: "Matthew 28:20"
  },
  {
    text: "The Lord is near to the brokenhearted and saves the crushed in spirit.",
    reference: "Psalm 34:18"
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9"
  },
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16"
  },
  {
    text: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7"
  },
  {
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6"
  },
  {
    text: "He restores my soul; he leads me in paths of righteousness for his name's sake.",
    reference: "Psalm 23:3"
  },
  {
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    reference: "John 14:27"
  },
  {
    text: "If God is for us, who can be against us?",
    reference: "Romans 8:31"
  },
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28"
  },
  {
    text: "The steadfast love of the Lord never ceases; his mercies never come to an end.",
    reference: "Lamentations 3:22"
  },
  {
    text: "Jesus Christ is the same yesterday and today and forever.",
    reference: "Hebrews 13:8"
  },
  {
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13"
  },
  {
    text: "The Lord will fight for you; you need only to be still.",
    reference: "Exodus 14:14"
  },
  {
    text: "His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.",
    reference: "2 Peter 1:3"
  },
  {
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    reference: "Matthew 7:7"
  },
  {
    text: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
    reference: "Hebrews 10:23"
  },
  {
    text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    reference: "Psalm 27:1"
  },
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11"
  },
  {
    text: "You are precious and honored in my sight, and I love you.",
    reference: "Isaiah 43:4"
  },
  {
    text: "The blood of Jesus, his Son, purifies us from all sin.",
    reference: "1 John 1:7"
  },
  {
    text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
    reference: "Colossians 3:15"
  }
];

let promiseIndex = 0;
let promiseRotation;

const topicIcons = {
  Salvation: `
    <path d="M12 2v20"></path>
    <path d="M5 8h14"></path>
  `,
  Faith: `
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
    <path d="M12 22V2"></path>
  `,
  Prayer: `
    <g transform="scale(0.75)" fill="currentColor" stroke="none">
      <path d="M25.063 15.214c-.458-1.03-.941-1.905-1.49-2.732l.043.068c-.174-.282-.348-.563-.518-.849-.807-1.36-1.51-2.448-2.215-3.425-.342-.479-.679-.897-1.037-1.294l.011.013c-.267-.326-.6-.587-.981-.763l-.017-.007a1.18 1.18 0 0 0-.433-.034l.005-.001c-.88.128-1.615.658-2.021 1.395l-.007.014c-.155.365-.245.79-.245 1.236 0 .496.111.967.311 1.387l-.008-.02 2.077 4.622c-1.166.027-2.102.979-2.102 2.149 0 .057.002.113.007.169v3.11l-.435 1.485-.435-1.485v-3.11c.004-.048.006-.104.006-.16 0-1.171-.936-2.123-2.1-2.148h-.002l2.072-4.613c.194-.404.307-.878.307-1.379 0-.445-.09-.87-.252-1.256l.008.021c-.413-.751-1.148-1.282-2.013-1.408l-.015-.002a1.18 1.18 0 0 0-.435.034l.005-.002c-.405.189-.744.457-1.01.787l-.004.005c-.342.379-.672.79-.979 1.22l-.028.042c-.707.977-1.411 2.064-2.216 3.424-.167.281-.34.561-.512.84-.509.762-.994 1.639-1.406 2.557l-.047.116c-.459 1.106-.726 2.39-.726 3.737 0 1.178.204 2.309.579 3.358l-.022-.07c.452 1.09.82 2.367 1.044 3.692l.015.107h-.69a.75.75 0 0 0-.75.75v3.211c0 .414.336.75.75.75h17.712a.75.75 0 0 0 .75-.75v-3.211a.75.75 0 0 0-.75-.75h-.691c.244-1.444.616-2.731 1.114-3.951l-.045.123c.347-.971.548-2.092.548-3.259 0-1.347-.267-2.632-.752-3.805l.024.066zM8.187 21.715c-.289-.823-.456-1.771-.456-2.758 0-1.143.224-2.234.63-3.231l-.021.057c.424-.948.871-1.753 1.379-2.514l-.039.062c.178-.287.355-.575.527-.865.78-1.318 1.461-2.369 2.139-3.307.305-.429.606-.804.926-1.16l-.01.011c.083-.089.184-.199.276-.28.31.075.566.267.724.525l.003.005c.059.168.092.363.092.565 0 .277-.064.539-.177.773l.005-.011-2.892 6.436a.75.75 0 0 0-.065.308v6.437a.75.75 0 0 0 1.5 0v-5.632c0-1.271 1.343-1.268 1.345 0v3.218c0 .074.011.146.032.213l-.001-.005 1.147 3.918v1.557H9.442c-.236-1.618-.642-3.074-1.207-4.449l.045.124zM24.113 21.686c-.522 1.258-.931 2.724-1.158 4.25l-.013.104h-5.902v-1.557l1.147-3.918a.75.75 0 0 0 .03-.208v-3.218c-.001-.969.784-1.019 1.118-.678.142.163.229.378.229.613 0 .023-.001.045-.002.067v5.632a.75.75 0 0 0 1.5 0v-6.437a.75.75 0 0 0-.066-.307l.002.005-2.896-6.446a1.8 1.8 0 0 1-.073-1.311l-.004.013c.16-.266.418-.46.721-.534l.008-.002c.094.084.201.199.295.303.303.337.597.704.871 1.087l.026.038c.676.938 1.357 1.988 2.139 3.309.174.293.354.582.531.872.467.697.914 1.5 1.294 2.338l.044.107c.386.939.61 2.029.61 3.172 0 .977-.164 1.916-.466 2.791l.018-.06z"></path>
    </g>
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
    <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
  `,
  Baptism: `
    <path d="M12 10L12 2"></path>
    <path d="M16 6L12 10L8 6"></path>
    <path d="M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15"></path>
    <path d="M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21"></path>
  `,
  "Marriage and Family": `
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <circle cx="9" cy="7" r="4"></circle>
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
    <path d="M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143"></path>
    <path d="M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143"></path>
    <path d="M14 19L22 19"></path>
    <path d="M10 19L2 19"></path>
    <path d="M12 21C12 19.8954 12.8954 19 14 19"></path>
    <path d="M12 21C12 19.8954 11.1046 19 10 19"></path>
  `,
  Health: `
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
  `
};

const topicIconFiles = {
  Law: "icons/law.svg",
  Sanctuary: "icons/sanctuary.svg",
  "Three Angels": "icons/three-angels.svg",
  Prayer: "icons/praying.svg"
};

function topicIconMarkup(topic, className) {
  const file = topicIconFiles[topic];
  if (file) {
    return `<img src="${file}" alt="" class="${className}-image">`;
  }

  const content = topicIcons[topic] || topicIcons.Faith;
  return `<svg viewBox="0 0 24 24" focusable="false">${content}</svg>`;
}

function addTopicIcons() {
  document.querySelectorAll(".topic-card").forEach((card) => {
    // Skip cards that were pre-rendered with an icon already (static SEO markup)
    // so re-running this on load never inserts a duplicate icon.
    if (card.querySelector(".topic-icon")) {
      return;
    }
    const topic = card.dataset.topic;
    card.insertAdjacentHTML(
      "afterbegin",
      `<span class="topic-icon" aria-hidden="true">${topicIconMarkup(topic, "topic-icon")}</span>`
    );
  });
}

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

function renderTopicFilters() {
  topicFilters.innerHTML = "";

  allTopics().forEach((topic) => {
    const count = topic === "All" ? answers.length : answers.filter((answer) => answer.topics.includes(topic)).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = topic === state.topic ? "active" : "";
    button.dataset.topic = topic;
    const icon = topic === "All" ? "" : topicIconMarkup(topic, "filter-topic-icon");
    button.innerHTML = `
      <span class="filter-topic-label">
        ${icon ? `<span class="filter-topic-icon" aria-hidden="true">${icon}</span>` : ""}
        <span>${topic}</span>
      </span>
      <strong>${count}</strong>
    `;
    topicFilters.append(button);
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

  const response = await fetch(questionSubmissionEndpoint, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Submission failed with status ${response.status}`);
  }

  const result = await response.json().catch(() => ({}));
  return { enabled: true, result };
}

async function handleQuestionSubmit(event) {
  event.preventDefault();
  const question = questionInput.value.trim();
  const email = questionEmail.value.trim();
  const topic = questionTopic.value || "General";
  const matches = relatedAnswers(question, questionTopic.value);

  questionResults.hidden = false;
  questionResultsList.innerHTML = matches.map(answerTemplate).join("");
  if (matches.length) {
    questionResultsTitle.textContent = `Related answers for "${question}"`;
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

  if (!question) {
    questionStatus.textContent = "Please enter a question before submitting.";
    questionResults.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const payload = {
    question,
    topic,
    email,
    source: "word-oasis",
    submittedAt: new Date().toISOString(),
    relatedMatches: matches.map((answer) => answer.question),
    notificationEmail: questionSubmissionEmailTo || ""
  };

  if (!questionSubmissionEndpoint) {
    questionStatus.textContent = "Your question is ready for local search. Add a Google Apps Script endpoint in the site config to enable email and spreadsheet logging.";
    questionResults.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  questionStatus.textContent = "Sending your question to the email and spreadsheet log…";

  try {
    const result = await submitQuestionToSheet(payload);
    if (result.enabled) {
      questionStatus.textContent = "Your question was sent for follow-up and recorded in the spreadsheet log.";
    }
  } catch (error) {
    console.error("Question submission failed", error);
    questionStatus.textContent = "Your question was found locally, but the email/spreadsheet log could not be sent right now.";
  }

  questionResults.scrollIntoView({ behavior: "smooth", block: "start" });
}

function answerTemplate(answer) {
  const scriptureInlineText = answer.scriptures.join(", ");

  return `
    <article class="answer-card" id="${answer.id}">
      <div class="answer-tags">
        ${answer.topics.map((topic) => `<button type="button" class="tag-link" data-topic="${topic}">${topic}</button>`).join("")}
      </div>
      <h3>${answer.question}</h3>
      <p class="answer-short">${answer.shortAnswer}</p>
      <div class="answer-long" hidden>
        <p>${answer.longAnswer}</p>
        <p>${biblicalPerspective(answer)}</p>
        <p class="scripture-in-text">This conclusion is grounded in the Bible, especially in ${scriptureInlineText}.</p>
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

function currentPromise() {
  return biblePromises[promiseIndex];
}

function renderPromise() {
  const promise = currentPromise();
  promiseText.textContent = promise.text;
  promiseReference.textContent = promise.reference;
  promiseStatus.textContent = "";
}

function advancePromise(direction = 1) {
  promiseIndex = (promiseIndex + direction + biblePromises.length) % biblePromises.length;
  renderPromise();
}

function promiseShareText() {
  const promise = currentPromise();
  return `"${promise.text}" — ${promise.reference}\n\nFind more Bible answers at ${window.location.href.split("#")[0]}`;
}

async function sharePromise() {
  const text = promiseShareText();
  if (navigator.share) {
    await navigator.share({ title: "Bible Promise", text, url: window.location.href.split("#")[0] });
    promiseStatus.textContent = "Promise ready to share.";
    return;
  }

  await copyPromise();
  promiseStatus.textContent = "Sharing is not available here, so the promise was copied instead.";
}

async function copyPromise() {
  try {
    await navigator.clipboard.writeText(promiseShareText());
    promiseStatus.textContent = "Promise copied to your clipboard.";
  } catch (error) {
    promiseStatus.textContent = "Could not copy automatically. Select the promise text to copy it.";
  }
}

function renderAnswers() {
  const results = filteredAnswers();
  answersList.innerHTML = results.map(answerTemplate).join("");
  emptyState.hidden = results.length > 0;

  const topicText = state.topic === "All" ? "all topics" : state.topic;
  const queryText = state.query ? ` matching "${state.query}"` : "";
  resultMeta.textContent = `${results.length} answer${results.length === 1 ? "" : "s"} in ${topicText}${queryText}`;
}

function setSearch(value) {
  state.query = value;
  searchInput.value = value;
  navSearchInput.value = value;
  renderAnswers();
  scrollToResults();
}

function setTopic(topic) {
  state.topic = topic;
  renderTopicFilters();
  renderAnswers();
  scrollToResults();
}

const perspectivesByCategory = {
  "Faith and Salvation":
    "Salvation is entirely by grace through faith in Christ. His atoning sacrifice, heavenly ministry, and intercession are the foundation of assurance; obedience, Sabbath faithfulness, and loving service are the fruit of a redeemed life, never a way to purchase acceptance with God.",
  "Hope and Prophecy":
    "The great controversy reveals God's character as Christ ministers as our High Priest in the heavenly sanctuary. The dead await the resurrection, Christ's return will be visible and personal, and prophecy calls believers to faithful mission rather than date-setting or fear.",
  "Knowing God":
    "These themes are best read through the whole testimony of Scripture, emphasizing God's self-revelation in Christ, the active ministry of the Holy Spirit, and the restoration of the whole person. Bible study should lead to a changed life, compassionate service, and a clearer picture of God's loving character.",
  "Life and Relationships":
    "Discipleship applies the gospel to the whole life: body, mind, relationships, work, finances, and worship. Healthy choices and faithful habits do not earn salvation; they are grateful stewardship of the life God has entrusted to us and practical ways to serve others."
};

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
    "The final fire is the second death: the complete and irreversible destruction of sin and unrepentant sinners, not eternal conscious torment. This preserves both God's justice and His character of love, and it leaves the universe truly free from pain, rebellion, and death."
};

function biblicalPerspective(answer) {
  return perspectivesByAnswer[answer.id] || perspectivesByCategory[answer.category];
}

function scrollToResults() {
  // Jump straight to the results, skipping past the topic filter list on
  // mobile where it stacks above the answers instead of beside them.
  document.querySelector("#results-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  resultMeta.classList.remove("flash");
  // Force reflow so the animation can restart on repeated clicks.
  void resultMeta.offsetWidth;
  resultMeta.classList.add("flash");
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setSearch(searchInput.value);
});

navSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setSearch(navSearchInput.value);
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

questionForm.addEventListener("submit", handleQuestionSubmit);

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  navSearchInput.value = event.target.value;
  renderAnswers();
});

navSearchInput.addEventListener("input", (event) => {
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

promiseShare.addEventListener("click", async () => {
  try {
    await sharePromise();
  } catch (error) {
    promiseStatus.textContent = "Sharing was canceled.";
  }
});

promiseCopy.addEventListener("click", copyPromise);

function restartPromiseRotation() {
  window.clearInterval(promiseRotation);
  promiseRotation = window.setInterval(() => advancePromise(), 10000);
}

renderPromise();
restartPromiseRotation();

function toggleReadMore(button) {
  const card = button.closest(".answer-card");
  const longAnswer = card.querySelector(".answer-long");
  const isOpen = !longAnswer.hidden;

  longAnswer.hidden = isOpen;
  button.setAttribute("aria-expanded", String(!isOpen));
  button.textContent = isOpen ? "Read the full answer" : "Show shorter answer";
}

/* Bible verse modal: fetches public-domain verse text (World English Bible)
   from bible-api.com so tapping any reference works on desktop and mobile. */
const verseModal = document.querySelector("#verse-modal");
const verseModalTitle = document.querySelector("#verse-modal-title");
const verseModalBody = document.querySelector("#verse-modal-body");
const verseModalClose = document.querySelector("#verse-modal-close");
const verseCache = new Map();
let lastFocusedElement = null;

async function openVerseModal(reference) {
  lastFocusedElement = document.activeElement;
  verseModalTitle.textContent = reference;
  verseModalBody.innerHTML = `<p class="verse-status">Loading verse...</p>`;
  verseModal.hidden = false;
  document.body.classList.add("modal-open");
  verseModalClose.focus();

  try {
    const text = await fetchVerseText(reference);
    verseModalBody.innerHTML = `<p class="verse-text">${text}</p><p class="verse-credit">World English Bible (public domain)</p>`;
  } catch (error) {
    verseModalBody.innerHTML = `<p class="verse-status">Could not load this verse right now. Please check your connection and try again.</p>`;
  }
}

function closeVerseModal() {
  verseModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

async function fetchVerseText(reference) {
  if (verseCache.has(reference)) {
    return verseCache.get(reference);
  }

  const query = encodeURIComponent(reference).replace(/%20/g, "+");
  const response = await fetch(`https://bible-api.com/${query}`);

  if (!response.ok) {
    throw new Error("Verse lookup failed");
  }

  const data = await response.json();
  const text = data.text.trim().replace(/\s+/g, " ");
  verseCache.set(reference, text);
  return text;
}

verseModalClose.addEventListener("click", closeVerseModal);

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

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get("q");
if (initialQuery) {
  state.query = initialQuery;
  searchInput.value = initialQuery;
  navSearchInput.value = initialQuery;
}

addTopicIcons();
renderTopicFilters();
populateQuestionTopics();
renderAnswers();
