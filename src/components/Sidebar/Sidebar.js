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
                <Link to={"/projects/"}>
                <Icon
                    icon="fa-folder-open"
                    // onActive="fa-close"
                    // Activate={this.Activate} 
                    title=""
                    // active={this.state.active}
                     />
                </Link>
                <Link to={"/employees/"}>
                    <Icon
                    icon="fa-user"
                    title="Profile" 
                    // active={this.state.active}
                    />
                </Link>
                <Link to={"/profile/"} > <img className="pic" src={Pic} alt="logo" /></Link>
                {/*<Icon*/}
                    {/*icon="fa-cog"*/}
                    {/*title="Editor"*/}
                    {/*// active={this.state.active}*/}
                    {/*/>*/}
                {/*<Icon*/}
                    {/*icon="fa-info"*/}
                    {/*title="About"*/}
                    {/*// active={this.state.active}*/}
                    {/*/>*/}
            </div>
        )
    }
}
export default Sidebar;