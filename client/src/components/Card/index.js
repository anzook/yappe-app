import React, { Component } from 'react';
import API from '../../utils/API'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import './style.css';

export class NewCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      action: []
    };
  }

  componentDidMount() {
    API.getPetActions(this.props.id)
      .then(res => {
        this.setState({
          action: res.data[0]
        })
      })
  }

  render() {
    return (
      <Card className='dog-card' onClick={this.props.onClick} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/placeholder-dog.jpg" />
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Name: {this.props.name} </ListGroupItem>
            <ListGroupItem placeholder="No Activity Logged Yet!">
              Last Activity
              <ul className='actions-ul'>
                <li><h6>Activity: {this.state.action?.type}</h6></li>
                <li><h6>Date: {this.state.action?.updatedAt?.slice(0, 10)}</h6></li>
              </ul>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>


    )
  }
}

export default NewCard;









