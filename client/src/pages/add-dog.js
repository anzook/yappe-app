import React, { Component } from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import DogForm from "../components/DogForm";
// import Container from '../components/Container'
import API from "../utils/API";

API.createPet({
    name: "Chewy",
    age: "8",
    sex: "male",
    breed: "Shepard"
}).then(function(res) {
    console.log(res);
}) 

API.joinUser({
    id: 1,
    pet: "Chewy"
}).then(function(res) {
    console.log(res);
}) 

class addDog extends Component {
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
                       <DogForm /> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}
export default addDog;
