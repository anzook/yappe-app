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
            display: 'first',
            action: `Don't have an account? Sign up.`,
            className: {
                loginDiv: 'loginDiv',
                signUpDiv: 'signUpDiv'
            }
        };
    }

    changeDisplay = () => {
        let { display, action } = this.state;
        this.setState({
            display: display === 'first' ? 'second' : 'first',
            action: action === `Don't have an account? Sign up.` ? 'Already have an account? Log in.' : `Don't have an account? Sign up.`
            
        });
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
            return (
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
            toggleBtn: 'toggleBtn'
        };
        return (
            <div>
                <Hero />
                <div className={className.formDiv}>
                    <Container style={{ marginTop: 0 }}>
                        {this.renderForm()}
                        <br />
                        <span className={className.toggleBtn} onClick={this.changeDisplay}>
                            {this.state.action}
                        </span>
                    </Container>
                </div>
            </div>
        )
    }
}

export default LandingPage;
