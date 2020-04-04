import React, { Component } from 'react';
import LineChart from '../../components/LinesChart';
import DoughnutChart from "../../components/DoughnutChart";
import { Container, Row, Col } from 'react-bootstrap';
import Function from '../../utils/Functions'

import './style.css';

export default class FirstGlance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      ownedPets: []
    }
  }

  componentDidMount() {
    this.getOwnedPets()
  }

  checkPets() {
    if (this.state.user.pets.length > 0) {
      return(
        <LineChart />
      )
    } else {
      return(
        <div className='no-pet-div'>
          <h1>Welcome to </h1>
          <span className='brand'>yappE</span>
          <h1>{Function.capitalize(this.state.user.name)}!</h1>
          <h2>Use the paw on the left side to add your first dog!</h2>
        </div>
      )
    }
  }

  getOwnedPets() {
    let allPets = this.props.user.pets;
    let ownedPetsFiltered = allPets.filter(pet =>
      pet.user_pets.role === 'owner'
    )
    this.setState({ ownedPets: ownedPetsFiltered })
  }

  render() {
    let donutCharts = this.state.ownedPets?.map(pet => {
      return <li key={pet.id}><DoughnutChart petId={pet.id} petName={pet.name} /></li>
    })

    return (<Container>
      <Row>
        <Col>
          <ul className='fg-ul'>
            {donutCharts}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>{this.checkPets()}</Col>
      </Row>
    </Container>)

  }
}