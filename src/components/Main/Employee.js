import React, { Component } from "react";
import "./Employee.css";

class Employee extends Component {
  render() {
    return (
      <div className="empAside">
        <div className="userHeader">
          <button className="add_user" type="button">
            {" "}
            <span>+</span> Add User{" "}
          </button>
        </div>

        {/*<div className="userBody">*/}

        {/*</div>*/}
        <div className="userBody">
          <h4 className="table-heading">Mark and Spencer</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis
            cupiditate doloribus incidunt ipsam nobis repellat soluta tenetur?
            Atque deleniti dolor in laudantium magni odio praesentium quos sed
            soluta suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eligendi, reprehenderit!
          </p>
          <br />
          <div className="client-tableHeader">
            <div className="num"></div>
            <div className="username light">User Name</div>
            <div className="phone">Phone No.</div>
            <div className="email">Email Address</div>
            {/*<div className="status">Status</div>*/}
            {/*<div className="arrow"></div>*/}
          </div>

          <div className="client-tableBody">
            <div className="num">1</div>
            <div className="username">Christel Woolfolk Quiroga </div>
            <div className="phone">9876543210</div>
            <div className="email">abcdefg@gmail.com</div>
          </div>

          <div className="client-tableBody">
            <div className="num">2</div>
            <div className="username">Galen Woolfolk </div>
            <div className="phone">9876543210</div>
            <div className="email">abcdefgsfsfsfsf@something.com</div>
          </div>

          <div className="client-tableBody">
            <div className="num">3</div>
            <div className="username">Galen Woolfolk </div>
            <div className="phone">9876543210</div>
            <div className="email">abcdefg@gmail.com</div>
          </div>

          <div className="client-tableBody">
            <div className="num">4</div>
            <div className="username">Galen Woolfolk </div>
            <div className="phone">9876543210</div>
            <div className="email">abcdefgsfsfsfsf@something.com</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
