import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap'
import API from '../../utils/API'
import "./style.css";

class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '', nameValid: false,
            email: '', emailValid: false,
            password: '', passwordValid: false,
            passwordConfirm: '', passwordConfirmValid: false,
            formValid: false,
            errorMsg: {},
            redirectTo: null
        }
    }

    // function to validate entire form
    validateForm = () => {
        const { nameValid, emailValid, passwordValid, passwordConfirmValid } = this.state;
        this.setState({
            formValid: nameValid && emailValid && passwordValid && passwordConfirmValid
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
        const { name, email, password, passwordConfirm } = this.state;

        // validate name field
        switch (feildName) {
            case 'name':
                let nameValid = true;

                if (name.length < 3) {
                    nameValid = false;
                    errorMsg.username = 'Name must be at least 3 characters long'
                }

                this.setState({ nameValid, errorMsg }, this.validateForm)
                break;

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

                // must contain a number
                // else if (!/\d/.test(password)) {
                //     passwordValid = false;
                //     errorMsg.password = 'Password must contain a digit';
                // }

                // must contain a special character
                //  else if (!/[!@#$%^&*]/.test(password)) {
                //     passwordValid = false;
                //     errorMsg.password = 'Password must contain special character: !@#$%^&*';
                // }

                this.setState({ passwordValid, errorMsg }, this.validateForm);
                break;

            // validate password confirmation field
            case 'passwordConfirm':
                let passwordConfirmValid = true;

                if (password !== passwordConfirm) {
                    passwordConfirmValid = false;
                    errorMsg.passwordConfirm = 'Passwords do not match'
                }

                this.setState({ passwordConfirmValid, errorMsg }, this.validateForm);
                break;

            default:
                break;
        }
    }

    // handle submit
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("I was hit!");
        API.createUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                if (!res.data.errmsg) {
                    API.loginUser({
                        email: this.state.email,
                        password: this.state.password
                    })
                        .then(res => {
                            if (res.status === 200) {
                                // update App.js state
                                this.props.updateUser({
                                    loggedIn: true,
                                    email: res.data.email
                                })
                            }
                        }).catch(err => {
                            console.log('Login error: ', err)
                        })
                }
            }).catch(err => {
                console.log('Signup error: ')
                console.log(err)
            })
    };

    render() {
        let signup = 'signup';
        return (
            <div>
                <h1>yappE</h1>

                <Form className={signup}>
                    <h3>Sign Up</h3>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            onChange={this.handleInputChange}
                            name='name'
                            value={this.state.name}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            name='email'
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={this.handleInputChange}
                            name='password'

                        />
                    </Form.Group>

                    {/* render if password is valid */}
                    {this.state.passwordValid && <Form.Group >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={this.handleInputChange}
                            name='passwordConfirm'
                            disabled={!this.state.passwordValid}
                        />
                    </Form.Group>}

                    <Button
                        id="signup-btn"
                        variant="primary"
                        type="submit"
                        disabled={!this.state.formValid}
                        onClick={this.handleFormSubmit}
                    >
                        Sign Up
                    </Button>

                </Form >
            </div>
        )

        // }
    }
}
export default SignupForm;