import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContestPage from '../ContestPage/ContestPage';
import Dashboard from '../Dashboard/Dashboard';
import QuestionPage from '../QuestionPage/QuestionPage';
import AddClient from '../Main/AddClient';
import './Main.css';
import { Card } from 'react-bootstrap';
import CardList from './CardList';


class Main extends Component {
    render() {
        return (
            <div className="outer">
                <div className="main">
                    <Route path="/Clients" component={Dashboard}  />
                    
                </div>
                
                    <Route path="/Clients/add" component={AddClient}  />
                
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

                    <div className="cards">
                        <CardList />

                    </div>
                    
                </div>
                
            </div>
            
        );
    }
}
export default Main;

























// {/* <Route path="/contests/:contestId" component={ContestPage} exact />
//                     <Route path="/contests/:contestId/questions/:questionId"
//                         component={QuestionPage}
//                         exact /> */}