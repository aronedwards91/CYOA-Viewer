import React from "react";
import { useLocalStore } from "mobx-react-lite";
import data from "../../cyoadata";

export function createCharStore() {
  return {
    profImg: null,
    name: "set",
    setName(newName) {
      this.name = newName;
    },
    age: 0,
    setAge(newAge) {
      this.age = newAge;
    },
    race: "Human",
    setRace(newRace) {
      this.race = newRace;
    },
    background: "none selected",
    setBackground(newBackground) {
      this.background = newBackground;
    },
    challenge: {
      name: null,
      desc: null,
    },
    setChallenge(newChallenge) {
      this.challenge = newChallenge;
    },
    abilities: [],
    addAbility(newAbility) {
      this.abilities.push(newAbility);
    },
    addAbilityArray(abililtyArray) {
      this.abilities.concat(abililtyArray);
    },
    removeAbility(arrayIndex) {
      this.abilities.splice(arrayIndex, 1);
    },
    advDrawback: [],
    addAdvDrawback(newAdvDrawback) {
      this.advDrawback.push(newAdvDrawback);
    },
    addAdvDrawbackArray(advDrawbackArray) {
      this.advDrawback.concat(advDrawbackArray);
    },
    removeAdvDrawback(arrayIndex) {
      this.advDrawback.splice(arrayIndex, 1);
    },
    items: [
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
    addItem(newItem) {
      this.items.push(newItem);
    },
    addItemArray(itemArray) {
      this.items.concat(itemArray);
    },
    removeItem(arrayIndex) {
      this.items.splice(arrayIndex, 1);
    },
    points: data.charSetup.choicePoints,
    addPoints(number) {
      this.points = this.points + number;
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
