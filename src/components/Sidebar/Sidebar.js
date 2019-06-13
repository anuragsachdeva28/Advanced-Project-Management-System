import React, { Component } from 'react';
import Icon from './Icon/Icon';
import './Sidebar.css';
import Logo from '../../../src/x.png';

class Sidebar extends Component{
    // state = {
    //     active: false
    // };
    // Activate = () => {
    //     this.setState((prevState)=>({ active: !prevState.active }));
    // }
    render() {
        // let activeClassName = this.state.active ? " active" : "";
        return (
            <div className="sidebar">
                <img className="logo" src={Logo} alt="logo" />
                <Icon
                    icon="fa-folder-open"
                    // onActive="fa-close"
                    // Activate={this.Activate} 
                    title=""
                    // active={this.state.active}
                     />
                <Icon
                    icon="fa-user"
                    title="Profile" 
                    // active={this.state.active}
                    />
                <Icon
                    icon="fa-cog"
                    title="Editor"
                    // active={this.state.active}
                    />
                <Icon
                    icon="fa-info"
                    title="About"
                    // active={this.state.active}
                    />
            </div>
        )
    }
}
export default Sidebar;