import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API';
import Functions from '../../utils/Functions';

export default class LastThreeActivitesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let activities = this.props.actions?.map(action => {
            return <ListGroup.Item key={action.id} className='list-item-lta'>
                <h6>Activity: {action.type}</h6>
                <h6>Logged By: {action.user.name}</h6>
                <h6>Date: {action.updatedAt}</h6>
                <p>Comment: {action.detail}</p>
            </ListGroup.Item>
        })
        return (
            <Card >
                <ListGroup variant="flush">
                    {activities}
                </ListGroup>
            </Card>
        )
    }
}