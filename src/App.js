import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Components
import Log from './pages/LogLoging/Log'
import Profile from './pages/Profile/Profile'
import NewProfile from './pages/NewProfile/NewProfile'
import PersonalInformation from './pages/PersonalInformation/PersonalInformation'
import Datavisualitaion from './pages/Datavisualitaion/Datavisualisation.jsx'
import NavBrarre from './components/Nav__barre/NavBrarre'

import './styleGlobaux/global.scss'

const App = () => {
  const [isLog, setlog] = useState(sessionStorage.getItem('id'))
  useEffect(() => {
    setlog(sessionStorage.getItem('id'))
  }, sessionStorage.getItem('id'))
  return (
    <div className={'App'} >
      <Router>
        <NavBrarre isLog={isLog} />
        <Switch>
          <Route exact path="/log">
            { isLog ? <Redirect to="/profile" /> : <Log /> }
          </Route>
          <Route exact path='/profile'>
            { isLog ? <Profile /> : <Redirect to="/log" /> }
          </Route>
          <Route exact path='/profile/new'>
            { isLog ? <NewProfile /> : <Redirect to="/log" /> }
          </Route>
          <Route exact path='/profile/information/:id'>
            { isLog ? <PersonalInformation /> : <Redirect to="/log" /> }
          </Route>
          <Route exact path='/' component={Datavisualitaion} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
