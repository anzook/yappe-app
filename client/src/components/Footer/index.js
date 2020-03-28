import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import '../Footer/style.css'

export class YapFooter extends Component {
    render() {
        return (
            <div>
                <Navbar id="nav" expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="https://github.com/anzook/yappe-app">Help Us Improve</Navbar.Brand>
                </Navbar>
                <Navbar sticky="bottom" />
            </div>
        )
    }
}

export default YapFooter;
