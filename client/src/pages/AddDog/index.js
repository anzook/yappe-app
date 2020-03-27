import React, { Component } from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import DogForm from "../../components/DogForm";

class addDog extends Component {
    state = {
        breeds: [],
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
