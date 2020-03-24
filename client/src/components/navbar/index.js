import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import './style.css';
import API from '../../utils/API'

export class YapNav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
}
  
logout(event) {
  event.preventDefault()
  console.log('logging out... ')
  API.post('/logout').then(response => {
    console.log(response.data)
    if (response.status === 200) {
      this.props.updateUser({
        loggedIn: false,
        username: null
      })
    }
  }).catch(error => {
      console.log('Logout error')
  })
}

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);
        
    return (
            <div id="nav">
               <Navbar>
        <Navbar.Brand href="#home">YAPPE</Navbar.Brand>
        <Nav className="mr-auto">
          { loggedIn ? ( 
            <section>
          <Nav.Link href="#care">Add Care</Nav.Link>
          <Nav.Link href="#add-dog">Add Dog</Nav.Link>
          <Nav.Link href="#activity">Activity log</Nav.Link> 
          <Nav.Link href="#"
          onClick={this.logout}
          >Logout</Nav.Link> 
          </section>)
           : ( 
            <section>
          <Nav.Link href="/">Home</Nav.Link>

              </section>
           ) }

          }
        </Nav>
      </Navbar>

            </div>
        )

    }
}


export default YapNav;
