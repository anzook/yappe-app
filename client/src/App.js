import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/Landing"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddDog from "./pages/AddDog";
import API from './utils/API'


class App extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          email: null,
          name: null,
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }


    componentDidMount() {
        this.getUser()
      }
    
      updateUser (userObject) {
        this.setState(userObject)
      }
    
      getUser() {
        API.getUserInfo().then(res => {
          // console.log(res.data)
          if (res.data.user) {
            console.log('Get User: There is a user saved in the server session... ')
    
            this.setState({
              loggedIn: true,
               email: res.data.user.email,
               name: res.data.user.name
            })
          } else {
            console.log('Get user: no user found');
            this.setState({
              loggedIn: false,
              username: null
            })
          }
        })
      }

    render() {
    return (
        <div className="App">
        <Router>

            <Route exact path="/" component={LandingPage} />
            <Route exact path="/add-dog" component={AddDog}/>
           <Route exact path="/dashboard" component={Dashboard} />
        </Router>
        </div>

    )
    }
}

export default App;
