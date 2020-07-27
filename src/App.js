import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
