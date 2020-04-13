import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import './style.css';
import Functions from '../../utils/Functions';

export default class ContactCards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card className='caretaker-contact-mobile' >
                <Card.Body>
                    <a href={'mailto:' + this.props.email + '?subject=Yappe-%20a%20message%20about%20' + this.props.pet} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPaperPlane} /></a>
                    <Card.Title>{Functions.capitalize(this.props.name)}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{Functions.capitalize(this.props.role)}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }
}