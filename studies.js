(() => {
  "use strict";

    const STUDY_VERSE_TEXT = {"John 3:16":{"web":"For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.","kjv":"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.","asv":"For God so loved the world, that he gave his only begotten Son, that whosoever believeth on him should not perish, but have eternal life."},"Romans 5:8":{"web":"But God commends his own love toward us, in that while we were yet sinners, Christ died for us.","kjv":"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.","asv":"But God commendeth his own love toward us, in that, while we were yet sinners, Christ died for us."},"Jeremiah 31:3":{"web":"Yahweh appeared of old to me, saying, “Yes, I have loved you with an everlasting love. Therefore I have drawn you with loving kindness.","kjv":"The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.","asv":"Jehovah appeared of old unto me, [saying], Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee."},"1 John 3:1":{"web":"See how great a love the Father has given to us, that we should be called children of God! For this cause the world doesn’t know us, because it didn’t know him.","kjv":"Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.","asv":"Behold what manner of love the Father hath bestowed upon us, that we should be called children of God; and [such] we are. For this cause the world knoweth us not, because it knew him not."},"Isaiah 49:15":{"web":"“Can a woman forget her nursing child, that she should not have compassion on the son of her womb? Yes, these may forget, yet I will not forget you!","kjv":"Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, they may forget, yet will I not forget thee.","asv":"Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, these may forget, yet will not I forget thee."},"Romans 8:38-39":{"web":"For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing, will be able to separate us from God’s love, which is in Christ Jesus our Lord.","kjv":"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.","asv":"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers,nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."},"1 John 4:19":{"web":"We love him, because he first loved us.","kjv":"We love him, because he first loved us.","asv":"We love, because he first loved us."},"Lamentations 3:22-23":{"web":"It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail. They are new every morning. Great is your faithfulness.","kjv":"It is of the LORD’S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.","asv":"[It is of] Jehovah`s lovingkindnesses that we are not consumed, because his compassions fail not.They are new every morning; great is thy faithfulness."},"2 Timothy 3:16":{"web":"Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness,","kjv":"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:","asv":"Every scripture inspired of God [is] also profitable for teaching, for reproof, for correction, for instruction which is in righteousness."},"2 Peter 1:21":{"web":"For no prophecy ever came by the will of man: but holy men of God spoke, being moved by the Holy Spirit.","kjv":"For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.","asv":"For no prophecy ever came by the will of man: but men spake from God, being moved by the Holy Spirit."},"Matthew 24:35":{"web":"Heaven and earth will pass away, but my words will not pass away.","kjv":"Heaven and earth shall pass away, but my words shall not pass away.","asv":"Heaven and earth shall pass away, but my words shall not pass away."},"Isaiah 40:8":{"web":"The grass withers, the flower fades; but the word of our God stands forever.”","kjv":"The grass withereth, the flower fadeth: but the word of our God shall stand for ever.","asv":"The grass withereth, the flower fadeth; but the word of our God shall stand forever."},"Psalm 119:105":{"web":"Your word is a lamp to my feet, and a light for my path.","kjv":"Thy word is a lamp unto my feet, and a light unto my path.","asv":"Thy word is a lamp unto my feet, And light unto my path."},"Psalm 119:89":{"web":"Yahweh, your word is settled in heaven forever.","kjv":"For ever, O LORD, thy word is settled in heaven.","asv":"For ever, O Jehovah, Thy word is settled in heaven."},"Acts 17:11":{"web":"Now these were more noble than those in Thessalonica, in that they received the word with all readiness of mind, examining the Scriptures daily to see whether these things were so.","kjv":"These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.","asv":"Now these were more noble than those in Thessalonica, in that they received the word with all readiness of the mind, examining the Scriptures daily, whether these things were so."},"Proverbs 30:5-6":{"web":"“Every word of God is flawless. He is a shield to those who take refuge in him. Don’t you add to his words, lest he reprove you, and you be found a liar.","kjv":"Every word of God is pure: he is a shield unto them that put their trust in him. Add thou not unto his words, lest he reprove thee, and thou be found a liar.","asv":"Every word of God is tried: He is a shield unto them that take refuge in him.Add thou not unto his words, Lest he reprove thee, and thou be found a liar."},"John 1:1":{"web":"In the beginning was the Word, and the Word was with God, and the Word was God.","kjv":"In the beginning was the Word, and the Word was with God, and the Word was God.","asv":"In the beginning was the Word, and the Word was with God, and the Word was God."},"John 1:14":{"web":"The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.","kjv":"And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.","asv":"And the Word became flesh, and dwelt among us (and we beheld his glory, glory as of the only begotten from the Father), full of grace and truth."},"John 14:6":{"web":"Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father, except through me.","kjv":"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.","asv":"Jesus saith unto him, I am the way, and the truth, and the life: no one cometh unto the Father, but by me."},"Isaiah 9:6":{"web":"For to us a child is born. To us a son is given; and the government will be on his shoulders. His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace.","kjv":"For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.","asv":"For unto us a child is born, unto us a son is given; and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, Mighty God, Everlasting Father, Prince of Peace."},"Acts 4:12":{"web":"There is salvation in none other, for neither is there any other name under heaven, that is given among men, by which we must be saved!”","kjv":"Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.","asv":"And in none other is there salvation: for neither is there any other name under heaven, that is given among men, wherein we must be saved."},"Hebrews 1:3":{"web":"His Son is the radiance of his glory, the very image of his substance, and upholding all things by the word of his power, who, when he had by himself purified us of our sins, sat down on the right hand of the Majesty on high;","kjv":"Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high;","asv":"who being the effulgence of his glory, and the very image of his substance, and upholding all things by the word of his power, when he had made purification of sins, sat down on the right hand of the Majesty on high;"},"Hebrews 13:8":{"web":"Jesus Christ is the same yesterday, today, and forever.","kjv":"Jesus Christ the same yesterday, and to day, and for ever.","asv":"Jesus Christ [is] the same yesterday and to-day, [yea] and for ever."},"Colossians 2:9":{"web":"For in him all the fullness of the Deity dwells bodily,","kjv":"For in him dwelleth all the fulness of the Godhead bodily.","asv":"for in him dwelleth all the fulness of the Godhead bodily,"},"Romans 6:23":{"web":"For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.","kjv":"For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.","asv":"For the wages of sin is death; but the free gift of God is eternal life in Christ Jesus our Lord."},"Ephesians 2:8-9":{"web":"for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.","kjv":"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.","asv":"for by grace have ye been saved through faith; and that not of yourselves, [it is] the gift of God;not of works, that no man should glory."},"Isaiah 53:5":{"web":"But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.","kjv":"But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.","asv":"But he was wounded for our transgressions, he was bruised for our iniquities; the chastisement of our peace was upon him; and with his stripes we are healed."},"2 Corinthians 5:21":{"web":"For him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God.","kjv":"For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.","asv":"Him who knew no sin he made [to be] sin on our behalf; that we might become the righteousness of God in him."},"1 John 1:9":{"web":"If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.","kjv":"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.","asv":"If we confess our sins, he is faithful and righteous to forgive us our sins, and to cleanse us from all unrighteousness."},"Romans 8:1":{"web":"There is therefore now no condemnation to those who are in Christ Jesus, who don’t walk according to the flesh, but according to the Spirit.","kjv":"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.","asv":"There is therefore now no condemnation to them that are in Christ Jesus."},"1 John 4:10":{"web":"In this is love, not that we loved God, but that he loved us, and sent his Son as the atoning sacrifice for our sins.","kjv":"Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.","asv":"Herein is love, not that we loved God, but that he loved us, and sent his Son [to be] the propitiation for our sins."},"Romans 3:24":{"web":"being justified freely by his grace through the redemption that is in Christ Jesus;","kjv":"Being justified freely by his grace through the redemption that is in Christ Jesus:","asv":"being justified freely by his grace through the redemption that is in Christ Jesus:"},"Matthew 5:17":{"web":"“Don’t think that I came to destroy the law or the prophets. I didn’t come to destroy, but to fulfill.","kjv":"Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.","asv":"Think not that I came to destroy the law or the prophets: I came not to destroy, but to fulfil."},"1 John 3:4":{"web":"Everyone who sins also commits lawlessness. Sin is lawlessness.","kjv":"Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.","asv":"Every one that doeth sin doeth also lawlessness; and sin is lawlessness."},"Romans 3:31":{"web":"Do we then nullify the law through faith? May it never be! No, we establish the law.","kjv":"Do we then make void the law through faith? God forbid: yea, we establish the law.","asv":"Do we then make the law of none effect through faith? God forbid: nay, we establish the law."},"John 14:15":{"web":"If you love me, keep my commandments.","kjv":"If ye love me, keep my commandments.","asv":"If ye love me, ye will keep my commandments."},"Psalm 19:7":{"web":"Yahweh’s law is perfect, restoring the soul. Yahweh’s testimony is sure, making wise the simple.","kjv":"The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.","asv":"The law of Jehovah is perfect, restoring the soul: The testimony of Jehovah is sure, making wise the simple."},"Ecclesiastes 12:13":{"web":"This is the end of the matter. All has been heard. Fear God, and keep his commandments; for this is the whole duty of man.","kjv":"Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.","asv":"[This is] the end of the matter; all hath been heard: fear God, and keep his commandments; for this is the whole [duty] of man."},"Revelation 22:14":{"web":"Blessed are those who do his commandments, that they may have the right to the tree of life, and may enter in by the gates into the city.","kjv":"Blessed are they that do his commandments, that they may have right to the tree of life, and may enter in through the gates into the city.","asv":"Blessed are they that wash their robes, that they may have the right [to come] to the tree of life, and my enter in by the gates into the city."},"1 John 5:3":{"web":"For this is loving God, that we keep his commandments. His commandments are not grievous.","kjv":"For this is the love of God, that we keep his commandments: and his commandments are not grievous.","asv":"For this is the love of God, that we keep his commandments: and his commandments are not grievous."},"Genesis 2:2":{"web":"On the seventh day God finished his work which he had done; and he rested on the seventh day from all his work which he had done.","kjv":"And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.","asv":"And on the seventh day God finished his work which he had made; and he rested on the seventh day from all his work which he had made."},"Genesis 2:3":{"web":"God blessed the seventh day, and made it holy, because he rested in it from all his work of creation which he had done.","kjv":"And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.","asv":"And God blessed the seventh day, and hallowed it; because that in it he rested from all his work which God had created and made."},"Exodus 20:8":{"web":"“Remember the Sabbath day, to keep it holy.","kjv":"Remember the sabbath day, to keep it holy.","asv":"Remember the sabbath day, to keep it holy."},"Exodus 20:10":{"web":"but the seventh day is a Sabbath to Yahweh your God. You shall not do any work in it, you, nor your son, nor your daughter, your male servant, nor your female servant, nor your livestock, nor your stranger who is within your gates;","kjv":"But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:","asv":"but the seventh day is a sabbath unto Jehovah thy God: [in it] thou shalt not do any work, thou, nor thy son, nor thy daughter, thy man-servant, nor thy maid-servant, nor thy cattle, nor thy stranger that is within thy gates:"},"Mark 2:27":{"web":"He said to them, “The Sabbath was made for man, not man for the Sabbath.","kjv":"And he said unto them, The sabbath was made for man, and not man for the sabbath:","asv":"And he said unto them, The sabbath was made for man, and not man for the sabbath:"},"Isaiah 58:13":{"web":"“If you turn away your foot from the Sabbath, from doing your pleasure on my holy day; and call the Sabbath a delight, and the holy of Yahweh honorable; and shall honor it, not doing your own ways, nor finding your own pleasure, nor speaking your own words:","kjv":"If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the LORD, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words:","asv":"If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, [and] the holy of Jehovah honorable; and shalt honor it, not doing thine own ways, nor finding thine own pleasure, nor speaking [thine own] words:"},"Luke 4:16":{"web":"He came to Nazareth, where he had been brought up. He entered, as was his custom, into the synagogue on the Sabbath day, and stood up to read.","kjv":"And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.","asv":"And he came to Nazareth, where he had been brought up: and he entered, as his custom was, into the synagogue on the sabbath day, and stood up to read."},"Isaiah 66:23":{"web":"It shall happen that from one new moon to another, and from one Sabbath to another, all flesh will come to worship before me,” says Yahweh.","kjv":"And it shall come to pass, that from one new moon to another, and from one sabbath to another, shall all flesh come to worship before me, saith the LORD.","asv":"And it shall come to pass, that from one new moon to another, and from one sabbath to another, shall all flesh come to worship before me, saith Jehovah."},"Ecclesiastes 9:5":{"web":"For the living know that they will die, but the dead don’t know anything, neither do they have any more a reward; for their memory is forgotten.","kjv":"For the living know that they shall die: but the dead know not any thing, neither have they any more a reward; for the memory of them is forgotten.","asv":"For the living know that they shall die: but the dead know not anything, neither have they any more a reward; for the memory of them is forgotten."},"Genesis 3:19":{"web":"By the sweat of your face will you eat bread until you return to the ground, for out of it you were taken. For you are dust, and to dust you shall return.”","kjv":"In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return.","asv":"in the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return."},"Ezekiel 18:20":{"web":"The soul who sins, he shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son. The righteousness of the righteous shall be on him, and the wickedness of the wicked shall be on him.","kjv":"The soul that sinneth, it shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son: the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him.","asv":"The soul that sinneth, it shall die: the son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son; the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him."},"John 5:28":{"web":"Don’t marvel at this, for the hour comes, in which all that are in the tombs will hear his voice,","kjv":"Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice,","asv":"Marvel not at this: for the hour cometh, in which all that are in the tombs shall hear his voice,"},"1 Corinthians 15:52":{"web":"in a moment, in the twinkling of an eye, at the last trumpet. For the trumpet will sound, and the dead will be raised incorruptible, and we will be changed.","kjv":"In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed.","asv":"in a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed."},"John 11:25":{"web":"Jesus said to her, “I am the resurrection and the life. He who believes in me will still live, even if he dies.","kjv":"Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:","asv":"Jesus said unto her, I am the resurrection, and the life: he that believeth on me, though he die, yet shall he live;"},"Revelation 20:6":{"web":"Blessed and holy is he who has part in the first resurrection. Over these, the second death has no power, but they will be priests of God and of Christ, and will reign with him one thousand years.","kjv":"Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.","asv":"Blessed and holy is he that hath part in the first resurrection: over these the second death hath no power; but they shall be priests of God and of Christ, and shall reign with him a thousand years."},"Acts 1:11":{"web":"who also said, “You men of Galilee, why do you stand looking into the sky? This Jesus, who was received up from you into the sky, will come back in the same way as you saw him going into the sky.”","kjv":"Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.","asv":"who also said, Ye men of Galilee, why stand ye looking into heaven? this Jesus, who was received up from you into heaven shall so come in like manner as ye beheld him going into heaven."},"1 Thessalonians 4:16":{"web":"For the Lord himself will descend from heaven with a shout, with the voice of the archangel, and with God’s trumpet. The dead in Christ will rise first,","kjv":"For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first:","asv":"For the Lord himself shall descend from heaven, with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first;"},"Revelation 1:7":{"web":"Behold, he is coming with the clouds, and every eye will see him, including those who pierced him. All the tribes of the earth will mourn over him. Even so, Amen.","kjv":"Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen.","asv":"Behold, he cometh with the clouds; and every eye shall see him, and they that pierced him; and all the tribes of the earth shall mourn over him. Even so, Amen."},"Revelation 22:20":{"web":"He who testifies these things says, “Yes, I come quickly.” Amen! Yes, come, Lord Jesus.","kjv":"He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.","asv":"He who testifieth these things saith, Yea: I come quickly. Amen: come, Lord Jesus."},"Matthew 24:36":{"web":"But no one knows of that day and hour, not even the angels of heaven, but my Father only.","kjv":"But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.","asv":"But of that day and hour knoweth no one, not even the angels of heaven, neither the Son, but the Father only."},"John 14:1-3":{"web":"“Don’t let your heart be troubled. Believe in God. Believe also in me. In my Father’s house are many homes. If it weren’t so, I would have told you. I am going to prepare a place for you. If I go and prepare a place for you, I will come again, and will receive you to myself; that where I am, you may be there also.","kjv":"Let not your heart be troubled: ye believe in God, believe also in me. In my Father’s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you. And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.","asv":"Let not your heart be troubled: believe in God, believe also in me.In my Father`s house are many mansions; if it were not so, I would have told you; for I go to prepare a place for you.And if I go and prepare a place for you, I come again, and will receive you unto myself; that where I am, [there] ye may be also."},"John 14:2":{"web":"In my Father’s house are many homes. If it weren’t so, I would have told you. I am going to prepare a place for you.","kjv":"In my Father’s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.","asv":"In my Father`s house are many mansions; if it were not so, I would have told you; for I go to prepare a place for you."},"1 Thessalonians 4:17":{"web":"then we who are alive, who are left, will be caught up together with them in the clouds, to meet the Lord in the air. So we will be with the Lord forever.","kjv":"Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.","asv":"then we that are alive, that are left, shall together with them be caught up in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord."},"Daniel 2:31":{"web":"“You, O king, saw, and behold, a great image. This image, which was mighty, and whose brightness was excellent, stood before you; and its appearance was terrifying.","kjv":"Thou, O king, sawest, and behold a great image. This great image, whose brightness was excellent, stood before thee; and the form thereof was terrible.","asv":"Thou, O king, sawest, and, behold, a great image. This image, which was mighty, and whose brightness was excellent, stood before thee; and the aspect thereof was terrible."},"Daniel 2:32":{"web":"As for this image, its head was of fine gold, its breast and its arms of silver, its belly and its thighs of brass,","kjv":"This image’s head was of fine gold, his breast and his arms of silver, his belly and his thighs of brass,","asv":"As for this image, its head was of fine gold, its breast and its arms of silver, its belly and its thighs of brass,"},"Daniel 2:44":{"web":"“In the days of those kings the God of heaven will set up a kingdom which will never be destroyed, nor will its sovereignty be left to another people; but it will break in pieces and consume all these kingdoms, and it will stand forever.","kjv":"And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed: and the kingdom shall not be left to other people, but it shall break in pieces and consume all these kingdoms, and it shall stand for ever.","asv":"And in the days of those kings shall the God of heaven set up a kingdom which shall never be destroyed, nor shall the sovereignty thereof be left to another people; but it shall break in pieces and consume all these kingdoms, and it shall stand for ever."},"Daniel 2:45":{"web":"Because you saw that a stone was cut out of the mountain without hands, and that it broke in pieces the iron, the brass, the clay, the silver, and the gold; the great God has made known to the king what will happen hereafter. The dream is certain, and its interpretation sure.”","kjv":"Forasmuch as thou sawest that the stone was cut out of the mountain without hands, and that it brake in pieces the iron, the brass, the clay, the silver, and the gold; the great God hath made known to the king what shall come to pass hereafter: and the dream is certain, and the interpretation thereof sure.","asv":"Forasmuch as thou sawest that a stone was cut out of the mountain without hands, and that it brake in pieces the iron, the brass, the clay, the silver, and the gold; the great God hath made known to the king what shall come to pass hereafter: and the dream is certain, and the interpretation thereof sure."},"Daniel 12:4":{"web":"But you, Daniel, shut up the words, and seal the book, even to the time of the end. Many will run back and forth, and knowledge will be increased.”","kjv":"But thou, O Daniel, shut up the words, and seal the book, even to the time of the end: many shall run to and fro, and knowledge shall be increased.","asv":"But thou, O Daniel, shut up the words, and seal the book, even to the time of the end: many shall run to and fro, and knowledge shall be increased."},"Daniel 12:10":{"web":"Many will purify themselves, and make themselves white, and be refined; but the wicked will do wickedly; and none of the wicked will understand; but those who are wise will understand.","kjv":"Many shall be purified, and made white, and tried; but the wicked shall do wickedly: and none of the wicked shall understand; but the wise shall understand.","asv":"Many shall purify themselves, and make themselves white, and be refined; but the wicked shall do wickedly; and none of the wicked shall understand; but they that are wise shall understand."},"Daniel 12:1":{"web":"“At that time Michael will stand up, the great prince who stands for the children of your people; and there will be a time of trouble, such as never was since there was a nation even to that same time. At that time your people will be delivered, everyone who is found written in the book.","kjv":"And at that time shall Michael stand up, the great prince which standeth for the children of thy people: and there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book.","asv":"And at that time shall Michael stand up, the great prince who standeth for the children of thy people; and there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book."},"Ezekiel 28:15":{"web":"You were perfect in your ways from the day that you were created, until unrighteousness was found in you.","kjv":"Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.","asv":"Thou wast perfect in thy ways from the day that thou wast created, till unrighteousness was found in thee."},"Isaiah 14:12":{"web":"How you have fallen from heaven, morning star, son of the dawn! How you are cut down to the ground, who laid the nations low!","kjv":"How art thou fallen from heaven, O Lucifer, son of the morning! how art thou cut down to the ground, which didst weaken the nations!","asv":"How art thou fallen from heaven, O day-star, son of the morning! how art thou cut down to the ground, that didst lay low the nations!"},"Revelation 12:9":{"web":"The great dragon was thrown down, the old serpent, he who is called the devil and Satan, the deceiver of the whole world. He was thrown down to the earth, and his angels were thrown down with him.","kjv":"And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world: he was cast out into the earth, and his angels were cast out with him.","asv":"And the great dragon was cast down, the old serpent, he that is called the Devil and Satan, the deceiver of the whole world; he was cast down to the earth, and his angels were cast down with him."},"Genesis 3:4":{"web":"The serpent said to the woman, “You won’t really die,","kjv":"And the serpent said unto the woman, Ye shall not surely die:","asv":"And the serpent said unto the woman, Ye shall not surely die:"},"John 8:44":{"web":"You are of your father, the devil, and you want to do the desires of your father. He was a murderer from the beginning, and doesn’t stand in the truth, because there is no truth in him. When he speaks a lie, he speaks on his own; for he is a liar, and the father of lies.","kjv":"Ye are of your father the devil, and the lusts of your father ye will do. He was a murderer from the beginning, and abode not in the truth, because there is no truth in him. When he speaketh a lie, he speaketh of his own: for he is a liar, and the father of it.","asv":"Ye are of [your] father the devil, and the lusts of your father it is your will to do. He was a murderer from the beginning, and standeth not in the truth, because there is no truth in him. When he speaketh a lie, he speaketh of his own: for he is a liar, and the father thereof."},"1 Peter 5:8":{"web":"Be sober and self-controlled. Be watchful. Your adversary, the devil, walks around like a roaring lion, seeking whom he may devour.","kjv":"Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:","asv":"Be sober, be watchful: your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour,"},"Revelation 12:11":{"web":"They overcame him because of the Lamb’s blood, and because of the word of their testimony. They didn’t love their life, even to death.","kjv":"And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.","asv":"And they overcame him because of the blood of the Lamb, and because of the word of their testimony; and they loved not their life even unto death."},"Job 1:12":{"web":"Yahweh said to Satan, “Behold, all that he has is in your power. Only on himself don’t stretch out your hand.” So Satan went out from the presence of Yahweh.","kjv":"And the LORD said unto Satan, Behold, all that he hath is in thy power; only upon himself put not forth thine hand. So Satan went forth from the presence of the LORD.","asv":"And Jehovah said unto Satan, Behold, all that he hath is in thy power; only upon himself put not forth thy hand. So Satan went forth from the presence of Jehovah."},"John 14:16":{"web":"I will pray to the Father, and he will give you another Counselor, that he may be with you forever,—","kjv":"And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;","asv":"And I will pray the Father, and he shall give you another Comforter, that he may be with you for ever,"},"John 16:13":{"web":"However when he, the Spirit of truth, has come, he will guide you into all truth, for he will not speak from himself; but whatever he hears, he will speak. He will declare to you things that are coming.","kjv":"Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come.","asv":"Howbeit when he, the Spirit of truth, is come, he shall guide you into all the truth: for he shall not speak from himself; but what things soever he shall hear, [these] shall he speak: and he shall declare unto you the things that are to come."},"Acts 1:8":{"web":"But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.”","kjv":"But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.","asv":"But ye shall receive power, when the Holy Spirit is come upon you: and ye shall be my witnesses both in Jerusalem, and in all Judaea and Samaria, and unto the uttermost part of the earth."},"Romans 8:26":{"web":"In the same way, the Spirit also helps our weaknesses, for we don’t know how to pray as we ought. But the Spirit himself makes intercession for us with groanings which can’t be uttered.","kjv":"Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.","asv":"And in like manner the Spirit also helpeth our infirmity: for we know not how to pray as we ought; but the Spirit himself maketh intercession for [us] with groanings which cannot be uttered;"},"Galatians 5:22-23":{"web":"But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such things there is no law.","kjv":"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.","asv":"But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness,meekness, self-control; against such there is no law."},"Ephesians 4:30":{"web":"Don’t grieve the Holy Spirit of God, in whom you were sealed for the day of redemption.","kjv":"And grieve not the holy Spirit of God, whereby ye are sealed unto the day of redemption.","asv":"And grieve not the Holy Spirit of God, in whom ye were sealed unto the day of redemption."},"Acts 2:38":{"web":"Peter said to them, “Repent, and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins, and you will receive the gift of the Holy Spirit.","kjv":"Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.","asv":"And Peter [said] unto them, Repent ye, and be baptized every one of you in the name of Jesus Christ unto the remission of your sins; and ye shall receive the gift of the Holy Spirit."},"2 Corinthians 3:17":{"web":"Now the Lord is the Spirit and where the Spirit of the Lord is, there is liberty.","kjv":"Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty.","asv":"Now the Lord is the Spirit: and where the Spirit of the Lord is, [there] is liberty."},"Philippians 4:6":{"web":"In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.","kjv":"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.","asv":"In nothing be anxious; but in everything by prayer and supplication with thanksgiving let your requests be made known unto God."},"James 5:16":{"web":"Confess your offenses to one another, and pray for one another, that you may be healed. The insistent prayer of a righteous person is powerfully effective.","kjv":"Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.","asv":"Confess therefore your sins one to another, and pray one for another, that ye may be healed. The supplication of a righteous man availeth much in its working."},"1 John 5:14":{"web":"This is the boldness which we have toward him, that, if we ask anything according to his will, he listens to us.","kjv":"And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us:","asv":"And this is the boldness which we have toward him, that, if we ask anything according to his will, he heareth us:"},"Jeremiah 33:3":{"web":"‘Call to me, and I will answer you, and will show you great and difficult things, which you don’t know.’","kjv":"Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.","asv":"Call unto me, and I will answer thee, and will show thee great things, and difficult, which thou knowest not."},"Matthew 7:7":{"web":"“Ask, and it will be given you. Seek, and you will find. Knock, and it will be opened for you.","kjv":"Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:","asv":"Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:"},"Mark 11:24":{"web":"Therefore I tell you, all things whatever you pray and ask for, believe that you have received them, and you shall have them.","kjv":"Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall havethem.","asv":"Therefore I say unto you, All things whatsoever ye pray and ask for, believe that ye receive them, and ye shall have them."},"1 Thessalonians 5:17":{"web":"Pray without ceasing.","kjv":"Pray without ceasing.","asv":"pray without ceasing;"},"Matthew 6:6":{"web":"But you, when you pray, enter into your inner room, and having shut your door, pray to your Father who is in secret, and your Father who sees in secret will reward you openly.","kjv":"But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.","asv":"But thou, when thou prayest, enter into thine inner chamber, and having shut thy door, pray to thy Father who is in secret, and thy Father who seeth in secret shall recompense thee."},"Romans 6:4":{"web":"We were buried therefore with him through baptism into death, that just as Christ was raised from the dead through the glory of the Father, so we also might walk in newness of life.","kjv":"Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.","asv":"We were buried therefore with him through baptism unto death: that like as Christ was raised from the dead through the glory of the Father, so we also might walk in newness of life."},"Acts 22:16":{"web":"Now why do you wait? Arise, be baptized, and wash away your sins, calling on the name of the Lord.’","kjv":"And now why tarriest thou? arise, and be baptized, and wash away thy sins, calling on the name of the Lord.","asv":"And now why tarriest thou? arise, and be baptized, and wash away thy sins, calling on his name."},"Colossians 2:12":{"web":"having been buried with him in baptism, in which you were also raised with him through faith in the working of God, who raised him from the dead.","kjv":"Buried with him in baptism, wherein also ye are risen with him through the faith of the operation of God, who hath raised him from the dead.","asv":"having been buried with him in baptism, wherein ye were also raised with him through faith in the working of God, who raised him from the dead."},"Galatians 3:27":{"web":"For as many of you as were baptized into Christ have put on Christ.","kjv":"For as many of you as have been baptized into Christ have put on Christ.","asv":"For as many of you as were baptized into Christ did put on Christ."},"Mark 16:16":{"web":"He who believes and is baptized will be saved; but he who disbelieves will be condemned.","kjv":"He that believeth and is baptized shall be saved; but he that believeth not shall be damned.","asv":"He that believeth and is baptized shall be saved; but he that disbelieveth shall be condemned."},"Matthew 3:16":{"web":"Jesus, when he was baptized, went up directly from the water: and behold, the heavens were opened to him. He saw the Spirit of God descending as a dove, and coming on him.","kjv":"And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him:","asv":"And Jesus when he was baptized, went up straightway from the water: and lo, the heavens were opened unto him, and he saw the Spirit of God descending as a dove, and coming upon him;"},"2 Corinthians 5:17":{"web":"Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.","kjv":"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.","asv":"Wherefore if any man is in Christ, [he is] a new creature: the old things are passed away; behold, they are become new."},"Acts 8:36":{"web":"As they went on the way, they came to some water, and the eunuch said, “Behold, here is water. What is keeping me from being baptized?”","kjv":"And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized?","asv":"And as they went on the way, they came unto a certain water; and the eunuch saith, Behold, [here is] water; what doth hinder me to be baptized?"},"1 Corinthians 12:27":{"web":"Now you are the body of Christ, and members individually.","kjv":"Now ye are the body of Christ, and members in particular.","asv":"Now ye are the body of Christ, and severally members thereof."},"Romans 12:5":{"web":"so we, who are many, are one body in Christ, and individually members one of another.","kjv":"So we, being many, are one body in Christ, and every one members one of another.","asv":"so we, who are many, are one body in Christ, and severally members one of another."},"Hebrews 10:25":{"web":"not forsaking our own assembling together, as the custom of some is, but exhorting one another; and so much the more, as you see the Day approaching.","kjv":"Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.","asv":"not forsaking our own assembling together, as the custom of some is, but exhorting [one another]; and so much the more, as ye see the day drawing nigh."},"Acts 2:42":{"web":"They continued steadfastly in the apostles’ teaching and fellowship, in the breaking of bread, and prayer.","kjv":"And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.","asv":"And they continued stedfastly in the apostles` teaching and fellowship, in the breaking of bread and the prayers."},"Matthew 18:20":{"web":"For where two or three are gathered together in my name, there I am in the middle of them.”","kjv":"For where two or three are gathered together in my name, there am I in the midst of them.","asv":"For where two or three are gathered together in my name, there am I in the midst of them."},"1 Peter 2:9":{"web":"But you are a chosen race, a royal priesthood, a holy nation, a people for God’s own possession, that you may proclaim the excellence of him who called you out of darkness into his marvelous light:","kjv":"But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:","asv":"But ye are a elect race, a royal priesthood, a holy nation, a people for [God`s] own possession, that ye may show forth the excellencies of him who called you out of darkness into his marvellous light:"},"1 Corinthians 12:12":{"web":"For as the body is one, and has many members, and all the members of the body, being many, are one body; so also is Christ.","kjv":"For as the body is one, and hath many members, and all the members of that one body, being many, are one body: so also is Christ.","asv":"For as the body is one, and hath many members, and all the members of the body, being many, are one body; so also is Christ."},"Ephesians 2:19":{"web":"So then you are no longer strangers and foreigners, but you are fellow citizens with the saints, and of the household of God,","kjv":"Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God;","asv":"So then ye are no more strangers and sojourners, but ye are fellow-citizens with the saints, and of the household of God,"},"1 Corinthians 12:7":{"web":"But to each one is given the manifestation of the Spirit for the profit of all.","kjv":"But the manifestation of the Spirit is given to every man to profit withal.","asv":"But to each one is given the manifestation of the Spirit to profit withal."},"Romans 12:6":{"web":"Having gifts differing according to the grace that was given to us, if prophecy, let us prophesy according to the proportion of our faith;","kjv":"Having then gifts differing according to the grace that is given to us, whether prophecy, let us prophesy according to the proportion of faith;","asv":"And having gifts differing according to the grace that was given to us, whether prophecy, [let us prophesy] according to the proportion of our faith;"},"1 Peter 4:10":{"web":"As each has received a gift, employ it in serving one another, as good managers of the grace of God in its various forms.","kjv":"As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.","asv":"according as each hath received a gift, ministering it among yourselves, as good stewards of the manifold grace of God;"},"Ephesians 4:12":{"web":"for the perfecting of the saints, to the work of serving, to the building up of the body of Christ;","kjv":"For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ:","asv":"for the perfecting of the saints, unto the work of ministering, unto the building up of the body of Christ:"},"1 Corinthians 12:11":{"web":"But the one and the same Spirit produces all of these, distributing to each one separately as he desires.","kjv":"But all these worketh that one and the selfsame Spirit, dividing to every man severally as he will.","asv":"but all these worketh the one and the same Spirit, dividing to each one severally even as he will."},"1 Corinthians 12:31":{"web":"But earnestly desire the best gifts. Moreover, I show a most excellent way to you.","kjv":"But covet earnestly the best gifts: and yet shew I unto you a more excellent way.","asv":"But desire earnestly the greater gifts. And moreover a most excellent way show I unto you."},"Matthew 25:15":{"web":"To one he gave five talents, to another two, to another one; to each according to his own ability. Then he went on his journey.","kjv":"And unto one he gave five talents, to another two, and to another one; to every man according to his several ability; and straightway took his journey.","asv":"And unto one he gave five talents, to another two, to another one; to each according to his several ability; and he went on his journey."},"1 Corinthians 12:4":{"web":"Now there are various kinds of gifts, but the same Spirit.","kjv":"Now there are diversities of gifts, but the same Spirit.","asv":"Now there are diversities of gifts, but the same Spirit."},"Malachi 3:10":{"web":"Bring the whole tithe into the storehouse, that there may be food in my house, and test me now in this,” says Yahweh of Armies, “if I will not open you the windows of heaven, and pour you out a blessing, that there will not be room enough for.","kjv":"Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.","asv":"Bring ye the whole tithe into the store-house, that there may be food in my house, and prove me now herewith, saith Jehovah of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough [to receive it]."},"Malachi 3:8":{"web":"Will a man rob God? Yet you rob me! But you say, ‘How have we robbed you?’ In tithes and offerings.","kjv":"Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings.","asv":"Will a man rob God? yet ye rob me. But ye say, Wherein have we robbed thee? In tithes and offerings."},"Matthew 6:21":{"web":"for where your treasure is, there your heart will be also.","kjv":"For where your treasure is, there will your heart be also.","asv":"for where thy treasure is, there will thy heart be also."},"2 Corinthians 9:7":{"web":"Let each man give according as he has determined in his heart; not grudgingly, or under compulsion; for God loves a cheerful giver.","kjv":"Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.","asv":"[Let] each man [do] according as he hath purposed in his heart: not grudgingly, or of necessity: for God loveth a cheerful giver."},"Proverbs 3:9":{"web":"Honor Yahweh with your substance, with the first fruits of all your increase:","kjv":"Honour the LORD with thy substance, and with the firstfruits of all thine increase:","asv":"Honor Jehovah with thy substance, And with the first-fruits of all thine increase:"},"Luke 6:38":{"web":"“Give, and it will be given to you: good measure, pressed down, shaken together, and running over, will be given to you. For with the same measure you measure it will be measured back to you.”","kjv":"Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again.","asv":"give, and it shall be given unto you; good measure, pressed down, shaken together, running over, shall they give into your bosom. For with what measure ye mete it shall be measured to you again."},"Leviticus 27:30":{"web":"“‘All the tithe of the land, whether of the seed of the land or of the fruit of the trees, is Yahweh’s. It is holy to Yahweh.","kjv":"And all the tithe of the land, whether of the seed of the land, or of the fruit of the tree, is the LORD’S: it is holy unto the LORD.","asv":"And all the tithe of the land, whether of the seed of the land, or of the fruit of the tree, is Jehovah`s: it is holy unto Jehovah."},"1 Chronicles 29:14":{"web":"But who am I, and what is my people, that we should be able to offer so willingly as this? For all things come from you, and of your own have we given you.","kjv":"But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee.","asv":"But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee."},"1 Corinthians 6:19":{"web":"Or don’t you know that your body is a temple of the Holy Spirit who is in you, whom you have from God? You are not your own,","kjv":"What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own?","asv":"Or know ye not that your body is a temple of the Holy Spirit which is in you, which ye have from God? and ye are not your own;"},"1 Corinthians 10:31":{"web":"Whether therefore you eat, or drink, or whatever you do, do all to the glory of God.","kjv":"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.","asv":"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God."},"3 John 1:2":{"web":"Beloved, I pray that you may prosper in all things and be healthy, even as your soul prospers.","kjv":"Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.","asv":"Beloved, I pray that in all things thou mayest prosper and be in health, even as thy soul prospereth."},"Daniel 1:8":{"web":"But Daniel purposed in his heart that he would not defile himself with the king’s dainties, nor with the wine which he drank. Therefore he requested of the prince of the eunuchs that he might not defile himself.","kjv":"But Daniel purposed in his heart that he would not defile himself with the portion of the king’s meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.","asv":"But Daniel purposed in his heart that he would not defile himself with the king`s dainties, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself."},"Proverbs 20:1":{"web":"Wine is a mocker, and beer is a brawler. Whoever is led astray by them is not wise.","kjv":"Wine is a mocker, strong drink is raging: and whosoever is deceived thereby is not wise.","asv":"Wine is a mocker, strong drink a brawler; And whosoever erreth thereby is not wise."},"Romans 12:1":{"web":"Therefore I urge you, brothers, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service.","kjv":"I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.","asv":"I beseech you therefore, brethren, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, [which is] your spiritual service."},"Genesis 1:29":{"web":"God said, “Behold, I have given you every herb yielding seed, which is on the surface of all the earth, and every tree, which bears fruit yielding seed. It will be your food.","kjv":"And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.","asv":"And God said, Behold, I have given you every herb yielding seed, which is upon the face of all the earth, and every tree, in which is the fruit of a tree yielding seed; to you it shall be for food:"},"1 Corinthians 3:16":{"web":"Don’t you know that you are a temple of God, and that God’s Spirit lives in you?","kjv":"Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?","asv":"Know ye not that ye are a temple of God, and [that] the Spirit of God dwelleth in you?"},"Genesis 2:24":{"web":"Therefore a man will leave his father and his mother, and will join with his wife, and they will be one flesh.","kjv":"Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.","asv":"Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh."},"Ephesians 5:25":{"web":"Husbands, love your wives, even as Christ also loved the assembly, and gave himself up for it;","kjv":"Husbands, love your wives, even as Christ also loved the church, and gave himself for it;","asv":"Husbands, love your wives, even as Christ also loved the church, and gave himself up for it;"},"Proverbs 22:6":{"web":"Train up a child in the way he should go, and when he is old he will not depart from it.","kjv":"Train up a child in the way he should go: and when he is old, he will not depart from it.","asv":"Train up a child in the way he should go, And even when he is old he will not depart from it."},"Ephesians 6:4":{"web":"You fathers, don’t provoke your children to wrath, but nurture them in the discipline and instruction of the Lord.","kjv":"And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord.","asv":"And, ye fathers, provoke not your children to wrath: but nurture them in the chastening and admonition of the Lord."},"1 Corinthians 13:7":{"web":"bears all things, believes all things, hopes all things, endures all things.","kjv":"Beareth all things, believeth all things, hopeth all things, endureth all things.","asv":"beareth all things, believeth all things, hopeth all things, endureth all things."},"Joshua 24:15":{"web":"If it seems evil to you to serve Yahweh, choose today whom you will serve; whether the gods which your fathers served that were beyond the River, or the gods of the Amorites, in whose land you dwell; but as for me and my house, we will serve Yahweh.”","kjv":"And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the LORD.","asv":"And if it seem evil unto you to serve Jehovah, choose you this day whom ye will serve; whether the gods which your fathers served that were beyond the River, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve Jehovah."},"Hebrews 13:4":{"web":"Let marriage be held in honor among all, and let the bed be undefiled: but God will judge the sexually immoral and adulterers.","kjv":"Marriage is honourable in all, and the bed undefiled: but whoremongers and adulterers God will judge.","asv":"[Let] marriage [be] had in honor among all, and [let] the bed [be] undefiled: for fornicators and adulterers God will judge."},"Proverbs 18:22":{"web":"Whoever finds a wife finds a good thing, and obtains favor of Yahweh.","kjv":"Whoso findeth a wife findeth a good thing, and obtaineth favour of the LORD.","asv":"Whoso findeth a wife findeth a good thing, And obtaineth favor of Jehovah."},"Hebrews 8:1":{"web":"Now in the things which we are saying, the main point is this. We have such a high priest, who sat down on the right hand of the throne of the Majesty in the heavens,","kjv":"Now of the things which we have spoken this is the sum: We have such an high priest, who is set on the right hand of the throne of the Majesty in the heavens;","asv":"Now in the things which we are saying the chief point [is this]: We have such a high priest, who sat down on the right hand of the throne of the Majesty in the heavens,"},"Hebrews 9:24":{"web":"For Christ hasn’t entered into holy places made with hands, which are representations of the true, but into heaven itself, now to appear in the presence of God for us;","kjv":"For Christ is not entered into the holy places made with hands, which are the figures of the true; but into heaven itself, now to appear in the presence of God for us:","asv":"For Christ entered not into a holy place made with hands, like in pattern to the true; but into heaven itself, now to appear before the face of God for us:"},"Daniel 8:14":{"web":"He said to me, “To two thousand and three hundred evenings and mornings. Then the sanctuary will be cleansed.”","kjv":"And he said unto me, Unto two thousand and three hundred days; then shall the sanctuary be cleansed.","asv":"And he said unto me, Unto two thousand and three hundred evenings [and] mornings; then shall the sanctuary be cleansed."},"Daniel 7:9":{"web":"“I watched until thrones were placed, and one who was ancient of days sat. His clothing was white as snow, and the hair of his head like pure wool. His throne was fiery flames, and its wheels burning fire.","kjv":"I beheld till the thrones were cast down, and the Ancient of days did sit, whose garment was white as snow, and the hair of his head like the pure wool: his throne was like the fiery flame, and his wheels as burning fire.","asv":"I beheld till thrones were placed, and one that was ancient of days did sit: his raiment was white as snow, and the hair of his head like pure wool; his throne was fiery flames, [and] the wheels thereof burning fire."},"Revelation 11:19":{"web":"God’s temple that is in heaven was opened, and the ark of the Lord’s covenant was seen in his temple. Lightnings, sounds, thunders, an earthquake, and great hail followed.","kjv":"And the temple of God was opened in heaven, and there was seen in his temple the ark of his testament: and there were lightnings, and voices, and thunderings, and an earthquake, and great hail.","asv":"And there was opened the temple of God that is in heaven; and there was seen in his temple the ark of his covenant; and there followed lightnings, and voices, and thunders, and an earthquake, and great hail."},"Hebrews 4:16":{"web":"Let us therefore draw near with boldness to the throne of grace, that we may receive mercy, and may find grace for help in time of need.","kjv":"Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.","asv":"Let us therefore draw near with boldness unto the throne of grace, that we may receive mercy, and may find grace to help [us] in time of need."},"1 John 2:1":{"web":"My little children, I write these things to you so that you may not sin. If anyone sins, we have a Counselor with the Father, Jesus Christ, the righteous.","kjv":"My little children, these things write I unto you, that ye sin not. And if any man sin, we have an advocate with the Father, Jesus Christ the righteous:","asv":"My little children, these things write I unto you that ye may not sin. And if any man sin, we have an Advocate with the Father, Jesus Christ the righteous:"},"Revelation 14:7":{"web":"He said with a loud voice, “Fear the Lord, and give him glory; for the hour of his judgment has come. Worship him who made the heaven, the earth, the sea, and the springs of waters!”","kjv":"Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come: and worship him that made heaven, and earth, and the sea, and the fountains of waters.","asv":"and he saith with a great voice, Fear God, and give him glory; for the hour of his judgment is come: and worship him that made the heaven and the earth and sea and fountains of waters."},"Revelation 14:6":{"web":"I saw an angel flying in mid heaven, having an eternal Good News to proclaim to those who dwell on the earth, and to every nation, tribe, language, and people.","kjv":"And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth, and to every nation, and kindred, and tongue, and people,","asv":"And I saw another angel flying in mid heaven, having eternal good tidings to proclaim unto them that dwell on the earth, and unto every nation and tribe and tongue and people;"},"Revelation 14:8":{"web":"Another, a second angel, followed, saying, “Babylon the great has fallen, which has made all the nations to drink of the wine of the wrath of her sexual immorality.”","kjv":"And there followed another angel, saying, Babylon is fallen, is fallen, that great city, because she made all nations drink of the wine of the wrath of her fornication.","asv":"And another, a second angel, followed, saying, Fallen, fallen is Babylon the great, that hath made all the nations to drink of the wine of the wrath of her fornication."},"Revelation 14:12":{"web":"Here is the perseverance of the saints, those who keep the commandments of God, and the faith of Jesus.”","kjv":"Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.","asv":"Here is the patience of the saints, they that keep the commandments of God, and the faith of Jesus."},"Matthew 24:14":{"web":"This Good News of the Kingdom will be preached in the whole world for a testimony to all the nations, and then the end will come.","kjv":"And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.","asv":"And this gospel of the kingdom shall be preached in the whole world for a testimony unto all the nations; and then shall the end come."},"Revelation 18:4":{"web":"I heard another voice from heaven, saying, “Come out of her, my people, that you have no participation in her sins, and that you don’t receive of her plagues,","kjv":"And I heard another voice from heaven, saying, Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues.","asv":"And I heard another voice from heaven, saying, Come forth, my people, out of her, that ye have no fellowship with her sins, and that ye receive not of her plagues:"},"Revelation 22:17":{"web":"The Spirit and the bride say, “Come!” He who hears, let him say, “Come!” He who is thirsty, let him come. He who desires, let him take the water of life freely.","kjv":"And the Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely.","asv":"And the Spirit and the bride say, Come. And he that heareth, let him say, Come. And he that is athirst, let him come: he that will, let him take the water of life freely."},"Revelation 14:13":{"web":"I heard a voice from heaven saying, “Write, ‘Blessed are the dead who die in the Lord from now on.’” “Yes,” says the Spirit, “that they may rest from their labors; for their works follow with them.”","kjv":"And I heard a voice from heaven saying unto me, Write, Blessed are the dead which die in the Lord from henceforth: Yea, saith the Spirit, that they may rest from their labours; and their works do follow them.","asv":"And I heard the voice from heaven saying, Write, Blessed are the dead who die in the Lord from henceforth: yea, saith the Spirit, that they may rest from their labors; for their works follow with them."},"Revelation 20:4":{"web":"I saw thrones, and they sat on them, and judgment was given to them. I saw the souls of those who had been beheaded for the testimony of Jesus, and for the word of God, and such as didn’t worship the beast nor his image, and didn’t receive the mark on their forehead and on their hand. They lived and reigned with Christ for a thousand years.","kjv":"And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God, and which had not worshipped the beast, neither his image, neither had received his mark upon their foreheads, or in their hands; and they lived and reigned with Christ a thousand years.","asv":"And I saw thrones, and they sat upon them, and judgment was given unto them: and [I saw] the souls of them that had been beheaded for the testimony of Jesus, and for the word of God, and such as worshipped not the beast, neither his image, and received not the mark upon their forehead and upon their hand; and they lived, and reigned with Christ a thousand years."},"Revelation 21:1":{"web":"I saw a new heaven and a new earth: for the first heaven and the first earth have passed away, and the sea is no more.","kjv":"And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea.","asv":"And I saw a new heaven and a new earth: for the first heaven and the first earth are passed away; and the sea is no more."},"Revelation 21:3":{"web":"I heard a loud voice out of heaven saying, “Behold, God’s dwelling is with people, and he will dwell with them, and they will be his people, and God himself will be with them as their God.","kjv":"And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God.","asv":"And I heard a great voice out of the throne saying, Behold, the tabernacle of God is with men, and he shall dwell with them, and they shall be his peoples, and God himself shall be with them, [and be] their God:"},"Revelation 21:4":{"web":"He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away.”","kjv":"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.","asv":"and he shall wipe away every tear from their eyes; and death shall be no more; neither shall there be mourning, nor crying, nor pain, any more: the first things are passed away."},"2 Peter 3:13":{"web":"But, according to his promise, we look for new heavens and a new earth, in which righteousness dwells.","kjv":"Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.","asv":"But, according to his promise, we look for new heavens and a new earth, wherein dwelleth righteousness."},"Revelation 22:5":{"web":"There will be no night, and they need no lamp light; for the Lord God will illuminate them. They will reign forever and ever.","kjv":"And there shall be no night there; and they need no candle, neither light of the sun; for the Lord God giveth them light: and they shall reign for ever and ever.","asv":"And there shall be night no more; and they need no light of lamp, neither light of sun; for the Lord God shall give them light: and they shall reign for ever and ever."},"Isaiah 65:17":{"web":"“For, behold, I create new heavens and a new earth; and the former things will not be remembered, nor come into mind.","kjv":"For, behold, I create new heavens and a new earth: and the former shall not be remembered, nor come into mind.","asv":"For, behold, I create new heavens and a new earth; and the former things shall not be remembered, nor come into mind."}};

    const STUDY_ANSWER_OVERRIDES = {"Matthew 5:17":{"web":"fulfill"},"Isaiah 49:15":{"kjv":"thee","asv":"thee"},"2 Timothy 3:16":{"web":"teaching","asv":"teaching"},"2 Peter 1:21":{"kjv":"Holy Ghost"},"Isaiah 40:8":{"kjv":"for ever"},"Hebrews 13:8":{"kjv":"for ever","asv":"for ever"},"Colossians 2:9":{"web":"Deity"},"1 John 4:10":{"web":"atoning sacrifice"},"Psalm 19:7":{"web":"restoring","asv":"restoring"},"1 John 5:3":{"web":"grievous","kjv":"grievous","asv":"grievous"},"Genesis 2:3":{"web":"holy","asv":"hallowed"},"Ecclesiastes 9:5":{"web":"anything","kjv":"any thing"},"Acts 1:11":{"web":"sky"},"John 14:2":{"web":"homes"},"Ezekiel 28:15":{"kjv":"iniquity"},"John 14:16":{"kjv":"Comforter","asv":"Comforter"},"Romans 8:26":{"kjv":"infirmities","asv":"infirmity"},"Galatians 5:22-23":{"kjv":"longsuffering","asv":"longsuffering"},"Acts 2:38":{"kjv":"Ghost"},"Philippians 4:6":{"kjv":"careful"},"James 5:16":{"kjv":"faults","asv":"sins"},"1 John 5:14":{"kjv":"confidence"},"Jeremiah 33:3":{"kjv":"mighty"},"Matthew 6:6":{"kjv":"closet"},"2 Corinthians 5:17":{"kjv":"creature","asv":"creature"},"1 Corinthians 12:27":{"kjv":"in particular","asv":"severally"},"Romans 12:5":{"kjv":"every one","asv":"severally"},"1 Peter 2:9":{"kjv":"generation"},"Ephesians 2:19":{"kjv":"fellowcitizens"},"1 Peter 4:10":{"kjv":"minister","asv":"ministering"},"Ephesians 4:12":{"kjv":"ministry","asv":"ministering"},"1 Corinthians 12:11":{"kjv":"severally","asv":"severally"},"Malachi 3:10":{"kjv":"tithes"},"Proverbs 3:9":{"kjv":"firstfruits","asv":"first-fruits"},"3 John 1:2":{"kjv":"health","asv":"health"},"Proverbs 20:1":{"kjv":"strong drink","asv":"strong drink"},"Genesis 1:29":{"kjv":"meat"},"Genesis 2:24":{"kjv":"cleave","asv":"cleave"},"Ephesians 5:25":{"web":"assembly"},"1 Corinthians 13:7":{"kjv":"endureth","asv":"endureth"},"Hebrews 13:4":{"kjv":"honourable"},"Proverbs 18:22":{"kjv":"favour"},"Daniel 8:14":{"web":"evenings and mornings","asv":"mornings"},"Revelation 11:19":{"kjv":"testament"},"1 John 2:1":{"kjv":"advocate","asv":"Advocate"},"Revelation 14:6":{"kjv":"gospel","asv":"good tidings"},"Revelation 14:12":{"kjv":"patience","asv":"patience"},"Revelation 14:13":{"kjv":"labours"},"Revelation 21:3":{"kjv":"tabernacle","asv":"tabernacle"}};

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
        { text: "For God so loved the world that he gave his only ___, that whoever believes in him should not perish but have everlasting life.", options: ["Son","angel","prophet","law"], answer: 0, reference: "John 3:16", insight: "God's love is proven by a gift — the greatest gift He had to give." },
        { text: "But God shows his own love for us in that while we were still ___, Christ died for us.", options: ["sinners","faithful","obedient","worthy"], answer: 0, reference: "Romans 5:8", insight: "God didn't wait for us to improve first. Love reached us exactly where we were." },
        { text: "I have loved you with an ___ love; therefore I have continued my faithfulness to you.", options: ["everlasting","occasional","conditional","distant"], answer: 0, reference: "Jeremiah 31:3", insight: "God describes His love as without end — not on-again, off-again." },
        { text: "See what kind of love the Father has given to us, that we should be called children of ___.", options: ["God","angels","kings","priests"], answer: 0, reference: "1 John 3:1", insight: "Love doesn't just forgive you — it adopts you into the family." },
        { text: "Can a woman forget her nursing child... even these may forget, yet I will not forget ___.", options: ["you","Israel","the earth","the righteous"], answer: 0, reference: "Isaiah 49:15", insight: "God compares His memory of you to the strongest human bond we know, and says His is even stronger." },
        { text: "Neither death nor life... will be able to separate us from the ___ of God in Christ Jesus our Lord.", options: ["love","presence","mercy","kingdom"], answer: 0, reference: "Romans 8:38-39", insight: "Nothing on the list — not even death — can put you outside the reach of God's love." },
        { text: "We love because he ___ loved us.", options: ["first","secretly","only","briefly"], answer: 0, reference: "1 John 4:19", insight: "Love is not something we earn from God; it's something we receive and then pass on." },
        { text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every ___.", options: ["morning","season","generation","century"], answer: 0, reference: "Lamentations 3:22-23", insight: "God's love doesn't run out — it renews itself daily, no matter how the day before went." }
      ],
      closingThought: "God's love for you isn't a reward for good behavior — it's the reason good things become possible at all. You are not loved because you are good; you are loved because that is who God is.",
      decision: "Will you accept that God loves you today, as you are, right now?",
      goingDeeper: { intro: "See God's love traced through the rest of Scripture.", refs: ["Psalm 103:11-13", "Ephesians 3:17-19", "1 John 4:9-10"] },
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
        { text: "All Scripture is given by inspiration of God, and is profitable for ___, for reproof, for correction, for instruction in righteousness.", options: ["doctrine","entertainment","history","tradition"], answer: 0, reference: "2 Timothy 3:16", insight: "Scripture claims a divine source, and a practical purpose: to shape how we live." },
        { text: "For prophecy never came by the will of man, but holy men of God spoke as they were moved by the ___ ___.", options: ["Holy Spirit","ancient kings","wise elders","ruling priests"], answer: 0, reference: "2 Peter 1:21", insight: "The human writers wrote, but the message originated with God." },
        { text: "Heaven and earth will pass away, but my ___ will never pass away.", options: ["words","temple","throne","law courts"], answer: 0, reference: "Matthew 24:35", insight: "Jesus staked His own reliability on the durability of His words." },
        { text: "The grass withers, the flower fades, but the word of our God will stand ___.", options: ["forever","for a season","for a time","for a generation"], answer: 0, reference: "Isaiah 40:8", insight: "Everything else fades. Scripture is presented as the one constant." },
        { text: "Your word is a ___ to my feet, and a light to my path.", options: ["lamp","sword","shield","key"], answer: 0, reference: "Psalm 119:105", insight: "The Bible isn't meant to be a museum piece — it's meant to guide daily steps." },
        { text: "Forever, O LORD, your word is ___ in heaven.", options: ["settled","spoken","hidden","sealed"], answer: 0, reference: "Psalm 119:89", insight: "God's word isn't up for renegotiation with each new generation." },
        { text: "These believers in Berea searched the Scriptures ___, to see whether these things were so.", options: ["daily","occasionally","once","reluctantly"], answer: 0, reference: "Acts 17:11", insight: "The Bible commends people who checked even an apostle's teaching against Scripture itself." },
        { text: "Every word of God is pure... Add not to his words, lest he ___ you, and you be found a liar.", options: ["reprove","ignore","forget","ridicule"], answer: 0, reference: "Proverbs 30:5-6", insight: "The Bible invites careful, honest handling — not adding to it or twisting it to fit an agenda." }
      ],
      closingThought: "The most convincing case for Scripture isn't a debate you win — it's a habit you build. Read it for yourself, and let it speak.",
      decision: "Are you willing to test the Bible's promises for yourself, one page at a time?",
      goingDeeper: { intro: "Explore more of what Scripture says about itself.", refs: ["Psalm 12:6", "Matthew 5:18", "Hebrews 4:12"] },
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
        { text: "In the beginning was the Word, and the Word was with God, and the Word was ___.", options: ["God","an angel","a prophet","a spirit"], answer: 0, reference: "John 1:1", insight: "John opens by identifying Jesus, the Word, as divine — eternally with God and fully God." },
        { text: "And the Word became ___, and lived among us.", options: ["flesh","light","spirit","law"], answer: 0, reference: "John 1:14", insight: "The eternal Word entered human history as a real, physical person." },
        { text: "Jesus said, I am the way, the truth, and the ___: no one comes to the Father except through me.", options: ["life","gate","vine","law"], answer: 0, reference: "John 14:6", insight: "Jesus doesn't present Himself as one path among many, but as the way itself." },
        { text: "For unto us a child is born... and his name will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of ___.", options: ["Peace","Glory","Israel","Heaven"], answer: 0, reference: "Isaiah 9:6", insight: "This prophecy, written centuries before Jesus' birth, already describes Him as God Himself." },
        { text: "Neither is there salvation in any other: for there is no other ___ under heaven given among men by which we must be saved.", options: ["name","way","temple","prophet"], answer: 0, reference: "Acts 4:12", insight: "The apostles preached Jesus as the only sufficient answer to humanity's deepest need." },
        { text: "He is the radiance of God's glory and the exact representation of his being... he sat down at the right hand of the Majesty on ___.", options: ["high","earth","Zion","a throne of gold"], answer: 0, reference: "Hebrews 1:3", insight: "Jesus doesn't merely represent God — He reveals exactly who God is." },
        { text: "Jesus Christ is the same yesterday, today, and ___.", options: ["forever","for a season","for a time","for a generation"], answer: 0, reference: "Hebrews 13:8", insight: "The Jesus of the Gospels is not a different person than the Jesus who meets you today." },
        { text: "For in him all the fullness of the ___ dwells in bodily form.", options: ["Godhead","Spirit","glory","law"], answer: 0, reference: "Colossians 2:9", insight: "Paul leaves no ambiguity: in Jesus, God Himself took on a body." }
      ],
      closingThought: "If Jesus is who Scripture says He is, then the question isn't really 'who is He?' — it's 'what will you do with Him?'",
      decision: "Will you settle, today, who you believe Jesus is?",
      goingDeeper: { intro: "Trace the claims Jesus made about who He is.", refs: ["John 8:58", "Colossians 1:15-17", "Philippians 2:5-11"] },
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
        { text: "For the wages of sin is death, but the gift of God is ___ life through Jesus Christ our Lord.", options: ["eternal","temporary","hidden","future"], answer: 0, reference: "Romans 6:23", insight: "Sin earns a wage; grace gives a gift. Those are two very different transactions." },
        { text: "For by grace you have been saved through faith, and that not of yourselves; it is the ___ of God, not of works, so that no one may boast.", options: ["gift","wage","reward","debt"], answer: 0, reference: "Ephesians 2:8-9", insight: "Even the faith to believe is described as a gift — salvation leaves no room for self-congratulation." },
        { text: "But he was wounded for our transgressions, he was bruised for our iniquities... and with his stripes we are ___.", options: ["healed","forgotten","judged","excused"], answer: 0, reference: "Isaiah 53:5", insight: "Centuries before Calvary, this prophecy described exactly what the cross would accomplish." },
        { text: "For our sake he made him to be sin who knew no sin, so that in him we might become the ___ of God.", options: ["righteousness","servants","children","priests"], answer: 0, reference: "2 Corinthians 5:21", insight: "An exchange happens at the cross: our guilt is credited to Him, His righteousness is credited to us." },
        { text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all ___.", options: ["unrighteousness","memory","weakness","doubt"], answer: 0, reference: "1 John 1:9", insight: "Forgiveness isn't reluctant on God's part — it's described as faithful and just, a promise He keeps." },
        { text: "There is therefore now no ___ for those who are in Christ Jesus.", options: ["condemnation","confusion","delay","exception"], answer: 0, reference: "Romans 8:1", insight: "Once you're in Christ, the verdict has already been settled in your favor." },
        { text: "In this is love, not that we loved God, but that he loved us and sent his Son to be the ___ for our sins.", options: ["propitiation","judge","example","teacher"], answer: 0, reference: "1 John 4:10", insight: "God didn't wait for us to love Him first — He made the first move, all the way to the cross." },
        { text: "Being justified freely by his ___ through the redemption that is in Christ Jesus.", options: ["grace","works","law","wisdom"], answer: 0, reference: "Romans 3:24", insight: "'Justified' means declared right with God — and it comes free, through grace." }
      ],
      closingThought: "The cross says two things at once: sin is serious enough that it cost everything, and you are loved enough that God paid it.",
      decision: "Will you receive what the cross already accomplished, instead of trying to earn it yourself?",
      goingDeeper: { intro: "Read more about what the cross accomplished.", refs: ["Isaiah 53:5-6", "2 Corinthians 5:21", "1 Peter 2:24"] },
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
        { text: "Think not that I have come to destroy the law or the prophets: I have not come to destroy, but to ___.", options: ["fulfil","replace","abolish","hide"], answer: 0, reference: "Matthew 5:17", insight: "Jesus explicitly denies coming to cancel God's law — He came to fully live it out and explain it." },
        { text: "Sin is the transgression of the ___.", options: ["law","covenant","prophets","temple"], answer: 0, reference: "1 John 3:4", insight: "Without a standard, 'sin' wouldn't even have meaning. The law defines what love requires." },
        { text: "Do we then make the law void through faith? Certainly not! On the contrary, we ___ the law.", options: ["establish","abolish","replace","ignore"], answer: 0, reference: "Romans 3:31", insight: "Faith and obedience aren't opposites in Scripture — genuine faith produces obedience." },
        { text: "If you love me, keep my ___.", options: ["commandments","traditions","feasts","opinions"], answer: 0, reference: "John 14:15", insight: "Jesus ties love directly to obedience, not as a burden but as its natural fruit." },
        { text: "The law of the LORD is perfect, ___ the soul.", options: ["converting","confusing","burdening","replacing"], answer: 0, reference: "Psalm 19:7", insight: "The psalmist doesn't describe the law as a weight, but as something that restores and renews." },
        { text: "Let us hear the conclusion of the whole matter: fear God and keep his commandments, for this is the whole ___ of man.", options: ["duty","hope","wisdom","burden"], answer: 0, reference: "Ecclesiastes 12:13", insight: "After exploring every pursuit under the sun, Solomon's conclusion returns to this one point." },
        { text: "Blessed are those who do his commandments, that they may have the right to the tree of ___.", options: ["life","knowledge","glory","wisdom"], answer: 0, reference: "Revelation 22:14", insight: "Even in the closing chapter of Scripture, keeping God's commandments is tied to the promise of life." },
        { text: "For this is the love of God, that we keep his commandments, and his commandments are not ___.", options: ["burdensome","optional","temporary","hidden"], answer: 0, reference: "1 John 5:3", insight: "When obedience flows from love rather than fear, it stops feeling like a weight to carry." }
      ],
      closingThought: "God's commandments were never meant to be a ladder to climb toward His approval — they're a portrait of the character His grace produces in a willing heart.",
      decision: "Will you ask God to write His law on your heart, not just in a book?",
      goingDeeper: { intro: "See how Scripture describes the law's ongoing purpose.", refs: ["Psalm 19:7-8", "Romans 7:12", "James 2:10-12"] },
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
        { text: "And on the seventh day God finished his work... and he ___ on the seventh day from all his work.", options: ["rested","worked","traveled","judged"], answer: 0, reference: "Genesis 2:2", insight: "Even before sin entered the world, God modeled a rhythm of work followed by rest." },
        { text: "And God blessed the seventh day and ___ it, because on it he rested from all his work.", options: ["sanctified","cursed","forgot","hid"], answer: 0, reference: "Genesis 2:3", insight: "God didn't just rest on the seventh day — He set it apart as holy, for all time." },
        { text: "Remember the Sabbath day, to keep it ___.", options: ["holy","quiet","busy","private"], answer: 0, reference: "Exodus 20:8", insight: "Of the Ten Commandments, this is the only one that begins with the word 'remember.'" },
        { text: "The seventh day is a Sabbath to the LORD your God. On it you shall not do any ___.", options: ["work","resting","worship","traveling"], answer: 0, reference: "Exodus 20:10", insight: "The command includes everyone in the household — a shared, communal rest." },
        { text: "The Sabbath was made for man, and not man for the ___.", options: ["Sabbath","priest","temple","law"], answer: 0, reference: "Mark 2:27", insight: "Jesus reframes the Sabbath as a gift given for our benefit, not a burden imposed on us." },
        { text: "If you turn away your foot from the Sabbath... and call the Sabbath a ___.", options: ["delight","burden","chore","custom"], answer: 0, reference: "Isaiah 58:13", insight: "Isaiah describes the Sabbath not as an obligation to endure, but as a delight to anticipate." },
        { text: "And as his custom was, Jesus went into the synagogue on the Sabbath day and stood up to ___.", options: ["read","hide","rest","sleep"], answer: 0, reference: "Luke 4:16", insight: "Jesus' own practice was to keep the Sabbath as a regular part of His life." },
        { text: "From one new moon to another, and from one Sabbath to another, all flesh will come to ___ before me, says the LORD.", options: ["worship","rest","trade","travel"], answer: 0, reference: "Isaiah 66:23", insight: "Scripture points to the Sabbath having a lasting future significance, not just a past one." }
      ],
      closingThought: "The Sabbath is a standing invitation — one day in seven, set apart to stop, breathe, and remember who holds the other six.",
      decision: "Could you set aside time this week to actually rest in God's presence?",
      goingDeeper: { intro: "Explore the Sabbath's place from creation to the New Testament.", refs: ["Genesis 2:2-3", "Isaiah 58:13-14", "Mark 2:27-28"] },
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
        { text: "For the living know that they will die, but the dead know ___.", options: ["not anything","everything","more than before","their fate"], answer: 0, reference: "Ecclesiastes 9:5", insight: "Scripture describes death as an unconscious state, not an ongoing awareness." },
        { text: "For dust you are, and to ___ you shall return.", options: ["dust","heaven","spirit","ashes"], answer: 0, reference: "Genesis 3:19", insight: "Death is described as a return to the ground, undoing what happened at creation." },
        { text: "The soul who sins, it shall ___.", options: ["die","suffer","wander","burn"], answer: 0, reference: "Ezekiel 18:20", insight: "Rather than the soul being naturally immortal, Scripture says the soul that sins actually dies." },
        { text: "For the wages of sin is ___, but the gift of God is eternal life in Christ Jesus our Lord.", options: ["death","sleep","sorrow","judgment"], answer: 0, reference: "Romans 6:23", insight: "Eternal life is described as a gift received through Christ — not something we already possess by nature." },
        { text: "The hour is coming in which all who are in the graves will ___ his voice.", options: ["hear","fear","forget","ignore"], answer: 0, reference: "John 5:28", insight: "Jesus describes the dead as being in graves, awaiting a future resurrection — not already alive elsewhere." },
        { text: "For the trumpet will sound, and the dead will be raised ___.", options: ["incorruptible","forgotten","unchanged","silent"], answer: 0, reference: "1 Corinthians 15:52", insight: "Paul ties the hope of eternal life to a future resurrection at Christ's return, not an immediate transition at death." },
        { text: "I am the resurrection and the life. He who believes in me, though he were dead, yet shall he ___.", options: ["live","sleep","wander","wait"], answer: 0, reference: "John 11:25", insight: "Jesus' own words before raising Lazarus tie life after death directly to His power to resurrect." },
        { text: "Blessed and holy is he who has part in the first ___.", options: ["resurrection","judgment","rapture","kingdom"], answer: 0, reference: "Revelation 20:6", insight: "Scripture's hope is future and physical — a resurrection at Christ's return, not an instant departure to another realm." }
      ],
      closingThought: "Because death is described as a sleep, it isn't something to be afraid of for the believer — it's simply the last thing you'll remember before Jesus wakes you.",
      decision: "Does this change how you think about loved ones who have died in faith?",
      goingDeeper: { intro: "Read more of what Scripture teaches about death and resurrection.", refs: ["Job 14:12-14", "1 Corinthians 15:51-54", "1 Thessalonians 4:16-17"] },
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
        { text: "This same Jesus, who was taken up from you into heaven, will come in like manner as you saw him go into ___.", options: ["heaven","Galilee","Jerusalem","the temple"], answer: 0, reference: "Acts 1:11", insight: "The angels promised a visible, literal return — matching the visible, literal ascension the disciples had just watched." },
        { text: "For the Lord himself will descend from heaven with a ___, with the voice of the archangel, and with the trumpet of God.", options: ["shout","whisper","song","silence"], answer: 0, reference: "1 Thessalonians 4:16", insight: "This is described as loud and unmistakable — not a private or hidden event." },
        { text: "Behold, he is coming with ___, and every eye will see him.", options: ["clouds","angels only","fire alone","silence"], answer: 0, reference: "Revelation 1:7", insight: "Every eye seeing Him rules out a secret or invisible return." },
        { text: "He who testifies to these things says, 'Surely I am coming ___.' Amen. Come, Lord Jesus!", options: ["quickly","someday","secretly","later"], answer: 0, reference: "Revelation 22:20", insight: "The Bible's final promise is an urgent one, met with the church's eager response." },
        { text: "But concerning that day and hour no one knows... but my ___ only.", options: ["Father","angels","prophets","disciples"], answer: 0, reference: "Matthew 24:36", insight: "The exact timing is kept from us — a reminder to stay ready rather than to set dates." },
        { text: "Let not your heart be troubled... I will come again and receive you to ___.", options: ["myself","Jerusalem","heaven alone","glory only"], answer: 0, reference: "John 14:1-3", insight: "Jesus frames His return as a personal reunion, not just a cosmic event." },
        { text: "In my Father's house are many ___.", options: ["mansions","gates","thrones","temples"], answer: 0, reference: "John 14:2", insight: "Jesus promises He is preparing an actual place for those who trust Him." },
        { text: "And so we will always be with the ___.", options: ["Lord","angels","saints","elders"], answer: 0, reference: "1 Thessalonians 4:17", insight: "The goal of the second coming isn't just an event — it's an unending relationship with Christ." }
      ],
      closingThought: "The promise of Christ's return isn't meant to fill us with anxiety about timing, but with readiness and hope — He is coming back for you.",
      decision: "If Jesus returned today, would you be ready to meet Him?",
      goingDeeper: { intro: "See more of what Scripture says will accompany Christ's return.", refs: ["Matthew 24:30-31", "1 Thessalonians 4:16-17", "Titus 2:13"] },
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
        { text: "You, O king, saw, and behold, a great ___.", options: ["image","mountain","tree","river"], answer: 0, reference: "Daniel 2:31", insight: "Nebuchadnezzar's dream used a single statue to represent a sequence of world kingdoms." },
        { text: "This image's head was of fine gold, its chest and arms of ___.", options: ["silver","iron","clay","bronze"], answer: 0, reference: "Daniel 2:32", insight: "Each metal in the statue represented a successive empire, declining in value but increasing in strength." },
        { text: "And in the days of these kings the God of heaven will set up a kingdom which will never be ___.", options: ["destroyed","moved","divided","forgotten"], answer: 0, reference: "Daniel 2:44", insight: "Every earthly kingdom in the vision eventually falls — except the one God Himself establishes." },
        { text: "The great God has made known to the king what will come to pass ___.", options: ["hereafter","today","secretly","never"], answer: 0, reference: "Daniel 2:45", insight: "The dream was given specifically to reveal the future course of history in advance." },
        { text: "But you, Daniel, shut up the words and seal the book, until the time of the ___.", options: ["end","judgment","king","temple"], answer: 0, reference: "Daniel 12:4", insight: "Daniel's prophecies were sealed for a future generation to understand more fully." },
        { text: "Many shall be purified, made white, and refined, but the wicked shall do ___.", options: ["wickedly","nothing","penance","good"], answer: 0, reference: "Daniel 12:10", insight: "As the end approaches, Daniel says character — for better or worse — becomes more clearly revealed, not less." },
        { text: "At that time Michael shall stand up, the great prince who stands watch over your people, and at that time your people shall be ___.", options: ["delivered","scattered","judged","silent"], answer: 0, reference: "Daniel 12:1", insight: "Even amid a time of unprecedented trouble, Daniel's prophecy ends with deliverance, not defeat." },
        { text: "But the ___ shall understand.", options: ["wise","proud","powerful","wealthy"], answer: 0, reference: "Daniel 12:10", insight: "Understanding prophecy isn't reserved for scholars — it's promised to those who seek it with a humble, wise heart." }
      ],
      closingThought: "History isn't random, and it isn't out of control — Daniel's visions show a God who already knows how the story ends, and who invites you to trust Him with the chapters still ahead.",
      decision: "Want to go deeper? The Daniel prophecy quizzes on this site walk through each vision chapter by chapter.",
      goingDeeper: { intro: "Explore the details behind Daniel's prophetic outline.", refs: ["Daniel 2:44", "Daniel 7:13-14", "Daniel 12:1-3"] },
    },
    {
      id: "great-controversy",
      category: "foundations",
      categoryLabel: "Foundations",
      title: "Where Did Evil Come From?",
      summary: "If God is good and all-powerful, why does evil exist at all? The Bible's answer starts long before Eden.",
      duration: "9 min",
      icon: "flame",
      keyThought: "Evil is not eternal, and it did not begin with humanity. Scripture traces it to the choice of a created being who chose pride over love — and shows that same conflict still playing out today.",
      statements: [
        { text: "You were perfect in your ways from the day you were created, until ___ was found in you.", options: ["unrighteousness","sickness","poverty","fear"], answer: 0, reference: "Ezekiel 28:15", insight: "This description of a covering angel who fell from perfection points beyond any earthly king." },
        { text: "How you have fallen from heaven, ___ star, son of the dawn!", options: ["morning","evening","distant","fallen"], answer: 0, reference: "Isaiah 14:12", insight: "Pride — wanting to be like the Most High — is named as the root of this fall." },
        { text: "The great dragon was thrown down, the old serpent, he who is called the ___ and Satan, the deceiver of the whole world.", options: ["devil","angel","judge","teacher"], answer: 0, reference: "Revelation 12:9", insight: "The serpent in Eden and the dragon in Revelation are identified as the same being." },
        { text: "The serpent said to the woman, \"You won't really ___.\"", options: ["die","know","see","understand"], answer: 0, reference: "Genesis 3:4", insight: "The very first recorded lie contradicted God's own words — and it's still the essence of every temptation." },
        { text: "He was a murderer from the beginning, and doesn't stand in the truth... for he is a ___, and the father of lies.", options: ["liar","stranger","judge","servant"], answer: 0, reference: "John 8:44", insight: "Jesus himself named the source behind every deception." },
        { text: "Your adversary, the devil, walks around like a roaring ___, seeking whom he may devour.", options: ["lion","wolf","bear","serpent"], answer: 0, reference: "1 Peter 5:8", insight: "The conflict didn't end at Eden — it continues wherever people are targeted for discouragement and defeat." },
        { text: "They overcame him because of the Lamb's blood, and because of the word of their ___.", options: ["testimony","wisdom","strength","tradition"], answer: 0, reference: "Revelation 12:11", insight: "The battle is won the same way it always has been: through Christ's sacrifice, not human strength." },
        { text: "Yahweh said to Satan, \"Behold, all that he has is in your power; only on himself don't stretch out your ___.\"", options: ["hand","sword","voice","anger"], answer: 0, reference: "Job 1:12", insight: "Even at his worst, Satan operates only within limits God allows — he is not equal to God." }
      ],
      closingThought: "Evil did not begin with humanity, and it will not last forever. It began with a created being's choice, and the Bible traces its certain end. Understanding this frees you from blaming God for suffering He never designed.",
      decision: "Now that you've seen where this conflict began, does that change how you view the struggles you face today?",
      goingDeeper: { intro: "Trace the conflict between good and evil further.", refs: ["Isaiah 14:12-14", "Ezekiel 28:14-17", "Revelation 12:7-9"] },
    },
    {
      id: "holy-spirit-helper",
      category: "foundations",
      categoryLabel: "Foundations",
      title: "Who Is the Holy Spirit?",
      summary: "He's called the Comforter, the Spirit of truth, the Helper — but who is He, and what does He actually do in your life?",
      duration: "9 min",
      icon: "dove",
      keyThought: "Jesus promised His followers would never be left alone. He would send someone to guide, comfort, empower, and transform ordinary people into faithful witnesses.",
      statements: [
        { text: "I will pray to the Father, and he will give you another ___, that he may be with you forever.", options: ["Counselor","stranger","prophet","servant"], answer: 0, reference: "John 14:16", insight: "Jesus didn't leave His followers to manage on their own — He promised a permanent, personal Helper." },
        { text: "When he, the Spirit of truth, has come, he will ___ you into all truth.", options: ["guide","test","judge","silence"], answer: 0, reference: "John 16:13", insight: "The Spirit's role is to lead people deeper into truth, never away from it." },
        { text: "You will receive ___ when the Holy Spirit has come upon you, and you will be witnesses to me.", options: ["power","wealth","fame","comfort"], answer: 0, reference: "Acts 1:8", insight: "Every effective witness in Scripture depended on the Spirit's power, not personal ability." },
        { text: "The Spirit also helps our ___, for we don't know how to pray as we ought.", options: ["weaknesses","enemies","riches","doubts"], answer: 0, reference: "Romans 8:26", insight: "Even our prayers are helped along by the Spirit when we don't know what to say." },
        { text: "The fruit of the Spirit is love, joy, peace, ___, kindness, goodness, faith, gentleness, and self-control.", options: ["patience","anger","pride","fear"], answer: 0, reference: "Galatians 5:22-23", insight: "The Spirit's presence is proven less by dramatic experiences and more by quiet, growing character." },
        { text: "Don't ___ the Holy Spirit of God, in whom you were sealed for the day of redemption.", options: ["grieve","forget","ignore","fear"], answer: 0, reference: "Ephesians 4:30", insight: "The Spirit is personal, not a force — He can be grieved by the choices we make." },
        { text: "Now the Lord is the Spirit, and where the Spirit of the Lord is, there is ___.", options: ["liberty","law","fear","distance"], answer: 0, reference: "2 Corinthians 3:17", insight: "The Spirit's work sets people free rather than binding them tighter." },
        { text: "Repent and be baptized... for the forgiveness of sins, and you will receive the gift of the Holy ___.", options: ["Spirit","Law","Kingdom","Word"], answer: 0, reference: "Acts 2:38", insight: "The gift of the Spirit was promised to everyone who responds to God, not a select few." }
      ],
      closingThought: "The Holy Spirit is not a vague feeling or an impersonal force — He is God's own presence, sent to guide, comfort, empower, and quietly reshape ordinary people from the inside out.",
      decision: "Have you ever asked the Holy Spirit to fill and guide your life the way Scripture describes?",
      goingDeeper: { intro: "See more of the Spirit's work described in Scripture.", refs: ["Acts 1:8", "Romans 8:26-27", "Galatians 5:22-23"] },
    },
    {
      id: "power-of-prayer",
      category: "living",
      categoryLabel: "Christian Living",
      title: "Does Prayer Really Change Anything?",
      summary: "Is prayer just a comforting ritual, or does it actually accomplish something? Scripture makes a bold claim either way.",
      duration: "8 min",
      icon: "hands",
      keyThought: "The Bible presents prayer not as a formality but as an open line to the God of the universe — one He invites you to use often, honestly, and with real expectation.",
      statements: [
        { text: "In nothing be ___, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.", options: ["anxious","silent","boastful","hasty"], answer: 0, reference: "Philippians 4:6", insight: "Prayer is offered as the direct alternative to anxiety, not a supplement to it." },
        { text: "Confess your ___ to one another, and pray for one another, that you may be healed.", options: ["offenses","doubts","dreams","fears"], answer: 0, reference: "James 5:16", insight: "Honest prayer, offered by ordinary people, is described as having real effect." },
        { text: "This is the ___ we have toward him: that if we ask anything according to his will, he listens to us.", options: ["boldness","fear","doubt","silence"], answer: 0, reference: "1 John 5:14", insight: "You can approach God with confidence, not as someone begging a reluctant stranger." },
        { text: "Call to me, and I will answer you, and will show you great and ___ things which you don't know.", options: ["difficult","hidden","ancient","secret"], answer: 0, reference: "Jeremiah 33:3", insight: "God invites people to call on Him specifically so He can respond." },
        { text: "Ask, and it will be given you. ___, and you will find. Knock, and it will be opened for you.", options: ["Seek","Wait","Hope","Watch"], answer: 0, reference: "Matthew 7:7", insight: "Prayer is described with active verbs — asking, seeking, knocking — not passive waiting." },
        { text: "All things whatever you pray and ask for, ___ that you have received them, and you shall have them.", options: ["believe","hope","imagine","expect"], answer: 0, reference: "Mark 11:24", insight: "Faith is the posture Jesus links directly to answered prayer." },
        { text: "Pray without ___.", options: ["ceasing","doubting","fear","delay"], answer: 0, reference: "1 Thessalonians 5:17", insight: "Prayer is meant to be a constant conversation, not an occasional event." },
        { text: "When you pray, enter into your ___ room, and having shut your door, pray to your Father who is in secret.", options: ["inner","public","upper","empty"], answer: 0, reference: "Matthew 6:6", insight: "Jesus modeled prayer as intimate and personal, not performed for an audience." }
      ],
      closingThought: "Prayer is not a formality God requires — it's a relationship He invites. Every promise about prayer in Scripture points to a God who is genuinely listening and ready to respond.",
      decision: "What would change in your life if you truly believed God was listening every time you prayed?",
      goingDeeper: { intro: "Explore more of the Bible's promises about prayer.", refs: ["Jeremiah 33:3", "Matthew 7:7-8", "Philippians 4:6-7"] },
    },
    {
      id: "baptism-new-life",
      category: "living",
      categoryLabel: "Christian Living",
      title: "What Does Baptism Really Mean?",
      summary: "It's more than a ceremony. Scripture describes baptism as a burial, a birth, and a public declaration all at once.",
      duration: "8 min",
      icon: "droplet",
      keyThought: "Baptism pictures what happens inside a person who commits their life to Christ: the old life goes under, and a new life rises in its place.",
      statements: [
        { text: "We were buried therefore with him through ___ into death, that ... we also might walk in newness of life.", options: ["baptism","faith","suffering","prayer"], answer: 0, reference: "Romans 6:4", insight: "Baptism pictures death to an old way of living and rising to a new one." },
        { text: "Why do you wait? Arise, be baptized, and ___ away your sins, calling on the name of the Lord.", options: ["wash","turn","walk","run"], answer: 0, reference: "Acts 22:16", insight: "Baptism is tied directly to the cleansing and forgiveness found in Christ." },
        { text: "Having been buried with him in baptism, in which you were also raised with him through ___ in the working of God.", options: ["faith","fear","works","law"], answer: 0, reference: "Colossians 2:12", insight: "It's faith in God's power, not the water itself, that makes baptism meaningful." },
        { text: "As many of you as were baptized into Christ have put on ___.", options: ["Christ","righteousness","the law","glory"], answer: 0, reference: "Galatians 3:27", insight: "Baptism marks a new identity — clothed, so to speak, in Christ himself." },
        { text: "He who believes and is baptized will be ___; but he who disbelieves will be condemned.", options: ["saved","blessed","forgiven","changed"], answer: 0, reference: "Mark 16:16", insight: "Baptism follows belief — it's the outward response to an inward decision." },
        { text: "Jesus, when he was baptized, went up directly from the water... He saw the Spirit of God descending as a ___, and coming on him.", options: ["dove","flame","cloud","star"], answer: 0, reference: "Matthew 3:16", insight: "Even Jesus was baptized — not because He needed cleansing, but to identify with those He came to save." },
        { text: "If anyone is in Christ, he is a new ___. The old things have passed away.", options: ["creation","name","law","hope"], answer: 0, reference: "2 Corinthians 5:17", insight: "Baptism marks the start of a genuinely new life, not a fresh coat of paint on the old one." },
        { text: "They came to some water, and the eunuch said, \"Behold, here is water. What is keeping me from being ___?\"", options: ["baptized","forgiven","saved","healed"], answer: 0, reference: "Acts 8:36", insight: "As soon as this man understood the gospel, his very next question was about baptism." }
      ],
      closingThought: "Baptism isn't a ritual to check off a list — it's a public yes to a whole new direction in life, a burial of the old and a rising to walk with Christ.",
      decision: "Have you taken this step, or is it something you sense God inviting you toward?",
      goingDeeper: { intro: "Read more about baptism's meaning in Scripture.", refs: ["Acts 2:38", "Galatians 3:27", "Colossians 2:12"] },
    },
    {
      id: "church-body-of-christ",
      category: "living",
      categoryLabel: "Christian Living",
      title: "Why Belong to a Church?",
      summary: "Can't you just love God on your own? Scripture describes something you can only experience together with others.",
      duration: "8 min",
      icon: "people",
      keyThought: "God's plan was never for isolated believers. He designed His people to function like a body — connected, interdependent, and stronger together than apart.",
      statements: [
        { text: "Now you are the body of Christ, and members ___.", options: ["individually","alone","separately","equally"], answer: 0, reference: "1 Corinthians 12:27", insight: "Every believer is described as a needed part of something larger than themselves." },
        { text: "We, who are many, are one body in Christ, and ___ members one of another.", options: ["individually","secretly","rarely","occasionally"], answer: 0, reference: "Romans 12:5", insight: "Christians are pictured as belonging to each other, not just to God individually." },
        { text: "Not forsaking our own ___ together, as the custom of some is, but exhorting one another.", options: ["assembling","arguing","working","traveling"], answer: 0, reference: "Hebrews 10:25", insight: "Meeting together is described as a habit worth protecting, especially as challenges increase." },
        { text: "They continued steadfastly in the apostles' teaching and fellowship, in the breaking of ___, and prayer.", options: ["bread","wine","law","gifts"], answer: 0, reference: "Acts 2:42", insight: "The earliest church was marked by shared meals, teaching, and prayer — not just private devotion." },
        { text: "For where two or three are gathered together in my ___, there I am in the middle of them.", options: ["name","honor","memory","house"], answer: 0, reference: "Matthew 18:20", insight: "Jesus promises a special kind of presence to those who gather together in His name." },
        { text: "You are a chosen ___, a royal priesthood, a holy nation, a people for God's own possession.", options: ["race","crowd","family","tribe"], answer: 0, reference: "1 Peter 2:9", insight: "God's people are given a shared identity and a shared calling, together." },
        { text: "As the body is one, and has many ___, ... so also is Christ.", options: ["members","leaders","names","gifts"], answer: 0, reference: "1 Corinthians 12:12", insight: "Diversity within the church isn't a problem to solve — it's the design." },
        { text: "You are no longer strangers and foreigners, but fellow ___ with the saints, and of the household of God.", options: ["citizens","travelers","servants","guests"], answer: 0, reference: "Ephesians 2:19", insight: "Belonging to God's family comes with genuine belonging to His people." }
      ],
      closingThought: "Church was never meant to be a building you attend — it's a family you belong to, where your gifts are needed and no one is meant to walk alone.",
      decision: "Is there a step you sense you need to take toward deeper connection with other believers?",
      goingDeeper: { intro: "See more of what Scripture says about belonging together.", refs: ["Acts 2:42-47", "1 Corinthians 12:12-14", "Hebrews 10:24-25"] },
    },
    {
      id: "spiritual-gifts",
      category: "living",
      categoryLabel: "Christian Living",
      title: "What's Your Part in God's Plan?",
      summary: "God doesn't just save you — He equips you with something specific to contribute. What's yours?",
      duration: "8 min",
      icon: "gift",
      keyThought: "Every believer receives at least one spiritual gift — not for personal status, but to serve others and build up the whole community of faith.",
      statements: [
        { text: "To each one is given the manifestation of the Spirit for the ___ of all.", options: ["profit","glory","fear","testing"], answer: 0, reference: "1 Corinthians 12:7", insight: "Spiritual gifts are given for the good of the whole group, not just the individual." },
        { text: "Having gifts ___ according to the grace given to us...", options: ["differing","identical","borrowed","hidden"], answer: 0, reference: "Romans 12:6", insight: "Different gifts are intentional — the church needs variety, not uniformity." },
        { text: "As each has received a gift, employ it in ___ one another, as good managers of the grace of God.", options: ["serving","judging","comparing","hiding"], answer: 0, reference: "1 Peter 4:10", insight: "Gifts are meant to be used, not admired or compared." },
        { text: "For the perfecting of the saints, to the work of ___, to the building up of the body of Christ.", options: ["serving","ruling","teaching only","debating"], answer: 0, reference: "Ephesians 4:12", insight: "Even leadership gifts exist to equip others for service, not to create dependence." },
        { text: "The one and the same Spirit produces all of these, distributing to each one ___ as he desires.", options: ["separately","equally","publicly","secretly"], answer: 0, reference: "1 Corinthians 12:11", insight: "It's the Spirit, not personal ambition, that decides who receives which gift." },
        { text: "Earnestly desire the best ___.", options: ["gifts","riches","titles","crowns"], answer: 0, reference: "1 Corinthians 12:31", insight: "Believers are actually encouraged to want to be useful — that desire is a healthy one." },
        { text: "To one he gave five talents, to another two, to another one; to each according to his own ___.", options: ["ability","wealth","age","desire"], answer: 0, reference: "Matthew 25:15", insight: "God gives responsibility in proportion to what each person can actually handle." },
        { text: "There are various kinds of ___, but the same Spirit.", options: ["gifts","churches","prayers","battles"], answer: 0, reference: "1 Corinthians 12:4", insight: "Different gifts all trace back to the same source, so there's no room for rivalry." }
      ],
      closingThought: "You were not given a gift by accident. Somewhere in the body of Christ, there's a role only you can fill the way you can fill it.",
      decision: "Have you identified how God has gifted you to serve others?",
      goingDeeper: { intro: "Explore the range of gifts Scripture describes.", refs: ["Romans 12:4-8", "1 Corinthians 12:4-11", "1 Peter 4:10-11"] },
    },
    {
      id: "stewardship-tithe",
      category: "living",
      categoryLabel: "Christian Living",
      title: "Does God Really Need Your Money?",
      summary: "God owns everything already — so why does the Bible talk so much about giving? The answer says more about us than about Him.",
      duration: "8 min",
      icon: "coin",
      keyThought: "Giving was never about God's need for money — it's about training the human heart to hold possessions loosely and trust God completely.",
      statements: [
        { text: "Bring the whole ___ into the storehouse, that there may be food in my house, and test me now in this.", options: ["tithe","harvest","sacrifice","offering"], answer: 0, reference: "Malachi 3:10", insight: "This is one of the only places in Scripture where God actually invites people to test Him." },
        { text: "Will a man rob God? Yet you rob me! But you say, 'How have we robbed you?' In tithes and ___.", options: ["offerings","prayers","debts","promises"], answer: 0, reference: "Malachi 3:8", insight: "Withholding what belongs to God is described in surprisingly strong terms." },
        { text: "Where your treasure is, there your ___ will be also.", options: ["heart","mind","treasure","soul"], answer: 0, reference: "Matthew 6:21", insight: "How we handle money reveals where our real devotion lies." },
        { text: "Let each man give... not grudgingly, or under compulsion; for God loves a ___ giver.", options: ["cheerful","wealthy","reluctant","careful"], answer: 0, reference: "2 Corinthians 9:7", insight: "The attitude behind giving matters as much as the amount." },
        { text: "Honor Yahweh with your substance, with the ___ of all your increase.", options: ["first fruits","tithes","riches","harvest"], answer: 0, reference: "Proverbs 3:9", insight: "Giving God the first portion, not the leftovers, expresses genuine priority." },
        { text: "Give, and it will be given to you: good measure, pressed down, shaken together, and running over, will be ___ back to you.", options: ["measured","given","returned","poured"], answer: 0, reference: "Luke 6:38", insight: "Generosity is described as something that returns to the giver, not just the receiver." },
        { text: "All the tithe of the land... is Yahweh's. It is ___ to Yahweh.", options: ["holy","sacred only","reserved","required"], answer: 0, reference: "Leviticus 27:30", insight: "The tithe was set apart as belonging to God from the very beginning." },
        { text: "Who am I... that we should be able to offer so ___ as this?", options: ["willingly","cheaply","carelessly","reluctantly"], answer: 0, reference: "1 Chronicles 29:14", insight: "Even a king recognized that everything he gave to God had come from God first." }
      ],
      closingThought: "Giving isn't about filling God's need — He owns everything already. It's about loosening money's grip on our hearts and practicing trust in the God who provides.",
      decision: "What would change if you saw giving as an act of trust rather than a financial loss?",
      goingDeeper: { intro: "Read more of what Scripture says about giving.", refs: ["Genesis 14:18-20", "Proverbs 3:9-10", "2 Corinthians 9:6-7"] },
    },
    {
      id: "health-temple",
      category: "living",
      categoryLabel: "Christian Living",
      title: "Does God Care About Your Body?",
      summary: "Is faith only about the soul, or does God care about how you sleep, eat, and treat your body every day?",
      duration: "8 min",
      icon: "leaf",
      keyThought: "Scripture treats the body as sacred space — not something to indulge carelessly or neglect, but a place where God actually chooses to dwell.",
      statements: [
        { text: "Don't you know that your body is a ___ of the Holy Spirit who is in you? You are not your own.", options: ["temple","building","vessel only","house"], answer: 0, reference: "1 Corinthians 6:19", insight: "The body is treated as sacred space, not just a container for the soul." },
        { text: "Whether therefore you eat, or drink, or whatever you do, do all to the ___ of God.", options: ["glory","honor only","name","law"], answer: 0, reference: "1 Corinthians 10:31", insight: "Even ordinary choices like eating and drinking are included in a life devoted to God." },
        { text: "I pray that you may prosper in all things and be ___, even as your soul prospers.", options: ["healthy","wealthy","famous","comfortable"], answer: 0, reference: "3 John 1:2", insight: "Physical well-being is linked here directly to spiritual well-being." },
        { text: "Daniel purposed in his heart that he would not ___ himself with the king's dainties, nor with the wine which he drank.", options: ["defile","trouble","satisfy","weaken"], answer: 0, reference: "Daniel 1:8", insight: "Daniel's convictions about what he ate and drank were tied directly to his faith, not just his health." },
        { text: "Wine is a mocker, and ___ is a brawler. Whoever is led astray by them is not wise.", options: ["beer","water","milk","oil"], answer: 0, reference: "Proverbs 20:1", insight: "Scripture repeatedly warns about substances that cloud judgment and self-control." },
        { text: "Present your bodies a living ___, holy, acceptable to God.", options: ["sacrifice","offering only","gift","promise"], answer: 0, reference: "Romans 12:1", insight: "Worship is described here as something done with the whole body, not just words." },
        { text: "I have given you every herb yielding seed... and every tree which bears fruit yielding seed. It will be your ___.", options: ["food","strength","shade","garden"], answer: 0, reference: "Genesis 1:29", insight: "God's original design for food came straight from what He had planted." },
        { text: "Don't you know that you are a temple of God, and that God's ___ lives in you?", options: ["Spirit","glory","law","name"], answer: 0, reference: "1 Corinthians 3:16", insight: "This isn't just about individual habits — it's about honoring the God who lives within you." }
      ],
      closingThought: "Taking care of your body isn't vanity — it's stewardship of the very place where God has chosen to dwell.",
      decision: "Is there one habit you sense God inviting you to change for the sake of your health?",
      goingDeeper: { intro: "See more of what Scripture says about caring for the body.", refs: ["Daniel 1:8-15", "Romans 12:1-2", "3 John 1:2"] },
    },
    {
      id: "marriage-family",
      category: "living",
      categoryLabel: "Christian Living",
      title: "God's Design for Marriage and Family",
      summary: "In a world full of shifting definitions, what does Scripture actually say about marriage, love, and raising children?",
      duration: "9 min",
      icon: "family",
      keyThought: "Marriage and family were God's idea from the very beginning — designed as a picture of covenant love, not just a social arrangement.",
      statements: [
        { text: "A man will leave his father and his mother, and will ___ with his wife, and they will be one flesh.", options: ["join","argue","compete","compare"], answer: 0, reference: "Genesis 2:24", insight: "Marriage was designed from creation as a lifelong, exclusive union." },
        { text: "Husbands, love your wives, even as Christ also loved the ___, and gave himself up for it.", options: ["church","law","world","nation"], answer: 0, reference: "Ephesians 5:25", insight: "The standard for a husband's love is nothing less than Christ's own self-giving love." },
        { text: "Train up a child in the way he should go, and when he is old he will not ___ from it.", options: ["depart","recover","return","suffer"], answer: 0, reference: "Proverbs 22:6", insight: "Early spiritual formation is described as having lasting influence." },
        { text: "Fathers, don't provoke your children to wrath, but ___ them in the discipline and instruction of the Lord.", options: ["nurture","abandon","ignore","punish"], answer: 0, reference: "Ephesians 6:4", insight: "Discipline is paired here with genuine nurture, not harshness." },
        { text: "Love bears all things, believes all things, hopes all things, ___ all things.", options: ["endures","forgets","doubts","destroys"], answer: 0, reference: "1 Corinthians 13:7", insight: "This description of love is often read at weddings — and just as often needed years later." },
        { text: "As for me and my house, we will ___ Yahweh.", options: ["serve","worship only","obey only","follow"], answer: 0, reference: "Joshua 24:15", insight: "Joshua's declaration models leading a household toward faith, not leaving it to chance." },
        { text: "Let marriage be held in ___ among all, and let the bed be undefiled.", options: ["honor","secret","doubt","question"], answer: 0, reference: "Hebrews 13:4", insight: "Marriage is described as something to be respected and protected, not treated casually." },
        { text: "Whoever finds a wife finds a good thing, and obtains ___ of Yahweh.", options: ["favor","riches","wisdom","peace"], answer: 0, reference: "Proverbs 18:22", insight: "A good marriage is described as a gift from God, worth genuine gratitude." }
      ],
      closingThought: "Marriage and family were never meant to be perfect on their own — they were designed to point people toward a love bigger than themselves, sustained by grace along the way.",
      decision: "What would it look like to invite God more intentionally into your marriage or family life?",
      goingDeeper: { intro: "Explore more of Scripture's design for the home.", refs: ["Genesis 2:24", "Ephesians 5:25-33", "Joshua 24:15"] },
    },
    {
      id: "sanctuary-judgment",
      category: "future",
      categoryLabel: "The Future",
      title: "Where Heaven Touches Earth",
      summary: "The Old Testament sanctuary was more than a building — it was a preview of Christ's ongoing work in heaven on your behalf.",
      duration: "10 min",
      icon: "scale",
      keyThought: "Scripture describes an actual sanctuary in heaven, where Christ ministers today as our High Priest — the true pattern that the earthly tabernacle was always meant to picture.",
      statements: [
        { text: "We have such a high priest, who sat down on the right hand of the throne of the ___ in the heavens.", options: ["Majesty","Ancient of Days","Lamb","Judge"], answer: 0, reference: "Hebrews 8:1", insight: "Christ's priestly work didn't end at the cross — it continues in a real heavenly sanctuary." },
        { text: "Christ hasn't entered into holy places made with hands... but into heaven itself, now to appear in the presence of God for ___.", options: ["us","angels","priests","kings"], answer: 0, reference: "Hebrews 9:24", insight: "Christ appears in heaven's sanctuary specifically on our behalf." },
        { text: "He said to me, \"To two thousand and three hundred ___. Then the sanctuary will be cleansed.\"", options: ["days","years","weeks","nights"], answer: 0, reference: "Daniel 8:14", insight: "This long prophetic time period points to a specific work of cleansing in the heavenly sanctuary." },
        { text: "I watched until thrones were placed, and one who was ___ sat. His clothing was white as snow.", options: ["ancient of days","a young ruler","a warrior king","a silent judge"], answer: 0, reference: "Daniel 7:9", insight: "Daniel pictures a courtroom scene in heaven, with God himself presiding." },
        { text: "God's temple that is in heaven was opened, and the ark of the Lord's ___ was seen in his temple.", options: ["covenant","glory","throne","judgment"], answer: 0, reference: "Revelation 11:19", insight: "The ark, containing God's law, is shown at the very center of the heavenly sanctuary." },
        { text: "Let us therefore draw near with boldness to the throne of grace, that we may receive ___ and find grace for help in time of need.", options: ["mercy","glory","peace","comfort"], answer: 0, reference: "Hebrews 4:16", insight: "Even amid a heavenly judgment, believers are invited to approach with confidence, not fear." },
        { text: "If anyone sins, we have a ___ with the Father, Jesus Christ, the righteous.", options: ["Counselor","judge","stranger","distant King"], answer: 0, reference: "1 John 2:1", insight: "Christ isn't just the judge in this picture — He's also our defense." },
        { text: "Fear the Lord, and give him glory; for the hour of his ___ has come.", options: ["judgment","mercy","kingdom","harvest"], answer: 0, reference: "Revelation 14:7", insight: "This announcement of judgment is framed as good news, not a threat — an invitation to trust the One who judges fairly." }
      ],
      closingThought: "The sanctuary was never just a building or a ritual — it was God's way of showing, step by step, exactly how He deals with sin and how completely Christ has taken care of it on our behalf.",
      decision: "Does knowing Christ is actively at work for you right now change how you face today?",
      goingDeeper: { intro: "Trace the sanctuary theme further through Scripture.", refs: ["Exodus 25:8-9", "Daniel 8:14", "Hebrews 9:11-12"] },
    },
    {
      id: "three-angels-messages",
      category: "future",
      categoryLabel: "The Future",
      title: "A Final Message to the World",
      summary: "Revelation describes a final, urgent message going out to every nation before the end. What is it — and why does it matter now?",
      duration: "9 min",
      icon: "megaphone",
      keyThought: "Before history closes, Scripture describes a final call going out to the whole world — an invitation to worship the Creator and come out from every counterfeit before it's too late.",
      statements: [
        { text: "I saw an angel flying in mid heaven, having an eternal ___ to proclaim to those who dwell on the earth.", options: ["Good News","judgment","law","mystery"], answer: 0, reference: "Revelation 14:6", insight: "This final message is still described as good news, meant for every nation on earth." },
        { text: "Worship him who made the heaven, the earth, the sea, and the springs of ___.", options: ["waters","mountains","angels","nations"], answer: 0, reference: "Revelation 14:7", insight: "At the very end of time, the call is to worship the Creator, not merely to believe facts about Him." },
        { text: "Babylon the great has ___, which has made all the nations drink of the wine of the wrath of her sexual immorality.", options: ["fallen","risen","spoken","reigned"], answer: 0, reference: "Revelation 14:8", insight: "This warning targets confusion and compromise that has spread across the whole world." },
        { text: "Here is the ___ of the saints, those who keep the commandments of God, and the faith of Jesus.", options: ["perseverance","wealth","wisdom","army"], answer: 0, reference: "Revelation 14:12", insight: "God's end-time people are described by their steady faithfulness, not by dramatic power." },
        { text: "This Good News of the Kingdom will be preached in the whole world for a testimony to all the nations, and then the ___ will come.", options: ["end","judgment","harvest","kingdom"], answer: 0, reference: "Matthew 24:14", insight: "The spread of this message to every nation is tied directly to the timing of the end." },
        { text: "Come out of her, my people, that you have no participation in her ___, and that you don't receive of her plagues.", options: ["sins","riches","glory","pride"], answer: 0, reference: "Revelation 18:4", insight: "God's call is always to come out of what is false, not simply to observe it from a distance." },
        { text: "The Spirit and the bride say, \"Come!\"... He who is thirsty, let him come. He who desires, let him take the water of life ___.", options: ["freely","carefully","secretly","slowly"], answer: 0, reference: "Revelation 22:17", insight: "Even in the final, urgent message, the invitation remains completely free." },
        { text: "Blessed are the dead who die in the Lord from now on... that they may rest from their ___; for their works follow with them.", options: ["labors","sins","battles","doubts"], answer: 0, reference: "Revelation 14:13", insight: "Faithfulness to the end is met with rest, not exhaustion." }
      ],
      closingThought: "This final message isn't meant to frighten — it's meant to prepare. It calls people everywhere to worship the true God before the world's confusion reaches its climax.",
      decision: "Does this final call change how you think about the choices you're making today?",
      goingDeeper: { intro: "Read the full message in its original setting.", refs: ["Revelation 14:6-7", "Revelation 14:8", "Revelation 14:9-12"] },
    },
    {
      id: "new-earth-millennium",
      category: "future",
      categoryLabel: "The Future",
      title: "What Comes After the Storm?",
      summary: "The Bible doesn't end with judgment — it ends with restoration. What does eternity actually look like?",
      duration: "9 min",
      icon: "sunrise",
      keyThought: "Every hard question about suffering, evil, and death finds its final answer here — not in a vague afterlife, but in a real, restored earth where God himself lives among His people forever.",
      statements: [
        { text: "I saw thrones, and they sat on them, and judgment was given to them... They lived and reigned with Christ for a thousand ___.", options: ["years","days","ages","generations"], answer: 0, reference: "Revelation 20:4", insight: "This thousand-year period is a time of review and vindication before the final restoration." },
        { text: "I saw a new heaven and a new earth: for the first heaven and the first earth have passed away, and the sea is no ___.", options: ["more","longer here","longer real","different"], answer: 0, reference: "Revelation 21:1", insight: "The old, broken creation is replaced entirely, not merely patched up." },
        { text: "Behold, God's ___ is with people, and he will dwell with them, and they will be his people.", options: ["dwelling","judgment","kingdom","mercy"], answer: 0, reference: "Revelation 21:3", insight: "The distance between heaven and earth finally closes — God lives directly among His people." },
        { text: "He will wipe away every tear from their eyes. ___ will be no more; neither will there be mourning, nor crying, nor pain, any more.", options: ["Death","Fear","Night","Hunger"], answer: 0, reference: "Revelation 21:4", insight: "Every source of grief that has ever touched a human life is described as ending completely." },
        { text: "According to his promise, we look for new heavens and a new earth, in which ___ dwells.", options: ["righteousness","peace only","glory only","light only"], answer: 0, reference: "2 Peter 3:13", insight: "The new earth isn't just free of pain — it's a place where things are finally set right." },
        { text: "There will be no night, and they need no lamp light; for the Lord God will illuminate them. They will ___ forever and ever.", options: ["reign","rest","sing","serve"], answer: 0, reference: "Revelation 22:5", insight: "God's people are given an active, meaningful role in eternity, not an endless, passive rest." },
        { text: "Behold, I create new heavens and a new earth; and the former things will not be ___, nor come into mind.", options: ["remembered","forgotten","known","seen"], answer: 0, reference: "Isaiah 65:17", insight: "The pain of this life is described as fading so completely it won't even come to mind." },
        { text: "I watched until thrones were placed, and one who was ancient of days sat. His throne was fiery flames, and its wheels burning ___.", options: ["fire","light","glory","gold"], answer: 0, reference: "Daniel 7:9", insight: "The same God who judges with perfect fairness is the one who welcomes His people home." }
      ],
      closingThought: "The story doesn't end in ashes — it ends in restoration. Every tear, every loss, every question is finally answered face to face with the God who makes all things new.",
      decision: "Does this picture of the future give you hope for whatever you're facing today?",
      goingDeeper: { intro: "Explore more of Scripture's picture of the world made new.", refs: ["Revelation 20:4-6", "Revelation 21:1-4", "2 Peter 3:13"] },
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
    answerStepTitle: player.querySelector(".study-step-answer .study-step-title"),
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
    resultGoingDeeper: player.querySelector("[data-study-going-deeper]"),
    resultGoingDeeperIntro: player.querySelector("[data-study-going-deeper-intro]"),
    resultGoingDeeperList: player.querySelector("[data-study-going-deeper-list]"),
    resultCertificateBanner: player.querySelector("[data-study-certificate-banner]"),
    resultSignupStatus: player.querySelector("[data-study-signup-result-status]"),
    retake: player.querySelector("[data-study-retake]"),
    progressBanner: directory.querySelector("[data-study-progress-banner]"),
    progressText: directory.querySelector("[data-study-progress-text]"),
    directoryProgressBar: directory.querySelector("[data-study-progress-bar]"),
    directoryCertificateCta: directory.querySelector("[data-view-diploma]"),
    diploma: document.querySelector("[data-study-diploma]"),
    diplomaName: document.querySelector("[data-diploma-name]"),
    diplomaDate: document.querySelector("[data-diploma-date]"),
    diplomaList: document.querySelector("[data-diploma-list]"),
    translationSelect: player.querySelector("[data-study-translation]"),
    copyLink: player.querySelector("[data-study-copy-link]"),
    copyLinkLabel: player.querySelector("[data-study-copy-link-label]"),
    signupModal: document.querySelector("[data-study-signup-modal]"),
    signupTitle: document.querySelector("[data-study-signup-title]"),
    signupMessage: document.querySelector("[data-study-signup-message]"),
    signupForm: document.querySelector("[data-study-signup-form]"),
    signupEmail: document.querySelector("[data-study-signup-form] input[name='email']"),
    signupConsent: document.querySelector("[data-study-signup-form] input[name='consent']"),
    signupSubmit: document.querySelector("[data-study-signup-submit]"),
    signupSkip: document.querySelector("[data-study-signup-skip]"),
    signupStatus: document.querySelector("[data-study-signup-status]")
  };

  let activeStudy = null;
  let statementIndex = 0;
  let answers = [];
  let answerCorrect = [];
  let readState = [];
  let advancedAttempts = [];
  let studyMode = "easy";
  const savedStatePrefix = "word-oasis-study:";

  const TRANSLATION_KEY = "word-oasis-bible-translation";
  const LEGACY_TRANSLATION_KEY = "word-oasis-promise-translation";
  const STUDY_MODE_KEY = "word-oasis-study-mode";
  const STUDY_EMAIL_KEY = "word-oasis-study-email";
  const STUDY_VISITOR_KEY = "word-oasis-study-visitor";
  const STUDY_STARTED_PREFIX = "word-oasis-study-started:";
  const KNOWN_TRANSLATIONS = ["web", "kjv", "asv"];
  const endpoint = window.WORD_OASIS_FORM_ENDPOINT || "";

  let signupContext = null;

  function track(eventName, parameters = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, parameters);
    }
  }

  function safeStudyVisitorToken() {
    try {
      const existing = localStorage.getItem(STUDY_VISITOR_KEY);
      if (existing) return existing;
      const token = typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(STUDY_VISITOR_KEY, token);
      return token;
    } catch (error) {
      return "";
    }
  }

  function getSavedStudyEmail() {
    try {
      return String(localStorage.getItem(STUDY_EMAIL_KEY) || "").trim();
    } catch (error) {
      return "";
    }
  }

  function saveStudyEmail(email) {
    try {
      localStorage.setItem(STUDY_EMAIL_KEY, email);
    } catch (error) {
      // Ignore storage errors.
    }
  }

  function hasStudySignup() {
    return Boolean(getSavedStudyEmail());
  }

  function showSignupResultStatus(message) {
    if (!elements.resultSignupStatus) return;
    elements.resultSignupStatus.textContent = message;
    elements.resultSignupStatus.hidden = !message;
  }

  async function postStudyFunnelEvent(payload) {
    if (!endpoint) return;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      keepalive: true
    });
    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (error) {
      throw new Error("Invalid tracking response.");
    }
    if (!response.ok || result.success === false) {
      throw new Error(result.error || "Tracking request failed.");
    }
  }

  function queueStudyFunnelEvent(stage, extra = {}) {
    const completed = getCompletedStudies();
    const payload = {
      eventType: "study-funnel",
      stage,
      studyId: activeStudy?.id || "",
      studyTitle: activeStudy?.title || "",
      completedCount: completed.length,
      totalStudies: studies.length,
      visitorToken: safeStudyVisitorToken(),
      email: getSavedStudyEmail(),
      consent: hasStudySignup(),
      source: "word-oasis-studies",
      pageUrl: window.location.href,
      occurredAt: new Date().toISOString(),
      ...extra
    };
    track("study_funnel_event", {
      stage,
      study_id: payload.studyId,
      completed_count: payload.completedCount,
      total_studies: payload.totalStudies
    });
    postStudyFunnelEvent(payload).catch((error) => {
      console.error("Study funnel tracking failed", error);
    });
  }

  function markStudyStarted(studyId) {
    if (!studyId) return false;
    const key = `${STUDY_STARTED_PREFIX}${studyId}`;
    try {
      if (localStorage.getItem(key) === "1") return false;
      localStorage.setItem(key, "1");
      return true;
    } catch (error) {
      return true;
    }
  }

  function normalizeAnswer(value) {
    return String(value || "").trim().replace(/[^a-z0-9]+/gi, " ").replace(/\s+/g, " ").toLowerCase();
  }

  function isCorrectAnswer(item, value, translation) {
    if (value === null || value === undefined) return false;
    if (typeof value === "number") return value === item.answer;
    const acceptedWords = new Set([item.options[item.answer], getAnswerWord(item, translation || getTranslation())]);
    return [...acceptedWords].some((word) => normalizeAnswer(value) === normalizeAnswer(word));
  }

  function getStudyMode() {
    try {
      const stored = localStorage.getItem(STUDY_MODE_KEY);
      return stored === "advanced" ? "advanced" : "easy";
    } catch (error) {
      return "easy";
    }
  }

  function setStudyMode(mode) {
    const nextMode = mode === "advanced" ? "advanced" : "easy";
    studyMode = nextMode;
    try {
      localStorage.setItem(STUDY_MODE_KEY, nextMode);
    } catch (error) {
      // Ignore storage errors (e.g. private browsing).
    }
    const buttons = player.querySelectorAll("[data-study-mode-button]");
    buttons.forEach((button) => {
      const isActive = button.dataset.studyModeButton === nextMode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    if (activeStudy) renderStatement();
  }

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
      total + (answer !== null && answerCorrect[index] ? 1 : 0)
    ), 0);
  }

  function answeredCount() {
    return answers.filter((answer) => answer !== null).length;
  }

  function saveState() {
    if (!activeStudy) return;
    try {
      localStorage.setItem(savedStateKey(activeStudy.id), JSON.stringify({ answers, answerCorrect, statementIndex, readState, advancedAttempts, studyMode }));
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
      const answerCorrectSaved = Array.isArray(saved.answerCorrect) && saved.answerCorrect.length === study.statements.length
        ? saved.answerCorrect
        // Older saved sessions predate answerCorrect tracking — recompute once as a one-time migration.
        : saved.answers.map((answer, index) => answer !== null && isCorrectAnswer(study.statements[index], answer));
      return {
        answers: saved.answers,
        answerCorrect: answerCorrectSaved,
        readState: Array.isArray(saved.readState) && saved.readState.length === study.statements.length ? saved.readState : Array(study.statements.length).fill(false),
        advancedAttempts: Array.isArray(saved.advancedAttempts) && saved.advancedAttempts.length === study.statements.length ? saved.advancedAttempts : Array(study.statements.length).fill(0),
        statementIndex: Math.min(Math.max(Number(saved.statementIndex) || 0, 0), study.statements.length - 1),
        studyMode: saved.studyMode === "advanced" ? "advanced" : "easy"
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
    const alreadyCompleted = completed.has(studyId);
    completed.add(studyId);
    try {
      localStorage.setItem(COMPLETED_KEY, JSON.stringify([...completed]));
    } catch (error) {
      /* localStorage unavailable; progress simply won't persist */
    }
    return { completed: [...completed], isNewCompletion: !alreadyCompleted };
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

  function openSignupModal(options = {}) {
    if (!elements.signupModal || !elements.signupForm) return;
    const required = Boolean(options.required);
    signupContext = {
      required,
      source: options.source || "study-progress",
      onComplete: typeof options.onComplete === "function" ? options.onComplete : null
    };
    const title = required ? "Sign up to view your certificate" : "Save your Bible study journey";
    const message = required
      ? "To view your Word Oasis completion certificate, please share your email so we can record your completed studies."
      : "You can keep studying as a guest, or share your email so Word Oasis can record completed lessons and send the next study.";
    if (elements.signupTitle) elements.signupTitle.textContent = title;
    if (elements.signupMessage) elements.signupMessage.textContent = message;
    if (elements.signupEmail) elements.signupEmail.value = getSavedStudyEmail();
    if (elements.signupConsent) elements.signupConsent.checked = hasStudySignup();
    if (elements.signupSkip) elements.signupSkip.hidden = required;
    if (elements.signupStatus) elements.signupStatus.textContent = "";
    elements.signupModal.hidden = false;
    elements.signupEmail?.focus();
  }

  function closeSignupModal() {
    if (!elements.signupModal) return;
    elements.signupModal.hidden = true;
    signupContext = null;
  }

  function canViewCertificate() {
    return hasStudySignup();
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
      reference.className = "study-reference scripture-link scripture-link-inline";
      reference.dataset.scripture = match[0];
      reference.textContent = match[0];
      container.append(reference);
      lastIndex = match.index + match[0].length;
    }
    container.append(document.createTextNode(text.slice(lastIndex)));
  }

  function renderFeedback(item, selectedAnswer, correct) {
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
    const hasReadVerse = readState[statementIndex] || hasAnswer;
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

    if (elements.answerStepTitle) {
      elements.answerStepTitle.textContent = hasReadVerse
        ? (studyMode === "advanced" ? "Type the missing word" : "Choose the missing word")
        : "Confirm you’ve read it";
    }

    if (!hasReadVerse) {
      const verseText = fullVerseText || item.text.replace(/___/g, "_____ ");
      elements.statement.className = "study-statement is-reading-card";
      elements.statement.textContent = verseText;
      elements.options.replaceChildren();
      const readActions = document.createElement("div");
      readActions.className = "study-reading-actions";
      const readHint = document.createElement("p");
      readHint.className = "study-read-hint";
      readHint.textContent = "Read the verse carefully above, then answer from what you remember — no peeking once you continue.";
      const readButton = document.createElement("button");
      readButton.type = "button";
      readButton.className = "study-read-action";
      readButton.dataset.studyMarkRead = "true";
      readButton.textContent = "I’ve read it — answer the question";
      readActions.append(readHint, readButton);
      elements.options.append(readActions);
      elements.previous.hidden = statementIndex === 0;
      elements.next.hidden = true;
      return;
    }

    elements.statement.className = "study-statement";
    elements.statement.append(document.createTextNode(before));
    const blank = document.createElement("span");
    blank.textContent = matchedText;
    if (hasAnswer) {
      blank.className = `study-blank ${answerCorrect[statementIndex] ? "is-correct" : "is-revealed"}`;
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
    if (studyMode === "advanced") {
      const attempts = advancedAttempts[statementIndex] || 0;
      const group = document.createElement("div");
      group.className = "study-answer-input-group";
      const input = document.createElement("input");
      input.type = "text";
      input.className = "study-answer-input";
      input.placeholder = "Type the missing word";
      input.autocomplete = "off";
      input.autocapitalize = "none";
      input.spellcheck = false;
      input.value = typeof selectedAnswer === "string" && selectedAnswer !== "(no answer given)" ? selectedAnswer : "";
      input.placeholder = selectedAnswer === "(no answer given)" ? "(no answer given)" : "Type the missing word";
      input.disabled = hasAnswer;
      input.dataset.studyAnswerInput = "true";
      const submit = document.createElement("button");
      submit.type = "button";
      submit.className = "study-submit-answer";
      submit.dataset.studyCheckAnswer = "true";
      submit.disabled = hasAnswer;
      submit.textContent = hasAnswer ? "Answer checked" : attempts > 0 ? "Try again" : "Check answer";
      group.append(input, submit);
      elements.options.append(group);

      if (!hasAnswer && attempts > 0) {
        const retryRow = document.createElement("div");
        retryRow.className = "study-retry-row";
        const retryNote = document.createElement("p");
        retryNote.className = "study-retry-note";
        retryNote.textContent = attempts === 1
          ? "Not quite — take another look at the verse and try once more."
          : "Still not matching. Try again, or reveal the answer to keep going.";
        const revealButton = document.createElement("button");
        revealButton.type = "button";
        revealButton.className = "study-reveal-answer";
        revealButton.dataset.studyRevealAnswer = "true";
        revealButton.textContent = "Show answer & continue";
        retryRow.append(retryNote, revealButton);
        elements.options.append(retryRow);
      }

      const helper = document.createElement("small");
      helper.className = "study-answer-helper";
      helper.textContent = "Write the missing word from memory without looking at the answer choices.";
      elements.options.append(helper);
    } else {
      item.options.forEach((option, optionIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "study-option";
        button.dataset.optionIndex = String(optionIndex);
        button.textContent = optionIndex === item.answer ? answerWord : option;
        if (hasAnswer) {
          button.disabled = true;
          if (optionIndex === item.answer) button.classList.add("is-correct");
          if (typeof selectedAnswer === "number" && optionIndex === selectedAnswer && selectedAnswer !== item.answer) button.classList.add("is-incorrect");
        }
        elements.options.append(button);
      });
    }
    elements.previous.hidden = statementIndex === 0;
    elements.next.hidden = !hasAnswer;
    elements.next.textContent = statementIndex === activeStudy.statements.length - 1 && answeredCount() === activeStudy.statements.length
      ? "See my summary →"
      : "Next →";
    if (hasAnswer) renderFeedback(item, selectedAnswer, answerCorrect[statementIndex]);
  }

  function selectAnswer(button) {
    if (answers[statementIndex] !== null) return;
    const item = activeStudy.statements[statementIndex];
    const selected = Number(button.dataset.optionIndex);
    answers[statementIndex] = selected;
    answerCorrect[statementIndex] = selected === item.answer;
    renderStatement();
    saveState();
    elements.next.focus();
  }

  function submitAdvancedAnswer() {
    if (answers[statementIndex] !== null) return;
    const item = activeStudy.statements[statementIndex];
    const input = elements.options.querySelector("[data-study-answer-input]");
    if (!input) return;
    const value = input.value.trim();
    if (!value) {
      input.focus();
      return;
    }
    if (isCorrectAnswer(item, value)) {
      answers[statementIndex] = value;
      answerCorrect[statementIndex] = true;
      renderStatement();
      saveState();
      elements.next.focus();
      return;
    }
    advancedAttempts[statementIndex] = (advancedAttempts[statementIndex] || 0) + 1;
    renderStatement();
    saveState();
    const retryInput = elements.options.querySelector("[data-study-answer-input]");
    if (retryInput) {
      retryInput.focus();
      retryInput.select();
    }
  }

  function revealAdvancedAnswer() {
    if (answers[statementIndex] !== null) return;
    const input = elements.options.querySelector("[data-study-answer-input]");
    const typedValue = input ? input.value.trim() : "";
    answers[statementIndex] = typedValue || "(no answer given)";
    answerCorrect[statementIndex] = false;
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
    renderGoingDeeper();
    clearSavedState(activeStudy.id);
    const completion = markStudyCompleted(activeStudy.id);
    const completed = completion.completed;
    const justCompletedAll = allStudiesCompleted(completed);
    showSignupResultStatus("");
    if (completion.isNewCompletion) {
      queueStudyFunnelEvent("study-completed", {
        completedStudyId: activeStudy.id,
        completedStudyTitle: activeStudy.title
      });
    }
    if (justCompletedAll) {
      queueStudyFunnelEvent("course-completed");
    }
    if (completion.isNewCompletion && completed.length === 1 && !hasStudySignup()) {
      openSignupModal({ source: "first-completion" });
    }
    if (elements.resultCertificateBanner) elements.resultCertificateBanner.hidden = !justCompletedAll;
    renderDirectoryProgress();
    elements.resultScore.focus();
  }

  function renderGoingDeeper() {
    if (!elements.resultGoingDeeper || !elements.resultGoingDeeperList) return;
    const goingDeeper = activeStudy.goingDeeper;
    if (!goingDeeper || !Array.isArray(goingDeeper.refs) || !goingDeeper.refs.length) {
      elements.resultGoingDeeper.hidden = true;
      return;
    }
    elements.resultGoingDeeper.hidden = false;
    if (elements.resultGoingDeeperIntro) {
      elements.resultGoingDeeperIntro.textContent = goingDeeper.intro || "";
      elements.resultGoingDeeperIntro.hidden = !goingDeeper.intro;
    }
    elements.resultGoingDeeperList.replaceChildren();
    goingDeeper.refs.forEach((reference) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "study-reference scripture-link scripture-link-inline";
      button.dataset.scripture = reference;
      button.textContent = reference;
      item.appendChild(button);
      elements.resultGoingDeeperList.appendChild(item);
    });
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

  function studyPermalink(studyId) {
    return new URL(`/studies/${studyId}/`, window.location.origin);
  }

  function studyIdFromPath() {
    const match = window.location.pathname.match(/^\/studies\/([^/]+)\/?$/);
    if (!match || !match[1] || match[1] === "index.html") return null;
    return match[1];
  }

  let copyLinkResetTimer = null;

  async function shareStudyPage() {
    if (!elements.copyLink || !activeStudy) return;
    const url = studyPermalink(activeStudy.id).toString();
    const shareData = {
      title: `${activeStudy.title} | Word Oasis Bible Study`,
      text: `Take the “${activeStudy.title}” Bible study at Word Oasis.`,
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

  function showDirectory() {
    player.hidden = true;
    directory.hidden = false;
    renderDirectoryProgress();
    window.history.replaceState({}, "", "/studies/");
  }

  function renderStudyModeControls() {
    if (!player) return;
    let modeBar = player.querySelector("[data-study-mode]");
    if (!modeBar) {
      modeBar = document.createElement("div");
      modeBar.className = "study-mode-bar";
      modeBar.dataset.studyMode = "";
      modeBar.innerHTML = `
        <span class="study-mode-label">Difficulty</span>
        <div class="study-mode-toggle" role="tablist" aria-label="Study difficulty">
          <button type="button" class="study-mode-button is-active" data-study-mode-button="easy" role="tab" aria-selected="true">Easy</button>
          <button type="button" class="study-mode-button" data-study-mode-button="advanced" role="tab" aria-selected="false">Advanced</button>
        </div>
      `;
      const translationBar = player.querySelector("[data-study-translation]")?.closest(".study-version-bar");
      if (translationBar) {
        translationBar.insertAdjacentElement("afterend", modeBar);
      } else {
        player.querySelector(".study-key-thought")?.after(modeBar);
      }
    }
    modeBar.querySelectorAll("[data-study-mode-button]").forEach((button) => {
      const isActive = button.dataset.studyModeButton === studyMode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  function startStudy(studyId, forceNew = false) {
    activeStudy = studies.find((study) => study.id === studyId);
    if (!activeStudy) return;
    const saved = forceNew ? null : loadSavedState(activeStudy);
    answers = saved?.answers || Array(activeStudy.statements.length).fill(null);
    answerCorrect = saved?.answerCorrect || Array(activeStudy.statements.length).fill(false);
    readState = saved?.readState || Array(activeStudy.statements.length).fill(false);
    advancedAttempts = saved?.advancedAttempts || Array(activeStudy.statements.length).fill(0);
    statementIndex = saved?.statementIndex || 0;
    studyMode = saved?.studyMode || getStudyMode();
    elements.eyebrow.textContent = `${activeStudy.categoryLabel} · ${activeStudy.duration}`;
    elements.title.textContent = activeStudy.title;
    elements.summary.textContent = activeStudy.summary;
    elements.keyThought.textContent = activeStudy.keyThought;
    elements.result.hidden = true;
    elements.statementPanel.hidden = false;
    directory.hidden = true;
    player.hidden = false;
    renderStudyModeControls();
    elements.saveStatus.textContent = saved ? "Your saved progress has been restored." : "Progress saves automatically on this device.";
    if (elements.translationSelect) elements.translationSelect.value = getTranslation();
    const url = studyPermalink(activeStudy.id);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    renderStatement();
    saveState();
    if (markStudyStarted(activeStudy.id)) {
      queueStudyFunnelEvent("study-started", {
        startedStudyId: activeStudy.id,
        startedStudyTitle: activeStudy.title
      });
    }
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
    const modeButton = event.target.closest("[data-study-mode-button]");
    if (modeButton) {
      setStudyMode(modeButton.dataset.studyModeButton);
      return;
    }
    const readAction = event.target.closest("[data-study-mark-read]");
    if (readAction) {
      readState[statementIndex] = true;
      renderStatement();
      saveState();
      return;
    }
    const advancedCheck = event.target.closest("[data-study-check-answer]");
    if (advancedCheck) {
      submitAdvancedAnswer();
      return;
    }
    const revealAnswer = event.target.closest("[data-study-reveal-answer]");
    if (revealAnswer) {
      revealAdvancedAnswer();
      return;
    }
    const optionButton = event.target.closest(".study-option");
    if (optionButton && elements.options.contains(optionButton)) {
      selectAnswer(optionButton);
      return;
    }
    const viewDiplomaButton = event.target.closest("[data-view-diploma]");
    if (viewDiplomaButton) {
      if (!canViewCertificate()) {
        openSignupModal({
          required: true,
          source: "certificate-gate",
          onComplete: () => showDiploma()
        });
        showSignupResultStatus("Sign up with your email to unlock your certificate.");
        return;
      }
      showDiploma();
      return;
    }
    const signupCloseButton = event.target.closest("[data-study-signup-close]");
    if (signupCloseButton) {
      if (!signupContext?.required) closeSignupModal();
      return;
    }
    const signupSkipButton = event.target.closest("[data-study-signup-skip]");
    if (signupSkipButton) {
      queueStudyFunnelEvent("signup-skipped", { source: signupContext?.source || "study-progress" });
      closeSignupModal();
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
      return;
    }
    const copyLinkButton = event.target.closest("[data-study-copy-link]");
    if (copyLinkButton) {
      shareStudyPage();
    }
  });

  window.addEventListener("afterprint", () => {
    document.body.classList.remove("is-printing-diploma");
  });

  elements.signupForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!elements.signupForm.reportValidity()) return;
    const email = String(elements.signupEmail?.value || "").trim();
    const consent = Boolean(elements.signupConsent?.checked);
    if (!email || !consent) return;
    if (elements.signupSubmit) elements.signupSubmit.disabled = true;
    if (elements.signupStatus) elements.signupStatus.textContent = "Saving your signup…";
    saveStudyEmail(email);
    queueStudyFunnelEvent("signup-submitted", {
      email,
      consent: true,
      source: signupContext?.source || "study-progress"
    });
    showSignupResultStatus("Thanks! Your Bible study progress can now be tracked with your signup email.");
    if (elements.signupStatus) elements.signupStatus.textContent = "Saved. You can continue.";
    const callback = signupContext?.onComplete;
    closeSignupModal();
    if (elements.signupSubmit) elements.signupSubmit.disabled = false;
    if (typeof callback === "function") {
      callback();
    }
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

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const input = document.activeElement?.closest("[data-study-answer-input]");
    if (!input) return;
    event.preventDefault();
    submitAdvancedAnswer();
  });

  window.addEventListener("wordoasis:translationchange", (event) => {
    const translation = event.detail?.translation;
    if (!translation || !KNOWN_TRANSLATIONS.includes(translation)) return;
    if (elements.translationSelect) elements.translationSelect.value = translation;
    if (activeStudy) renderStatement();
  });

  renderDirectoryProgress();

  const initialParams = new URLSearchParams(window.location.search);
  const sharedStudy = studyIdFromPath() || initialParams.get("study");
  if (studies.some((study) => study.id === sharedStudy)) {
    startStudy(sharedStudy);
  }
})();
