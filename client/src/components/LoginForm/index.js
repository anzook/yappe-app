import React, { Component } from "react";
import API from '../../utils/API'

import ValidationMessage from '../ValidationMessage';

import { Button, Form } from "react-bootstrap";

import "./style.css";

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '', emailValid: null,
            password: '', passwordValid: null,
            formValid: null,
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

                // must be 6 chars
                if (password.length < 6) {
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
            <div>
                <h1>yappE</h1>

                <Form className="login-form">
                    <h3>Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
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
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            disabled={!this.state.emailValid}
                        />
                        <ValidationMessage
                            valid={this.state.passwordValid}
                            message={this.state.errorMsg.password}
                        />
                    </Form.Group>

                    <Button id="login-btn"
                        variant="primary"
                        type="submit"
                        onClick={this.handleFormSubmit}
                        disabled={!this.state.formValid}
                    >
                        Log In
                    </Button>
                </Form>
            </div>
        )
    }
    // }
}
export default LoginForm