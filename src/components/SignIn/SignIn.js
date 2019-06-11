import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignInForm from './SignInForm'

import './sign.css';

class SignIn extends Component {
    render(){
        return(
            <Router>
            <div className="App">
                <div className="App__Aside">
                    <h3>WELCOME TO DEXPERT</h3>
                    <p className="Para" >Et officia reprehenderit tempor labore do nulla qui ut qui et sint incididunt dolor.</p>
                </div>
                <div className="App__Form">
                    <Route path="/sign-in" component={SignInForm}></Route>
                </div>
            </div>
            </Router>
        );
    }
}
export default SignIn;