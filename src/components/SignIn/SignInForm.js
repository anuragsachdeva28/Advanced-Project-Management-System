import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                <label className="login" >Log in</label>
                <div className="FormField">
                    
                    <input type="email" id="email" className="FormField__Input" placeholder="dexpert id" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    
                    <input type="password" id="password" className="FormField__Input" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="FormField for">
                    <Link to="#" className="forget"> Forget Password? </Link>
                </div>
                <br /><br /><br />
                <div className="FormField btn-submit">
                    <button className="FormField__Button mr-20">Sign In</button>
                </div>
                </form>
            </div>
        )
    }
}


export default SignInForm;