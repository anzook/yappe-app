import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API';

export default class TotalActivitiesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousPetID: null,
            previousActionLength: null,
            actionsCount: null,
            userCount: null,
            teamCount: null,
        }
    }

    // componentDidMount() {
    //     this.getInformation()
    // }

    componentDidUpdate() {
        if ((this.state.previousPetID !== this.props.pet.id) || 
        (this.state.previousActionLength !== this.props.userActions.length)) {
            this.getInformation()
        }
    }

    getInformation = () => {
        this.setState({
            previousPetID: this.props.pet.id,
            actionsCount: this.props.petActions?.length,
            teamCount: (this.props.userActions.length - this.props.userActions.length),
            userCount: this.props.userActions.length,
            previousActionLength: this.props.userActions?.length,
        })
    }

    getTeamCount(){
        return this.props.userActions.length
    }

    render() {

        return (
            <Card className='team-contribution-card-mobile'>
                <Card.Body>
                    <Card.Title className=''>Total Activities Logged</Card.Title>
                    <span className='pet-act-total-span'>{this.state.actionsCount}</span>
                    <div className='ul-div'>
                        <ul className='remove-ul-styling'>
                            <li className='li-title'>Team</li>
                            <li className='li-stat'>{this.state.teamCount}</li>
                        </ul>
                        <ul className='remove-ul-styling'>
                            <li className='li-title'>You</li>
                            <li className='li-stat'>{this.state.userCount}</li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}