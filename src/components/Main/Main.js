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
import AddTask from "./AddTask";

class Main extends Component {
  render() {
    return (
      <div className="outer">
        <div className="main">
          <Route path="/Clients" component={Dashboard} />
        </div>

        <Route path="/Clients/add" component={AddClient} />
        <Route path="/Clients/:id/Projects" component={Projects} />
        <Route path="/Clients/:id/Projects/:id/tasks" component={AddTask} />
      </div>
    );
  }
}
export default Main;

// {/* <Route path="/contests/:contestId" component={ContestPage} exact />
//                     <Route path="/contests/:contestId/questions/:questionId"
//                         component={QuestionPage}
//                         exact /> */}
