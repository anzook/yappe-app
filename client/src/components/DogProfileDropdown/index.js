import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import ActivitiesFormModal from '../ActivityFormModal';
import DogSettingsModal from '../DogSettingsModal';


export default class DogProfileDropdown extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <ActivitiesFormModal 
                     pet={this.props.pet.id}
                     user={this.props.user.id}/>
                    <DogSettingsModal 
                    pet={this.props.pet.id}/>
                    {/* <Dropdown.Item href="#">Add Activity</Dropdown.Item>
                    <Dropdown.Item href="#">Send Invite</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}