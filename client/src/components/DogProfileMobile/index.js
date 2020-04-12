import React, { Component } from 'react';
import './style.css';

export default class DogProfileMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            pet: [],
            previousPetID: null
        }
    }

    componentDidMount() {
        this.getPet()
    }

    componentDidUpdate() {
        if (this.state.previousPetID !== this.props.pet.id) {
            this.getPet()
        }
    }

    getPet = () =>{
        this.setState({
            pet: this.props.pet,
            previousPetID: this.props.pet.id
        })
    }

    render() {
        return (
            <h2>In Dog Profile with {this.state.pet.name}</h2>
        )
    }
}