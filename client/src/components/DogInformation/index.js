import React, { Component } from 'react';
import API from '../../utils/API';
import { ListGroup, Card } from 'react-bootstrap'
import './style.css';

export default class DogInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: null,
            activitiesReversed: null,
        }
    }

    // componentDidMount() {
    //     API.getPet(this.props.id)
    //         .then(res => {
    //             API.getPetActions(this.props.id)
    //                 .then(activities => {
    //                     console.log(activities);
    //                     // let reversedArray = activities.data;
    //                     // reversedArray.reverse();
    //                     // console.log(activities);
    //                     // console.log(reversedArray);
    //                     // this.setState({
    //                     //     pet: res.data,
    //                     //     petActivities: activities.data,
    //                     //     activitiesReversed: reversedArray
    //                     // })
    //                 })
    //         })
    // }

    // latestActivities = () => {
    //     let activities = this.state.petActivities;
    //     console.log(activities)
    //     const actArray=[];

    //     if (activities.length < 3) {
    //         for (let i = activities.length-1; i < 0; i--) {
    //             actArray.push(
    //                 <ListGroup variant="flush">
    //                     <ListGroup.Item className='no-padding'>
    //                         <ul className='activity-ul'>
    //                             <li><h6>Activity: {activities[i].type}</h6></li>
    //                             <li><h6>Date: {activities[i].createdAt}</h6></li>
    //                         </ul>
    //                     </ListGroup.Item>
    //                 </ListGroup>
    //             )
    //         }

    //     } else {
    //         for (let i = activities.length-1; i <= activities.length-4; i--) {
    //             actArray.push(
    //                 <ListGroup variant="flush">
    //                     <ListGroup.Item className='no-padding'>
    //                         <ul className='activity-ul'>
    //                             <li><h6>Activity: {activities[i].type}</h6></li>
    //                             <li><h6>Date: {activities[i].createdAt}</h6></li>
    //                         </ul>
    //                     </ListGroup.Item>
    //                 </ListGroup>
    //             )
    //         }
    //     }
    //     console.log(actArray)
    //     return actArray;
    // }

    render() {
        // const actionsPet = this.props.actions;
        // console.log(actionsPet[0]);
        // console.log(actionsPet[0].id);
        // console.log(this.props.actions[0]);

        return (

            <div>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <ul className='age-sex-ul'>
                            <li><h6>Age: {this.props.age}</h6></li>
                            <li><h6>Sex: {this.props.sex}</h6></li>
                        </ul>
                        <h6>Breed: {this.props.breed}</h6>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h4>Most Recent Activities</h4>
                        {this.props.actions.map((action) => (
                            <ul>
                                <li>Activity: {action.type}</li>
                                <li>Date: {action.updatedAt}</li>
                            </ul>
                            // <ListGroup.Item>{action.type}</ListGroup.Item>
                        ))}
                    </ListGroup.Item>
                </ListGroup>
                {/* {this.handleRender()} */}
            </div>
        )
    }
}