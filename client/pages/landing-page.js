import React, { Component } from "react";
import ReactDOM from "react-dom"

class Dogs extends Component {
  render() {
      return (
        <body className="landing-body">
        <nav className="navbar landing-nav" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/homepage">
                    <h1>yappE</h1>
                </a>
            </div>
        </nav>
    
        <div className="container landing-container">
            <div className="signup">Sign Up</div>
            <div className="login">Login</div>
    
            <form className="signup-form">
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" name="name" id="name-input" placeholder="Name">
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="email" id="su-email-input" placeholder="Email">
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" id="su-password-input" placeholder="Password">
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <button type="submit" className="button is-primary is-inverted is-outlined">sign up</button>
            </form>
    
            <form className="login-form">
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="email" id="li-email-input" placeholder="Email">
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" id="li-password-input" placeholder="Password">
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <button type="submit" className="button is-primary is-inverted is-outlined">login</button>
    
      )
  }
}
