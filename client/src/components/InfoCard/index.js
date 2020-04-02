import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class InfoCard extends Component {
    render () {
        return (
            <div id="infoCard">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../../images/placeholder-dog.jpg" />
            <Card.Body>
            <Card.Title>Buffy</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Age: {this.props.age} Sex: {this.props.sex}</ListGroup.Item>
                <ListGroup.Item>Breed: {this.props.breed} </ListGroup.Item>
                <ListGroup.Item>Dog Tag: {this.props.id} </ListGroup.Item>
            </ListGroup>
            <Card.Title>Most Recent Activity</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Peed: </ListGroup.Item>
                <ListGroup.Item>Walked: </ListGroup.Item>
                <ListGroup.Item>Fed: </ListGroup.Item>
            </ListGroup>
            
            <Button variant="primary">Add Activity</Button>
            </Card.Body>
        </Card>
        </div>
        )
    }
}

export default InfoCard;