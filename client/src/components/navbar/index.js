import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import './style.css';

export class YapNav extends Component {
    render() {

        return (
            <div id="nav">
               <Navbar>
        <Navbar.Brand href="#home">YAPPE</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Add Care</Nav.Link>
          <Nav.Link href="#features">Add Dog</Nav.Link>
          <Nav.Link href="#pricing">Activity log</Nav.Link>
        </Nav>
      </Navbar>

            </div>
        )

    }
}


export default YapNav;
