import React, {Component} from 'react';
import './Tasks.css';
import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Infinite from 'react-infinite';
import { Accordion, Card, Button } from 'react-bootstrap';
import {  Modal, Form } from 'react-bootstrap';



const SortableItem = sortableElement(({height, sno, taskname, created, estimate, status}) => {
    let active=false;
    var classes = ["strip", "stripBorder"];

    function toggleClass()  {


        if (!active) {
            classes.push('stripBorder');
        }
        else {
            classes.pop();

        }
        console.log("xscdscdscdscdscdscsdcdsvdsvs");
        active=!active;
    }





    return <div className="stripComp">
        <div className={classes.join(' ')}  >
            <div className="num" style={{padding:'1%'}}>{sno}</div>
            <div className="taskname" style={{padding:'1%'}}>{taskname}</div>
            <div className="created" style={{padding:'1%'}}>{created}</div>
            <div className="estimate" style={{padding:'1%'}}>{estimate}</div>
            <div className="status" style={{padding:'1%'}}>{status}</div>
            <div className="arrow" style={{padding:'1%'}}> > </div>
        </div>
        <div className="stripContent">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum dolorum earum ex expedita facere fugiat iusto laudantium mollitia nisi nostrum perspiciatis porro praesentium, quo quos repellendus, sed similique velit!</p>
        </div>
    </div>;
});

const SortableInfiniteList = sortableContainer(({items}) => {
    return (
        <Infinite
            containerHeight={400}
            elementHeight={49}
            className="scrolling"
        >
            {items.map(({sno, height, taskname, created, estimate, status}, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    sno={sno}
                    height={height}
                    taskname={taskname}
                    created={created}
                    estimate={estimate}
                    status={status}
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
                {sno: '1', height: 89, taskname: 'My name is Anurag', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '2', height: 59, taskname: 'HIiii', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '3', height: 130, taskname: 'aaaaaaaaaaaaaa', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '4', height: 59, taskname: 'ssssssssssssss', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '5', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '6', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '7', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '8', height: 200, taskname: 'yyyyyyyyyyyyyy', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
                {sno: '9', height: 150, taskname: 'ggggggggggggggg', created: '19/05/19', estimate: '19/05/19', status: 'Status'},
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
                                <img className="profile" src="https://via.placeholder.com/50" alt="profile"/>
                            </div>

                            <div className="name">
                                <p>Anurag Sachdeva</p>
                            </div>

                        </div>
                        {/*<div className="set">*/}
                            {/*<div className="profileImg">*/}
                                {/*<img className="profile" src="https://via.placeholder.com/50" alt="profile"/>*/}
                            {/*</div>*/}

                            {/*<div className="name">*/}
                                {/*<p>Anurag Sachdeva</p>*/}
                            {/*</div>*/}

                        {/*</div>*/}

                        <div className="set">
                            <div className="profileImg">
                                <img className="profile" src="https://via.placeholder.com/50" alt="profile"/>
                            </div>

                            <div className="name">
                                <p>Anurag Sachdeva</p>
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
                                <h4 id="modal-label">CREATE TASK</h4>
                            </div>
                            <div className="check">
                                <Form.Group style={{float:'right'}} controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Check me out" />
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

                    <SortableInfiniteList items={items} onSortEnd={this.onSortEnd} />


                    {/*<Accordion>*/}
                        {/*<Card>*/}
                            {/*<Accordion.Toggle as={Card.Header} eventKey="0">*/}
                                {/*Click me!*/}
                            {/*</Accordion.Toggle>*/}
                            {/*<Accordion.Collapse eventKey="0">*/}
                                {/*<Card.Body>Hello! I'm the body</Card.Body>*/}
                            {/*</Accordion.Collapse>*/}
                        {/*</Card>*/}
                        {/*<Card>*/}
                            {/*<Accordion.Toggle as={Card.Header} eventKey="1">*/}
                                {/*Click me!*/}
                            {/*</Accordion.Toggle>*/}
                            {/*<Accordion.Collapse eventKey="1">*/}
                                {/*<Card.Body>Hello! I'm another body</Card.Body>*/}
                            {/*</Accordion.Collapse>*/}
                        {/*</Card>*/}
                    {/*</Accordion>*/}


                    {/*<div className="tableBody">*/}
                        {/*<div className="num">S. No.</div>*/}
                        {/*<div className="taskname">Task Name</div>*/}
                        {/*<div className="created">Created on</div>*/}
                        {/*<div className="estimate">Estimate Delivery</div>*/}
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"> > </div>*/}
                    {/*</div>*/}

                    {/*<div className="tableBody">*/}
                        {/*<div className="num">S. No.</div>*/}
                        {/*<div className="taskname">Task Name</div>*/}
                        {/*<div className="created">Created on</div>*/}
                        {/*<div className="estimate">Estimate Delivery</div>*/}
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"> > </div>*/}
                    {/*</div>*/}

                    {/*<div className="tableBody">*/}
                        {/*<div className="num">S. No.</div>*/}
                        {/*<div className="taskname">Task Name</div>*/}
                        {/*<div className="created">Created on</div>*/}
                        {/*<div className="estimate">Estimate Delivery</div>*/}
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"> > </div>*/}
                    {/*</div>*/}

                    {/*<div className="tableBody">*/}
                        {/*<div className="num">S. No.</div>*/}
                        {/*<div className="taskname">Task Name</div>*/}
                        {/*<div className="created">Created on</div>*/}
                        {/*<div className="estimate">Estimate Delivery</div>*/}
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"> > </div>*/}
                    {/*</div>*/}

                    {/*<div className="tableBody">*/}
                        {/*<div className="num">S. No.</div>*/}
                        {/*<div className="taskname">Task Name</div>*/}
                        {/*<div className="created">Created on</div>*/}
                        {/*<div className="estimate">Estimate Delivery</div>*/}
                        {/*<div className="status">Status</div>*/}
                        {/*<div className="arrow"> > </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        );
    }
}

export default Tasks;