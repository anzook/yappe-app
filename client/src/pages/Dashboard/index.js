import React, { Component } from "react";
import { 
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import YapNav from "../../components/Navbar";
import SidebarContent from "../../components/SidebarContent";
import DogCard from "../../components/Card";
import { Container, Row, Col } from "react-bootstrap";
import DogInformation from '../../components/DogInformation'
import FirstGlance from '../../components/FirstGlance';
import "./style.css";
import Funtions from '../../utils/Functions'
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
      return <FirstGlance user={this.state.user}/>
    }
    else if (display === 'dog-info') {
      return <DogInformation
        user={this.state.id}
        id={this.state.petSelect.id}
        name={Funtions.capitalize(this.state.petSelect.name)}
        sex={Funtions.capitalize(this.state.petSelect.sex)}
        breed={Funtions.capitalize(this.state.petSelect.breed)}
        age={this.state.petSelect.age}
        actions={this.state.petActivities}
      />
    }
  }

  render() {
    let cardOne = this.state.user?.pets?.map(pet => {
      let Infopet = { id: pet.id, name: pet.name, age: pet.age, sex: pet.sex, breed: pet.breed, pictureLink: pet.pictureLink };
      return <DogCard
        onClick={() => { this.changeDisplay(Infopet); this.getActions(Infopet.id); }}
        name={Funtions.capitalize(pet.name)}
        id={pet.id}
        key={pet.id}
        pictureLink={pet.pictureLink}
        role={Funtions.capitalize(pet.user_pets.role)}
      />

    })

    if (!this.state.loggedIn) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className='dashboard-div'>
          <YapNav id="yap-nav" updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Container fluid>
          <SidebarContent />
            <Row>
              <Col xs md={4} className='dog-cards-col'>{cardOne}</Col>
              <Col xs md={8}>{this.renderDisplay()}
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Dashboard;
