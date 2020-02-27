import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Datvis from './dataVis.jsx'
import './styleDataVis.scss'
import BoxWrapper from '../../components/BoxWrapper'
import MapGl from '../../components/MapGl/mapGl'
import { render } from '@testing-library/react'
import ContexFiltre from '../../Store/ContexFiltre'
import Filtre from '../../components/Filtre/Filtre'

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

  useEffect(() => {
    if (!categories.data) {
      axios.get('http://13.59.220.41/api/arrondissements')
        .then((res) => {
          setCategorie('data', res.data['hydra:member'])
        })
    }
    if (!categories.pharmacies.length) {
      axios.get('http://13.59.220.41/api/pharmacies?Arrondissement=14&Arrondissement[]=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C16%2C17%2C18%2C19%2C20')
        .then((res) => {
          console.log(res)
          setCategorie('pharmacies', res.data['hydra:member'])
        })
    }
  }, [categories.pharmacies, categories.data])

  const template = () => {
    return (
      <div className="page__map">
        <Filtre />
        <hr/>
        <div className="map--wrap">
          {/* <MapGl/> */}
        </div>
        <ContexFiltre.Consumer>
          {
            value => value.data ? <Datvis data={value.data} /> : <div />
          }
        </ContexFiltre.Consumer>
      </div>
    )
  }

  return (
    <ContexFiltre.Provider value={categories} >
      <BoxWrapper Content={template} pageName="Travel easily with chronic illness" subText="Find a specialist, a hospital, a place to get your medication.<br> Add to your list, create your medical form and benefit from an account for all your family." />
    </ContexFiltre.Provider>
  )
}

export default PersonalInformation
