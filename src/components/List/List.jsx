import React, { useEffect, useState } from 'react'
import Api from '../../Api/Api'
import logoHospistal from '../../assets/logo-hospital.png'
import Card from '../card/cardsItems'

function List ({ profile }) {
  // data API
  const [HealthCenterList, setHealthCenterList] = useState([])
  const [PharmacyList, setPharmacyList] = useState([])
  const [HospitalList, setHospitalList] = useState([])
  const [ReloadFav, setReloadFav] = useState(true)

  // modification state chronic disease
  useEffect(() => {
    getFavList()
  })

  // Get fav list for the profile
  const getFavList = () => {
    if (ReloadFav === true) {
      Api.get('/api/centre_de_santes?Profil=' + profile.id)
        .then(response => {
          setHealthCenterList(response.data['hydra:member'])
        })

      Api.get('/api/pharmacies?Profil=' + profile.id)
        .then(response => {
          setPharmacyList(response.data['hydra:member'])
        })

      Api.get('/api/hopitals?Profil=' + profile.id)
        .then(response => {
          setHospitalList(response.data['hydra:member'])
        })

      setReloadFav(false)
    }
  }
  return (
    <div className="list">
      <h2>List of {profile.name} {profile.surname}</h2>
      <hr/>

      <h3 className="col-primary">Hospital </h3>
      {
        HospitalList.map(({ name, address, telephone }, i) => {
          return <Card name={name} address={address} telephone={telephone} type={'primary'} key={`card__porfile_${profile.surname}__${i}__pharmacy`} />
        })
      }

      <h3 className="col-secondary">Health center</h3>
      {
        HealthCenterList.map(({ name, address, telephone }, i) => {
          return <Card name={name} address={address} telephone={telephone} type={'secondary'} key={`card__porfile_${profile.surname}__${i}__health`} />
        })
      }

      <h3 className="col-tree">Pharmacy</h3>
      {
        PharmacyList.map(({ name, address, telephone }, i) => {
          return <Card name={name} address={address} telephone={telephone} type={'tree'} key={`card__porfile_${profile.surname}__${i}__pharmacy`} />
        })
      }

    </div>
  )
}

export default List
