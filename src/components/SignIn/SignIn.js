import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';

import './sign.css';

class SignIn extends Component {
    render(){
        const { auth } = this.props;
        if(auth.uid) return <Redirect to={"/profile/"}  />
        return(

            <div className="App">
                <div className="App__Aside">
                    <h3>WELCOME TO DEXPERT</h3>
                    <p className="Para" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, temporibus?xs</p>
                </div>
                <div className="App__Form">
                    <Route path="/signin" component={SignInForm}></Route>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    // console.log("my name is state",state);
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(SignIn);