// This Template fills in the data
// import images placed in /public
import bg from "../public/bg.jpg";
import BuyIcon from "../public/icons/coin.png";
import logo from "../public/logo.svg";
// import font converted to base64
import fontb64 from "../public/pokemon-font.json";
// Free
import bag from "../public/free/bag.png";
import hat from "../public/free/hat.png";
import pokéball from "../public/free/pokéball.png";
import pokedex from "../public/free/pokedex.png";
import pokegear from "../public/free/pokegear.png";
import potion from "../public/free/potions.png";
// Free Icons
import bagIcon from "../public/free/bag-icon.png";
import hatIcon from "../public/free/hat-icon.png";
import pokéballIcon from "../public/free/pokéball-icon.png";
import pokedexIcon from "../public/free/pokedex-icon.png";
import pokegearIcon from "../public/free/pokegear-icon.png";
import potionIcon from "../public/free/potion-icon.png";


const Data = {
  appData: {
    appversion: 2, //Do not adjust
  },
  styling: {
    colors: {
      // order by contrast, lighter/darker first for both.
      maintext: `#00FFFF`,
      bgA: "#404040",
      bgB: "#424242",
      mainBorder: "#007f7f",
      mainHighlight: "#00FFFF",
      charBgA: "#424242",
      charBgB: "#404040",
      charText: "#ff0000",
      charBorder: "#cc0000",
    },
    layout: {
      sidebarWidth: "380px",
      sidebarWidthDeskSm: "180px",
      sidebarWidthMobSm: "60px",
    },
    cyoa: {
      backgroundImg: bg,
      backgroundImgObjectFit: "cover",
      backgroundGradient: `darkgreen, green, lightgreen`, // String, list of choices as per css linear-gradient spec
    },
    themeing: {
      fontName: "pokemonGB",
      fontIsLink: false, // If font is given as link eg googlefonts link, make sure this is true
      font: fontb64.base64String,
      fontScaling: 0.6, // adjust font size
      sectionCornerRadius: "0px", //for curved corners, use 5~20px, for straight user 0px
      bordersWidth: "3px",
      borderStyle: "solid", // https://www.w3schools.com/CSSref/playit.asp?filename=playcss_border-style&preval=outset
    },
  },
  cyoa: {
    header: {
      title: "Pokémon Trainer CYOA",
      subHeader:
        "Hey there. Nice to meet you. My name isn't important, but I have a business proposal to offer you.",
      author: "Quicksilver",
      logo: logo,
    },
    intro: {
      title: "",
      introText:
        "So, I have this hobby of watching people go on adventures. Unfortunately, with the way the earth is completely mapped out and the lack of space program funding, the last great adventure I saw was James Cameron's submarine jaunt. Thus, I am beset by an utter lack of good material.",
      appendTitle: "You get 1000 choice points. Spend them wisely.",
      appendText:
        "You can keep your clothes you're wearing right now. Your wallet and cell phone are fair game, but remember: No cell service and different country. So now that your ready, let's get started on your new life. Lots fo stuff to choose from, jump to it.",
      addendumTitle: "The end",
      addendumPic: hat,
      addendumText:
        "endtext.",
    },
    selections: [
      {
        name: "Free Items",
        description: "Here, you can take these things for free.",
        style: "smallboxes", // layout style, options: lines, boxes, smallboxes
        buy: {
          //Limit the amount you can buy
          unique: true, // if unique, can only be selected once, can have multiple unique items
          min: 1, //Not yet implemented
          max: 6,
        },
        choices: [
          {
            name: "Backpack/Bag",
            description: "Bigger on the inside.",
            img: bag,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Bag",
                  desc: "Bigger o the inside.",
                  quantity: 1,
                  icon: bagIcon,
                },
              ],
            },
          },
          {
            name: "Pokégear",
            description: "Can be muted.",
            img: pokegear,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Pokégear",
                  desc: "Can be muted.",
                  quantity: 1,
                  icon: pokegearIcon,
                },
              ],
            },
          },
          {
            name: "Pokédex",
            description: "Already filled.",
            img: pokedex,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Pokédex",
                  desc: "Already filled.",
                  quantity: 1,
                  icon: pokedexIcon,
                },
              ],
            },
          },
          {
            name: "Pokeballs x5",
            description: "Standard catch rate.",
            img: pokéball,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Pokeballs",
                  desc: "Standard catch rate.",
                  quantity: 5,
                  icon: pokéballIcon,
                },
              ],
            },
          },
          {
            name: "Potion x3",
            description: "Band aid in a bottle.",
            img: potion,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Potion",
                  desc: "Band aid in a bottle.",
                  quantity: 3,
                  icon: potionIcon,
                },
              ],
            },
          },
          {
            name: "Hat",
            description: "A red hat.",
            img: hat,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Hat",
                  desc: "A red hat.",
                  quantity: 1,
                  icon: hatIcon,
                },
              ],
            },
          },
        ],
      },
      {
        name: "2/ Region",
        description:
          "the land from whence you came and your nearest location of interest.",
        style: "boxes", // layout style, options: lines, boxes, smallboxes
        buy: {
          //Limit the amount you can buy
          unique: true, // if unique, can only be selected once, can have multiple unique items
          min: 1, //Not yet implemented
          max: 1,
        },
        choices: [
          {
            name: "Mines of Delarun",
            description: ".",
            img: hat,
            effect: {
              cost: [100],
              "char-background": "Mines of Delarun.",
              "body-ability": {
                name: "Bribe",
                power:
                  "You have a heavy purse, and you konw home to grease a willing palm, many may follow your lead as it seems to be a chance for riches..",
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
        FullName: "Choice Points",
        ShortName: "CP",
        icon: BuyIcon,
      },
    ],
    setting: "A world filled with Pokémon.", // brief description of setup
  },
};

export default Data;
