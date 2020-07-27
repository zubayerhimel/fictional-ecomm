import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Shop from "./components/shop/Shop";
import Header from "./components/header/Header";
import AuthenticatePage from "./components/authenticate_page/AuthenticatePage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={AuthenticatePage} />
      </Switch>
    </div>
  );
}

export default App;
