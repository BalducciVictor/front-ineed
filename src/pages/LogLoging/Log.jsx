
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Home.scss'
import SignUp from '../../components/Log/Log'

const Log = () => {
  const [handler] = useState('singIn')
  return (
    <div className="container">
      <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
      <SignUp state={handler}/>
    </div>
  )
}

export default Log
