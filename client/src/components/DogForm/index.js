import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import API from "../../utils/API";


export class DogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breeds: props.breeds,
            name: "",
            age: "",
            sex: "",
            breed: "",
            pictureLink: "",
            petId: "",
            id: null
        };
    }


    componentDidMount() {
        API.getUserInfo()
        .then(res=> {
            this.setState({id: res.data.id})
        })
        API.getBreeds()
            .then(res => {
                let breeds = [];
                Object.keys(res.data.message).forEach(function (breed) {
                    breeds.push(breed)
                })
                this.setState({
                    breeds: breeds
                })
            })
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
            
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.createPet({
            name: this.state.name,
            age: this.state.age,
            sex: this.state.sex,
            breed: this.state.breed,
            pictureLink: this.state.pictureLink
        }).then(res => {
            const userId = this.state.id;
            const petId = res.data.id;
            const sex = this.state.sex
            API.joinUser(petId, {
                user: userId,
                role: this.state.role
            }).then(pet => {
                window.location.replace('/dashboard');
            })
        })
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="adddog">
                </Form.Group>
                <Form.Group>
                    <Form.Control name='name' onChange={this.handleInputChange} type="text" placeholder="Name: Chewbacca" />
                </Form.Group>
                <Form.Group>
                    <Form.Control name='age' onChange={this.handleInputChange} type="text" placeholder="Age: 8" />
                </Form.Group>
                <Form.Group>
                    <Form.Control name='sex' onChange={this.handleInputChange} as="select" placeholder="Sex:">
                        <option>Sex</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Control>
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
                <Form.Group >
                    <Form.Control name='breed' onChange={this.handleInputChange} as="select">
                        <option>Breed...</option>
                        {this.state.breeds.map(breed => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control name='pictureLink' onChange={this.handleInputChange} type="text" placeholder="Link to a picture of your pup" />
                </Form.Group>
                <Form.Group>
                    <Button className="float-right" onClick={this.handleFormSubmit} variant="primary" type="submit">
                        Submit
                        </Button>
                </Form.Group>
            </Form>
        )

    }
}
export default DogForm