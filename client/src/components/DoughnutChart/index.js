import React, { Component } from 'react';
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
			name: null,
			activity: null,
			caretaker: null,
			date: null
		}
	}
	render() {
		return (
			<Container className='yourDogCard'>
				<div>
					<Doughnut data={data} />
				</div>
				<div>
					<h4>Name: {this.state.name}</h4>
					<ul className='removeUlStyling donut-ul'>
						<li>Last Activity: tesing{this.state.activity} </li>
						<li>Logged By: testing{this.state.caretaker}</li>
						<li>Date: testing{this.state.date}</li>
					</ul>
				</div>
			</Container>
		)
	};
};

