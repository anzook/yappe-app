import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SidebarContent from '../SidebarContent'

export default class DashboardDesktop extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            renderDisplay: null
        };
    }

    componentDidMount(){
        this.setState({
            cards: this.props.cards,
            renderDisplay: this.props.render
        })
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <SidebarContent />
                    <Col xs md={4} className='dog-cards-col'>{this.state.cards}</Col>
                    <Col xs md={8}>{this.state.renderDisplay}</Col>
                </Row>
            </Container>
        )
    }
}