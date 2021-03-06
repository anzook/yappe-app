import React, { Component } from "react";
import API from '../../utils/API'

import ValidationMessage from '../ValidationMessage';

import { Button, Form } from "react-bootstrap";

import "./style.css";

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '', emailValid: false,
            password: '', passwordValid: false,
            formValid: false,
            errorMsg: {},
            redirectTo: null
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    // function to validate entire form
    validateForm = () => {
        const { emailValid, passwordValid } = this.state;
        this.setState({
            formValid: emailValid && passwordValid
        })
    }

    // update fields states
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(
            { [name]: value },
            () => { this.validateFeild(name, value) }
        );
    };

    // validate fields
    validateFeild(feildName, value) {
        let errorMsg = { ...this.state.errorMsg }
        const { email, password } = this.state;

        // validate name field
        switch (feildName) {
            // validate email field
            case 'email':
                let emailValid = true;

                // checks for format _@_._
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    emailValid = false;
                    errorMsg.email = 'Invalid email format'
                }

                this.setState({ emailValid, errorMsg }, this.validateForm)
                break;

            // validate password field
            case 'password':
                let passwordValid = true;

                // must be 3 chars
                if (password.length < 3) {
                    passwordValid = false;
                    errorMsg.password = 'Password must be at least 6 characters long';
                }

                this.setState({ passwordValid, errorMsg }, this.validateForm);
                break;

            default:
                break;
        }
    }

    // submit form function
    handleFormSubmit = event => {
        event.preventDefault();
        API.loginUser({
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                if (res.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: res.data.email
                    })

                }
            }).catch(err => {
                // console.log('Login error: ', err)            
            })
    }

    render() {
        return (
            <Form className="login-form">
                <h4>Login</h4>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <ValidationMessage
                        valid={this.state.emailValid}
                        message={this.state.errorMsg.email}
                    />
                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <ValidationMessage
                        valid={this.state.passwordValid}
                        message={this.state.errorMsg.password}
                    />
                </Form.Group>

                <Button 
                    type="submit"
                    onClick={this.handleFormSubmit}
                    disabled={!this.state.formValid}
                    className="login-btn"
                >
                    Log In
                    </Button>
            </Form>
        )
    }
    // }
}
export default LoginForm