import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
import API from "../../utils/API"

import './style.css'


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
      return <LoginForm updateUser={this.updateUser} />

    } else if (display === 'second') {
      return <SignupForm updateUser={this.updateUser} />
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div >
          <Hero />
          <div className='landing-container'>
            <h1>yappE</h1>
            <div className={'landing-forms-div'}>
              {this.renderForm()}
              <span className='toggleBtn' onClick={this.changeDisplay}>
                {this.state.action}
              </span>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default LandingPage;
