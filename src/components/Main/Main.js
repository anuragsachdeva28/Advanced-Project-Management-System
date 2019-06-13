import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContestPage from '../ContestPage/ContestPage';
import Dashboard from '../Dashboard/Dashboard';
import QuestionPage from '../QuestionPage/QuestionPage';
import './Main.css';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <div className="outer">
                <div className="main">
                    <Route path="/" component={Dashboard} exact />
                    <Route path="/contests/:contestId" component={ContestPage} exact />
                    <Route path="/contests/:contestId/questions/:questionId"
                        component={QuestionPage}
                        exact />
                </div>
                <div className="mainAside">
                    <div className="mainAside_header">
                        <h5 className="new_client">NEW CLIENT</h5>
                    </div>
                    <div className="mainAside_body">
                        <Form>
                            <Form.Group as={Row} >
                                <Form.Label column sm="2" className="clientDetail">
                                Client name
                                </Form.Label>
                                <Col sm="4">
                                <Form.Control type="text" placeholder="" className="field" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Form.Label column sm="2" className="clientDetail">
                                Upload logo
                                </Form.Label>
                                <Col sm="4">
                                <Form.Control type="password" placeholder=" " className="field" />
                                </Col>
                                <Col sm="2">
                                    <Form.Label column sm="2" className="upload">
                                        <Form.Control type="file" className="upload" />
                                        Choose file
                                    </Form.Label>
                                
                                    {/* <Button variant="secondary" size="sm" className="upload">Choose file</Button> */}
                                </Col>
                            </Form.Group>
                            <br />  
                            <Form.Group as={Row} >
                                <Col sm="2">
                                    <Button variant="secondary" size="sm" className={`cancel`}>CANCEL</Button>
                                </Col>
                                <Col sm="2">
                                    <Button variant="secondary" size="sm" className={`create`}>CREATE</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                    
                    
                </div>
                
                {/* <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form> */}
            </div>
            
        );
    }
}
export default Main;