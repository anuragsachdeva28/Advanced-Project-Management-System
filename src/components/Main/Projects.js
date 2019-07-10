import React, { Component } from 'react';
// import { Form, Row, Col, Button } from 'react-bootstrap';
import CardList from "./CardList";
import {Link, NavLink} from "react-router-dom";
import {Card} from "react-bootstrap";
import {connect} from "react-redux";

class Projects extends Component {
    state = {

    }
    componentDidMount() {
        // console.log(this.props.auth.uid,"cdcdscdvfdgewdS")
        const url= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+localStorage.getItem('clientId')+"/projects/";
        // console.log(url);
        fetch(url,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            }
        })
            .then(res => res.json())
            .then(data => {

                // console.log("cdcdsc",data);

                const arr = data.res.projects;
                this.setState({ projects: arr })

            })

            .catch(err => console.log(err))
    }

    render() {
        // console.log(this.state.projects[0].name)
        return (

            <div className="projAside">
                <div className="projHeader">
                    <div className="projHeaderName">
                        <h5 className="projList">PROJECT</h5>
                    </div>
                    <div className="addIcon">
                        <Link to="/projects/add" >
                        <div className="addIconInside">
                            <span>+</span>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="projHeader_fake"></div>

                <div className="cards">


                    {
                        !this.state.projects && <Card className="cardLayout" >
                            <Card.Body>

                                <Card.Subtitle className="mb-2 text-muted cardSub">created on: <lines className="shine date"></lines> </Card.Subtitle>
                                <Card.Title className="cardTitle"><lines className="shine title"></lines></Card.Title>
                                <Card.Text className="cardText"><lines className="shine desc"></lines></Card.Text>
                                <lines className="shine tag_holder"></lines>
                            </Card.Body>
                        </Card>

                    }

                    {
                        this.state.projects && this.state.projects.map((project,key) =>
                        <NavLink to = {"/projects/" + (project.id) + "/tasks"} key={key} activeClassName={"active"} >
                            {console.log(project)}
                            <CardList
                                date={project.creationTime.substring(0,project.creationTime.indexOf('T'))}
                                title={project.name}
                                description={project.description}
                                activeTask={project.taskActive}
                            />
                        </NavLink>
                        )
                    }


                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("my name is state1",state);
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Projects);