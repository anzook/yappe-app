import React, { Component } from 'react';
import API from '../../utils/API'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import './style.css';

export class DogCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      action: []
    };
  }

  interaction() {
    const action = this.state.action;
    if (action) {
      return this.state.action?.updatedAt?.slice(0, 10);
    }
    return 'No log';
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
      <Container>
        <Card className='dog-card' onClick={this.props.onClick} style={{ maxWidth: '25rem' }}>
          <Card.Body>
            {this.props.pictureLink ?
              <img alt='Pet photo' src={this.props.pictureLink} className='dog-card-image' /> :
              <img alt='Pet photo' src="/images/placeholder-dog.jpg" className='dog-card-image' />}
            <ListGroup className="list-group-flush dog-card-list">
              <ListGroupItem className='dog-card-name'>{this.props.name} </ListGroupItem>
              <ListGroupItem>Role: {this.props.role}</ListGroupItem>
              <ListGroupItem muted placeholder="No Activity Logged Yet!">
                <ListGroupItem>Last Interaction: {this.interaction()}</ListGroupItem>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default DogCard;









