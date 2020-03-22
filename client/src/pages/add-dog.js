import React, { Component } from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import DogForm from "../components/DogForm";
import API from "../utils/API";



class addDog extends Component {
    state = {
        breeds: [],
        name: "",
        age: "",
        sex: "",
        breed: ""
    }

    handleFormSubmit = event => {
        event.preventDefault();
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
    componentDidMount() {
        // API.getBreeds()
        // .then(res => {
        //     let breeds = [];
        //     Object.keys(res.data.message).forEach(function(breed) {
        //         breeds.push(breed)
        //     })
        //     this.setState({
        //         breeds: breeds
        //     })
        //     console.log(breeds);
        // })
    }

    render() {
    return (
        <div>
            <Container style={{ marginTop: 0}}>
                <Row>
                    <Col size="md-12">
                        <h1>yappE</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                       <DogForm breeds={this.state.breeds} /> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default addDog;
