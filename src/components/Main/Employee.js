import React, {Component, Fragment} from "react";
import "./Employee.css";
// import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import Dashboard_2 from "../Dashboard/Dashboard_2";
import AddClient from "./AddClient";

class Employee extends Component {
    state = {
        name:"",
        description:"",
        employees:[]
    }

    componentDidMount() {
        const url_emp= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+localStorage.getItem('clientId')+"/employees/";
        // console.log(url,"cddscsdCds",this.props);
        fetch(url_emp,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log("emp list this ",data);
                const arr = data.res;
                this.setState({ employees: arr })



            })

            .catch(err => console.log(err))

        const url_client= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+localStorage.getItem('clientId');
        // console.log(url,"cddscsdCds",this.props);
        fetch(url_client,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log("clientttttttt",data);
                const name = data.res.client.name;
                const description = (data.res.client.description) ? data.res.description : " ";
                this.setState({ name, description })



            })

            .catch(err => console.log(err))
    }


    render() {
        console.log("dcdcDDSFVFDVDF");
    return (
        <Fragment>

            <div className="empAside">
                <div className="userHeader">
                    {/*<Link to="./add">*/}
                        {/*<button className="add_user" type="button">*/}
                            {/*{" "}*/}
                            {/*<span>+</span> Add User{" "}*/}
                        {/*</button>*/}
                    {/*</Link>*/}
                </div>

                <div className="userBody">
                    <h4 className="table-heading">{ (this.state.name) ? this.state.name : <lines className="shine proj_name"></lines> }</h4>
                    <p>
                        { (this.state.description ? this.state.description : <lines className="shine proj_desc"></lines>) }
                    </p>
                    <br />

                    <div className="client-tableHeader">
                        <div className="num"></div>
                        <div className="username light">User Name</div>
                        <div className="phone">Phone No.</div>
                        <div className="email">Email Address</div>
                        <div className="role">Role</div>
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"></div>*/}
                    </div>
                    <div className="tableContainer">

                        {
                            this.state.employees && this.state.employees.map( (employee,index) =>
                                <div className="client-tableBody" key={index}>
                                    <div className="num">{index+1}</div>
                                    <div className="username">{ employee.name }</div>
                                    <div className="phone">{ (employee.number)? employee.number : 8888888888 }</div>
                                    <div className="email">{ employee.email }</div>
                                    <div className="role">{ (employee.role.admin)? "Admin" : (employee.role.manager)? "Manager" : (employee.role.editor)? "Editor" : "Viewer" }</div>
                                </div>
                             )
                        }

                    </div>
                </div>
            </div>
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
export default connect(mapStateToProps)(Employee);

