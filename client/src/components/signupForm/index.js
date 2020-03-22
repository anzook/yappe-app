import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

export class SignupForm extends Component {

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={this.props.handleFormChange}
                        name='name'
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={this.props.handleFormChange}
                        name='email'
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={this.props.handleFormChange}
                        name='password'
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={this.props.handleFormSubmit}
                >
                    Sign Up
                </Button>
            </Form>
        )
    }
}
export default SignupForm;