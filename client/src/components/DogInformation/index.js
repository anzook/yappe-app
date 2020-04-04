import React, { Component } from 'react';
import { ListGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import ActivitiesFormModal from '../../components/ActivityFormModal'
import './style.css';
import API from '../../utils/API';
import Functions from '../../utils/Functions'

export default class DogInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: [],
            caretakers: [],
            petActivities: [],
            previousPetID: null
        }
    }

    componentDidMount() {
        this.getPetInfo();
    }

    componentDidUpdate() {
        if (this.state.previousPetID !== this.props.id) {
            this.getPetInfo();
        }
    }

    getPetInfo = () => {
        API.getPet(this.props.id)
            .then(pet => {
                this.setState({
                    pet: pet.data,
                    caretakers: pet.data.users,
                    petActivities: this.props.actions,
                    previousPetID: this.props.id
                })

            })

    }

    render() {
        let caretakers = this.state.caretakers?.map(caretaker => {
            return (
                <Card key={caretaker.id}>
                    <ul>
                        <li>Name: {Functions.capitalize(caretaker.name)}</li>
                        <li>Role: {Functions.capitalize(caretaker.user_pets.role)}</li>
                        <li>Last Interaction: </li>
                    </ul>
                </Card>
            )
        })

        let actions = this.state.petActivities.slice(0, 5).map(activity => {
            return (
                <ListGroup.Item key={activity.id}>
                    <ul className='actions-ul'>
                        <li>Activity: {Functions.capitalize(activity.type)}</li>
                        <li>Logged by: {Functions.capitalize(activity.user.name)}</li>
                        <li>Date: {activity.updatedAt.slice(0, 10)}</li>
                    </ul>
                </ListGroup.Item>
            )

        })

        return (
            <div className='profile-div'>
                <Card className='dog-profile-intro-card'>
                    <Container className='dog-profile-container'>
                        <Row >
                            <Col className='dog-profile-img-div'>
                                <img alt='Pet' src='/images/placeholder-dog.jpg' />
                                <div className='dog-profile-btn-div'>
                                    <ActivitiesFormModal user={this.props.user} pet={this.props.id} />
                                    <Button className='ask-btn' variant="secondary">Ask Question</Button>
                                </div>
                            </Col>
                            <Col xs md={8} className='profile-intro-card'>
                                <Card.Body>
                                    <Card.Title className='pet-name-profile'>{this.state.pet.name}</Card.Title>
                                    <Card.Subtitle className="parent-name-sub">Parent: ########</Card.Subtitle>
                                    <ListGroup variant="flush">
                                        <ul>
                                            <li>Age: {this.state.pet.age}</li>
                                            <li>Sex: {Functions.capitalize(this.state.pet.sex)}</li>
                                            <li>Breed: {Functions.capitalize(this.state.pet.breed)}</li>
                                        </ul>
                                    </ListGroup>
                                </Card.Body>
                                <ListGroup className='profile-listgroup' variant="flush">
                                    <ul>
                                        <li className='li-title'>Careteam</li>
                                        <li className='li-stat'>{this.state.caretakers.length}</li>
                                    </ul>
                                    <ul>
                                        <li className='li-title'>Questions</li>
                                        <li className='li-stat'>00</li>
                                    </ul>
                                    <ul>
                                        <li className='li-title'>Answers</li>
                                        <li className='li-stat'>00</li>
                                    </ul>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </Card>

                <div className='careteam-info-div'>
                    <h3>Careteam </h3>
                    <Row>
                        <Col>
                            <Card className='team-contribution-card'>
                                <Card.Body>
                                    <Card.Title className=''>Total Activities Logged</Card.Title>
                                    <span className='pet-act-total-span'>{this.state.petActivities.length}</span>
                                    <div className='ul-div'>
                                        <ul>
                                            <li className='li-title'>Team</li>
                                            <li className='li-stat'>##</li>
                                        </ul>
                                        <ul>
                                            <li className='li-title'>You</li>
                                            <li className='li-stat'>##</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs md={8}>
                            <Card className='team-members-card'>
                                <Card.Header>Team Members</Card.Header>
                                <div className='team-members-div'>
                                    {caretakers}
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Card className='profile-activities-card'>
                        <Card.Header>
                            Recent Activites
                        {/* <span>See All Activities</span> */}
                        </Card.Header >
                        <ListGroup variant="flush">
                            {actions}
                        </ListGroup>
                    </Card >
                </div >
            </div >
        )
    }
}