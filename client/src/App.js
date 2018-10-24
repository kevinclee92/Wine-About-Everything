import React, { Component } from "react";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import Wine101 from "./pages/Wine101"
import API from "./utils/API";


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      user: {}
    }
  }

  updateUser = userObject => {
    this.setState(userObject)
    console.log('Updated User state', this.state)
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    API.getUser("1").then(response => {
      console.log('Get user response: ')
       console.log(response.data)
      if (response.data !== null && response.data !== undefined && response.data !== "NoAuth") {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.username,
          user: response.data
        })
      } else if (response.data === null || response.data === undefined || response.data === "NoAuth"){
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          user: {}
        })
      }
    })
  }

  render() {
    return (

      <Router>
        <div>
            <Switch>
              <Route exact path="/" render={(props) => <HomePage updateUser={this.updateUser} {...props} />}/>
              <Route path="/signup" render={props => <RegisterPage 
               updateUser={this.updateUser}
              {...props}/>}/>
              <Route path="/user" render={(props) => <UserPage updateUser={this.updateUser} user={this.state.user} {...props}/>} />
              <Route path="/search" render={(props) => <SearchPage updateUser={this.updateUser} user={this.state.user} {...props}/>} />
              {/* <Route path="/notes" component={Detail} /> */}
              <Route exact path="/notes/:id" component={Detail} />
              <Route path="/wine101" render={(props) => <Wine101 {...props} updateUser={this.updateUser}/>} />
              <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);
}}

export default App;
