import React, { Component } from 'react';
import API from '../../utils/API';
import { Form, Button } from 'react-bootstrap'
import './style.css';

export default class DogSettingsForm extends Component {
    constructor(props) {
        // props: user={this.props.user} pet={this.props.id}
        // OPTION: cam verify user is owner of pet
        // get pet default info
        super(props);
        this.state = {
            name: null,
            age: null,
            pictureLink: ""
                        }
    }

    componentDidMount() {
  
        this.getPetInfo();
    }

    getPetInfo = () => {
        API.getPet(this.props.pet)
            .then(pet => {
                console.log(pet)
                this.setState({
                  name: pet.data.name,
                  age: pet.data.age,
                  pictureLink: pet.data.pictureLink
                })
            })

    }


    handleSubmit = event => {
        event.preventDefault();
        API.updatePet(this.props.pet, {
            name: this.state.name,
            age: this.state.age,
            pictureLink: this.state.pictureLink
        }).then(res => {
            if (res.status === 200) {
                // console.log('Updating User... ')
                window.location.replace('/dashboard');

            }
        }).catch(err => {
            // console.log('Error updating user: ', err)            
        })

    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control name='name' onChange={this.handleInputChange} type="text" value={this.state.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Control name='age' onChange={this.handleInputChange} type="text" value={this.state.age}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control name='pictureLink' onChange={this.handleInputChange} type="text"  value={this.state.pictureLink}/>
                </Form.Group>
                <Form.Group>
                    <Button className='activity-form-btn' onClick={this.handleSubmit} variant="primary" type="submit">
                        Submit
                </Button>
                </Form.Group>
            </Form>
        )
    }
}
