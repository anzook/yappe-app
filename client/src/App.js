import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import landingPage from "./pages/landing-page.js"
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
    return (
        <Router>
        <div>
            <Route exact path="/" component={landingPage} />
            
            {/* <h1>Yappy test!</h1> */}
        </div>
        </Router>
    )
}

export default App;
