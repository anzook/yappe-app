import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactCards from '../ContactCards';
import LastThreeActivitesCard from '../LastThreeActivitesCard';
import TotalActivitiesCard from '../TotalActivitiesCard';
import API from '../../utils/API';
import './style.css';

export default class DogProfileTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            pet:[],
            previousPetID: this.props.pet.id,
            userActionsWithPet: [],
            caretakers: []
        }
    }

    // componentDidMount() {
    //     this.getUserActionsWithPet()
    // }

    componentDidUpdate() {
        if (this.state.previousPetID !== this.props.pet.id) {
            this.getUserActionsWithPet()
        }
    }

    getUserActionsWithPet = () => {
        API.getPetActionsByUser(this.props.pet.id, this.props.user.id)
            .then(actions => {
                console.log(actions)
                this.setState({
                    user: this.props.user,
                    previousPetID: this.props.pet.id,
                    pet: this.props.pet,
                    userActionsWithPet: actions.data,
                    caretakers: this.props.pet.users,
                })
            })
    }

    render() {
        let caretakers = this.state.caretakers?.map(caretaker => {
            return <ContactCards 
                name={caretaker.name}
                role={caretaker.user_pets.role}
                email={caretaker.email}
                pet = {this.state.pet.name}
            />
        })
        return (
            <Container className='dog-profile-tab-container'>
                <h4>Care Team</h4>
                <Row>
                    <Col>
                        <TotalActivitiesCard
                            pet={this.props.pet}
                            petActions={this.props.petActions}
                            userId={this.state.user.id}
                            userActions={this.state.userActionsWithPet}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className='dog-profile-tab-contact-ul'>
                            <li>{caretakers}</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Reacent Activites Card</h4>
                        <LastThreeActivitesCard />
                    </Col>
                </Row>
            </Container>
        )
    }
}