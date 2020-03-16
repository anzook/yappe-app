import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "../main/style.css";

export class Main extends Component {
    render() {
        return (
            <div id="main">
                <Jumbotron>
                    <h1>Welcome back, Robin</h1>
                    <p> Last activity: </p>
                    <p> Last Caretaker Used:</p>
                </Jumbotron>
            </div>
        )
    }
}

export default Main;