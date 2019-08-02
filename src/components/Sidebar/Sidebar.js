import React, { Component } from 'react';
import Icon from './Icon/Icon';
import './Sidebar.css';
import Logo from '../../../src/x.png';
import Pic from '../../../src/man.png';

import { Link } from 'react-router-dom';

class Sidebar extends Component{

    render() {
        // let activeClassName = this.state.active ? " active" : "";
        return (
            <div className="sidebar">
                <Link to={"/profile/"} > <img className="logo" src={Logo} alt="logo" /></Link>
                <Link to={"/clients/"}>
                <Icon
                    icon="fa-folder-open"
                    // onActive="fa-close"
                    // Activate={this.Activate} 
                    title="Dexperts"
                    // active={this.state.active}
                     />
                </Link>
                <Link to={"/employees/clients/"}>
                    <Icon
                    icon="fa-user"
                    title="Employees"
                    // active={this.state.active}
                    />
                </Link>
                <Link to={"/admins/"}>
                    <Icon
                    icon="fa-user-secret"
                    title="Admin"
                    // active={this.state.active}
                    />
                </Link>
                <Link to={"/profile/"} > <img className="pic" src={Pic} alt="logo" title="Profile" /></Link>
            </div>
        )
    }
}
export default Sidebar;