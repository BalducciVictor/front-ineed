import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
      return (
        <div className="">
            <section className="form">
                <h1>Create an account</h1>
                <form action="">
                   <label>Email</label>
                    <input type="email"/>
                    <label>Password</label> 
                    <input type="password"/>
                    <label>Confirm password</label> 
                    <input type="password"/>
                    <button>Sign up</button>
                    <p>Already have a account ?<Link to="">Log in</Link></p>
                </form>
            </section>
            <section className="description">
                <h1>I Need</h1>
                <p>Your health guide</p>
                <img src="" alt=""/>
            </section>
        </div>
      );
    }
  }

  export default Home