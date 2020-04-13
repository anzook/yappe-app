import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import './style.css';

export default class DogProfileMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            pet: [],
            previousPetID: null
        }
    }

    componentDidMount() {
        this.getPet()
    }

    componentDidUpdate() {
        if (this.state.previousPetID !== this.props.pet.id) {
            this.getPet()
        }
    }

    getPet = () => {
        this.setState({
            pet: this.props.pet,
            previousPetID: this.props.pet.id
        })
    }

    render() {
        return (
            <Container className='dog-profile-container-mobile'>
                <div className='dog-profile-info-mobile'>
                    {this.state.pet.pictureLink ?
                        <img alt='Pet photo' src={this.state.pet.pictureLink} className='dog-card-mobile-image' /> :
                        <img alt='Pet photo' src="/images/placeholder-dog.jpg" className='dog-card-mobile-image' />}
                    <h2>{this.state.pet.name}</h2>
                    <div className='dog-asb-div'>
                        <h6>Age: {this.state.pet.age}</h6>
                        <h6>Sex: {this.state.pet.sex}</h6>
                        <h6>Breed: {this.state.pet.breed}</h6>
                    </div>
                    <h5>Parent: someone</h5>
                </div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className='tab-nav'>
                    <Tab eventKey="profile" title="Profile">
                        <h2>profile</h2>
                    </Tab>
                    <Tab eventKey="post" title="Post">
                        <h2>post</h2>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}