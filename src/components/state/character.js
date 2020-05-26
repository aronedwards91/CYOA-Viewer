import React from "react";
import { useLocalStore } from "mobx-react-lite";
import data from "../../cyoadata";
import { createFileFromObj } from "./exportTools";

export const effectKeys = {
  // Unique, only added to unique buy choices
  profImg: "char-profimg", // imgfile
  race: "body-race", // string
  background: "char-background", // String
  challenge: "char-challenge", // [name]string, [desc]string
  abilities: "body-ability", // [name]string, [power]string
  advDrawback: "char-advdrawback", // [name]string, [adv]string, [drawback]string
  drawback: "char-drawback", // // [name]string, [desc]string
  // Multiple - have [quantity] number
  allies: "char-allies", // [name]string, [desc]string
  items: "inv-items", // Array, [name]string, [desc]string [icon]img-Base64.jpg
  misc: "misc", // [key] string (effects will be collected under misc), [name]String, [desc]String
  // Not exported - costing logic
  points: "cost", // number
  // Todo / not yet supported
  discountid: "discountid", // String, discounts check if selected
  discount: "discount", // String
  discountVal: "discountVal", // number
};

export function createCharStore() {
  return {
    profImg: null,
    setProfImg(newProfImg) {
      this.profImg = newProfImg;
    },
    resetProfImg() {
      this.profImg = null;
    },
    name: "Assign", // set only by user
    setName(newName) {
      this.name = newName;
    },
    age: 0,
    setAge(newAge) {
      this.age = newAge;
    },
    resetAge() {
      this.age = 0;
    },
    race: "Trainer",
    setRace(newRace) {
      this.race = newRace;
    },
    resetRace() {
      this.race = "Human";
    },
    background: "none selected",
    setBackground(newBackground) {
      this.background = newBackground;
    },
    resetBackground() {
      this.background = "none selected";
    },
    challenge: {
      name: null,
      desc: null,
    },
    setChallenge(newChallenge) {
      this.challenge = newChallenge;
    },
    resetChallenge() {
      this.challenge = {
        name: null,
        desc: null,
      };
    },
    abilities: [],
    addAbility(newAbility) {
      this.abilities.push(newAbility);
    },
    removeAbility(removedAbility) {
      const indexOfRemoved = this.abilities.findIndex(
        (i) => i.name === removedAbility.name
      );
      this.abilities.splice(indexOfRemoved, 1);
    },

    advDrawback: [],
    addAdvDrawback(newAdvDrawback) {
      this.advDrawback.push(newAdvDrawback);
    },
    removeAdvDrawback(removedAdvDrawback) {
      const indexOfRemoved = this.advDrawback.findIndex(
        (i) => i.name === removedAdvDrawback.name
      );
      this.advDrawback.splice(indexOfRemoved, 1);
    },
    drawbacks: [],
    addDrawback(newDrawback) {
      this.drawbacks.push(newDrawback);
    },
    removeDrawback(removedDrawback) {
      const indexOfRemoved = this.drawbacks.findIndex(
        (i) => i.name === removedDrawback.name
      );
      this.drawbacks.splice(indexOfRemoved, 1);
    },

    // Multiple
    allies: [],
    addAlly(newAlly) {
      const indexOfExisting = this.allies.findIndex(
        (i) => i.name === newAlly.name
      );
      if (indexOfExisting === -1) {
        this.allies.push(newAlly);
      } else {
        this.allies[indexOfExisting].quantity =
          newAlly.quantity + this.allies[indexOfExisting].quantity;
      }
    },
    removeAlly(removedAlly) {
      const indexOfRemoved = this.allies.findIndex(
        (i) => i.name === removedAlly.name
      );
      if (this.allies[indexOfRemoved].quantity > removedAlly.quantity) {
        this.allies[indexOfRemoved].quantity =
          this.allies[indexOfRemoved].quantity - removedAlly.quantity;
      } else {
        this.allies.splice(indexOfRemoved, 1);
      }
    },

    items: [],
    addItemArray(itemsArray) {
      itemsArray.forEach((item) => {
        const indexOfRemoved = this.items.findIndex(
          (i) => i.name === item.name
        );
        if (indexOfRemoved === -1) {
          this.items.push(item);
        } else {
          this.items[indexOfRemoved].quantity =
            this.items[indexOfRemoved].quantity + item.quantity;
        }
      });
    },
    removeItemArray(removedItemsArr) {
      const OldArrayClone = this.items.splice(0);
      removedItemsArr.forEach((item) => {
        const indexOfRemoved = OldArrayClone.findIndex(
          (i) => i.name === item.name
        );
        if (OldArrayClone[indexOfRemoved].quantity > item.quantity) {
          OldArrayClone[indexOfRemoved].quantity =
            OldArrayClone[indexOfRemoved].quantity - item.quantity;
        } else {
          OldArrayClone.splice(indexOfRemoved, 1);
        }
      });
      this.items = OldArrayClone;
    },

    misc: {},
    addMisc(newMisc) {
      if (newMisc.key) {
        if (this.misc[newMisc.key]) {
          const indexOfExisting = this.misc[newMisc.key].findIndex(
            (i) => i.name === newMisc.name
          );
          if (indexOfExisting === -1) {
            this.misc[newMisc.key].push(newMisc);
          } else {
            this.misc[newMisc.key][indexOfExisting].quantity =
              newMisc.quantity +
              this.misc[newMisc.key][indexOfExisting].quantity;
          }
        } else {
          this.misc[newMisc.key] = [newMisc];
        }
      } else {
        console.error("misc effect invalid, must have a key");
      }
    },
    removeMisc(removeMisc) {
      if (removeMisc.key && this.misc[removeMisc.key].length > 0) {
        const indexOfRemoved = this.misc[removeMisc.key].findIndex(
          (i) => i.name === removeMisc.name
        );
        const currentQuantity = this.misc[removeMisc.key][indexOfRemoved]
          .quantity;
        if (currentQuantity > removeMisc.quantity) {
          this.misc[removeMisc.key][indexOfRemoved].quantity =
            currentQuantity - removeMisc.quantity;
        } else if (indexOfRemoved >= 0) {
          this.misc[removeMisc.key].splice(indexOfRemoved, 1);
        }
      }
    },

    // Costing, discounts
    purchasing: data.charSetup.purchasing,
    addPurchase(data) {
      if (this.purchasing.length > 0) {
        const arrayClone = this.purchasing.splice(0);
        if (Array.isArray(data)) {
          data.forEach((cost, index) => {
            arrayClone[index].amount -= cost;
          });
        } else {
          arrayClone[0].amount -= data;
        }
        this.purchasing = arrayClone;
      }
    },
    removePurchase(data) {
      if (this.purchasing.length > 0) {
        if (Array.isArray(data)) {
          data.forEach((cost, index) => {
            this.purchasing[index].amount += cost;
          });
        } else {
          this.purchasing[0].amount += data;
        }
      }
    },

    // Todo: will require larger rewrite due to complexity
    discountIds: ["test"],
    addDiscountId(discountId) {
      this.discountIds.push(discountId);
    },
    removeDiscountId(discountId) {
      const index = this.discountIds.indexOf(discountId);
      if (index >= 0) {
        this.discountIds.splice(index, 1);
      }
    },
    checkDiscountId(discountId) {
      return this.discountIds.indexOf(discountId) >= 0;
    },

    // Tools
    createbackup() {
      const dataObj = {
        cyoa: data.cyoa.header.title,
        name: this.name,
        age: this.age,
        profImg: this.profImg,
        subHeader: data.cyoa.header.subHeader || "",
        cyoaAppVersion: data.appData.appversion,
        setting: data.cyoa.intro.introText,
        logo: data.cyoa.header.logo,
        styling: {
          colors: {
            maintext: data.styling.colors.maintext,
            bgA: data.styling.colors.bgA,
            bgB: data.styling.colors.bgB,
            mainBorder: data.styling.colors.mainBorder,
          },
          font: {
            fontData: data.styling.themeing.font,
            fontIsLink: data.styling.themeing.fontIsLink,
            fontName: data.styling.themeing.fontName,
          },
          themeing: {
            sectionCornerRadius: data.styling.themeing.sectionCornerRadius,
            bordersWidth: data.styling.themeing.bordersWidth,
            borderStyle: data.styling.themeing.borderStyle,
          },
        },
      };
      dataObj[effectKeys.race] = this.race;
      dataObj[effectKeys.background] = this.background;
      dataObj[effectKeys.challenge] = this.challenge;
      dataObj[effectKeys.allies] = this.allies;
      dataObj[effectKeys.abilities] = this.abilities;
      dataObj[effectKeys.advDrawback] = this.advDrawback;
      dataObj[effectKeys.drawback] = this.drawbacks;
      dataObj[effectKeys.items] = this.items;
      dataObj[effectKeys.misc] = this.misc;

      const filename = this.name !== "Assign" ? this.name : "backup";
      createFileFromObj(dataObj, filename);
    },
  };
}

const CharStoreContext = React.createContext();

export const CharStoreProvider = ({ children }) => {
  const store = useLocalStore(createCharStore);
  return (
    <CharStoreContext.Provider value={store}>
      {children}
    </CharStoreContext.Provider>
  );
};

export const useCharDataStore = () => {
  const store = React.useContext(CharStoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
