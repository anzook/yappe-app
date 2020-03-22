import React, { Component } from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
// import Hero from "../components/hero"
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";


class LandingPage extends Component {

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('I was hit!!')
    };

    render() {
        return (
            <div>
                {/* <Hero/> */}
                <Container style={{ marginTop: 0 }}>
                    <Row>
                        <Col size="md-12">
                            <h2>Sign Up Form</h2>
                            <SignupForm
                                handleFormSubmit = {this.handleFormSubmit}
                            />
                            <br />
                            <h2>Login Form</h2>
                            <LoginForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LandingPage;