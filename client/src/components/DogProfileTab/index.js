import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                        Amount card goes here
                    </Col>
                    <Col>
                        <ul>
                            <li>Memeber Cards</li>
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