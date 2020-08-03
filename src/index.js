import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider/StateProvider";
import { InitialState, Reducer } from "./Reducer/Reducer";

ReactDOM.render(
  <StateProvider initialState={InitialState} reducer={Reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
