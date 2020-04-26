import React from "react";
import { useLocalStore } from "mobx-react-lite";
import data from "../../cyoadata";

export const effectKeys = {
  profImg: "char-profimg", // number
  age: "body-age", // string
  race: "body-race", // string
  background: "char-background", // [name]string, [desc]string
  challenge: "char-challenge", // [name]string, [desc]string
  abilities: "body-ability", // [name]string, [power]string
  advDrawback: "char-advdrawback", // array [name]string, [desc]string, [quantity]string, [icon]img-Base64.jpg
  items: "inv-items", // must be an array
  points: "cost", // number
};

export function createCharStore() {
  return {
    profImg: null,
    name: "None", // set only by user
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
