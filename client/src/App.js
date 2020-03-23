import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/landing-page"
import addDog from "./pages/add-dog";
import { BrowserRouter as Router, Route } from "react-router-dom"
// import AddDog from "./pages/add-dog";


function App() {
    return (
        <Router>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/add-dog" component={addDog}/>
           <Route exact path="/dashboard" component={Dashboard} />
        </div>
        </Router>
    )
}

export default App;
