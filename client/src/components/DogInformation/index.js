import React, { Component } from 'react';
import API from '../../utils/API';
import { ListGroup, Card } from 'react-bootstrap'
import './style.css';

export default class DogInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            petActivities: {}
        }
    }

    componentDidMount() {
        API.getPet(this.props.id)
            .then(res => {
                console.log(res)
                API.getPetActions(this.props.id)
                    .then(activities => {
                        this.setState({
                            pet: res.data,
                            petActivities: activities.data
                        })
                    })
            })
        console.log(this.state)
    }


    render() {
        console.log(this.props)
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
                        <ListGroup variant="flush">
                            <ListGroup.Item className='no-padding'>
                                <ul className='activity-ul'>
                                    <li><h6>Activity: </h6></li>
                                    <li><h6>Date: </h6></li>
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
                {/* {this.handleRender()} */}
            </div>
        )
    }
}