import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {NavLink} from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/navbar"
import Car from "./components/card"

function App() {
    return (
        <div>
     <Nav/>
     
         <Car/>
         </div>
         
    )
}

export default App;
