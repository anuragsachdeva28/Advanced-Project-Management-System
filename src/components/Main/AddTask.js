import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Autocomplete from "./Autocomplete";

class AddTask extends Component {
  render() {
    return (
      <div className="addTask">
        <div className="taskHeader">
          <button className="add_task" type="button">
            {" "}
            <span>+</span> Add Task{" "}
          </button>
        </div>

        <Form className="basic">
          <Form.Group as={Row}>
            <Form.Label className="formLabel">PROJECT NAME</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write here...."
              className="nameField"
            />
          </Form.Group>

          <Form.Group as={Row} className="formGroup">
            <Form.Label className="formLabel">PROJECT DESCRIPTION</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write here...."
              className="desField"
            />
          </Form.Group>

          <Form.Group as={Row} className="formGroup">
            <Form.Label className="formLabel">Team</Form.Label>
            <br></br>

            <Autocomplete
              options={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
            />
          </Form.Group>

          <div className="selected">
            <span>Shambhavi Agarwal </span>
          </div>

          <br />
          <br />
          <Form.Group as={Row}>
            <Col sm="3">
              <Button variant="secondary" size="sm" className={`cancel`}>
                CANCEL
              </Button>
            </Col>
            <Col sm="3">
              <Button variant="secondary" size="sm" className={`create`}>
                CREATE
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AddTask;
