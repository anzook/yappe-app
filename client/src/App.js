import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/landing-page"
import { BrowserRouter as Router, Route } from "react-router-dom"
import API from './utils/API';

function App() {
    return (
        <Router>
        <div>
            <Route exact path="/" component={LandingPage} />
           <Route exact path="/dashboard" component={Dashboard} />
        </div>
        </Router>
    )
}

export default App;
