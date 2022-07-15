/*jslint node: true */
"use strict";

// Seed math

exports.random = x => {
    return x * Math.random();
};

exports.randomAngle = () => {
    return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.irandom = i => {
    let max = Math.floor(i);
    return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
    let x1, x2, w;
    do {
        x1 = 2*Math.random() - 1;
        x2 = 2*Math.random() - 1;
        w = x1 * x1 + x2 * x2;
    } while (0 == w || w >= 1);

    w = Math.sqrt(-2 * Math.log(w) / w);
    return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
    let range = max - min;
    let output = exports.gauss(0, range / clustering);

    while (output < 0) {
        output += range;
    }
    
    while (output > range) {
        output -= range;
    }
    
    return output + min;
};

exports.gaussRing = (radius, clustering) => {
    let r = exports.random(Math.PI * 2);
    let d = exports.gauss(radius, radius*clustering);
    return {
        x: d * Math.cos(r),
        y: d * Math.sin(r),
    };
};

exports.chance = prob => {
    return exports.random(1) < prob;
};

exports.dice = sides => {
    return exports.random(sides) < 1;
};

exports.choose = arr => {
    return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
    let o = [];
    for (let i=0; i<n; i++) {
        o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
    }
    return o;
};

exports.chooseChance = (...arg) => {
    let totalProb = 0;
    arg.forEach(function(value) { totalProb += value; });
    let answer = exports.random(totalProb);
    for (let i=0; i<arg.length; i++) {
        if (answer<arg[i]) return i;
        answer -= arg[i];
    }
};

// FYI - I dont plan to keep these forever. These are not main, its placeholder
const botNames = [];
"That Guy\nSOMEONE\n꧁༺𝓘𝓷𝓼𝓪𝓷𝓲𝓽𝔂༻꧂\n🅸 🅰🅼 🅶🅾🅳\nI\njaffa calling\nIll Tear your eyes out..\nMe-arac\nAniketos\n🌌Miñe🌌\nℭ𝔬𝔣𝔣𝔢𝔢\nAkilina\nMythical\nexc\n=\no o o o o o o o\n!!!\nLixeiro do mal\nThanks M8\nFrost? Mobile\nDream\nWe Do A Little Trolling\nearth\nNightFire\nFree to insult\ndino\nAMOGUS??????????????\nbruh\n\nNo Surviors\n<[AXS]> RASHOT\nPizza Bread\n[lag]Armando\nGay Overlord\nwillim\nEverything RAM Mobile\nGeneral\nH̵͊̕ė̵̮l̷͎̈́l̵̅͛ơ̸͊\n{WOF} Nightwing\nfooteloka\n[⚔️wiki]₵₳V₳ⱠłɆⱤ\nJes;/;ter\nTeam Boom\n🖤ISAAC🖤\nnaruto\nзанято42/Busybody42\nA+\nRaul39\nLety <3 :)\nteam protect\ni will troll :D\nheroy_105\n[FBI]Σvi₺ℭℏἏ❀₴#1628\nBigBadBoom\nnope\nglurip\nffk the desrtroy\nSpin=Team\ncomrade\nAlkali\nImpact of TY-77\n😈Stormys Domain😈\nYOUR BAD = YOUR DEAD!!!\npushmetothe sancuary\nIm not a tank\nSnow\nHm\nDanceTillYou'reDead\ngmonster\nDie!!!\ndeveloper\nnoob\nzX-TwinChilla-Xz\n[BK] [XC] PAKISTAN\nBryson\nMusa♗ - The Shipwrecker\nbob\nMothership Drone\nt-rex vs raptor\nmai\nArisu\ngamer.io\nRİKKET FAN\nFOLLOW ME OCTO TANKS\nXP_Toxic_CJS\nTV\nconstructor\namong us\njkl\nXP_Toxic_CST\nd\nI love nahu\nSpade\nXxNicolas GamerxX\nxAd_rian\nFabianTu\nEminx\nmax\nOOOOOOOOFfffffffffffffff\nWalleeE\n KA2\nMIKE\npedro :(\nBEDROCK\nFrostbite#6915\nkoishi\neu tenho a melhor mae^-^\nasdfghjkl;:]@ouytrewq\n😎👿david988😎👿\nZaphkiel\ntryhard mode on !!!!!!!\n⚰️🔥👻WITNESS ME👻🔥⚰️\n[Σϰ][Ωϰ] ...\nThat Guy\nAniketos\nPlay wommy-arras.io\nARMADA\n// jAX\n🔱Ƒιяєωσяк🚫\nDEATH TO TEAMERS\nMilan\nyour worst lightmare\nXxshadowxX Ilove u\nAlkaios\n 🥧π🥧\n🔱 𝓽𝓲𝓶𝓮𝓽𝓸𝓭𝓲𝓮 🚫\nCan u see me? :D\nApollon\nok\nCrazyattacker9YT\nXtremeJoan\ncz sk\ngive me your butt dude\n[🌀]Brain𝐼nHalf\nHexagon Temple\n-_-\nYou\nCACA\nAthena\nArtemis\nDOEBLE TOP!\nthe only one\nhi (original)\nSOMEONE\ncan you beat me smashey\ns7ㅋㅋㅋ\npika :P\nFallen\nBig Papa\nm̸̐̽ᵃ𝔭ʟₑ౪🌸🎀🌺🌷🩰🧁\nGONIALS\nпрівіт\nlnwZa007\n🐸🐌【HapPy】\nDaluns the one?\nCAMALEON\nfactory not op :(\n/BIG BOYRockety\ncircus of the dead\n𝒮𝔭00𝔡𝔢𝔯𝔪𝔞𝔫\nhackercool\n🔱⨊ $؋₲₥₳🚫\nGo Away\nProtector Of Worlds\nme\nvn\nRAHAN\n........................\nSoviet Union\nFlash\n❰𝞑𝞡𝞣❱ 𝝙𝝼𝝴𝝶𝘂𝝴\n🌌Miñe🌌\nKing Pikachu\nEzzeKiel\nh\nHomeless man\nAsdfghjkjjhgfdsdfghjhgfd\nFelchas\nstarwarrior\nSpin=Team\nTERA BAAP✿AYA★💓Bhagwanmr noob\nDream\nDIEGO\nLagmat YT = 🎷 channel\nbe dum like me\nlagg\nAPplayer113\ntiky\n🇧🇷HUE🇧🇷\nam low, I Need Backup!\nThunder(Tapenty)\nBeeg Yoshi Squad\nreeeeeeee\n;]\nArena Closer\nabd lhalim\nBadaracco\nemir\nTürk  polisi\nPaladin\nstop plz\nd\n(❁´◡`❁)(*/ω＼*)(^///^):-)\nglenn <3 rachel\n[AI] Kidell\ndan\nI am milk\nTürk'ün Gücü Adına🌸 OwO\n҉s҉h҉u҉n҉a҉\nTeuge\nDave\nabbi_alin\nim a joke\nhuy vn :D\n🌊🦈🌊\nscortt reach 1m friend\nET\nvlasta\n𝒰𝒞ℋİℋ𝒜\nNyroca\nGerman\n[ɨƙ]ɳøʘɗɫɚ\nI'm so lag(sinbadx)\n🇸🇦\nasdf\nX℘ExͥplͣoͫຮᎥveﾂ✔\nApollon\n^^\nI\nnatasha\nno me mates amigos\ndáwsda\nFEWWW....\nlol\nA team with 💚 is doomed\nRaul39\nNoob AC\nddqdqwdqw\n[MG] GLITCH TR\nLemonTea\nParty_CZE\nDiep_daodan\nWhat?\nkuro\ncute pet\ndemon\nALEXANDER👑💎\nCursed\ncopy The tank\n\ndsa.\nVinh HD\nMago\nhi UwU\navn\nd\nnaruto\nARRASMONSTER KILLYOUha5x\nMICAH\nJotaro\nking vn\n𝕰𝖓𝖊𝖒𝖞_𝕯𝖔𝖌\nRaoof\nLeviathan\nSUN\n❬☬❭  ⚜️Ð𝐙𝕐 ッ 〜 🌷\nFALLEN SWORD\n🇧🇷HUE🇧🇷\nBoyFriend [FnF]\nmotherhip\n𝓼𝓮𝓻𝓲𝓸𝓾𝓼𝓵𝔂\nlolera\nDark Devil\npress F\nDetective Conan\nPet\nMAICROFT\nHoly\nIXGAMËSS\nh\numm,dab?\nIhavelocty\newqasd2021vinicius\n[🇻🇳] Hùng\nI Love you\nHealer\nhacker lololololol\nboooster.io\ndscem\nbibi\nTEAM POLICE\n\njj\nSHARK\narena closer\n•长ąϮëąℓ⁀ᶜᵘᵗᵉ╰ ‿ ╯ ☂\nWeяw𝕖𝐑ώ€я𝓺q2️⃣prankeo\nnani?\nOTTOMAN EMPİRE\n------------------------\nkr9ssy\nnot P\nwinnner\nfriendly\ngenocide BBB\nHI\nI'm poor:(fortnine duo\nJSABJSAB\njmanplays\nstarwarrior\nwere\nPLAYER\nmothership protrector 1\nGamer🎮\n6109\nPRO\nenr\n_____P___E___N___E______\nannialator\nkaio\n(UwU)\nArras.io\n...\nDenied\nPaladin\nZaphkiel\nPikachu ^~^\nah~\nSteve\n{<:Void\nAƓ Aηgєℓ#Use AƓ  Tag\nAmyntas\n⁄•⁄ω⁄•⁄卡比獸🖤\npoui\nPH - r҉a҉i҉n҉\nA M O U G U S\nidk bro\nArtemis\nHey team\nb T規RㄩIes矩W ˋ*ˊd\n한국 Lime Lemon\nphong fan vn!\nme fan valt shu lui free\nMobile no work\nHi 香港😘> pls don't kill�\n[/G]/O1D SL/Y3R\nmil leches\nMajor Meowzer YT\nProvidence\nLore\nОХОТНИК\nvordt\nLinghtning McQueen\nPentagon Nest Miner\n꧁☬☬😈꧁꧂ ☠HARSH ☠꧁꧂😈 ☬☬꧂\nvovotthh\nNope :))\n||||||||||||||||||||||||\n ꧁ℤ𝕖𝔱𝔥𝔢𝔯𝔫𝕚𝕒꧂\nCTRL+W=godmode(viet nam)\n🔱LordΛภ𝓰𝖑Ɇ🚫\n1 + 1 = 3\nXYZ\n[PFF][|| ı'ɱ ცąცყ||]\nBoop\nRAPTURE\no\n/.//.[]\n\nRoskarya\nno. 9\nLost MvP#7777\nJon\n🔱Saint LilY⚜🚫\nGreen.grey.purple.blue.\n:P\nC - 4 Spank Spank\nVN\nSnapwingfriendstriker007\noverlord is:):)\n pluss亗\n[Repsaj]ĎąŗĸMãştɛɾ\nPhoenix_Gamer\nRelatively Harmless Tonk\nArray.io\nSpin=Team\nI am your shield :)\nj\n1\nTheBasil\n【The L1litle One】\nX.Clamator .YT\nENDERMÉN\nCC\nBEST\nAmong Us\nlobo\nasky\nOpan Come Go Note Yeah\nBowler\nad\nhaha bowler no 1M\nTin\n[GZ]GESETA\nwoomy arras.io\nRemuru Tempest\nPvPok\nScarlet Rage(mobile)\nnam\nSTRIKER007\n[VN] MeltedGirl\n100000000000000000000000\neee\nQ\nmắm tôm\nREVENGE✨\nAchi\nAC Perú\nbvnfgh\nhi\nPet :3\nlittle bitch\nkhang\nlets be freinds guys!!!!\nsans pro\nphantanduy\n[AC] VGamerZ\nStevenUniverseFan\nazen\nWaffles\njesian\nⱫł₭Ɽł₮₳Ӿ\nGay Overlord\npikachuboi124\nmundo x bomb\nducky\n🌀DESTROYER🌀\nStupid Overlord\n++\nphantantri\nVoteOutRacists\nDenied\nfloof\nBowler\nSinbadx\n🎈IT🎈 APOCOLYPSE\nExpectMe2BeDeadCuzOfLag\nDamage\nAniketos\n⨝∑₮ξ₹ͶΛL⨝\nArtemis\n_\nArchimedes\n♪KING♫♕-dev#3917\nno\nDoofus\nMINI defender\n꧁✯[🕋]MÂRSHMÆLLØW 𖣘✯꧂\nAlkaios\n(・ω・＼)i am(/・ω・)/pinch!\nViệt Cường 2A5\nI Love you\nfdsmn\n!\nR\nyou shall not pass!!\nharmless shower\nlol\nMythical\noath sign\nfinland\nbob\nhetman666\nlio\nVN~I LoVe You Chu Ca Mo\nYour mom\nFriendly\nthe protector\nleave me alone pls\nGrill my flippen butt\nn o i c e\nbo\nonsen\n._.\nFrostbite#6915\n💞\nCTRL+W=godmode\nnoob\nad\nSoviet Union\nbe freind\n   HCM MUÔN NĂM\n:P\nFALLEN SWORD\nanh tuấn anh nè tôm\nfnf is a poop\nZp r oZ\n꧁҈$ꫀꪖ  ,҉ℭն𝚌մꪑ𝜷ꫀ᥅ ༻\nVN:P\nmargaret thatcha\n[VN]Ảo Vãi Lồn🤔\nㅋㅋㄹㅃㅃ\npin h 3\nVỹ đẹp zai\nSnapwingfriendstriker007\neverybodybecomespike\na\n1\nvyde\nMothership Drone\nop\nclick \"F\"\nNoob\n🐰chiro🐰\nPJfd13\nCELESTIAL\nTeam\nPet :3\nFeZTiVAL\nanime\nt\nC - 4 Spank Spank\nRockety\nValley\nIm New,dont kill me pls\nFriends?\n하이루\nKILL ME I DARE YOU\npet basic -(======>\npet\n♕ ❤VIỆT NAM ❤♕\nfuck\nteam ?\n꧁༒☬✞😈VîLLãñ😈✞☬༒ ꧂\nCông\nOpan Come Go Note Yeah\n1 + 1 = 3\nElite Knigh*\nvn{CHP}\nDasher8162\nXlo-250\nunder_gamer092\nVN\nMtp tv tiktoker\nDenied\nPaladin\n『YT』Just𝕸𝖟𝖆𝖍ヅ\nshame\nCorrupt Y\nspin= team\nPlease no more Y team\nSyringe\nPickerel Frog\nBitter Dill\nYour Triggering Me 🤬\n117\nFleRex\nArchimedes\nNeonlights\n🌌Miñe🌌\n〖-9999〗-҉R҉e҉X҉x҉X҉x҉X҉\nFEWWW....\nbob\n0800 fighter¯_(ツ)_/¯\n◯ . ◯⃨̅\n𝕁𝕖𝕤𝕥𝕖𝕣\nApollon\nƁṏṙḕd Ṗläÿệŕ {✨}\ni never bin 1 mill\n残念な人\nKillerTMSJ\nДракон\n[VN]Ảo Vãi Lồn🤔\n😎\nwarrion\nARMADA\nasd\nalr-ight\nAAAAAAAAAAAAAAAAAAAAAAAA\n♣☆  ⓂⒶ𝓻s𝐇Ⓜ𝔼𝕝ᒪσω  ☯♚\nFREJEA CELESTIAL 1.48MXyn\npoker 567\nC\n4tomiX\nmeliodas\nViệt Cường 2A5\n(ZV) foricor\n\nMarxtu\nme?? 😢\nm̸̐̽ᵃ𝔭ʟₑ౪🌸🎀🌺🌷🩰🧁\nPeaceKeeper\nEeeeeeva\ndiện\n[MM]  Ⓕ𝓸𝓻𝓫𝓲𝓭𝓭𝓮𝓷\nDoofus\nTS/RRRR\nNothing.\n🐶(X)~pit¥🐺te matare jajaja\n⌿⏃⋏⎅⏃\ngo\n[PFF][|| ı'ɱ ცąცყ||]\nhola\npolyagon\nGalactic slush\n9999999999999999999999dx\nzaphkiel celestial\nnoob\n$$$%$la plaga$%$$$\nSorry broh\nRoberto\nEHSY BAAA\nNnmnnnmmmnmmmm\nuse fighter plsss :)\nMini\nspitandsteelfriend\n;)\nlol\nMobile player\nthe ultimate multitool\ni vow to protect\noofania\nhi\nwhy am i here\nH̵͊̕ė̵̮l̷͎̈́l̵̅͛ơ̸͊\nA.L.\nHi\nONE SHOT\nluis\nsaitan\nFelchas\nIm gonna knock you out\nAquiles TEAM LOVE\nqwertyuiop\n:3\ndiep.io\ninvisible drones\nteam plz:(\nDIONAX\nagain and again\n100000000000000000000000\nnicolas123\nJESUS E AMOR".split("\n").forEach(n => botNames.push(n));

exports.chooseBotName = () => {
    return exports.choose([...botNames,
        'Alice',
        'Bob',
        'Carmen',
        'David',
        'Edith',
        'Freddy',
        'Gustav',
        'Helga',
        'Janet',
        'Lorenzo',
        'Mary',
        'Nora',
        'Olivia',
        'Peter',
        'Queen',
        'Roger',
        'Suzanne',
        'Tommy',
        'Ursula',
        'Vincent',
        'Wilhelm',
        'Xerxes',
        'Yvonne',
        'Zachary',
        'Alpha',
        'Bravo',
        'Charlie',
        'Delta',
        'Echo',
        'Foxtrot',
        'Hotel',
        'India',
        'Juliet',
        'Kilo',
        'Lima',
        'Mike',
        'November',
        'Oscar',
        'Papa',
        'Quebec',
        'Romeo',
        'Sierra',
        'Tango',
        'Uniform',
        'Victor',
        'Whiskey',
        'X-Ray',
        'Yankee',
        'Zulu',
        'The Bron Jame',
        "[MG] Team",
    "team??!",
    "trump",
    "facu++",
    "TEST",
    "Jake",
    "PEST_YT",
    "GOKU",
    "big me!",
    "arras > diep",
    "k",
    "[MG] PRO TEAM",
    "Solomon",
    "novice",
    "noob",
    "Angel",
    "😈",
    "max",
    "Allah Is King",
    "Hug Me",
    "dont touch me",
    "leonardo",
    "colombia",
    "",
    "",
    "",
    "Friends?",
    "✈",
    "Kim Jong-Un",
    "1",
    "An unnamed player",
    "agar.io",
    "road to 1m",
    "FEED ME",
    "DOGE",
    "GABE",
    "boi",
    "[GZ] team",
    "buff arena closer",
    ".",
    "Ramen",
    "SPICY RAMEN",
    "Jera",
    "[insert creative name]",
    "Rake",
    "arras.io",
    "KOA",
    "die",
    "king of diep",
    "Hagalaz",
    "Ehwaz",
    "Dagaz",
    "Berkanan",
    "Algiz",
    "Blank",
    "Mango",
    "TOUCAN",
    "Bee",
    "Honey Bee",
    "oof",
    "Toast",
    "Captian",
    "Alexis",
    "FeZTiVAl",
    "kitten",
    "Derp",
    "Gabogc",
    "U S A",
    "name",
    "[IX] clan",
    "LOL",
    "ur mom",
    "llego el pro!",
    "Impeach Trump",
    "luka modric",
    "bob",
    "MATRIX",
    "no",
    "e",
    "kek",    "read and u gay",
    "Decagon?",
    "take this L",
    "mm",
    "Aleph Null",
    "summoner",
    "T-REX",
    "buff basic",
    "stink",
    "jumla",
    "no team Kill",
    "pet",
    "V",
    "Broccoli",
    "toon",
    "Sinx",
    "JTG",
    "Hammer",
    " ",
    "Basic",
    "Discord",
    "NO WITCH-HUNTING",
    "salty",
    "CJ",
    "angel",
    "a salty discord kid",
    "satan",
    "NoCopyrightSounds",
    "Am I Sinbadx?",
    "AHHHHHH!",
    "rush",
    "squirt",
    "AMIGOS",
    "Windows 98",
    "FeZTivAL",
    "illuminati",
    "Fallen Bot",
    "Anonymous",
    "koala",
    "iXPLODE",
    ":D",
    "BrOBer The Prod",
    "OwO",
    "O_O",
    "UwU",
    "Alpha",
    "TheFatRat",
    "kokak",
    "D:",
    "YouRIP",
    "WOOT",
    "𝕯𝖆𝖙 𝕺𝖓𝖊 𝕭𝖔𝖎",
    "hell",
    "Y",
    "why",
    "Lucas",
    "LOCO",
    "FeZTi Fan",
    "0",
    "AK-47",
    "Friend pls",
    "cool",
    "NO U",
    "hmst",
    "Sub 2 Pewdiepie",
    "T-Gay",
    "t-series succs",
    "Balloon",
    "CX Fan",
    "The Nameless",
    "What?",
    "Our World of Tanks",
    "Real AI",
    "Totally Not A Bot",
    "...",
    "Fallen AI",
    "green square",
    "Dagaz 2.0",
    "Internet Explorer",
    "teamplz",
    "Paradox",
    "Fallen Nothing",
    "developer",
    "ruler of tanks",
    "IRS",
    "king slayer",
    "sael savage",
    "Zplit",
    "CUCK",
    "Popo",
    "¡AY PAPI!",
    "Vogelaj",
    "Ruthless",
    "BOMBS AWAY",
    "im new",
    "best",
    ".-.",
    "dont feed me",
    "rIsKy",
    "Brian",
    "Angel",
    "Knoz",
    "Caesar",
    "Baller",
    "¿Equipo?",
    "¡Vamos!",
    "Road To 10m",
    "Real Hellcat",
    "Real Kitty!",
    "Canada > USA",
    "A named player",
    "Tyson",
    "Slayer",
    "666",
    "Nooblet",
    "M8",
    "Trans Rights",
    "Bar Milk",
    "Jambi",
    "Elmo is gone",
    "The Grudge",
    "Rosetta Stoned",
    "Lateralus",
    "Fourty-Six & 2",
    "Vicarious",
    "Judith",
    "Give Me Wings",
    "The Pot",
    "look behind you",
    "Bruh Momentum",
    "Sucko mode",
    "ArenaC",
    "!foO",
    "Lateralus",
    "Disposition",
    "Reflection",
    "Triad",
    "Mantra",
    "The Patient",
    "Real CreepyDaPolyplanet",
    "Real Despacit.io",
    "Mew",
    "Magikarp",
    "Real Dark Knight",
    "ok boomer",
    "PP Tank",
    "COPPA Sucks",
    "meme",
    "Womp Womp",
    "W = Team",
    "Real CX",
    "Neo",
    "crasher",
    "Minecrafter",
    "King of Pros",
    "Vanze",
    "Have mercy...",
    "Im scary",
    "cookie",
    "Liberty Prime",
    "bruh moment",
    "Rubrub",
    "Banarama",
    "poyo",
    "Nova",
    "Creeper, Aw Man",
    "Theory of Everything",
    "DJVI",
    "jotaro kujo",
    "Faaip de Oiad",
    "MrBeast",
    "ForeverBound",
    "Are you okay?",
    "BUSTER WOLF",
    "MJK",
    "F-777",
    "Dex Arson",
    "alpharad",
    "ORA ORA ORA",
    "Waterflame",
    "DJ-Nate",
    "penguinz0",
    "#teamtrees",
    "Electrodynamix",
    "brogle",
    "im beef",
    "Salsa Verde",
    "The Audacity of this tank",
    "Joe Mamma",
    "Red Hot Chili Pepper",
    "Halal Certified Tank",
    "Coronavirus",
    "The Common Cold",
    "The Flu",
    "Ight Bro",
    "Little Red Rocket",
    "Bruh Monument",
    "Bruh Monumentum",
    "Spree",
    "KING CRIMSON!",
    "THE WORLD!",
    "ZA WARUDO!",
    "taal volcano",
    "Synth",
    "Brotherhood of Steel",
    "Railroad",
    "A Settlement Needs Your Help",
    "final destination, fox only",
    "food",
    "fezti fan",
    "FeZtiVaL",
    "CATS",
    "Careenervirus",
    "Dumb",
    "[AI]",
    "Insanity",
    "Steven Universe",
    "MrBeast Rules",
    "Oswald Veblen",
    "how to get testbed?",
    "Mahlo Cardinal?",
    "mf=r",
    "dragons go mlem"
    ]);
};

exports.chooseBossName = (code, n) => {
    switch (code) {
    case 'a':
    return exports.chooseN([
        'Archimedes',
        'Akilina',
        'Anastasios',
        'Athena',
        'Alkaios',
        'Amyntas',
        'Aniketos',
        'Artemis',
        'Anaxagoras',
        'Apollon',
    ], n);
    case 'castle':
    return exports.chooseN([
        'Berezhany',
        'Lutsk',
        'Dobromyl',
        'Akkerman',
        'Palanok',
        'Zolochiv',
        'Palanok',
        'Mangup',
        'Olseko',
        'Brody',
        'Isiaslav',
        'Kaffa',
        'Bilhorod',
    ], n);
    default: return 'God';
    }
};
