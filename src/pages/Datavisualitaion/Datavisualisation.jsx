import React, { useState, useEffect } from 'react'
import Datvis from './dataVis'
import BoxWrapper from '../../components/BoxWrapper'
import MapGl from '../../components/MapGl/mapGl'
import Filtre from '../../components/Filtre/Filtre'
import ListMap from '../../components/List/List'
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton'
import ContextDataFiltre from '../../Store/DataFiltre'

const Datavisualisation = () => {
  const [mode, setMode] = useState('datavis')

  const MapGl = ({ list }) => {
    return (
      mode === 'datavis' ? <div className='Map__gl'>
        <ListMap key="map" HealthCenterList={list.centres} PharmacyList={list.pharmacies} HospitalList={list.hospitals} />
        <MapGl/>
      </div> : ''
    )
  }

  const MapDavis = ({ specialites }) => {
    return (
      <Datvis specialites={specialites} />
    )
  }

  const Template = () => {

  }

  return (
    <ContextDataFiltre.Consumer>
      {
        specialites =>
          <div className="page__map">
            <Filtre />
            <hr/>
            <div className="map--wrap">
              <div className="map__container">
                {/* <MapGl /> */}
                <MapDavis specialites={specialites} />
              </div>
              <SwitchButton left={'Map'} rigth={'Visualization'} switchState={ mode == 'datavis' ? 1 : 0 } setNewSwitch={(val) => { setMode(val == 1 ? 'datavis' : 'mapGl') }} />
            </div>
          </div>
      }
    </ContextDataFiltre.Consumer>
  )
}

export default Datavisualisation
