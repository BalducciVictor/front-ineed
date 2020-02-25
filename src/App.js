import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { contextUser } from './Store/reactContext'

// Components
import Log from './pages/LogLoging/Log'
import Profile from './pages/Profile/Profile'
import NewProfile from './pages/NewProfile/NewProfile'
import PersonalInformation from './pages/PersonalInformation/PersonalInformation'
import Datavisualitaion from './pages/Datavisualitaion/Datavisualisation.jsx'
import NavBrarre from './components/Nav__barre/NavBrarre'

import './styleGlobaux/global.scss'

const App = () => {
  const [userId, setUserId] = useState(sessionStorage.getItem('id'))
  const [isLog, setLog] = useState(false)

  useEffect(() => {
    if (userId) {
      setLog(true)
    } else {
      setLog(false)
    }
  })

  const Routes = ({ value }) => {
    return (
      <Router>
        <NavBrarre isLog={value.isLog} setUserId={setUserId} />
        <Switch>
          <Route exact path="/log/:modeParmsUrl">
            { value.isLog ? <Redirect to="/profile" /> : <Log /> }
          </Route>
          <Route exact path='/profile'>
            { value.isLog ? <Profile /> : <Redirect to="/log" /> }
          </Route>
          <Route exact path='/profile/new'>
            { value.isLog ? <NewProfile /> : <Redirect to="/log" /> }
          </Route>
          <Route exact path='/profile/information/:id'>
            { value.isLog ? <PersonalInformation /> : <Redirect to="/log" /> }
          </Route>
          <Route exact path='/' component={Datavisualitaion} />
        </Switch>
      </Router>
    )
  }

  return (
    <div className={'App'} >
      <contextUser.Provider value={{ userID: userId, isLog: isLog, setLog: setLog, setUserId: setUserId }} >
        <contextUser.Consumer>
          { value => <Routes value={value} /> }
        </contextUser.Consumer>
      </contextUser.Provider>
    </div>
  )
}

export default App
