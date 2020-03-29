import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import './style.css';

export class DogCard extends Component {

  constructor(props) {
    super(props);
    this.state = null;
  }
  
  render() {
    //  const name = this.props.name
    return (

      <Card className='dog-card' onClick={this.props.onClick} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/placeholder-dog.jpg" />
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Name: {this.props.name} </ListGroupItem>
            {this.props.actions.map((action) => {
              return (
                <ListGroupItem placeholder="No Activity Logged Yet!">
                  Last Activity
                  {JSON.stringify(this.props.actions)}
                </ListGroupItem>)
            })}
          </ListGroup>
        </Card.Body>
      </Card>


    )
  }
}

export default DogCard;









