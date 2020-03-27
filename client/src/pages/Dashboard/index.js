import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import YapNav from '../../components/NavBar';
import DogCard from '../../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import YapFooter from '../../components/Footer';
import API from '../../utils/API';
import InfoCard from '../../components/InfoCard';




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

    let infoCard = this.state.user[0]?.pets.map((pet) => {
      console.log(pet);

      return <div>
        <InfoCard name={pet.name} age={pet.age} breed={pet.breed} />
      
      </div>

    })
  
                      
 
    return (
  <div>
    <YapNav />
    <Jumbotron />
    <Container>
      <Row xs={2} md={4}>
        {cardOne}
        {infoCard}
        
      </Row>
    </Container>
    <YapFooter />
  </div>
);
  }
}



export default Dashboard;
