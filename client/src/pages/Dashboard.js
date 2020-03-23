import React, { Component } from 'react';
import Jumbotron from '../components/jumbotron'
import YapNav from '../components/navbar'
import DogCard from '../components/card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CareCard from '../components/careCard'
import YapFooter from '../components/Footer'
import API from '../utils/API'




class Dashboard extends Component {
state = {
  user: {}
}
  componentDidMount() {
    const userId = window.location.search.substring(1);
    API.getUser(userId)
    .then(res => {
      this.setState({user: res.data})
      console.log(this.state)
    })

}
  render() {
    return (
      <div>

        <YapNav />
        <Jumbotron />
        <Container>
          <Row xs={2} md={4}>
            <DogCard />
            <CareCard />
          </Row>
        </Container>
        <YapFooter />
      </div>
    );
  }
}



export default Dashboard;
