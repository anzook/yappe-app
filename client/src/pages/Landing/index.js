import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'

import Row from "../../components/Row";
import Container from "../../components/Container";
import Hero from "../../components/hero"
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
import API from "../../utils/API"

class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          email: null,
          name: null,
            display: 'first',
            action: `Don't have an account? Sign up.`,
            className: {
                loginDiv: 'loginDiv',
                signUpDiv: 'signUpDiv'
            }
          // redirectTo: "/"
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }


    componentDidMount() {
        this.getUser()
      }
    
      updateUser (userObject) {
        this.setState(userObject)
      }
    
      getUser() {
        API.getUserInfo().then(res => {
          // console.log('Get user response: ')
          // console.log(res.data)
          if (res.data.user) {
            // console.log('Get User: There is a user saved in the server session: ')
    
            this.setState({
              loggedIn: true,
               email: res.data.user.email,
               name: res.data.user.name
            })
          } else {
            // console.log('Get user: no user found');
            this.setState({
              loggedIn: false,
              username: null,
              // redirectTo: '/'
            })

          }
        })
      }
      
  
    changeDisplay = () => {
        let { display, action } = this.state;
        this.setState({
            display: display === 'first' ? 'second' : 'first',
            action: action === `Don't have an account? Sign up.` ? 'Already have an account? Log in.' : `Don't have an account? Sign up.`
            
        });
    }

    renderForm() {
        let { display } = this.state;

        if (display === 'first') {
            return (
                <div>
                    <h3>Login</h3>
                    <LoginForm 
                    updateUser={this.updateUser}
                    />
                </div>
            )
        } else if (display === 'second') {
            return (
                <div>
                    <h3>Sign Up</h3>
                    <SignupForm />
                </div>
            )
        }
    }

    render() {
    //   if (this.state.redirectTo) {
    //     return <Redirect to={{ pathname: this.state.redirectTo }} />
    // } else {
      let className = {
        formDiv: 'formDiv',
        toggleBtn: 'toggleBtn'
    };
        return (
            <div>
                <Hero/>
                <div className={className.formDiv}>
                <Container style={{ marginTop: 0 }}>
                    <Row>
                            {this.renderForm()}
                            <br />
                            <span className={className.toggleBtn} onClick={this.changeDisplay}>
                            {this.state.action}
                        </span>
                            {/* <LoginForm updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>  */}
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
  // }
}

export default LandingPage;
