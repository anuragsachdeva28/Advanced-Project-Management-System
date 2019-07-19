import React, {Component} from 'react';
import { useState } from 'react';
import './Tasks.css';
// import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Infinite from 'react-infinite';
import {Accordion, Card, Button, Dropdown} from 'react-bootstrap';
import {  Modal, Form } from 'react-bootstrap';
import Pic from "../../0.jpeg";
import Aastha from "../../3.jpeg";
import Shivam from "../../2.jpeg";
import Lalit from "../../1.jpeg";
import Projects from "./Projects";
import {connect} from "react-redux";
import NO_Tasks from "../../no_task.png";

let last;

const SortableItem = sortableElement((props) => {
        const [value, setValue] = useState((props.status.completed)?"Completed":(props.status.finishAndInReview)?"Finished and in Review":(props.status.inProgress)?"In progress":"Not yet Started")
        // let value = (props.status.notYetStarted)?"Not Yet Started":"Just Added"

    console.log("initial value",value)
    const status = [
        { id: 1, name: "Completed" },
        { id: 2, name: "Finished and in Review" },
        { id: 3, name: "In progress" },
        { id: 4, name: "Not yet Started" }
    ];
    const handleClick = (e) => {
        console.log(document.getElementById(last))
        console.log(document.getElementById(props.sno))
        let last_element = document.getElementById(last);
        let present_element = document.getElementById(props.sno);

            if(present_element!=last_element){
                if(last_element!=null && last_element.classList.contains("active"))
                {last_element.classList.remove("active")}
                present_element.classList.add("active")
            }
            if((present_element==last_element)&& (present_element.classList.contains("active"))){
                present_element.classList.remove("active")
            }
            else
                present_element.classList.add("active")


        // console.log("sno",props.sno)
        // console.log(e)
        last=props.sno;
    }

    const onSelect = eventKey => {

        if(eventKey!==value) {
            setValue(eventKey)

            const url_task_id= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+props.cid+"/projects/"+props.pid+"/tasks/"+props.id;
            console.log(url_task_id);
            console.log("my name is eventKey",eventKey);
            console.log("myname is value",value)
            let status = {};
            if (eventKey === "Not yet Started") {
                status = {
                    completed: false,
                    finishAndInReview: false,
                    inProgress: false,
                    notYetStarted: true
                };
            }
            else if (eventKey === "In progress") {
                status = {
                    completed: false,
                    finishAndInReview: false,
                    inProgress: true,
                    notYetStarted: true
                };
            }
            else if (eventKey === "Finished and in Review") {
                status = {
                    completed: false,
                    finishAndInReview: true,
                    inProgress: true,
                    notYetStarted: true
                };
            }
            else if (eventKey === "Completed") {
                status = {
                    completed: true,
                    finishAndInReview: true,
                    inProgress: true,
                    notYetStarted: true
                };
            }
            const dataObj = {
                "update":{
                    status
                }
            }

            console.log(dataObj,"sending this data");

            fetch(url_task_id,{
                headers: {
                    Authorization: "Bearer "+props.token,
                    "Content-Type":"application/json"
                },
                method: 'PUT',
                body: JSON.stringify(dataObj)
            })
                .then(res => res.json())
                .then(data => {

                    console.log("anurag",data);
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }

    };




    // console.log(document.getElementById(props.sno))
    return <Card className="no-border" id={props.sno}>

                    <div className="strip stripBorder"  >
                        <div className="num" style={{padding:'1%'}}>{props.sno}</div>
                        <div className="taskname" style={{padding:'1%'}}>{props.taskname}</div>
                        <div className="created" style={{padding:'1%'}}>{ props.created.substring(0,props.created.indexOf('T')) }</div>
                        <div className="estimate" style={{padding:'1%'}}>--------/----/----</div>
                        <div className="status" style={{padding:'1%'}}>
                            <Dropdown
                                onSelect={onSelect}
                                id="d"
                                style={{ marginLeft: 1.1 + "%" }}

                            >
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                    style={{ borderRadius: 20 + "px" }}
                                >
                                    {value}
                                </Dropdown.Toggle>
                                <Dropdown.Menu  >
                                    {status.map(user => (
                                        <Dropdown.Item eventKey={user.name} key={user.id}>
                                            {user.name}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Accordion.Toggle as={Card.Text} className="arrow" style={{padding:'1%'}} eventKey={props.sno+" "} onClick={handleClick} ><i className="fa fa-chevron-down" aria-hidden="true"></i></Accordion.Toggle>
                        {/*<div className="arrow" style={{padding:'1%'}}><i className="fa fa-chevron-down" aria-hidden="true"></i> </div>*/}
                    </div>

                <Accordion.Collapse eventKey={props.sno+" "} className="collapsed">
                    <Card.Body className="hidden">{props.body}</Card.Body>
                </Accordion.Collapse>
            </Card>
});

const SortableInfiniteList = sortableContainer(({items,open,cid,pid,token}) => {
    console.log(items,"this are items passed");
    return (
        <Infinite
            containerHeight={400}
            elementHeight={49}
            className="scrolling"
        >
            {items&&items.map(({priority, height, name, creationTime, estimate, status, description, id}, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    sno={index+1}
                    height={height}
                    taskname={name}
                    created={creationTime}
                    estimate={estimate}
                    status={status}
                    body={description}
                    open={open}
                    id={id}
                    cid={cid}
                    pid={pid}
                    token={token}
                />
            ))}
        </Infinite>
    );
});





const backdropStyle = {
    position: 'fixed',
    zIndex: 1040,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    opacity: 0.5
};

const modalStyle = function() {
    // we use some psuedo random coords so nested modals
    // don't sit right on top of each other.
    let top = 30;
    let left = 28;

    return {
        position: 'fixed',
        width: 650,
        height: 360,
        zIndex: 1040,
        top: top + '%',
        left: left + '%',
        border: '1px solid #e5e5e5',
        backgroundColor: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,.5)',
        padding: 0,
        overflow: 'hidden'
    };
};






class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log("ye hai props inside constructor",this.props);

        this.state = {
            pid: "",
            name: "",
            description: "",
            id:this.props,
            showModal: false,

            project: {
                name:"",
                description:""
            },
            team:[],
            open: false,
            loading:false

        };

        this.close = () => {
            this.setState({ showModal: false });
        };

        this.open = () => {
            this.setState({ showModal: true });
        };


    }



    componentDidMount() {
        console.log("see props inside componentDidMount", this.props);
        const url_project= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+this.props.match.params.cid+"/projects/"+this.props.match.params.pid;
        // console.log(url);
        fetch(url_project,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            }
        })
            .then(res => res.json())
            .then(data => {

                // console.log("cdcdsc",data);

                // console.log(data.res);
                const arr = data.res.project.team;
                this.setState({
                    project:{
                        name:data.res.project.name,
                        description: data.res.project.description
                    },
                    team: arr
                })

            })

            .catch(err => console.log(err));


        const url_task= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+this.props.match.params.cid+"/projects/"+this.props.match.params.pid+"/tasks/";
        // console.log(url);
        fetch(url_task,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            }
        })
            .then(res => res.json())
            .then(data => {

                // console.log("cdcdsc",data);
                this.setState({
                    items:data.res
                })
                if(!data.res){
                    this.setState({
                        items:[]
                    })
                }

                // console.log(data.res);


            })
            .catch(err => console.log(err));
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps,"prevProps")
        // console.log(prevState,"prevState")
        // console.log(snapshot,"snapshot")
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            id: nextProps
        })
        console.log(nextProps,"cdcdscdvfdgewdS")
        console.log(nextContext,"cdcdscdvfdgewdS")
        console.log(this.state,"cdcdscdvfdgewdS")
        const url_project= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+nextProps.match.params.cid+"/projects/"+nextProps.match.params.pid;
        console.log("this is nextProp", nextProps);
        // console.log(url);
        fetch(url_project,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            }
        })
            .then(res => res.json())
            .then(data => {

                // console.log("cdcdsc",data);

                // console.log(data.res);
                const arr = data.res.project.team;
                this.setState({
                    project:{
                        name:data.res.project.name,
                        description: data.res.project.description
                    },
                    team: arr
                })

            })

            .catch(err => console.log(err));


        const url_task= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+nextProps.match.params.cid+"/projects/"+nextProps.match.params.pid+"/tasks/";
        // console.log(url);
        fetch(url_task,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            }
        })
            .then(res => res.json())
            .then(data => {

                // console.log("cdcdsc",data);

                this.setState({
                    items:data.res
                })
                if(!data.res){
                    this.setState({
                        items:[]
                    })
                }

            })
            .catch(err => console.log(err));
    }


    renderBackdrop(props) {

        return <div {...props} style={backdropStyle} />;
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        if(oldIndex!==newIndex) {
        let priority = 0;
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
        // console.log("oldindex",this.state.items[oldIndex-1],this.state.items[oldIndex],this.state.items[oldIndex+1])
        let prevPriority = (this.state.items[newIndex-1])?this.state.items[newIndex-1].priority:0;
        let nextPriority = (this.state.items[newIndex+1])?this.state.items[newIndex+1].priority:0;
        if(prevPriority!==0 && nextPriority!==0){
            priority = (prevPriority+nextPriority)/2;
        }
        else if(prevPriority===0){
            priority = nextPriority-20;
        }
        else if(nextPriority===0){
            priority = prevPriority+20;
        }
        console.log("newindex",this.state.items[newIndex-1],this.state.items[newIndex],this.state.items[newIndex+1])

        console.log("priority",priority)
        this.setState(prevState => {
            const items = [...prevState.items];
            items[newIndex] = {...items[newIndex], priority:priority}
            return { items }
        })

        const url_task_id= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+this.props.match.params.cid+"/projects/"+this.props.match.params.pid+"/tasks/"+this.state.items[newIndex].id;
        // console.log(url);
        const dataObj = {
            "update":{
                "priority":priority
            }
        }

        fetch(url_task_id,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken,
                "Content-Type":"application/json"
            },
            method: 'PUT',
            body: JSON.stringify(dataObj)
        })
            .then(res => res.json())
            .then(data => {

                console.log("anurag",data);

            })
            .catch(err => console.log(err));

    }};

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading:true
        })
        let name = this.state.name;
        let description = this.state.description;
        let status = {
            notYetStarted: true,
            inProgress: false,
            finishAndInReview: false,
            completed: false
        };
        let markAsUrgent = document.getElementById('checkbox').checked;
        // console.log(markAsUrgent);
        let numberOfHours = "";
        let dataObj = {name, description, status, markAsUrgent, numberOfHours};

        // console.log(dataObj);
        // console.log(this.state.id.match.params.pid);

        const url_task= "https://us-central1-dexpert-admin.cloudfunctions.net/api/clients/"+this.props.match.params.cid+"/projects/"+this.state.id.match.params.pid+"/tasks/";
        // console.log(url_task,"cddscsdCds",this.props);
        fetch(url_task,{
            headers: {
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken,
                "Content-Type":"application/json"
            },
            method: 'POST',
            body: JSON.stringify(dataObj)
        })
            .then(res => res.json())
            .then(data => {

                console.log("anurag",data);

                if(data.error){
                    this.setState({
                        loading:false
                    })
                }
                else {
                    window.location.reload();
                }
            })

            .catch(err => {
                console.log(err)
                this.setState({
                    loading:false
                })
            })

    }


    render() {
        console.log("ye hai props inside render method",this.state);
        const {items,open} = this.state;
        // console.log("ye hai tasks",tasks)
        // console.log("ye hai items",items)


        return (
            <div className="tasks">
                <div className="headerTask">
                    <div className="sets">
                        {
                            this.state.team && this.state.team.map((employee) =>
                                // console.log(employee,"this is employee list")
                                <div className="set">
                                    <div className="profileImg">
                                        <div className="profile" >{employee.name.split(" ")[0].charAt(0).toUpperCase()+""+employee.name.split(" ")[1].charAt(0).toUpperCase() } </div>
                                    </div>

                                    <div className="name">
                                        <p>{ employee.name.split(" ")[0] }</p>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                    {/*uncomment to add search bar*/}


                    {/*<div className="searchTask">*/}
                    {/*    <i className="fa fa-search fa-xs ic"></i>*/}
                    {/*    <input type="text" className="search" placeholder="Search task"/>*/}


                    {/*</div>*/}
                    <div className="addButton modal-example">
                        <button onClick={this.open} className="add_task" type="button">
                            {" "}
                            <span>+</span> Add Task{" "}
                        </button>

                        <Modal
                            onHide={this.close}
                            style={modalStyle()}
                            aria-labelledby="modal-label"
                            show={this.state.showModal}
                            renderBackdrop={this.renderBackdrop}
                        >
                            <div className="modalMain">
                                <h2 id="modal-label">CREATE TASK</h2>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <div className="check">
                                    <Form.Group style={{float:'right'}} controlId="formBasicChecbox">
                                        <Form.Check id="checkbox" type="checkbox" label="mark me urgent" />
                                    </Form.Group>
                                </div>


                                <Form.Group>
                                    <Form.Label className="taskLabel">TASK NAME</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Write here...."
                                        className="nameField"
                                        id="name"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="taskLabel">TASK DESCRIPTION</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Write here...."
                                        className="desField"
                                        id="description"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="createBt">
                                    <Button type="submit" variant="secondary" size="sm" className="taskCreate" >
                                        { this.state.loading ? <i className={"fa fa-refresh fa-spin"}></i>:"CREATE"}
                                    </Button>
                                </Form.Group>
                            </Form>

                        </Modal>

                    </div>



                </div>

                <div className="bodyTask">
                    <h4>{(this.state.project.name)?this.state.project.name:<lines className="shine proj_name"></lines>}</h4>
                    <p>{ (this.state.project.description)?this.state.project.description:<lines className="shine proj_desc"></lines> }</p>


                    {items && items.length!==0 && <div className="tableHeader">
                        <div className="num"></div>
                        <div className="taskname">Task Name</div>
                        <div className="created">Created on</div>
                        <div className="estimate">Estimate Delivery</div>
                        <div className="status">Status</div>
                        <div className="arrow"></div>
                    </div>}
                    {console.log(!items)}
                    {console.log(items)}

                    { !items && <div className="task-tableBody">
                        <div className="num"><lines className="shine task_holder_num"></lines></div>
                        <div className="taskname"><lines className="shine task_holder_name"></lines></div>
                        <div className="created"><lines className="shine task_holder"></lines></div>
                        <div className="estimate"><lines className="shine task_holder"></lines></div>
                        <div className="status"><lines className="shine task_holder"></lines></div>
                        <div className="arrow"></div>
                    </div> }

                    { items && items.length===0 && <div className={"task-div"}><img className="no_task" src={NO_Tasks} alt="logo" /></div> }
                    { items && items.length===0 && <div className={"no_task-div"}><p className={"no_proj"}>No tasks added !!!</p></div>}

                    <Accordion>
                        <SortableInfiniteList items={items} open={open} cid={this.props.match.params.cid} pid={this.props.match.params.pid} token={this.props.auth.stsTokenManager.accessToken} onSortEnd={this.onSortEnd} />
                    </Accordion>




                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log("my name is state1",state);
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Tasks);