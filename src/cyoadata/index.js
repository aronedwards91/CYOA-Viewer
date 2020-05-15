// This Template fills in the data
// import images placed in /public
import bg from "../public/gold.jpg";
import BuyIcon from "../public/icons/buy.png";
import logo from "../public/logo.svg";
// import font converted to base64
import fontb64 from "../public/celtic-font.json";
//worldmap
import worldmap from "../public/darkwoods-map.jpg";
// Char Profile
import humanwarriorprof from "../public/origin/humanwarrior-port.jpg";
import humanhunter from "../public/origin/human-hunter.jpg";
import dwarfscout from "../public/origin/dwarf-scout.jpg";
import dwarfguardian from "../public/origin/dwarf-guardian.jpg";
import dwarfpriest from "../public/origin/dwarf-priest.jpg";
import humandruid from "../public/origin/human-druid.jpg";
import humanwanderer from "../public/origin/human-wanderer.jpg";
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
// Items
import satchel from "../public/items/satchel.jpg";
import potion from "../public/items/potion.jpg";
import blade from "../public/items/blade.jpg";
import helm from "../public/items/helm.jpg";
import horse from "../public/items/horse.jpg";
import lantern from "../public/items/lantern.jpg";
import shield from "../public/items/shield.jpg";
import talisman from "../public/items/talisman.jpg";
import spear from "../public/items/spear.jpg";
import tome from "../public/items/tome.jpg";
import ward from "../public/items/ward.jpg";
import wolf from "../public/items/wolf.jpg";
// Allies
import brothers from "../public/allies/brothersinarms.jpg";
import dwarves from "../public/allies/dwarves.jpg";
import eagle from "../public/allies/greatereagle.jpg";
import rangers from "../public/allies/rangers.jpg";
import wildmage from "../public/allies/wildmage.jpg";
// Item Icons
import knifeIcon from "../public/icons/knife-icon.png";
import bow from "../public/icons/bow.png";

const Data = {
  appData: {
    appversion: 2, //Do not adjust
  },
  styling: {
    colors: {
      // order by contrast, lighter/darker first for both.
      maintext: `black`,
      bgA: "#628746",
      bgB: "#2E4E15",
      mainBorder: "#1A3407",
      mainHighlight: "#BCFA0F",
      charBgA: "#90A437",
      charBgB: "#E7F6A4",
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
      fontName: "Celtic",
      fontIsLink: false, // If font is given as link eg googlefonts link, make sure this is true
      font: fontb64.base64String,
      fontScaling: 1.0, // adjust font size
      sectionCornerRadius: "10px", //for curved corners, use 5~20px, for straight user 0px
      bordersWidth: "6px",
      borderStyle: "double", // https://www.w3schools.com/CSSref/playit.asp?filename=playcss_border-style&preval=outset
    },
  },
  cyoa: {
    header: {
      title: "CYOA - DarkWood",
      subHeader: "The dark woods call for blood",
      author: "BiggySpoonz",
      logo: logo,
    },
    intro: {
      title: "Welcome to the dark woodlands..",
      introText:
        "You begin by inhabiting the dead body of a warrior, rising from the musty earth the powerful warrior's body begins to morph to your shape. Slowly you inbide the corpse's memories, taking them almost as your own, like coming from a coma your connection with your host body is hazy, but with a little use his abilities quickly feel natural.\n\n Arisen, you are in a clearing surrounded by a dark woodland, your clothes are moss covered and beginning to rot, the evening is cold. It seems you will remain here until the world is freed of the magic that pulled you here, or death finds you.\n\n You Find the items that had been on your person stashed inside an ornate wooden chest covered in strange symbols. The box’s energy slowly fades, it now seems to be merely but a strangely decorated wooden box.\n\n -- THE WORLD -- \n\n The world has no name, for none know more that much further beyond their village. It is a cold world, men and dwarves toil to survive the vicious unforgiving world. The forest grows, and grows, forever hardy, forever dangerous, but plentiful.\nMost subside through a mixture of farming and hunting, building up stores to survive the beasts the prey through winter. The men of this world are untrusting, but hardy and loyal, they have braved great terror before and are ready to do so again. But deep in the dark woods a terror grows, biding and spreading its influence among the wild and free beasts is gaining, soon no power of the intelligent races will be enough to stop the coming tide.",
      appendTitle: "Choose Wisely, you have 1000CP",
      appendText:
        "This CYOA sets up a classic hero's journey archetype adventure, a dark nemesis rise to destroy the land, will you take up the accursed relic and wield it to save the land from darkness?",
      worldmap: worldmap,
      Worldbuildingtext: "Deep in the lost woods of the west a dark power rises, the greater spirit of the land calls forth for a hero to unite the tribes of man, dwarf and all that sentient races together to fight the dark spirit. In the north the wild mages of the golden forest seperate themselves from the ungifted, and think only of growing their power. The looming spire skirmishes with the wild and frienzied zealots of Gorruk's Hermitage, risking a wider conflict between man & dwarf. Bennet's rest grows poor under the failing guidance of greedy spiteful lord and his arrogant housecarls. The mines of Delarun are rich but the breaking down into family factions has lead to crumbling social foundation as houses further plot, murder, and sow the seeds of chaos to gain greater ranking in the High council. The dinnol pits continue to produce great fighters in their fighting pits, but brash, angry and poor they feed not the barracks of LandsKarn End but the wild bandit groups that pester the southern woods. Fort Eadharras stands proud, holding against the first of the push from the lost, but as others ignore it's calls for aid, it's numbers begin to fail. Fort Gorrots growinf power is seen as alooming threat to it's neighbours as past transgressions pollute it's reputation, will it's newest High Chaplain restore it's reputation or fall to war against it's neighbours.",
    },
    selections: [
      {
        name: "1/ Origin",
        description:
          "You had a home, your past has given you many strengths to build from.",
        style: "lines", // layout style, options: lines, boxes, smallboxes
        buy: {
          //Limit the amount you can buy
          unique: true, // if unique, can only be selected once, can have multiple unique items
          min: 1, //Not yet implemented
          max: 1,
        },
        choices: [
          {
            name: "Human Hunter",
            description:
              "Your were raised in a small village in a poor keeptown, you spent your days hunting foraging and tending to your fields",
            img: humanhunter,
            effect: {
              discountid: "humanhunter",
              cost: [0],
              //The effects, a short list of options body-age, body-race, char-background, char-challenge, body-ability, char-advdrawback, inv-item
              "char-profimg": humanhunter,
              "char-background": "The Looming Spires",
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
                  icon: bow,
                },
              ],
            },
          },
          {
            name: "Human Warrior",
            description:
              "Raised in the blood of battle you had once protected the lands of your lord from the violent beasts the prowl the land. Your fearlessness in battle and destruction of corrupted beasts has made you an ally of the hawks with whom you can speak.",
            img: humanwarriorprof,
            effect: {
              discountid: "humanwarrior",
              cost: [50],
              "char-profimg": humanwarriorprof,
              "char-background": "Bennet's Rest",
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
            name: "Human Druid",
            description:
              "A child of the forest, you are free and easy in even the most dangerous of woods, knowing it's every secret path, and every useful fruit.",
            img: humandruid,
            effect: {
              cost: [50],
              "char-profimg": humandruid,
              "char-background": "Golden Forest",
              "body-race": "Human",
              "char-advdrawback": {
                name: "Druid",
                adv:
                  "Understanding and wedded to the forest, it's uncorrupted beasts view you as an ally.",
                drawback:
                  "Dislike humans & dwarfs, especially those who do not respect nature, difficult to get along with.",
              },
              "inv-items": [
                {
                  name: "Staff",
                  desc: "An old staff, can produce light, and command wind.",
                  quantity: 1,
                  icon: false,
                },
                {
                  name: "Horn of Offorn",
                  desc: "Blow to summon allied beasts to your aid.",
                  quantity: 1,
                  icon: false,
                },
              ],
              "body-ability": {
                name: "Meld",
                power:
                  "Can become completely camoflagued by meditating, all eyes view you as just a bush, transformation takes a whle minute.",
              },
            },
          },
          {
            name: "Human Wanderer",
            description:
              "Unable to withstand the pull of your feet you let them lead you. You are rarely interested in plannign ahead but merely rely on you wit and intelligence to get you through each day.",
            img: humanwanderer,
            effect: {
              cost: [0],
              "char-profimg": humanwanderer,
              "char-background": "Nowhere & everywhere",
              "body-race": "Human",
              "char-advdrawback": {
                name: "wanderer",
                adv: "Undaunted by grim potents you take events as they come.",
                drawback: "Unable to stick to plans, and hate making them.",
              },
              "inv-items": [
                {
                  name: "sword",
                  desc: "A rusty but effective blade",
                  quantity: 1,
                  icon: knifeIcon,
                },
                {
                  name: "lute",
                  desc:
                    "You know many songs and have an ethereal singing voice.",
                  quantity: 3,
                  icon: bow,
                },
              ],
              "body-ability": {
                name: "Inspriring Word",
                power:
                  "When drunk can find your tongue, crafting inspiring speeches with ease.",
              },
            },
          },
          {
            name: "Dwarf Scout",
            description:
              "One of the few dwarves who is comfortable outdoors. Your life of exploration and has made you cunning and wise to the dangers of the forest, few can catch such a swift and cap[able woodsman as yourself.",
            img: dwarfscout,
            effect: {
              cost: [50],
              "char-profimg": dwarfscout,
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
            description:
              "Dwarf guardians play the vital role of protecting the rare resource that is the Dwarf Queens. Few in number and slow to come to term, a dwarf birth is a great celebration, and nothing is more closely guarded than the powerful and important dwarf queens, they who decide shall bring in the next generation.",
            img: dwarfguardian,
            effect: {
              cost: [100],
              "char-profimg": dwarfguardian,
              "char-background": "Mines of Delarun, Guardian.",
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
          {
            name: "Dwarf Priest",
            description:
              "You live to press the true word of Gorruk the savior, lord of protect against dark forces. undaunted by horror and beloved by all those who follow the word, you are a light in the dark, and the great bulwark against which horror will crash.",
            img: dwarfpriest,
            effect: {
              cost: [0],
              "char-profimg": dwarfpriest,
              "char-background": "Gorruk's Hermitage.",
              "body-race": "Dwarf",
              "char-advdrawback": {
                name: "Priest",
                adv: "Unbreaking courage in the face of horror.",
                drawback:
                  "Intense and unkind to those who do not follow the word.",
              },
              "inv-items": [
                {
                  name: "Mace",
                  desc:
                    "A heavy, powerful mace, blessed & adorned with symbolism.",
                  quantity: 1,
                  icon: false,
                },
                {
                  name: "Chainmail",
                  desc: "Lightweight and effective protection.",
                  quantity: 1,
                  icon: false,
                },
                {
                  name: "Book of psalms",
                  desc:
                    "Inside and many useful & applicable lessons to the warrior against darkness.",
                  quantity: 1,
                  icon: false,
                },
              ],
              "body-ability": {
                name: "Holy Light",
                power:
                  "Once a day cast a powerful light from a blessed object, frightens foes and illuminates for 1 hour.",
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
            description:
              "A ornate dagger, it's blade seems freshly wet with blood, no matter how often it is wiped. It calls to it's owner forever hoping to return to it's masters hand, but to do so would plunge the world into darkness.",
            img: daggerbloody,
            effect: {
              cost: [0],
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
            description:
              "A beautiful amulet, wrought in silver with many fine gems. It seems to hum with a gentle tune, it seems to give you strength.",
            img: amuletgreystone,
            effect: {
              cost: [0],
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
                  desc: "Glowing Relic of indominable will.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Waters of Omsak Yashniir",
            description:
              "A runed leather waterskin, it feels heavy, but smells sweet.",
            img: waterskinomsak,
            effect: {
              cost: [0],
              "char-advdrawback": {
                name: "Waters of Omsak Yashniir",
                adv:
                  "POUR: pouring the water from the pouch onto a weapon makes it sharper and deadly to any man or beast, an arrow so wet will fly far & true. It refills itself a litre a day, enough for a hundred blades.",
                drawback:
                  "The waterskin's smell attracts the beasts of the dark wood, anywhere it's carrier stays will not be safe for long.",
              },
              "inv-items": [
                {
                  name: "Waterskin of Omsak Yashniir",
                  desc: "Relic that weapons more powerful.",
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
            description:
              "Erred-Mhuur hungers for the flesh of sentient beasts, it burns with anguish, only seeking to destroy that which it hates above all else. In it's anger it has reforged the beasts of the wood that have come under it's influence, dark & blood loving they move now as shadows branded in glowing red runes, hunting and preying on all they can.",
            img: erredmhuur,
            effect: {
              cost: [0],
              "char-challenge": {
                name: "Erred-Mhuur [Nemesis]",
                desc: "Hunts & enslaves sentient races.",
              },
            },
          },
          {
            name: "The Haruspex",
            description:
              "The dark gods have been forgotten by those they helped make. To a god their is no greater disrespect, for this act they have sent the haruspex, whose mere prescence is to invite catastrophy. Disease, plagues, civil war all spread as he walks the land, he only walks and smiles as the land plunges into darkness. He is protected by four great heroes who served the will of the old gods, Albrith of the Axe, Eldrith of the Spear, Dantrith of the Blade & Ellena of the bow.",
            img: haruspex,
            effect: {
              cost: [0],
              "char-challenge": {
                name: "Haruspex [Nemesis]",
                desc:
                  "prophet of the dark god's revenge, disease, famine & war grow quickly as he closes in. protect by four skeletal heroes of the past.",
              },
            },
          },
          {
            name: "The Sandman",
            description:
              "The Sandman hunger for hope, and his dark scuttling slaves hunger for flesh. traversing the dreamscape he subverts and darkens dreams, sucking the hope from people in their slumber, turning them into tragic figures, lacking the energy and courage to take up arms against the scuttling feeding horde.",
            img: sandman,
            effect: {
              cost: [0],
              "char-challenge": {
                name: "Sandman [Nemesis]",
                desc:
                  "Hunts hope through dreams, destroying minds, then the beasts come to feast.",
              },
            },
          },
          {
            name: "Tribe of Trolls",
            description:
              "Angry, violent & strong, the Troll tribe has expanded far beyond it's means and now seeks new lands to plunder. Incapable farmers, the plentiful and well mainted farms of human and dwarf alike offer a tempting reward. Tales are heard already of small farmsteads overrun by the brutal creatures.",
            img: Troll,
            effect: {
              cost: [0],
              "char-challenge": {
                name: "Tribe of Trolls [Nemesis]",
                desc:
                  "Brainless violent and innummerable, their lust for food and land pressuring both man & dwarf.",
              },
            },
          },
          {
            name: "The Lost Wildmen",
            description:
              "Burned out the Allied council for their dark heretical practices, they have grown hungry for revenge, this hatred has allowed the dark rituals to penetrate thei minds further. Blood magic and necromancy, plus wild bloodlust has made them a terrible enemy, but their disorganisation has made them inneffective in pitched battle, now they move toward guerrilla action till their growing number will be too strong to hold back.",
            img: wildman,
            effect: {
              cost: [0],
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
            description:
              "A small bag with a leather sling, contains string on the end of which is a large iron hook, and a ground stone dust for your fingers.",
            img: satchel,
            effect: {
              cost: [50],
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
            description:
              "A bottle containing three portions of a rare ointment, blessed by a kind nypmh, allows you to slowly regenerate from almost mortal wounds over the course of a few days.",
            img: potion,
            effect: {
              cost: [50],
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
          {
            name: "Runed Blade",
            description:
              "An ancient family heirloom, sharp true and deadly, it makes short work of any hide or light armor.",
            img: blade,
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Runed Blade",
                  desc: "Easily cut hide, light armor.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Ornate Helm",
            description:
              "A wonderous piece of work, striking and enobling, whilst also a fine and effective piece of armor.",
            img: helm,
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Ornate Helm",
                  desc: "Enobling & protective.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Mages Lantern",
            description:
              "burns brightly and confers a sense of comfort and warmth during cold nights. However may attract things best left unattracted.",
            img: lantern,
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Mages Lantern",
                  desc: "Creates warming light. Attracts dark creatures.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Noble Mount",
            description:
              "the horse of Erenbiir's line are powerful warhorses, unflinching in the heat of battle and loyal as they come. He would appreciate you giving him a name.",
            img: horse,
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Noble Mount",
                  desc: "Swift and fearless in charges, loyal.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Shield of the Blue Tree",
            description:
              "The shied of the blue tree is worn and old, but still an arrow or blade is yet to pierce its mighty bulwark. Legends say even magic may be defected by it's true and solid power.",
            img: shield,
            effect: {
              cost: [150],
              "inv-items": [
                {
                  name: "Shield of the Blue Tree",
                  desc:
                    "Deflects all including magic. But powerful spells will break it.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Mechanical Talisman",
            description:
              "Tells of the approachment of menacing forces and in which direction they lay.",
            img: talisman,
            effect: {
              cost: [150],
              "inv-items": [
                {
                  name: "Mechanical Talisman",
                  desc: "Shows direction of menacing forces.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Dark Spear",
            description:
              "A Dark spear, filled with anger and hate, can break through the toughest armor, but will slowly fill it's handler with a brooding darkness.",
            img: spear,
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Dark Spear",
                  desc: "penetrates all, but curses user with growing hatred.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Burning Ward",
            description:
              "A Fiery magical torch, burns with a dark red light, but when meditate nearby it will create a protective shield.",
            img: ward,
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Burning Ward",
                  desc: "Casts a 5m protective shield while meditating.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Loyal Dire Wolf",
            description:
              "A Dire wolf you raised from a pup, intensiley loyal. Most sentient folk are incredibly fearful of such beasts.",
            img: wolf,
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Dire Wolf",
                  desc: "Loyal & powerful, scares others.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Ancient Tome",
            description:
              "An ancient tome that tells of the dark forces that will come to plague this land, offers some puzzling & vague advice about possible weaknesses and manners by which it can be defeated.",
            img: tome,
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Ancient Tome",
                  desc: "Puzzling & vague tome regarding your dark nemesis.",
                  quantity: 1,
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
        style: "lines",
        buy: {
          unique: false,
          min: 1,
          max: 4,
        },
        choices: [
          {
            name: "Brothers of the Axe",
            description:
              "Your brothers in battle and blood, ready to lay down their life in battle alongside you. They number in 10, and are renowed for their feats of battle.",
            img: brothers,
            effect: {
              cost: [150],
              "char-allies": {
                name: "Call Brothers of the Axe",
                desc:
                  "Your brothers in arms are always ready for a fight, and are renowed for their feats of battle.",
                quantity: 5,
              },
            },
          },
          {
            name: "Dwarven Mercenaries",
            description:
              "Capable and strong, but not entirely fearless, nor particularly loyal.",
            img: dwarves,
            effect: {
              cost: [50],
              "char-allies": {
                name: "Dwarven Mercenaries",
                desc: "Strong, but not fearless or loyal.",
                quantity: 4,
              },
            },
          },
          {
            name: "Greater Eagle",
            description:
              "Feddith Karr of the greater eagles, most noble and prideful of the eagles. For an earlier heroic act he has pledged you a favour is in your debt, but his honor will be sullied if you call him in aid for reason other than a time of dire need.",
            img: eagle,
            effect: {
              cost: [100],
              "char-allies": {
                name: "Greater Eagle",
                desc:
                  "The greatest of eagles, Feddith Karr, noblest of the sky and lord of war.",
                quantity: 1,
              },
              "inv-items": [
                {
                  name: "Eagle's Horn",
                  desc: "Sound to call for the aid of a greater Eagle.",
                  quantity: 1,
                  icon: false,
                },
              ],
            },
          },
          {
            name: "Forest Rangers",
            description:
              "Great & capable hunters, the rangers can guide and protect you their impressive bow skills even in the darkest & most perilous woods.",
            img: rangers,
            effect: {
              cost: [150],
              "char-allies": {
                name: "Forest Rangers",
                desc: "Capable forest guides, strong archers.",
                quantity: 8,
              },
            },
          },
          {
            name: "Wilderness Mage",
            description:
              "A strange but powerful mage has offered to take you under his wing, he has great power of natural forces and druidic summonings. he is however not entirely sane and has a tendency to charge ahead headless of danger.",
            img: wildmage,
            effect: {
              cost: [200],
              "char-allies": {
                name: "Wilderness Mage",
                desc: "powerful druid mage, dangerously fearless.",
                quantity: 1,
              },
            },
          },
        ],
      },
      {
        name: "6/ Drawbacks",
        description:
          "Without challenges to make us stronger we remain weak in character.",
        style: "boxes",
        buy: {
          unique: true,
          min: 0,
          max: 3,
        },
        choices: [
          {
            name: "Overwhelming Bloodlust",
            description:
              "Your lust for blood makes you a dangerous enemy, but also a dangerous Ally.",
            effect: {
              cost: [-50],
              "char-drawback": {
                name: "Overwhelming Bloodlust",
                desc: "Once angered dangerous even to allies.",
              },
            },
          },
          {
            name: "Power hungry",
            description:
              "Your desire for heroics stems from a lust for power & glory, those pure of heart can see your motivation.",
            effect: {
              cost: [-50],
              "char-drawback": {
                name: "Power hungry",
                desc: "Untrusted by those pure of heart.",
              },
            },
          },
          {
            name: "Outlaw",
            description:
              "Your past misdeeds have caught up with you, those loyal to tribal law distrust you and want to see you pay for your crimes.",
            effect: {
              cost: [-150],
              "char-drawback": {
                name: "Outlaw",
                desc: "Kicked out from your home and branded a criminal.",
              },
            },
          },
        ],
      },
      {
        name: "7/ Skills",
        description:
          "You had a home, your past has given you many strengths to build from.",
        style: "smallboxes",
        buy: {
          //Limit the amount you can buy
          unique: true, // if unique, can only be selected once, can have multiple unique items
          min: 1, //Not yet implemented
          max: 20,
        },
        choices: [
          {
            name: "Capable Fighter",
            description: "Seasoned in Melee combat.",
            effect: {
              cost: [0, 1],
              misc: {
                key: "skill",
                name: "Overwhelming Bloodlust",
                desc: "Once angered dangerous even to allies.",
                quantity: 1,
              },
            },
          },
          {
            name: "Tracker",
            description: "Seasoned hunter.",
            effect: {
              cost: [0, 1],
              misc: {
                key: "knowledge",
                name: "Tracking",
                desc: "Able to track any beasts.",
                quantity: 1,
              },
            },
          },
          {
            name: "Archer",
            description: "Capable archer.",
            effect: {
              cost: [0, 1],
              misc: {
                key: "skill",
                name: "Tracking",
                desc: "Your home's best Bowman.",
                quantity: 1,
              },
            },
          },
          {
            name: "Tactician",
            description: "Devious tactician.",
            effect: {
              cost: [0, 1],
              misc: {
                key: "knowledge",
                name: "Tactician",
                desc: "Able to outsmart and outflank any enemy.",
                quantity: 1,
              },
            },
          },
          {
            name: "ShapeShift",
            description: "Can transform at will into a werewolf.",
            effect: {
              cost: [0, 1],
              "body-ability": {
                name: "ShapeShift",
                power: "Can transform at will into a werewolf.",
              },
            },
          },
          {
            name: "Necromancy",
            description: "Summon the dead, seen by most as heresy.",
            effect: {
              cost: [0, 2],
              misc: {
                key: "knowledge",
                name: "Necromancy",
                desc:
                  "Reawaken the dead through strange and slow ritual, seen by most as heresy.",
                quantity: 1,
              },
            },
          },
        ],
      },
    ],
  },
  charSetup: {
    purchasing: [
      // min 0, 4+ will break mobile styling
      {
        amount: 1000, // Starting choice points
        FullName: "Magic power",
        ShortName: "MP",
        icon: BuyIcon,
      },
      {
        amount: 2, // Starting choice points
        FullName: "Skill Points",
        ShortName: "SP",
      },
    ],
    setting: "A dangerous Iron age forest.", // brief description of setup
  },
};

export default Data;
