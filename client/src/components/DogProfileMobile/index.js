import React, { Component } from 'react';
import API from '../../utils/API';
import { Container, Tab, Tabs } from 'react-bootstrap';
import DogProfileDropdown from '../DogProfileDropdown';
import DogProfileTab from '../DogProfileTab';
import DogPostTab from '../DogPostTab';
import './style.css';

export default class DogProfileMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            pet: [],
            previousPetID: null,
            actions: []
        }
    }

    componentDidMount() {
        this.getInformation()
    }

    componentDidUpdate() {
        if (this.state.previousPetID !== this.props.pet.id) {
            this.getInformation()
        }
    }

    getInformation = () => {
        API.getPetActions(this.props.pet.id)
            .then(actions => {
                this.setState({
                    pet: this.props.pet,
                    previousPetID: this.props.pet.id,
                    actions: actions.data
                })
            })
    }

    render() {
        return (
            <Container className='dog-profile-container-mobile'>
                <DogProfileDropdown 
                pet={this.state.pet}
                user={this.state.user}/>
                <div className='dog-profile-info-mobile'>
                    {this.state.pet.pictureLink ?
                        <img alt='Pet photo' src={this.state.pet.pictureLink} className='dog-profile-image-mobile' /> :
                        <img alt='Pet photo' src="/images/placeholder-dog.jpg" className='dog-profile-image-mobile' />}
                    <div className='profile-info-div-mobile'>
                        <h3>{this.state.pet.name}</h3>
                        <div className='dog-asb-div-mobile'>
                            <h6>Age: {this.state.pet.age}</h6>
                            <h6>Sex: {this.state.pet.sex}</h6>
                            <h6>Breed: {this.state.pet.breed}</h6>
                        </div>
                        <h5>Parent: someone</h5>
                    </div>
                </div>
                <div className='tabs-div-mobile'>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className='tab-nav'>
                        <Tab eventKey="profile" title="Profile">
                            <DogProfileTab
                                user={this.state.user}
                                pet={this.state.pet}
                                petActions={this.state.actions} />
                        </Tab>
                        <Tab eventKey="post" title="Post">
                            <DogPostTab
                                pet={this.props.pet}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        )
    }
}