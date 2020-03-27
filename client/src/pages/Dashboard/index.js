import React, { Component } from 'react';
import YapNav from '../../components/NavBar'
import DogCard from '../../components/Card'
import DogForm from '../../components/DogForm'
import { Container, Row, Col } from 'react-bootstrap';
import YapFooter from '../../components/Footer'
import './style.css'
import API from '../../utils/API'




class Dashboard extends Component {
  state = {
    user: {},
    breeds: []
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
              {/* 1 of 3 */}
              <DogForm
                breeds={this.state.breeds}
                onClick={this.handleFormSubmit} />
            </Col>
            <Col sx md='auto'>{cardOne}</Col>
            <Col sx md={4}>3 of 3</Col>
          </Row>
        </Container>
        <YapFooter />
      </div >
    );
  }
}



export default Dashboard;
