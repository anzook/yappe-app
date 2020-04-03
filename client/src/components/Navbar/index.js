import React, { Component } from 'react';
import { Form, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import API from '../../utils/API'


export class YapNav extends Component {
    constructor() {
        super()
        this.handleLogOff = this.handleLogOff.bind(this)
    }

  handleLogOff = (event) => {
    event.preventDefault()
      API.logoutUser().then(res => {
        console.log('Logging out.. ')
        if (res.status === 200) {
            this.props.updateUser({
                loggedIn: false
          })
        } 
      }).catch(error => {
        console.log('Error logging out')
    })
  }

  render() {
    return (
      <div >
        <Navbar fixed='top' className='nav' expand="lg">
          <Navbar.Brand href="#">yappE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
            <Form inline>
              <FontAwesomeIcon onClick={this.handleLogOff} className='icon' icon={ faDoorOpen }/>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default YapNav;
