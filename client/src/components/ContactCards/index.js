import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API';
import Functions from '../../utils/Functions';

export default class ContactCards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentDidMount() {
    //     this.getPet()
    // }

    // componentDidUpdate() {
    //     if (this.state.previousPetID !== this.props.pet.id) {
    //         this.getPet()
    //     }
    // }

    // getPet = () => {
    //     this.setState({
    //         pet: this.props.pet,
    //         previousPetID: this.props.pet.id,
    //         actions: this.props.actions
    //     })
    // }

    render() {
        return (
            <h6>Contact cards</h6>
        )
    }
}