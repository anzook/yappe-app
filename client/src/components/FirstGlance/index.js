import React, { Component } from 'react';
import LineChart from '../../components/LinesChart';
import DoughnutChart from "../../components/DoughnutChart";
import { Container, Row, Col } from 'react-bootstrap';

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

  getOwnedPets() {
    let allPets = this.props.user.pets;
    let ownedPetsFiltered = allPets.filter(pet =>
      pet.user_pets.role === 'owner'
    )
    this.setState({ ownedPets: ownedPetsFiltered })
  }

  render() {
    let donutCharts = this.state.ownedPets?.map(pet => {
      return <li key={pet.id}><DoughnutChart petInfo={pet} /></li>
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
        <Col><LineChart /></Col>
      </Row>
    </Container>)

  }
}