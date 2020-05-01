import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "mobx-react-lite/batchingForReactDom";
import {Helmet} from "react-helmet";

import GlobalStyle from "./GlobalStyles";
import data from "./cyoadata";
import Layout from "./components/Layout";
import { CharStoreProvider } from "./components/state/character";
import { GlobalStoreProvider } from "./components/state/globals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalStoreProvider>
      <CharStoreProvider>
        <Helmet>
          {data.styling.themeing.fontIsLink && (
            <link href={data.styling.themeing.font} rel="stylesheet" />
          )}
        </Helmet>
        <Layout />
      </CharStoreProvider>
    </GlobalStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
