import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import YapNav from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import DogCard from "../../components/Card";
import { Container, Row, Col } from "react-bootstrap";
import YapFooter from "../../components/Footer";
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
      user: {}
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser() {
    this.getUser();
  }



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

  changeDisplay = () => {
    let { display } = this.state;
    console.log('I was hit')
    this.setState({
      display: display === 'activities' ? 'dog-info' : 'dog-info'
  });

}

renderDisplay() {
    let { display } = this.state;

    if (display === 'activities') {
        return <h1>Activities!!!</h1>
    } else if (display === 'dog-info') {
        return <DogInfo />
    }
}

  render() {
    let cardOne = this.state.user?.pets?.map(pet => {
      let actions = [{ type: "peed", detail: "filler" }]
      return <DogCard onClick={this.changeDisplay} name={pet.name} actions={actions} key={pet.id} />

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
          <YapFooter />
        </div>
      );
    }
  }
}

export default Dashboard;
