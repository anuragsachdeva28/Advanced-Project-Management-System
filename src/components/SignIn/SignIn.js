import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import SignInForm from "./SignInForm";
import { connect } from "react-redux";

import "./sign.css";

class SignIn extends Component {
  state = {
    uid: "",
    admin: true,
    clear: false
  };
  myfunc = () => {
    console.log("trnfvndjkcnj");
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 5000);
  };
  componentDidMount() {
    if(this.props.auth.uid) {
      window.location.href = "/profile/"
    }
    console.log("checked")
  }
  componentWillReceiveProps(nextProps) {
    console.log("this is next props", nextProps);
    if (nextProps.auth.uid) {
      fetch(
        "https://us-central1-dexpert-admin.cloudfunctions.net/api/admins/" +
          nextProps.auth.uid,
        {
          headers: {
            Authorization:
              "Bearer " + nextProps.auth.stsTokenManager.accessToken
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            admin: true
          });
          if (data.error) {
            console.log("calling my functon");
            this.myfunc();
            this.setState({
              admin: false
            });
          } else {
            window.location.href = "/profile/";
          }
        })

        .catch(err => console.log(err));
    }
  }

  render() {
    const { auth } = this.props;
    // if (auth.uid && this.state.admin) return <Redirect to={"/profile/"} />;
    return (
      <Fragment>
        <div className="App">
          <div className="App__Aside">
            <h3>WELCOME TO DEXPERT</h3>
            <p className="Para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              temporibus?xs
            </p>
          </div>
          <div className="App__Form">
            <SignInForm admin={this.state.admin} clear={this.state.clear} />
          </div>
        </div>
        <div id="snackbar">
          Not an Admin ! ! !<br />
          Please contact support or login with an admin id
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log("my name is state",state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(SignIn);
