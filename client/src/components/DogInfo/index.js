import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import DogInformation from '../DogInformation';
import ActivitiesForm from "../ActivitiesForm";
import './style.css';

export default class DogInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'info',
            userLoggedActivities:{}
        };
    }
    
    changeDisplay = () => {
        let { display } = this.state;
        this.setState({
            display: display === 'info' ? 'activites' : 'info'
        });
    }

    renderWindow() {
        let { display } = this.state;

        if (display === 'info') {
            return (
                <div>
                    <h1>Name: {this.props.pet.name}</h1>
                    <DogInformation id={this.props.pet.id}/>
                    <div className='option-div'>
                        <span onClick={this.changeDisplay}>Add Activity</span>
                        <span>See All Activites</span>
                    </div>
                </div>
            )
        } else if (display === 'activites') {
            return (
                <div>
                    <h1>Name: {this.props.pet.name}</h1>
                    <ActivitiesForm change={this.changeDisplay} user={this.props.user} pet={this.props.pet.id}/>
                    <div className='option-div'>
                        <span onClick={this.changeDisplay}>Cancel</span>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <Container>
                <img src='/images/placeholder-dog.jpg' />
                <div>{this.renderWindow()}</div>
            </Container>
        )
    }
}