import React, { Component } from 'react';
import API from '../../utils/API'
import { Doughnut } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

// const data = {
// 	labels: [
// 		'Bath', 'Checkup', 'Groom', 'Meds', 'Pee', 'Play', 'Poop', 'Walk',
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 			'#FF6384',
// 			'#36A2EB',
// 			'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 			'#FF6384',
// 			'#36A2EB',
// 			'#FFCE56'
// 		]
// 	}]
// };

export default class DoughnutChart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			pet: [this.props.petInfo],
			activities: [],
			lastActivity: [],
			lastCaretaker: null,
			allActivitiesTypes: [],
			chartData: [],
		}
	}

	componentDidMount() {
		this.getPetActivities()
		this.getData()
	}

	getPetActivities() {
		API.getPetActions(this.props.petId)
			.then(res => {
				let organized = res.data.map(action => {
					return action.type
				})

				organized.sort()

				this.setState({
					activities: res.data,
					lastActivity: res.data[0],
					lastCaretaker: res.data[0].user.name,
					allActivitiesTypes: organized

				})
			})
	}

	getData() {
		let dataToChart = []
		let current = null;
		let cnt = 0;
		this.state.allActivitiesTypes.forEach(type => {
			if (type !== current) {
				if (cnt > 0) {
					dataToChart.push(cnt);
					current = type;
					cnt = 1;
				} else {
					current = type;
					cnt = 1;
				}
			} else {
				cnt++;
			}
		})

		if (cnt > 0) {
			dataToChart.push(cnt);
		}

		return dataToChart
	}

	render() {
		let counts = this.getData()
		const data = {
			labels: this.state.allActivitiesTypes
			,
			datasets: [{
				data: counts,
				backgroundColor: [
					'#1ee09d',
					'#FF8F00',
					'#E74C3C',
					'#F4D03F',
					'#3498DB',
					'#17202A',
					'#F4F6F7',
				],
				hoverBackgroundColor: [
					'#1ee09d',
					'#FF8F00',
					'#E74C3C',
					'#F4D03F',
					'#3498DB',
					'#17202A',
					'#F4F6F7',
				]
			}]
		}
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

