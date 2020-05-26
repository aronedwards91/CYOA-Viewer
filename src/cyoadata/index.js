// This Template fills in the data
// import images placed in /public
import bg from "../public/bg.jpg";
import BuyIcon from "../public/icons/coin.png";
import logo from "../public/logo.png";
import portal from "../public/portal.jpg";
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
// Starters
import pikachu from "../public/starter/pikachu.png";
import eevee from "../public/starter/eevee.png";
import gen1b from "../public/starter/gen1b.png";
import gen1g from "../public/starter/gen1g.png";
import gen1r from "../public/starter/gen1r.png";
import gen2b from "../public/starter/gen2b.png";
import gen2g from "../public/starter/gen2g.png";
import gen2r from "../public/starter/gen2r.png";
import gen3b from "../public/starter/gen3b.png";
import gen3g from "../public/starter/gen3g.png";
import gen3r from "../public/starter/gen3r.png";
import gen4b from "../public/starter/gen4b.png";
import gen4g from "../public/starter/gen4g.png";
import gen4r from "../public/starter/gen4r.png";
import gen5b from "../public/starter/gen5b.png";
import gen5g from "../public/starter/gen5g.png";
import gen5r from "../public/starter/gen5r.png";
import gen6b from "../public/starter/gen6b.png";
import gen6g from "../public/starter/gen6g.png";
import gen6r from "../public/starter/gen6r.png";
import gen7b from "../public/starter/gen7b.png";
import gen7g from "../public/starter/gen7g.png";
import gen7r from "../public/starter/gen7r.png";
import gen8b from "../public/starter/gen8b.png";
import gen8g from "../public/starter/gen8g.png";
import gen8r from "../public/starter/gen8r.png";

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
      addendumTitle:
        "Once you make your choices, prepare for the adventure of a (new) lifetime! good luck, have fun, and be entertaining!",
      addendumPic: portal,
      addendumText:
        "POST ADVENTURE\n\n\nLike i said, you're gonna be spending 10 years in the world of pokemon. after that, well, i leave the choice to you.\nYou have three choices Before you.\n\nHOMEWARD BOUND\n\nYou return back home. you awaken in your bed the day you left at the age you were originally. You can keep your skills, 5 pokémon plus your starter, and all of your gear as a token of my appreciation. If you feel like taking over your world with that stuff go nuts.\n\nOR\n\nNOT GOING BACK\n\nyou elect to stay you will live out the rest of your life in the world of pokémon. Adventures, fun, and excitement will last for the rest of your days in your home world, you have gone missing and will never be found.\n\nOR\n\nThe next adventure\n\nyou move on. if i find the life you lived sufficiently entertaining and to my fancy, i will make you another deal. ten more years-in a new world. You can keep 5 pokemon plus your starter, your skills, and all your gear. time is still stopped at home.",
    },
    selections: [
      {
        name: "Free Items",
        description:
          "Here, you can take these things for free. Best grab them All.",
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
            img: egg,
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
            description:
              "As an infant, you were abandoned in the middle of the woods. luckily, you were discovered by a reclusive old man who took you in. You have come to learn a lot about survival skills and you get along well with the wild pokemon who live nearby. however, you very rarely go into town for supplies your social skills are stunted and you have trouble with cities. deciding to go explore the world, you bid farewell to your adoptive father and set out on the road. as you leave, a wild pokemon you have been caring for over the past month follows, intent on joining.",
            effect: {
              cost: [50],
              "char-background": "Hermit.",
              "char-advdrawback": {
                name: "Hermit",
                adv:
                  "You learn a lot about wilderness survival you tend to be able to approach wild pokemon better than most people.",
                drawback:
                  "you have little experience in social activities. you don't 'get' people well and become nervous in cities.",
              },
              "body-ability": {
                name: "Survival Training",
                power: "innate knowledge of survival skills.",
              },
            },
          },
          {
            name: "Small Town",
            description:
              "You were raised by your mother in the first town of your region your father had to work a lot, so you never saw much of him. The air is clean, the neighborhood is safe, and you have a tight circle of friends whom you would trust with anything. you have lived a very balanced life, and you are very healthy and physically fit. You decide to go on a pokemon journey like many children your age, with your friends joining you along the way. You bring along the pokemon companion your parents gave you that you grew up with over the past few years.",
            effect: {
              cost: [50],
              "char-background": "Small Town.",
              "char-advdrawback": {
                name: "Small Town",
                adv:
                  "You are physcially fit and ahave a small group of very close friends (One of which has a crush).",
                drawback:
                  "You don't have a lot of wilderness experience besides some camping and you don't have much city experience either.",
              },
              "body-ability": {
                name: "Physical Fitnes",
                power: "Healthy and strong.",
              },
            },
          },
          {
            name: "City Life",
            description:
              "You were raised by your mother and father in a modest apartment in one of your region's major cities. Born and raised an urban kid, you have almost no experience living outside the city's confines. however, life in the city brings its own advantages. You have a very powerful sense of navigation and over the course of your life have become an expert freerunner with great acrobatic skills. Like many children, you decide to go on a pokemon journey, taking along the pokemon partner you rescued from a shelter half a year ago..",
            effect: {
              cost: [50],
              "char-background": "City born.",
              "char-advdrawback": {
                name: "City Life",
                adv: "You are very acrobatic and have become adept in parkour.",
                drawback: "You have no experience in wilderness survival.",
              },
              "body-ability": {
                name: "Free Running",
                power: "pull off acrobatic feats.",
              },
            },
          },
          {
            name: "Moneybags",
            description:
              "You were born as the only child of a very wealthy family. You were pampered as a child and did not want for much of anything. you relieved a top tier education from some of the best tutors in the region. however, you have very little practical experience. Wanting a change of pace from your dull, somewhat repetitive life of constant luxury, you decide to go on a pokemon journey and gain the experience you want on your own, taking along the pokemon your parents had purchased for your protection when you were just a baby.",
            effect: {
              cost: [100],
              "char-background": "Aristocrat.",
              "char-advdrawback": {
                name: "Moneybags",
                adv:
                  "You have a lot of money and some top of the line gear most trainers will never get.",
                drawback:
                  "You have very little real world experience in general, education only goes so far.",
              },
            },
          },
        ],
      },
      {
        name: "4/ Starter Pokémon",
        description:
          "Your starter Pokémon will likely become one of your best firends. Make your choice here a good one. Pokémon start ~ lv5 skill wise. No Legendaries.",
        style: "smallboxes",
        buy: {
          unique: true,
          max: 1,
        },
        choices: [
          {
            name: "Eevee",
            description: "Eevee (Normal).",
            img: eevee,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Eevee",
                  desc: "Eevee (Normal).",
                  quantity: 1,
                  icon: eevee,
                },
              ],
            },
          },
          {
            name: "Pikachu",
            description: "Pikachu (Electric).",
            img: pikachu,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Pikachu",
                  desc: "Pikachu (Electric).",
                  quantity: 1,
                  icon: pikachu,
                },
              ],
            },
          },
          {
            name: "Squirtle",
            description: "Squirtle (water).",
            img: gen1b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Squirtle",
                  desc: "Squirtle (water).",
                  quantity: 1,
                  icon: gen1b,
                },
              ],
            },
          },
          {
            name: "Bulbasaur",
            description: "Bulbasaur (Grass / Poison)",
            img: gen1g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Bulbasaur",
                  desc: "Bulbasaur (Grass / Poison)",
                  quantity: 1,
                  icon: gen1g,
                },
              ],
            },
          },
          {
            name: "Charmander",
            description: "Charmander (Fire)",
            img: gen1r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Charmander",
                  desc: "Charmander (Fire)",
                  quantity: 1,
                  icon: gen1r,
                },
              ],
            },
          },

          {
            name: "Totodile",
            description: "Totodile (water).",
            img: gen2b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Totodile",
                  desc: "Totodile (water).",
                  quantity: 1,
                  icon: gen2b,
                },
              ],
            },
          },
          {
            name: "Chikorita",
            description: "Chikorita (Grass)",
            img: gen2g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Chikorita",
                  desc: "Chikorita (Grass)",
                  quantity: 1,
                  icon: gen2g,
                },
              ],
            },
          },
          {
            name: "Cyndaquil",
            description: "Cyndaquil (Fire)",
            img: gen2r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Cyndaquil",
                  desc: "Cyndaquil (Fire)",
                  quantity: 1,
                  icon: gen2r,
                },
              ],
            },
          },
          {
            name: "Mudkip",
            description: "Mudkip (water).",
            img: gen3b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Mudkip",
                  desc: "Mudkip (water).",
                  quantity: 1,
                  icon: gen3b,
                },
              ],
            },
          },
          {
            name: "Treecko",
            description: "Treecko (Grass)",
            img: gen3g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Treecko",
                  desc: "Treecko (Grass)",
                  quantity: 1,
                  icon: gen3g,
                },
              ],
            },
          },
          {
            name: "Torchic",
            description: "Torchic (Fire)",
            img: gen3r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Torchic",
                  desc: "Torchic (Fire)",
                  quantity: 1,
                  icon: gen3r,
                },
              ],
            },
          },
          {
            name: "Piplup",
            description: "Piplup (water).",
            img: gen4b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Piplup",
                  desc: "Piplup (water).",
                  quantity: 1,
                  icon: gen4b,
                },
              ],
            },
          },
          {
            name: "Turtwig",
            description: "Turtwig (Grass)",
            img: gen4g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Turtwig",
                  desc: "Turtwig (Grass)",
                  quantity: 1,
                  icon: gen4g,
                },
              ],
            },
          },
          {
            name: "Chimchar",
            description: "Chimchar (Fire)",
            img: gen4r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Chimchar",
                  desc: "Chimchar (Fire)",
                  quantity: 1,
                  icon: gen4r,
                },
              ],
            },
          },
          {
            name: "Oshawott",
            description: "Oshawott (water).",
            img: gen5b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Oshawott",
                  desc: "Oshawott (water).",
                  quantity: 1,
                  icon: gen5b,
                },
              ],
            },
          },
          {
            name: "Snivy",
            description: "Snivy (Grass)",
            img: gen5g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Snivy",
                  desc: "Snivy (Grass)",
                  quantity: 1,
                  icon: gen5g,
                },
              ],
            },
          },
          {
            name: "Tepig",
            description: "Tepig (Fire)",
            img: gen5r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Tepig",
                  desc: "Tepig (Fire)",
                  quantity: 1,
                  icon: gen5r,
                },
              ],
            },
          },
          {
            name: "Froakie",
            description: "Froakie (water).",
            img: gen6b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Oshawott",
                  desc: "Oshawott (water).",
                  quantity: 1,
                  icon: gen6b,
                },
              ],
            },
          },
          {
            name: "Chespin",
            description: "Chespin (Grass)",
            img: gen6g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Chespin",
                  desc: "Chespin (Grass)",
                  quantity: 1,
                  icon: gen6g,
                },
              ],
            },
          },
          {
            name: "Fennekin",
            description: "Fennekin (Fire)",
            img: gen6r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Fennekin",
                  desc: "Fennekin (Fire)",
                  quantity: 1,
                  icon: gen6r,
                },
              ],
            },
          },
          {
            name: "Popplio",
            description: "Popplio (water).",
            img: gen7b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Popplio",
                  desc: "Popplio (water).",
                  quantity: 1,
                  icon: gen7b,
                },
              ],
            },
          },
          {
            name: "Rowlet",
            description: "Rowlet (Grass / flying)",
            img: gen7g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Rowlet",
                  desc: "Rowlet (Grass / flying)",
                  quantity: 1,
                  icon: gen7g,
                },
              ],
            },
          },
          {
            name: "Litten",
            description: "Litten (Fire)",
            img: gen7r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Litten",
                  desc: "Litten (Fire)",
                  quantity: 1,
                  icon: gen7r,
                },
              ],
            },
          },
          {
            name: "Sobble",
            description: "Sobble (water).",
            img: gen8b,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Sobble",
                  desc: "Sobble (water).",
                  quantity: 1,
                  icon: gen8b,
                },
              ],
            },
          },
          {
            name: "Grookey",
            description: "Grookey (Grass)",
            img: gen8g,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Grookey",
                  desc: "Grookey (Grass)",
                  quantity: 1,
                  icon: gen8g,
                },
              ],
            },
          },
          {
            name: "Scorbunny",
            description: "Scorbunny (Fire)",
            img: gen8r,
            effect: {
              cost: [0],
              "inv-items": [
                {
                  name: "Scorbunny",
                  desc: "Scorbunny (Fire)",
                  quantity: 1,
                  icon: gen8r,
                },
              ],
            },
          },
          {
            name: "In Region, Common",
            description:
              "Applies to any Pokémon that can be found easily in the wild [Encounter rate < 20%].",
            img: pokéball,
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Pokémon",
                  desc: "Common Pokémon.",
                  quantity: 1,
                  icon: pokéballIcon,
                },
              ],
            },
          },
          {
            name: "In Region, Uncommon",
            description:
              "Applies to any Pokémon that can be found with difficulty in the wild [Encounter rate 10-15%].",
            img: pokéball,
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Pokémon",
                  desc: "Uncommon Pokémon.",
                  quantity: 1,
                  icon: pokéballIcon,
                },
              ],
            },
          },
          {
            name: "In Region, Rare",
            description:
              "Applies to any Pokémon in region with a low encounter rate [Encounter rate 5%].",
            img: pokéball,
            effect: {
              cost: [150],
              "inv-items": [
                {
                  name: "Pokémon",
                  desc: "Common Pokémon.",
                  quantity: 1,
                  icon: pokéballIcon,
                },
              ],
            },
          },
          {
            name: "Out of Region +Hidden Ability",
            description:
              "Applies to Pokémon that cannot be caught in region. Also applies to any Pokémon with it's hidden ability.",
            img: pokéball,
            effect: {
              cost: [200],
              "inv-items": [
                {
                  name: "Pokémon",
                  desc: "Common Pokémon.",
                  quantity: 1,
                  icon: pokéballIcon,
                },
              ],
            },
          },
        ],
      },
      {
        name: "5/ Starter Modifiers.",
        description: "Your starter might be no ordinary starter.",
        style: "smallboxes",
        buy: {
          unique: true,
          max: 1,
        },
        choices: [
          {
            name: "Shiny",
            description:
              "Your starter is a shiny, it's entirely cosmetic, but it looks nice.",
            effect: {
              cost: [50],
              misc: [
                {
                  key: "Details",
                  name: "Starter-color",
                  desc: "Shiny.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Advanced Move",
            description:
              "Your starter knows a move only it's evolution should be able to learn.",
            effect: {
              cost: [100],
              misc: [
                {
                  key: "Details",
                  name: "Starter-moves",
                  desc: "Knows Advanced moves.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Egg move",
            description:
              "Your starter knows a move it should only learn via egg breeding.",
            effect: {
              cost: [50],
              misc: [
                {
                  key: "Details",
                  name: "Starter-egg",
                  desc: "Knows Bred-in moves.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Mental Bond",
            description:
              "You and Your starter share both emotions & thoughspeech via a telepathic link.",
            effect: {
              cost: [50],
              misc: [
                {
                  key: "Details",
                  name: "Mental Bond",
                  desc: "Linked mentally with starter.",
                  quantity: 1,
                },
              ],
            },
          },
        ],
      },
      {
        name: "6/ Skills & Abilities.",
        description:
          "Character customization on steroids. you want superpowers? you got superpowers. have fun!, some may already be applied, depends on your identity.",
        style: "lines",
        buy: {
          unique: true,
          max: 10,
        },
        choices: [
          {
            name: "Physical Fitness",
            description:
              "You gain a body that is healthy and strong. Not captain america strong, but close. Free: small town.",
            effect: {
              cost: [100],
              "body-ability": {
                name: "Physical Fitnes",
                power: "Healthy and strong.",
              },
            },
          },
          {
            name: "Survival Training",
            description:
              "You gain an innate knowledge of survival skills. You could survive just about anywhere. Free: hermit",
            effect: {
              cost: [100],
              "body-ability": {
                name: "Survival Training",
                power: "innate knowledge of survival skills.",
              },
            },
          },
          {
            name: "Free Running",
            description:
              "You can pull off acrobatic feats very few humans and not many pokemon could match. Free: city life",
            effect: {
              cost: [100],
              "body-ability": {
                name: "Free Running",
                power: "pull off acrobatic feats.",
              },
            },
          },
          {
            name: "Combat Training",
            description:
              "You gain mastery of marine hand to hand combat. You can also keep your cool in a fight.",
            effect: {
              cost: [50],
              "body-ability": {
                name: "Combat Training",
                power: "calm & capable.",
              },
            },
          },
          {
            name: "Mechanic",
            description:
              "You become much more adept with a toolbox. You can fix or improve most machines.",
            effect: {
              cost: [200],
              "body-ability": {
                name: "Mechanic",
                power: "can fix or improve most machines.",
              },
            },
          },
          {
            name: "Ranger",
            description:
              "You gain insight into the instincts of wild pokemon, as well as tracking skills.",
            effect: {
              cost: [200],
              "body-ability": {
                name: "Ranger",
                power: "wild instincts, tracking skills.",
              },
            },
          },
          {
            name: "Technician",
            description:
              "You are very handy with most forms of electronics, from the pc to the pokeball.",
            effect: {
              cost: [200],
              "body-ability": {
                name: "Technician",
                power: "fix electronics.",
              },
            },
          },
          {
            name: "Blend In",
            description:
              "You can easily blend in to a crowd, hide in plain sight, or lose someone following you.",
            effect: {
              cost: [200],
              "body-ability": {
                name: "Blend In",
                power: "hide in plain sight.",
              },
            },
          },
          {
            name: "Aura",
            description:
              "You gain the ability to manifest your aura. you can sense emotions, create barriers, and throw aura spheres. Your powers increase with training but cap equivalent to a lucario.",
            effect: {
              cost: [500],
              "body-ability": {
                name: "Aura",
                power:
                  "Sense emotions, create barriers, and throw aura spheres.",
              },
            },
          },
          {
            name: "Pokéglot",
            description:
              "You gain the incredibly rare ability of understanding pokemon speech. They will be much more willing to hold a conversation with you, but that doesn't mean they have to like you.",
            effect: {
              cost: [500],
              "body-ability": {
                name: "Pokéglot",
                power: "understand pokemon speech.",
              },
            },
          },
          {
            name: "Psionics",
            description:
              "You gain psychic powers like telekinesis and telepathy. You still can't understand your pokemon but can issue them orders via telepathy. No mind reading. Skill cap is equal to a gardevoir.",
            effect: {
              cost: [500],
              "body-ability": {
                name: "Psionics",
                power: "psychic powers (telekinesis, telepathy).",
              },
            },
          },
          {
            name: "Savant",
            description:
              "Your mind is enhanced, granting you perfect memory, calculator-like mental math, and better spatial awareness. Your aim with a firearm is better than annie oakley and simo hayha combined.",
            effect: {
              cost: [500],
              "body-ability": {
                name: "Savant",
                power: "perfect memory, mental math, spatial awareness.",
              },
            },
          },
          {
            name: "Champ in the making",
            description:
              "You might just have what it takes to catch em all! You're and expert at training both teams and individuals, managing team dynamics, and working out social issues between teammates, both Pokémon abd human. Yu can make teamwork work.",
            effect: {
              cost: [200],
              "body-ability": {
                name: "Champ",
                power: "perfect team manager.",
              },
            },
          },
        ],
      },
      {
        name: "6/ Gear.",
        description:
          "Welcome to my humble little shop of amazing gear that you aren't getting anywhere else. find anything interesting?",
        style: "boxes",
        buy: {
          unique: false,
          max: 100,
        },
        choices: [
          {
            name: "3x Master Balls",
            description: "Catch Pokémon without fail, cannot sell.",
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Master Balls",
                  desc: "100% success, cannot sell.",
                  quantity: 3,
                },
              ],
            },
          },
          {
            name: "HM Collection",
            description: "One of every HM, can't sell.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "HM Collection",
                  desc: "One of every HM.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "50k Pokedollars",
            description: "Can buy stuff.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Pokedollars",
                  desc: "Can buy stuff.",
                  quantity: 50000,
                },
              ],
            },
          },
          {
            name: "Bicycle",
            description:
              "Collapsible, 2 speed, can fit in backpack, can't sell.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Bicycle",
                  desc: "Collapsible, 2 speed.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Motorcycle",
            description: "fast, inifnite fuel.",
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Motorcycle",
                  desc: "fast, inifnite fuel.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Helicopter",
            description: "fastest, ferry across regions.",
            effect: {
              cost: [300],
              "inv-items": [
                {
                  name: "Helicopter",
                  desc: "fastest, ferry across regions.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Parachute",
            description: "small, redeployable.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Parachute",
                  desc: "small, redeployable.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Wingsuit",
            description:
              "Can activate while in freefall, hard to stop, best pack aa parachute.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Wingsuit",
                  desc: "small, hard to stop.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Rappelling Rig",
            description:
              "Everthing neede to climb down a cliff. Self-detaching for re-use",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Rappelling Rig",
                  desc: "climb down a cliff, re-usable.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Rebreather",
            description: "Breath underwater, toxic enviroments, infinite use",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Rebreather",
                  desc: "underwater, toxic enviroments, infinite use.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Laptop",
            description: "Access in-world internet, fast, solar powered",
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Laptop",
                  desc: "internet, fast, solar powered.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Thrust Pack",
            description:
              "Titanfall style, mini jet/thruster pack, double jump and wall running.",
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Thrust Pack",
                  desc: "double jump, wall running.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Medical Kit",
            description:
              "Stabilizes critcal injury, still require Pokémon centre.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Medical Kit",
                  desc: "Stabilizes critcal injury.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Welding Torch",
            description:
              "For when HM Cut isn't enough, cut up to 2 inches, fuel limited but regenerates.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Welding Torch",
                  desc: "2 inch cut, slow refuel.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Hypervisor",
            description:
              "Sunglasses with LED overlay, wall x-ray and pokémon status monitoring. lasts 20s, 1 min recharge",
            effect: {
              cost: [200],
              "inv-items": [
                {
                  name: "Hypervisor",
                  desc: "wall x-ray, pokémon status. 20s, 1min charge.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Echorecorder",
            description:
              "Record surrounding for up to two hours, replay via hologram, good for battle reviews.",
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Echorecorder",
                  desc: "Record 2h, review via hologram.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Headsets",
            description:
              "Universal Pokémon headset, issue orders in 10 mile range, works in reverse with Pokéglot.",
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Headsets",
                  desc: "Remote orders, 10 mile range.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Capture Styler",
            description:
              "Temporarily capture wild pokémon, they won't batlle, but can aid you once.",
            effect: {
              cost: [200],
              "inv-items": [
                {
                  name: "Capture Styler",
                  desc: "Temp capture, no battle.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Collapsible Baton",
            description: "Spring loaded, useful against humans.",
            effect: {
              cost: [50],
              "inv-items": [
                {
                  name: "Collapsible Baton",
                  desc: "Anti human, personal defence.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Flak Jacket",
            description:
              "Medium weight, stops small arms and most pokémon attacks.",
            effect: {
              cost: [100],
              "inv-items": [
                {
                  name: "Collapsible Baton",
                  desc: "small arms & pokémon attacks.",
                  quantity: 1,
                },
              ],
            },
          },
          {
            name: "Tranquilizer Gun",
            description:
              "Air powered. knocks out humans and most pokémon, 200 rounds.",
            effect: {
              cost: [200],
              "inv-items": [
                {
                  name: "Tranquilizer Gun & Ammo",
                  desc: "humans and most pokémon.",
                  quantity: 200,
                },
              ],
            },
          },
          {
            name: "Handgun",
            description:
              "Glock 17, 9mm, semi-auto, 2 magazines each 17 rounds.",
            effect: {
              cost: [200],
              "inv-items": [
                {
                  name: "Handgun & Ammo",
                  desc: "Glock 17, 9mm, 2 mags.",
                  quantity: 500,
                },
              ],
            },
          },
          {
            name: "Sniper Rifle",
            description:
              "M110 SASS 7.62, Nato sniper with scope, 1 magazine 20 rounds.",
            effect: {
              cost: [400],
              "inv-items": [
                {
                  name: "Sniper Rifle & Ammo",
                  desc: "M110 SASS, 1 mag 20 rounds.",
                  quantity: 250,
                },
              ],
            },
          },
          {
            name: "Snag Machine",
            description:
              "Can steal Pokémon from other trainers, highly illegal, Pokémon do not like being stolen.",
            effect: {
              cost: [600],
              "inv-items": [
                {
                  name: "Snag Machine",
                  desc: "Steal Pokémon, illegal.",
                  quantity: 1,
                },
              ],
            },
          },
        ],
      },
      {
        name: "7/ Flaws & Future.",
        description:
          "Flaws override skilss & identity. You can take a few flaws to get more choice points in return. only two though, don't want to be too minmaxed, do we?",
        style: "lines",
        buy: {
          unique: true,
          max: 2,
        },
        choices: [
          {
            name: "Swarmed",
            description:
              "A zubat swarm has taken to following you and attacking at random times. they are easily beaten, but cannot be caught, and no matter how many times you defeat them they come back for another round.",
            effect: {
              cost: [-100],
              "char-drawback": {
                name: "Swarmed",
                desc: "Hunted continuosly by Zubats.",
              },
            },
          },
          {
            name: "Crippled",
            description:
              "Some accident in your past has left you with a leg amputated below the knee. you have a prosthetic leg to replace it, but it has its own issues. mechanical prosthetics are decades out no matter what you do.",
            effect: {
              cost: [-100],
              "char-drawback": {
                name: "Crippled",
                desc: "Low tech prosthetic leg.",
              },
            },
          },
          {
            name: "Silenced",
            description:
              "A birth defect has left you incapable of speech. you can still laugh and make noises, but speaking is no longer an option. sign language would be a useful tool to have here, as would psionics.",
            effect: {
              cost: [-100],
              "char-drawback": {
                name: "Silenced",
                desc: "incapable of speech.",
              },
            },
          },
          {
            name: "Scared",
            description:
              "A tragic accident in your past has left you deathly afraid of pokémon. you become nervous around caught and tamed pokémon, and wild ones can induce fear and the fight or flight response. Your starter is exempt.",
            effect: {
              cost: [-200],
              "char-drawback": {
                name: "Scared",
                desc: "deathly afraid of pokémon.",
              },
            },
          },
          {
            name: "Cursed",
            description:
              "A ghost pokémon has taken offense to some percieved slight and cursed you with eternal bad luck. you're not in mortal danger, but catch rates are reduced and things tend to not go smooth with you around.",
            effect: {
              cost: [-200],
              "char-drawback": {
                name: "Cursed",
                desc: "very bad luck.",
              },
            },
          },
          {
            name: "Marked",
            description:
              "Something in your past possibly involving your family has caused the local criminal group to mark you as a target. They will relentlessly hunt you down and try to steal away your pokemon.",
            effect: {
              cost: [-200],
              "char-drawback": {
                name: "Marked",
                desc: "Hunted by local criminals, steal pokémon.",
              },
            },
          },
          {
            name: "Wanted",
            description:
              "For one reason or another you are number one on the most wanted list for every region in the world. If the cops spot you, they will try and hunt you down. avoid settlements or learn how to stay hidden.",
            effect: {
              cost: [-300],
              "char-drawback": {
                name: "Wanted",
                desc: "Hunted by law enforcement.",
              },
            },
          },
          {
            name: "Hunted",
            description:
              "A side effect of my sending you into this world has caused a legendary pokemon to take notice. If it finds you it will kill you, and it can't be caught even with a master ball. you better be able to fend off a god.",
            effect: {
              cost: [-300],
              "char-drawback": {
                name: "Hunted",
                desc: "Hunted by Legendary pokémon, intends to kill.",
              },
            },
          },
          {
            name: "Damned",
            description:
              "I don't know what you did but it looks like darkrai has taken to messing with your mind. Expect horrible sanity-distorting nightmares to plague your sleep at least once a week, probably more.",
            effect: {
              cost: [-300],
              "char-drawback": {
                name: "Damned",
                desc: "Extreme, sanity damaging nightmares.",
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
