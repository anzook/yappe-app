import React, { Component } from 'react';
import API from '../../utils/API';
import { Form, Button } from 'react-bootstrap'
import './style.css';

export default class ActivitiesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            petActivities: {}
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        API.createAction({
            type: this.state.activities,
            detail: this.state.details,
            user: this.props.user,
            pet: this.props.pet
        })
            .then(res => {
                window.location.replace('/dashboard');
            })
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control name='activities' onChange={this.handleInputChange} as="select">
                        <option>Activities</option>
                        <option>pee</option>
                        <option>poop</option>
                        <option>walk</option>
                        <option>play</option>
                        <option>groom</option>
                        <option>bath</option>
                        <option>checkup</option>
                        <option>meds</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Details</Form.Label>
                    <Form.Control name='details' onChange={this.handleInputChange} as="textarea" rows="3" />
                </Form.Group>
                <Form.Group>
                    <Button className='activity-form-btn' onClick={this.handleSubmit} variant="primary" type="submit">
                        Submit
                </Button>
                </Form.Group>
            </Form>
        )
    }
}
