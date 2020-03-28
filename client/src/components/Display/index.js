import React, { Component } from 'react';
import InfoCard from "../../components/InfoCard";
import './style.css';

export default class Display extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      render() {
          return <InfoCard />
      }
}