import React from "react";
import PropTypes from "prop-types";
import AddDogModal from '../AddDogModal'
import MaterialTitlePanel from "./MaterialTitlePanel";
import SettingsModal from "../SettingsModal";
import CaretakersModal from "../CaretakersModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faUserPlus, faClipboardList, faPaw, faHome } from '@fortawesome/free-solid-svg-icons';
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

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink.coffee}>
        Mock menu item {ind}
      </a>
    );
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="index.html" style={styles.sidebarLink}>
        <p><FontAwesomeIcon  icon={faHome} /> Home </p>
        </a>
        <a  style={styles.sidebarLink}>
        <AddDogModal  />  
        </a>
        {/* <div style={styles.divider} /> */}
        <a style={styles.sidebarLink}>
        <CaretakersModal />

        </a>
        <a href="#holder" style={styles.sidebarLink}>
       <p><FontAwesomeIcon  icon={faClipboardList} /> Activity Log </p>
        </a>
        <a style={styles.sidebarLink}>
    <SettingsModal />
        </a>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;