import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Hero from "../components/hero"
import LoginForm from "../components/LoginForm";


// For when Login Form Component mounts

// componentDidMount() {
//     API.getBaseBreedsList()
//       .then(res => this.setState({ breeds: res.data.message }))
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };

function landingPage() {
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
export default landingPage