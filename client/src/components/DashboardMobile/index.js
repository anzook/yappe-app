import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

export default class DashboardMobile extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            userInfo: [],
            petSelect: null,
            display: 'activities',
        };
    }

    componentDidMount() {
        this.setState({
            user: this.props.user,
            userInfo: this.props.userInfo,
        })
    }

    changeDisplay = () => {
        let { display } = this.state;
        if (display === 'activities') {
            this.setState({
                display: 'dog-info',
                // petSelect: petInfo
            });
        }
        if (display === 'dog-info') {
            this.setState({
                // petSelect: petInfo
            });
        }
    }

    renderDisplay() {
        let { display } = this.state;
        if (display === 'activities') {
            return <h2>In First Glance</h2>
        }
        else if (display === 'dog-info') {
            return <h2>In Dog Profile</h2>
        }
    }

    render() {
        const petNames = this.state.userInfo?.pets?.map(pet => {
            return <li key={pet.id} onClick={() => { this.changeDisplay() }}>{pet.name}</li>
        })
        return (
            <Container fluid className='mobile-view-dashboard-container'>
                <Row><Col className='intro-info-div'>
                    <h2>{this.state.user}</h2>
                    <ul className='intro-info-ul'>
                        {petNames}
                    </ul>
                </Col></Row>
                <Row><Col className='window-div'>{this.renderDisplay()}</Col></Row>
            </Container>
        )
    }
}