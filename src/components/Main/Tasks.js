import React, {Component} from 'react';
import './Tasks.css';
// import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Infinite from 'react-infinite';
import { Accordion, Card, Button } from 'react-bootstrap';
import {  Modal, Form } from 'react-bootstrap';
import Pic from "../../0.jpeg";
import Aastha from "../../3.jpeg";
import Shivam from "../../2.jpeg";
import Lalit from "../../1.jpeg";
import Projects from "./Projects";
import {connect} from "react-redux";

let last;

const SortableItem = sortableElement((props) => {
    // console.log("watch this",props)
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
    // console.log(document.getElementById(props.sno))
    return <Card className="no-border" id={props.sno}>
                <Accordion.Toggle as={Card.Header} eventKey={props.sno+" "} onClick={handleClick}>
                    <div className="strip stripBorder"  >
                        <div className="num" style={{padding:'1%'}}>{props.sno}</div>
                        <div className="taskname" style={{padding:'1%'}}>{props.taskname}</div>
                        <div className="created" style={{padding:'1%'}}>{ props.created.substring(0,props.created.indexOf('T')) }</div>
                        <div className="estimate" style={{padding:'1%'}}>--------/----/----</div>
                        <div className="status" style={{padding:'1%'}}>{(props.status.notYetStarted)?"Not Yet Started":"Just Added"}</div>
                        <div className="arrow" style={{padding:'1%'}}><i className="fa fa-chevron-down" aria-hidden="true"></i> </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.sno+" "} className="collapsed">
                    <Card.Body className="hidden">{props.body}</Card.Body>
                </Accordion.Collapse>
            </Card>


});

const SortableInfiniteList = sortableContainer(({items,open}) => {
    // console.log(items,"this are items passed");
    return (
        <Infinite
            containerHeight={400}
            elementHeight={49}
            className="scrolling"
        >
            {items&&items.map(({priority, height, name, creationTime, estimate, status, description}, index) => (
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
            items: [
                // {priority: '1.223',  name: 'Logo Created', creationTime: '19/05/19', estimate: '26/05/19', status: 'completed', description: 'added by : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores inventore quasi tempore veniam voluptatem? Aliquam aut consequatur, ea eos laborum laudantium modi natus quos totam velit veniam veritatis vitae. '},
                // {priority: '2.1232', name: 'Website UI ', creationTime: '19/05/19', estimate: '27/05/19', status: 'finished and in review', description: 'added by : michael white Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores inventore quasi tempore veniam voluptatem? Aliquam aut consequatur, ea eos laborum laudantium modi natus quos totam velit veniam veritatis vitae. '},
                // {priority: '3', name: 'Website UX', creationTime: '19/05/19', estimate: '29/05/19', status: 'in progress', description: 'added by : michael white Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores inventore quasi tempore veniam voluptatem? Aliquam aut consequatur, ea eos laborum laudantium modi natus quos totam velit veniam veritatis vitae. '},
                // {priority: '4', name: 'Website Development', creationTime: '29/05/19', estimate: '19/06/19', status: 'in progress', description: 'added by : vLorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores inventore quasi tempore veniam voluptatem? Aliquam aut consequatur, ea eos laborum laudantium modi natus quos totam velit veniam veritatis vitae. '},
                // {priority: '5', name: 'Backend', creationTime: '01/06/19', estimate: '29/06/19', status: 'not yet started', description: 'added by : michael white Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores inventore quasi tempore veniam voluptatem? Aliquam aut consequatur, ea eos laborum laudantium modi natus quos totam velit veniam veritatis vitae. '},
                // {sno: '6', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                // {sno: '7', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                // {sno: '8', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                // {sno: '9', height: 150, taskname: 'ggggggggggggggg', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                ],
            project: {
                name:"",
                description:""
            },
            team:[],
            open: false

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
                console.log(data.res);


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

            })
            .catch(err => console.log(err));
    }


    renderBackdrop(props) {

        return <div {...props} style={backdropStyle} />;
    }

    onSortEnd = ({oldIndex, newIndex}) => {
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

    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

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
                Authorization: "Bearer "+this.props.auth.stsTokenManager.accessToken
            },
            method: 'POST',
            body: JSON.stringify(dataObj)
        })
            .then(res => res.json())
            .then(data => {

                // console.log("anurag",data);

            })

            .catch(err => console.log(err))

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
                                        CREATE
                                    </Button>
                                </Form.Group>
                            </Form>

                        </Modal>

                    </div>



                </div>

                <div className="bodyTask">
                    <h4>{(this.state.project.name)?this.state.project.name:<lines className="shine proj_name"></lines>}</h4>
                    <p>{ (this.state.project.description)?this.state.project.description:<lines className="shine proj_desc"></lines> }</p>
                    <br />

                    {items && <div className="tableHeader">
                        <div className="num"></div>
                        <div className="taskname">Task Name</div>
                        <div className="created">Created on</div>
                        <div className="estimate">Estimate Delivery</div>
                        <div className="status">Status</div>
                        <div className="arrow"></div>
                    </div>}

                    { !items && <div className="task-tableBody">
                        <div className="num"><lines className="shine task_holder_num"></lines></div>
                        <div className="taskname"><lines className="shine task_holder_name"></lines></div>
                        <div className="created"><lines className="shine task_holder"></lines></div>
                        <div className="estimate"><lines className="shine task_holder"></lines></div>
                        <div className="status"><lines className="shine task_holder"></lines></div>
                        <div className="arrow"></div>
                    </div> }


                    <Accordion>
                        <SortableInfiniteList items={items} open={open} onSortEnd={this.onSortEnd} />
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