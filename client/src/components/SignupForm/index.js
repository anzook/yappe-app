import React, { Component } from 'react';
import API from '../../utils/API';

import ValidationMessage from '../ValidationMessage';

import { Form, Button } from 'react-bootstrap';

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

                // must be 3 chars
                if (password.length < 3) {
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
        return (
            <Form className='signup-form'>
                <h4>Sign Up</h4>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                        name='name'
                        value={this.state.name}
                        className={`
                                ${(this.state.name.length > 0 && !this.state.nameValid) ?
                                'is-invalid' : ''}
                                
                                ${(this.state.name.length > 0 && this.state.nameValid) ?
                                'is-valid' : ''}`}
                    />
                    <ValidationMessage valid={this.state.nameValid} message={this.state.errorMsg.username} />
                </Form.Group>

                <Form.Group >
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        name='email'
                        className={`
                            ${(this.state.email.length > 0 && !this.state.emailValid) ?
                                'is-invalid' : ''}
                            
                            ${(this.state.email.length > 0 && this.state.emailValid) ?
                                'is-valid' : ''}`}
                    />
                    <ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                </Form.Group>

                <Form.Group >
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        name='password'
                        className={`
                            ${(this.state.password.length > 0 && !this.state.passwordValid) ?
                                'is-invalid' : ''}
                            
                            ${(this.state.password.length > 0 && this.state.passwordValid) ?
                                'is-valid' : ''}`}
                    />
                    <ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                </Form.Group>

                {/* render if password is valid */}
                {this.state.passwordValid && <Form.Group >
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        name='passwordConfirm'
                        disabled={!this.state.passwordValid}
                        className={`
                            ${(this.state.passwordConfirm.length > 0 && !this.state.passwordConfirmValid) ?
                                'is-invalid' : ''}
                            
                            ${(this.state.passwordConfirm.length > 0 && this.state.passwordConfirmValid) ?
                                'is-valid' : ''}`}
                    />
                    <ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
                </Form.Group>}

                <Button
                    variant="primary"
                    type="submit"
                    disabled={!this.state.formValid}
                    onClick={this.handleFormSubmit}
                    className="signup-btn"
                >
                    Sign Up
                    </Button>

            </Form >
        )
    }
}
export default SignupForm;