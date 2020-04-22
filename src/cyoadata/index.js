// This Template fills in the data
// import images placed in /public
import bg from "../public/gold-tree.jpg";
import logo from "../public/logo.jpg";
// import font converted to base64
import fontb64 from "../public/celtic-font.json";

const Data = {
  styling: {
    colors: {
      // order by contrast, lighter/darker first for both.
      mainA: "#2E4E15",
      mainB: "#628746",
      mainC: "#436728",
      mainD: "#1A3407",
      mainE: "#0C1B00",
      secondaryA: "#90A437",
      secondaryB: "#E7F6A4",
      secondaryC: "#BACD66",
      secondaryD: "#687B14",
      secondaryE: "#435200",
    },
    layout: {
      sidebarWidth: "320px",
      sidebarWidthDeskSm: "120px",
      sidebarWidthMobSm: "80px",
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
    },
  },
  cyoa: {
    Header: {
      logo: logo,
      title: "Celtica CYOA",
      subHeader: "The dark woods call for blood",
      author: "BiggySpoonz",
    },
    intro: {
      title: "Welcome to the dark woodlands..",
      introText:
        " You begin by inhabiting the dead body of a warrior, rising from the musty earth the powerful warrior's body begins to morph to your shape. Slowly you inbide the corpse's memories, taking them almost as your own, like coming from a coma your connection with your host body is hazy, but with a little use his abilities quickly feel natural.\n\n Arisen, you are in a clearing surrounded by a dark woodland, your clothes are moss covered and beginning to rot, the evening is cold. It seems you will remain here until the world is freed of the magic that pulled you here, or death finds you.\n\n You Find the items that had been on your person stashed inside an ornate wooden chest covered in strange symbols. The box’s energy slowly fades, it now seems to be merely but a strangely decorated wooden box.\n\n -- THE WORLD -- \n\n The world has no name, for none know more that much further beyond their village. It is a cold world, men and dwarves toil to survive the vicious unforgiving world. The forest grows, and grows, forever hardy, forever dangerous, but plentiful.\nMost subside through a mixture of farming and hunting, building up stores to survive the beasts the prey through winter. The men of this world are untrusting, but hardy and loyal, they have braved great terror before and are ready to do so again. But deep in the dark woods a terror grows, biding and spreading its influence among the wild and free beasts is gaining, soon no power of the intelligent races will be enough to stop the coming tide.",
      appendTitle: "Choose Wisely, you have 1000CP",
      appendText: "You",
    },
    selections: [
      {
        name: "1/ Origin",
        description:
          "You had a home, your past has given you many strengths to build from.",
        style: "lines", // layout style, options: lines, boxes
        buy: {
          //Limit the amount you can buy
          unique: true, // if unique, can only be selected once
          min: 1,
          max: 1,
        },
        choices: [
          //The choice options available for this selection, may also include, requires (only allowed if char has given uid), discount ( if char has uid, costs 50% less)
          {
            name: "Human Peasant",
            uid: "humanpeasant", // used for effecting other choices via discount / limiting
            description:
              "Your were raised in a small village in a poor keeptown, you spent your days hunting foraging and tending to your fields",
            img: logo,
            cost: 0,
            effect: {
              //The effects, a short list of options body-age, body-race, char-home, char-background, char-advdrawback, inv-item
              "char-home": "Bor-Duren",
              "body-race": "Human",
              "char-advdrawback": {
                name: "hunter-gatherer",
                adv: "Skilled hunter, knows the land, people are more trusting",
                drawback:
                  "ignoble, nobility avoid/dislike, viewed as unimportant, lack in manners, offend easily",
              },
              "inv-item": [
                {
                  name: "knife",
                  desc: "A very small but sharp hunter's knife",
                  quantity: 1,
                  icon: false,
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
            uid: "humanwarrior", // used for effecting other choices via discount / limiting
            description:
              "Raised in the blood of battle you had once protected the lands of your lord from the violent beasts the prowl the land.",
            img: logo,
            cost: 50,
            effect: {
              //The effects, a short list of options body-age, body-race, char-home, char-background, char-advdrawback, inv-item
              "char-home": "Bor-Duren",
              "body-race": "Human",
              "char-advdrawback": {
                name: "warrior",
                adv: "Strong, crafty and wise in battle, capable with arms",
                drawback:
                  "ignoble, nobility avoid/dislike, viewed as unimportant, lack in manners, offend easily",
              },
              "inv-item": [
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
            },
          },
        ],
      },
    ],
  },
  charSetup: {
    choicePoints: 1000,
  },
};

export default Data;
