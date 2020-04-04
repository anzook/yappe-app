import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import API from '../../utils/API'
import { Redirect } from 'react-router-dom'
import "./style.css";

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
            // console.log('login sent, response... ')
            // console.log(res)
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

    // constructor() {
    //     super()
    //     this.state = {
    //       loggedIn: false,
    //       email: null,
    //       name: null,
    //       display: 'first',
    //       action: `Don't have an account? Sign up.`,
    //       redirectTo: '/',
    //     }
    //     this.getUser = this.getUser.bind(this)
    //     this.componentDidMount = this.componentDidMount.bind(this)
    //     this.updateUser = this.updateUser.bind(this)
    //   }
    
    //   componentDidMount() {
    //     this.getUser()
    //   }
    
    //   updateUser() {
    //     // this.setState(userObject)
    //     this.getUser();
    //   }
    
    //   getUser() {
    //     console.log("Calling request for user info... ");
    //     API.getUserInfo().then(res => {
    //       // console.log('Get user response: ')
    //       if (res.data.name) {
    //         console.log('Get User: There is a user saved in the server session: ')
    //         console.log(res)
    
    //         this.setState({
    //           loggedIn: true,
    //           email: res.data.email,
    //           name: res.data.name,
    //           redirectTo: '/dashboard'
    //         })
    //       } else {
    //         console.log('Get user: no user found');
    //         this.setState({
    //           loggedIn: false,
    //           email: null,
    //           redirectTo: '/'
    //         })
    
    //       }
    //     })
    //   }
    
    
      // changeDisplay = () => {
      //   let { display, action } = this.state;
      //   this.setState({
      //     display: display === 'first' ? 'second' : 'first',
      //     action: action === `Don't have an account? Sign up.` ? 'Already have an account? Log in.' : `Don't have an account? Sign up.`
    
      //   });
      // }

    render() {
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // } else {
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
            </Form.Group>


            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                />
            </Form.Group>          

            <Button id="login-btn"
            variant="primary" 
            type="submit"
            onClick={this.handleFormSubmit}
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