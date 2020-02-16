import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Log from './pages/LogLoging/Log'
import Profile from './pages/Profile/Profile'
import NewProfile from './pages/NewProfile/NewProfile'
import PersonalInformation from './pages/PersonalInformation/PersonalInformation'
import Datavisualitaion from './pages/Datavisualitaion/Datavisualisation.jsx'
import NavBrarre from './components/NavBrarre'

import './styleGlobaux/global.scss'

function App () {
  return (
    <div className={'App'} >
      <Router>
        <NavBrarre />
        <Switch>
          <Route exact path='/' component={Log}/>
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile/new' component={NewProfile} />
          <Route exact path='/profile/information/:id' component={PersonalInformation} />
          <Route exact path='/map' component={Datavisualitaion} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
