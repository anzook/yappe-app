  
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
                        label: 'Videos Made',
                        backgroundColor:'rgba(255, 0, 255, 0.75)',
                        data: [4, 5, 1, 10, 32, 2, 4]
                    },
                    {
                        label: 'Subscriptions',
                        backgroundColor:'rgba(0, 255, 0, 0.75)',
                        data: [14, 15, 21, 0, 12, 4, 2]
                    }
                ]
            }
        }
    }
    render() {
        return(
            <div style={{position:'relative', width: '82%', height: "60vh"}}>
                <h3>Your Logged Activities</h3>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
            </div>
        )
    }
}
