import React, {Component} from 'react';
import './AddEmp.css';
import {Button, Col, Form, Row} from "react-bootstrap";


class AddEmp extends Component {
    render() {
        return (
            <div className="add-user">
                <div className="addUser_header">
                    <h5 className="new_user">NEW USER</h5>
                </div>
                <div className="addUser_body">
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2" className="userDetail">
                                User name
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control type="text" placeholder="" className="userfield" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2" className="userDetail">
                                Number
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control type="number" placeholder="" className="userfield" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formBasicEmail">
                            <Form.Label column sm="2" className="userDetail">
                                Email Id
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control type="email" placeholder="" className="userfield" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formBasicPassword">
                            <Form.Label column sm="2" className="userDetail">
                                Password
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control type="password" placeholder="" className="userfield" />
                            </Col>
                        </Form.Group>



                        <br />
                        <Form.Group as={Row}>
                            <Col sm="2">
                                <Button variant="secondary" size="sm" className={`cancel`}>
                                    CANCEL
                                </Button>
                            </Col>
                            <Col sm="2">
                                <Button variant="secondary" size="sm" type="submit" className={`create`}>
                                    CREATE
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddEmp;