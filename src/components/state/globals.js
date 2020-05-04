import React from "react";
import { useLocalStore } from "mobx-react-lite";
import BuildTextObj from "../../filebreakdown/htmlbits";
import { createFile } from "./exportTools";
import Data from "../../filebreakdown/jsontest";

export function createGlobalStore() {
  return {
    isShowingChoiceEffects: true,
    showChoiceEffects() {
      this.isShowingChoiceEffects = true;
    },
    hideChoiceEffects() {
      this.isShowingChoiceEffects = false;
    },
    buildHtml() {
      // const b64String =
      //   BuildTextObj.pre + BuildTextObj.json + BuildTextObj.post;
      // const decodedData = window.atob(b64String);
      const decodedData =
        window.atob(BuildTextObj.pre) +
        JSON.stringify(Data) +
        window.atob(BuildTextObj.post);
      createFile(decodedData, "stringjoinbuilt.html", "	text/html");
    },
  };
}

const GlobalStoreContext = React.createContext();

export const GlobalStoreProvider = ({ children }) => {
  const store = useLocalStore(createGlobalStore);
  return (
    <GlobalStoreContext.Provider value={store}>
      {children}.{" "}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalDataStore = () => {
  const store = React.useContext(GlobalStoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
