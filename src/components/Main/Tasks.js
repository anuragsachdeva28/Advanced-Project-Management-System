import React, {Component} from 'react';
import './Tasks.css';
import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Infinite from 'react-infinite';
import { Accordion, Card, Button } from 'react-bootstrap';



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




class Tasks extends Component {
    state = {
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
                    <div className="addButton">
                        <button className="add_task" type="button">
                            {" "}
                            <span>+</span> Add Task{" "}
                        </button>
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