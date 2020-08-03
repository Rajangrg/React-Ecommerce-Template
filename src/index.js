import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider/StateProvider";
import { InitialState, Reducer } from "./Reducer/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
