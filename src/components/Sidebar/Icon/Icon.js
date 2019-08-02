import React, { Component } from 'react';
import './Icon.css';
class Icon extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }
    render() {
        // let closeIcon = this.props.onActive || this.props.icon;
        let showIcon = this.props.icon;
        let title = this.props.title;
        // let listener = this.props.Activate ? {
        //     onClick: this.props.Activate
        // } : {};
        return (
            <div className="icon-component" >
                <div className = "icon">
                    <i className={"fa " + showIcon} title={title}></i>
                </div>
                
            </div>
        );
    }
}
export default Icon;
