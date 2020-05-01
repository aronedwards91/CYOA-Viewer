import React from "react";
import { useLocalStore } from "mobx-react-lite";
import data from "../../cyoadata";
import {createFileFromObj} from "./exportTools";

export const effectKeys = {
  profImg: "char-profimg", // imgfile
  race: "body-race", // string
  background: "char-background", // [name]string, [desc]string
  challenge: "char-challenge", // [name]string, [desc]string
  allies: "char-allies", // [name]string, [desc]string
  abilities: "body-ability", // [name]string, [power]string
  advDrawback: "char-advdrawback", // [name]string, [adv]string, [drawback]string
  drawback: "char-drawback", // // [name]string, [desc]string
  items: "inv-items", // must be an array , [icon]img-Base64.jpg
  points: "cost", // number
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
    race: "Human",
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
    allies: [],
    addAlly(newAlly) {
      this.allies.push(newAlly);
    },
    removeAlly(removedAlly) {
      const indexOfRemoved = this.allies.findIndex(
        (i) => i.name === removedAlly.name
      );
      this.allies.splice(indexOfRemoved, 1);
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
    items: [],
    addItemArray(itemsArray) {
      itemsArray.forEach((item) => {
        const indexOfRemoved = this.items.findIndex(
          (i) => i.name === item.name
        );
        if (indexOfRemoved === -1) {
          this.items.push(item);
        } else {
          this.items[indexOfRemoved].quantity++;
        }
      });
    },
    removeItemArray(removedItemsArr) {
      const OldArrayClone = this.items.splice(0);
      removedItemsArr.forEach((item) => {
        const indexOfRemoved = OldArrayClone.findIndex(
          (i) => i.name === item.name
        );
        OldArrayClone.splice(indexOfRemoved, 1);
      });
      this.items = OldArrayClone;
    },
    points: data.charSetup.choicePoints,
    addPoints(number) {
      this.points = this.points + number;
    },
    removePoints(number) {
      this.points = this.points - number;
    },
    createbackup() {
      const dataObj = {
        cyoa: data.cyoa.header.title,
        name: this.name,
        age: this.age,
        profImg: this.profImg,
        subHeader: data.cyoa.header.subHeader || '',
        cyoaAppVersion: data.appData.appversion, 
        setting: data.cyoa.intro.introText,
        logo: data.cyoa.header.logo,
      };
      dataObj[effectKeys.race] = this.race;
      dataObj[effectKeys.background] = this.background;
      dataObj[effectKeys.challenge] = this.challenge;
      dataObj[effectKeys.allies] = this.allies;
      dataObj[effectKeys.abilities] = this.abilities;
      dataObj[effectKeys.advDrawback] = this.advDrawback;
      dataObj[effectKeys.drawback] = this.drawbacks;
      dataObj[effectKeys.items] = this.items;

      const filename = this.name !== 'Assign' ? this.name : 'backup';
      createFileFromObj(dataObj, filename);
    }
  };
}

const CharStoreContext = React.createContext();

export const CharStoreProvider = ({ children }) => {
  const store = useLocalStore(createCharStore);
  return (
    <CharStoreContext.Provider value={store}>
      {children}.{" "}
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
