import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default class DashboardMobile extends Component {
    render() {
        return (
            <Container fluid>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col>1 of 3</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}