import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class InfoCard extends Component {
    render () {
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" rounded/>
            <Card.Body>
            <Card.Title>Buffy</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Age: {this.props.age} Sex: {this.props.sex}</ListGroup.Item>
                <ListGroup.Item>Breed: {this.props.breed} </ListGroup.Item>
            </ListGroup>
            <Card.Title>Most Recent Activity</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Peed: </ListGroup.Item>
                <ListGroup.Item>Walked: </ListGroup.Item>
                <ListGroup.Item>Fed: </ListGroup.Item>
            </ListGroup>
            
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        )
    }
}

export default InfoCard;