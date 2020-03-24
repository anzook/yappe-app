import React, { Component } from "react";
import Container from "../../components/Container";
import Hero from "../../components/hero"
import './style.css'
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";


class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'first'
        };
    }

    changeDisplay = () => {
        let { display } = this.state;
        this.setState({ display: display === 'first' ? 'second' : 'first' });
    }
    renderForm() {
        let { display } = this.state;

        if (display === 'first') {
            return (
                <div>
                    <h3>Login</h3>
                    <LoginForm />
                </div>
            )
        } else if (display === 'second') {
            return(
                <div>
                    <h3>Sign Up</h3>
                    <SignupForm />
                </div>
            ) 
        }
    }
    render() {
        let className = {
            formDiv: 'formDiv',
            loginDiv: 'loginDiv',
            signUpDiv: 'signUpDiv'

        };
        return (
            <div>
                <Hero />
                <div className={className.formDiv}>
                    <Container style={{ marginTop: 0 }}>
                        {this.renderForm()}
                        <br/>
                        <button onClick={this.changeDisplay}>Toggle</button>
                    </Container>
                </div>
            </div>
        )
    }
}

export default LandingPage;
