import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "../jumbotron/style.css";

export class jumbotron extends Component {
    render() {
        return (
            <div id="main">
                <Jumbotron>
                    <h1>Welcome back, {this.props.name} </h1>
                    <p> Last activity: {this.props.action_log} </p>
                    <p> Last Caretaker Used: {this.props.role} </p>

                </Jumbotron>
            </div>
        )
    }
}

export default Jumbotron;
