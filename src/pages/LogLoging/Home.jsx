
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Home.scss'
import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state = {
      sign: true
    }
  }

  handler () {
    this.setState({
      sign: !this.state.sign
    })
  }

  choose () {
    if (this.state.sign == true) {
      return <SignIn action={this.handler}/>
    } else if (this.state.sign == false) {
      return <SignUp action={this.handler}/>
    }
  }

  render () {
    return (
      <div className="container">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        {this.choose()}
      </div>
    )
  }
}
export default Home
