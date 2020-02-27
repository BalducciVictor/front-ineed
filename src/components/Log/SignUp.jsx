import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './SignUp.scss'

class Home extends React.Component {
  changeSign () {
    this.setState({

    })
  }

  render () {
    return (
      <div className="container__SignUp">
        <section className="form__SignUp">
          <h1>Create an account</h1>
          <form action="">
            <label>Email</label>
            <input type="email"/>
            <label>Password</label>
            <input type="password"/>
            <label>Confirm password</label>
            <input type="password"/>
            <button>Sign up</button>
            <p>Already have a account ?<span onClick={this.props.action}>Log in</span></p>
          </form>
        </section>
        <section className="description">
          <h2>I Need</h2>
          <p>Your health guide</p>
          <img src="" alt=""/>
        </section>
      </div>
    )
  }
}

export default Home
