import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DogOwnedCardMobile from '../DogOwnedCardMobile';
import DogCardMobile from '../DogCardMobile';
import './style.css';

export default class FirstGlanceMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        this.setState({
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

        return (
            <Container fluid className='firstglance-container-mobile'>
                <Row>
                    <ul className='firstglance-dogcards-ul'>
                        {dogCards}
                    </ul>
                </Row>
                <Row>
                    <Col>
                        <h2>Your Pets</h2>
                        <DogOwnedCardMobile />
                    </Col>
                </Row>
            </Container>
        )
    }
}