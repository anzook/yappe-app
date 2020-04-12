import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DogOwnedCardMobile from '../DogOwnedCardMobile';
import DogCardMobile from '../DogCardMobile';
import DoughnutChart from '../DoughnutChart';
import './style.css';

export default class FirstGlanceMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            ownedPets:[],
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
        this.setState({
            ownedPets: ownedPetsFiltered,
            user: this.props.user
        })
    }

    render() {
        const dogCards = this.props.user?.pets?.map(pet => {
            return <li key={pet.id}>
                <DogCardMobile
                    id={pet.id}
                    pet={pet}
                    pictureLink={pet.pictureLink}
                    role={pet.user_pets.role}
                />
            </li>
        })

        // const dogSummaryCards = this.props.user?.pets?.map(pet => {
        //     return <li key={pet.id}>
        //         <DogOwnedCardMobile
        //             id={pet.id}
        //             pet={pet}
        //             pictureLink={pet.pictureLink}
        //             role={pet.user_pets.role}
        //         />
        //     </li>
        // })

        let donutCharts = this.state.ownedPets?.map(pet => {
            return <li key={pet.id}><DoughnutChart petId={pet.id} petName={pet.name} /></li>
        })

        return (
            <Container fluid className='firstglance-container-mobile'>
                <Row>
                    <ul className='firstglance-dogcards-ul'>
                        {dogCards}
                    </ul>
                </Row>
                <Row>
                    <Col>
                        <h5>Your Pets Activities Summary</h5>
                        <ul className='firstglance-donut-ul'>
                            {donutCharts}
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}