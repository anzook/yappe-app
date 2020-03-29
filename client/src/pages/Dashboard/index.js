import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import YapNav from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import DogCard from "../../components/Card";
import RecentActivity from "../../components/RecentActivityCard";
import { Container, Row, Col } from "react-bootstrap";
// import YapFooter from "../../components/Footer";
import DogInfo from '../../components/DogInfo'
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
      user: null
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
            id: sessionRes.data.id
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
    console.log(this.state.petSelect)
    if (display === 'activities') {
      return (<RecentActivity />)
    } else if (display === 'dog-info') {
      return <DogInfo
        user={this.state.id}
        pet={this.state.petSelect}
        name={this.state.petSelect.name}
        age={this.state.petSelect.age}

      />
    }
  }

  render() {
    let cardOne = this.state.user?.pets?.map(pet => {
      let actions = [{ type: "peed", detail: "filler" }]
      let Infopet = { id: pet.id, name: pet.name, age: pet.age, sex: pet.sex, breed: pet.breed };
      return <DogCard onClick={() => {
        this.changeDisplay(Infopet)
      }}
        name={pet.name}
        actions={actions}
        id={pet.id}
        key={pet.id}
      />

    })

    if (!this.state.loggedIn) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <YapNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Container fluid>
            <Row>
              <Col xs md={2}>
                <SideNav />
                {/* 1 of 3 */}
              </Col>
              <Col xs md={6}>{cardOne}</Col>
              <Col xs md={4}>{this.renderDisplay()}</Col>
              {/* <Col xs md={4}><InfoCard /></Col> */}
             

            </Row>
          </Container>
          {/* <YapFooter /> */}
        </div>
      );
    }
  }
}

export default Dashboard;
