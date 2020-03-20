import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom"
import API from './utils/API';

// let array = [
//     {
//         "name": "Queen",
//         "email": "Obama@email.com",
//         "password": "qwsqwting"
//     }
// ]

// API.createUser({
//         "name": "Oliver",
//         "email": "Twist@email.com",
//         "password": "qwsqwting"
//     })
//     .then(res => {
//         const userId = res.data;
//         console.log("Userid:" + userId);
//     })

API.getPet(3)
.then(res => {console.log(res)})


function App() {
    return (
        <Router>
        <div>
           <Route exact path="/dashboard" component={Dashboard} />
        </div>
        </Router>
    )
}

export default App;
