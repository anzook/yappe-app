import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'


export class SideBar extends Component {
  render() {
    const Item = (props) => {
      const context = React.useContext(NavContext);
      return (
        <div>
          <SideNav>
            <Nav id="1">
              <Item>Link 1</Item>
            </Nav>
            <Nav id="2">
              <Item>Link 2</Item>
            </Nav>
            <Nav id="3">
              <Item>Link 3</Item>
            </Nav>
          </SideNav>

        </div>
      )
    }


  }
}

export default SideBar;