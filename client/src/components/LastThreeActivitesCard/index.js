import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
import API from '../../utils/API';
import Functions from '../../utils/Functions';

export default class LastThreeActivitesCard extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render(){
        return(
            <h4>Last Three Activites</h4>
        )
    }
}