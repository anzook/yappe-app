import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../Footer'

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="https://github.com/anzook/yappe-app">Help Us Improve</Navbar.Brand>
                </Navbar>
                <Footer sticky="bottom" />
            </div>
        )
    }
}

export default Footer;