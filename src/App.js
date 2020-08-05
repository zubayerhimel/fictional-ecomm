import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Shop from "./components/shop/Shop";
import Header from "./components/header/Header";
import AuthenticatePage from "./components/authenticate_page/AuthenticatePage";
import { auth, createUserProfileDocument } from "./utils/FirebaseAuth";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/auth" component={AuthenticatePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
