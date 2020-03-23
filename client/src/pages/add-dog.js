import React, { Component } from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import DogForm from "../components/DogForm";

class addDog extends Component {
    state = {
        breeds: [],
        name: "",
        age: "",
        sex: "",
        breed: ""
    }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     console.log('I was hit!!!')
    //     API.createPet({
    //         name: this.state.name,
    //         age: this.state.age,
    //         sex: this.state.sex,
    //         breed: this.state.breed
    //     }).then(function(res) {
    //         console.log(res);
    //     }) 
        
    //     API.joinUser({
    //         id: 1,
    //         pet: this.state.name
    //     }).then(function(res) {
    //         console.log(res);
    //     }) 
    
    // }


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
                       <DogForm 
                       breeds={this.state.breeds}
                       onClick = {this.handleFormSubmit} /> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default addDog;
