import React from "react";
import { useLocalStore } from "mobx-react-lite";

export function createCharStore() {
  return {
    name: "test mobx worked.",
    setName(newName) {
      this.name = newName;
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
