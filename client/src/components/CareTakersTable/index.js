import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../utils/API";

export class CareTakersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      dogData: [],
      close: props.close
    };
  }

  componentDidMount() {
    API.getUserInfo().then(res => {
      API.getUser(res.data.id).then(user => {
        // console.log("Calling step 1: ", user.data);
        this.setState({
          id: res.data.id,
          dogData: user.data.pets
        });
      });
    });
  }

  createTable = () => {
    let table = []
    let dogs = this.state.dogData
    // Outer loop to create parent
    for (let i = 0; i < dogs.length; i++) {
        let children = []
        children.push(<td rowSpan={dogs[i].users.length}>{dogs[i].name}</td>)
        //  Inner loop depending on number of children
        for (let j = 0; j < dogs[i].users.length; j++) {
        children.push(<td>{dogs[i].users[j].name}</td>)
        children.push(<td>{dogs[i].users[j].user_pets.role}</td>)
        children.push(<td>
           <Button 
           href={"mailto:"+ dogs[i].users[j].email +"?subject=Yappe-%20a%20message%20for%20" + dogs[i].users[j].name +"%20regarding%20"+dogs[i].name}
           target="_blank" rel="noopener noreferrer"
           variant="outline-success">
           Email
                    </Button>
          </td>)
        table.push(<tr>{children}</tr>)
        children = []
    }
      }
    return table
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Dog</th>
            <th>CareTaker</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {this.createTable()}
          {/* {this.state.dogData.map(dog => {
            return (
              <tr>
                <td rowSpan={dog.users.length}>{dog.name}</td>
                { for(let i=0; i<dog.users.length; i++){

                }}
                
                {dog.users.map(user => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.user_pets.role}</td>
                      <td>{user.email}</td>
                    </tr>
                  );
                })}
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    );
  }
}
export default CareTakersTable;
