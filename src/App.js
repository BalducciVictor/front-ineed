import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { contextUser, Context } from './Store/reactContext'
import ContextDataFiltre, { getStoreData, setStoreData, saveOnStore } from './Store/DataFiltre'
import ContextFiltre from './Store/ContextFiltre'
import Api from './Api/Api'
import fonts from './fonts/fontFace.css'

// Components
import Log from './pages/LogLoging/Log'
import Profile from './pages/Profile/Profile'
import NewProfile from './pages/NewProfile/NewProfile'
import PersonalInformation from './pages/PersonalInformation/PersonalInformation'
import Datavisualitaion from './pages/Datavisualitaion/Datavisualisation'
import NavBrarre from './components/Nav__barre/NavBrarre'
import './globalstyle/global.scss'

const App = () => {
  const [userId, setUserId] = useState(sessionStorage.getItem('id'))
  const [isLog, setLog] = useState(false)
  const [profiles, setProfiles] = useState(false)

  useEffect(() => {
    if (userId) {
      setLog(true)
    } else {
      setLog(false)
    }
  }, [])

  useEffect(() => {
    console.log('isLog', isLog)
    if (isLog) {
      Api.getProfils(userId)
        .then(res => {
          const profilsFromData = res.data['hydra:member']
          // profilsFromData = clearUserData(profilsFromData)
          setProfiles(profilsFromData)
          console.log(profilsFromData)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }, [isLog])

  const Routes = ({ value }) => {
    return (
      <Router>
        <NavBrarre setLog={setLog} isLog={value.isLog} setUserId={setUserId} />
        <boxWrapper>
          <Switch>
            <Route exact path="/log/:typeLog">
              { value.isLog ? <Redirect to="/profile" /> : <Log /> }
            </Route>
            <Route exact path='/profile'>
              { value.isLog ? <Profile /> : <Redirect to="/log/singin" /> }
            </Route>
            <Route exact path='/profile/new'>
              { value.isLog ? <NewProfile /> : <Redirect to="/log/singin" /> }
            </Route>
            <Route exact path='/profile/information/:id'>
              { value.isLog ? <PersonalInformation /> : <Redirect to="/log/singin" /> }
            </Route>
            <Route exact path='/' component={Datavisualitaion} />
          </Switch>
        </boxWrapper>
      </Router>
    )
  }

  return (
    <div className={'App'} >
      <contextUser.Provider value={{ userID: userId, isLog, profiles, setProfiles, setLog, setUserId }} >
        <contextUser.Consumer>
          { value => <Routes value={value} /> }
        </contextUser.Consumer>
      </contextUser.Provider>
    </div>
  )
}

if (module.hot) {
  module.hot.accept()
}

export default App
