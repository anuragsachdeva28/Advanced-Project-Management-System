import React, { Component, Fragment } from "react";
import "./Admin.css";
import Sidebar from "../Sidebar/Sidebar";
import {Link, Route} from "react-router-dom";
import AddAdmin from "./AddAdmin";
// import { Link } from "react-router-dom";

class Admin extends Component {

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
            <h4 className="admin-table-heading">Admin Page</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              corporis cupiditate doloribus incidunt ipsam nobis repellat soluta
              tenetur? Atque deleniti dolor in laudantium magni odio praesentium
              quos sed soluta suscipit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eligendi, reprehenderit!
            </p>
            <br />

            <div className="admin-tableHeader">
              <div className="num"></div>
              <div className="username light">Admin Name</div>
              <div className="email">Email Address</div>
              <div className="role">Role</div>
            </div>
            <div className="admin-tableContainer">
              <div className="admin-tableBody">
                <div className="num">1</div>
                <div className="username">Christel Woolfolk Quiroga </div>
                <div className="email">abcdefg@gmail.com</div>
                <div className="role">Manager</div>
              </div>

              <div className="admin-tableBody">
                <div className="num">2</div>
                <div className="username">Galen Woolfolk </div>
                <div className="email">abcdefgsfsfsfsf@something.com</div>
                <div className="role">Designer</div>
              </div>

              <div className="admin-tableBody">
                <div className="num">3</div>
                <div className="username">Galen Woolfolk </div>
                <div className="email">abcdefg@gmail.com</div>
                <div className="role">Designer</div>
              </div>

              <div className="admin-tableBody">
                <div className="num">4</div>
                <div className="username">Galen Woolfolk </div>
                <div className="email">abcdefgsfsfsfsf@something.com</div>
                <div className="role">Manager</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Admin;
