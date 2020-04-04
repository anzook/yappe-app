  
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './style.css'

export default class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [
                    {
                        label: 'Your Dogs',
                        backgroundColor:'rgba(239,113,37, 0.75)',
                        data: [4, 5, 1, 10, 32, 2, 4]
                    },
                    {
                        label: 'Other Dogs',
                        backgroundColor:'rgba(30, 224, 157, 0.75)',
                        data: [14, 15, 21, 0, 12, 4, 2]
                    }
                ]
            }
        }
    }
    render() {
        return(
            <div className='line-chart-div' style={{ width: '90%', height: "60vh"}}>
                <h3>Your Logged Activities</h3>
                <Line
                    options={{
                        responsive: true,
                        legend:{position:'left'}
                    }}
                    data={this.state.data}
                />
            </div>
        )
    }
}
