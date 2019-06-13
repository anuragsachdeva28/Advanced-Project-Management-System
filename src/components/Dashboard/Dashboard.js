import React, { Component, Fragment } from 'react';
import ContestList from './ContestList/ContestList';
import ContestTypes from './ContestTypes/ContestTypes';
import './dashboard.css';
import { Route } from 'react-router-dom';

import '../Main/Main.css';

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeParameter: 'all'
        };
        this.types = [
            { title: "All", parameter: "all" },
            { title: "Ongoing", parameter: "ongoing" },
            { title: "Future", parameter: "future" },
            { title: "Mock", parameter: "mock" }, 
        ];
    }
    onActive = (index) => {
        this.setState({ activeParameter: this.types[index].parameter });
    }
    render() {
        return (
            <Fragment>
                <p className="para_client" >Client List</p>
                <br />
                <button className="add_new" type="button"> <span>+</span> add new </button>
                <br />

                <div className="client_list">
                    <div className="listTab">Mark and Spencer</div>
                    <div className="listTab">Mark and Spencer</div>
                    <div className="listTab">Mark and Spencer</div>
                    <div className="listTab">Mark and Spencer</div>
                    <div className="listTab">Mark and Spencer</div>
                </div>

                {/* <ContestTypes
                    types={this.types}
                    onActive = {this.onActive}
                /> 
                <ContestList activeParameter={this.state.activeParameter}/> */}
                
            </Fragment>
            
        )
    }
}
export default Dashboard;