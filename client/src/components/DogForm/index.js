import React, { Component } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import API from "../../utils/API";


export class DogForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            breeds: props.breeds,
            name: "",
            age: "",
            sex: "",
            breed: ""
        };
    }


    componentDidMount() {
        API.getBreeds()
        .then(res => {
            let breeds = [];
            Object.keys(res.data.message).forEach(function(breed) {
                breeds.push(breed)
            })
            this.setState({
                breeds: breeds
            })
            console.log(breeds);
        })
    }

    handleInputChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
            [event.target.age]: event.target.value,
            [event.target.role]: event.target.value,
            // [event.target.role]: event.target.value,
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('I was hit!!!')
        API.createPet({
            name: this.state.name,
            age: this.state.age,
            sex: this.state.sex,
            breed: this.state.breed
        }).then(function(res) {
            console.log(res);
        }) 
        
        API.joinUser({
            id: 1,
            pet: this.state.name
        }).then(function(res) {
            console.log(res);
        }) 
    
    }
    // mySubmitHandler = (event) => {
    //     event.preventDefault();
    //     alert("Would you like to:")
    // }
    // myChangeHandler = (event) => {
    //     this.setState({ newdog, existingdog: event.target.value });
    // }
    render() {
        return (
            // <h1> Would you like to:</h1>
                <Form>
                    <Form.Group controlId="adddog">
                        {/* <Button variant="primary" type="submit">
                            New Dog
            </Button>
                        <Button variant="primary" type="submit">
                            Existing Dog
            </Button> */}
                    </Form.Group>     
                    <Form.Group controlId="newDogName">
                        <Form.Control name='name' type="text" placeholder="Name: Chewbacca" />
                    </Form.Group>
                    <Form.Group controlId="newDogAge">
                        <Form.Control name='age' type="text" placeholder="Age: 8" />
                    </Form.Group>

                    {/* <Form.Group controlId="existingDogId">
                        <Form.Control type="existingDogId" placeholder="Dog Id:" />
                    </Form.Group> */}
                    <Form.Group controlId="userRoleId">
                        <Form.Control name='role' type="text" placeholder="Role:" />
                    </Form.Group>
                    <Form.Group controlId="dogsex">
                        {/* <Button variant="primary" type="submit">
                            Male
            </Button>
                        <Button variant="primary" type="submit">
                            Female
            </Button> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic" placeholder="Breed...">

                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                
                                {this.state.breeds.map(breed => (
                                    <Dropdown.Item >{breed}</Dropdown.Item>
                                ) )}
                            </Dropdown.Menu>
                        </Dropdown>
                        </Form.Group>
                        <Form.Group controlId="dogsex">
                         <Button onClick={this.handleFormSubmit} variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form.Group>
           </Form>
        )
           
    }
}
export default DogForm