import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import API from '../../utils/API';
import './style.css';

export default class DogCardMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: this.props.user
            action: []
        }
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
            return timeSince(date)
        }

        const action = this.state.action;
        if (action) {
            return dateText(this.state.action?.updatedAt) + " ago";
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
            <Card style={{ width: '16rem' }} className='dog-card-mobile-card'>
                <Card.Body>
                    <h4>{this.props.pet.name}</h4>
                    {this.props.pictureLink ?
                        <img alt='Pet photo' src={this.props.pictureLink} className='dog-card-mobile-image' /> :
                        <img alt='Pet photo' src="/images/placeholder-dog.jpg" className='dog-card-mobile-image' />}
                    <h5>Role: {this.props.role}</h5>
                    <h5>Last Interaction: {this.interaction()}</h5>
                </Card.Body>
            </Card>
        )
    }
}