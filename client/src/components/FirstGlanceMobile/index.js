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
        return (
            <Container fluid>
                <Row>
                    <Col>
                    <DogCardMobile />
                    </Col>
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