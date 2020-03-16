import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import '../navbar/style.css';

export class Nav extends Component {
    render() {

        return (
            <div id="nav">
            <Navbar>
            <Navbar.Brand href="#home">Yappe</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
         </div>
        )
        
    }
}


export default Nav;