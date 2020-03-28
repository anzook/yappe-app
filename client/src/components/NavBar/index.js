import React, { Component } from 'react';
import { Form, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
// import './style.css'

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
  handleLogOff = () => {
    console.log('I was clicked');
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
