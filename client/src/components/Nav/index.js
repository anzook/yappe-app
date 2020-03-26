import React, { Component } from 'react';
import Navbar from 'react-bootstrap'
// import './style.css';
// import React from "react";
import Sidebar from "react-sidebar";
 
class NavSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <div>
      <Sidebar
        sidebar={<b>YAPPE</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >  <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
        <button onClick={() => this.onSetSidebarOpen(true)}>
          This would say something else 
        </button>
      </Sidebar>
      </div>
    );
  }
}
 
export default NavSide;