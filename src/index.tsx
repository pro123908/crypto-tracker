import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import MuiTheme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiTheme>
        <Router />
      </MuiTheme>
    </Provider>
  </React.StrictMode>
);
