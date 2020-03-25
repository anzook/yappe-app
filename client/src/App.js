import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddDog from "./pages/AddDog";

// let userId = 4;

function App() {
    return (
        <Router>
        <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/add-dog" component={AddDog}/>
           <Route exact path="/dashboard" component={Dashboard} />
        </div>
        </Router>
    )
}

export default App;
