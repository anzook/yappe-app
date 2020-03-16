import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {NavLink} from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/navbar"
import Car from "./components/card"
import Main from "./components/main"

function App() {
    return (
        <div>
            <Nav />
            <Main />

            <Car />
        </div>

    )
}

export default App;
