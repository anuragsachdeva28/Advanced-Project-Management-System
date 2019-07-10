import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from "../../actions/authActions";

class SignInForm extends Component {

  state = {
    email: '',
    password: '',
    loading: false
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({loading:true});
    console.log("The form was submitted with the following data:");

    this.props.signIn(this.state);
    setTimeout( ()=>{

      (this.props.authError)? this.setState({loading:false}): console.log("no Error")
    },1000)

    // console.log(this.props,"k,kj,kj,hj,hj,hj,")

  }


  render() {
    // console.log("see this prop", this.props);
    const { authError } = this.props;
    const {loading} =this.state;

    return (
      <div className="FormCenter">
        <form

          onSubmit={this.handleSubmit}
          className="FormFields"
        >
          <label className="login">Log in</label>
          <div className="FormField">
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="dexpert id"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          { authError ? <p>{authError}</p> : null }
          {/*{ authError ? this.setState({loading:false}): null}*/}

          {/*<div className="FormField for">*/}
          {/*  <Link to="#" className="forget">*/}
          {/*    {" "}*/}
          {/*    Forget Password?{" "}*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <br />

          <div className="FormField btn-submit">

              {/*<button type="submit" className="FormField__Button mr-20"><a href="./clients/">Sign In</a></button>*/}
              <button disabled={loading} type="submit" className="FormField__Button mr-20">
                { loading && <i className={"fa fa-refresh fa-spin"}></i>}
                { loading ? "      Loading..." : "Sign In"}

              </button>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state)  => {
  // console.log("cdscDSCdscdscdsc",state)
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInForm);
