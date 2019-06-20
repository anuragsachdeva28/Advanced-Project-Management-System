import React, { Component } from "react";
import { Route } from "react-router-dom";
import ContestPage from "../ContestPage/ContestPage";
import Dashboard from "../Dashboard/Dashboard";
import QuestionPage from "../QuestionPage/QuestionPage";
import AddClient from "../Main/AddClient";
import "./Main.css";
import { Card, Col } from "react-bootstrap";
import CardList from "./CardList";
import { Form, Row, Button } from "react-bootstrap";
import Autocomplete from "./Autocomplete";
import Projects from "./Projects";
import AddProject from "./AddProject";
import Tasks from './Tasks';
import Employee from './Employee';
import AddEmp from './AddEmp';

class Main extends Component {
  render() {
    return (
      <div className="outer">
        <div className="main">
          <Route path="/Clients" component={Dashboard} />
        </div>

        <Route path="/clients/add" component={AddClient} />
        <Route path="/clients/:cid/projects" component={Projects} />
        <Route path="/clients/:cid/projects/add" component={AddProject} />
        <Route path="/clients/:cid/projects/:pid/tasks/" component={Tasks} />
        <Route path="/clients/employees/:cid/employee/" exact component={Employee} />
        <Route path="/clients/employees/:cid/employee/add" component={AddEmp} />


      </div>
    );
  }
}
export default Main;

// {/* <Route path="/contests/:contestId" component={ContestPage} exact />
//                     <Route path="/contests/:contestId/questions/:questionId"
//                         component={QuestionPage}
//                         exact /> */}
