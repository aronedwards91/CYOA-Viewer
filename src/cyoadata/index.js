// This Template fills in the data
// import images placed in /public
import bg from "../public/gold-tree.jpg";
import logo from "../public/logo.jpg";
import waterskin from "../public/waterskin.png";
// Char Profile
import humanhunter from "../public/origin/human-hunter.jpg";
import humanwarrior from "../public/origin/human-warrior.jpg";
import dwarfscout from "../public/origin/dwarf-scout.jpg";
import dwarfguardian from "../public/origin/dwarf-guardian.jpg";
// Relics
import daggerbloody from "../public/relic/dagger-bloody.jpg";
import amuletgreystone from "../public/relic/amulet-greystone.jpg";
import waterskinomsak from "../public/relic/waterskin.jpg";
// Challenge
import erredmhuur from "../public/challenge/erred-mhuur.jpg";
import haruspex from "../public/challenge/haruspex.jpg";
import sandman from "../public/challenge/sandman.jpg";
import Troll from "../public/challenge/troll.jpg";
import wildman from "../public/challenge/wildman.jpg";
// import font converted to base64
import fontb64 from "../public/celtic-font.json";
// Item Icons
import knifeIcon from "../public/knife-icon.png";

const Data = {
  styling: {
    colors: {
      // order by contrast, lighter/darker first for both.
      mainA: "#628746",
      mainB: "#2E4E15",
      mainC: "#436728",
      mainD: "#1A3407",
      mainE: "#0C1B00",
      mainHighlight: "#BCFA0F",
      charBgA: "#90A437",
      charBgB: "#E7F6A4",
      charC: "#BACD66",
      charText: "#1f2406",
      charBorder: "#435200",
    },
    layout: {
      sidebarWidth: "380px",
      sidebarWidthDeskSm: "120px",
      sidebarWidthMobSm: "60px",
    },
    cyoa: {
      backgroundImg: bg,
      backgroundImgObjectFit: "cover",
      backgroundGradient: `darkgreen, green, lightgreen`, // String, list of choices as per css linear-gradient spec
    },
    themeing: {
      font: fontb64.base64String,
      sectionCornerRadius: "10px", //for curved corners, use 5~20px, for straight user 0px
      bordersWidth: "6px",
      borderStyle: "double", // https://www.w3schools.com/CSSref/playit.asp?filename=playcss_border-style&preval=outset
    },
  },
  cyoa: {
    Header: {
      logo: logo,
      title: "CYOA - DarkWood",
      subHeader: "The dark woods call for blood",
      author: "BiggySpoonz",
    },
    intro: {
      title: "Welcome to the dark woodlands..",
      introText:
        " You begin by inhabiting the dead body of a warrior, rising from the musty earth the powerful warrior's body begins to morph to your shape. Slowly you inbide the corpse's memories, taking them almost as your own, like coming from a coma your connection with your host body is hazy, but with a little use his abilities quickly feel natural.\n\n Arisen, you are in a clearing surrounded by a dark woodland, your clothes are moss covered and beginning to rot, the evening is cold. It seems you will remain here until the world is freed of the magic that pulled you here, or death finds you.\n\n You Find the items that had been on your person stashed inside an ornate wooden chest covered in strange symbols. The box’s energy slowly fades, it now seems to be merely but a strangely decorated wooden box.\n\n -- THE WORLD -- \n\n The world has no name, for none know more that much further beyond their village. It is a cold world, men and dwarves toil to survive the vicious unforgiving world. The forest grows, and grows, forever hardy, forever dangerous, but plentiful.\nMost subside through a mixture of farming and hunting, building up stores to survive the beasts the prey through winter. The men of this world are untrusting, but hardy and loyal, they have braved great terror before and are ready to do so again. But deep in the dark woods a terror grows, biding and spreading its influence among the wild and free beasts is gaining, soon no power of the intelligent races will be enough to stop the coming tide.",
      appendTitle: "Choose Wisely, you have 1000CP",
      appendText:
        "Find the origin of your corpse host, the relic which pulled you here and the evil villian you will face.",
    },
    selections: [
      {
        name: "1/ Origin",
        description:
          "You had a home, your past has given you many strengths to build from.",
        style: "lines", // layout style, options: lines, boxes
        buy: {
          //Limit the amount you can buy
          unique: true, // if unique, can only be selected once, can have multiple unique items
          min: 1, //Not yet implemented
          max: 1,
        },
        choices: [
          //The choice options available for this selection, may also include, requires (only allowed if char has given uid), discount ( if char has uid, costs 50% less)
          {
            name: "Human Hunter",
            uid: "humanhunter", // used for effecting other choices via discount / limiting
            description:
              "Your were raised in a small village in a poor keeptown, you spent your days hunting foraging and tending to your fields",
            img: humanhunter,
            effect: {
              cost: 0,
              //The effects, a short list of options body-age, body-race, char-background, char-challenge, body-ability, char-advdrawback, inv-item
              "char-background": "Bor-Duren",
              "body-race": "Human",
              "char-advdrawback": {
                name: "hunter-gatherer",
                adv: "Skilled hunter, knows the land, people are more trusting",
                drawback:
                  "ignoble, nobility avoid/dislike, viewed as unimportant, lack in manners, offend easily",
              },
              "inv-items": [
                {
                  name: "knife",
                  desc: "A very small but sharp hunter's knife",
                  quantity: 1,
                  icon: knifeIcon,
                },
                {
                  name: "bow & strings",
                  desc: "A powerful hunters bow, well used, 3 strings",
                  quantity: 3,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Human Warrior",
            uid: "humanwarrior",
            description:
              "Raised in the blood of battle you had once protected the lands of your lord from the violent beasts the prowl the land. Your fearlessness in battle and destruction of corrupted beasts has made you an ally of the hawks with whom you can speak.",
            img: humanwarrior,
            effect: {
              cost: 50,
              "char-background": "Bor-Duren",
              "body-race": "Human",
              "char-advdrawback": {
                name: "warrior",
                adv: "Strong, crafty and wise in battle, capable with arms",
                drawback:
                  "ignoble, nobility avoid/dislike, viewed as unimportant, lack in manners, offend easily",
              },
              "inv-items": [
                {
                  name: "Axe",
                  desc: "A rusty but still sharp and strong blade",
                  quantity: 1,
                  icon: false,
                },
                {
                  name: "Shield",
                  desc: "A strong oak shield",
                  quantity: 3,
                  icon: false,
                },
              ],
              "body-ability": {
                name: "Call Avian Ally",
                power: "Summons a nearby hawk to you with which you can speak.",
              },
            },
          },
          {
            name: "Dwarf Scout",
            uid: "dwarfscout",
            description:
              "One of the few dwarves who is comfortable outdoors. Your life of exploration and has made you cunning and wise to the dangers of the forest, few can catch such a swift and cap[able woodsman as yourself.",
            img: dwarfscout,
            effect: {
              cost: 0,
              "char-background": "Mines of Delarun, Scout.",
              "body-race": "Dwarf",
              "char-advdrawback": {
                name: "Scout",
                adv:
                  "Fast, and capable in the arts of tracking, hiding & ambush.",
                drawback:
                  "Distrusted by dwarves for love of outdoors & humans as look like a spy. Struggle with remaining in one place.",
              },
              "inv-items": [
                {
                  name: "Dagger",
                  desc: "A slender and sharp dagger.",
                  quantity: 1,
                  icon: false,
                },
                {
                  name: "telescope",
                  desc: "Provides good long vision.",
                  quantity: 1,
                  icon: false,
                },
                {
                  name: "Collapsable crossbow",
                  desc: "Small, but effective if targetted properly.",
                  quantity: 1,
                  icon: false,
                },
              ],
              "body-ability": {
                name: "Sense danger",
                power:
                  "Upon meditating your senses highten, allowing you too tell what dark beasts patrol in a mile area around you.",
              },
            },
          },
          {
            name: "Dwarf Guardian",
            uid: "dwarfguardian",
            description:
              "Dwarf guardians play the vital role of protecting the rare resource that is the Dwarf Queens. Few in number and slow to come to term, a dwarf birth is a great celebration, and nothing is more closely guarded than the powerful and important dwarf queens, they who decide shall bring in the next generation.",
            img: dwarfguardian,
            effect: {
              cost: 0,
              "char-background": "Mines of Delarun, Scout.",
              "body-race": "Dwarf",
              "char-advdrawback": {
                name: "Guardian",
                adv:
                  "Stout, capable in arms and inflinching in the face of horror.",
                drawback:
                  "proud, unlikable, often unkind. Sterness can cause fear in others.",
              },
              "inv-items": [
                {
                  name: "Halberd",
                  desc:
                    "A thin but excellently made Halberd unbending and deadly sharp.",
                  quantity: 1,
                  icon: false,
                },
                {
                  name: "Plated Cuirass",
                  desc:
                    "The Plated metal of the Guardian cuirass can turn all but the heaviest strikes.",
                  quantity: 1,
                  icon: false,
                },
              ],
              "body-ability": {
                name: "War Cry",
                power:
                  "Strikes fear into your enemies, and steels the resolve of nearby allies, can also call to aid from a great distance.",
              },
            },
          },
        ],
      },
      {
        name: "2/ Accursed Relic",
        description:
          "Among the items in the decorated box you find a strange item, it's tingles with a ponderous and powerful energy. It seems this item has a called forth a being to futher it's destiny.",
        style: "boxes",
        buy: {
          unique: true,
          min: 1,
          max: 1,
        },
        choices: [
          {
            name: "Bloody Dagger",
            uid: "bloodydagger",
            description:
              "A ornate dagger, it's blade seems freshly wet with blood, no matter how often it is wiped. It calls to it's owner forever hoping to return to it's masters hand, but to do so would plunge the world into darkness.",
            img: daggerbloody,
            effect: {
              cost: 0,
              "char-advdrawback": {
                name: "Accursed Dagger",
                adv:
                  "CUT: cutting yourself with the blade imbues you for one day with the power to open locked doors & heal dire injuries on others. WIND: rubbing the gem will cause the winds to blow toward it's owner.",
                drawback:
                  "Cuts dealt by the blade are painful and take years to heal, it cannot heal injuries it has caused. Rubbing the gem draws power to it's creator.",
              },
              "inv-items": [
                {
                  name: "Bloody Dagger",
                  desc: "Ornate & ever bloody",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Greystone Amulet of Beyin` Parak",
            uid: "greystoneamulet",
            description:
              "A beautiful amulet, wrought in silver with many fine gems. It seems to hum with a gentle tune, it seems to give you strength.",
            img: amuletgreystone,
            effect: {
              cost: 0,
              "char-advdrawback": {
                name: "Amulet of Beyin'Parak",
                adv:
                  "The amulet casts an aura that grants all nearby readily increased physical strength & indominable resolve if they be good of heart. It's glow scares and angers the beasts corrupted by evil.",
                drawback:
                  "The amulet casts fear in all those are dark of heart, they who know of it wish it to be destroyed and will take great pains to see it done.",
              },
              "inv-items": [
                {
                  name: "Amulet of Beyin'Parak",
                  desc: "Glowing well adorned amulet.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Waters of Omsak Yashniir",
            uid: "watersofomsak",
            description:
              "A runed leather waterskin, it feels heavy, but smells sweet.",
            img: waterskinomsak,
            effect: {
              cost: 0,
              "char-advdrawback": {
                name: "Waters of Omsak Yashniir",
                adv:
                  "POUR: pouring the water from the pouch onto a weapon makes it sharper and deadly to any man or beast, an arrow so wet will fly far & true. It refills itself a litre a day, enough for a hundred blades.",
                drawback:
                  "The waterskin's smell attracts the beasts of the dark wood, anywhere it's carrier stays will not be safe for long.",
              },
              "inv-items": [
                {
                  name: "Amulet of Beyin'Parak",
                  desc: "Glowing well adorned amulet.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
        ],
      },
      {
        name: "3/ Nemesis",
        description:
          "Deep in the dark wood a dark power is growing, it thirsts for something, something it hopes to gain from the people of this world.",
        style: "lines",
        buy: {
          unique: true,
          min: 1,
          max: 1,
        },
        choices: [
          {
            name: "Erred-Mhuur",
            uid: "erredmhuur",
            description:
              "Erred-Mhuur hungers for the flesh of sentient beasts, it burns with anguish, only seeking to destroy that which it hates above all else. In it's anger it has reforged the beasts of the wood that have come under it's influence, dark & blood loving they move now as shadows branded in glowing red runes, hunting and preying on all they can.",
            img: erredmhuur,
            effect: {
              cost: 0,
              "char-challenge": {
                name: "Erred-Mhuur [Nemesis]",
                desc: "Hunts & enslaves sentient races.",
              },
            },
          },
          {
            name: "The Haruspex",
            uid: "haruspex",
            description:
              "The dark gods have been forgotten by those they helped make. To a god their is no greater disrespect, for this act they have sent the haruspex, whose mere prescence is to invite catastrophy. Disease, plagues, civil war all spread as he walks the land, he only walks and smiles as the land plunges into darkness. He is protected by four great heroes who served the will of the old gods, Albrith of the Axe, Eldrith of the Spear, Dantrith of the Blade & Ellena of the bow.",
            img: haruspex,
            effect: {
              cost: 0,
              "char-challenge": {
                name: "Haruspex [Nemesis]",
                desc:
                  "prophet of the dark god's revenge, disease, famine & war grow quickly as he closes in. protect by four skeletal heroes of the past.",
              },
            },
          },
          {
            name: "The Sandman",
            uid: "sandman",
            description:
              "The Sandman hunger for hope, and his dark scuttling slaves hunger for flesh. traversing the dreamscape he subverts and darkens dreams, sucking the hope from people in their slumber, turning them into tragic figures, lacking the energy and courage to take up arms against the scuttling feeding horde.",
            img: sandman,
            effect: {
              cost: 0,
              "char-challenge": {
                name: "Sandman [Nemesis]",
                desc:
                  "Hunts hope through dreams, destroying minds, then the beasts come to feast.",
              },
            },
          },
          {
            name: "Tribe of Trolls",
            uid: "trolls",
            description:
              "Angry, violent & strong, the Troll tribe has expanded far beyond it's means and now seeks new lands to plunder. Incapable farmers, the plentiful and well mainted farms of human and dwarf alike offer a tempting reward. Tales are heard already of small farmsteads overrun by the brutal creatures.",
            img: Troll,
            effect: {
              cost: 0,
              "char-challenge": {
                name: "Tribe of Trolls [Nemesis]",
                desc:
                  "Brainless violent and innummerable, their lust for food and land pressuring both man & dwarf.",
              },
            },
          },
          {
            name: "The Lost Wildmen",
            uid: "wildmen",
            description:
              "Burned out the Allied council for their dark heretical practices, they have grown hungry for revenge, this hatred has allowed the dark rituals to penetrate thei minds further. Blood magic and necromancy, plus wild bloodlust has made them a terrible enemy, but their disorganisation has made them inneffective in pitched battle, now they move toward guerrilla action till their growing number will be too strong to hold back.",
            img: wildman,
            effect: {
              cost: 0,
              "char-challenge": {
                name: "The Lost Wildmen [Nemesis]",
                desc:
                  "A lost tribe of beserkers & necromancers, hungering for revenge.",
              },
            },
          },
        ],
      },
      {
        name: "4/ Items",
        description:
          "What other useful equipment you have found to help you on your journey.",
        style: "boxes",
        buy: {
          unique: false,
          min: 1,
          max: 100,
        },
        choices: [
          {
            name: "Climbers Satchel",
            uid: "climbersatchel",
            description:
              "A small bag with a leather sling, contains string on the end of which is a large iron hook, and a ground stone dust for your fingers.",
            img: waterskin,
            effect: {
              cost: 50,
              "inv-items": [
                {
                  name: "Climbers Satchel",
                  desc: "Rope, hook & climbers chalk",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Large bottle of Emig's Honeysap",
            uid: "honeysap",
            description:
              "A bottle containing three portions of a rare ointment, blessed by a kind nypmh, allows you to slowly regenerate from almost mortal wounds over the course of a few days.",
            img: waterskin,
            effect: {
              cost: 100,
              "inv-items": [
                {
                  name: "Emig's Honeysap portions",
                  desc: "Heals mortal wounds ~3days",
                  quantity: 3,
                  icon: false,
                },
              ],
            },
          },
        ],
      },
      {
        name: "5/ Allies",
        description:
          "there are many who are willing and able to help you on your journey.",
        style: "boxes",
        buy: {
          unique: true,
          min: 1,
          max: 3,
        },
        choices: [
          {
            name: "Brothers of the Axe",
            uid: "brothersaxe",
            description:
              "Your borthers in battle and blood, ready to lay down their life in battle alongside you. They number in 10, and are renowed for their feats of battle.",
            img: waterskin,
            effect: {
              cost: 200,
              "body-ability": [
                {
                  name: "Call Brothers of the Axe",
                  power:
                    "Your brothers in arms are always ready for a fight. They number in 10, and are renowed for their feats of battle.",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  charSetup: {
    choicePoints: 1000, // Starting choice points
    choicePointsFullName: "Choice Points",
    choicePointsShort: "CP",
    setting: "A dangerous Iron age forest.", // brief description of setup
  },
};

export default Data;
