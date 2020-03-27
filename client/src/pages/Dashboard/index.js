import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron'
import YapNav from '../../components/NavBar'
import DogCard from '../../components/Card'
import DogForm from '../../components/DogForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import YapFooter from '../../components/Footer'
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

      return <DogCard name={pet.name} breed={pet.breed} age={pet.age} key={pet.id}/>


    })



    return (
      <div>
        <YapNav />
        <Jumbotron />
        <Container>
          <Row xs={2} md={4}>
            {cardOne}

          </Row>
        </Container>
        <DogForm
          breeds={this.state.breeds}
          onClick={this.handleFormSubmit} />
        <YapFooter />
      </div>
    );
  }
}



export default Dashboard;
