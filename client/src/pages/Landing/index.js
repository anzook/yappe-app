import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'

import Row from "../../components/Row";
import Col from "../../components/Col";
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

    render() {
    //   if (this.state.redirectTo) {
    //     return <Redirect to={{ pathname: this.state.redirectTo }} />
    // } else {
        return (
            <div>
                <Hero/>
                <Container style={{ marginTop: 0 }}>
                    <Row>
                        <Col size="md-12">
                            <h2>Sign Up Form</h2>
                            <SignupForm />
                            <br />
                            <h2>Login Form</h2>
                            <LoginForm updateUser={this.updateUser} loggedIn={this.state.loggedIn}/> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
  // }
}

export default LandingPage;
