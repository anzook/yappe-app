import React, { Component } from 'react';
import { Breakpoint } from 'react-socks'
import { Form, Navbar, Nav } from 'react-bootstrap';
import AddDogModal from '../AddDogModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
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
      // console.log('Logging out.. ')
      if (res.status === 200) {
        this.props.updateUser({
          loggedIn: false
        })
      }
    }).catch(error => {
      // console.log('Error logging out')
    })
  }

  render() {
    return (
      <div>
        {/* render navbar's mobile view */}
        <Breakpoint customQuery="(max-width: 1026px)">
          <div >
            <Navbar fixed='top' className='nav' expand="lg">
              <Navbar.Brand href="/dashboard">yappE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />
                <AddDogModal/>
                <FontAwesomeIcon onClick={this.handleLogOff} className='icon' icon={faSignOutAlt} />
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Breakpoint>

        {/* render navbar's desktop view */}
        <Breakpoint customQuery="(min-width: 1027px)">
          <div >
            <Navbar fixed='top' className='nav' expand="lg">
              <Navbar.Brand href="/dashboard">yappE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />
                  <FontAwesomeIcon onClick={this.handleLogOff} className='icon' icon={faSignOutAlt} />
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Breakpoint>
      </div>
    )
  }
}

export default YapNav;
