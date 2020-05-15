import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import './style.css'
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
      redirectTo: '/',
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser() {
    // this.setState(userObject)
    this.getUser();
  }

  getUser() {
    // console.log("Calling request for user info... ");
    API.getUserInfo().then(res => {
      // console.log('Get user response: ')
      if (res.data.name) {
        console.log('Get User: There is a user saved in the server session: ')
        console.log(res)

        this.setState({
          loggedIn: true,
          email: res.data.email,
          name: res.data.name,
          redirectTo: '/dashboard'
        })
      } else {
        // console.log('Get user: no user found');
        this.setState({
          loggedIn: false,
          email: null,
          redirectTo: '/'
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
        <div className="form">

          <LoginForm
            updateUser={this.updateUser}
          />
          <span className='toggleBtn' onClick={this.changeDisplay}>
            {this.state.action}
          </span>

        </div>
      )
    } else if (display === 'second') {
      return (
        <div className="form">

          <SignupForm
            updateUser={this.updateUser}
          />
          <span className='toggleBtn' onClick={this.changeDisplay}>
            {this.state.action}
          </span>

        </div>
      )
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <Hero />
            <Container className='landing-container formDiv'>
                {this.renderForm()}
                <br />
            </Container>
        </div>
      )
    }
  }
}

export default LandingPage;
