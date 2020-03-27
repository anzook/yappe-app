import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import API from "../../utils/API";


export class AddExistingDogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            petId: null,
            role: null,
            userId: localStorage.getItem('id')
        };
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.joinUser(this.state.petId, {
            user: this.state.userId,
            role: this.state.role
        });
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="exisiting-dog-form">
                </Form.Group>
                <Form.Group>
                    <Form.Control name='petId' onChange={this.handleInputChange} type="text" placeholder="Dog tag: 3" />
                </Form.Group>
                <Form.Group>
                    <Form.Control name='role' onChange={this.handleInputChange} as="select">
                        <option>Role...</option>
                        <option>owner</option>
                        <option>caretaker</option>
                        <option>vet</option>
                        <option>sitter</option>
                        <option>groomer</option>
                        <option>walker</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button onClick={this.handleFormSubmit} variant="primary" type="submit">
                        Submit
                        </Button>
                </Form.Group>
            </Form>
        )

    }
}
export default AddExistingDogForm;