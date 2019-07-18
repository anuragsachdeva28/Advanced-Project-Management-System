import React, {Component, Fragment} from "react";
import "./Employee.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import Dashboard_2 from "../Dashboard/Dashboard_2";
import AddClient from "./AddClient";
import NO_EMPLOYEE from "../../no_emp.png";

class Employee extends Component {
    state = {
        name:"",
        description:"",
        aT: (this.props.auth.stsTokenManager)?this.props.auth.stsTokenManager.accessToken:""
    }

    componentDidMount() {
        const url_emp= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+this.props.match.params.cid+"/employees/";
        // console.log(url,"cddscsdCds",this.props);
        fetch(url_emp,{
            headers: {
                Authorization: "Bearer "+this.state.aT
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log("emp list this ",data);
                const arr = data.res;
                this.setState({ employees: arr })
                if(!data.res) {
                    this.setState({
                        employees: []
                    })
                }



            })

            .catch(err => console.log(err))

        const url_client= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+this.props.match.params.cid;
        // console.log(url,"cddscsdCds",this.props);
        fetch(url_client,{
            headers: {
                Authorization: "Bearer "+this.state.aT
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

    componentWillReceiveProps(nextProps) {
        const url_emp= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+nextProps.match.params.cid+"/employees/";
        // console.log(url,"cddscsdCds",this.props);
        fetch(url_emp,{
            headers: {
                Authorization: "Bearer "+this.state.aT
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log("emp list this ",data);
                const arr = data.res;
                this.setState({ employees: arr })
                if(!data.res) {
                    this.setState({
                        employees: []
                    })
                }



            })

            .catch(err => console.log(err))

        const url_client= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+nextProps.match.params.cid;
        // console.log(url,"cddscsdCds",this.props);
        fetch(url_client,{
            headers: {
                Authorization: "Bearer "+this.state.aT
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
                    <Link to="./add">
                        <button className="add_user" type="button">
                            {" "}
                            <span>+</span> Add User{" "}
                        </button>
                    </Link>
                </div>

                <div className="userBody">
                    <h4 className="table-heading">{ (this.state.name) ? this.state.name : <lines className="shine proj_name"></lines> }</h4>
                    <p>
                        { (this.state.description ? this.state.description : <lines className="shine proj_desc"></lines>) }
                    </p>
                    <br />

                    {this.state.employees && this.state.employees.length!==0 && <div className="client-tableHeader">
                        <div className="num"></div>
                        <div className="username light">User Name</div>
                        <div className="phone">Phone No.</div>
                        <div className="email">Email Address</div>
                        <div className="role">Role</div>
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"></div>*/}
                    </div>}

                    {!this.state.employees && <div className="client-tableHeader">
                        <div className="num"><lines className="shine task_holder_num"></lines></div>
                        <div className="username light"><lines className="shine task_holder_name"></lines></div>
                        <div className="phone"><lines className="shine task_holder"></lines></div>
                        <div className="email"><lines className="shine task_holder"></lines></div>
                        <div className="role"><lines className="shine task_holder"></lines></div>
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"></div>*/}
                    </div>}

                    {this.state.employees && this.state.employees.length===0 && <div className={"emp-div"}><img className="no_emp" src={NO_EMPLOYEE} alt="logo" /></div> }
                    { this.state.employees && this.state.employees.length===0 && <div className={"no_emp-div"}><p className={"no_projemp"}>No Employees added!!!</p></div>}


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

