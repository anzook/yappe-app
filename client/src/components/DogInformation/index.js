import React, { Component } from 'react';
import { ListGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import ActivitiesFormModal from '../../components/ActivityFormModal'
import './style.css';
import API from '../../utils/API';

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
                        <li>Name: {caretaker.name}</li>
                        <li>Role: {caretaker.user_pets.role}</li>
                        <li>Last Interaction: </li>
                    </ul>
                </Card>
            )
        })

        let actions = this.state.petActivities.slice(0, 5).map(activity => {
            return (
                <ListGroup.Item key={activity.id}>
                    <ul className='actions-ul'>
                        <li>Activity: {activity.type}</li>
                        <li>Logged by: {activity.user.name}</li>
                        <li>Date: {activity.updatedAt.slice(0, 10)}</li>
                    </ul>
                </ListGroup.Item>
            )

        })

        return (
            <div className='profile-div'>
                <Card >
                    <Container className='dog-profile-container'>
                        <Row >
                            <Col className='dog-profile-img-div'>
                                <img alt='Pet' src='/images/placeholder-dog.jpg' />
                                <div className='dog-profile-btn-div'>
                                    <ActivitiesFormModal user={this.props.user} pet={this.props.id}/>
                                    <Button variant="secondary">Ask Question</Button>
                                </div>
                            </Col>
                            <Col xs md={8} className='profile-intro-card'>
                                <Card.Body>
                                    <Card.Title>{this.state.pet.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Parent: </Card.Subtitle>
                                    <ListGroup variant="flush">
                                        <ul>
                                            <li>Age: {this.state.pet.age}</li>
                                            <li>Sex: {this.state.pet.sex}</li>
                                            <li>Breed: {this.state.pet.breed}</li>
                                        </ul>
                                    </ListGroup>
                                </Card.Body>
                                <ListGroup className='profile-listgroup' variant="flush">
                                    <ul>
                                        <li>Careteam</li>
                                        <li>{this.state.caretakers.length}</li>
                                    </ul>
                                    <ul>
                                        <li>Questions</li>
                                        <li>##</li>
                                    </ul>
                                    <ul>
                                        <li>Answers</li>
                                        <li>##</li>
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
                                    <Card.Title>Team Contribution</Card.Title>
                                    <span>{this.state.petActivities.length}</span>
                                    <div className='ul-div'>
                                        <ul>
                                            <li>Team</li>
                                            <li>##</li>
                                        </ul>
                                        <ul>
                                            <li>You</li>
                                            <li>##</li>
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

            // {/* // <div>
            //     <ListGroup variant='flush'>
            //         <ListGroup.Item>
            //             <ul className='age-sex-ul'>
            //                 <li><h6>Age: {this.props.age}</h6></li>
            //                 <li><h6>Sex: {this.props.sex}</h6></li>
            //             </ul>
            //             <h6>Breed: {this.props.breed}</h6>
            //         </ListGroup.Item>
            //         <ListGroup.Item>
            //             <h4>Most Recent Activities</h4>
            //             {this.props.actions.slice(0, 3).map((action) => ( */}
            // {/* //                 <ul className='actions-ul'>
            //                     <li><h6>Activity: {action.type}</h6></li>
            //                     <li><h6>Date: {action.updatedAt.slice(0, 10)}</h6></li>
            //                 </ul>
            //             ))}
            //         </ListGroup.Item> */}
            // {/* //     </ListGroup> */}
            // {/* // </div> */}

        )
    }
}