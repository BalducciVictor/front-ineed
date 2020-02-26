import React, { useState, useEffect } from 'react'
import Datvis from './dataVis.jsx'
import BoxWrapper from '../../components/BoxWrapper'
import MapGl from '../../components/MapGl/mapGl'
import Filtre from '../../components/Filtre/Filtre'
import ListMap from '../../components/List/List'
import ContextList from '../../Store/DataFiltre'
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton'

const Datavisualisation = () => {
  const [categories, setCategories] = useState({
    pharmacies: [],
    hospitals: [],
    centres: []
  })

  const setCategorie = (key, value) => {
    const NewCategorise = categories
    NewCategorise[key] = value
    setCategories(NewCategorise)
  }

  const template = () => {
    return (
      <div className="page__map">
        <Filtre />
        <hr/>
        <div className="map--wrap">
          <ContextList.Consumer>
            { list => <ListMap key="map" HealthCenterList={list.centres} PharmacyList={list.pharmacies} HospitalList={list.hospitals} /> }
          </ContextList.Consumer>
          <div className="map__container"><MapGl/></div>
          <SwitchButton left={'My list'} rigth={'My information'} switchState={''} />
          { false ? <Datvis data={[]} /> : <div />}
        </div>
      </div>
    )
  }

  return (
    <BoxWrapper Content={template} pageName="Travel easily with chronic illness" subText="Find a specialist, a hospital, a place to get your medication.<br> Add to your list, create your medical form and benefit from an account for all your family." />
  )
}

export default Datavisualisation
