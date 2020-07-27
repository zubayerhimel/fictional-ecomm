import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";

const HatsPage = () => {
  return (
    <div>
      <h1> Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
