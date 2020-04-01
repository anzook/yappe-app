import React, { Component } from 'react';
import API from '../../utils/API'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
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
      <Container>
        <Card className='dog-card' onClick={this.props.onClick} style={{ width: '21rem' }}>
          <Card.Body>
            <img src="/images/placeholder-dog.jpg" className='dog-card-image' />
            <ListGroup className="list-group-flush dog-card-list">
              <ListGroupItem>{this.props.name} </ListGroupItem>
              <ListGroupItem placeholder="No Activity Logged Yet!">
                <ListGroupItem>Role: {this.props.role}</ListGroupItem>
                <ListGroupItem>Last Interaction: {this.state.action?.updatedAt?.slice(0, 10)}</ListGroupItem>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default NewCard;









