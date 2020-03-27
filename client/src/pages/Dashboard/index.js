import React, { Component } from 'react';
// import Jumbotron from '../../components/jumbotron'
import Sidenav from '../../components/navbar'
import DogCard from '../../components/card'
import {Container,Col,Row} from 'react-bootstrap'
// import YapFooter from '../../components/Footer'
import API from '../../utils/API'
import '../Dashboard/'




class Dashboard extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    const userId = window.location.search.substring(1);
    API.getUser(userId)
      .then(res => {
        this.setState({ user: res.data })
        console.log(this.state)
      })

  }
  render() {
    let cardOne = this.state.user[0]?.pets.map((pet) => {
      console.log(pet);

      return <div>
        <DogCard name={pet.name} breed={pet.breed} age={pet.age} />
      
      </div>

    })
  
                      
 
    return (
  <div>
   
    {/* <Jumbotron /> */}
    <Container>
    <Row>
    <Col xs={4}> <Sidenav /></Col>
    <Col xs={4}>{cardOne}</Col>
    <Col xs={4}>3 of 3</Col>
  </Row>

    </Container>
    {/* <YapFooter /> */}
  </div>
);
  }
}



export default Dashboard;
