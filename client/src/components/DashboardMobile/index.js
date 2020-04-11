import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default class DashboardMobile extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            renderDisplay: null,
            userInfo: []
        };
    }

    componentDidMount() {
        this.setState({
            user: this.props.user,
            userInfo: this.props.userInfo,
            renderDisplay: this.props.render,
        })
    }


    render() {
        const petNames= this.state.userInfo?.pets?.map(pet =>{
            return <li>{pet.name}</li>
        })
        return (
            <Container fluid>
                <Container>
                    <Row><Col>
                        <h1>{this.state.user}</h1>
                        <ul>
                            {petNames}
                        </ul>
                    </Col></Row>
                    <Row><Col>{this.state.renderDisplay}</Col></Row>
                </Container>
            </Container>
        )
    }
}