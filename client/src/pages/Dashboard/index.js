import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron'
import YapNav from '../../components/Navbar'
import DogCard from '../../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import YapFooter from '../../components/Footer'
import API from '../../utils/API'




class Dashboard extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    // const userId = window.location.search.substring(1);
    // API.getUser(userId)

  }
  render() {
    // let cardOne = this.state.user[0]?.pets.map((pet) => {
      console.log(pet);

      return <div>
        <DogCard name={pet.name} breed={pet.breed} age={pet.age} />
      
      </div>

    // })
  
                      
 
    return (
  <div>
    <YapNav />
    <Jumbotron />
    <Container>
      <Row xs={2} md={4}>
        {cardOne}
        
      </Row>
    </Container>
    <YapFooter />
  </div>
);
  }
}



export default Dashboard;
