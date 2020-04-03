import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap'
import API from '../../utils/API'
import "./style.css";

class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
        name: '',
        email: '',
        password: '',
        redirectTo: null
    }
}

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("I was hit!");
        API.createUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log("This is the user id: " + res.data)
            // let userId = res.data
            // window.location.replace('/add-dog?' + userId);
            if (!res.data.errmsg) {
                console.log('successful signup, logging in... ')
                API.loginUser({
                    email: this.state.email,
                    password: this.state.password
                })
                .then(res => {
                    if (res.status === 200) {
                        // console.log(res)
                        console.log('logging in... ')

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