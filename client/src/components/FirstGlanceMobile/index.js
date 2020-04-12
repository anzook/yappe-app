import React, { Component } from 'react';
import './style.css';

export default class FirstGlanceMobile extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:[]
        }
    }

    componentDidMount(){
        this.setState({
            user: this.props.user
        })
    }

    render() {
        return( 
        <h2>In First Glance with {this.state.user.name}</h2>
        )
    }
}