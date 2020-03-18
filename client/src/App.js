import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
    return (
        <Router>
        <div>
           <Route exact path="/" component={Dashboard} />
        </div>
        </Router>

    )
}

export default App;
