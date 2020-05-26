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
// Regions
import kanto from "../public/region/kanto.jpg";
import johto from "../public/region/johto.jpg";
import hoenn from "../public/region/hoenn.jpg";
import sinnoh from "../public/region/sinnoh.jpg";
import unova from "../public/region/unova.jpg";
import kalos from "../public/region/kalos.jpg";
import orre from "../public/region/orre.jpg";
import egg from "../public/region/egg.png";

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
      charBgA: "#00FFFF",
      charBgB: "#007f7f",
      charText: "#000000",
      charBorder: "#220000",
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
      addendumText: "endtext.",
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
          "Your Region is the place in which your journay beings. It changes your starter cost and what pokemon you encounter. The world is more similar to the tv show, cities and towns are modern and are bustling with people and cars. Routes are longer and more remote, evil gangs are present, but police can intervene.\n\n1d8 for random choice, get 8? you get a free pick!",
        style: "boxes",
        buy: {
          unique: true,
          max: 1,
        },
        choices: [
          {
            name: "Kanto",
            description:
              "A region of relative safety and stability. Many trainers begin their journey here. It lacks a wide variety of wild pokemon, the people are likable and crime is very low. east if Johto.",
            img: kanto,
            effect: {
              cost: 0,
              misc: {
                key: "Details",
                name: "Home",
                desc: "Kanto",
                quantity: 1,
              },
            },
          },
          {
            name: "Johto",
            description:
              "West of Kanto, linked by railway and cave system, Johto has a wider variety of starter pokemon and it's central location makes it a good starting point for any up and coming pokemon trainer.",
            img: johto,
            effect: {
              cost: 0,
              misc: {
                key: "Details",
                name: "Home",
                desc: "Johto",
                quantity: 1,
              },
            },
          },
          {
            name: "Hoenn",
            description:
              "A way southeast of kanto and Johto. It sports a tropical climate, and the terrain is home to a different range of pokemon. Lots of travel is water based, so you might want to get a boat or a pokemon with surf. Locals have odd musical taste.",
            img: hoenn,
            effect: {
              cost: 0,
              misc: {
                key: "Details",
                name: "Home",
                desc: "Hoenn",
                quantity: 1,
              },
            },
          },
          {
            name: "Sinnoh",
            description:
              "is on a n island at the northen tip of the same continent as Kanto. Pokémon here are nuermous and varied. The region is divided longitudinally by the coronet mointain range, and sports a cold climate.",
            img: sinnoh,
            effect: {
              cost: 0,
              misc: {
                key: "Details",
                name: "Home",
                desc: "Sinnoh",
                quantity: 1,
              },
            },
          },
          {
            name: "Unova",
            description:
              "Is on an entirely different climate to the previous four. Indigenous Pokémon are common, but others are rare. Fairly urbanized, Castellia city serves as the hub of the area, with lots of trade, food, people and culture.",
            img: unova,
            effect: {
              cost: 0,
              misc: {
                key: "Details",
                name: "Home",
                desc: "Unova",
                quantity: 1,
              },
            },
          },
          {
            name: "Kalos",
            description:
              "Lies on it's own continent, far form others. Has a wide rang eof geography and pokémon. both indigenous and those from other areas. Kalso has a long history, known as a place of culture arts and snobby connoisseurs.",
            img: kalos,
            effect: {
              cost: 0,
              misc: {
                key: "Details",
                name: "Home",
                desc: "Kalos",
                quantity: 1,
              },
            },
          },
          {
            name: "Orre",
            description:
              "A region of mostly desert. Resources and wild pokémon are scare and crime if rampant, The few bastions of civilization house from of the world's best scientists. The Region lacks apredefined routes of travel, another means of travel is required. keep your Pokenav handy.",
            img: orre,
            effect: {
              cost: 0,
              misc: {
                key: "Details",
                name: "Home",
                desc: "Orre",
                quantity: 1,
              },
            },
          },
        ],
      },
      {
        name: "Manual Region Picked",
        description: "Costs 100CP",
        style: "smallboxes",
        buy: {
          unique: true,
          max: 1,
        },
        choices: [
          {
            name: "Manual Choice",
            effect: {
              cost: 100,
            },
          },
        ],
      },
      {
        name: "3a/ Identity Choices",
        description:
          "When I say you get a new life, i mean it. You can pick the life you lived in the Pokémon world up to this point. But First,\n Roll 1d8 + 9 to determine your age. Your gender reamins the same.",
        style: "smallboxes",
        buy: {
          unique: true,
          max: 2,
        },
        choices: [
          {
            name: "Choose Age",
            description: "Pick an age from 10-17.",
            effect: {
              cost: [100],
              misc: {
                key: "Details",
                name: "Age",
                desc: "10-17.",
                quantity: 1,
              },
            },
          },
          {
            name: "Switch Gender",
            description: "Switch your gender, if your into that.",
            effect: {
              cost: [100],
              misc: {
                key: "Details",
                name: "Gender",
                desc: "Switched.",
                quantity: 1,
              },
            },
          },
        ],
      },
      {
        name: "3b/ Identity Start",
        description:
          "Now you choose the history of your new life in the world of Pokémon. Each one has it's perks... and it's price/ Your identity is more than just a resume, it affects your action too. Each Identity besides 'drop in' gives you an extra 10-17 yewars of experience in the world of Pokémon. Though you are still you, with your old set of memories and your own moral justifications, the new memories will affect your though proccess, your reaction, and your instincts. You can overcome eth drawbacks each one brings, but it wil take time, effort and willpower to break them.",
        style: "lines",
        buy: {
          unique: true,
          max: 1,
        },
        choices: [
          {
            name: "Drop In",
            description:
              "YOu wak eup on the road just outside the first town in your region. You have no family, no firends, no history. ALl you have are the clothers you wear, the gear you purchased, and whatever skillsor abilities you may have. Looking into your bag, your see a trainer card that will server as identification in the event you would need it. You notice a bunch of bird pokemon harassing something down the road. After shooing them off, you see that their target was a wild pokémon. As thanks for rescuing it, the Pokémon seems to want to tag along with you.",
            effect: {
              cost: [0],
              "char-background": "Dropped into world.",
              "char-advdrawback": {
                name: "Drop In",
                adv:
                  "No memory set altering your actyions, no history in the world of Pokémon.",
                drawback:
                  "No history means some things can be difficult your aren't getting any new skills for free.",
              },
            },
          },
          {
            name: "Hermit",
            description: "As an infant, you were abandoned in the middle of the woods. luckily, you were discovered by a reclusive old man who took you in. You have come to learn a lot about survival skills and you get along well with the wild pokemon who live nearby. however, you very rarely go into town for supplies your social skills are stunted and you have trouble with cities. deciding to go explore the world, you bid farewell to your adoptive father and set out on the road. as you leave, a wild pokemon you have been caring for over the past month follows, intent on joining.",
            effect: {
              cost: [50],
              "char-background": "hermit.",
              "char-advdrawback": {
                name: "Hermit",
                adv:
                  "You learn a lot about wilderness survival you tend to be able to approach wild pokemon better than most people.",
                drawback: "you have little experience in social activities. you don't 'get' people well and become nervous in cities.",
              },
            },
          },
          {
            name: "Small Town",
            description: "You were raised by your mother in the first town of your region your father had to work a lot, so you never saw much of him. The air is clean, the neighborhood is safe, and you have a tight circle of friends whom you would trust with anything. you have lived a very balanced life, and you are very healthy and physically fit. You decide to go on a pokemon journey like many children your age, with your friends joining you along the way. You bring along the pokemon companion your parents gave you that you grew up with over the past few years.",
            effect: {
              cost: [50],
              "char-advdrawback": {
                name: "Drop In",
                adv:
                  "You are physcially fit and ahave a small group of very close friends (One of which has a crush).",
                drawback: "You don't have a lot of wilderness experience besides some camping and you don't have much city experience either.",
              },
            },
          },
          {
            name: "City Life",
            description: "You were raised by your mother and father in a modest apartment in one of your region's major cities. Born and raised an urban kid, you have almost no experience living outside the city's confines. however, life in the city brings its own advantages. You have a very powerful sense of navigation and over the course of your life have become an expert freerunner with great acrobatic skills. Like many children, you decide to go on a pokemon journey, taking along the pokemon partner you rescued from a shelter half a year ago..",
            effect: {
              cost: [50],
              "char-advdrawback": {
                name: "Drop In",
                adv:
                  "You are very acrobatic and have become adept in parkour.",
                drawback: "You have no experience in wilderness survival.",
              },
            },
          },
          {
            name: "Moneybags",
            description: "You were born as the only child of a very wealthy family. You were pampered as a child and did not want for much of anything. you relieved a top tier education from some of the best tutors in the region. however, you have very little practical experience. Wanting a change of pace from your dull, somewhat repetitive life of constant luxury, you decide to go on a pokemon journey and gain the experience you want on your own, taking along the pokemon your parents had purchased for your protection when you were just a baby.",
            effect: {
              cost: [100],
              "char-advdrawback": {
                name: "Drop In",
                adv:
                  "You have a lot of money and some top of the line gear most trainers will never get.",
                drawback: "You have very little real world experience in general, education only goes so far.",
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
