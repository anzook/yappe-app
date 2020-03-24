import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import API from '../../utils/API'

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
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
                console.log('successful signup, redirecting... ')
                this.setState({ //redirect to login page
                    redirectTo: '/'
                })
            }
        }).catch(err => {
            console.log('Signup error: ')
            console.log(err)
        })
    };

    render() {
        return (
            <Form>
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
                <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleFormSubmit}
                >
                    Sign Up
                </Button>
            </Form >
        )

    }
}
export default SignupForm;