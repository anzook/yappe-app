import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';

export default class DogInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            petActivities: {}
        }
    }

    handleRender() {
        API.getPet(this.props.id)
            .then(res => {
                // console.log(res)
                API.getPetActions(this.props.id)
                .then(activities => {
                    // console.log(activities)
                    // this.setState({
                    //     pet: pet,
                    //     petActivities: activities
                    // })
                })
            })
        // console.log(this.state)

    }


    render() {
        return (
            <div>
                <h1 >In information div: </h1>
                {this.handleRender()}
            </div>
        )
    }
}