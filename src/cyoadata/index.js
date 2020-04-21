// This Template fills in the data
import bg from "../public/gold-tree.png";

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
  },
  cyoa: {
    Header: {
      icon: "X",
      title: "Celtica CYOA",
      subHeader: "The dark woods call for blood",
      author: "Bigspoon",
    },
    Setup: {
      choicePoints: 1000,
    },
  },
};

export default Data;
