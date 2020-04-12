import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FirstGlanceMobile from '../FirstGlanceMobile';
import DogProfileMobile from '../DogProfileMobile';
import './style.css';

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

    changeDisplay = (petInfo) => {
        let { display } = this.state;
        if (display === 'activities') {
            this.setState({
                display: 'dog-info',
                petSelect: petInfo
            });
        }
        if (display === 'dog-info') {
            this.setState({
                petSelect: petInfo
            });
        }
    }

    renderDisplay() {
        let { display } = this.state;
        if (display === 'activities') {
        return <FirstGlanceMobile 
            user={this.state.userInfo}
        />
        }
        else if (display === 'dog-info') {
            return <DogProfileMobile
                user={this.state.userInfo}
                pet={this.state.petSelect}
            />
        }
    }

    render() {
        const petNames = this.state.userInfo?.pets?.map(pet => {
            return <li key={pet.id} onClick={() => { this.changeDisplay(pet) }}>{pet.name}</li>
        })
        return (
            <Container fluid className='mobile-view-dashboard-container'>
                <Row><Col className='intro-info-div'>
                    <h4>Welcome, {this.state.user}</h4>
                    <ul className='intro-info-ul'>
                        {petNames}
                    </ul>
                </Col></Row>
                <Row><Col className='window-div'>{this.renderDisplay()}</Col></Row>
            </Container>
        )
    }
}