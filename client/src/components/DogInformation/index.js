import React, { Component } from 'react';
import { ListGroup, Card, Button, Container, Row, Col } from 'react-bootstrap';
import ActivitiesFormModal from '../../components/ActivityFormModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import API from '../../utils/API';
import Functions from '../../utils/Functions'

export default class DogInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: [],
            caretakers: [],
            petActivities: [],
            previousPetID: null,
            userActivities: 0,
            othersActivities: 0
        }
    }

    componentDidMount() {
        this.getPetInfo();
    }


    componentDidUpdate() {
        if (this.state.previousPetID !== this.props.id) {
            this.getPetInfo();
        }
    }

    // updateActivityCounts() {
    //     this.state.petActivities.slice(0, 5).map(activity => {    
    //         if (activity.user.name === "")
    //     })
    //     }

    getPetInfo = () => {
        API.getPet(this.props.id)
            .then(pet => {
                this.setState({
                    pet: pet.data,
                    caretakers: pet.data.users,
                    petActivities: this.props.actions,
                    previousPetID: this.props.id
                })

            })

    }

    render() {
        let emailInvite = 'mailto:?subject=Yappe-%20you\'ve%20been%20invited%20to%20join%20' + this.state.pet.name + '%20on%20yappe!&body=You%20have%20invited%20you%20to%20use%20yappe%3A%20https%3A%2F%2Fyappeapp.herokuapp.com%2F%0D%0AUse%20dog%20tag%20' + this.state.pet.id + '%20to%20add%20' + this.state.pet.name +'.'

        let dateText = (dateInfo) => {
            let dt = new Date(dateInfo);

            return(`${
                (dt.getMonth()+1).toString().padStart(2, '0')}/${
                dt.getDate().toString().padStart(2, '0')}/${
                dt.getFullYear().toString().padStart(4, '0')} ${
                dt.getHours().toString().padStart(2, '0')}:${
                dt.getMinutes().toString().padStart(2, '0')}`
            );
            //dateFormat needs small library
            // dateFormat(date, "dS mmm, h:MMTT");
        }

        let caretakers = this.state.caretakers?.map(caretaker => {
            return (
                <li key={caretaker.id}>
                    <Card className='caretaker-contact' style={{ width: '8rem' }}>
                        <Card.Body>
                            <Card.Title>{Functions.capitalize(caretaker.name)}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{Functions.capitalize(caretaker.user_pets.role)}</Card.Subtitle>
                            <a href={'mailto:'+caretaker.email+'?subject=Yappe-%20a%20message%20about%20' + this.state.pet.name} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPaperPlane} /></a>
                        </Card.Body>
                    </Card>
                </li>
            )
        })

        let actions = this.state.petActivities.slice(0, 5).map(activity => {
            console.log(activity);
            return (
                <ListGroup.Item key={activity.id}>
                    <ul className='actions-ul'>
                        <li>Activity: {Functions.capitalize(activity.type)}</li>
                        <li>Logged by: {Functions.capitalize(activity.user.name)}</li>
                        <li>Timestamp: {dateText(activity.updatedAt)}</li>
                    </ul>
                </ListGroup.Item>
            )

        })

        let caretakerOwn = this.state?.caretakers?.filter(caretaker => caretaker.user_pets.role === 'owner');
        let parents = caretakerOwn?.map(parent => {
            return parent.name
        })

        return (
            <div className='profile-div'>
                <Card className='dog-profile-intro-card'>
                    <a href={emailInvite} target="_blank" rel="noopener noreferrer" className='invite-a'>Send Invite<FontAwesomeIcon icon={faTags} /></a>
                    <Container className='dog-profile-container'>
                        <Row >
                            <Col className='dog-profile-img-div'>
                                {this.state.pet.pictureLink ?
                                    <img alt='Pet Photo' src={this.state.pet.pictureLink} /> :
                                    <img alt='Pet Photo' src='/images/placeholder-dog.jpg' />}
                                <div className='dog-profile-btn-div'>
                                    <ActivitiesFormModal user={this.props.user} pet={this.props.id} />
                                    <Button className='ask-btn' variant="secondary">Post</Button>
                                </div>
                            </Col>
                            <Col xs md={8} className='profile-intro-card'>
                                <Card.Body>
                                    <Card.Title className='pet-name-profile'>{Functions.capitalize(this.state.pet.name)}</Card.Title>
                                    <Card.Subtitle className="parent-name-sub">Parent: {parents} </Card.Subtitle>
                                    <ListGroup variant="flush">
                                        <ul>
                                            <li>Age: {this.state.pet.age}</li>
                                            <li>Sex: {Functions.capitalize(this.state.pet.sex)}</li>
                                            <li>Breed: {Functions.capitalize(this.state.pet.breed)}</li>
                                        </ul>
                                    </ListGroup>
                                </Card.Body>
                                <ListGroup className='profile-listgroup' variant="flush">
                                    <ul>
                                        <li className='li-title'>Careteam</li>
                                        <li className='li-stat'>{this.state.caretakers.length}</li>
                                    </ul>
                                    <ul>
                                        <li className='li-title'>Posts</li>
                                        <li className='li-stat'>00</li>
                                    </ul>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </Card>

                <div className='careteam-info-div'>
                    <h3>Careteam </h3>
                    <Row>
                        <Col>
                            <Card className='team-contribution-card'>
                                <Card.Body>
                                    <Card.Title className=''>Total Activities Logged</Card.Title>
                                    <span className='pet-act-total-span'>{this.state.petActivities.length}</span>
                                    <div className='ul-div'>
                                        <ul>
                                            <li className='li-title'>Team</li>
                                            <li className='li-stat'>##</li>
                                        </ul>
                                        <ul>
                                            <li className='li-title'>You</li>
                                            <li className='li-stat'>##</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs md={8}>
                            <ul className='caretakers-info-ul'>
                                {caretakers}
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Card className='profile-activities-card'>
                        <Card.Header>
                            Recent Activites
                        </Card.Header >
                        <ListGroup variant="flush">
                            {actions}
                        </ListGroup>
                    </Card >
                </div >
            </div >
        )
    }
}