(() => {
  "use strict";

  const STUDY_VERSE_TEXT = {"John 3:16":{"web":"For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.","kjv":"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.","asv":"For God so loved the world, that he gave his only begotten Son, that whosoever believeth on him should not perish, but have eternal life."},"Romans 5:8":{"web":"But God commends his own love toward us, in that while we were yet sinners, Christ died for us.","kjv":"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.","asv":"But God commendeth his own love toward us, in that, while we were yet sinners, Christ died for us."},"Jeremiah 31:3":{"web":"Yahweh appeared of old to me, saying, “Yes, I have loved you with an everlasting love. Therefore I have drawn you with loving kindness.","kjv":"The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.","asv":"Jehovah appeared of old unto me, [saying], Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee."},"1 John 3:1":{"web":"See how great a love the Father has given to us, that we should be called children of God! For this cause the world doesn’t know us, because it didn’t know him.","kjv":"Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.","asv":"Behold what manner of love the Father hath bestowed upon us, that we should be called children of God; and [such] we are. For this cause the world knoweth us not, because it knew him not."},"Isaiah 49:15":{"web":"“Can a woman forget her nursing child, that she should not have compassion on the son of her womb? Yes, these may forget, yet I will not forget you!","kjv":"Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, they may forget, yet will I not forget thee.","asv":"Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, these may forget, yet will not I forget thee."},"Romans 8:38-39":{"web":"For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing, will be able to separate us from God’s love, which is in Christ Jesus our Lord.","kjv":"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.","asv":"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers,nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."},"1 John 4:19":{"web":"We love him, because he first loved us.","kjv":"We love him, because he first loved us.","asv":"We love, because he first loved us."},"Lamentations 3:22-23":{"web":"It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail. They are new every morning. Great is your faithfulness.","kjv":"It is of the LORD’S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.","asv":"[It is of] Jehovah`s lovingkindnesses that we are not consumed, because his compassions fail not.They are new every morning; great is thy faithfulness."},"2 Timothy 3:16":{"web":"Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness,","kjv":"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:","asv":"Every scripture inspired of God [is] also profitable for teaching, for reproof, for correction, for instruction which is in righteousness."},"2 Peter 1:21":{"web":"For no prophecy ever came by the will of man: but holy men of God spoke, being moved by the Holy Spirit.","kjv":"For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.","asv":"For no prophecy ever came by the will of man: but men spake from God, being moved by the Holy Spirit."},"Matthew 24:35":{"web":"Heaven and earth will pass away, but my words will not pass away.","kjv":"Heaven and earth shall pass away, but my words shall not pass away.","asv":"Heaven and earth shall pass away, but my words shall not pass away."},"Isaiah 40:8":{"web":"The grass withers, the flower fades; but the word of our God stands forever.”","kjv":"The grass withereth, the flower fadeth: but the word of our God shall stand for ever.","asv":"The grass withereth, the flower fadeth; but the word of our God shall stand forever."},"Psalm 119:105":{"web":"Your word is a lamp to my feet, and a light for my path.","kjv":"Thy word is a lamp unto my feet, and a light unto my path.","asv":"Thy word is a lamp unto my feet, And light unto my path."},"Psalm 119:89":{"web":"Yahweh, your word is settled in heaven forever.","kjv":"For ever, O LORD, thy word is settled in heaven.","asv":"For ever, O Jehovah, Thy word is settled in heaven."},"Acts 17:11":{"web":"Now these were more noble than those in Thessalonica, in that they received the word with all readiness of mind, examining the Scriptures daily to see whether these things were so.","kjv":"These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.","asv":"Now these were more noble than those in Thessalonica, in that they received the word with all readiness of the mind, examining the Scriptures daily, whether these things were so."},"Proverbs 30:5-6":{"web":"“Every word of God is flawless. He is a shield to those who take refuge in him. Don’t you add to his words, lest he reprove you, and you be found a liar.","kjv":"Every word of God is pure: he is a shield unto them that put their trust in him. Add thou not unto his words, lest he reprove thee, and thou be found a liar.","asv":"Every word of God is tried: He is a shield unto them that take refuge in him.Add thou not unto his words, Lest he reprove thee, and thou be found a liar."},"John 1:1":{"web":"In the beginning was the Word, and the Word was with God, and the Word was God.","kjv":"In the beginning was the Word, and the Word was with God, and the Word was God.","asv":"In the beginning was the Word, and the Word was with God, and the Word was God."},"John 1:14":{"web":"The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.","kjv":"And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.","asv":"And the Word became flesh, and dwelt among us (and we beheld his glory, glory as of the only begotten from the Father), full of grace and truth."},"John 14:6":{"web":"Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father, except through me.","kjv":"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.","asv":"Jesus saith unto him, I am the way, and the truth, and the life: no one cometh unto the Father, but by me."},"Isaiah 9:6":{"web":"For to us a child is born. To us a son is given; and the government will be on his shoulders. His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace.","kjv":"For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.","asv":"For unto us a child is born, unto us a son is given; and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, Mighty God, Everlasting Father, Prince of Peace."},"Acts 4:12":{"web":"There is salvation in none other, for neither is there any other name under heaven, that is given among men, by which we must be saved!”","kjv":"Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.","asv":"And in none other is there salvation: for neither is there any other name under heaven, that is given among men, wherein we must be saved."},"Hebrews 1:3":{"web":"His Son is the radiance of his glory, the very image of his substance, and upholding all things by the word of his power, who, when he had by himself purified us of our sins, sat down on the right hand of the Majesty on high;","kjv":"Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high;","asv":"who being the effulgence of his glory, and the very image of his substance, and upholding all things by the word of his power, when he had made purification of sins, sat down on the right hand of the Majesty on high;"},"Hebrews 13:8":{"web":"Jesus Christ is the same yesterday, today, and forever.","kjv":"Jesus Christ the same yesterday, and to day, and for ever.","asv":"Jesus Christ [is] the same yesterday and to-day, [yea] and for ever."},"Colossians 2:9":{"web":"For in him all the fullness of the Deity dwells bodily,","kjv":"For in him dwelleth all the fulness of the Godhead bodily.","asv":"for in him dwelleth all the fulness of the Godhead bodily,"},"Romans 6:23":{"web":"For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.","kjv":"For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.","asv":"For the wages of sin is death; but the free gift of God is eternal life in Christ Jesus our Lord."},"Ephesians 2:8-9":{"web":"for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.","kjv":"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.","asv":"for by grace have ye been saved through faith; and that not of yourselves, [it is] the gift of God;not of works, that no man should glory."},"Isaiah 53:5":{"web":"But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.","kjv":"But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.","asv":"But he was wounded for our transgressions, he was bruised for our iniquities; the chastisement of our peace was upon him; and with his stripes we are healed."},"2 Corinthians 5:21":{"web":"For him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God.","kjv":"For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.","asv":"Him who knew no sin he made [to be] sin on our behalf; that we might become the righteousness of God in him."},"1 John 1:9":{"web":"If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.","kjv":"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.","asv":"If we confess our sins, he is faithful and righteous to forgive us our sins, and to cleanse us from all unrighteousness."},"Romans 8:1":{"web":"There is therefore now no condemnation to those who are in Christ Jesus, who don’t walk according to the flesh, but according to the Spirit.","kjv":"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.","asv":"There is therefore now no condemnation to them that are in Christ Jesus."},"1 John 4:10":{"web":"In this is love, not that we loved God, but that he loved us, and sent his Son as the atoning sacrifice for our sins.","kjv":"Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.","asv":"Herein is love, not that we loved God, but that he loved us, and sent his Son [to be] the propitiation for our sins."},"Romans 3:24":{"web":"being justified freely by his grace through the redemption that is in Christ Jesus;","kjv":"Being justified freely by his grace through the redemption that is in Christ Jesus:","asv":"being justified freely by his grace through the redemption that is in Christ Jesus:"},"Matthew 5:17":{"web":"“Don’t think that I came to destroy the law or the prophets. I didn’t come to destroy, but to fulfill.","kjv":"Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.","asv":"Think not that I came to destroy the law or the prophets: I came not to destroy, but to fulfil."},"1 John 3:4":{"web":"Everyone who sins also commits lawlessness. Sin is lawlessness.","kjv":"Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.","asv":"Every one that doeth sin doeth also lawlessness; and sin is lawlessness."},"Romans 3:31":{"web":"Do we then nullify the law through faith? May it never be! No, we establish the law.","kjv":"Do we then make void the law through faith? God forbid: yea, we establish the law.","asv":"Do we then make the law of none effect through faith? God forbid: nay, we establish the law."},"John 14:15":{"web":"If you love me, keep my commandments.","kjv":"If ye love me, keep my commandments.","asv":"If ye love me, ye will keep my commandments."},"Psalm 19:7":{"web":"Yahweh’s law is perfect, restoring the soul. Yahweh’s testimony is sure, making wise the simple.","kjv":"The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.","asv":"The law of Jehovah is perfect, restoring the soul: The testimony of Jehovah is sure, making wise the simple."},"Ecclesiastes 12:13":{"web":"This is the end of the matter. All has been heard. Fear God, and keep his commandments; for this is the whole duty of man.","kjv":"Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.","asv":"[This is] the end of the matter; all hath been heard: fear God, and keep his commandments; for this is the whole [duty] of man."},"Revelation 22:14":{"web":"Blessed are those who do his commandments, that they may have the right to the tree of life, and may enter in by the gates into the city.","kjv":"Blessed are they that do his commandments, that they may have right to the tree of life, and may enter in through the gates into the city.","asv":"Blessed are they that wash their robes, that they may have the right [to come] to the tree of life, and my enter in by the gates into the city."},"1 John 5:3":{"web":"For this is loving God, that we keep his commandments. His commandments are not grievous.","kjv":"For this is the love of God, that we keep his commandments: and his commandments are not grievous.","asv":"For this is the love of God, that we keep his commandments: and his commandments are not grievous."},"Genesis 2:2":{"web":"On the seventh day God finished his work which he had done; and he rested on the seventh day from all his work which he had done.","kjv":"And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.","asv":"And on the seventh day God finished his work which he had made; and he rested on the seventh day from all his work which he had made."},"Genesis 2:3":{"web":"God blessed the seventh day, and made it holy, because he rested in it from all his work of creation which he had done.","kjv":"And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.","asv":"And God blessed the seventh day, and hallowed it; because that in it he rested from all his work which God had created and made."},"Exodus 20:8":{"web":"“Remember the Sabbath day, to keep it holy.","kjv":"Remember the sabbath day, to keep it holy.","asv":"Remember the sabbath day, to keep it holy."},"Exodus 20:10":{"web":"but the seventh day is a Sabbath to Yahweh your God. You shall not do any work in it, you, nor your son, nor your daughter, your male servant, nor your female servant, nor your livestock, nor your stranger who is within your gates;","kjv":"But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:","asv":"but the seventh day is a sabbath unto Jehovah thy God: [in it] thou shalt not do any work, thou, nor thy son, nor thy daughter, thy man-servant, nor thy maid-servant, nor thy cattle, nor thy stranger that is within thy gates:"},"Mark 2:27":{"web":"He said to them, “The Sabbath was made for man, not man for the Sabbath.","kjv":"And he said unto them, The sabbath was made for man, and not man for the sabbath:","asv":"And he said unto them, The sabbath was made for man, and not man for the sabbath:"},"Isaiah 58:13":{"web":"“If you turn away your foot from the Sabbath, from doing your pleasure on my holy day; and call the Sabbath a delight, and the holy of Yahweh honorable; and shall honor it, not doing your own ways, nor finding your own pleasure, nor speaking your own words:","kjv":"If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the LORD, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words:","asv":"If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, [and] the holy of Jehovah honorable; and shalt honor it, not doing thine own ways, nor finding thine own pleasure, nor speaking [thine own] words:"},"Luke 4:16":{"web":"He came to Nazareth, where he had been brought up. He entered, as was his custom, into the synagogue on the Sabbath day, and stood up to read.","kjv":"And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.","asv":"And he came to Nazareth, where he had been brought up: and he entered, as his custom was, into the synagogue on the sabbath day, and stood up to read."},"Isaiah 66:23":{"web":"It shall happen that from one new moon to another, and from one Sabbath to another, all flesh will come to worship before me,” says Yahweh.","kjv":"And it shall come to pass, that from one new moon to another, and from one sabbath to another, shall all flesh come to worship before me, saith the LORD.","asv":"And it shall come to pass, that from one new moon to another, and from one sabbath to another, shall all flesh come to worship before me, saith Jehovah."},"Ecclesiastes 9:5":{"web":"For the living know that they will die, but the dead don’t know anything, neither do they have any more a reward; for their memory is forgotten.","kjv":"For the living know that they shall die: but the dead know not any thing, neither have they any more a reward; for the memory of them is forgotten.","asv":"For the living know that they shall die: but the dead know not anything, neither have they any more a reward; for the memory of them is forgotten."},"Genesis 3:19":{"web":"By the sweat of your face will you eat bread until you return to the ground, for out of it you were taken. For you are dust, and to dust you shall return.”","kjv":"In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return.","asv":"in the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return."},"Ezekiel 18:20":{"web":"The soul who sins, he shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son. The righteousness of the righteous shall be on him, and the wickedness of the wicked shall be on him.","kjv":"The soul that sinneth, it shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son: the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him.","asv":"The soul that sinneth, it shall die: the son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son; the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him."},"John 5:28":{"web":"Don’t marvel at this, for the hour comes, in which all that are in the tombs will hear his voice,","kjv":"Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice,","asv":"Marvel not at this: for the hour cometh, in which all that are in the tombs shall hear his voice,"},"1 Corinthians 15:52":{"web":"in a moment, in the twinkling of an eye, at the last trumpet. For the trumpet will sound, and the dead will be raised incorruptible, and we will be changed.","kjv":"In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed.","asv":"in a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed."},"John 11:25":{"web":"Jesus said to her, “I am the resurrection and the life. He who believes in me will still live, even if he dies.","kjv":"Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:","asv":"Jesus said unto her, I am the resurrection, and the life: he that believeth on me, though he die, yet shall he live;"},"Revelation 20:6":{"web":"Blessed and holy is he who has part in the first resurrection. Over these, the second death has no power, but they will be priests of God and of Christ, and will reign with him one thousand years.","kjv":"Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.","asv":"Blessed and holy is he that hath part in the first resurrection: over these the second death hath no power; but they shall be priests of God and of Christ, and shall reign with him a thousand years."},"Acts 1:11":{"web":"who also said, “You men of Galilee, why do you stand looking into the sky? This Jesus, who was received up from you into the sky, will come back in the same way as you saw him going into the sky.”","kjv":"Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.","asv":"who also said, Ye men of Galilee, why stand ye looking into heaven? this Jesus, who was received up from you into heaven shall so come in like manner as ye beheld him going into heaven."},"1 Thessalonians 4:16":{"web":"For the Lord himself will descend from heaven with a shout, with the voice of the archangel, and with God’s trumpet. The dead in Christ will rise first,","kjv":"For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first:","asv":"For the Lord himself shall descend from heaven, with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first;"},"Revelation 1:7":{"web":"Behold, he is coming with the clouds, and every eye will see him, including those who pierced him. All the tribes of the earth will mourn over him. Even so, Amen.","kjv":"Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen.","asv":"Behold, he cometh with the clouds; and every eye shall see him, and they that pierced him; and all the tribes of the earth shall mourn over him. Even so, Amen."},"Revelation 22:20":{"web":"He who testifies these things says, “Yes, I come quickly.” Amen! Yes, come, Lord Jesus.","kjv":"He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.","asv":"He who testifieth these things saith, Yea: I come quickly. Amen: come, Lord Jesus."},"Matthew 24:36":{"web":"But no one knows of that day and hour, not even the angels of heaven, but my Father only.","kjv":"But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.","asv":"But of that day and hour knoweth no one, not even the angels of heaven, neither the Son, but the Father only."},"John 14:1-3":{"web":"“Don’t let your heart be troubled. Believe in God. Believe also in me. In my Father’s house are many homes. If it weren’t so, I would have told you. I am going to prepare a place for you. If I go and prepare a place for you, I will come again, and will receive you to myself; that where I am, you may be there also.","kjv":"Let not your heart be troubled: ye believe in God, believe also in me. In my Father’s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you. And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.","asv":"Let not your heart be troubled: believe in God, believe also in me.In my Father`s house are many mansions; if it were not so, I would have told you; for I go to prepare a place for you.And if I go and prepare a place for you, I come again, and will receive you unto myself; that where I am, [there] ye may be also."},"John 14:2":{"web":"In my Father’s house are many homes. If it weren’t so, I would have told you. I am going to prepare a place for you.","kjv":"In my Father’s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.","asv":"In my Father`s house are many mansions; if it were not so, I would have told you; for I go to prepare a place for you."},"1 Thessalonians 4:17":{"web":"then we who are alive, who are left, will be caught up together with them in the clouds, to meet the Lord in the air. So we will be with the Lord forever.","kjv":"Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.","asv":"then we that are alive, that are left, shall together with them be caught up in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord."},"Daniel 2:31":{"web":"“You, O king, saw, and behold, a great image. This image, which was mighty, and whose brightness was excellent, stood before you; and its appearance was terrifying.","kjv":"Thou, O king, sawest, and behold a great image. This great image, whose brightness was excellent, stood before thee; and the form thereof was terrible.","asv":"Thou, O king, sawest, and, behold, a great image. This image, which was mighty, and whose brightness was excellent, stood before thee; and the aspect thereof was terrible."},"Daniel 2:32":{"web":"As for this image, its head was of fine gold, its breast and its arms of silver, its belly and its thighs of brass,","kjv":"This image’s head was of fine gold, his breast and his arms of silver, his belly and his thighs of brass,","asv":"As for this image, its head was of fine gold, its breast and its arms of silver, its belly and its thighs of brass,"},"Daniel 2:44":{"web":"“In the days of those kings the God of heaven will set up a kingdom which will never be destroyed, nor will its sovereignty be left to another people; but it will break in pieces and consume all these kingdoms, and it will stand forever.","kjv":"And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed: and the kingdom shall not be left to other people, but it shall break in pieces and consume all these kingdoms, and it shall stand for ever.","asv":"And in the days of those kings shall the God of heaven set up a kingdom which shall never be destroyed, nor shall the sovereignty thereof be left to another people; but it shall break in pieces and consume all these kingdoms, and it shall stand for ever."},"Daniel 2:45":{"web":"Because you saw that a stone was cut out of the mountain without hands, and that it broke in pieces the iron, the brass, the clay, the silver, and the gold; the great God has made known to the king what will happen hereafter. The dream is certain, and its interpretation sure.”","kjv":"Forasmuch as thou sawest that the stone was cut out of the mountain without hands, and that it brake in pieces the iron, the brass, the clay, the silver, and the gold; the great God hath made known to the king what shall come to pass hereafter: and the dream is certain, and the interpretation thereof sure.","asv":"Forasmuch as thou sawest that a stone was cut out of the mountain without hands, and that it brake in pieces the iron, the brass, the clay, the silver, and the gold; the great God hath made known to the king what shall come to pass hereafter: and the dream is certain, and the interpretation thereof sure."},"Daniel 12:4":{"web":"But you, Daniel, shut up the words, and seal the book, even to the time of the end. Many will run back and forth, and knowledge will be increased.”","kjv":"But thou, O Daniel, shut up the words, and seal the book, even to the time of the end: many shall run to and fro, and knowledge shall be increased.","asv":"But thou, O Daniel, shut up the words, and seal the book, even to the time of the end: many shall run to and fro, and knowledge shall be increased."},"Daniel 12:10":{"web":"Many will purify themselves, and make themselves white, and be refined; but the wicked will do wickedly; and none of the wicked will understand; but those who are wise will understand.","kjv":"Many shall be purified, and made white, and tried; but the wicked shall do wickedly: and none of the wicked shall understand; but the wise shall understand.","asv":"Many shall purify themselves, and make themselves white, and be refined; but the wicked shall do wickedly; and none of the wicked shall understand; but they that are wise shall understand."},"Daniel 12:1":{"web":"“At that time Michael will stand up, the great prince who stands for the children of your people; and there will be a time of trouble, such as never was since there was a nation even to that same time. At that time your people will be delivered, everyone who is found written in the book.","kjv":"And at that time shall Michael stand up, the great prince which standeth for the children of thy people: and there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book.","asv":"And at that time shall Michael stand up, the great prince who standeth for the children of thy people; and there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book."}};

  const STUDY_ANSWER_OVERRIDES = {"Matthew 5:17":{"web":"fulfill"},"Isaiah 49:15":{"kjv":"thee","asv":"thee"},"2 Timothy 3:16":{"web":"teaching","asv":"teaching"},"2 Peter 1:21":{"kjv":"Holy Ghost"},"Isaiah 40:8":{"kjv":"for ever"},"Hebrews 13:8":{"kjv":"for ever","asv":"for ever"},"Colossians 2:9":{"web":"Deity"},"1 John 4:10":{"web":"atoning sacrifice"},"Psalm 19:7":{"web":"restoring","asv":"restoring"},"1 John 5:3":{"web":"grievous","kjv":"grievous","asv":"grievous"},"Genesis 2:3":{"web":"holy","asv":"hallowed"},"Ecclesiastes 9:5":{"web":"anything","kjv":"any thing"},"Acts 1:11":{"web":"sky"},"John 14:2":{"web":"homes"}};

  const studies = [
    {
      id: "does-god-love-you",
      category: "foundations",
      categoryLabel: "Foundations",
      title: "Does God Really Love You?",
      summary: "Before anything else, settle this one question: how does God feel about you, right now, today?",
      duration: "10 min",
      icon: "heart",
      keyThought: "Every other Bible truth rests on this one. God's love for you is not a mood that changes — it is a settled fact, proven at the cross and repeated all through Scripture.",
      statements: [
        { text: "For God so loved the world that he gave his only ___, that whoever believes in him should not perish but have everlasting life.", options: ["Son", "angel", "prophet", "law"], answer: 0, reference: "John 3:16", insight: "God's love is proven by a gift — the greatest gift He had to give." },
        { text: "But God shows his own love for us in that while we were still ___, Christ died for us.", options: ["sinners", "faithful", "obedient", "worthy"], answer: 0, reference: "Romans 5:8", insight: "God didn't wait for us to improve first. Love reached us exactly where we were." },
        { text: "I have loved you with an ___ love; therefore I have continued my faithfulness to you.", options: ["everlasting", "occasional", "conditional", "distant"], answer: 0, reference: "Jeremiah 31:3", insight: "God describes His love as without end — not on-again, off-again." },
        { text: "See what kind of love the Father has given to us, that we should be called children of ___.", options: ["God", "angels", "kings", "priests"], answer: 0, reference: "1 John 3:1", insight: "Love doesn't just forgive you — it adopts you into the family." },
        { text: "Can a woman forget her nursing child... even these may forget, yet I will not forget ___.", options: ["you", "Israel", "the earth", "the righteous"], answer: 0, reference: "Isaiah 49:15", insight: "God compares His memory of you to the strongest human bond we know, and says His is even stronger." },
        { text: "Neither death nor life... will be able to separate us from the ___ of God in Christ Jesus our Lord.", options: ["love", "presence", "mercy", "kingdom"], answer: 0, reference: "Romans 8:38-39", insight: "Nothing on the list — not even death — can put you outside the reach of God's love." },
        { text: "We love because he ___ loved us.", options: ["first", "secretly", "only", "briefly"], answer: 0, reference: "1 John 4:19", insight: "Love is not something we earn from God; it's something we receive and then pass on." },
        { text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every ___.", options: ["morning", "season", "generation", "century"], answer: 0, reference: "Lamentations 3:22-23", insight: "God's love doesn't run out — it renews itself daily, no matter how the day before went." }
      ],
      closingThought: "God's love for you isn't a reward for good behavior — it's the reason good things become possible at all. You are not loved because you are good; you are loved because that is who God is.",
      decision: "Will you accept that God loves you today, as you are, right now?"
    },
    {
      id: "can-we-trust-the-bible",
      category: "foundations",
      categoryLabel: "Foundations",
      title: "Can We Trust the Bible?",
      summary: "In a world full of conflicting opinions, is there a book we can actually build our lives on?",
      duration: "9 min",
      icon: "book",
      keyThought: "The Bible doesn't ask to be admired from a distance — it invites you to test it, search it, and see for yourself whether it holds up.",
      statements: [
        { text: "All Scripture is given by inspiration of God, and is profitable for ___, for reproof, for correction, for instruction in righteousness.", options: ["doctrine", "entertainment", "history", "tradition"], answer: 0, reference: "2 Timothy 3:16", insight: "Scripture claims a divine source, and a practical purpose: to shape how we live." },
        { text: "For prophecy never came by the will of man, but holy men of God spoke as they were moved by the ___ ___.", options: ["Holy Spirit", "ancient kings", "wise elders", "ruling priests"], answer: 0, reference: "2 Peter 1:21", insight: "The human writers wrote, but the message originated with God." },
        { text: "Heaven and earth will pass away, but my ___ will never pass away.", options: ["words", "temple", "throne", "law courts"], answer: 0, reference: "Matthew 24:35", insight: "Jesus staked His own reliability on the durability of His words." },
        { text: "The grass withers, the flower fades, but the word of our God will stand ___.", options: ["forever", "for a season", "for a time", "for a generation"], answer: 0, reference: "Isaiah 40:8", insight: "Everything else fades. Scripture is presented as the one constant." },
        { text: "Your word is a ___ to my feet, and a light to my path.", options: ["lamp", "sword", "shield", "key"], answer: 0, reference: "Psalm 119:105", insight: "The Bible isn't meant to be a museum piece — it's meant to guide daily steps." },
        { text: "Forever, O LORD, your word is ___ in heaven.", options: ["settled", "spoken", "hidden", "sealed"], answer: 0, reference: "Psalm 119:89", insight: "God's word isn't up for renegotiation with each new generation." },
        { text: "These believers in Berea searched the Scriptures ___, to see whether these things were so.", options: ["daily", "occasionally", "once", "reluctantly"], answer: 0, reference: "Acts 17:11", insight: "The Bible commends people who checked even an apostle's teaching against Scripture itself." },
        { text: "Every word of God is pure... Add not to his words, lest he ___ you, and you be found a liar.", options: ["reprove", "ignore", "forget", "ridicule"], answer: 0, reference: "Proverbs 30:5-6", insight: "The Bible invites careful, honest handling — not adding to it or twisting it to fit an agenda." }
      ],
      closingThought: "The most convincing case for Scripture isn't a debate you win — it's a habit you build. Read it for yourself, and let it speak.",
      decision: "Are you willing to test the Bible's promises for yourself, one page at a time?"
    },
    {
      id: "who-is-jesus",
      category: "jesus",
      categoryLabel: "About Jesus",
      title: "Who Is Jesus, Really?",
      summary: "Prophet? Good teacher? Or something more? Scripture leaves little room for a middle answer.",
      duration: "9 min",
      icon: "cross",
      keyThought: "The identity of Jesus is not a side issue in Scripture — it's the hinge everything else turns on.",
      statements: [
        { text: "In the beginning was the Word, and the Word was with God, and the Word was ___.", options: ["God", "an angel", "a prophet", "a spirit"], answer: 0, reference: "John 1:1", insight: "John opens by identifying Jesus, the Word, as divine — eternally with God and fully God." },
        { text: "And the Word became ___, and lived among us.", options: ["flesh", "light", "spirit", "law"], answer: 0, reference: "John 1:14", insight: "The eternal Word entered human history as a real, physical person." },
        { text: "Jesus said, I am the way, the truth, and the ___: no one comes to the Father except through me.", options: ["life", "gate", "vine", "law"], answer: 0, reference: "John 14:6", insight: "Jesus doesn't present Himself as one path among many, but as the way itself." },
        { text: "For unto us a child is born... and his name will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of ___.", options: ["Peace", "Glory", "Israel", "Heaven"], answer: 0, reference: "Isaiah 9:6", insight: "This prophecy, written centuries before Jesus' birth, already describes Him as God Himself." },
        { text: "Neither is there salvation in any other: for there is no other ___ under heaven given among men by which we must be saved.", options: ["name", "way", "temple", "prophet"], answer: 0, reference: "Acts 4:12", insight: "The apostles preached Jesus as the only sufficient answer to humanity's deepest need." },
        { text: "He is the radiance of God's glory and the exact representation of his being... he sat down at the right hand of the Majesty on ___.", options: ["high", "earth", "Zion", "a throne of gold"], answer: 0, reference: "Hebrews 1:3", insight: "Jesus doesn't merely represent God — He reveals exactly who God is." },
        { text: "Jesus Christ is the same yesterday, today, and ___.", options: ["forever", "for a season", "for a time", "for a generation"], answer: 0, reference: "Hebrews 13:8", insight: "The Jesus of the Gospels is not a different person than the Jesus who meets you today." },
        { text: "For in him all the fullness of the ___ dwells in bodily form.", options: ["Godhead", "Spirit", "glory", "law"], answer: 0, reference: "Colossians 2:9", insight: "Paul leaves no ambiguity: in Jesus, God Himself took on a body." }
      ],
      closingThought: "If Jesus is who Scripture says He is, then the question isn't really 'who is He?' — it's 'what will you do with Him?'",
      decision: "Will you settle, today, who you believe Jesus is?"
    },
    {
      id: "why-did-jesus-die",
      category: "jesus",
      categoryLabel: "About Jesus",
      title: "Saved by Grace: Why Did Jesus Have to Die?",
      summary: "The cross is at the center of the Christian story. What was actually accomplished there — and what does it mean for you?",
      duration: "10 min",
      icon: "gift",
      keyThought: "Salvation is not something you earn by being good enough. It's a gift, offered because you couldn't have earned it any other way.",
      statements: [
        { text: "For the wages of sin is death, but the gift of God is ___ life through Jesus Christ our Lord.", options: ["eternal", "temporary", "hidden", "future"], answer: 0, reference: "Romans 6:23", insight: "Sin earns a wage; grace gives a gift. Those are two very different transactions." },
        { text: "For by grace you have been saved through faith, and that not of yourselves; it is the ___ of God, not of works, so that no one may boast.", options: ["gift", "wage", "reward", "debt"], answer: 0, reference: "Ephesians 2:8-9", insight: "Even the faith to believe is described as a gift — salvation leaves no room for self-congratulation." },
        { text: "But he was wounded for our transgressions, he was bruised for our iniquities... and with his stripes we are ___.", options: ["healed", "forgotten", "judged", "excused"], answer: 0, reference: "Isaiah 53:5", insight: "Centuries before Calvary, this prophecy described exactly what the cross would accomplish." },
        { text: "For our sake he made him to be sin who knew no sin, so that in him we might become the ___ of God.", options: ["righteousness", "servants", "children", "priests"], answer: 0, reference: "2 Corinthians 5:21", insight: "An exchange happens at the cross: our guilt is credited to Him, His righteousness is credited to us." },
        { text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all ___.", options: ["unrighteousness", "memory", "weakness", "doubt"], answer: 0, reference: "1 John 1:9", insight: "Forgiveness isn't reluctant on God's part — it's described as faithful and just, a promise He keeps." },
        { text: "There is therefore now no ___ for those who are in Christ Jesus.", options: ["condemnation", "confusion", "delay", "exception"], answer: 0, reference: "Romans 8:1", insight: "Once you're in Christ, the verdict has already been settled in your favor." },
        { text: "In this is love, not that we loved God, but that he loved us and sent his Son to be the ___ for our sins.", options: ["propitiation", "judge", "example", "teacher"], answer: 0, reference: "1 John 4:10", insight: "God didn't wait for us to love Him first — He made the first move, all the way to the cross." },
        { text: "Being justified freely by his ___ through the redemption that is in Christ Jesus.", options: ["grace", "works", "law", "wisdom"], answer: 0, reference: "Romans 3:24", insight: "'Justified' means declared right with God — and it comes free, through grace." }
      ],
      closingThought: "The cross says two things at once: sin is serious enough that it cost everything, and you are loved enough that God paid it.",
      decision: "Will you receive what the cross already accomplished, instead of trying to earn it yourself?"
    },
    {
      id: "gods-law-today",
      category: "living",
      categoryLabel: "Christian Living",
      title: "Are the Ten Commandments Still Important?",
      summary: "If we're saved by grace, do God's commandments still matter — or were they only for ancient Israel?",
      duration: "9 min",
      icon: "scroll",
      keyThought: "Grace doesn't cancel God's law — it changes our relationship to it, from an obligation we fear to a description of the life we now want to live.",
      statements: [
        { text: "Think not that I have come to destroy the law or the prophets: I have not come to destroy, but to ___.", options: ["fulfil", "replace", "abolish", "hide"], answer: 0, reference: "Matthew 5:17", insight: "Jesus explicitly denies coming to cancel God's law — He came to fully live it out and explain it." },
        { text: "Sin is the transgression of the ___.", options: ["law", "covenant", "prophets", "temple"], answer: 0, reference: "1 John 3:4", insight: "Without a standard, 'sin' wouldn't even have meaning. The law defines what love requires." },
        { text: "Do we then make the law void through faith? Certainly not! On the contrary, we ___ the law.", options: ["establish", "abolish", "replace", "ignore"], answer: 0, reference: "Romans 3:31", insight: "Faith and obedience aren't opposites in Scripture — genuine faith produces obedience." },
        { text: "If you love me, keep my ___.", options: ["commandments", "traditions", "feasts", "opinions"], answer: 0, reference: "John 14:15", insight: "Jesus ties love directly to obedience, not as a burden but as its natural fruit." },
        { text: "The law of the LORD is perfect, ___ the soul.", options: ["converting", "confusing", "burdening", "replacing"], answer: 0, reference: "Psalm 19:7", insight: "The psalmist doesn't describe the law as a weight, but as something that restores and renews." },
        { text: "Let us hear the conclusion of the whole matter: fear God and keep his commandments, for this is the whole ___ of man.", options: ["duty", "hope", "wisdom", "burden"], answer: 0, reference: "Ecclesiastes 12:13", insight: "After exploring every pursuit under the sun, Solomon's conclusion returns to this one point." },
        { text: "Blessed are those who do his commandments, that they may have the right to the tree of ___.", options: ["life", "knowledge", "glory", "wisdom"], answer: 0, reference: "Revelation 22:14", insight: "Even in the closing chapter of Scripture, keeping God's commandments is tied to the promise of life." },
        { text: "For this is the love of God, that we keep his commandments, and his commandments are not ___.", options: ["burdensome", "optional", "temporary", "hidden"], answer: 0, reference: "1 John 5:3", insight: "When obedience flows from love rather than fear, it stops feeling like a weight to carry." }
      ],
      closingThought: "God's commandments were never meant to be a ladder to climb toward His approval — they're a portrait of the character His grace produces in a willing heart.",
      decision: "Will you ask God to write His law on your heart, not just in a book?"
    },
    {
      id: "the-sabbath-rest",
      category: "living",
      categoryLabel: "Christian Living",
      title: "The Sabbath: A Gift of Rest",
      summary: "In a world that never stops, could one of the oldest commands in the Bible be exactly what we're missing?",
      duration: "9 min",
      icon: "sun",
      keyThought: "The Sabbath isn't a rule tacked onto creation — it's built into the very rhythm of it, a weekly appointment with rest and with God.",
      statements: [
        { text: "And on the seventh day God finished his work... and he ___ on the seventh day from all his work.", options: ["rested", "worked", "traveled", "judged"], answer: 0, reference: "Genesis 2:2", insight: "Even before sin entered the world, God modeled a rhythm of work followed by rest." },
        { text: "And God blessed the seventh day and ___ it, because on it he rested from all his work.", options: ["sanctified", "cursed", "forgot", "hid"], answer: 0, reference: "Genesis 2:3", insight: "God didn't just rest on the seventh day — He set it apart as holy, for all time." },
        { text: "Remember the Sabbath day, to keep it ___.", options: ["holy", "quiet", "busy", "private"], answer: 0, reference: "Exodus 20:8", insight: "Of the Ten Commandments, this is the only one that begins with the word 'remember.'" },
        { text: "The seventh day is a Sabbath to the LORD your God. On it you shall not do any ___.", options: ["work", "resting", "worship", "traveling"], answer: 0, reference: "Exodus 20:10", insight: "The command includes everyone in the household — a shared, communal rest." },
        { text: "The Sabbath was made for man, and not man for the ___.", options: ["Sabbath", "priest", "temple", "law"], answer: 0, reference: "Mark 2:27", insight: "Jesus reframes the Sabbath as a gift given for our benefit, not a burden imposed on us." },
        { text: "If you turn away your foot from the Sabbath... and call the Sabbath a ___.", options: ["delight", "burden", "chore", "custom"], answer: 0, reference: "Isaiah 58:13", insight: "Isaiah describes the Sabbath not as an obligation to endure, but as a delight to anticipate." },
        { text: "And as his custom was, Jesus went into the synagogue on the Sabbath day and stood up to ___.", options: ["read", "hide", "rest", "sleep"], answer: 0, reference: "Luke 4:16", insight: "Jesus' own practice was to keep the Sabbath as a regular part of His life." },
        { text: "From one new moon to another, and from one Sabbath to another, all flesh will come to ___ before me, says the LORD.", options: ["worship", "rest", "trade", "travel"], answer: 0, reference: "Isaiah 66:23", insight: "Scripture points to the Sabbath having a lasting future significance, not just a past one." }
      ],
      closingThought: "The Sabbath is a standing invitation — one day in seven, set apart to stop, breathe, and remember who holds the other six.",
      decision: "Could you set aside time this week to actually rest in God's presence?"
    },
    {
      id: "what-happens-after-death",
      category: "future",
      categoryLabel: "The Future",
      title: "What Really Happens After Death?",
      summary: "Few questions matter more — and few are more misunderstood. What does Scripture actually teach about death?",
      duration: "10 min",
      icon: "hourglass",
      keyThought: "The Bible describes death not as a doorway into another kind of consciousness, but as a sleep — one from which only God can awaken us.",
      statements: [
        { text: "For the living know that they will die, but the dead know ___.", options: ["not anything", "everything", "more than before", "their fate"], answer: 0, reference: "Ecclesiastes 9:5", insight: "Scripture describes death as an unconscious state, not an ongoing awareness." },
        { text: "For dust you are, and to ___ you shall return.", options: ["dust", "heaven", "spirit", "ashes"], answer: 0, reference: "Genesis 3:19", insight: "Death is described as a return to the ground, undoing what happened at creation." },
        { text: "The soul who sins, it shall ___.", options: ["die", "suffer", "wander", "burn"], answer: 0, reference: "Ezekiel 18:20", insight: "Rather than the soul being naturally immortal, Scripture says the soul that sins actually dies." },
        { text: "For the wages of sin is ___, but the gift of God is eternal life in Christ Jesus our Lord.", options: ["death", "sleep", "sorrow", "judgment"], answer: 0, reference: "Romans 6:23", insight: "Eternal life is described as a gift received through Christ — not something we already possess by nature." },
        { text: "The hour is coming in which all who are in the graves will ___ his voice.", options: ["hear", "fear", "forget", "ignore"], answer: 0, reference: "John 5:28", insight: "Jesus describes the dead as being in graves, awaiting a future resurrection — not already alive elsewhere." },
        { text: "For the trumpet will sound, and the dead will be raised ___.", options: ["incorruptible", "forgotten", "unchanged", "silent"], answer: 0, reference: "1 Corinthians 15:52", insight: "Paul ties the hope of eternal life to a future resurrection at Christ's return, not an immediate transition at death." },
        { text: "I am the resurrection and the life. He who believes in me, though he were dead, yet shall he ___.", options: ["live", "sleep", "wander", "wait"], answer: 0, reference: "John 11:25", insight: "Jesus' own words before raising Lazarus tie life after death directly to His power to resurrect." },
        { text: "Blessed and holy is he who has part in the first ___.", options: ["resurrection", "judgment", "rapture", "kingdom"], answer: 0, reference: "Revelation 20:6", insight: "Scripture's hope is future and physical — a resurrection at Christ's return, not an instant departure to another realm." }
      ],
      closingThought: "Because death is described as a sleep, it isn't something to be afraid of for the believer — it's simply the last thing you'll remember before Jesus wakes you.",
      decision: "Does this change how you think about loved ones who have died in faith?"
    },
    {
      id: "second-coming",
      category: "future",
      categoryLabel: "The Future",
      title: "Is Jesus Really Coming Back?",
      summary: "It's the most repeated promise in the New Testament. What will it actually look like — and how should it change how we live now?",
      duration: "9 min",
      icon: "cloud",
      keyThought: "The same Jesus who ascended in full view of witnesses promised to return the same visible, unmistakable way — not quietly, not secretly, but for every eye to see.",
      statements: [
        { text: "This same Jesus, who was taken up from you into heaven, will come in like manner as you saw him go into ___.", options: ["heaven", "Galilee", "Jerusalem", "the temple"], answer: 0, reference: "Acts 1:11", insight: "The angels promised a visible, literal return — matching the visible, literal ascension the disciples had just watched." },
        { text: "For the Lord himself will descend from heaven with a ___, with the voice of the archangel, and with the trumpet of God.", options: ["shout", "whisper", "song", "silence"], answer: 0, reference: "1 Thessalonians 4:16", insight: "This is described as loud and unmistakable — not a private or hidden event." },
        { text: "Behold, he is coming with ___, and every eye will see him.", options: ["clouds", "angels only", "fire alone", "silence"], answer: 0, reference: "Revelation 1:7", insight: "Every eye seeing Him rules out a secret or invisible return." },
        { text: "He who testifies to these things says, 'Surely I am coming ___.' Amen. Come, Lord Jesus!", options: ["quickly", "someday", "secretly", "later"], answer: 0, reference: "Revelation 22:20", insight: "The Bible's final promise is an urgent one, met with the church's eager response." },
        { text: "But concerning that day and hour no one knows... but my ___ only.", options: ["Father", "angels", "prophets", "disciples"], answer: 0, reference: "Matthew 24:36", insight: "The exact timing is kept from us — a reminder to stay ready rather than to set dates." },
        { text: "Let not your heart be troubled... I will come again and receive you to ___.", options: ["myself", "Jerusalem", "heaven alone", "glory only"], answer: 0, reference: "John 14:1-3", insight: "Jesus frames His return as a personal reunion, not just a cosmic event." },
        { text: "In my Father's house are many ___.", options: ["mansions", "gates", "thrones", "temples"], answer: 0, reference: "John 14:2", insight: "Jesus promises He is preparing an actual place for those who trust Him." },
        { text: "And so we will always be with the ___.", options: ["Lord", "angels", "saints", "elders"], answer: 0, reference: "1 Thessalonians 4:17", insight: "The goal of the second coming isn't just an event — it's an unending relationship with Christ." }
      ],
      closingThought: "The promise of Christ's return isn't meant to fill us with anxiety about timing, but with readiness and hope — He is coming back for you.",
      decision: "If Jesus returned today, would you be ready to meet Him?"
    },
    {
      id: "daniel-roadmap",
      category: "future",
      categoryLabel: "The Future",
      title: "Bible Prophecy: A Roadmap to the Future",
      summary: "Long before newspapers existed, the book of Daniel sketched the rise and fall of world empires — and pointed toward the end of history.",
      duration: "10 min",
      icon: "compass",
      keyThought: "Daniel's prophecies were written to show that God, not human rulers, is the one directing the course of history — all the way to its final chapter.",
      statements: [
        { text: "You, O king, saw, and behold, a great ___.", options: ["image", "mountain", "tree", "river"], answer: 0, reference: "Daniel 2:31", insight: "Nebuchadnezzar's dream used a single statue to represent a sequence of world kingdoms." },
        { text: "This image's head was of fine gold, its chest and arms of ___.", options: ["silver", "iron", "clay", "bronze"], answer: 0, reference: "Daniel 2:32", insight: "Each metal in the statue represented a successive empire, declining in value but increasing in strength." },
        { text: "And in the days of these kings the God of heaven will set up a kingdom which will never be ___.", options: ["destroyed", "moved", "divided", "forgotten"], answer: 0, reference: "Daniel 2:44", insight: "Every earthly kingdom in the vision eventually falls — except the one God Himself establishes." },
        { text: "The great God has made known to the king what will come to pass ___.", options: ["hereafter", "today", "secretly", "never"], answer: 0, reference: "Daniel 2:45", insight: "The dream was given specifically to reveal the future course of history in advance." },
        { text: "But you, Daniel, shut up the words and seal the book, until the time of the ___.", options: ["end", "judgment", "king", "temple"], answer: 0, reference: "Daniel 12:4", insight: "Daniel's prophecies were sealed for a future generation to understand more fully." },
        { text: "Many shall be purified, made white, and refined, but the wicked shall do ___.", options: ["wickedly", "nothing", "penance", "good"], answer: 0, reference: "Daniel 12:10", insight: "As the end approaches, Daniel says character — for better or worse — becomes more clearly revealed, not less." },
        { text: "At that time Michael shall stand up, the great prince who stands watch over your people, and at that time your people shall be ___.", options: ["delivered", "scattered", "judged", "silent"], answer: 0, reference: "Daniel 12:1", insight: "Even amid a time of unprecedented trouble, Daniel's prophecy ends with deliverance, not defeat." },
        { text: "But the ___ shall understand.", options: ["wise", "proud", "powerful", "wealthy"], answer: 0, reference: "Daniel 12:10", insight: "Understanding prophecy isn't reserved for scholars — it's promised to those who seek it with a humble, wise heart." }
      ],
      closingThought: "History isn't random, and it isn't out of control — Daniel's visions show a God who already knows how the story ends, and who invites you to trust Him with the chapters still ahead.",
      decision: "Want to go deeper? The Daniel prophecy quizzes on this site walk through each vision chapter by chapter."
    }
  ];

  const directory = document.querySelector("[data-study-directory]");
  const player = document.querySelector("[data-study-player]");
  if (!directory || !player) {
    return;
  }

  const elements = {
    directory,
    player,
    back: player.querySelector("[data-study-back]"),
    eyebrow: player.querySelector("[data-study-eyebrow]"),
    title: player.querySelector("[data-study-title]"),
    summary: player.querySelector("[data-study-summary]"),
    keyThought: player.querySelector("[data-study-key-thought]"),
    progress: player.querySelector("[data-study-progress]"),
    progressBar: player.querySelector("[data-study-progress-bar]"),
    score: player.querySelector("[data-study-score]"),
    reference: player.querySelector("[data-study-reference]"),
    statement: player.querySelector("[data-study-statement]"),
    options: player.querySelector("[data-study-options]"),
    feedback: player.querySelector("[data-study-feedback]"),
    next: player.querySelector("[data-study-next]"),
    previous: player.querySelector("[data-study-previous]"),
    saveStatus: player.querySelector("[data-study-save-status]"),
    statementPanel: player.querySelector("[data-study-statement-panel]"),
    result: player.querySelector("[data-study-result]"),
    resultScore: player.querySelector("[data-study-result-score]"),
    resultMessage: player.querySelector("[data-study-result-message]"),
    resultDecision: player.querySelector("[data-study-result-decision]"),
    resultCertificateBanner: player.querySelector("[data-study-certificate-banner]"),
    retake: player.querySelector("[data-study-retake]"),
    progressBanner: directory.querySelector("[data-study-progress-banner]"),
    progressText: directory.querySelector("[data-study-progress-text]"),
    directoryProgressBar: directory.querySelector("[data-study-progress-bar]"),
    directoryCertificateCta: directory.querySelector("[data-view-diploma]"),
    diploma: document.querySelector("[data-study-diploma]"),
    diplomaName: document.querySelector("[data-diploma-name]"),
    diplomaDate: document.querySelector("[data-diploma-date]"),
    diplomaList: document.querySelector("[data-diploma-list]"),
    translationSelect: player.querySelector("[data-study-translation]")
  };

  let activeStudy = null;
  let statementIndex = 0;
  let answers = [];
  const savedStatePrefix = "word-oasis-study:";

  const TRANSLATION_KEY = "word-oasis-bible-translation";
  const LEGACY_TRANSLATION_KEY = "word-oasis-promise-translation";
  const KNOWN_TRANSLATIONS = ["web", "kjv", "asv"];

  function getTranslation() {
    try {
      const stored = localStorage.getItem(TRANSLATION_KEY) || localStorage.getItem(LEGACY_TRANSLATION_KEY);
      return KNOWN_TRANSLATIONS.includes(stored) ? stored : "web";
    } catch (error) {
      return "web";
    }
  }

  function setTranslation(translation) {
    try {
      localStorage.setItem(TRANSLATION_KEY, translation);
    } catch (error) {
      // Ignore storage errors (e.g. private browsing).
    }
  }

  function getVerseText(reference, translation) {
    const entry = STUDY_VERSE_TEXT[reference];
    if (!entry) return null;
    return entry[translation] || entry.web || null;
  }

  function getAnswerWord(item, translation) {
    const override = STUDY_ANSWER_OVERRIDES[item.reference];
    if (override && override[translation]) return override[translation];
    return item.options[item.answer];
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function splitOnWord(fullText, word) {
    if (!fullText || !word) return null;
    // Match on whole-word boundaries so short answers (e.g. "law") don't
    // accidentally match inside longer words (e.g. "lawlessness").
    const pattern = new RegExp(`\\b${escapeRegExp(word)}\\b`, "i");
    const match = pattern.exec(fullText);
    if (!match) return null;
    const idx = match.index;
    return {
      before: fullText.slice(0, idx),
      match: fullText.slice(idx, idx + match[0].length),
      after: fullText.slice(idx + match[0].length)
    };
  }

  function savedStateKey(studyId) {
    return `${savedStatePrefix}${studyId}`;
  }

  function currentScore() {
    return answers.reduce((total, answer, index) => (
      total + (answer !== null && answer === activeStudy.statements[index].answer ? 1 : 0)
    ), 0);
  }

  function answeredCount() {
    return answers.filter((answer) => answer !== null).length;
  }

  function saveState() {
    if (!activeStudy) return;
    try {
      localStorage.setItem(savedStateKey(activeStudy.id), JSON.stringify({ answers, statementIndex }));
      elements.saveStatus.textContent = "Progress saved on this device.";
    } catch (error) {
      elements.saveStatus.textContent = "Progress could not be saved in this browser.";
    }
  }

  function clearSavedState(studyId) {
    try {
      localStorage.removeItem(savedStateKey(studyId));
    } catch (error) {
      elements.saveStatus.textContent = "The saved study could not be cleared.";
    }
  }

  function loadSavedState(study) {
    try {
      const saved = JSON.parse(localStorage.getItem(savedStateKey(study.id)) || "null");
      if (!saved || !Array.isArray(saved.answers) || saved.answers.length !== study.statements.length) return null;
      return {
        answers: saved.answers,
        statementIndex: Math.min(Math.max(Number(saved.statementIndex) || 0, 0), study.statements.length - 1)
      };
    } catch (error) {
      return null;
    }
  }

  const COMPLETED_KEY = "word-oasis-studies-completed";
  const NAME_KEY = "word-oasis-studies-name";

  function getCompletedStudies() {
    try {
      const saved = JSON.parse(localStorage.getItem(COMPLETED_KEY) || "[]");
      if (!Array.isArray(saved)) return [];
      const validIds = new Set(studies.map((study) => study.id));
      return saved.filter((id) => validIds.has(id));
    } catch (error) {
      return [];
    }
  }

  function markStudyCompleted(studyId) {
    const completed = new Set(getCompletedStudies());
    completed.add(studyId);
    try {
      localStorage.setItem(COMPLETED_KEY, JSON.stringify([...completed]));
    } catch (error) {
      /* localStorage unavailable; progress simply won't persist */
    }
    return [...completed];
  }

  function allStudiesCompleted(completed) {
    return studies.every((study) => completed.includes(study.id));
  }

  function getSavedName() {
    try {
      return localStorage.getItem(NAME_KEY) || "";
    } catch (error) {
      return "";
    }
  }

  function saveName(name) {
    try {
      localStorage.setItem(NAME_KEY, name);
    } catch (error) {
      /* localStorage unavailable; name simply won't persist */
    }
  }

  function renderDirectoryProgress() {
    const completed = getCompletedStudies();
    const total = studies.length;
    const count = completed.length;
    if (elements.progressText) elements.progressText.textContent = `${count} of ${total} studies completed`;
    if (elements.directoryProgressBar) elements.directoryProgressBar.style.width = `${(count / total) * 100}%`;
    const isComplete = allStudiesCompleted(completed);
    elements.progressBanner?.classList.toggle("is-complete", isComplete);
    if (elements.directoryCertificateCta) elements.directoryCertificateCta.hidden = !isComplete;
    directory.querySelectorAll("[data-study-card]").forEach((card) => {
      const startButton = card.querySelector("[data-start-study]");
      const id = startButton?.dataset.startStudy;
      card.classList.toggle("is-completed", Boolean(id) && completed.includes(id));
    });
  }

  function renderDiploma() {
    const completed = getCompletedStudies();
    const completedStudies = studies.filter((study) => completed.includes(study.id));
    if (elements.diplomaList) {
      elements.diplomaList.replaceChildren();
      completedStudies.forEach((study) => {
        const li = document.createElement("li");
        li.textContent = study.title;
        elements.diplomaList.append(li);
      });
    }
    if (elements.diplomaDate) {
      elements.diplomaDate.textContent = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    }
    if (elements.diplomaName) {
      elements.diplomaName.value = getSavedName();
    }
  }

  function showDiploma() {
    renderDiploma();
    directory.hidden = true;
    player.hidden = true;
    if (elements.diploma) {
      elements.diploma.hidden = false;
      elements.diploma.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function hideDiploma() {
    if (elements.diploma) elements.diploma.hidden = true;
    showDirectory();
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
      reference.className = "study-reference scripture-link scripture-link-inline";
      reference.dataset.scripture = match[0];
      reference.textContent = match[0];
      container.append(reference);
      lastIndex = match.index + match[0].length;
    }
    container.append(document.createTextNode(text.slice(lastIndex)));
  }

  function renderFeedback(item, selectedAnswer) {
    const correct = selectedAnswer === item.answer;
    const answerWord = getAnswerWord(item, getTranslation());
    const status = document.createElement("div");
    status.className = "study-feedback-status";
    const icon = document.createElement("span");
    icon.className = "study-feedback-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = correct
      ? '<svg viewBox="0 0 24 24"><path d="m5 13 4 4 10-10"></path></svg>'
      : '<svg viewBox="0 0 24 24"><path d="m6 6 12 12"></path><path d="m18 6-12 12"></path></svg>';
    const statusText = document.createElement("strong");
    statusText.textContent = correct ? "Correct!" : `Not quite — the missing word is "${answerWord}."`;
    status.append(icon, statusText);

    const insight = document.createElement("p");
    insight.className = "study-feedback-insight";
    const insightText = item.insight.includes(item.reference) ? item.insight : `${item.insight} — ${item.reference}`;
    appendScriptureLinks(insight, insightText);

    elements.feedback.className = `study-feedback ${correct ? "is-correct" : "is-incorrect"}`;
    elements.feedback.replaceChildren(status, insight);
    elements.feedback.hidden = false;
  }

  function renderStatement() {
    const item = activeStudy.statements[statementIndex];
    const selectedAnswer = answers[statementIndex];
    const hasAnswer = selectedAnswer !== null;
    const translation = getTranslation();
    const answerWord = getAnswerWord(item, translation);
    elements.feedback.hidden = true;
    elements.feedback.replaceChildren();
    elements.progress.textContent = `Statement ${statementIndex + 1} of ${activeStudy.statements.length}`;
    elements.score.textContent = `${currentScore()}/${answeredCount()} correct`;
    elements.progressBar.style.width = `${(answeredCount() / activeStudy.statements.length) * 100}%`;

    if (elements.reference) {
      elements.reference.replaceChildren();
      appendScriptureLinks(elements.reference, item.reference);
    }

    elements.statement.replaceChildren();
    const fullVerseText = getVerseText(item.reference, translation);
    const split = splitOnWord(fullVerseText, answerWord);
    const before = split ? split.before : item.text.split("___")[0];
    const matchedText = split ? split.match : answerWord;
    const after = split ? split.after : (item.text.split("___")[1] || "");
    elements.statement.append(document.createTextNode(before));
    const blank = document.createElement("span");
    blank.textContent = matchedText;
    if (hasAnswer) {
      blank.className = `study-blank ${selectedAnswer === item.answer ? "is-correct" : "is-revealed"}`;
    } else {
      blank.className = "study-blank is-blurred";
      blank.setAttribute("aria-hidden", "true");
    }
    elements.statement.append(blank);
    elements.statement.append(document.createTextNode(after));
    if (!hasAnswer) {
      const srHint = document.createElement("span");
      srHint.className = "sr-only";
      srHint.textContent = " One word is hidden. Choose the correct word from the options below.";
      elements.statement.append(srHint);
    }

    elements.options.replaceChildren();
    item.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "study-option";
      button.dataset.optionIndex = String(optionIndex);
      button.textContent = optionIndex === item.answer ? answerWord : option;
      if (hasAnswer) {
        button.disabled = true;
        if (optionIndex === item.answer) button.classList.add("is-correct");
        if (optionIndex === selectedAnswer && selectedAnswer !== item.answer) button.classList.add("is-incorrect");
      }
      elements.options.append(button);
    });
    elements.previous.hidden = statementIndex === 0;
    elements.next.hidden = !hasAnswer;
    elements.next.textContent = statementIndex === activeStudy.statements.length - 1 && answeredCount() === activeStudy.statements.length
      ? "See my summary →"
      : "Next →";
    if (hasAnswer) renderFeedback(item, selectedAnswer);
  }

  function selectAnswer(button) {
    if (answers[statementIndex] !== null) return;
    const item = activeStudy.statements[statementIndex];
    const selected = Number(button.dataset.optionIndex);
    answers[statementIndex] = selected;
    renderStatement();
    saveState();
    elements.next.focus();
  }

  function finishStudy() {
    const score = currentScore();
    elements.statementPanel.hidden = true;
    elements.result.hidden = false;
    elements.resultScore.textContent = `${score}/${activeStudy.statements.length}`;
    elements.resultMessage.replaceChildren();
    appendScriptureLinks(elements.resultMessage, activeStudy.closingThought);
    elements.resultDecision.textContent = activeStudy.decision;
    clearSavedState(activeStudy.id);
    const completed = markStudyCompleted(activeStudy.id);
    const justCompletedAll = allStudiesCompleted(completed);
    if (elements.resultCertificateBanner) elements.resultCertificateBanner.hidden = !justCompletedAll;
    renderDirectoryProgress();
    elements.resultScore.focus();
  }

  function showDirectory() {
    player.hidden = true;
    directory.hidden = false;
    renderDirectoryProgress();
    const url = new URL(window.location.href);
    url.searchParams.delete("study");
    window.history.replaceState({}, "", url);
  }

  function startStudy(studyId, forceNew = false) {
    activeStudy = studies.find((study) => study.id === studyId);
    if (!activeStudy) return;
    const saved = forceNew ? null : loadSavedState(activeStudy);
    answers = saved?.answers || Array(activeStudy.statements.length).fill(null);
    statementIndex = saved?.statementIndex || 0;
    elements.eyebrow.textContent = `${activeStudy.categoryLabel} · ${activeStudy.duration}`;
    elements.title.textContent = activeStudy.title;
    elements.summary.textContent = activeStudy.summary;
    elements.keyThought.textContent = activeStudy.keyThought;
    elements.result.hidden = true;
    elements.statementPanel.hidden = false;
    directory.hidden = true;
    player.hidden = false;
    elements.saveStatus.textContent = saved ? "Your saved progress has been restored." : "Progress saves automatically on this device.";
    if (elements.translationSelect) elements.translationSelect.value = getTranslation();
    const url = new URL(window.location.href);
    url.searchParams.set("study", activeStudy.id);
    window.history.replaceState({}, "", url);
    renderStatement();
    saveState();
    player.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("click", (event) => {
    const startButton = event.target.closest("[data-start-study]");
    if (startButton) {
      startStudy(startButton.dataset.startStudy);
      return;
    }
    const filterButton = event.target.closest("[data-study-filter]");
    if (filterButton) {
      const filter = filterButton.dataset.studyFilter;
      directory.querySelectorAll("[data-study-filter]").forEach((button) => {
        button.classList.toggle("is-active", button === filterButton);
      });
      directory.querySelectorAll("[data-study-card]").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.studyCard !== filter;
      });
      return;
    }
    const optionButton = event.target.closest(".study-option");
    if (optionButton && elements.options.contains(optionButton)) {
      selectAnswer(optionButton);
      return;
    }
    const viewDiplomaButton = event.target.closest("[data-view-diploma]");
    if (viewDiplomaButton) {
      showDiploma();
      return;
    }
    const diplomaCloseButton = event.target.closest("[data-diploma-close]");
    if (diplomaCloseButton) {
      hideDiploma();
      return;
    }
    const diplomaPrintButton = event.target.closest("[data-diploma-print]");
    if (diplomaPrintButton) {
      document.body.classList.add("is-printing-diploma");
      window.print();
    }
  });

  window.addEventListener("afterprint", () => {
    document.body.classList.remove("is-printing-diploma");
  });

  elements.diplomaName?.addEventListener("input", () => {
    saveName(elements.diplomaName.value);
  });

  elements.next.addEventListener("click", () => {
    if (answers[statementIndex] === null) return;
    if (statementIndex === activeStudy.statements.length - 1) {
      if (answeredCount() !== activeStudy.statements.length) return;
      finishStudy();
      return;
    }
    statementIndex += 1;
    renderStatement();
    saveState();
  });
  elements.previous.addEventListener("click", () => {
    if (statementIndex === 0) return;
    statementIndex -= 1;
    saveState();
    renderStatement();
  });
  player.querySelectorAll("[data-study-back]").forEach((button) => {
    button.addEventListener("click", showDirectory);
  });
  elements.retake.addEventListener("click", () => {
    clearSavedState(activeStudy.id);
    startStudy(activeStudy.id, true);
  });

  elements.translationSelect?.addEventListener("change", () => {
    setTranslation(elements.translationSelect.value);
    if (activeStudy) renderStatement();
  });

  window.addEventListener("wordoasis:translationchange", (event) => {
    const translation = event.detail?.translation;
    if (!translation || !KNOWN_TRANSLATIONS.includes(translation)) return;
    if (elements.translationSelect) elements.translationSelect.value = translation;
    if (activeStudy) renderStatement();
  });

  renderDirectoryProgress();

  const initialParams = new URLSearchParams(window.location.search);
  const sharedStudy = initialParams.get("study");
  if (studies.some((study) => study.id === sharedStudy)) {
    startStudy(sharedStudy);
  }
})();
