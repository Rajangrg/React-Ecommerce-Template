import React from "react";
import "./App.css";

//component
import Header from "./components/Header/Header";
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//container
import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import Checkout from "./container/Checkout/Checkout";
import  Footer  from "./container/Footer/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
