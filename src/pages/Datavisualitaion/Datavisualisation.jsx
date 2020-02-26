import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Datvis from './dataVis.jsx'
import './styleDataVis.scss'
import BoxWrapper from '../../components/BoxWrapper'
import MapGl from '../../components/MapGl/mapGl'
import { render } from '@testing-library/react'
import ContextFiltre from '../../Store/ContextFiltre'
import Filtre from '../../components/Filtre/Filtre'
import PopAddListProfile from '../../components/PopAddListProfile/PopAddListProfile'

const PersonalInformation = () => {
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
          <MapGl/>
        </div>
        { false ? <Datvis data={[]} /> : <div />}
      </div>
    )
  }

  return (
    <div className="">
      <BoxWrapper Content={template} pageName="Travel easily with chronic illness" subText="Find a specialist, a hospital, a place to get your medication.<br> Add to your list, create your medical form and benefit from an account for all your family." />
      <PopAddListProfile/>
    </div>
  )
}

export default PersonalInformation
