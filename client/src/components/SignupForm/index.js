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

    validateForm = () => {
        const { nameValid, emailValid, passwordValid, passwordConfirmValid } = this.state;
        this.setState({
            formValid: nameValid && emailValid && passwordValid && passwordConfirmValid
        })
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(
            { [name]: value },
            () => { this.validateFeild(name, value) }
        );
    };

    validateFeild(feildName, value) {
        let errorMsg = { ...this.state.errorMsg }

        switch (feildName) {
            case 'name':
                const { name } = this.state;
                let nameValid = true;

                if (name.length < 3) {
                    nameValid = false;
                    errorMsg.username = 'Name must be at least 3 characters long'
                    console.log(errorMsg.username);
                }

                this.setState({ nameValid, errorMsg }, this.validateForm)
                break;

            case 'email':
                const { email } = this.state;
                let emailValid = true;

                // checks for format _@_._
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    emailValid = false;
                    errorMsg.email = 'Invalid email format'
                    console.log(errorMsg.email);
                }

                this.setState({ emailValid, errorMsg }, this.validateForm)
                break;

            case 'password':
                const { password } = this.state;
                let passwordValid = true;

                // must be 6 chars
                // must contain a number
                // must contain a special character

                if (password.length < 6) {
                    passwordValid = false;
                    errorMsg.password = 'Password must be at least 6 characters long';
                } 
                // else if (!/\d/.test(password)) {
                //     passwordValid = false;
                //     errorMsg.password = 'Password must contain a digit';
                // }
                //  else if (!/[!@#$%^&*]/.test(password)) {
                //     passwordValid = false;
                //     errorMsg.password = 'Password must contain special character: !@#$%^&*';
                // }

                this.setState({ passwordValid, errorMsg }, this.validateForm);
                break;

            case 'passwordConfirm':
                break;
            default:
                break;
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("I was hit!");
        API.createUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                // console.log("This is the user id: " + res.data)
                // let userId = res.data
                // window.location.replace('/add-dog?' + userId);
                if (!res.data.errmsg) {
                    // console.log('successful signup, logging in... ')
                    API.loginUser({
                        email: this.state.email,
                        password: this.state.password
                    })
                        .then(res => {
                            if (res.status === 200) {
                                // console.log(res)
                                // console.log('logging in... ')

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
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // } else {
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
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            onChange={this.handleInputChange}
                            name='passwordConfirm'
                        />
                    </Form.Group>
                    <Button id="signup-btn"
                        variant="primary"
                        type="submit"
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