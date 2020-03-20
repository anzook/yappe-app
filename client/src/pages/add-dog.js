import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import DogForm from "../components/DogForm";

function addDog() {
    return (
        <div>
            <Container style={{ marginTop: 0}}>
                <Row>
                    <Col size="md-12">

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
