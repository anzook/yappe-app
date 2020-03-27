import React, { Component } from 'react';
import { Form, Navbar, Button, Nav } from 'react-bootstrap';
import './style.css'

export class YapNav extends Component {
  render() {
    return (
      <div >
        <Navbar className='nav' expand="lg">
          <Navbar.Brand href="#">yappE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
            <Form inline>
              <Button className='button' variant="dark">Log out</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default YapNav;
