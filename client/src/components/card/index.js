import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import '../card/style.css';

 export class NewCard extends Component {
  render() {
    return (
      <div className="card">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name: {this.props.name} </ListGroupItem>
    <ListGroupItem>Breed:  </ListGroupItem> 
    <ListGroupItem>Age: </ListGroupItem> 
  </ListGroup> 
  </Card.Body>
</Card>
</div>

    )
  }
}

export default NewCard;









