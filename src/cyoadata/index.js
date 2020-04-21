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
      introText: " You begin by inhabiting the dead body of a warrior, rising from the musty earth the powerful warrior's body begins to morph to your shape. Arisen, you are in a clearing surrounded by a dark woodland, your clothes are moss covered and beginning to rot, the evening is cold. It seems you will remain here until the world is freed of the magic that pulled you here, or death finds you.\n\n You Find the items that had been on your person stashed inside an ornate wooden chest covered in strange symbols. The box’s energy slowly fades, it now seems to be merely but a strangely decorated wooden box.\n\n -- THE WORLD -- \n\n The world has no name, for none know more that much further beyond their village. It is a cold world, men and dwarves toil to survive the vicious unforgiving world. The forest grows, and grows, forever hardy, forever dangerous, but plentiful.\nMost subside through a mixture of farming and hunting, building up stores to survive the beasts the prey through winter. The men of this world are untrusting, but hardy and loyal, they have braved great terror before and are ready to do so again. But deep in the dark woods a terror grows, biding and spreading its influence among the wild and free beasts is gaining, soon no power of the intelligent races will be enough to stop the coming tide.",
      appendTitle: "Choose Wisely, you have 1000CP",
      appendText: "You",
    },
    Setup: {
      choicePoints: 1000,
    },
  },
};

export default Data;
