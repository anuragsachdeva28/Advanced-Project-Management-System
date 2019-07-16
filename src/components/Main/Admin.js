import React, { Component, Fragment } from "react";
import "./Admin.css";
import Sidebar from "../Sidebar/Sidebar";
import {Link, Route} from "react-router-dom";
import AddAdmin from "./AddAdmin";
import {connect} from "react-redux";
// import { Link } from "react-router-dom";

class Admin extends Component {
  state = {

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
        Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
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
            </div>
            <div className="admin-tableContainer">
              {
                this.state.admins && this.state.admins.map((admin,index) =>
                  <div className="admin-tableBody" key={index}>
                    <div className="num">{index+1}</div>
                    <div className="username">{admin.name} </div>
                    <div className="email">{admin.email}</div>
                    <div className="role">{(admin.role.admin)?"Admin":(admin.role.manager)?"Manager":(admin.role.editor)?"Editor":"Viewer"}</div>
                  </div>
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
export default connect(mapStateToProps)(Admin);
