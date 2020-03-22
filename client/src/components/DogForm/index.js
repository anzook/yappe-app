import React, { Component } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";


export class DogForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { newdog, existingdog };
    // }
    // mySubmitHandler = (event) => {
    //     event.preventDefault();
    //     alert("Would you like to:")
    // }
    // myChangeHandler = (event) => {
    //     this.setState({ newdog, existingdog: event.target.value });
    // }
    render() {
        return (
            
                <Form>
                    <Form.Group controlId="adddog">
                        <Button variant="primary" type="submit">
                            New Dog
            </Button>
                        <Button variant="primary" type="submit">
                            Existing Dog
            </Button>
                    </Form.Group>
                    <Form.Group controlId="formDogName">
                        <Form.Control type="addDogName" placeholder="Name: Chewbacca" />
                    </Form.Group>
                    <Form.Group controlId="addDogAge">
                        <Form.Control type="addDogAge" placeholder="Age: 4" />
                    </Form.Group>
                    <Form.Group controlId="dogsex">
                        <Button variant="primary" type="submit">
                            Male
            </Button>
                        <Button variant="primary" type="submit">
                            Female
            </Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic" placeholder="Breed...">

                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Dog Breed</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Dog Breed</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Dog Breed</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Form.Group>
                        <Form.Group controlId="dogsex">
                            <Button variant="primary" type="submit">
                                Previous
                        </Button>
                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form.Group>
           </Form>
           )
    }
}
export default DogForm