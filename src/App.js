import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import Admin from "./components/Main/Admin";
import Employee from "./components/Main/Employee";
import EmployeeClient from "./components/Main/EmployeeClient";
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

            {/*<Route path="/employees/" component={Sidebar} />*/}
            <Route path="/clients/" component={Sidebar} />
            <Route path="/clients/" component={Main} />

            <Route path="/signin/" component={SignIn} />
            <Route path="/profile/" component={Profile} />
            <Route path="/admins/" component={Admin} />

            <Route path="/employees/" component={EmployeeClient} />


        </div>
      </Router>
    );
  }
}

export default App;
