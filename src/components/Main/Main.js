import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContestPage from '../ContestPage/ContestPage';
import Dashboard from '../Dashboard/Dashboard';
import QuestionPage from '../QuestionPage/QuestionPage';
import AddClient from '../Main/AddClient';
import './Main.css';
import { Card } from 'react-bootstrap';


class Main extends Component {
    render() {
        return (
            <div className="outer">
                <div className="main">
                    <Route path="/Clients" component={Dashboard}  />
                    
                </div>
                
                    <Route path="/Clients/add" component={AddClient}  />
                
                <div className="projAside">

                    <div className="projHeader">
                        <div className="projHeaderName">
                            <h5 className="projList">PROJECT</h5>
                        </div>
                        <div className="addIcon">
                            <div className="addIconInside">
                                <span>+</span>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <Card className="cardLayout" >
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted cardSub">created on:</Card.Subtitle>
                                <Card.Title className="cardTitle">Dexpert Tool UI design</Card.Title>
                                
                                <Card.Text className="cardText">
                                Design user interface for the tool. lorem ipsum something
                                </Card.Text>
                                <div className="tag" >
                                    <span>12 tasks active</span>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                    
                </div>
                
            </div>
            
        );
    }
}
export default Main;

























// {/* <Route path="/contests/:contestId" component={ContestPage} exact />
//                     <Route path="/contests/:contestId/questions/:questionId"
//                         component={QuestionPage}
//                         exact /> */}