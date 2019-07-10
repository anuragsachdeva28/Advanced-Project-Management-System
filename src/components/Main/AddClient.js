import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {connect} from "react-redux";

class AddClient extends Component {
  state = {
    name:""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is clicked");

    let name = this.state.name;
    let dataObj = {name}
    const url= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients";
    // console.log(url);
    fetch(url,{
      headers: {
        Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
      },
      method: 'POST',
      body: JSON.stringify(dataObj)
    })
        .then(res => res.json())
        .then(data => {

          console.log("anurag",data);
          // window.location.reload(false);
        })

        .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="mainAside">
        <div className="mainAside_header">
          <h5 className="new_client">NEW CLIENT</h5>
        </div>
        <div className="mainAside_body">
          <Form onSubmit={this.handleSubmit} >
            <Form.Group as={Row}>
              <Form.Label column sm="2" className="clientDetail">
                Client name
              </Form.Label>
              <Col sm="4">
                <Form.Control id="name" onChange={this.handleChange} type="text" placeholder="" className="field" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2" className="clientDetail">
                Upload logo
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  readOnly
                  placeholder=" "
                  className="field"
                />
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
            <Form.Group as={Row}>
              <Col sm="2">
                <Button variant="secondary" size="sm" className={`cancel`}>
                  CANCEL
                </Button>
              </Col>
              <Col sm="2">
                <Button type="submit" variant="secondary" size="sm" className={`create`}>
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


const mapStateToProps = (state) => {
  console.log("my name is state1",state);
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(AddClient);
