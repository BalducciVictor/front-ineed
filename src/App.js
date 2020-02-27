import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { contextUser, Context } from './Store/reactContext'
import ContextDataFiltre, { getStoreData, setStoreData, saveOnStore } from './Store/DataFiltre'
import ContextFiltre from './Store/ContextFiltre'
import Api from './Api/Api'

// Components
import Log from './pages/LogLoging/Log'
import Profile from './pages/Profile/Profile'
import NewProfile from './pages/NewProfile/NewProfile'
import PersonalInformation from './pages/PersonalInformation/PersonalInformation'
import Datavisualitaion from './pages/Datavisualitaion/Datavisualisation'
import NavBrarre from './components/Nav__barre/NavBrarre'
import './styleGlobaux/global.scss'

/**
 * This is all callApi and data.
 * set By default object innert or Value of store
 * @typedef dataOrigin
 * @type {Object}
 * @property {array} endpoint - ex call api
 */

/** @type {dataOrigin} */
let localDataOrigin
if (!getStoreData()) {
  setStoreData({})
}
localDataOrigin = getStoreData()

const App = () => {
  const [userId, setUserId] = useState(sessionStorage.getItem('id'))
  const [isLog, setLog] = useState(false)

  const [filtreAll, setFiltreAll] = useState(true)
  const [filtreHospitals, setFiltreHospitals] = useState([])
  const [filtrePharmacies, setFlitresPharmacies] = useState([])
  const [filtreCentres, setFiltreCentres] = useState([])
  const [filtreArrondisment, setfiltreArrondisment] = useState([11, 12])
  const [dataOrigin, setDataOrigin] = useState(localDataOrigin)

  useEffect(() => {
    if (userId) {
      setLog(true)
    } else {
      setLog(false)
    }
  })

  const buildParam = (parms, name) => {
    return parms.map((parm, i) => {
      return `${name}[]=` + parm
    }).join('&').replace(' ', '%20')
  }

  const builParamsEndpoint = (parms, type) => {
    if (parms.length > 1) {
      return '?' + buildParam(filtreArrondisment, 'Arrondissement') + '&' + buildParam(parms, 'specialites')
    } else {
      return `?specialite=${parms[0]}` + '&' + buildParam(filtreArrondisment, 'Arrondissement')
    }
  }

  const setRequests = () => {
    const requests = [
      {
        filtre: filtreHospitals,
        endPoint: (parms) => { return Api.getHospital(parms) }
      },
      {
        filtre: filtrePharmacies,
        endPoint: (parms) => { return Api.getPharmacies(parms) }
      },
      {
        type: 'specialites',
        filtre: filtreCentres,
        endPoint: (parms) => { return Api.getCentre(parms) }
      }
    ]
    return requests.map(({ filtre, endPoint, type }) => {
      if (filtre.length || filtre.includes('all') || filtreAll) {
        if (filtre.includes('all') || filtreAll) {
          return endPoint
        } else {
          // set Endpoint with the good parms
          return () => { return endPoint(builParamsEndpoint(filtre, type)) }
        }
      }
    }).filter((request) => request)
  }

  useEffect(() => {
    if (filtreAll || filtreHospitals.length || filtrePharmacies.length || filtreCentres.length) {
      ///  order of send filtreHospitals || filtrePharmacies || filtreCentres
      Api.getAllFiltre(setRequests())
        .then((responses) => {
          const resClear = {}
          let total = 0
          responses.map((response, i) => {
            const data = response.data['hydra:member']
            const id = response.data['@id']
            // data.config is in responses if request comme to the back then we save
            saveOnStore({ [responses[i].config.url]: { data } })

            // set call type for get ther reference
            let type = ''
            type = !type && id.includes('hopitals') ? 'hospitals' : type
            type = !type && id.includes('centre_de_santes') ? 'centres' : type
            type = !type && id.includes('pharmacies') ? 'pharmacies' : type

            total += data.length + 1

            resClear[type] = data
          })

          resClear.total = total

          setDataOrigin(resClear)
        })
    } else {
      setDataOrigin({ hospitals: [], centres: [], pharmacies: [] })
    }
  }, [filtreAll, filtreHospitals.length, filtrePharmacies.length, filtreCentres.length])

  const Routes = ({ value }) => {
    return (
      <Router>
        <NavBrarre isLog={value.isLog} setUserId={setUserId} />
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
      <contextUser.Provider value={{ userID: userId, isLog: isLog, setLog: setLog, setUserId: setUserId }} >
        <ContextDataFiltre.Provider value={{ ...dataOrigin }} >
          <ContextFiltre.Provider value={{ filtrePharmacies, filtreAll, filtreHospitals, filtreCentres, setFlitresPharmacies, setFiltreHospitals, setFiltreAll, setFiltreCentres }} >
            <contextUser.Consumer>
              { value => <Routes value={value} /> }
            </contextUser.Consumer>
          </ContextFiltre.Provider>
        </ContextDataFiltre.Provider>
      </contextUser.Provider>
    </div>
  )
}

if (module.hot) {
  module.hot.accept()
}

export default App
