import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import API from "../../utils/API";


export class UpdateUserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            name: null,
            id: null,
            password: null,
            close: props.close        
        };
    }

    componentDidMount() {
        API.getUserInfo()
            .then(res => {
                API.getUser(res.data.id).then( user => {
                    this.setState({
                      id: res.data.id,
                      name: user.data.name,
                      email:  user.data.email 
                    })
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
        API.updateUser(this.state.id, {
            name: this.state.name,
            email: this.state.email,
        }).then(res => {
            if (res.status === 200) {
                // console.log('Updating User... ')

            }
        }).catch(err => {
            // console.log('Error updating user: ', err)            
        })
}

    render() {
        return (
            <Form >
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                        name='name'
                        value={this.state.name}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        name='email'
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleFormSubmit}
                >
                    Update
                </Button>
            </Form >
        )

    }
}
export default UpdateUserForm;