import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import API from '../../utils/API'
import { Redirect } from 'react-router-dom'


export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
        email: '',
        password: '',
        redirectTo: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
}

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.loginUser({
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log('login sent, response... ')
            // console.log(res)
            if (res.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: res.data.email
                })
                // update the state to redirect to user home
                this.setState({
                    redirectTo: '/dashboard'
                })
            }
        }).catch(err => {
            console.log('Login error: ', err)            
        })
    }

    render() {
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // } else {
    return (
        
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="login-username" 
                placeholder="Email" 
                name='email'
                value={this.state.email}
                onChange={this.handleInputChange}
                />
            </Form.Group>


            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="login_password" 
                placeholder="Password" 
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                />
            </Form.Group>          

            <Button 
            variant="primary" 
            type="submit"
            onClick={this.handleFormSubmit}
            >
                Log In
            </Button>
            </Form>
           
    )
    }
// }
    }
    export default LoginForm