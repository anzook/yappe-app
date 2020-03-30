import React, { Component } from 'react';
import { Container, ListGroup, Card } from 'react-bootstrap';
import DogInformation from '../DogInformation';
import ActivitiesForm from "../ActivitiesForm";
import './style.css';

export default class DogInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'info',
            userLoggedActivities: null,
            petActivites: {}
        };
    }

    changeDisplay = () => {
        let { display } = this.state;
        this.setState({
            display: display === 'info' ? 'activites' : 'info'
        });
    }



    renderWindow() {
        let { display } = this.state;

        if (display === 'info') {
            return (
                <Card >
                    <ListGroup variant="flush">
                        <ListGroup.Item><h2>{this.props.pet.name}</h2></ListGroup.Item>
                        <img className='dog-display-image' src='/images/placeholder-dog.jpg' />
                    </ListGroup>
                    <DogInformation
                        id={this.props.pet.id}
                        age={this.props.pet.age}
                        sex={this.props.pet.sex}
                        breed={this.props.pet.breed}
                        actions={this.props.actions}
                    />
                    <Card.Body className='option-div' variant="flush">
                        <span onClick={this.changeDisplay}>Add Activity</span>
                        <span>See All Activites</span>
                    </Card.Body>
                </Card>
            )
        } else if (display === 'activites') {
            return (
                <Card >
                    <ListGroup variant="flush">
                        <ListGroup.Item><h2>{this.props.pet.name}</h2></ListGroup.Item>
                        <img className='dog-display-image' src='/images/placeholder-dog.jpg' />
                    </ListGroup>
                    <Card.Body>
                        <Card.Title>Add Activity</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <ActivitiesForm change={this.changeDisplay} user={this.props.user} pet={this.props.pet.id} />
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Body className='option-div' variant="flush">
                        <span onClick={this.changeDisplay}>Cancel</span>
                    </Card.Body>
                </Card>
            )
        }
    }

    render() {
        return (
            <Container>
                <div>{this.renderWindow()}</div>
            </Container>
        )
    }
}