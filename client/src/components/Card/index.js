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
    let dateText = (dateInfo) => {
      let date = new Date(dateInfo);
      function timeSince(date) {

          let seconds = Math.floor((new Date() - date) / 1000);
      
          let interval = Math.floor(seconds / 31536000);
      
          if (interval > 1) {
              return interval + " years";
          }
          interval = Math.floor(seconds / 2592000);
          if (interval > 1) {
              return interval + " months";
          }
          interval = Math.floor(seconds / 86400);
          if (interval > 1) {
              return interval + " days";
          }
          interval = Math.floor(seconds / 3600);
          if (interval > 1) {
              return interval + " hours";
          }
          interval = Math.floor(seconds / 60);
          if (interval > 1) {
              return interval + " minutes";
          }
          return Math.floor(seconds) + " seconds";
      }
      //dateFormat needs small library
      // dateFormat(date, "dS mmm, h:MMTT");
      return timeSince( date)
  }
    
    const action = this.state.action;
    if (action) {
      return dateText( this.state.action?.updatedAt) + " ago";
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









