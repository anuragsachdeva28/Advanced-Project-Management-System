import React, {Component} from 'react';
import './Tasks.css';

class Tasks extends Component {
    render() {
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
                        <div className="num">S. No.</div>
                        <div className="taskname">Task Name</div>
                        <div className="created">Created on</div>
                        <div className="estimate">Estimate Delivery</div>
                        <div className="status">Status</div>
                    </div>

                    <div className="tableBody">
                        <div className="num">S. No.</div>
                        <div className="taskname">Task Name</div>
                        <div className="created">Created on</div>
                        <div className="estimate">Estimate Delivery</div>
                        <div className="status">Status</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Tasks;