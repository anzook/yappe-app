import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css';

export default class DogProfileTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }

    render() {
        return (
            <Container className='dog-profile-tab-container'>
                <h4>Care Team</h4>
                <Row>
                    <Col>
                        <Card className='team-contribution-card'>
                            <Card.Body>
                                <Card.Title className=''>Total Activities Logged</Card.Title>
                                <span className='pet-act-total-span'>0</span>
                                <div className='ul-div'>
                                    <ul>
                                        <li className='li-title'>Team</li>
                                        <li className='li-stat'>0</li>
                                    </ul>
                                    <ul>
                                        <li className='li-title'>You</li>
                                        <li className='li-stat'>0</li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <ul className='caretakers-info-ul'>
                            <li>Contact Cards</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>Reacent Activites Card</Col>
                </Row>
            </Container>
        )
    }
}