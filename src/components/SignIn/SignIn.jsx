import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './SignIn.scss';

class SignIn extends React.Component {

    render() {
      return (
        <div className="container__SignIn">
            <section className="form__SignIn">
                <h1>Create an account</h1>
                <form action="">
                  <label>Email</label>
                  <input type="email"/>
                  <label>Password</label>
                  <input type="password"/>
                  <button>Sign up</button>
                  <p>Already have a account ?<span onClick={this.props.action}>Sign Up</span></p>
                </form>
            </section>
            <section className="description">
                <h2>I Need</h2>
                <p>Your health guide</p>
                <img src="" alt=""/>
            </section>
        </div>
      );
    }
  }
  export default SignIn