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
    },
    {
      id: "daniel-2",
      title: "Daniel 2: Kingdoms & the Stone",
      description: "Trace the great image from Babylon through divided kingdoms to God's everlasting kingdom.",
      icon: "prophecy",
      questions: [
        {
          question: "What did Nebuchadnezzar see in his dream?",
          options: ["A great image made of several metals", "Four beasts from the sea", "A ram and a goat", "A sealed scroll"],
          answer: 0,
          reference: "Daniel 2:31-33",
          explanation: "The king saw a great image with a gold head, silver chest, bronze middle, iron legs, and feet of iron and clay."
        },
        {
          question: "Which kingdom did Daniel explicitly identify as the head of gold?",
          options: ["Persia", "Greece", "Babylon", "Rome"],
          answer: 2,
          reference: "Daniel 2:37-38",
          explanation: "Daniel told Nebuchadnezzar, ruler of Babylon, “You are the head of gold.”"
        },
        {
          question: "In the historicist reading, which kingdom is represented by the silver chest and arms?",
          options: ["Medo-Persia", "Egypt", "Israel", "Rome"],
          answer: 0,
          reference: "Daniel 2:39",
          explanation: "The inferior kingdom following Babylon is understood as Medo-Persia, which Daniel 8 later names directly."
        },
        {
          question: "Which kingdom is represented by bronze in the historicist sequence?",
          options: ["Babylon", "Greece", "Rome", "Divided Europe"],
          answer: 1,
          reference: "Daniel 2:39",
          explanation: "Greece followed Medo-Persia and ruled widely; Daniel 8:21 directly identifies the goat as Greece."
        },
        {
          question: "What does the iron kingdom do according to the prophecy?",
          options: ["Builds the sanctuary", "Breaks and crushes other kingdoms", "Rules without conflict", "Lasts only seven years"],
          answer: 1,
          reference: "Daniel 2:40",
          explanation: "The fourth kingdom is strong as iron and breaks other powers. Historicists identify it with Rome."
        },
        {
          question: "What do the feet of iron mixed with clay represent?",
          options: ["A reunited Babylon", "A divided kingdom, partly strong and partly fragile", "The church at Pentecost", "The kingdom of Greece"],
          answer: 1,
          reference: "Daniel 2:41-43",
          explanation: "After the iron power, the kingdom is divided and never fully adheres, pictured by iron that will not bond with clay."
        },
        {
          question: "What strikes the image on its feet?",
          options: ["A sword", "A flood", "A stone cut out without hands", "A bolt of fire"],
          answer: 2,
          reference: "Daniel 2:34-35",
          explanation: "A stone cut out without human hands strikes the image and brings the whole sequence of earthly kingdoms to an end."
        },
        {
          question: "What does the stone represent?",
          options: ["Another temporary empire", "God's everlasting kingdom", "The rebuilding of Babylon", "A human political alliance"],
          answer: 1,
          reference: "Daniel 2:44-45",
          explanation: "Daniel says the God of heaven will establish a kingdom that will never be destroyed."
        },
        {
          question: "When is God's kingdom pictured as replacing the divided kingdoms?",
          options: ["During Babylon's rule", "In the days of the divided kings", "Before the iron kingdom", "Only during the exile"],
          answer: 1,
          reference: "Daniel 2:44",
          explanation: "The stone kingdom is established “in the days of those kings,” after the sequence reaches the divided feet."
        },
        {
          question: "What ultimately fills the whole earth?",
          options: ["The iron kingdom", "The clay kingdoms", "The mountain formed by the stone", "The gold of Babylon"],
          answer: 2,
          reference: "Daniel 2:35",
          explanation: "The stone becomes a great mountain and fills the whole earth, showing the universal victory of God's kingdom."
        }
      ]
    },
    {
      id: "daniel-7",
      title: "Daniel 7: Beasts & Judgment",
      description: "Follow the four kingdoms, the little horn, heaven's judgment, and the kingdom given to the saints.",
      icon: "prophecy",
      questions: [
        {
          question: "What do the four beasts represent?",
          options: ["Four prophets", "Four kings or kingdoms", "Four churches", "Four angels"],
          answer: 1,
          reference: "Daniel 7:17",
          explanation: "The angel explains that the four great beasts are four kings, representing successive kingdoms."
        },
        {
          question: "In the historicist reading, which kingdom does the winged lion represent?",
          options: ["Babylon", "Medo-Persia", "Greece", "Rome"],
          answer: 0,
          reference: "Daniel 7:4",
          explanation: "The lion corresponds to Babylon, the first kingdom in the parallel sequence begun in Daniel 2."
        },
        {
          question: "What feature of the bear suggests an uneven alliance?",
          options: ["It has four heads", "It is raised up on one side", "It has iron teeth", "It loses its wings"],
          answer: 1,
          reference: "Daniel 7:5",
          explanation: "The bear is raised on one side, fitting the historicist identification of Medo-Persia with Persia becoming dominant."
        },
        {
          question: "What do the leopard's four heads represent in the historicist reading?",
          options: ["Four Babylonian kings", "Four divisions of the Greek Empire", "Four Roman emperors", "Four end-time churches"],
          answer: 1,
          reference: "Daniel 7:6",
          explanation: "After Alexander, the Greek Empire divided among four leading successor powers, paralleling Daniel 8:22."
        },
        {
          question: "Which power is represented by the dreadful fourth beast in the historicist sequence?",
          options: ["Egypt", "Rome", "Israel", "Persia"],
          answer: 1,
          reference: "Daniel 7:7",
          explanation: "The powerful fourth kingdom follows Greece and is identified in the historicist sequence as Rome."
        },
        {
          question: "What do the ten horns represent?",
          options: ["Ten commandments", "Ten kings arising from the fourth kingdom", "Ten prophets", "Ten plagues"],
          answer: 1,
          reference: "Daniel 7:24",
          explanation: "The angel says the ten horns are ten kings that arise from the fourth kingdom."
        },
        {
          question: "What three actions characterize the little horn?",
          options: ["Building, teaching, and healing", "Speaking against God, persecuting the saints, and intending to change times and law", "Fasting, praying, and giving", "Conquering Babylon, Persia, and Greece"],
          answer: 1,
          reference: "Daniel 7:25",
          explanation: "The prophecy describes a religious-political power opposing God, persecuting His people, and presuming to alter sacred authority."
        },
        {
          question: "How long is the little horn's period of supremacy described?",
          options: ["Seventy weeks", "A time, times, and half a time", "Ten literal days", "Two thousand three hundred evenings and mornings"],
          answer: 1,
          reference: "Daniel 7:25",
          explanation: "A time, two times, and half a time equals three and a half prophetic years, understood historically as 1,260 years."
        },
        {
          question: "What heavenly event follows the little horn's activity?",
          options: ["The judgment sits and the books are opened", "Babylon is rebuilt", "The temple curtain is torn", "The flood begins"],
          answer: 0,
          reference: "Daniel 7:9-10",
          explanation: "Daniel sees the Ancient of Days seated, the court convened, and the books opened in heaven."
        },
        {
          question: "Who receives the everlasting kingdom after the judgment?",
          options: ["The little horn", "The fourth beast", "The Son of Man and the saints of the Most High", "The kings of Persia"],
          answer: 2,
          reference: "Daniel 7:13-14",
          explanation: "The Son of Man receives everlasting dominion, and the kingdom is given to the saints of the Most High."
        }
      ]
    },
    {
      id: "daniel-8-9",
      title: "Daniel 8–9: The 2,300 Days",
      description: "Connect the ram, goat, sanctuary, seventy weeks, Messiah, and the 2,300-year prophetic timeline.",
      icon: "prophecy",
      questions: [
        {
          question: "Which kingdom does the angel identify as the ram?",
          options: ["Babylon", "Medo-Persia", "Greece", "Rome"],
          answer: 1,
          reference: "Daniel 8:20",
          explanation: "Gabriel directly identifies the ram's two horns as the kings of Media and Persia."
        },
        {
          question: "Which kingdom does the male goat represent?",
          options: ["Greece", "Egypt", "Rome", "Babylon"],
          answer: 0,
          reference: "Daniel 8:21",
          explanation: "The angel explicitly says the rough goat is the kingdom of Greece."
        },
        {
          question: "In the historicist reading, what power does the expanding little horn represent?",
          options: ["Rome in its pagan and later religious phases", "Only Alexander the Great", "The kingdom of Judah", "The Medo-Persian alliance"],
          answer: 0,
          reference: "Daniel 8:9-12",
          explanation: "Historicists see the horn expanding geographically and then religiously, corresponding to Rome's imperial and later religious phases."
        },
        {
          question: "What happens at the end of the 2,300 evenings and mornings?",
          options: ["The sanctuary is restored or cleansed", "Babylon is founded", "The ram defeats the goat", "The seventy weeks begin again"],
          answer: 0,
          reference: "Daniel 8:14",
          explanation: "The prophecy points to the restoration or cleansing of the sanctuary after the 2,300-day period."
        },
        {
          question: "Which principle is used in this historicist reading of symbolic prophetic time?",
          options: ["One symbolic day represents one year", "Every day represents a century", "All time periods are literal hours", "Numbers have no historical meaning"],
          answer: 0,
          reference: "Ezekiel 4:6",
          explanation: "The day-year principle is supported by symbolic time examples in Ezekiel 4:6 and Numbers 14:34."
        },
        {
          question: "Why is Daniel 9 connected to the unexplained time vision of Daniel 8?",
          options: ["Gabriel returns to give Daniel understanding after the 2,300-day portion remained unexplained", "Both chapters describe the same dream image", "Daniel 9 names the ram", "Daniel 9 repeats the four beasts"],
          answer: 0,
          reference: "Daniel 9:21-23",
          explanation: "Gabriel, who explained Daniel 8, returns and tells Daniel to understand the vision, supplying the starting framework through the seventy weeks."
        },
        {
          question: "In this connected reading, how do the seventy weeks relate to the 2,300 days?",
          options: ["They are the first 490 years set apart from the longer period", "They begin after the 2,300 days end", "They are unrelated literal weeks", "They replace the sanctuary prophecy"],
          answer: 0,
          reference: "Daniel 9:24",
          explanation: "The seventy weeks equal 490 prophetic years and are understood as the opening portion determined or cut off for Daniel's people from the longer 2,300-year timeline."
        },
        {
          question: "What event begins the seventy-week timeline?",
          options: ["The decree to restore and rebuild Jerusalem", "The destruction of Jerusalem", "The birth of Daniel", "The fall of Greece"],
          answer: 0,
          reference: "Daniel 9:25",
          explanation: "The timeline begins with the command to restore and rebuild Jerusalem, identified historically with Artaxerxes' decree in 457 BC."
        },
        {
          question: "To whom do the seventy weeks point?",
          options: ["Nebuchadnezzar", "Messiah the Prince", "Alexander the Great", "The king of the south"],
          answer: 1,
          reference: "Daniel 9:24-27",
          explanation: "The seventy weeks point to Messiah's appearing, His covenant-confirming ministry, and His sacrificial death."
        },
        {
          question: "Where does the 2,300-year timeline end when counted from 457 BC without a year zero?",
          options: ["AD 34", "AD 538", "AD 1798", "AD 1844"],
          answer: 3,
          reference: "Daniel 8:14",
          explanation: "In this historicist sanctuary-centered reading, 2,300 years from 457 BC reach AD 1844, marking a final phase of Christ's heavenly ministry and judgment."
        }
      ]
    },
    {
      id: "daniel-11",
      title: "Daniel 11: The Great Conflict",
      description: "Explore the long conflict from Persia and Greece through Rome to the final crisis and divine deliverance.",
      icon: "prophecy",
      questions: [
        {
          question: "Which empire is the starting setting of Daniel 11?",
          options: ["Persia", "Babylon", "Rome", "Egypt"],
          answer: 0,
          reference: "Daniel 11:2",
          explanation: "The prophecy begins with kings who would yet arise in Persia."
        },
        {
          question: "Who is the mighty king whose realm is broken and divided after his rise?",
          options: ["Cyrus", "Alexander and the Greek Empire", "Augustus", "Nebuchadnezzar"],
          answer: 1,
          reference: "Daniel 11:3-4",
          explanation: "The mighty Greek ruler's kingdom is broken and divided toward the four winds, matching Alexander's empire and its successors."
        },
        {
          question: "What geographic relationship defines the early kings of the north and south?",
          options: ["Their position relative to Jerusalem", "Their distance from Rome", "Their location east and west of Babylon", "Their location above and below the equator"],
          answer: 0,
          reference: "Daniel 11:5-6",
          explanation: "The titles north and south describe rival powers situated north and south of the land of Israel."
        },
        {
          question: "What happens to the Prince of the covenant in the prophecy?",
          options: ["He is broken", "He becomes king of Persia", "He flees to Egypt", "He seals the book"],
          answer: 0,
          reference: "Daniel 11:22",
          explanation: "The Prince of the covenant is broken, understood in the historicist Christian reading as pointing to Christ's death under Roman power."
        },
        {
          question: "What happens to God's faithful people during the long conflict?",
          options: ["They face persecution but instruct many", "They disappear entirely", "They rule every earthly kingdom", "They return to Babylon"],
          answer: 0,
          reference: "Daniel 11:32-35",
          explanation: "Those who know God stand firm and instruct many, though they experience persecution and refining."
        },
        {
          question: "What sacred things does the opposing power attack?",
          options: ["The sanctuary and the continual ministry", "The ark built by Noah", "Solomon's palace only", "The walls of Jericho"],
          answer: 0,
          reference: "Daniel 11:31",
          explanation: "The prophecy describes an attack on the sanctuary and the continual ministry, with a counterfeit desolating system established."
        },
        {
          question: "According to the historicist reading, which power becomes prominent after the Greek conflicts?",
          options: ["Rome, first imperial and then religious", "A restored Babylonian Empire", "The northern kingdom of Israel", "The Philistines"],
          answer: 0,
          reference: "Daniel 11:16",
          explanation: "The narrative's expanding power is read as Rome entering the prophetic sequence, first politically and later in a religious form."
        },
        {
          question: "Until when does the refining of God's people continue?",
          options: ["Until the time of the end", "Only until Persia falls", "For ten literal days", "Until the first temple is built"],
          answer: 0,
          reference: "Daniel 11:35",
          explanation: "The text says the testing and refining continue until the time of the end."
        },
        {
          question: "What disturbs the final king of the north?",
          options: ["News from the east and the north", "A dream about a statue", "The decree to rebuild Jerusalem", "The handwriting on the wall"],
          answer: 0,
          reference: "Daniel 11:44",
          explanation: "Tidings from the east and north trouble the final power and provoke its last campaign."
        },
        {
          question: "How does the final opposing power end?",
          options: ["It comes to its end with no one to help", "It becomes the stone kingdom", "It rules forever", "It returns to Persia"],
          answer: 0,
          reference: "Daniel 11:45",
          explanation: "The chapter ends with the opposing power coming to its end without a helper, immediately before Michael stands in Daniel 12."
        }
      ]
    },
    {
      id: "daniel-12",
      title: "Daniel 12: The Time of the End",
      description: "Study Michael's intervention, the resurrection, the unsealed book, and Daniel's final prophetic time periods.",
      icon: "prophecy",
      questions: [
        {
          question: "Who stands up during the final crisis?",
          options: ["Michael, the great prince", "The king of Persia", "Gabriel as an earthly king", "Nebuchadnezzar"],
          answer: 0,
          reference: "Daniel 12:1",
          explanation: "Michael, the great prince who stands for God's people, rises to act in the final crisis."
        },
        {
          question: "Who is delivered in the time of trouble?",
          options: ["Everyone found written in the book", "Only the kings of Persia", "Only those living in Babylon", "The little horn"],
          answer: 0,
          reference: "Daniel 12:1",
          explanation: "Daniel is assured that God's people whose names are found written in the book will be delivered."
        },
        {
          question: "What event follows the time of trouble?",
          options: ["A resurrection to everlasting life or shame", "The rise of Greece", "The building of the first temple", "Another Babylonian captivity"],
          answer: 0,
          reference: "Daniel 12:2",
          explanation: "Daniel describes a resurrection, with some raised to everlasting life and others to shame."
        },
        {
          question: "What was Daniel told to do with the book?",
          options: ["Seal it until the time of the end", "Burn it immediately", "Send it only to Persia", "Hide it permanently"],
          answer: 0,
          reference: "Daniel 12:4",
          explanation: "Daniel was told to seal the book until the time of the end, when knowledge of its prophecies would increase."
        },
        {
          question: "Which period parallels the little horn's “time, times, and half a time”?",
          options: ["1,260 prophetic days or years", "2,300 literal hours", "70 literal days", "1,000 years"],
          answer: 0,
          reference: "Daniel 12:7",
          explanation: "Three and a half prophetic years equal 1,260 prophetic days, understood historically as years."
        },
        {
          question: "In the historicist timeline, which years mark the 1,260-year period of religious-political supremacy?",
          options: ["538 to 1798", "457 BC to AD 34", "1798 to 1844", "AD 70 to 538"],
          answer: 0,
          reference: "Daniel 12:7",
          explanation: "This reading dates the 1,260 years from AD 538 to 1798, ending when the historic religious-political power received a major civil blow."
        },
        {
          question: "What period begins when the continual ministry is obscured and the desolating system is set up?",
          options: ["1,290 days", "70 weeks", "2,300 evenings and mornings", "Ten days"],
          answer: 0,
          reference: "Daniel 12:11",
          explanation: "Daniel 12 gives a 1,290-day period, read historically as 1,290 years and commonly dated from AD 508 to 1798."
        },
        {
          question: "What blessing is attached to the 1,335 days?",
          options: ["Blessed is the one who waits and reaches their end", "The iron kingdom will be restored", "The sanctuary will be destroyed", "Persia will rule forever"],
          answer: 0,
          reference: "Daniel 12:12",
          explanation: "A blessing is pronounced on those who wait and reach the end of the 1,335 days, understood in this timeline as extending from AD 508 to the prophetic awakening around 1843–1844."
        },
        {
          question: "What contrast is drawn between the wicked and the wise?",
          options: ["The wicked do not understand, but the wise understand", "Both understand equally", "Only earthly kings understand", "No one can ever understand"],
          answer: 0,
          reference: "Daniel 12:10",
          explanation: "The prophecy says the wicked will not understand, while the wise will understand as the end approaches."
        },
        {
          question: "What personal promise is given to Daniel at the close?",
          options: ["He will rest and stand in his inheritance at the end of the days", "He will rebuild Babylon", "He will become king of Greece", "He will never die"],
          answer: 0,
          reference: "Daniel 12:13",
          explanation: "Daniel is told to go his way, rest, and stand in his allotted inheritance at the end of the days."
        }
      ]
    },
    {
      id: "prophetic-symbols",
      title: "Prophetic Symbols",
      description: "Learn what beasts, horns, and other symbols mean in Bible prophecy.",
      icon: "prophecy",
      questions: [
        {
          question: "In Daniel 7, what do the four beasts represent?",
          options: ["Four kings or kingdoms", "Four literal animals", "Four angels", "Four rivers"],
          answer: 0,
          reference: "Daniel 7:17, 23",
          explanation: "Daniel is told directly that the four great beasts are four kings, or kingdoms, that arise on the earth."
        },
        {
          question: "According to Revelation 17:15, what do “waters” symbolize?",
          options: ["Peoples, multitudes, nations, and languages", "Literal oceans only", "Angels", "The New Jerusalem"],
          answer: 0,
          reference: "Revelation 17:15",
          explanation: "The angel explains that the waters where the woman sits are peoples, multitudes, nations, and tongues."
        },
        {
          question: "In apocalyptic prophecy, what does a \"woman\" commonly symbolize?",
          options: ["The church", "A literal government", "A prophet", "A single nation only"],
          answer: 0,
          reference: "Revelation 12:1-2; 2 Corinthians 11:2",
          explanation: "Scripture uses a woman as a symbol of the church, whether faithful (Revelation 12) or corrupt (Revelation 17)."
        },
        {
          question: "Using the day-year principle drawn from Ezekiel 4:6 and Numbers 14:34, what does one prophetic day represent?",
          options: ["One literal year", "One literal day", "One thousand years", "One week"],
          answer: 0,
          reference: "Ezekiel 4:6; Numbers 14:34",
          explanation: "These passages establish the principle that in symbolic prophecy, a day stands for a literal year."
        },
        {
          question: "In Revelation 1:20, what do the seven stars represent?",
          options: ["The angels of the seven churches", "Seven literal planets", "Seven kings of Rome", "Seven seals"],
          answer: 0,
          reference: "Revelation 1:20",
          explanation: "Jesus explains that the seven stars are the angels, or messengers, of the seven churches."
        },
        {
          question: "In Revelation 1:20, what do the seven lampstands represent?",
          options: ["The seven churches", "Seven altars", "Seven mountains", "Seven trumpets"],
          answer: 0,
          reference: "Revelation 1:20",
          explanation: "The seven golden lampstands are identified as the seven churches John was writing to."
        },
        {
          question: "In Daniel 7, what does a \"horn\" typically represent?",
          options: ["A king or ruling power", "A literal trumpet", "A mountain range", "A river"],
          answer: 0,
          reference: "Daniel 7:24",
          explanation: "The angel tells Daniel that the ten horns are ten kings, and the little horn is another king who arises among them."
        },
        {
          question: "Who does the \"great dragon\" represent in Revelation 12?",
          options: ["Satan, the devil", "A literal Roman emperor", "A wild beast", "An earthly kingdom only"],
          answer: 0,
          reference: "Revelation 12:9",
          explanation: "Revelation directly identifies the great dragon as \"that old serpent, called the Devil, and Satan.\""
        },
        {
          question: "What does Revelation 17:5 call end-time Babylon?",
          options: ["The mother of prostitutes and of the abominations of the earth", "A literal river in Persia", "The New Jerusalem", "A faithful remnant church"],
          answer: 0,
          reference: "Revelation 17:5",
          explanation: "Babylon is symbolically named as the source of spiritual confusion and corrupted worship opposed to God."
        },
        {
          question: "According to Revelation 17:9-10, what do the beast's seven heads represent?",
          options: ["Seven mountains and seven kings", "Seven churches", "Seven trumpets", "Seven angels"],
          answer: 0,
          reference: "Revelation 17:9-10",
          explanation: "John is told plainly that the seven heads are seven mountains and also seven kings."
        }
      ]
    },
    {
      id: "book-of-revelation",
      title: "Book of Revelation",
      description: "Journey through John's apocalypse: the churches, seals, trumpets, and the new heaven and earth.",
      icon: "prophecy",
      questions: [
        {
          question: "Who received the Revelation recorded in this book?",
          options: ["The apostle John", "The apostle Paul", "Daniel", "Peter"],
          answer: 0,
          reference: "Revelation 1:1",
          explanation: "The book opens by identifying John as the one to whom Jesus Christ revealed these things."
        },
        {
          question: "On what island did John receive this vision?",
          options: ["Patmos", "Crete", "Cyprus", "Malta"],
          answer: 0,
          reference: "Revelation 1:9",
          explanation: "John says he was on the island called Patmos for the word of God and the testimony of Jesus."
        },
        {
          question: "How many churches of Asia are addressed in Revelation 2-3?",
          options: ["Seven", "Twelve", "Three", "Ten"],
          answer: 0,
          reference: "Revelation 1:11",
          explanation: "John is told to write to the seven churches: Ephesus, Smyrna, Pergamos, Thyatira, Sardis, Philadelphia, and Laodicea."
        },
        {
          question: "Which church is famously described as \"lukewarm\"?",
          options: ["Laodicea", "Smyrna", "Philadelphia", "Ephesus"],
          answer: 0,
          reference: "Revelation 3:16",
          explanation: "Laodicea is rebuked for being neither cold nor hot, but lukewarm."
        },
        {
          question: "In Revelation 5, who alone is found worthy to open the sealed scroll?",
          options: ["The Lamb, Jesus Christ", "An elder", "A mighty angel", "John himself"],
          answer: 0,
          reference: "Revelation 5:5-7",
          explanation: "The Lion of the tribe of Judah, seen as a Lamb, is the only one worthy to take and open the scroll."
        },
        {
          question: "What is the rider of the fourth, pale horse in Revelation 6 called?",
          options: ["Death", "War", "Famine", "Conquest"],
          answer: 0,
          reference: "Revelation 6:8",
          explanation: "The rider of the pale (or ashen) horse is named Death, with Hades following him."
        },
        {
          question: "What is \"the number of the beast\" given in Revelation 13:18?",
          options: ["666", "144", "1000", "777"],
          answer: 0,
          reference: "Revelation 13:18",
          explanation: "John calls for wisdom to count the number of the beast, which is the number of a man: 666."
        },
        {
          question: "In Revelation 20, for how long is Satan bound?",
          options: ["A thousand years", "Seventy years", "Forty days", "Three and a half years"],
          answer: 0,
          reference: "Revelation 20:2-3",
          explanation: "An angel binds Satan for a thousand years, commonly called the millennium."
        },
        {
          question: "What does Revelation 21:4 say God will do for His people?",
          options: ["Wipe away every tear from their eyes", "Send them back to Babylon", "Give them another law", "Seal the book forever"],
          answer: 0,
          reference: "Revelation 21:4",
          explanation: "In the new heaven and earth, God wipes away every tear, and death, sorrow, and pain are no more."
        },
        {
          question: "What grows on either side of the river of life in Revelation 22?",
          options: ["The tree of life, bearing twelve kinds of fruit", "Cedars of Lebanon", "A fig tree", "Thorns and thistles"],
          answer: 0,
          reference: "Revelation 22:2",
          explanation: "The tree of life yields its fruit every month, and its leaves are for the healing of the nations."
        }
      ]
    },
    {
      id: "parables-of-jesus",
      title: "Parables of Jesus",
      description: "Explore the stories Jesus told to reveal the kingdom of heaven.",
      icon: "cross",
      questions: [
        {
          question: "In the Parable of the Sower, what do the seeds represent?",
          options: ["The word of God", "Literal grain", "Money", "The apostles"],
          answer: 0,
          reference: "Luke 8:11",
          explanation: "Jesus explains that the seed sown by the sower is the word of God."
        },
        {
          question: "In the Parable of the Good Samaritan, who stopped to help the injured traveler?",
          options: ["A Samaritan", "A priest", "A Levite", "A Pharisee"],
          answer: 0,
          reference: "Luke 10:33-34",
          explanation: "After a priest and a Levite passed by, a Samaritan showed mercy and cared for the wounded man."
        },
        {
          question: "In the Parable of the Prodigal Son, what did the father do when he saw his son returning?",
          options: ["Ran to him, embraced, and kissed him", "Sent a servant to turn him away", "Waited for an apology first", "Ignored him"],
          answer: 0,
          reference: "Luke 15:20",
          explanation: "While the son was still far off, his father saw him, was moved with compassion, and ran to embrace him."
        },
        {
          question: "In the Parable of the Lost Sheep, how many sheep did the shepherd leave to search for the one?",
          options: ["Ninety-nine", "Fifty", "Ten", "None, he took them all"],
          answer: 0,
          reference: "Luke 15:4",
          explanation: "The shepherd leaves the ninety-nine in the open country to go after the one that is lost."
        },
        {
          question: "In the Parable of the Mustard Seed, what does the tiny seed grow into?",
          options: ["A large tree where birds can nest", "A field of wheat", "A vineyard", "A cedar forest"],
          answer: 0,
          reference: "Matthew 13:31-32",
          explanation: "Though the smallest of seeds, it grows into a tree large enough for birds to nest in its branches."
        },
        {
          question: "In the Parable of the Talents, how many talents did the servant who was punished receive?",
          options: ["One", "Two", "Five", "Ten"],
          answer: 0,
          reference: "Matthew 25:14-30",
          explanation: "The servant who received one talent buried it and was rebuked for his fear and unfaithfulness."
        },
        {
          question: "In the Parable of the Ten Virgins, what did the five foolish virgins forget to bring?",
          options: ["Extra oil for their lamps", "Wedding gifts", "Food for the feast", "Their invitations"],
          answer: 0,
          reference: "Matthew 25:1-13",
          explanation: "The foolish virgins took their lamps but no extra oil, and were shut out when the bridegroom came."
        },
        {
          question: "In the Parable of the Workers in the Vineyard, what did all the workers receive regardless of hours worked?",
          options: ["The same wage, a denarius", "Different wages based on hours", "Nothing at all", "A place in the master's house"],
          answer: 0,
          reference: "Matthew 20:1-16",
          explanation: "The landowner paid every worker a denarius, showing God's generous grace rather than strict merit."
        },
        {
          question: "In the Parable of the Rich Fool, what did the man plan to build to store his abundant crops?",
          options: ["Bigger barns", "A new house", "A city wall", "A temple"],
          answer: 0,
          reference: "Luke 12:16-21",
          explanation: "The rich man planned to tear down his barns and build bigger ones, not knowing his life would end that night."
        },
        {
          question: "In the Parable of the Wise and Foolish Builders, what did the wise man build his house on?",
          options: ["The rock", "The sand", "A hill of clay", "Pillars of wood"],
          answer: 0,
          reference: "Matthew 7:24-27",
          explanation: "The wise man's house on the rock withstood the storm, while the foolish man's house on sand fell."
        }
      ]
    },
    {
      id: "miracles-of-jesus",
      title: "Miracles of Jesus",
      description: "Witness the power of Christ through His healings, provisions, and control over nature.",
      icon: "cross",
      questions: [
        {
          question: "What was Jesus' first recorded miracle?",
          options: ["Turning water into wine at a wedding in Cana", "Healing a blind man", "Feeding the five thousand", "Calming a storm"],
          answer: 0,
          reference: "John 2:1-11",
          explanation: "At a wedding in Cana, Jesus turned water into wine, the first of His signs."
        },
        {
          question: "How many loaves and fish did Jesus use to feed the five thousand?",
          options: ["Five loaves and two fish", "Two loaves and five fish", "Seven loaves and a few fish", "Ten loaves and no fish"],
          answer: 0,
          reference: "Matthew 14:13-21",
          explanation: "Jesus took five loaves and two fish, blessed them, and fed a crowd of about five thousand men."
        },
        {
          question: "Whom did Jesus raise from the dead after four days in the tomb?",
          options: ["Lazarus", "Jairus's son", "A widow's son at Nain", "Stephen"],
          answer: 0,
          reference: "John 11:1-44",
          explanation: "Jesus called Lazarus out of the tomb four days after his death, showing His power over death."
        },
        {
          question: "What did Jesus say to calm the storm on the Sea of Galilee?",
          options: ["\"Peace, be still\"", "\"Depart from me\"", "\"It is finished\"", "\"Talitha koum\""],
          answer: 0,
          reference: "Mark 4:39",
          explanation: "Jesus rebuked the wind and said to the sea, \"Peace, be still,\" and the storm ceased."
        },
        {
          question: "How did Jesus heal the man born blind in John 9?",
          options: ["Made mud with saliva and told him to wash in Siloam", "Touched his eyes only", "Spoke a word from a distance", "Prayed over him for a day"],
          answer: 0,
          reference: "John 9:6-7",
          explanation: "Jesus made clay with spit, put it on the man's eyes, and sent him to wash in the pool of Siloam."
        },
        {
          question: "What happened when Peter tried to walk on the water to Jesus?",
          options: ["He began to sink when he doubted, and Jesus caught him", "He walked all the way without trouble", "He fell in immediately", "He refused to leave the boat"],
          answer: 0,
          reference: "Matthew 14:28-31",
          explanation: "Peter walked on the water but began to sink when he saw the wind, and Jesus reached out and caught him."
        },
        {
          question: "In Luke 17, how many lepers did Jesus heal, and how many returned to thank Him?",
          options: ["Ten healed, one returned", "Five healed, all returned", "One healed, none returned", "Ten healed, none returned"],
          answer: 0,
          reference: "Luke 17:11-19",
          explanation: "Jesus healed ten lepers, but only one, a Samaritan, came back to give thanks."
        },
        {
          question: "What miraculous provision did Jesus give the disciples after a night of catching nothing?",
          options: ["A great catch of fish that filled their nets", "Bread from heaven", "A school of dolphins", "Calm seas for the rest of the night"],
          answer: 0,
          reference: "Luke 5:1-11",
          explanation: "At Jesus' word, the disciples let down their nets and caught so many fish their nets began to break."
        },
        {
          question: "Whose daughter did Jesus raise, saying \"Talitha koum\"?",
          options: ["Jairus's daughter", "Herodias's daughter", "The widow of Nain's daughter", "Martha's daughter"],
          answer: 0,
          reference: "Mark 5:21-43",
          explanation: "Jesus took the hand of Jairus's dead daughter and said, \"Talitha koum,\" meaning, \"Little girl, arise.\""
        },
        {
          question: "What did Jesus do after Peter cut off the ear of Malchus in Gethsemane?",
          options: ["He healed the ear", "He rebuked Malchus", "He left it unhealed", "He healed Peter's hand instead"],
          answer: 0,
          reference: "Luke 22:50-51",
          explanation: "Jesus touched the servant's ear and healed him, even as He was being arrested."
        }
      ]
    },
    {
      id: "book-of-acts",
      title: "Book of Acts",
      description: "Follow the Holy Spirit's work through the apostles and the birth of the early church.",
      icon: "book",
      questions: [
        {
          question: "On what day did the Holy Spirit come upon the believers with tongues of fire?",
          options: ["The Day of Pentecost", "Passover", "The Day of Atonement", "The Feast of Tabernacles"],
          answer: 0,
          reference: "Acts 2:1-4",
          explanation: "When the Day of Pentecost had fully come, the Holy Spirit filled the believers gathered in Jerusalem."
        },
        {
          question: "Who was chosen by lot to replace Judas among the twelve apostles?",
          options: ["Matthias", "Barnabas", "Silas", "Timothy"],
          answer: 0,
          reference: "Acts 1:23-26",
          explanation: "The lot fell on Matthias, and he was numbered with the eleven apostles."
        },
        {
          question: "Who was the first Christian martyr, stoned for his faith?",
          options: ["Stephen", "James", "Peter", "Philip"],
          answer: 0,
          reference: "Acts 7:54-60",
          explanation: "Stephen was stoned to death while Saul (later Paul) approved of his execution."
        },
        {
          question: "On the road to which city was Saul confronted by the risen Jesus?",
          options: ["Damascus", "Antioch", "Tarsus", "Jerusalem"],
          answer: 0,
          reference: "Acts 9:1-9",
          explanation: "Saul was traveling to Damascus to arrest Christians when a light from heaven stopped him."
        },
        {
          question: "What was Saul's name changed to after his conversion and calling?",
          options: ["Paul", "Silas", "Cephas", "Barnabas"],
          answer: 0,
          reference: "Acts 13:9",
          explanation: "Saul, also called Paul, became the name most used for him as he ministered to the Gentiles."
        },
        {
          question: "Whom did Philip baptize after explaining the prophecy of Isaiah to him?",
          options: ["An Ethiopian official", "A Roman centurion", "A Philippian jailer", "A synagogue ruler"],
          answer: 0,
          reference: "Acts 8:26-39",
          explanation: "Philip explained Isaiah 53 to the Ethiopian eunuch, the treasurer of Queen Candace, who was then baptized."
        },
        {
          question: "In Acts 10, who was the first Gentile convert Peter visited after receiving a vision?",
          options: ["Cornelius", "Felix", "Festus", "Agrippa"],
          answer: 0,
          reference: "Acts 10",
          explanation: "Peter visited the Roman centurion Cornelius, whose household received the Holy Spirit and was baptized."
        },
        {
          question: "In which city were believers first called \"Christians\"?",
          options: ["Antioch", "Jerusalem", "Corinth", "Ephesus"],
          answer: 0,
          reference: "Acts 11:26",
          explanation: "It was in Antioch that the disciples were first called Christians."
        },
        {
          question: "What happened to Paul and Silas in prison at Philippi that led to the jailer's conversion?",
          options: ["An earthquake opened the doors and loosed their chains", "An angel led them out quietly", "They escaped through a window", "They were released by the governor"],
          answer: 0,
          reference: "Acts 16:25-34",
          explanation: "A midnight earthquake opened every door and loosed everyone's chains, leading the jailer and his household to believe."
        },
        {
          question: "Where was Paul held prisoner for two years awaiting trial before being sent to Rome?",
          options: ["Caesarea", "Damascus", "Corinth", "Athens"],
          answer: 0,
          reference: "Acts 23-26",
          explanation: "Paul was held in Caesarea before Felix and Festus before appealing to Caesar and being sent to Rome."
        }
      ]
    },
    {
      id: "women-of-the-bible",
      title: "Women of the Bible",
      description: "Meet the faithful, courageous, and pivotal women found throughout Scripture.",
      icon: "people",
      questions: [
        {
          question: "Who was the first woman, created by God from Adam's rib?",
          options: ["Eve", "Sarah", "Rebekah", "Rachel"],
          answer: 0,
          reference: "Genesis 2:22",
          explanation: "God formed Eve from the rib He took from Adam."
        },
        {
          question: "Which judge and prophetess led Israel and helped defeat Sisera's army?",
          options: ["Deborah", "Miriam", "Huldah", "Jael"],
          answer: 0,
          reference: "Judges 4-5",
          explanation: "Deborah judged Israel and, with Barak, led Israel to victory over Sisera's forces."
        },
        {
          question: "Which Moabite woman left her homeland with Naomi and became an ancestor of David?",
          options: ["Ruth", "Orpah", "Rahab", "Tamar"],
          answer: 0,
          reference: "Ruth 1; Ruth 4:13-17",
          explanation: "Ruth's loyalty to Naomi led her to Bethlehem, where she became the great-grandmother of David."
        },
        {
          question: "Who hid the Israelite spies in Jericho and was later listed in Jesus' genealogy?",
          options: ["Rahab", "Deborah", "Esther", "Abigail"],
          answer: 0,
          reference: "Joshua 2; Matthew 1:5",
          explanation: "Rahab protected the spies in Jericho and is named among the ancestors of Jesus in Matthew's genealogy."
        },
        {
          question: "Which queen risked her life to save the Jewish people from Haman's plot?",
          options: ["Esther", "Vashti", "Bathsheba", "Jezebel"],
          answer: 0,
          reference: "Esther 4-7",
          explanation: "Esther approached the king uninvited and exposed Haman's plan, saving her people."
        },
        {
          question: "Who was chosen to be the mother of Jesus, the Son of God?",
          options: ["Mary", "Elizabeth", "Anna", "Martha"],
          answer: 0,
          reference: "Luke 1:26-38",
          explanation: "The angel Gabriel announced to Mary that she would conceive and bear the Son of God."
        },
        {
          question: "Which sister of Lazarus sat at Jesus' feet listening to His teaching while her sister served?",
          options: ["Mary of Bethany", "Martha", "Salome", "Joanna"],
          answer: 0,
          reference: "Luke 10:38-42",
          explanation: "Mary chose to sit and listen to Jesus, which He said was the good part that would not be taken from her."
        },
        {
          question: "Who was the first person Jesus appeared to after His resurrection?",
          options: ["Mary Magdalene", "Peter", "Thomas", "John"],
          answer: 0,
          reference: "John 20:11-18",
          explanation: "Jesus first appeared to Mary Magdalene at the tomb and sent her to tell the disciples."
        },
        {
          question: "Which businesswoman, a seller of purple cloth, became one of Paul's first converts in Philippi?",
          options: ["Lydia", "Priscilla", "Phoebe", "Chloe"],
          answer: 0,
          reference: "Acts 16:14-15",
          explanation: "Lydia, a dealer in purple cloth, opened her heart to Paul's message and was baptized with her household."
        },
        {
          question: "Which prophetess recognized the baby Jesus as the Messiah at the temple?",
          options: ["Anna", "Deborah", "Huldah", "Elizabeth"],
          answer: 0,
          reference: "Luke 2:36-38",
          explanation: "Anna, a prophetess who worshiped in the temple, gave thanks and spoke of Jesus to all who awaited redemption."
        }
      ]
    }
  ];

  // Suggests free Bible studies related to each quiz topic so learners can
  // keep studying after they finish, rather than just checking answers.
  const relatedStudies = {
    "bible-basics": [{ id: "can-we-trust-the-bible", title: "Can We Trust the Bible?" }],
    "life-of-jesus": [
      { id: "who-is-jesus", title: "Who Is Jesus, Really?" },
      { id: "why-did-jesus-die", title: "Saved by Grace: Why Did Jesus Have to Die?" }
    ],
    "old-testament": [
      { id: "great-controversy", title: "Where Did Evil Come From?" },
      { id: "can-we-trust-the-bible", title: "Can We Trust the Bible?" }
    ],
    "new-testament": [
      { id: "holy-spirit-helper", title: "Who Is the Holy Spirit?" },
      { id: "church-body-of-christ", title: "Why Belong to a Church?" }
    ],
    "people-and-places": [{ id: "can-we-trust-the-bible", title: "Can We Trust the Bible?" }],
    "daniel-2": [{ id: "daniel-roadmap", title: "Bible Prophecy: A Roadmap to the Future" }],
    "daniel-7": [{ id: "daniel-roadmap", title: "Bible Prophecy: A Roadmap to the Future" }],
    "daniel-8-9": [
      { id: "daniel-roadmap", title: "Bible Prophecy: A Roadmap to the Future" },
      { id: "sanctuary-judgment", title: "Where Heaven Touches Earth" }
    ],
    "daniel-11": [{ id: "daniel-roadmap", title: "Bible Prophecy: A Roadmap to the Future" }],
    "daniel-12": [
      { id: "daniel-roadmap", title: "Bible Prophecy: A Roadmap to the Future" },
      { id: "what-happens-after-death", title: "What Really Happens After Death?" }
    ],
    "prophetic-symbols": [{ id: "daniel-roadmap", title: "Bible Prophecy: A Roadmap to the Future" }],
    "book-of-revelation": [
      { id: "three-angels-messages", title: "A Final Message to the World" },
      { id: "second-coming", title: "Is Jesus Really Coming Back?" }
    ],
    "parables-of-jesus": [{ id: "who-is-jesus", title: "Who Is Jesus, Really?" }],
    "miracles-of-jesus": [{ id: "who-is-jesus", title: "Who Is Jesus, Really?" }],
    "book-of-acts": [
      { id: "holy-spirit-helper", title: "Who Is the Holy Spirit?" },
      { id: "church-body-of-christ", title: "Why Belong to a Church?" }
    ],
    "women-of-the-bible": [{ id: "does-god-love-you", title: "Does God Really Love You?" }]
  };

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
    previous: player.querySelector("[data-quiz-previous]"),
    saveStatus: player.querySelector("[data-quiz-save-status]"),
    questionPanel: player.querySelector("[data-quiz-question-panel]"),
    result: player.querySelector("[data-quiz-result]"),
    challenge: player.querySelector("[data-quiz-challenge]"),
    resultScore: player.querySelector("[data-quiz-result-score]"),
    resultTitle: player.querySelector("[data-quiz-result-title]"),
    resultMessage: player.querySelector("[data-quiz-result-message]"),
    resultReference: player.querySelector("[data-quiz-result-reference]"),
    resultStudy: player.querySelector("[data-quiz-result-study]"),
    resultStudyLinks: player.querySelector("[data-quiz-result-study-links]"),
    retake: player.querySelector("[data-quiz-retake]"),
    copyLink: player.querySelector("[data-quiz-copy-link]"),
    copyLinkLabel: player.querySelector("[data-quiz-copy-link-label]")
  };

  let activeQuiz = null;
  let activeQuestions = [];
  let questionIndex = 0;
  let answers = [];
  const savedStatePrefix = "word-oasis-quiz:";

  function savedStateKey(quizId) {
    return `${savedStatePrefix}${quizId}`;
  }

  function currentScore() {
    return answers.reduce((total, answer, index) => (
      total + (answer !== null && answer === activeQuestions[index]?.answer ? 1 : 0)
    ), 0);
  }

  function answeredCount() {
    return answers.filter((answer) => answer !== null).length;
  }

  function saveState() {
    if (!activeQuiz || !activeQuestions.length) return;
    try {
      localStorage.setItem(savedStateKey(activeQuiz.id), JSON.stringify({
        questions: activeQuestions,
        answers,
        questionIndex
      }));
      elements.saveStatus.textContent = "Progress saved on this device.";
    } catch (error) {
      elements.saveStatus.textContent = "Progress could not be saved in this browser.";
    }
  }

  function clearSavedState(quizId) {
    try {
      localStorage.removeItem(savedStateKey(quizId));
    } catch (error) {
      elements.saveStatus.textContent = "The saved quiz could not be cleared.";
    }
  }

  function loadSavedState(quizId) {
    try {
      const saved = JSON.parse(localStorage.getItem(savedStateKey(quizId)) || "null");
      if (!saved || !Array.isArray(saved.questions) || !Array.isArray(saved.answers)) return null;
      if (saved.questions.length !== quizzes.find((quiz) => quiz.id === quizId)?.questions.length) return null;
      if (saved.answers.length !== saved.questions.length || saved.answers.some((answer) => answer !== null && !Number.isInteger(answer))) return null;
      return {
        questions: saved.questions,
        answers: saved.answers,
        questionIndex: Math.min(Math.max(Number(saved.questionIndex) || 0, 0), saved.questions.length - 1)
      };
    } catch (error) {
      elements.saveStatus.textContent = "The saved quiz could not be loaded.";
      return null;
    }
  }

  function shuffledQuestions(questions) {
    return questions.map((question) => {
      const options = question.options.map((text, index) => ({
        text,
        correct: index === question.answer
      }));
      for (let index = options.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [options[index], options[randomIndex]] = [options[randomIndex], options[index]];
      }
      return {
        ...question,
        options: options.map((option) => option.text),
        answer: options.findIndex((option) => option.correct)
      };
    });
  }

  function quizPermalink(quizId) {
    return new URL(`/quizzes/${quizId}/`, window.location.origin);
  }

  function quizIdFromPath() {
    const match = window.location.pathname.match(/^\/quizzes\/([^/]+)\/?$/);
    if (!match || !match[1] || match[1] === "index.html") return null;
    return match[1];
  }

  function setQuizUrl(quizId, preserveSharedScore = false) {
    const current = new URL(window.location.href);
    const target = quizId ? quizPermalink(quizId) : new URL("/quizzes/", window.location.origin);
    if (preserveSharedScore) {
      const score = current.searchParams.get("score");
      const total = current.searchParams.get("total");
      if (score !== null) target.searchParams.set("score", score);
      if (total !== null) target.searchParams.set("total", total);
    }
    history.replaceState(null, "", `${target.pathname}${target.search}${target.hash}`);
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
    const total = activeQuestions.length;
    return `I scored ${currentScore()}/${total} on the “${activeQuiz.title}” Bible quiz at Word Oasis. Can you beat my score?`;
  }

  function resultShareUrl() {
    const url = quizPermalink(activeQuiz.id);
    url.searchParams.set("score", String(currentScore()));
    url.searchParams.set("total", String(activeQuestions.length));
    return url.href;
  }

  async function copyTextToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Continue to the legacy clipboard fallback below.
    }

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    } finally {
      textArea.remove();
    }
    return copied;
  }

  async function copyResult() {
    const content = `${resultShareText()} ${resultShareUrl()}`;
    const copied = await copyTextToClipboard(content);
    elements.resultReference.textContent = copied
      ? "Result copied to your clipboard."
      : "This browser could not copy the result. Please copy the page address from the address bar.";
  }

  let copyLinkResetTimer = null;

  async function shareQuizPage() {
    if (!elements.copyLink || !activeQuiz) return;
    const url = quizPermalink(activeQuiz.id).toString();
    const shareData = {
      title: `${activeQuiz.title} Bible Quiz | Word Oasis`,
      text: `Take the “${activeQuiz.title}” Bible quiz at Word Oasis.`,
      url
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
        // Fall through to clipboard copy below if native sharing failed.
      }
    }
    const copied = await copyTextToClipboard(url);
    if (copyLinkResetTimer) clearTimeout(copyLinkResetTimer);
    elements.copyLink.classList.toggle("is-copied", copied);
    if (elements.copyLinkLabel) {
      elements.copyLinkLabel.textContent = copied ? "Link copied!" : "Copy failed";
    }
    copyLinkResetTimer = setTimeout(() => {
      elements.copyLink.classList.remove("is-copied");
      if (elements.copyLinkLabel) elements.copyLinkLabel.textContent = "Share";
    }, 2200);
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

  function renderRelatedStudies() {
    if (!elements.resultStudy || !elements.resultStudyLinks) return;
    const studies = relatedStudies[activeQuiz.id];
    if (!studies || !studies.length) {
      elements.resultStudy.hidden = true;
      return;
    }
    elements.resultStudyLinks.replaceChildren();
    studies.forEach((study) => {
      const link = document.createElement("a");
      link.href = `/studies/${study.id}/`;
      link.textContent = study.title;
      elements.resultStudyLinks.append(link);
    });
    elements.resultStudy.hidden = false;
  }

  function finishQuiz() {
    const score = currentScore();
    const [title, message] = scoreMessage(score, activeQuestions.length);
    elements.questionPanel.hidden = true;
    elements.result.hidden = false;
    elements.resultScore.textContent = `${score}/${activeQuestions.length}`;
    elements.resultTitle.textContent = title;
    elements.resultMessage.textContent = message;
    elements.resultReference.textContent = "Your result is stored only on this page and is not sent to Word Oasis.";
    renderRelatedStudies();
    clearSavedState(activeQuiz.id);
    elements.resultTitle.focus();
  }

  function renderQuestion() {
    const item = activeQuestions[questionIndex];
    const selectedAnswer = answers[questionIndex];
    const hasAnswer = selectedAnswer !== null;
    elements.feedback.hidden = true;
    elements.feedback.replaceChildren();
    elements.progress.textContent = `Question ${questionIndex + 1} of ${activeQuestions.length}`;
    elements.score.textContent = `${currentScore()}/${answeredCount()} correct`;
    elements.progressBar.style.width = `${(answeredCount() / activeQuestions.length) * 100}%`;
    elements.question.textContent = item.question;
    elements.options.replaceChildren();

    item.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.dataset.optionIndex = String(optionIndex);
      button.innerHTML = `<span class="quiz-option-letter" aria-hidden="true">${String.fromCharCode(65 + optionIndex)}</span><span></span>`;
      button.lastElementChild.textContent = option;
      if (hasAnswer) {
        button.disabled = true;
        if (optionIndex === item.answer) button.classList.add("is-correct");
        if (optionIndex === selectedAnswer && selectedAnswer !== item.answer) button.classList.add("is-incorrect");
      }
      elements.options.append(button);
    });
    elements.previous.hidden = questionIndex === 0;
    elements.next.hidden = !hasAnswer;
    elements.next.textContent = questionIndex === activeQuestions.length - 1 && answeredCount() === activeQuestions.length
      ? "See my result →"
      : "Next question →";
    if (hasAnswer) renderFeedback(item, selectedAnswer);
    elements.question.focus();
  }

  function appendScriptureLinks(container, text) {
    const bookPattern = "(?:Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalms?|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation)";
    const referencePattern = new RegExp(
      `\\b${bookPattern}\\s+\\d+(?::\\d+(?:[-–]\\d+)?(?:,\\s*\\d+(?:[-–]\\d+)?)*)?`,
      "g"
    );
    let lastIndex = 0;
    let match;
    while ((match = referencePattern.exec(text))) {
      container.append(document.createTextNode(text.slice(lastIndex, match.index)));
      const reference = document.createElement("button");
      reference.type = "button";
      reference.className = "quiz-reference scripture-link scripture-link-inline";
      reference.dataset.scripture = match[0];
      reference.textContent = match[0];
      container.append(reference);
      lastIndex = match.index + match[0].length;
    }
    container.append(document.createTextNode(text.slice(lastIndex)));
  }

  function renderFeedback(item, selectedAnswer) {
    const correct = selectedAnswer === item.answer;
    const status = document.createElement("div");
    status.className = "quiz-feedback-status";
    const icon = document.createElement("span");
    icon.className = "quiz-feedback-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = correct
      ? '<svg viewBox="0 0 24 24"><path d="m5 13 4 4 10-10"></path></svg>'
      : '<svg viewBox="0 0 24 24"><path d="m6 6 12 12"></path><path d="m18 6-12 12"></path></svg>';
    const statusText = document.createElement("strong");
    statusText.textContent = correct ? "Correct!" : `Not quite — the correct answer is ${item.options[item.answer]}.`;
    status.append(icon, statusText);

    const explanation = document.createElement("p");
    explanation.className = "quiz-feedback-explanation";
    const explanationText = item.explanation.includes(item.reference)
      ? item.explanation
      : `${item.explanation} ${item.reference}`;
    appendScriptureLinks(explanation, explanationText);

    elements.feedback.className = `quiz-feedback ${correct ? "is-correct" : "is-incorrect"}`;
    elements.feedback.replaceChildren(status, explanation);
    elements.feedback.hidden = false;
  }

  function selectAnswer(button) {
    if (answers[questionIndex] !== null) return;
    const item = activeQuestions[questionIndex];
    const selected = Number(button.dataset.optionIndex);
    answers[questionIndex] = selected;

    elements.options.querySelectorAll(".quiz-option").forEach((optionButton) => {
      const optionIndex = Number(optionButton.dataset.optionIndex);
      optionButton.disabled = true;
      if (optionIndex === item.answer) optionButton.classList.add("is-correct");
      if (optionIndex === selected && selected !== item.answer) optionButton.classList.add("is-incorrect");
    });
    renderFeedback(item, selected);
    elements.score.textContent = `${currentScore()}/${answeredCount()} correct`;
    elements.progressBar.style.width = `${(answeredCount() / activeQuestions.length) * 100}%`;
    elements.next.textContent = questionIndex === activeQuestions.length - 1 && answeredCount() === activeQuestions.length
      ? "See my result →"
      : "Next question →";
    elements.next.hidden = false;
    saveState();
    elements.next.focus();
  }

  function startQuiz(quizId, sharedChallenge = null, forceNew = false) {
    activeQuiz = quizzes.find((quiz) => quiz.id === quizId);
    if (!activeQuiz) return;
    const saved = forceNew ? null : loadSavedState(quizId);
    activeQuestions = saved?.questions || shuffledQuestions(activeQuiz.questions);
    answers = saved?.answers || Array(activeQuestions.length).fill(null);
    questionIndex = saved?.questionIndex || 0;
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
    elements.saveStatus.textContent = saved ? "Your saved progress has been restored." : "Progress saves automatically on this device.";
    setQuizUrl(activeQuiz.id, Boolean(sharedChallenge));
    renderQuestion();
    saveState();
    player.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("click", (event) => {
    const seriesButton = event.target.closest("[data-open-series]");
    if (seriesButton) {
      const seriesName = seriesButton.dataset.openSeries;
      const selector = `[data-series-directory="${seriesName}"]`;
      document.querySelectorAll(selector).forEach((element) => {
        element.hidden = false;
      });
      seriesButton.closest(".quiz-card").hidden = true;
      if (window.matchMedia("(max-width: 700px)").matches) {
        const seriesDirectory = document.querySelector(selector);
        requestAnimationFrame(() => {
          seriesDirectory?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return;
    }
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
      return;
    }
    const copyLinkButton = event.target.closest("[data-quiz-copy-link]");
    if (copyLinkButton) {
      shareQuizPage();
    }
  });

  elements.next.addEventListener("click", () => {
    if (answers[questionIndex] === null) return;
    if (questionIndex === activeQuestions.length - 1) {
      if (answeredCount() !== activeQuestions.length) return;
      finishQuiz();
      return;
    }
    questionIndex += 1;
    renderQuestion();
    saveState();
  });
  elements.previous.addEventListener("click", () => {
    if (questionIndex === 0) return;
    questionIndex -= 1;
    saveState();
    renderQuestion();
  });
  player.querySelectorAll("[data-quiz-back]").forEach((button) => {
    button.addEventListener("click", showDirectory);
  });
  elements.retake.addEventListener("click", () => {
    clearSavedState(activeQuiz.id);
    startQuiz(activeQuiz.id, null, true);
  });

  const initialParams = new URLSearchParams(window.location.search);
  const sharedQuiz = quizIdFromPath() || initialParams.get("quiz");
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
