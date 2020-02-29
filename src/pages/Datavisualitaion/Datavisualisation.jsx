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
import PopWrap from '../../components/PopWrap/PopWrap.jsx'
import ShowProfile from '../../components/ShowProfile/ShowProfile'

const PersonalInformation = () => {
  const [profils, setProfils] = useState([])
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

  const callGetProfile = () => {
    axios.get('http://13.59.220.41/api/profils?User=' + sessionStorage.getItem('id'))
      .then(res => {
        let profilsFromData = res.data['hydra:member']
        setProfils(profilsFromData)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  useEffect(() => {
    callGetProfile()
  }, [profils.length])

  const PopContent = () => {
    return (
      <div className='pop-content'>
        <h2>Add wish profile</h2>
        { profils.length ? profils.map((profil, i) => {
          return <ShowProfile key={profil.id} removeProfile={'passer le add my list'} name={profil.name} surname={profil.surname} id={profil.id} />
        }) : ''}
        <button onClick={alert('coucou')} >Delete profile</button>
        <p>Cancel</p>
      </div>
    )
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
        <PopWrap data={profils} setData={profils} Content={PopContent}/>
      </div>
    )
  }

  return (
    <div className="">
      <BoxWrapper Content={template} pageName="Travel easily with chronic illness" subText="Find a specialist, a hospital, a place to get your medication.<br> Add to your list, create your medical form and benefit from an account for all your family." />
    </div>
  )
}

export default PersonalInformation
