import React from "react";
import { useLocalStore } from "mobx-react-lite";
import data from "../../cyoadata";

export function createCharStore() {
  return {
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
    advDrawback: [
      {
        name: "hunter-gatherer",
        adv: "Skilled hunter, knows the land, people are more trusting",
        drawback:
          "ignoble, nobility avoid/dislike, viewed as unimportant, lack in manners, offend easily",
      },
      {
        name: "warrior",
        adv: "Strong, crafty and wise in battle, capable with arms",
        drawback:
          "ignoble, nobility avoid/dislike, viewed as unimportant, lack in manners, offend easily",
      },
    ],
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
