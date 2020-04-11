import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BreakpointProvider } from 'react-socks';
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom"


class App extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {
        return (
            <div className="App">
                <BreakpointProvider>
                    <Router >
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </Router>
                </BreakpointProvider>
            </div>

        )
    }
}

export default App;
