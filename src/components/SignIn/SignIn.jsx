import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import map from '../../assets/img/map.png'
import axios from 'axios';

import './SignIn.scss';

class SignIn extends React.Component {
  constructor(){
    super();
    this.state = {
      value_input_mail : '',
      value_input_password : '',
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({
      value_input_mail: event.target.value,
    }, ()=>{
      console.log(`password = ${this.state.value_input_mail}`)
    });
  }
  handleChangePassword(event) {
    this.setState({
      value_input_password: event.target.value,
    }, ()=>{
      console.log(`password = ${this.state.value_input_password}`)
      }
    );
  }
  call_signIn(e){
    e.preventDefault();
    const configSend = {'Content-Type': 'application/json'}
    let data = {"username": `${this.state.value_input_mail}`, "password": `${this.state.value_input_password}`};
    console.log(this.state.value_input_mail);
    console.log(this.state.value_input_password);
    axios.post('http://13.59.220.41/login', data, configSend)
      .then (res => {
      console.log (res, 'ca marche');
      //code redirect profil page
      })
      .catch (err => {console.log (err.response.data)});
  }
    render() {
      return (
        <div className="container__SignIn">
            <section className="form__SignIn">
                <h1>Create an account</h1>
                <form action="">
                  <label>Email</label>
                  <input type="email" value={this.state.value_input_mail} onChange={this.handleChangeEmail}/>
                  <label>Password</label >
                  <input type="password" value={this.state.value_input_password} onChange={this.handleChangePassword}/>
                  <button onClick={this.call_signIn.bind(this)}>Sign in</button>
                  <p>You don't have an account ?<span onClick={this.props.action}>Sign Up</span></p>
                </form>
            </section>
            <section className="description">
                <h2>I NEED</h2>
                <p>Your health guide</p>
                <img src={ map } alt="map"/>
            </section>
        </div>
      );
    }
  }
  export default SignIn