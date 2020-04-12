import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import AddDogModal from '../AddDogModal'
import ActivityLog from '../ActivityLog'
import SettingsModal from "../SettingsModal";
import CaretakersModal from "../CaretakersModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css'



export default class SidebarContent extends Component {

  renderTooltip = (props) => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Check Us Out - Repo Link!
        </Tooltip>
    );
}

renderAddDogIcon = () => (
    <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={this.renderTooltip}
    >
              <FontAwesomeIcon icon={faGithub}   />
    </OverlayTrigger>
);

  render() {
    return (
      <div>
        <ul className = 'sidebar-ul'>
          <li><AddDogModal /></li>
          <li><ActivityLog /></li>
          <li><CaretakersModal /></li>
          <li><SettingsModal /></li>
          <li>
            <a href="https://github.com/anzook/yappe-app" target="_blank">
              {this.renderAddDogIcon()}
            </a>
          </li>
        </ul>
      </div>
    )
  }
}