import React, { Component } from 'react';
import YapNav from '../../components/NavBar'
import SideNav from '../../components/SideNav'
import DogCard from '../../components/Card'
import { Container, Row, Col } from 'react-bootstrap';
import YapFooter from '../../components/Footer'
// import AddDogModal from '../../components/AddDogModal'
import './style.css'
import API from '../../utils/API'
import '../Dashboard/'




class Dashboard extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    const userId = localStorage.getItem('id');
    API.getUser(userId)
      .then(res => {
        this.setState({ user: res.data })
        console.log(this.state)
      })

  }
  render() {
    let cardOne = this.state.user[0]?.pets.map((pet) => {
      console.log(pet);

      return <DogCard name={pet.name} breed={pet.breed} age={pet.age} key={pet.id} />


    })



    return (
      <div>
        <YapNav />
        <Container fluid>
          <Row>
            <Col sx md={2}>
              <SideNav/>
              {/* 1 of 3 */}
            </Col>
            <Col sx md={6}>{cardOne}</Col>
            <Col sx md={4}>3 of 3</Col>
          </Row>
        </Container>
        <YapFooter />
      </div >
    );
  }
}



export default Dashboard;
