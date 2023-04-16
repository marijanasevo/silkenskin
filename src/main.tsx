import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/store";

import App from "./App";

import "normalize.css";
import "./global-styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/*</PersistGate>*/}
    </Provider>
  </React.StrictMode>
);
