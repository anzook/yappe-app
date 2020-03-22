import React, { Component } from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Hero from "../components/hero"
import LoginForm from "../components/LoginForm";
import API from '../utils/API';



class landingPage extends Component {

    handleFormSubmit = event => {
        event.preventDefault();
        API.createUser({
            name: "",
            email: "",
            password: ""
        }).then(function(res) {
            console.log(res);
        })
    }
    render() {
    return(
        <div>
            <Hero>
                <h1>YappE</h1>
            </Hero>
            <Container style={{ marginTop: 0}}>
                <Row>
                    <Col size="md-12">

                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                       <LoginForm /> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}
export default landingPage