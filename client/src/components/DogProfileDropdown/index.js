import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './style.css';


export default class DogProfileDropdown extends Component {
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Add Activity</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Send Invite</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}