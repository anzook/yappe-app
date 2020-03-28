import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/Landing"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import AddDog from "./pages/AddDog";
// import API from './utils/API'


class App extends Component {
    constructor() {
        super()
        this.state = {
        
        }

    }

    render() {
    return (
        <div className="App">
        <Router>

            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/add-dog" component={AddDog}/> */}
           <Route exact path="/dashboard" component={Dashboard} />
        </Router>
        </div>

    )
    }
}

export default App;
