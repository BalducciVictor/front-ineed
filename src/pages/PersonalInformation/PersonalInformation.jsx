import React, { useState, useEffect } from 'react'
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton'
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile'
import FilterList from '../../components/FilterList/FilterList'
import List from '../../components/List/List'
import ShowProfileButton from '../../components/Buttons/ShowProfileButton/ShowProfileButton'
import arrow from '../../assets/img/arrow-back.png'
import BoxWrapper from '../../components/BoxWrapper'

import { useParams } from 'react-router-dom'
import Api from '../../Api/Api'

const PersonalInformation = () => {
  const [switchState, setNewSwitch] = useState(0)
  const [profilInformation, setProfilInformation] = useState(false)

  // data API
  const [HealthCenterList, setHealthCenterList] = useState([])
  const [PharmacyList, setPharmacyList] = useState([])
  const [HospitalList, setHospitalList] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getInformationProfile()
  }, [])

  const getInformationProfile = () => {
    Api.get('/api/profils/' + id)
      .then((response) => {
        console.log(response.data)
        setProfilInformation(response.data)
      })
  }

  const toogle = (value) => {
    setNewSwitch(value)
  }

  // Get fav list for the profile
  useEffect(() => {
    Api.get('/api/centre_de_santes?Profil=' + id)
      .then(response => {
        setHealthCenterList(response.data['hydra:member'])
      })

    Api.get('/api/pharmacies?Profil=' + id)
      .then(response => {
        setPharmacyList(response.data['hydra:member'])
      })

    Api.get('/api/hopitals?Profil=' + id)
      .then(response => {
        setHospitalList(response.data['hydra:member'])
      })
  }, [])

  const template = () => {
    return (
      <div className="personal-information">
        <div className="wrap-information">
          <SwitchButton left={'My list'} rigth={'My information'} setNewSwitch={val => { toogle(val) }} switchState={switchState} />
        </div>
        <MedicalProfile switchState={switchState} Profil={profilInformation} />
        <div className={switchState === 1 ? 'hidden' : '' }>
          <h2>List of {profilInformation.name} {profilInformation.surname}</h2>
          <List profile={profilInformation} HealthCenterList={HealthCenterList} PharmacyList={PharmacyList} key="profils" HospitalList={HospitalList} />
        </div>
      </div>
    )
  }

  return (
    <BoxWrapper Content={template} pageName="My profile" />
  )
}

export default PersonalInformation
