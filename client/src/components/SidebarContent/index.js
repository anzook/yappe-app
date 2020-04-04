import React, { Component } from "react";
import AddDogModal from '../AddDogModal'
import ActivityLog from '../SideActivity'
import SettingsModal from "../SettingsModal";
import CaretakersModal from "../CaretakersModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css'



export default class SidebarContent extends Component {
  render() {
    return (
      <div>
        <ul className = 'sidebar-ul'>
          <li><AddDogModal /></li>
          <li><ActivityLog /></li>
          <li><CaretakersModal /></li>
          <li><SettingsModal /></li>
          <li>
            <a href="https://github.com/anzook/yappe-app">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}