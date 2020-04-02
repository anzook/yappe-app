import React, { Component } from 'react';
import API from '../../utils/API'
import { Doughnut } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		]
	}]
};

export default class DoughnutChart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			pet: [this.props.petInfo],
			activities: [],
			lastActivity: [],
			date: null,
			lastCaretaker: null
		}
	}

	componentDidMount() {
		this.getPetActivities()
	}

	getPetActivities(){
		API.getPetActions(this.props.petId)
		.then(res => {
			this.setState({
				activities: res.data,
				lastActivity: res.data[0],
				lastCaretaker: res.data[0].user.name
			})
		})
	}

	render() {
		return (
			<Container className='yourDogCard'>
				<div>
					<Doughnut data={data} />
				</div>
				<div>
					<h4>{this.props.petName}</h4>
					<ul className='removeUlStyling donut-ul'>
						<li>Last Activity: {this.state.lastActivity?.type} </li>
						<li>Logged By: {this.state.lastCaretaker}</li>
						<li>Date: {this.state.lastActivity?.updatedAt?.slice(0, 10)}</li>
					</ul>
				</div>
			</Container>
		)
	};
};

