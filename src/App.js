import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import Admin from "./components/Main/Admin";
import Employee from "./components/Main/Employee";
// import AddEmp from "./components/Main/AddEmp";

class App extends Component {
    // componentDidMount() {
    //
    // }
  render() {
    return (
      <Router>
        <div className="App">

            <Route exact path="/" render={() => (<Redirect to="/signin" />)} />

          <Route path="/projects" component={Sidebar} />

          <Route path="/projects" component={Main} />

          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />

            <Route path="/employees/" exact component={Employee} />


        </div>
      </Router>
    );
  }
}

export default App;
