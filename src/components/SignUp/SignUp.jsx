import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './SignUp.scss';
import map from '../../assets/img/map.png'
import axios from 'axios';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      value_input_mail : '',
      value_input_password : '',
      value_input_confirm_password: '',
      message_error_password: false,
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    //this.confimPassword = this.confimPassword.bind(this);
  }
  //change value_input_mail
  handleChangeEmail(event) {
    this.setState({
      value_input_mail: event.target.value,
    }, ()=>{
      console.log(`Change email = ${this.state.value_input_mail}`)
    });
  }
  //change value_input_password
  handleChangePassword(event) {
    this.setState({
      value_input_password: event.target.value,
    }, ()=>{
      console.log(`Change password = ${this.state.value_input_password}`)
      }
    );
  }
  //change value_input_confirm_password
  handleChangeConfirmPassword(event) {
    this.setState({
      value_input_confirm_password: event.target.value,
    }, ()=>{
      console.log(` change confirm password = ${this.state.value_input_confirm_password}`)
      }
    );
  }
  //change value message_error_password for show message error
  //confimPassword(){
  //  if (this.state.value_input_password !== this.state.value_input_confirm_password) {
  //    this.setState({message_error_password: true}, ()=>{
  //      console.log('change value message_error_password')
  //    });
  //  }
  //}
  //Call api for creat account
  call_signIn(e){
    //cancel default comportement
    e.preventDefault();
    //change value message_error_password for show message error
    //this.confimPassword();
    console.log(this.state.message_error_password)
    const configSend = {'Content-Type': 'application/json'}
    let data = {"email": `${this.state.value_input_mail}`, "password": `${this.state.value_input_password}`};
    axios.post('http://13.59.220.41/api/users', data, configSend)
      .then (res => {
      console.log (res, 'ca marche');
        
      })
      .catch (err => {
        console.log (err.response.data);
        this.setState({message_error_password: true}, ()=>{
          console.log('change value message_error_password')
      });
    });
  }
  render() {
      return (
        <div className="container__Sign">
            <section className="form__Sign">
                <h1>Create an account</h1>
                <form action="">
                  <label>Email</label>
                  <input type="email" value={this.state.value_input_mail} onChange={this.handleChangeEmail}/>
                  <label>Password</label>
                  <input type="password" value={this.state.value_input_password} onChange={this.handleChangePassword}/>
                  <label>Confirm password</label>
                  <input type="password"/>
                  {this.state.message_error_password == true && <p className="message_error">Passwords do not match</p>}
                  <button onClick={this.call_signIn.bind(this)} >Sign up</button>
                  <p>Already have an account ?<span onClick={this.props.action}>Log in</span></p>
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

  export default Home