import React, { Component } from "react";
import { 
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import YapNav from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import DogCard from "../../components/Card";
import RecentActivity from "../../components/RecentActivityCard";
import { Container, Row, Col } from "react-bootstrap";
import DogInfo from '../../components/DogInfo'
import FirstGlance from '../../components/FirstGlance';
import "./style.css";
import API from "../../utils/API";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
      name: null,
      id: null,
      redirectTo: '/dashboard',
      display: 'activities',
      petSelect: null,
      user: null,
      petActivities: []
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser() {
    this.getUser();
  }

  getUser = () => {
    API.getUserInfo().then(sessionRes => {
      if (sessionRes.data.name) {
        API.getUser(sessionRes.data.id).then(res => {
          console.log(res.data)
          this.setState({
            user: res.data,
            loggedIn: true,
            email: sessionRes.data.email,
            name: sessionRes.data.name,
            id: sessionRes.data.id,
          });
        });

      } else {
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

  getActions = (petId) => {
    API.getPetActions(petId)
      .then(res => {
        this.setState({
          ...this.state,
          petActivities: res.data
        })
      })
  }

  changeDisplay = (petInfo) => {
    let { display } = this.state;
    if (display === 'activities') {
      this.setState({
        display: 'dog-info',
        petSelect: petInfo
      });
    }
    if (display === 'dog-info') {
      this.setState({
        petSelect: petInfo
      });
    }
  }

  renderDisplay() {
    let { display } = this.state;
    if (display === 'activities') {
      return <FirstGlance />
    }
    else if (display === 'dog-info') {
      return <DogInfo
        user={this.state.id}
        pet={this.state.petSelect}
        name={this.state.petSelect.name}
        age={this.state.petSelect.age}
        actions={this.state.petActivities}
      />
    }
  }

  render() {
    let cardOne = this.state.user?.pets?.map(pet => {
      let Infopet = { id: pet.id, name: pet.name, age: pet.age, sex: pet.sex, breed: pet.breed };
      return <DogCard
        onClick={() => { this.changeDisplay(Infopet); this.getActions(Infopet.id); }}
        name={pet.name}
        id={pet.id}
        key={pet.id}
        role={pet.user_pets.role}
      />

    })

    if (!this.state.loggedIn) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className='dashboard-div'>
          <YapNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Container fluid>
            <Row>
              <Col xs md={1}>
                <SideNav />
              </Col>
              <Col xs md={3}>{cardOne}</Col>
              <Col xs md={8}>{this.renderDisplay()}</Col>
            </Row>
          </Container>
          {/* <YapFooter /> */}
        </div>
      );
    }
  }
}

export default Dashboard;
