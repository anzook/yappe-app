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
            petName: props.petName,
            petId: props.petId
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
                    <h1>Name: {this.state.petName}</h1>
                    <DogInformation />
                    <div className='option-div'>
                        <span onClick={this.changeDisplay}>Add Activity</span>
                        <span>See All Activites</span>
                    </div>
                </div>
            )
        } else if (display === 'activites') {
            return (
                <div>
                    <h1>Name: {this.state.petName}</h1>
                    <ActivitiesForm />
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
                <img src='' />
                <div>{this.renderWindow()}</div>
            </Container>
        )
    }
}