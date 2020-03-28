import React, { Component } from 'react';
import DogInfo from '../DogInfo';
import './style.css';

export default class Display extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      render() {
          return <DogInfo />
      }
}