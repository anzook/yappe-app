import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";


export class LoginForm extends Component {
    render() {
    return (
        
        <Form>
            <Form.Group controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="signup_username" placeholder="User Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="signup_email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="signup_password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="login-username" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="login_password" placeholder="Password" />
            </Form.Group>          
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            </Form>
           
    )
    }
    }
    export default LoginForm