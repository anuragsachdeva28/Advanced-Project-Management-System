import React, { Component } from "react";
import { Route } from "react-router-dom";




import "./Main.css";
import Projects from "./Projects";
import AddProject from "./AddProject";
import Tasks from './Tasks';
import Employee from './Employee';
import AddEmp from './AddEmp';
import Dashboard from "../Dashboard/Dashboard";
import AddClient from "./AddClient";


class Main extends Component {
  render() {
    return (
      <div className="outer">
        <div className="main">
          <Route path="/clients/" component={Dashboard} />
        </div>

        <Route path="/clients/add" component={AddClient} />
        <Route path="/clients/:cid/projects" component={Projects} />
        {/*<Route path="/projects/" component={Projects} />*/}
        <Route path="/clients/:cid/projects/add" component={AddProject} />
        {/*<Route path="/projects/add/" component={AddProject} />*/}
        <Route path="/clients/:cid/projects/:pid/tasks/" component={Tasks} />
        {/*<Route path="/projects/:pid/tasks/" component={Tasks} />*/}
      </div>
    );
  }
}
export default Main;

// {/* <Route path="/contests/:contestId" component={ContestPage} exact />
//                     <Route path="/contests/:contestId/questions/:questionId"
//                         component={QuestionPage}
//                         exact /> */}
