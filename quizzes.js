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
    previous: player.querySelector("[data-quiz-previous]"),
    saveStatus: player.querySelector("[data-quiz-save-status]"),
    questionPanel: player.querySelector("[data-quiz-question-panel]"),
    result: player.querySelector("[data-quiz-result]"),
    challenge: player.querySelector("[data-quiz-challenge]"),
    resultScore: player.querySelector("[data-quiz-result-score]"),
    resultTitle: player.querySelector("[data-quiz-result-title]"),
    resultMessage: player.querySelector("[data-quiz-result-message]"),
    resultReference: player.querySelector("[data-quiz-result-reference]"),
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
    const total = activeQuestions.length;
    return `I scored ${currentScore()}/${total} on the “${activeQuiz.title}” Bible quiz at Word Oasis. Can you beat my score?`;
  }

  function resultShareUrl() {
    const url = new URL("/quizzes/", window.location.origin);
    url.searchParams.set("quiz", activeQuiz.id);
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

  async function copyQuizPageLink() {
    if (!elements.copyLink) return;
    const url = new URL(window.location.href);
    url.searchParams.delete("score");
    url.searchParams.delete("total");
    if (activeQuiz) {
      url.searchParams.set("quiz", activeQuiz.id);
    }
    const copied = await copyTextToClipboard(url.toString());
    if (copyLinkResetTimer) clearTimeout(copyLinkResetTimer);
    elements.copyLink.classList.toggle("is-copied", copied);
    if (elements.copyLinkLabel) {
      elements.copyLinkLabel.textContent = copied ? "Link copied!" : "Copy failed";
    }
    copyLinkResetTimer = setTimeout(() => {
      elements.copyLink.classList.remove("is-copied");
      if (elements.copyLinkLabel) elements.copyLinkLabel.textContent = "Copy link";
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

  function finishQuiz() {
    const score = currentScore();
    const [title, message] = scoreMessage(score, activeQuestions.length);
    elements.questionPanel.hidden = true;
    elements.result.hidden = false;
    elements.resultScore.textContent = `${score}/${activeQuestions.length}`;
    elements.resultTitle.textContent = title;
    elements.resultMessage.textContent = message;
    elements.resultReference.textContent = "Your result is stored only on this page and is not sent to Word Oasis.";
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
    const referencePattern = new RegExp(`\\b${bookPattern}\\s+\\d+(?::\\d+(?:[-–]\\d+)?)?`, "g");
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
    const danielButton = event.target.closest("[data-open-daniel]");
    if (danielButton) {
      document.querySelectorAll("[data-daniel-directory]").forEach((element) => {
        element.hidden = false;
      });
      danielButton.closest(".quiz-card").hidden = true;
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
      copyQuizPageLink();
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
