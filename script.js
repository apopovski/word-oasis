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
  },
  {
    id: "answer-baptism-meaning",
    question: "What does baptism symbolize in the Bible?",
    shortAnswer:
      "Baptism is a public confession of faith in Jesus, symbolizing death to the old life, burial with Christ, and rising to walk in newness of life.",
    longAnswer:
      "The New Testament presents baptism as a meaningful response to the gospel rather than a casual religious ritual. Going down into the water pictures burial with Christ, and coming up from the water pictures resurrection into a new life shaped by His grace. Baptism does not earn salvation, but it publicly identifies a believer with Jesus, His death and resurrection, and His people. In Acts, baptism follows repentance and faith as people receive the message of Christ and openly begin the life of discipleship.",
    topics: ["Baptism", "Salvation", "Faith"],
    category: "Faith and Salvation",
    scriptures: ["Romans 6:3-4", "Acts 2:38", "Matthew 28:19-20"],
    keywords: ["baptism meaning", "immersion", "new life", "repentance", "discipleship"]
  },
  {
    id: "answer-forgiving-yourself",
    question: "How can I forgive myself after I have sinned?",
    shortAnswer:
      "Self-forgiveness begins by trusting that God's forgiveness in Christ is greater than guilt. Confession, repentance, and receiving grace allow a believer to move forward without denying the seriousness of sin.",
    longAnswer:
      "Many people continue punishing themselves long after they have confessed sin to God, but Scripture directs the repentant heart to the sufficiency of Christ's mercy. Genuine repentance does not minimize wrongdoing; it agrees with God about sin and turns toward Him for cleansing. First John promises that God is faithful and just to forgive and cleanse those who confess. When God forgives, continuing to live under condemnation can become a refusal to trust His grace. Healthy self-forgiveness means making things right where possible, learning from failure, accepting needed accountability, and walking forward in the freedom Christ gives.",
    topics: ["Forgiveness", "Salvation", "Comfort", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["1 John 1:9", "Romans 8:1", "Psalm 103:12"],
    keywords: ["forgive myself", "guilt", "shame", "confession", "repentance", "grace"]
  },
  {
    id: "answer-great-controversy-meaning",
    question: "What is the great controversy in the Bible?",
    shortAnswer:
      "The great controversy is the Bible's picture of the conflict between Christ and Satan, truth and deception, love and rebellion, with God's character ultimately vindicated before the universe.",
    longAnswer:
      "Scripture describes more than isolated human struggles; it reveals a larger conflict behind history. Satan's rebellion began with pride and accusation against God's character, and earth became the place where sin's consequences are exposed and God's love is revealed most clearly in Christ. The cross shows that God wins not by coercion but by self-sacrificing love. Until evil is finally removed, believers are called to faithfulness, discernment, prayer, and confidence that Christ has already secured the outcome. This framework helps explain suffering without blaming God as the author of evil.",
    topics: ["Great Controversy", "Prophecy", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 12:7-12", "Genesis 3:15", "John 12:31-32"],
    keywords: ["great controversy", "cosmic conflict", "satan", "evil", "spiritual warfare", "god's character"]
  },
  {
    id: "answer-law-and-grace",
    question: "How do law and grace work together in the Christian life?",
    shortAnswer:
      "Grace saves sinners through faith in Christ, while God's law shows what love looks like. Obedience is the fruit of salvation, not the price paid to receive it.",
    longAnswer:
      "The Bible never presents God's grace and God's law as enemies. Grace forgives, restores, and writes God's will on the heart; the law reveals God's character and shows what love for God and neighbor looks like in practical life. Legalism tries to use obedience as a ladder to earn acceptance, but the gospel teaches that acceptance comes through Christ alone. At the same time, grace does not make rebellion desirable. The Spirit leads believers into willing obedience because they have already been loved, rescued, and made new.",
    topics: ["Law", "Salvation", "Christian Living", "Faith"],
    category: "Faith and Salvation",
    scriptures: ["Ephesians 2:8-10", "Romans 3:31", "John 14:15"],
    keywords: ["law and grace", "obedience", "legalism", "commandments", "faith", "gospel"]
  },
  {
    id: "answer-sanctuary-today",
    question: "Why does the sanctuary message matter today?",
    shortAnswer:
      "The sanctuary message matters because it shows how God deals with sin through Christ's sacrifice, priestly ministry, judgment, cleansing, and final restoration.",
    longAnswer:
      "The earthly sanctuary was a living illustration of the gospel. Its sacrifices pointed forward to Jesus' death, its priestly ministry pointed to His intercession, and its Day of Atonement pointed to God's final work of cleansing and judgment. This message matters today because it gives believers assurance that Christ's ministry did not end at the cross; He continues to apply the benefits of His sacrifice, represent His people, and prepare the universe for the complete end of sin. The sanctuary keeps salvation centered on Jesus from beginning to end.",
    topics: ["Sanctuary", "Salvation", "Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["Hebrews 4:14-16", "Hebrews 8:1-2", "Daniel 8:14"],
    keywords: ["sanctuary message", "atonement", "high priest", "heavenly sanctuary", "judgment", "cleansing"]
  },
  {
    id: "answer-ready-for-second-coming",
    question: "How can I be ready for the Second Coming of Jesus?",
    shortAnswer:
      "Readiness for Jesus' return is not date-setting or fear. It is an active relationship with Christ that shows itself in faith, watchfulness, obedience, service, and hope.",
    longAnswer:
      "Jesus repeatedly warned His followers to stay awake, not because they should live in panic, but because discipleship can become sleepy, distracted, or careless. Readiness begins with trusting Christ now, receiving His grace, and staying connected to Him daily. It also includes practical faithfulness: forgiving others, serving people in need, sharing the gospel, and living with eternity in view. Prophecy is meant to strengthen hope and loyalty, not produce speculation. The safest preparation for Christ's return is a surrendered life with Him today.",
    topics: ["Second Coming", "Prophecy", "Christian Living", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Matthew 24:42-44", "Luke 21:34-36", "Titus 2:11-13"],
    keywords: ["ready for second coming", "watchfulness", "Jesus return", "end times", "prepared", "hope"]
  },
  {
    id: "answer-three-angels-everlasting-gospel",
    question: "Why are the three angels' messages called the everlasting gospel?",
    shortAnswer:
      "The three angels' messages are called the everlasting gospel because their warnings are centered on the good news of worshiping the Creator, trusting Jesus, and remaining faithful before He returns.",
    longAnswer:
      "Revelation 14 begins with the everlasting gospel going to every nation, tribe, language, and people. The messages include urgent warnings, but they are not disconnected from grace. They call the world away from false worship and confusion because God desires people to receive truth, freedom, and salvation in Christ. The first angel points to the Creator, the second exposes Babylon's spiritual deception, and the third warns against coerced allegiance to powers opposed to God. The closing picture is a faithful people who keep God's commandments and hold to faith in Jesus, showing that the final message is both truth-filled and Christ-centered.",
    topics: ["Three Angels", "Prophecy", "Faith", "Law"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 14:6-12", "Matthew 24:14", "John 14:6"],
    keywords: ["everlasting gospel", "three angels messages", "Revelation 14", "worship", "Babylon", "faith of Jesus"]
  },
  {
    id: "answer-depression",
    question: "What does the Bible say to someone struggling with depression?",
    shortAnswer:
      "Scripture gives room for deep sorrow while pointing the hurting person toward God's nearness, honest prayer, supportive community, and patient hope.",
    longAnswer:
      "The Bible does not pretend that faithful people never experience darkness. Elijah, David, Jeremiah, and others expressed exhaustion, grief, and despair honestly before God. Scripture invites lament rather than denial, reminding the suffering person that God is near to the brokenhearted and attentive to cries for help. Depression should never be treated as a simple spiritual failure; wise care may include prayer, Scripture, trusted friends, pastoral support, counseling, and medical help when needed. Hope often returns gradually, but God's presence is not limited to seasons when emotions feel strong.",
    topics: ["Comfort", "Prayer", "Health", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Psalm 34:18", "1 Kings 19:4-8", "Psalm 42:11"],
    keywords: ["depression", "sadness", "mental health", "despair", "hope", "emotional pain"]
  },
  {
    id: "answer-unanswered-prayer",
    question: "Why does God sometimes seem silent when I pray?",
    shortAnswer:
      "God's silence does not mean absence or rejection. Scripture teaches believers to keep praying, examine the heart, trust God's timing, and rest in His wisdom.",
    longAnswer:
      "Many prayers in Scripture include seasons of waiting, confusion, and apparent silence. The Psalms often ask how long God will delay, showing that honest questions can be part of real faith. Sometimes prayer is hindered by cherished sin, selfish motives, or broken relationships that need attention; other times the delay is not explained, and believers are simply invited to trust God's character. Jesus Himself prayed in agony and surrendered to the Father's will. God's answers may be yes, no, wait, or a deeper work than the person first asked for, but His silence is never proof that He has stopped caring.",
    topics: ["Prayer", "Faith", "Comfort"],
    category: "Knowing God",
    scriptures: ["Psalm 13:1-2", "Luke 18:1", "1 John 5:14"],
    keywords: ["unanswered prayer", "God silent", "waiting", "prayer delay", "trust", "faith"]
  },
  {
    id: "answer-communion",
    question: "What is the meaning of the Lord's Supper or Communion?",
    shortAnswer:
      "Communion remembers Christ's sacrifice, proclaims His death, renews faith in His grace, and points forward to His return.",
    longAnswer:
      "Jesus gave the bread and cup as a memorial of His body given and His blood poured out for sinners. Communion is not an empty tradition; it invites believers to remember the cost of salvation, receive again the assurance of grace, examine the heart, and renew unity with other believers. Paul says that every time Christians eat the bread and drink the cup, they proclaim the Lord's death until He comes. This means Communion looks backward to the cross, inward to repentance and faith, outward to fellowship, and forward to Christ's return.",
    topics: ["Church", "Salvation", "Faith"],
    category: "Faith and Salvation",
    scriptures: ["Luke 22:19-20", "1 Corinthians 11:23-26", "John 6:35"],
    keywords: ["communion", "lord's supper", "bread and cup", "foot washing", "church", "cross"]
  },
  {
    id: "answer-clean-unclean-foods",
    question: "Does the Bible still distinguish between clean and unclean foods?",
    shortAnswer:
      "Scripture identifies clean and unclean animals before Sinai and connects wise eating with holiness, health, and honoring God with the body.",
    longAnswer:
      "The clean and unclean distinction appears as early as Noah, long before the ceremonial laws given through Moses. Leviticus later gives detailed instruction about which animals were considered clean for food, and the New Testament never presents unclean animals as newly healthy or spiritually beneficial to eat. Passages sometimes used to erase the distinction are better read in context as addressing human traditions, Gentile inclusion, or food offered to idols rather than redefining unclean animals as clean. Christians are not saved by diet, but caring for the body as God's temple makes food choices part of grateful stewardship.",
    topics: ["Health", "Law", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Genesis 7:2", "Leviticus 11:1-8", "1 Corinthians 10:31"],
    keywords: ["clean and unclean foods", "diet", "pork", "health message", "Leviticus 11", "food laws"]
  },
  {
    id: "answer-family-worship",
    question: "How can a family worship God together at home?",
    shortAnswer:
      "Family worship can be simple: read Scripture, pray together, sing or share gratitude, and talk about how God's Word applies to daily life.",
    longAnswer:
      "The Bible pictures faith being taught in the ordinary rhythms of home life, not only during formal worship services. Family worship does not need to be long or complicated to be meaningful. A short passage, a question everyone can answer, prayer for real needs, and a moment of thanksgiving can shape the atmosphere of a home over time. Parents are called to teach diligently, but children also learn from seeing humility, forgiveness, and consistency. The goal is not performance; it is creating regular space for the family to remember God together.",
    topics: ["Marriage and Family", "Prayer", "Bible Study", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Deuteronomy 6:6-7", "Joshua 24:15", "Psalm 78:4"],
    keywords: ["family worship", "home worship", "children", "parents", "devotions", "prayer"]
  },
  {
    id: "answer-spiritual-warfare",
    question: "How should Christians understand spiritual warfare?",
    shortAnswer:
      "Spiritual warfare is real, but believers stand in Christ through truth, righteousness, faith, Scripture, prayer, and dependence on God's strength.",
    longAnswer:
      "The Bible teaches that Christian life takes place within a real conflict against spiritual forces of evil, but it does not encourage fear or fascination with darkness. Ephesians points believers to the armor of God: truth, righteousness, the gospel of peace, faith, salvation, the Word of God, and prayer. The center of spiritual warfare is loyalty to Christ in ordinary life: resisting temptation, rejecting deception, forgiving others, praying faithfully, and trusting God's promises. Christians fight from Christ's victory, not for a victory they must create on their own.",
    topics: ["Great Controversy", "Faith", "Prayer", "Christian Living"],
    category: "Hope and Prophecy",
    scriptures: ["Ephesians 6:10-18", "James 4:7", "Revelation 12:11"],
    keywords: ["spiritual warfare", "armor of God", "devil", "temptation", "prayer", "victory"]
  },
  {
    id: "answer-mark-of-beast",
    question: "What is the mark of the beast in Revelation?",
    shortAnswer:
      "The mark of the beast represents final allegiance to false worship and human authority in opposition to God's commandments and faith in Jesus.",
    longAnswer:
      "Revelation describes a final conflict over worship, loyalty, and authority. The mark of the beast should be understood in contrast with the seal of God: one reflects allegiance to a system opposed to God's authority, while the other reflects loyalty to the Creator. The issue is not a random barcode, microchip, or secret technology; it is worship shaped by coercion, deception, and rejection of God's commandments. Revelation's warning is serious, but it is given in mercy so people can choose Christ, receive the everlasting gospel, and stand faithful through His power.",
    topics: ["Prophecy", "Three Angels", "Law", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 13:16-17", "Revelation 14:9-12", "Revelation 7:2-3"],
    keywords: ["mark of the beast", "seal of God", "Revelation 13", "false worship", "end times", "commandments"]
  },
  {
    id: "answer-daily-bible-reading",
    question: "Why is daily Bible reading important?",
    shortAnswer:
      "Daily Bible reading keeps the heart rooted in God's voice, renews the mind, strengthens faith, and gives wisdom for ordinary decisions.",
    longAnswer:
      "Scripture describes God's Word as light, food, seed, and a sword because it shapes the inner life in ways people cannot produce by willpower alone. Regular Bible reading helps believers recognize God's character, test ideas, resist temptation, and remember promises when feelings shift. The goal is not checking off a spiritual task, but listening to God with a teachable heart. Even a small daily portion, read prayerfully and applied honestly, can build long-term spiritual stability and deepen love for Christ.",
    topics: ["Bible Study", "Faith", "Christian Living"],
    category: "Knowing God",
    scriptures: ["Psalm 119:105", "Matthew 4:4", "2 Timothy 3:16-17"],
    keywords: ["daily Bible reading", "devotions", "Scripture study", "spiritual growth", "God's Word"]
  },
  {
    id: "answer-why-get-baptized",
    question: "Why should I be baptized if I already believe in Jesus?",
    shortAnswer:
      "Baptism is not a substitute for faith but its public expression — a burial of the old life and a rising to walk in newness of life with Christ.",
    longAnswer:
      "Belief and baptism work together rather than competing for importance. Jesus Himself was baptized to fulfill righteousness, and He commanded His followers to baptize disciples as part of making them. Paul describes baptism by immersion as a picture of the gospel itself: going under the water pictures being buried with Christ, and coming up pictures rising to a new life empowered by the Spirit. It is a public, obedient response to faith already at work in the heart, not a private feeling kept to oneself, and it marks the believer's identity as belonging to Christ.",
    topics: ["Baptism", "Faith", "Christian Living"],
    category: "Faith and Salvation",
    scriptures: ["Romans 6:3-4", "Matthew 28:19", "Acts 2:38"],
    keywords: ["baptism", "immersion", "new life", "public profession", "obedience"]
  },
  {
    id: "answer-baptism-age",
    question: "Is there a right age to be baptized?",
    shortAnswer:
      "Scripture does not set a fixed age; baptism follows a personal, understood decision to repent and trust Christ, whether that comes early or later in life.",
    longAnswer:
      "The New Testament pattern for baptism follows belief, not birth or family tradition alone. Every baptism recorded in Acts follows a person hearing the gospel, understanding it, and choosing to respond. Because of this, readiness matters more than a specific number: a child, teen, or adult can be baptized once they grasp what it means to repent, trust Jesus as Savior, and commit to following Him. Parents, mentors, and church leaders can help someone weigh that decision honestly rather than rushing it or delaying it out of fear.",
    topics: ["Baptism", "Church", "Faith"],
    category: "Faith and Salvation",
    scriptures: ["Acts 8:36-37", "Acts 16:31-33", "Mark 16:16"],
    keywords: ["baptism age", "children", "believer's baptism", "decision", "commitment"]
  },
  {
    id: "answer-sanctuary-meaning",
    question: "What is the meaning of the sanctuary in the Bible?",
    shortAnswer:
      "The Old Testament sanctuary was a visual gospel, teaching how sin is confessed, atoned for, and ultimately removed through the work of Jesus Christ.",
    longAnswer:
      "God instructed Israel to build a sanctuary so He could dwell among His people and teach them, in pictures they could see and touch, how salvation works. Its furniture, sacrifices, and priestly service illustrated substitution, cleansing, mediation, and final judgment. The New Testament identifies Jesus as the reality behind every sanctuary symbol: He is the sacrifice, the High Priest, and the one who ministers on behalf of sinners. Understanding the sanctuary helps believers see the gospel as an unfolding story rather than an isolated event, one that moves toward the final removal of sin altogether.",
    topics: ["Sanctuary", "Salvation", "Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["Hebrews 8:1-2", "Hebrews 9:11-12", "Exodus 25:8"],
    keywords: ["sanctuary", "tabernacle", "high priest", "sacrifice", "atonement"]
  },
  {
    id: "answer-day-of-atonement",
    question: "What was the Day of Atonement and why does it matter today?",
    shortAnswer:
      "The Day of Atonement pictured a final cleansing of sin's record, pointing forward to the judgment and to Christ's ongoing work of removing sin completely.",
    longAnswer:
      "Once a year, Israel's high priest entered the Most Holy Place to complete the cleansing of the sanctuary, removing the accumulated record of confessed sin from the camp. This yearly ceremony pictured something larger than a ritual: a coming day when sin's record would be fully and finally dealt with. The New Testament connects this pattern to Christ's ministry in heaven and to a future judgment, reminding believers that confessed sin is not just forgiven but will be completely blotted out, and calling for genuine repentance rather than casual religion.",
    topics: ["Sanctuary", "Prophecy", "Second Coming"],
    category: "Hope and Prophecy",
    scriptures: ["Leviticus 16:29-30", "Daniel 8:14", "Hebrews 9:23-24"],
    keywords: ["day of atonement", "judgment", "cleansing", "sanctuary", "Daniel 8"]
  },
  {
    id: "answer-forgive-myself",
    question: "How can I forgive myself after making a serious mistake?",
    shortAnswer:
      "Self-forgiveness grows out of receiving God's forgiveness fully — trusting that His pardon in Christ is complete, even when guilty feelings linger.",
    longAnswer:
      "Many people find it easier to believe God forgives others than to believe He has truly forgiven them. Scripture insists that confessed sin is genuinely removed, compared to a debt fully paid, not partially excused. Struggling to forgive yourself often means trusting your own judgment of your worth more than God's finished work on the cross. Practical steps include confessing specifically, receiving Scripture's promises as true regardless of feelings, making amends where possible, and refusing to let shame define an identity that God has already declared forgiven and renewed.",
    topics: ["Forgiveness", "Comfort", "Salvation"],
    category: "Life and Relationships",
    scriptures: ["1 John 1:9", "Psalm 103:12", "Romans 8:1"],
    keywords: ["self-forgiveness", "guilt", "shame", "grace", "past mistakes"]
  },
  {
    id: "answer-forgive-repeatedly",
    question: "Do I have to forgive someone who keeps hurting me?",
    shortAnswer:
      "Jesus calls believers to a forgiving heart without limit, while Scripture also allows wisdom, honest confrontation, and protective boundaries.",
    longAnswer:
      "When Peter asked whether forgiving seven times was enough, Jesus answered with a number meant to remove any ceiling on forgiveness. This does not mean ignoring harm or pretending a pattern of abuse is healthy; Scripture also commends confronting sin honestly and, where needed, limiting access to protect oneself or others. Forgiveness releases personal vengeance to God and refuses to let bitterness take root, but it can coexist with firm boundaries, seeking outside help, and waiting for evidence of real change before rebuilding trust.",
    topics: ["Forgiveness", "Christian Living", "Marriage and Family"],
    category: "Life and Relationships",
    scriptures: ["Matthew 18:21-22", "Luke 17:3-4", "Proverbs 4:23"],
    keywords: ["forgiveness", "boundaries", "repeated offense", "bitterness", "trust"]
  },
  {
    id: "answer-second-coming-signs",
    question: "What are the biblical signs that Jesus is coming soon?",
    shortAnswer:
      "Jesus described spiritual, social, and global signs — false christs, wars, disasters, and the gospel reaching the whole world — as markers that His return is near.",
    longAnswer:
      "In the Olivet Discourse, Jesus warned against being deceived by false messiahs while pointing to broader patterns: wars, famines, earthquakes, persecution, increasing lawlessness, and love growing cold. He also gave a positive sign of hope: the gospel being preached to the whole world as a witness before the end comes. These signs are meant to prepare hearts rather than fuel date-setting or fear; Jesus repeatedly emphasized watching, staying spiritually awake, and living faithfully rather than trying to calculate an exact time.",
    topics: ["Second Coming", "Prophecy", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Matthew 24:6-14", "Luke 21:25-28", "2 Timothy 3:1-5"],
    keywords: ["signs of the times", "second coming", "end times", "Olivet Discourse", "watching"]
  },
  {
    id: "answer-second-coming-how",
    question: "How will Jesus return according to the Bible?",
    shortAnswer:
      "Scripture describes Christ's return as literal, visible, audible, and glorious — every eye will see Him, unlike any secret or symbolic coming.",
    longAnswer:
      "The Bible consistently describes the second coming in concrete, public terms rather than a quiet or hidden event. Jesus will descend from heaven with a shout, the voice of an archangel, and the trumpet of God, and every eye will see Him, including those who rejected Him. This is the same Jesus who ascended visibly, and He will return in the same visible way, gathering His people and putting a final end to sin's reign on earth. Because it is so unmistakable, believers do not need to fear being fooled by counterfeit, secret, or localized claims of His arrival.",
    topics: ["Second Coming", "Prophecy", "Comfort"],
    category: "Hope and Prophecy",
    scriptures: ["1 Thessalonians 4:16-17", "Revelation 1:7", "Acts 1:11"],
    keywords: ["second coming", "return of Christ", "rapture", "trumpet", "every eye shall see"]
  },
  {
    id: "answer-great-controversy-theme",
    question: "What is the great controversy between good and evil?",
    shortAnswer:
      "The great controversy is the Bible's larger story of a conflict between Christ and Satan over God's character, love, and government, resolved fully at the cross and consummated at Christ's return.",
    longAnswer:
      "Scripture frames history as more than isolated events; it tells one long story of a challenge to God's character and government, begun with rebellion in heaven and continued through the fall, the flood, the exodus, the cross, and into the present. Satan's accusations claim that God's law is unjust and that His love cannot be trusted. The cross answers that challenge decisively, revealing both God's justice and His self-giving love, and it guarantees the eventual, complete end of evil when Christ returns and sin is no longer permitted to rise again.",
    topics: ["Great Controversy", "Prophecy", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 12:7-9", "Job 1:6-12", "1 John 3:8"],
    keywords: ["great controversy", "Satan", "problem of evil", "cosmic conflict", "God's character"]
  },
  {
    id: "answer-how-did-sin-begin",
    question: "How did sin and evil begin, according to the Bible?",
    shortAnswer:
      "Sin began with pride and rebellion in heaven, when a created angel desired God's authority for himself, and it spread to earth through the same temptation to distrust God.",
    longAnswer:
      "Scripture traces evil's origin not to God's creation but to the choice of a created being. Isaiah and Ezekiel describe, in poetic language layered over historical kings, the fall of a covering angel whose heart was lifted up with pride and who sought to exalt himself above God. That same rebellion reached earth in Eden, when the serpent tempted humanity with the identical lie: that God's authority and word could not be trusted. Understanding sin's origin as a moral choice rather than a divine flaw helps explain why God tolerates evil for a time — to fully expose its results — while still guaranteeing its final, complete end.",
    topics: ["Great Controversy", "Faith", "Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["Isaiah 14:12-14", "Ezekiel 28:14-17", "Genesis 3:1-5"],
    keywords: ["origin of sin", "fall of Lucifer", "rebellion", "great controversy", "evil"]
  },
  {
    id: "answer-state-of-dead-soul-sleep",
    question: "What happens to a person immediately after death, according to the Bible?",
    shortAnswer:
      "Scripture describes death as a sleep, an unconscious rest until the resurrection, rather than an immediate conscious journey to heaven or hell.",
    longAnswer:
      "The Bible repeatedly uses sleep as the picture for death: the dead \"know nothing,\" their thoughts perish, and Jesus described Lazarus's death as sleep before raising him. This does not diminish the reality of loss or grief, but it does reframe the timeline of the afterlife: the next conscious moment a believer experiences is the resurrection at Christ's return, when the dead in Christ rise first. This teaching offers comfort rather than fear, removing anxiety about the dead being tormented or watching over the living, and it points hope forward to a real, bodily reunion at the resurrection.",
    topics: ["State of the Dead", "Comfort", "Second Coming"],
    category: "Hope and Prophecy",
    scriptures: ["Ecclesiastes 9:5-6", "John 11:11-14", "1 Thessalonians 4:16"],
    keywords: ["state of the dead", "soul sleep", "death", "resurrection", "afterlife"]
  },
  {
    id: "answer-heaven-hell-timing",
    question: "Do people go to heaven or hell right when they die?",
    shortAnswer:
      "The Bible ties final rewards to the resurrection and judgment at Christ's return, not to an immediate transfer to eternal reward or punishment at death.",
    longAnswer:
      "Popular tradition often pictures souls going straight to heaven or hell at the moment of death, but Scripture consistently links reward and punishment to specific future events: the resurrection, the judgment, and Christ's return. Paul describes believers receiving their reward \"at that day,\" meaning Christ's appearing, not the moment of death. This framework protects a central biblical truth — final destinies are settled by God's righteous judgment, openly and fairly, rather than happening invisibly and immediately, and it keeps the resurrection, not death, as the true moment of transition.",
    topics: ["State of the Dead", "Second Coming", "Prophecy"],
    category: "Hope and Prophecy",
    scriptures: ["2 Timothy 4:8", "1 Corinthians 15:51-52", "Revelation 20:12-13"],
    keywords: ["heaven", "hell", "afterlife", "judgment day", "resurrection"]
  },
  {
    id: "answer-three-angels-first",
    question: "What is the message of the first angel in Revelation 14?",
    shortAnswer:
      "The first angel calls the world to fear God, give Him glory, and worship the Creator, announcing that the hour of judgment has arrived.",
    longAnswer:
      "Revelation 14 pictures an angel flying with the everlasting gospel to preach to every nation, tribe, tongue, and people. Its core call is worship: fearing God, giving Him glory, and recognizing Him as Creator of heaven, earth, sea, and springs of water. This message directly echoes the fourth commandment's language about the Sabbath as a memorial of creation, tying true worship to acknowledging God's authority as Maker rather than any substitute authority. The announcement that judgment has come is a call to take eternity seriously and choose loyalty to God before probation closes.",
    topics: ["Three Angels", "Prophecy", "Sabbath"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 14:6-7", "Exodus 20:11", "Psalm 96:9"],
    keywords: ["three angels messages", "first angel", "everlasting gospel", "worship the creator", "judgment hour"]
  },
  {
    id: "answer-three-angels-second-third",
    question: "What do the second and third angels' messages mean?",
    shortAnswer:
      "The second angel warns against corrupted worship systems called \"Babylon,\" and the third warns against the coming mark of the beast, calling people to patient faithfulness to Jesus.",
    longAnswer:
      "The second angel announces the fall of \"Babylon,\" a symbol for systems of worship and doctrine that mix truth with human tradition and reject God's authority. The third angel gives the most solemn warning in Scripture, cautioning against worshiping the beast or receiving its mark, and pairing that warning with a picture of God's patience and justice. Together, these three messages end with a description of God's faithful people: those who keep His commandments and hold to faith in Jesus, portraying steady loyalty to Christ as the true alternative to compromised worship.",
    topics: ["Three Angels", "Prophecy", "Law"],
    category: "Hope and Prophecy",
    scriptures: ["Revelation 14:8-12", "Revelation 18:4", "Revelation 12:17"],
    keywords: ["three angels messages", "babylon", "mark of the beast", "commandments of God", "faith of Jesus"]
  },
  {
    id: "answer-sabbath-still-for-today",
    question: "Is the Sabbath still meant to be kept today?",
    shortAnswer:
      "The Sabbath was established at creation for all humanity, kept by Jesus, and never revoked in Scripture — it remains a weekly gift of rest and worship.",
    longAnswer:
      "The Sabbath's origin predates the nation of Israel; God rested on the seventh day at creation and blessed it for humanity in general, long before the Ten Commandments were given at Sinai. Jesus kept the Sabbath as His regular custom and clarified its purpose as a gift for people, not a burden. Nothing in the New Testament records the Sabbath being moved to another day or abolished; instead, it continues to picture rest in God's finished work of creation and, ultimately, in Christ's finished work of redemption, offering a weekly rhythm of trust rather than restless self-reliance.",
    topics: ["Sabbath", "Law", "Creation"],
    category: "Knowing God",
    scriptures: ["Genesis 2:2-3", "Luke 4:16", "Mark 2:27-28"],
    keywords: ["sabbath", "seventh day", "rest", "creation", "Lord's day"]
  },
  {
    id: "answer-health-body-temple",
    question: "Why does the Bible call the body a temple, and does it affect daily choices?",
    shortAnswer:
      "Because the Holy Spirit dwells within believers, Scripture calls the body a temple, inviting care for physical health as part of honoring God, not as a means of earning salvation.",
    longAnswer:
      "Paul's description of the body as a temple of the Holy Spirit reframes ordinary choices — diet, rest, exercise, and substance use — as spiritual matters rather than purely personal preferences. This is never presented as a system for earning God's favor; salvation remains a gift received by faith. Instead, caring for physical health flows from gratitude, recognizing that a clear mind and a well-cared-for body support a life of service, worship, and discernment. Scripture's health principles, such as the original diet given at creation and rest built into the weekly rhythm, still offer wisdom for whole-person well-being today.",
    topics: ["Health", "Christian Living", "Creation"],
    category: "Life and Relationships",
    scriptures: ["1 Corinthians 6:19-20", "3 John 1:2", "Genesis 1:29"],
    keywords: ["health", "body as temple", "wellness", "diet", "stewardship of the body"]
  },
  {
    id: "answer-creation-six-days",
    question: "Did God really create the world in six literal days?",
    shortAnswer:
      "Scripture describes creation as six literal days followed by a seventh day of rest, a pattern later memorialized in the weekly Sabbath commandment.",
    longAnswer:
      "Genesis records creation using the same Hebrew word for \"day\" paired with \"evening and morning,\" the same pattern used elsewhere in Scripture for literal 24-hour days. The fourth commandment reinforces this reading by grounding the seven-day week in God's literal creation week, not in a symbolic or extended process. Believing in a recent, literal creation shapes more than a science debate; it affirms that human life has inherent dignity as God's direct handiwork, that death entered through sin rather than being part of God's original design, and that the weekly Sabbath rests on a real historical foundation.",
    topics: ["Creation", "Sabbath", "Faith"],
    category: "Knowing God",
    scriptures: ["Genesis 1:31-2:3", "Exodus 20:11", "Hebrews 11:3"],
    keywords: ["creation", "six days", "literal week", "Genesis", "origins"]
  },
  {
    id: "answer-baptism-mode-immersion",
    question: "Does baptism have to be by full immersion, or is sprinkling enough?",
    shortAnswer:
      "Every New Testament example of baptism describes going down into water and coming up out of it, matching the biblical picture of burial and resurrection with Christ.",
    longAnswer:
      "The Greek word behind \"baptize\" means to dip or immerse, and the New Testament's baptism scenes consistently describe candidates going down into the water and coming back up, such as Philip and the Ethiopian official both entering and leaving the water together. This matters because immersion is the visual heart of the symbol: burial with Christ under the water and rising to new life as the person emerges, a picture that sprinkling or pouring does not fully convey. Choosing immersion is not about ritual precision for its own sake, but about letting the physical act preach the same gospel truth Paul described in Romans.",
    topics: ["Baptism", "Salvation", "Bible Study"],
    category: "Faith and Salvation",
    scriptures: ["Acts 8:38-39", "Romans 6:4", "Matthew 3:16"],
    keywords: ["baptism mode", "immersion", "sprinkling", "burial with Christ", "Acts 8"]
  },
  {
    id: "answer-baptism-before-communion",
    question: "Do I need to be baptized before taking communion?",
    shortAnswer:
      "Communion in the New Testament is shared among believers who have already publicly identified with Christ, so baptism naturally comes first as the entry point into that shared fellowship.",
    longAnswer:
      "The Lord's Supper was instituted among Jesus' committed disciples, and the early church's pattern in Acts shows new believers being baptized and then continuing steadfastly in the apostles' teaching, fellowship, and the breaking of bread. Baptism marks a person's public entrance into the family of faith, while communion renews and celebrates that same covenant relationship together as a community. Someone still exploring faith is warmly welcome to attend and observe, but taking communion works best as a next step after baptism, not before it, so both symbols keep their full meaning.",
    topics: ["Baptism", "Church", "Christian Living"],
    category: "Faith and Salvation",
    scriptures: ["Acts 2:41-42", "1 Corinthians 11:23-26", "Acts 2:38"],
    keywords: ["communion", "Lord's supper", "baptism first", "church membership", "fellowship"]
  },
  {
    id: "answer-forgiveness-without-apology",
    question: "Can I forgive someone who never apologizes or admits wrong?",
    shortAnswer:
      "Yes — biblical forgiveness is something the offended person can extend regardless of whether the other person ever apologizes, though full reconciliation still requires two willing sides.",
    longAnswer:
      "Jesus forgave from the cross before anyone asked for it, praying for those who had not repented, which shows that forgiveness does not have to wait on someone else's apology. Releasing bitterness and the desire for revenge is a decision the wounded person can make before God even when the offender never acknowledges the harm done. This kind of forgiveness protects the heart from being controlled by resentment, though it is different from reconciliation, which requires honesty and change from both people and may never fully happen if the other person remains unrepentant.",
    topics: ["Forgiveness", "Comfort", "Christian Living"],
    category: "Life and Relationships",
    scriptures: ["Luke 23:34", "Mark 11:25", "Romans 12:19"],
    keywords: ["forgiveness without apology", "unrepentant", "bitterness", "letting go", "reconciliation"]
  },
  {
    id: "answer-forgiveness-god-vs-people",
    question: "Is forgiving God's forgiveness of me different from me forgiving other people?",
    shortAnswer:
      "God's forgiveness is the perfect model and the source of ours, but Scripture ties the two together directly, calling believers to forgive others because they have been forgiven so much themselves.",
    longAnswer:
      "God's forgiveness is uniquely complete: it cancels a debt no one could ever repay and is offered freely through Christ's sacrifice. Human forgiveness is patterned after that gift rather than equal to it, since people forgiving one another are finite and imperfect, and forgiveness between people does not remove guilt before God the way Christ's atonement does. Even so, Jesus links the two closely, teaching that those who have received God's mercy should extend mercy to others, and warning that an unforgiving spirit reveals a heart that has not truly grasped how much it has been forgiven.",
    topics: ["Forgiveness", "Salvation", "Faith"],
    category: "Life and Relationships",
    scriptures: ["Matthew 18:32-33", "Colossians 3:13", "Matthew 6:14-15"],
    keywords: ["God's forgiveness", "human forgiveness", "mercy", "unforgiving servant", "grace"]
  },
  {
    id: "answer-stewardship-time-talents",
    question: "What does biblical stewardship mean beyond just money?",
    shortAnswer:
      "Stewardship covers everything entrusted to us — time, abilities, health, relationships, and possessions — and calls believers to manage all of it faithfully as caretakers, not owners.",
    longAnswer:
      "The parable of the talents pictures a master entrusting differing amounts of resources to his servants and later evaluating how faithfully, not how much, they managed what they were given. This principle extends stewardship far beyond a checkbook: time is a limited gift that can be spent wisely or wasted, spiritual gifts and abilities are meant to serve the community rather than sit unused, and even health and relationships are entrusted responsibilities. Recognizing that everything ultimately belongs to God frees people from either hoarding out of fear or wasting resources carelessly, and instead invites purposeful, grateful management of a life that is not fully one's own.",
    topics: ["Stewardship", "Christian Living", "Church"],
    category: "Life and Relationships",
    scriptures: ["Matthew 25:14-30", "1 Peter 4:10", "Psalm 24:1"],
    keywords: ["stewardship", "talents", "time management", "spiritual gifts", "faithfulness"]
  },
  {
    id: "answer-sanctuary-daily-service",
    question: "What happened in the daily sanctuary service, and why does it matter?",
    shortAnswer:
      "The daily sacrifices in the sanctuary let individual Israelites confess sin and receive forgiveness through a substitute, foreshadowing Christ's continual ministry on behalf of every believer.",
    longAnswer:
      "Each day, individuals who had sinned brought an animal to the sanctuary, confessed their sin over it, and watched it die in their place, a vivid picture that sin's penalty is death and that forgiveness comes through a substitute. The priest would then carry the record of that sin, symbolically, into the Holy Place, showing that confessed sin was forgiven but still recorded until final cleansing. This daily rhythm points forward to Christ, who does not simply forgive once at the cross but continually intercedes for confessing believers, applying His sacrifice moment by moment as their eternal High Priest.",
    topics: ["Sanctuary", "Salvation", "Prayer"],
    category: "Hope and Prophecy",
    scriptures: ["Leviticus 4:27-31", "Hebrews 7:25", "1 John 2:1-2"],
    keywords: ["daily sacrifice", "sanctuary service", "substitute", "intercession", "high priest"]
  },
  {
    id: "answer-great-controversy-job",
    question: "What does the book of Job teach about the great controversy between good and evil?",
    shortAnswer:
      "Job reveals a heavenly courtroom scene where Satan accuses God's servant of serving God only for personal benefit, and Job's faithfulness through suffering answers that accusation.",
    longAnswer:
      "The opening chapters of Job pull back a curtain rarely seen elsewhere in Scripture, showing Satan appearing before God and challenging whether Job's loyalty is genuine or simply bought with blessing. God permits a test, within limits, and Job's continued trust through devastating loss demonstrates that love for God can be real even when circumstances turn painful. The book does not fully explain every reason for suffering, but it reframes the question: the great controversy is not only about human happiness, but about whether God's character and government deserve trust regardless of immediate circumstances.",
    topics: ["Great Controversy", "Comfort", "Faith"],
    category: "Hope and Prophecy",
    scriptures: ["Job 1:6-12", "Job 2:3-6", "Job 42:10-12"],
    keywords: ["book of Job", "great controversy", "suffering", "Satan's accusation", "trust in God"]
  },
  {
    id: "answer-bible-study-methods",
    question: "What is a good method for studying the Bible on my own?",
    shortAnswer:
      "Reliable Bible study combines prayerful dependence on the Holy Spirit with practical steps like reading in context, comparing Scripture with Scripture, and asking what a passage reveals about God and how to respond.",
    longAnswer:
      "Helpful Bible study starts with prayer, asking God to open understanding before opening the page, since Scripture is meant to be read in dependence on the Spirit who inspired it. Reading a passage in its context — the verses around it, the type of writing it is, and its place in the larger biblical story — protects against pulling a phrase out to mean something it never intended. Comparing Scripture with Scripture, letting clearer passages shed light on harder ones, guards against building a whole belief on a single ambiguous verse. Finally, good study always moves toward response: what does this passage show about God's character, and what does it ask of me today?",
    topics: ["Bible Study", "Holy Spirit", "Faith"],
    category: "Knowing God",
    scriptures: ["2 Timothy 2:15", "Acts 17:11", "Psalm 119:18"],
    keywords: ["Bible study methods", "hermeneutics", "context", "compare Scripture with Scripture", "personal devotions"]
  },
  {
    id: "answer-state-of-dead-spiritism",
    question: "Why does the Bible warn against consulting mediums or trying to contact the dead?",
    shortAnswer:
      "Scripture forbids consulting mediums because the dead are unconscious and cannot communicate, meaning such contact is either deception or a counterfeit spiritual encounter, not genuine contact with a departed loved one.",
    longAnswer:
      "The law given through Moses explicitly forbade consulting mediums or spiritists, and King Saul's disastrous attempt to contact Samuel through a medium is presented as an act of unfaithfulness that hastened his downfall. Because Scripture describes the dead as sleeping, unaware of anything happening in the world of the living, any voice or presence claiming to be a deceased person is not what it appears to be. This warning protects grieving people from being exploited or deceived, and it points them instead toward genuine comfort found in prayer, Scripture's promises, and the sure hope of the resurrection when loved ones in Christ will be reunited.",
    topics: ["State of the Dead", "Great Controversy", "Comfort"],
    category: "Hope and Prophecy",
    scriptures: ["Deuteronomy 18:10-12", "1 Samuel 28:6-7", "Isaiah 8:19-20"],
    keywords: ["mediums", "spiritism", "contacting the dead", "necromancy", "deception"]
  },
  {
    id: "answer-holy-spirit-gifts",
    question: "What are spiritual gifts, and how do I know mine?",
    shortAnswer:
      "Spiritual gifts are Spirit-given abilities distributed to believers to build up the church, discovered through serving, prayerful reflection, and the confirmation of a faith community.",
    longAnswer:
      "Paul describes a variety of spiritual gifts — teaching, encouragement, service, leadership, generosity, and more — given by the same Spirit to different people for the common good, like parts of one body serving a shared purpose. No believer receives every gift, and no gift is more \"spiritual\" than another when it is used to serve rather than to gain status. Discovering a gift usually happens through practice rather than abstract guessing: trying different forms of service, noticing where genuine fruit and encouragement follow, and listening to trusted believers who can recognize gifts that may be harder to see in oneself.",
    topics: ["Holy Spirit", "Church", "Christian Living"],
    category: "Knowing God",
    scriptures: ["1 Corinthians 12:4-11", "Romans 12:4-8", "1 Peter 4:10-11"],
    keywords: ["spiritual gifts", "Holy Spirit", "serving the church", "discovering your gift", "body of Christ"]
  },
  {
    id: "answer-church-leadership-structure",
    question: "Why does the church need organization and leadership if faith is personal?",
    shortAnswer:
      "Scripture treats the church as a body with different members and roles working together, so structure and leadership exist to serve unity and mission, not to replace a believer's personal relationship with God.",
    longAnswer:
      "Even in the New Testament's earliest days, the church quickly appointed leaders, elders, and deacons to care for practical needs, teach sound doctrine, and guard against confusion as the movement grew. Paul compares the church to a body with many parts, each serving a distinct function, which requires some coordination to work well together rather than in chaos. Organization is never meant to control someone's private walk with God; personal faith, prayer, and Bible study remain irreplaceable. Instead, healthy structure protects the community from division, supports consistent teaching, and multiplies the church's ability to serve and reach others.",
    topics: ["Church", "Christian Living", "Stewardship"],
    category: "Life and Relationships",
    scriptures: ["Acts 6:1-6", "1 Corinthians 12:12-14", "Titus 1:5"],
    keywords: ["church organization", "church leadership", "elders and deacons", "unity", "body of Christ"]
  },
  {
    id: "answer-sabbath-vs-sunday",
    question: "Why do some Christians worship on Saturday instead of Sunday?",
    shortAnswer:
      "Some Christians keep the seventh-day Sabbath because Scripture never records God changing it to Sunday, and Saturday remains the actual seventh day established at creation and reaffirmed in the Ten Commandments.",
    longAnswer:
      "The Bible consistently identifies the Sabbath as the seventh day of the week, corresponding to Saturday on the modern calendar, established at creation and written into the Ten Commandments as a memorial of God as Creator. Sunday observance developed gradually in later church history, but no New Testament passage records Christ or the apostles commanding believers to transfer worship to the first day. Choosing to keep the seventh-day Sabbath is, for many believers, less about calendar precision and more about honoring what Scripture actually establishes rather than what later tradition assumed, while still respecting fellow believers who gather on Sunday out of sincere conviction.",
    topics: ["Sabbath", "Law", "Bible Study"],
    category: "Knowing God",
    scriptures: ["Exodus 20:8-11", "Genesis 2:2-3", "Mark 2:27-28"],
    keywords: ["seventh-day Sabbath", "Sunday worship", "Saturday Sabbath", "day of rest", "Ten Commandments"]
  },
  {
    id: "answer-second-coming-imminent",
    question: "How can I live with hope if I do not know when Jesus will return?",
    shortAnswer:
      "Scripture encourages readiness rather than date-setting, teaching believers to live faithfully each day so that whenever Christ returns, they are found watching rather than caught off guard.",
    longAnswer:
      "Jesus deliberately said that no one knows the day or hour of His return, redirecting attention away from speculation and toward consistent, faithful living. The parables of the ten virgins and the faithful servant both picture readiness as an ongoing lifestyle of trust and obedience, not a last-minute scramble triggered by a predicted date. This uncertainty is actually presented as merciful: it keeps every generation living with expectant hope rather than either despair or complacency, trusting that God's timing is perfect even when the waiting feels long.",
    topics: ["Second Coming", "Faith", "Comfort"],
    category: "Hope and Prophecy",
    scriptures: ["Matthew 24:36", "Matthew 25:1-13", "1 Thessalonians 5:1-6"],
    keywords: ["waiting for Jesus", "readiness", "date-setting", "parable of ten virgins", "living with hope"]
  },
  {
    id: "answer-health-mental-emotional",
    question: "Does the Bible have anything to say about mental and emotional health?",
    shortAnswer:
      "Scripture takes emotional struggle seriously, offering honest examples of depression and despair alongside practical patterns of rest, community, prayer, and hope that support emotional well-being.",
    longAnswer:
      "Biblical figures like Elijah and David openly described despair, exhaustion, and even a wish to die, and God responded with practical care — rest, food, and companionship — before addressing deeper spiritual matters, modeling a whole-person approach to emotional struggle. The Psalms give language for lament, allowing raw honesty before God rather than forced positivity. Community also matters deeply; believers are called to bear one another's burdens and to weep with those who weep rather than isolate the hurting. None of this replaces wise professional care when needed, but it affirms that emotional pain is not a sign of spiritual failure and that God meets people in it with genuine compassion.",
    topics: ["Health", "Comfort", "Prayer"],
    category: "Life and Relationships",
    scriptures: ["1 Kings 19:4-8", "Psalm 42:5", "Galatians 6:2"],
    keywords: ["mental health", "depression", "emotional health", "lament", "Elijah despair"]
  }
];

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
  return `/answers/${slugify(answer.question)}/`;
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
const resultsPanel = document.querySelector("#results-panel");
const resultsClear = document.querySelector("#results-clear");
const answerSpotlight = document.querySelector("#answer-spotlight");
const spotlightTags = document.querySelector("#spotlight-tags");
const spotlightLink = document.querySelector("#spotlight-link");
const spotlightShort = document.querySelector("#spotlight-short");
const spotlightCta = document.querySelector("#spotlight-cta");
const promiseText = document.querySelector("#promise-text");
const promiseReference = document.querySelector("#promise-reference");
const promisePrevious = document.querySelector("#promise-previous");
const promiseNext = document.querySelector("#promise-next");
const promiseProgressFill = document.querySelector("#promise-progress-fill");
const promiseShare = document.querySelector("#promise-share");
const promiseCopy = document.querySelector("#promise-copy");
const promiseSaveImage = document.querySelector("#promise-save-image");
const promiseFacebookShare = document.querySelector("#promise-share-facebook");
const promiseXShare = document.querySelector("#promise-share-x");
const promiseLinkedInShare = document.querySelector("#promise-share-linkedin");
const promiseWhatsAppShare = document.querySelector("#promise-share-whatsapp");
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
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5"
  },
  {
    text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    reference: "Proverbs 18:10"
  },
  {
    text: "Delight yourself in the Lord, and he will give you the desires of your heart.",
    reference: "Psalm 37:4"
  },
  {
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
    reference: "Isaiah 40:31"
  },
  {
    text: "Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you, I will help you.",
    reference: "Isaiah 41:10"
  },
  {
    text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
    reference: "2 Timothy 1:7"
  },
  {
    text: "Do not fear, for I have redeemed you; I have called you by name, you are mine.",
    reference: "Isaiah 43:1"
  },
  {
    text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; he will rejoice over you with singing.",
    reference: "Zephaniah 3:17"
  },
  {
    text: "Weeping may stay for the night, but rejoicing comes in the morning.",
    reference: "Psalm 30:5"
  },
  {
    text: "Draw near to God, and he will draw near to you.",
    reference: "James 4:8"
  },
  {
    text: "The Lord is good, a stronghold in the day of trouble; and he knows those who take refuge in him.",
    reference: "Nahum 1:7"
  },
  {
    text: "Blessed are those who mourn, for they will be comforted.",
    reference: "Matthew 5:4"
  },
  {
    text: "God is our refuge and strength, an ever-present help in trouble.",
    reference: "Psalm 46:1"
  },
  {
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
    reference: "Psalm 23:4"
  },
  {
    text: "Rejoice in hope, be patient in tribulation, be constant in prayer.",
    reference: "Romans 12:12"
  },
  {
    text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    reference: "Philippians 4:19"
  },
  {
    text: "There is now no condemnation for those who are in Christ Jesus.",
    reference: "Romans 8:1"
  },
  {
    text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
    reference: "1 John 1:9"
  },
  {
    text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    reference: "2 Corinthians 5:17"
  },
  {
    text: "For it is by grace you have been saved, through faith, and this is not from yourselves, it is the gift of God.",
    reference: "Ephesians 2:8"
  },
  {
    text: "Whoever believes in the Son has eternal life.",
    reference: "John 3:36"
  },
  {
    text: "Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life.",
    reference: "James 1:12"
  },
  {
    text: "The joy of the Lord is your strength.",
    reference: "Nehemiah 8:10"
  },
  {
    text: "Every good gift and every perfect gift is from above, coming down from the Father of lights.",
    reference: "James 1:17"
  },
  {
    text: "In all these things we are more than conquerors through him who loved us.",
    reference: "Romans 8:37"
  }
];

let promiseIndex = 0;
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

  allTopics().forEach((topic) => {
    const count = topic === "All" ? answers.length : answers.filter((answer) => answer.topics.includes(topic)).length;
    // Real links keep topics reachable without JavaScript; the click handler
    // below intercepts them to filter in place when scripting is available.
    const card = document.createElement("a");
    card.href = topic === "All" ? "/answers/" : topicUrl(topic);
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
  return `
    <article class="answer-card" id="${answer.id}">
      <div class="answer-tags">
        ${answer.topics.map((topic) => `<button type="button" class="tag-link" data-topic="${topic}">${topic}</button>`).join("")}
      </div>
      <h3><a href="${answerUrl(answer)}">${answer.question}</a></h3>
      <p class="answer-short">${answer.shortAnswer}</p>
      <div class="answer-long" hidden>
        <p>${answer.longAnswer}</p>
        <p>${biblicalPerspective(answer)}</p>
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

function currentPromise() {
  return biblePromises[promiseIndex];
}

function renderPromise() {
  const promise = currentPromise();
  updatePromiseTextHeight();
  promiseText.replaceChildren(promiseQuoteSpan(promise.text));
  promiseReference.textContent = promise.reference;
  updatePromiseShareLinks();
  promiseStatus.textContent = "";
  preparePromiseImage();
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

  const maxHeight = biblePromises.reduce((height, promise) => {
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
  promiseIndex = (promiseIndex + direction + biblePromises.length) % biblePromises.length;
  renderPromise();
}

function promiseShareText() {
  const promise = currentPromise();
  return `"${promise.text}" — ${promise.reference}`;
}

function promiseShareUrl() {
  const url = new URL("https://wordoasis.org/");
  url.searchParams.set("utm_source", "social");
  url.searchParams.set("utm_medium", "share");
  url.searchParams.set("utm_campaign", "daily_promise");
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
const PROMISE_LOGO_SHARE_COLOR = "#cfe3fa";
const PROMISE_LOGO_RATIO = 179.3 / 250;

let promiseLogoImagePromise = null;
let promiseImageFontsPromise = null;

// The logo ships as a single-colour navy lockup, so it is recoloured to the
// light blue used on dark surfaces before being painted onto the canvas.
function loadPromiseLogoImage() {
  if (promiseLogoImagePromise) {
    return promiseLogoImagePromise;
  }

  promiseLogoImagePromise = fetch("/word-oasis.svg")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Logo request failed with ${response.status}`);
      }
      return response.text();
    })
    .then((markup) => {
      const tinted = markup
        .replace(new RegExp(PROMISE_LOGO_SOURCE_COLOR, "gi"), PROMISE_LOGO_SHARE_COLOR)
        // Without explicit dimensions the SVG has no intrinsic size, which makes
        // some browsers letterbox it when it is drawn at a chosen width.
        .replace(/<svg\b(?![^>]*\bwidth=)/i, '<svg width="1000" height="717.2" ');

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
      promiseLogoImagePromise = null;
      throw error;
    });

  return promiseLogoImagePromise;
}

// Canvas silently falls back to a default face if a web font has not loaded, so
// the exact weights used below are requested before any drawing happens.
function loadPromiseImageFonts() {
  if (!document.fonts) {
    return Promise.resolve();
  }

  if (!promiseImageFontsPromise) {
    promiseImageFontsPromise = Promise.all([
      document.fonts.load('700 64px "Libre Baskerville"'),
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

  for (let size = 68; size >= 26; size -= 2) {
    ctx.font = `700 ${size}px "Libre Baskerville", Georgia, serif`;
    const lines = wrapCanvasText(ctx, text, maxWidth);
    const lineHeight = Math.round(size * 1.42);
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

function drawPromiseImageBackground(ctx, theme) {
  const base = ctx.createLinearGradient(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);
  base.addColorStop(0, theme.gradient[0]);
  base.addColorStop(0.55, theme.gradient[1]);
  base.addColorStop(1, theme.gradient[2]);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, PROMISE_IMAGE_WIDTH, PROMISE_IMAGE_HEIGHT);

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

  drawPromiseImageMotif(ctx, theme);

  ctx.strokeStyle = theme.frame;
  ctx.lineWidth = 2;
  traceRoundedRect(ctx, 44, 44, PROMISE_IMAGE_WIDTH - 88, PROMISE_IMAGE_HEIGHT - 88, 52);
  ctx.stroke();
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
  drawPromiseImageBackground(ctx, theme);

  const centerX = PROMISE_IMAGE_WIDTH / 2;
  const textWidth = PROMISE_IMAGE_WIDTH - PROMISE_IMAGE_MARGIN * 2;
  let eyebrowY = 260;

  try {
    const logo = await loadPromiseLogoImage();
    const logoWidth = 200;
    const logoHeight = logoWidth * PROMISE_LOGO_RATIO;
    ctx.drawImage(logo, centerX - logoWidth / 2, 126, logoWidth, logoHeight);
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
  const verse = fitPromiseVerse(ctx, `\u201C${promise.text}\u201D`, textWidth, verseBottom - verseTop - referenceGap - referenceHeight);

  const blockHeight = verse.height + referenceGap + referenceHeight;
  let y = verseTop + Math.max((verseBottom - verseTop - blockHeight) / 2, 0);

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.font = `700 ${verse.size}px "Libre Baskerville", Georgia, serif`;
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
let promiseImageCache = { index: -1, file: null };

function readyPromiseImageFile() {
  return promiseImageCache.index === promiseIndex ? promiseImageCache.file : null;
}

function preparePromiseImage() {
  const index = promiseIndex;
  if (promiseImageCache.index === index) {
    return;
  }

  promiseImageCache = { index, file: null };

  const build = () => {
    createPromiseImageFile()
      .then((file) => {
        if (promiseImageCache.index === index) {
          promiseImageCache.file = file;
        }
      })
      .catch(() => undefined);
  };

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(build, { timeout: 1200 });
    return;
  }

  window.setTimeout(build, 200);
}

async function downloadPromiseImage() {
  promiseStatus.textContent = "Creating your promise graphic…";

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

    promiseStatus.textContent = "Promise graphic saved. Attach it to your post to share the verse.";
  } catch (error) {
    promiseStatus.textContent = "The promise graphic could not be created. Please use Copy instead.";
  }
}

function updatePromiseShareLinks() {
  const url = promiseShareUrl();
  const content = promiseShareContent();
  promiseFacebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  promiseXShare.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`;
  promiseLinkedInShare.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  promiseWhatsAppShare.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`;
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
    title: "Today's Bible Promise",
    text: promiseShareText(),
    url: promiseShareUrl()
  };

  const file = readyPromiseImageFile();
  if (file && navigator.canShare?.({ files: [file] })) {
    // The graphic already carries the verse, reference, and wordoasis.org, so
    // keep the accompanying text minimal (no link) to avoid a competing link
    // preview card next to the image on platforms that render one.
    payload.files = [file];
    delete payload.url;
  }

  try {
    await navigator.share(payload);
    promiseStatus.textContent = `Promise shared${platform ? ` to ${platform}` : ""}.`;
    return true;
  } catch (error) {
    if (error && error.name === "AbortError") {
      promiseStatus.textContent = "Sharing was canceled.";
      return true;
    }

    // A target that advertises file support can still refuse the attachment, so
    // retry once with the plain text payload before giving up.
    if (payload.files) {
      try {
        await navigator.share({
          title: payload.title,
          text: promiseShareText(),
          url: promiseShareUrl()
        });
        promiseStatus.textContent = `Promise shared${platform ? ` to ${platform}` : ""}.`;
        return true;
      } catch (retryError) {
        if (retryError && retryError.name === "AbortError") {
          promiseStatus.textContent = "Sharing was canceled.";
          return true;
        }
      }
    }

    return false;
  }
}

async function sharePromiseWithClipboard(shareLink, platform) {
  if (prefersNativeShare() && (await sharePromiseViaSystemSheet(platform))) {
    return;
  }

  const copyOperation = navigator.clipboard?.writeText(promiseShareContent());
  const composerOpened = openPromiseShareWindow(shareLink.href);

  if (!copyOperation) {
    if (composerOpened) {
      promiseStatus.textContent = `${platform} opened with the Word Oasis preview. Add the promise text there before publishing.`;
    }
    return;
  }

  try {
    await copyOperation;
    if (composerOpened) {
      promiseStatus.textContent = `The promise was copied. Paste it into the ${platform} composer, then publish.`;
    }
  } catch (error) {
    if (composerOpened) {
      promiseStatus.textContent = `${platform} opened with the Word Oasis preview. Add the promise text there before publishing.`;
    }
  }
}

async function sharePromise() {
  if (navigator.share && (await sharePromiseViaSystemSheet(""))) {
    return;
  }

  // Desktop browsers without a share sheet get the graphic as a download plus
  // the verse (no link) on the clipboard, since the graphic itself already
  // carries the site name and shouldn't compete with a separate link preview.
  await copyPromiseVerseOnly();
  await downloadPromiseImage();
  promiseStatus.textContent = "The promise graphic was saved and the verse copied. Attach both to your post.";
}

async function copyPromiseVerseOnly() {
  try {
    await navigator.clipboard.writeText(promiseShareText());
  } catch (error) {
    // Non-fatal: the caller sets its own status message afterward.
  }
}

async function copyPromise() {
  try {
    await navigator.clipboard.writeText(promiseShareContent());
    promiseStatus.textContent = "Promise copied to your clipboard.";
  } catch (error) {
    promiseStatus.textContent = "Could not copy automatically. Select the promise text to copy it.";
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

function clearAnswerFilters() {
  state.topic = "All";
  state.query = "";
  searchInput.value = "";
  navSearchInput.value = "";
  renderTopicFilters();
  renderAnswers();
  answerSpotlight.scrollIntoView({ behavior: "smooth", block: "start" });
}

let spotlightAnswerIndex = -1;

function renderSpotlightAnswer() {
  if (!answers.length) {
    return;
  }

  // Avoid repeating the same question twice in a row when shuffling.
  let index = spotlightAnswerIndex;
  while (index === spotlightAnswerIndex && answers.length > 1) {
    index = Math.floor(Math.random() * answers.length);
  }
  spotlightAnswerIndex = index === spotlightAnswerIndex ? 0 : index;

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

navSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setSearch(navSearchInput.value);
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

promiseShare.addEventListener("click", async () => {
  try {
    await sharePromise();
  } catch (error) {
    promiseStatus.textContent = "Sharing was canceled.";
  }
});

promiseCopy.addEventListener("click", copyPromise);

promiseSaveImage.addEventListener("click", downloadPromiseImage);

[promiseFacebookShare, promiseLinkedInShare].forEach((shareLink) => {
  shareLink.addEventListener("click", (event) => {
    event.preventDefault();
    const platform = shareLink === promiseFacebookShare ? "Facebook" : "LinkedIn";
    sharePromiseWithClipboard(shareLink, platform);
  });
});

[promiseXShare, promiseWhatsAppShare].forEach((shareLink) => {
  shareLink.addEventListener("click", (event) => {
    event.preventDefault();
    // X and WhatsApp honour prefilled text in their own web intents, so keep
    // sending users straight to the platform they tapped.
    openPromiseShareWindow(shareLink.href);
  });
});

window.addEventListener("resize", schedulePromiseTextHeightUpdate);

if (document.fonts) {
  document.fonts.ready.then(updatePromiseTextHeight);
}

function restartPromiseProgress() {
  if (!promiseProgressFill) {
    return;
  }
  promiseProgressFill.classList.remove("is-running");
  // Force a reflow so removing/re-adding the class restarts the CSS
  // animation from zero instead of continuing where it left off.
  void promiseProgressFill.offsetWidth;
  promiseProgressFill.classList.add("is-running");
}

function restartPromiseRotation() {
  window.clearInterval(promiseRotation);
  promiseRotation = window.setInterval(() => advancePromise(), 10000);
  restartPromiseProgress();
}

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
  navSearchInput.value = initialQuery;
}

renderTopicFilters();
populateQuestionTopics();
renderAnswers();
renderSpotlightAnswer();

resultsClear.addEventListener("click", clearAnswerFilters);

// Rotates the featured question automatically since the manual shuffle
// control was removed in favor of a simple "Bible Answers" label.
window.setInterval(renderSpotlightAnswer, 10000);
