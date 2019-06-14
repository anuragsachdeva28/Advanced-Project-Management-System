import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContestPage from '../ContestPage/ContestPage';
import Dashboard from '../Dashboard/Dashboard';
import QuestionPage from '../QuestionPage/QuestionPage';
import AddClient from '../Main/AddClient';
import './Main.css';
import { Card, Col } from 'react-bootstrap';
import CardList from './CardList';
import { Form, Row, Button } from 'react-bootstrap';
import Autocomplete from './Autocomplete';

class Main extends Component {
    render() {
        return (
            <div className="outer">
            <div className="main">
                
                    <Route path="/Clients" component={Dashboard}  />
                    
                
            </div>
                
                    <Route path="/Clients/add" component={AddClient}  />
            <div className="projAside">    
                
                {/* <Col sm="12" className="column"> */}
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
                    {/* </Col> */}

                    <div className="projHeader_fake"></div>

                    <div className="cards">
                        <CardList />
                        <CardList />
                        <CardList />
                        <CardList />

                    </div>
            </div>      
                    
            {/* </Col>
            <Col sm="7"> */}
                <div className="addTask">
                    <div className="taskHeader">
                        <button className="add_task" type="button"> <span>+</span> Add Task </button>
                    </div>
                        
                        <Form className="basic">
                            <Form.Group as={Row} >
                                <Form.Label className="formLabel">
                                PROJECT NAME
                                </Form.Label>
                                <Form.Control type="text" placeholder="Write here...." className="nameField" />   
                            </Form.Group>

                            <Form.Group as={Row} className="formGroup" >
                                <Form.Label className="formLabel">
                                PROJECT DESCRIPTION
                                </Form.Label>
                                <Form.Control as="textarea" placeholder="Write here...." className="desField" />  
                            </Form.Group>

                            <Form.Group as={Row} className="formGroup" >
                                <Form.Label className="formLabel">
                                Team
                                </Form.Label>
                                <br></br>
                                
                                <Autocomplete options={["White", "Black", "Green", "Blue", "Yellow", "Red"]} />  
                            </Form.Group>

                            <br />  
                            <Form.Group as={Row} >
                                <Col sm="3">
                                    <Button variant="secondary" size="sm" className={`cancel`}>CANCEL</Button>
                                </Col>
                                <Col sm="3">
                                    <Button variant="secondary" size="sm" className={`create`}>CREATE</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                </div>
            {/* </Col> */}
            </div>
            
        );
    }
}
export default Main;

























// {/* <Route path="/contests/:contestId" component={ContestPage} exact />
//                     <Route path="/contests/:contestId/questions/:questionId"
//                         component={QuestionPage}
//                         exact /> */}