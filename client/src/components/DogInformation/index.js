import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import './style.css';

export default class DogInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: null,
            activitiesReversed: null,
        }
    }

    render() {
        return (

            <div>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <ul className='age-sex-ul'>
                            <li><h6>Age: {this.props.age}</h6></li>
                            <li><h6>Sex: {this.props.sex}</h6></li>
                        </ul>
                        <h6>Breed: {this.props.breed}</h6>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h4>Most Recent Activities</h4>
                        {this.props.actions.slice(0, 3).map((action) => (
                            <ul className='actions-ul'>
                                <li><h6>Activity: {action.type}</h6></li>
                                <li><h6>Date: {action.updatedAt.slice(0, 10)}</h6></li>
                            </ul>
                        ))}
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}