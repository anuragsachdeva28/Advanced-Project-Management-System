import React, { Component, Fragment } from "react";
import "./Admin.css";
import Sidebar from "../Sidebar/Sidebar";
import {Link, Route} from "react-router-dom";
import AddAdmin from "./AddAdmin";
import {connect} from "react-redux";
import {reset} from "../../actions/authActions";
import {Button, Form, Modal} from "react-bootstrap";
// import { Link } from "react-router-dom";

const backdropStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#000',
  opacity: 0.5
};

const modalStyle2 = function () {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 15;
  let left = 25;

  return {
    position: 'fixed',
    width: 650,
    height: 500,
    zIndex: 1040,
    top: top + '%',
    left: left + '%',
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 0,
    overflow: 'hidden'
  };
};

class Admin extends Component {
  state = {
    showModal2: false,
    editLoading: false,
    aT: (this.props.auth.stsTokenManager)?this.props.auth.stsTokenManager.accessToken:""
  }
  myfunc = () => {
    console.log("trnfvndjkcnj");
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  }

  componentDidMount() {
    const url = "https://us-central1-dexpert-admin.cloudfunctions.net/api/admins";
    // console.log(url,"cddscsdCds",this.props);
    fetch(url,{
      headers: {
        Authorization: "Bearer "+this.state.aT
      }
    })
        .then(res => res.json())
        .then(data => {

          console.log("admin list this ",data);
          const arr = data.res.admins;
          this.setState({ admins: arr })

          if(data.error){
            console.log("rrrrrrrrrrrr")
            this.myfunc();
          }

        })

        .catch(err => console.log(err))

  }

  close2 = () => {

    this.setState({ showModal2: false });
  };

  open2 = (id) => {
    console.log(id,"ye hain id")
    this.setState({
      showModal2: true,
      empName:id.editName,
      editId:id.editId,

      empRole:(id.editRole.admin)? "Admin" : (id.editRole.manager)? "Manager" : (id.editRole.editor)? "Editor" : "Viewer"
    });
  }

  resetPass = (mail) => {
    this.props.reset(mail);
    console.log(mail,"this is the mail to which the mail is being send")
    window.alert("Reset Password link sent");
  }
  renderBackdrop(props) {

    return <div {...props} style={backdropStyle} />;
  }

  handleEmpChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,

    })
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      editLoading:true
    })
    const url_admin_id = "https://us-central1-dexpert-admin.cloudfunctions.net/api/admins/" + this.state.editId;
    console.log(url_admin_id);

    // console.log("myname is value", value)
    let role = {};
    if (this.state.empRole === "Viewer") {
      role = {
        admin: false,
        manager: false,
        editor: false,
        viewer: true
      };
    }
    else if (this.state.empRole === "Editor") {
      role = {
        admin: false,
        manager: false,
        editor: true,
        viewer: true
      };
    }
    else if (this.state.empRole === "Manager") {
      role = {
        admin: false,
        manager: true,
        editor: true,
        viewer: true
      };
    }
    else if (this.state.empRole === "Admin") {
      role = {
        admin: true,
        manager: true,
        editor: true,
        viewer: true
      };
    }
    let name = this.state.empName;

    const dataObj = {
      "update": {
        role,
        "name":name
      }
    }

    console.log(dataObj, "sending this data");

    fetch(url_admin_id, {
      headers: {
        Authorization: "Bearer " + this.props.auth.stsTokenManager.accessToken,
        "Content-Type": "application/json"
      },
      method: 'PUT',
      body: JSON.stringify(dataObj)
    })
        .then(res => res.json())
        .then(data => {

          console.log("anurag", data);
          if(data.error){
            console.log(data.error,"this is the error coming while editing task")
            this.setState({
              editLoading:false
            })
          }
          else {
            window.location.reload(false);

          }

        })
        .catch(err => console.log(err));
  }

  deleteAdmin = (id) => {
    console.log(id);
    const url_admin_id = "https://us-central1-dexpert-admin.cloudfunctions.net/api/admins/" + id;
    console.log(url_admin_id);


    fetch(url_admin_id, {
      headers: {
        Authorization: "Bearer " + this.props.auth.stsTokenManager.accessToken,
        "Content-Type": "application/json"
      },
      method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {

          console.log("anurag", data);
          if(data.error){
            console.log(data.error,"this is the error coming while editing task")

          }
          else {
            window.location.reload(false);

          }

        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>


        <div className="adminAside">
          <div className="adminHeader">
            <Link to="/admins/add/">
              <button className="add_admin" type="button">
                {" "}
                <span>+</span> Add Admin{" "}
              </button>
            </Link>
          </div>
          <div className="adminBody">


            <div className="admin-tableHeader">
              <div className="num"></div>
              <div className="username light">Admin Name</div>
              <div className="email">Email Address</div>
              <div className="role">Role</div>
              <div className="num"></div>
              <div className="num"></div>
            </div>
            <div className="admin-tableContainer">
              {
                this.state.admins && this.state.admins.map((admin,index) => {
                  let editName = admin.name;
                  let editId = admin.id;
                  // let editNum = employee.number;
                  // let editEmail = employee.email;
                  let editRole = admin.role;

                  return <div className="admin-tableBody" key={index}>
                    <div className="num">{index+1}</div>
                    <div className="username">{admin.name} </div>
                    <div className="email">{admin.email}</div>
                    <div className="role">{(admin.role.admin)?"Admin":(admin.role.manager)?"Manager":(admin.role.editor)?"Editor":"Viewer"}</div>
                    <div className="icons" onClick={() => this.open2({editName, editId, editRole})}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    <div className="icons" onClick={() => this.resetPass(admin.email)}><i className="fa fa-key" aria-hidden="true"></i></div>
                    <div className="icons" onClick={() => this.deleteAdmin(admin.id)}><i className="fa fa-trash" aria-hidden="true"></i></div>
                  </div>
                }

              )}
              {
                !this.state.admins && <div className="admin-tableBody">
                  <div className="num"><lines className="shine task_holder_num"></lines></div>
                  <div className="username"><lines className="shine task_holder_name"></lines></div>
                  <div className="email"><lines className="shine task_holder"></lines></div>
                  <div className="role"><lines className="shine task_holder"></lines></div>
                </div>
              }

            </div>
            <Modal
                onHide={this.close2}
                style={modalStyle2()}
                aria-labelledby="modal-label"
                show={this.state.showModal2}
                renderBackdrop={this.renderBackdrop}
            >
              <div className="modalMain">
                <h2 id="modal-label">EDIT TASK</h2>
              </div>
              <Form onSubmit={this.handleEdit}>
                {/*<div className="check">*/}
                {/*    <Form.Group style={{ float: 'right' }} controlId="formBasicChecbox">*/}
                {/*        <Form.Check id="checkbox" type="checkbox" label="mark me urgent" />*/}
                {/*    </Form.Group>*/}
                {/*</div>*/}


                <Form.Group>
                  <Form.Label className="taskLabel">NAME</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Write here...."
                      className="nameField"
                      id="empName"
                      value={this.state.empName}
                      onChange={this.handleEmpChange}
                  />
                </Form.Group>



                {/*<Form.Group>*/}
                {/*    <Form.Label className="taskLabel">NUMBER</Form.Label>*/}
                {/*    <Form.Control*/}
                {/*        type="number"*/}
                {/*        placeholder="Write here...."*/}
                {/*        className="desField"*/}
                {/*        id="empNum"*/}
                {/*        value={this.state.empNum}*/}
                {/*        onChange={this.handleEmpChange}*/}
                {/*    />*/}
                {/*</Form.Group>*/}

                <Form.Group>
                  <Form.Label className="taskLabel">ROLE</Form.Label>
                  <Form.Control id="empRole" value={this.state.empRole} as="select" onChange={this.handleEmpChange}>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="createBt">
                  <Button type="submit" variant="secondary" size="sm" className="taskCreate" >
                    {this.state.editLoading ? <i className={"fa fa-refresh fa-spin"}></i> : "SAVE"}
                  </Button>
                </Form.Group>
              </Form>

            </Modal>
          </div>
        </div>
        <div id="snackbar">Something went Wrong ! ! !</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("my name is state1",state);
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    reset: (mail) => dispatch(reset(mail))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
