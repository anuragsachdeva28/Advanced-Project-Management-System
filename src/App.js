import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./components/SignIn/SignIn";
import Page404 from "./404Page"
import Profile from "./components/Profile/Profile";
import Admin from "./components/Main/Admin";
import Employee from "./components/Main/Employee";
import EmployeeClient from "./components/Main/EmployeeClient";
import AddAdmin from "./components/Main/AddAdmin";
import SignInForm from "./components/SignIn/SignInForm";
import {connect} from "react-redux";
// import AddEmp from "./components/Main/AddEmp";

class App extends Component {
    // componentDidMount() {
    //
    // }
  render() {
      console.log("app.js", this.props.auth);
    return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/signin" />)} />



                {/*<Route path="/employees/" component={Sidebar} />*/}
                <Route path="/clients/" component={Sidebar} />
                <Route path="/admins/" component={Sidebar} />


                <Route path="/signin/" component={SignIn} />

                <Route path="/profile/" component={Profile} />



                <Route path="/employees/" component={EmployeeClient} />
                <Route component={Page404} />

            </Switch>
            <Route path="/clients/" component={Main} />
            <Route path="/admins/" exact component={Admin} />
            <Route path={"/admins/add/"} component={AddAdmin} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
    // console.log("my name is state",state);
    return {
        auth: state.firebase.auth
    };
};
export default connect(mapStateToProps)(App);
