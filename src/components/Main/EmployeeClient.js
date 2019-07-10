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
                <Sidebar/>
                <div className="main">
                    <Route path="/employees/clients/" component={Dashboard_2} />
                </div>
                <Route path="/employees/clients/add/" component={AddClient} />
                <Route path="/employees/clients/:cid/employees/" component={Employee} />
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

