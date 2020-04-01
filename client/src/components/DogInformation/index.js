import React, { Component } from 'react';
import { ListGroup, Card, Button, CardColumns, Container, Row, Col } from 'react-bootstrap';

import './style.css';

export default class DogInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: null,
            activitiesReversed: null,
        }
    }

    render() {
        return (
            <div className='profile-div'>
                <Card style={{ 'margin-bottom': '20px' }}>
                    <Container className='dog-profile-container'>
                        <Row >
                            <Col className='dog-profile-img-div'>
                                <img alt='Pet Photo' src='/images/placeholder-dog.jpg' />
                                <div className='dog-profile-btn-div'>
                                    <Button variant="primary">Add Activity</Button>
                                    <Button variant="secondary">Ask Question</Button>
                                </div>
                            </Col>
                            <Col xs md={8} className='profile-intro-card'>
                                <Card.Body>
                                    <Card.Title>DOG NAME</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Parent: </Card.Subtitle>
                                    <ListGroup variant="flush">
                                        <ul>
                                            <li>Age: </li>
                                            <li>Breed: </li>
                                            <li>Sex: </li>
                                        </ul>
                                    </ListGroup>
                                </Card.Body>
                                <ListGroup className='profile-listgroup' variant="flush">
                                    <ul>
                                        <li>Careteam</li>
                                        <li>##</li>
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
                                    <span>##</span><span>%</span>
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
                                    <Card>
                                        <ul>
                                            <li>Name: </li>
                                            <li>Role: </li>
                                            <li>Last Interaction: </li>
                                        </ul>
                                    </Card>
                                    <Card>
                                        <ul>
                                            <li>Name: </li>
                                            <li>Role: </li>
                                            <li>Last Interaction: </li>
                                        </ul>
                                    </Card>
                                    <Card>
                                        <ul>
                                            <li>Name: </li>
                                            <li>Role: </li>
                                            <li>Last Interaction: </li>
                                        </ul>
                                    </Card>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Card className='profile-activities-card'>
                        <Card.Header>
                            Recent Activites
                        <a>See All Activities</a>
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>

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