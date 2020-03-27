import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import './style.css';

export class NewCard extends Component {
  render() {
    //  const name = this.props.name
    return (
      <div >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Name: {this.props.name} </ListGroupItem>
              <ListGroupItem>Breed: {this.props.breed} </ListGroupItem>
              <ListGroupItem>Age: {this.props.age} </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>

    )
  }
}

export default NewCard;









