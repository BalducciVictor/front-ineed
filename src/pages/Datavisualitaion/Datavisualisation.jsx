import React, { useState, useEffect } from 'react'
import Datvis from './dataVis'
import MapBox from '../../components/MapGl/mapGl'
import Filtre from '../../components/Filtre/Filtre'
import ListMap from '../../components/List/List'
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton'
import ContextDataFiltre, { getStoreData, setStoreData, saveOnStore } from '../../Store/DataFiltre'
import Api from '../../Api/Api'

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

const Datavisualisation = () => {
  const [mode, setMode] = useState('datavis')

  const [filtreAll, setFiltreAll] = useState(true)
  const [filtreHospitals, setFiltreHospitals] = useState([])
  const [filtrePharmacies, setFlitresPharmacies] = useState([])
  const [filtreCentres, setFiltreCentres] = useState([])
  const [filtreArrondisment, setfiltreArrondisment] = useState([11, 12])
  const [dataOrigin, setDataOrigin] = useState(localDataOrigin)

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

  const MapGl = ({ list }) => {
    return (
      <div className={`map__gl ${mode !== 'mapGl' ? 'hidden' : ''}  ${mode}`} >
        <ListMap key="map" HealthCenterList={dataOrigin.centres} PharmacyList={dataOrigin.pharmacies} HospitalList={dataOrigin.hospitals} />
        <MapBox specialite={ dataOrigin } />
      </div>
    )
  }

  const MapDavis = ({ specialites }) => {
    return (
      <div className={`view ${mode === 'datavis' ? ' ' : 'hidden'} `}>
        <Datvis specialites={specialites} />
      </div>
    )
  }
  return (
    <div className="page__map page__name">
      <h2 className="page__name"> Travel easily with chronic illness</h2>
      <h3 className="page__sub__text"> Find a specialist, a hospital, a place to get your medication.<br/> Add to your list, create your medical form and benefit from an account for all your family. </h3>
      <hr className="boxWrapper__hr" />
      <Filtre setFiltreAll={setFiltreAll} filtreAll={filtreAll} filtreHospitals={filtreHospitals} setFiltreHospitals={setFiltreHospitals} filtrePharmacies={filtrePharmacies} setFlitresPharmacies={setFlitresPharmacies} setFiltreCentres={setFiltreCentres} filtreCentres={filtreCentres} />
      <hr/>
      <div className="map--wrap">
        <div className="map__container">
          <MapGl />
          <MapDavis specialites={dataOrigin} />
        </div>
        <SwitchButton left={'Map'} rigth={'Visualization'} switchState={ mode == 'datavis' ? 0 : 1 } setNewSwitch={(val) => { setMode(val == 0 ? 'datavis' : 'mapGl') }} />
      </div>
    </div>
  )
}

export default Datavisualisation
