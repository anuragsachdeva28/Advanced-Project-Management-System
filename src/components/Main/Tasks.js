import React, {Component} from 'react';
import './Tasks.css';
import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Infinite from 'react-infinite';
import { Accordion, Card, Button } from 'react-bootstrap';
import {  Modal, Form } from 'react-bootstrap';



const SortableItem = sortableElement(({height, sno, taskname, created, estimate, status, body}) => {


    return <Card className="no-border">
            <Accordion.Toggle as={Card.Header} eventKey={sno+" "}>
                <div className="strip stripBorder"  >
                    <div className="num" style={{padding:'1%'}}>{sno}</div>
                    <div className="taskname" style={{padding:'1%'}}>{taskname}</div>
                    <div className="created" style={{padding:'1%'}}>{created}</div>
                    <div className="estimate" style={{padding:'1%'}}>{estimate}</div>
                    <div className="status" style={{padding:'1%'}}>{status}</div>
                    <div className="arrow" style={{padding:'1%'}}> > </div>
                </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={sno+" "} className="collapsed">
                <Card.Body className="hidden">{body}</Card.Body>
            </Accordion.Collapse>
        </Card>


});

const SortableInfiniteList = sortableContainer(({items}) => {
    return (
        <Infinite
            containerHeight={400}
            elementHeight={49}
            className="scrolling"
        >
            {items.map(({sno, height, taskname, created, estimate, status, body}, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    sno={sno}
                    height={height}
                    taskname={taskname}
                    created={created}
                    estimate={estimate}
                    status={status}
                    body={body}
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
    constructor(...args) {
        super(...args);
        this.state = {
            showModal: false,
            items: [
                {sno: '1', height: 89, taskname: 'My name is Anurag', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '2', height: 59, taskname: 'HIiii', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '3', height: 130, taskname: 'aaaaaaaaaaaaaa', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '4', height: 59, taskname: 'ssssssssssssss', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '5', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '6', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '7', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '8', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                {sno: '9', height: 150, taskname: 'ggggggggggggggg', created: '19/05/19', estimate: '19/05/19', status: 'Status', body: 'added by : michael white This pattern allows users to add columns from a dataset. It is a way to keep the table\'s data  to keep the table\'s data limited to to to essentia; information and enables the user to add additional columns based on their use case  based on their use '},
                ],
        };

        this.close = () => {
            this.setState({ showModal: false });
        };

        this.open = () => {
            this.setState({ showModal: true });
        };


    }

    renderBackdrop(props) {
        return <div {...props} style={backdropStyle} />;
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };



    render() {
        const {items} = this.state;
        return (
            <div className="tasks">
                <div className="headerTask">
                    <div className="sets">
                        <div className="set">
                            <div className="profileImg">
                                <img className="profile" src="https://www.fillmurray.com/50/50" alt="profile"/>
                            </div>

                            <div className="name">
                                <p>Anurag</p>
                            </div>

                        </div>


                        <div className="set">
                            <div className="profileImg">
                                <img className="profile" src="https://placecage.com/50/50" alt="profile"/>
                            </div>

                            <div className="name">
                                <p>Anurag</p>
                            </div>

                        </div>

                        <div className="set">
                            <div className="profileImg">
                                <img className="profile" src="https://placebeard.it/50/50" alt="profile"/>
                            </div>

                            <div className="name">
                                <p>Anurag</p>
                            </div>

                        </div>
                    </div>

                    <div className="searchTask">
                        <i className="fa fa-search fa-xs ic"></i>
                        <input type="text" className="search" placeholder="Search task"/>


                    </div>
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
                            <div className="check">
                                <Form.Group style={{float:'right'}} controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="mark me urgent" />
                                </Form.Group>
                            </div>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="taskLabel">TASK NAME</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Write here...."
                                        className="nameField"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="taskLabel">TASK DESCRIPTION</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Write here...."
                                        className="desField"
                                    />
                                </Form.Group>

                                <Form.Group className="createBt">
                                    <Button variant="secondary" size="sm" className="taskCreate">
                                        CREATE
                                    </Button>
                                </Form.Group>
                            </Form>

                        </Modal>

                    </div>



                </div>

                <div className="bodyTask">
                    <h4>Dexpert Tool UI Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis cupiditate doloribus incidunt ipsam nobis repellat soluta tenetur? Atque deleniti dolor in laudantium magni odio praesentium quos sed soluta suscipit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reprehenderit!</p>
                    <br />
                    <div className="tableHeader">
                        <div className="num"></div>
                        <div className="taskname">Task Name</div>
                        <div className="created">Created on</div>
                        <div className="estimate">Estimate Delivery</div>
                        <div className="status">Status</div>
                        <div className="arrow"></div>
                    </div>


                    <Accordion>
                        <SortableInfiniteList items={items} onSortEnd={this.onSortEnd} />
                    </Accordion>


                </div>

            </div>
        );
    }
}

export default Tasks;