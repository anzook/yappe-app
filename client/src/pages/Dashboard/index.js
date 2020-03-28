import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import YapNav from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import DogCard from "../../components/Card";
import { Container, Row, Col } from "react-bootstrap";
import YapFooter from "../../components/Footer";
// import AddDogModal from '../../components/AddDogModal'
import "./style.css";
import API from "../../utils/API";
// import '../Dashboard/'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
      name: null,
      id: null,
      redirectTo: '/dashboard',
      user: {}
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser () {
    // this.setState(userObject)
    this.getUser();
  }

    let actions = [{ type: "peed", detail:"filler" }]
      
    
      // actions={actions} needs to be changed to {this.state.actions} after add activity is created.
      return <DogCard name={pet.name} actions={actions}  />
    
    })
    // let infoCard = this.state.user[0]?.actions.map((pet) => {
    //   console.log(actions);

    //   return <InfoCard 
    // })   
    

  getUser = () => {
    console.log("Calling request for user info... ");
    API.getUserInfo().then(sessionRes => {
      // console.log('Get user response: ')
      if (sessionRes.data.name) {
        console.log("user id: ", sessionRes.data.id);
        API.getUser(sessionRes.data.id).then(res => {
          this.setState({ 
            user: res.data, 
            loggedIn: true,
          email: sessionRes.data.email,
          name: sessionRes.data.name,
          id: sessionRes.data.id
          });
        });

      } else {
        console.log("Get user: no user found");
        this.setState({
          loggedIn: false,
          email: null,
          id: null,
          redirectTo: '/'
        });
      }
    });
  }

  componentDidMount() {
    this.getUser();
    
  }

  render() {
    let cardOne = this.state.user?.pets?.map(pet => {
      console.log(pet);

      return (
        <DogCard name={pet.name} breed={pet.breed} age={pet.age} key={pet.id} />
      );
    });
    if (!this.state.loggedIn) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
    return (
      <div>
        <YapNav updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        <Container fluid>
          <Row>
            <Col xs md={2}>
              <SideNav/>
              {/* 1 of 3 */}
            </Col>
            <Col xs md={6}>{cardOne}</Col>
            <Col xs md={4}><InfoCard /></Col>
            
          </Row>
        </Container>
        <YapFooter />
      </div>
    );
  }
}
}

export default Dashboard;
