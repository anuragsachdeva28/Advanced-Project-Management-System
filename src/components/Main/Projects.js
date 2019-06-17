import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import CardList from "./CardList";

class Projects extends Component {
    render() {
        return (

            <div className="projAside">
                <div className="projHeader">
                    <div className="projHeaderName">
                        <h5 className="projList">PROJECT</h5>
                    </div>
                    <div className="addIcon">
                        <div className="addIconInside">
                            <span>+</span>
                        </div>
                    </div>
                </div>

                <div className="projHeader_fake"></div>

                <div className="cards">
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                </div>
            </div>
        )
    }
}

export default Projects;