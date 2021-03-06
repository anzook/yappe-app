import React, { Component } from './node_modules/react'
import Jumbotron from './node_modules/react-bootstrap/Jumbotron'
import "./style.css";

export class Jumbotron extends Component {
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
