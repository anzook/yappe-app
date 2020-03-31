import React from "react";
import PropTypes from "prop-types";
import AddDogModal from '../AddDogModal'
// import ActivityLog from '../SideActivity'
import {NavLink} from 'react-bootstrap'
import MaterialTitlePanel from "./MaterialTitlePanel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faUserPlus, faToolbox, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import '../SidebarContent'
 
 


const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  // const links = [];

  // for (let ind = 0; ind < 10; ind++) {
  //   links.push(
  //     <a key={ind} href="#" style={styles.sidebarLink.coffee}>
  //       Mock menu item {ind}
  //     </a>
  //   );
  // }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <NavLink  style={styles.sidebarLink}>
        <AddDogModal  />  
        </NavLink>
        <NavLink style={styles.sidebarLink}>
       <FontAwesomeIcon  icon={faUserPlus} />
       <span className='span'>Add Caretaker</span>
        </NavLink>
        <a href="https://github.com/anzook/yappe-app" style={styles.sidebarLink}>
       <FontAwesomeIcon  icon={faToolbox} />
       <span className='span'>Help us improve</span>
        </a>
        <a href="../components/SideActivity" style={styles.sidebarLink}>
        <FontAwesomeIcon icon={faClipboardList}/>
        <span className='span'>ActivityLog</span>
        </a>
        <NavLink href="#holder" style={styles.sidebarLink}>
       <FontAwesomeIcon  icon={faCog} />
       <span className='span'>Settings</span>
       </NavLink>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;