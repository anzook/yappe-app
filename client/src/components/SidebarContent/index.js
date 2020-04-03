import React, { Component } from "react";
// import PropTypes from "prop-types";
import AddDogModal from '../AddDogModal'
import ActivityLog from '../SideActivity'
import { NavLink } from 'react-bootstrap'
// import MaterialTitlePanel from "./MaterialTitlePanel";
import SettingsModal from "../SettingsModal";
import CaretakersModal from "../CaretakersModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, } from '@fortawesome/free-solid-svg-icons';
import './style.css'



export default class SidebarContent extends Component {
  render() {
    return (
      <div>
        <ul className = 'sidebar-ul'>
          <li><AddDogModal /></li>
          <li><ActivityLog /></li>
          <li><SettingsModal /></li>
          <li><CaretakersModal /></li>
          <li>
            <a href="https://github.com/anzook/yappe-app">
              <FontAwesomeIcon icon={faToolbox} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}


// const styles = {
//   sidebar: {
//     width: 256,
//     height: "100%"
//   },
//   sidebarLink: {
//     display: "block",
//     padding: "16px 0px",
//     color: "#757575",
//     textDecoration: "none"
//   },
//   divider: {
//     margin: "8px 0",
//     height: 1,
//     backgroundColor: "#757575"
//   },
//   content: {
//     padding: "16px",
//     height: "100%",
//     backgroundColor: "white"
//   }
// };

// const SidebarContent = props => {
//   const style = props.style
//     ? { ...styles.sidebar, ...props.style }
//     : styles.sidebar;

  // const links = [];

  // for (let ind = 0; ind < 10; ind++) {
  //   links.push(
  //     <a key={ind} href="#" style={styles.sidebarLink.coffee}>
  //       Mock menu item {ind}
  //     </a>
  //   );
  // }

  // return (
    // <MaterialTitlePanel title="Menu" style={style}>
    //   <div style={styles.content}>
    //     {/* <NavLink  style={styles.sidebarLink}> */}
    //     <AddDogModal  />  
    //     {/* </NavLink> */}
    //     <a href="https://github.com/anzook/yappe-app" style={styles.sidebarLink}>
    //    <FontAwesomeIcon  icon={faToolbox} />
    //     </a>
    //     {/* <div style={styles.divider} /> */}
    //     <a style={styles.sidebarLink}>
    //     <CaretakersModal />

    //     </a>
    //     <NavLink style={styles.sidebarLink}>
    //     <ActivityLog />
    //     </NavLink>
    //     <a style={styles.sidebarLink}>
    // <SettingsModal />
    //     </a>
    //   </div>
    // </MaterialTitlePanel>
  // );
// };

// SidebarContent.propTypes = {
//   style: PropTypes.object
// };

// export default SidebarContent;