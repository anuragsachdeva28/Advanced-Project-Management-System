import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContestPage from '../ContestPage/ContestPage';
import Dashboard from '../Dashboard/Dashboard';
import QuestionPage from '../QuestionPage/QuestionPage';
import './Main.css';
import { Form, Row, Col } from 'react-bootstrap';

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
                    <h4>NEW CLIENT</h4>
                    <Form>
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
                    </Form>
                    
                </div>
            </div>
            
        );
    }
}
export default Main;