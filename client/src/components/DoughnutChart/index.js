import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import API from '../../utils/API'
import { Doughnut } from 'react-chartjs-2';
import { Container, Card } from 'react-bootstrap'
import Functions from '../../utils/Functions'
import './style.css'

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
					return Functions.capitalize(action.type)
				})

				organized.sort()

				this.setState({
					activities: res.data,
					lastActivity: res.data[0],
					lastCaretaker: Functions.capitalize(res.data[0]?.user?.name),
					allActivitiesTypes: organized

				})
			})
	}

	checkActivities = () => {
		let counts = this.getData();
		let { allActivitiesTypes } = this.state;
		let typesNoRepeats = allActivitiesTypes.filter((type, index) => allActivitiesTypes.indexOf(type) === index);
		const data = {
			labels: typesNoRepeats
			,
			datasets: [{
				data: counts,
				backgroundColor: [
					'#238c8f',
					'#1ee09d',
					'#fae45a',
					'#ef7125',
					'#ff8374',
					'#90dc9e',
					'#af0808',
				],
				hoverBackgroundColor: [
					'#238c8f',
					'#1ee09d',
					'#fae45a',
					'#ef7125',
					'#ff8374',
					'#90dc9e',
					'#af0808',
				]
			}]
		}
		if (this.state.activities.length !== 0) {
			return (
				<Container className='yourDogCard' >
					{/* Mobile view */}
					<Breakpoint customQuery="(max-width: 991px)" >
						<Card className='pet-donut-card-mobile'>
							<Card.Body>
								<h4 className='h4-donut-mobile'>{Functions.capitalize(this.props.petName)}</h4>
								<div>
									<Doughnut data={data}
										options={
											{
												responsive: true,
												maintainAspectRatio: false,
												legend: { position: "left" }
											}} />
								</div>
							</Card.Body>
						</Card>
					</Breakpoint>

					{/* Desktop view */}
					<Breakpoint customQuery="(min-width: 992px)">
						<div className='pet-info-div'>
							<h4>{Functions.capitalize(this.props.petName)}</h4>
							<ul className='removeUlStyling donut-ul donut-ul-mobile'>
								<li>Last Activity: {Functions.capitalize(this.state.lastActivity?.type)} </li>
								<li>Logged By: {this.state.lastCaretaker}</li>
								<li>Date: {this.state.lastActivity?.updatedAt?.slice(0, 10)}</li>
							</ul>
						</div>
						<div>
							<Doughnut data={data}
								options={
									{ legend: { position: "right" } }} />
						</div>
					</Breakpoint>
				</Container>

			)
		} else {
			return (<div className='no-donut-div'>{Functions.capitalize(this.props.petName)} does not have any activities yet...</div>)
		}
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

		return (
			this.checkActivities()
		)
	};
};

