import React, { Component } from "react";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchFormWine from "./components/SearchFormWine";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import Notes from "./pages/Notes";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import Wine101 from "./pages/Wine101"


class App extends Component {

  state = {
    user: {
      loggedIn: false,
      username: null,
    }
  }

  // fetchUser = () => {
  //   return true
  // }

  // componentDidMount() {
  //   this.fetchUser()
  //   .then(user => this.setState({ user: { loggedIn: true }}))
  // }

  render() {
    return (

      <Router>
        <div>
            <Switch>
              <Route exact path="/" render={props => <HomePage {...props}/>}/>
              <Route path="/signup" render={props => <RegisterPage {...props}/>}/>
              <Route path="/user" component={UserPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/notes" component={Notes} />
              <Route exact path="/notes/:id" component={Detail} />
              <Route path="/wine101" component={Wine101} />
              <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);
}}

export default App;
