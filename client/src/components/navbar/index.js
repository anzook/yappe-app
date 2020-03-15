import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

export class Nav extends Component {
    render() {

        return (
            <div id="nav">
            <Navbar>
                <Navbar.Brand href="#home">Yappe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
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