import React, { useState, useEffect, useCallback } from 'react'
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton'
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile'
import FilterList from '../../components/FilterList/FilterList'
import List from '../../components/List/List'
import ShowProfileButton from '../../components/Buttons/ShowProfileButton/ShowProfileButton'
import arrow from '../../assets/img/arrow-back.png'
import BoxWrapper from '../../components/BoxWrapper'
import { useHistory, useParams } from 'react-router-dom'

import Api from '../../Api/Api'

const PersonalInformation = () => {
  const [switchState, setNewSwitch] = useState(0)
  const [profilInformation, setProfilInformation] = useState(false)
  const [, updateState] = useState()
  const history = useHistory()

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
        setProfilInformation(response.data)
      })
  }

  const toogle = (value) => {
    setNewSwitch(value)
  }

  // Get fav list for the profile
  useEffect(() => {
    getFav()
  }, [])
  const getFav = () => {
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
  }

  const removeCard = ({ typeSpeciality, id }) => {
    const profile = JSON.parse(JSON.stringify(profilInformation))
    typeSpeciality = typeSpeciality.toLocaleLowerCase() + 's'
    typeSpeciality = typeSpeciality == 'centredesantes' ? 'centreDeSantes' : typeSpeciality
    profile[typeSpeciality] = profile[typeSpeciality].filter((idAtRemove) => idAtRemove !== id)
    const { name, surname, gender, birthDate, bloodType, picture, information, User, pharmacies, centreDeSantes, maladieChroniques, hopitals, medicaments } = profile
    console.log(profile, id)
    const idu = profile.id
    console.log(id)
    Api.put('/api/profils/' + idu, { name, surname, gender, birthDate, bloodType, picture, information, User, pharmacies, centreDeSantes, maladieChroniques, hopitals, medicaments })
      .then((res) => {
        setProfilInformation(res.data)
        setHealthCenterList([])
        setPharmacyList([])
        setHospitalList([])
        getFav()
      })
  }

  const Template = () => {
    return (
      <div className="personal-information">
        <div className="wrap-information">
          <SwitchButton left={'My list'} rigth={'My information'} setNewSwitch={val => { toogle(val) }} switchState={switchState} />
        </div>
        <MedicalProfile switchState={switchState} Profil={profilInformation} />
        <div className={switchState === 1 ? 'hidden' : '' }>
          <h2>List of {profilInformation.name} {profilInformation.surname}</h2>
          <List cardOnClick={(card) => { removeCard(card) }} remove profile={profilInformation} HealthCenterList={HealthCenterList} PharmacyList={PharmacyList} key="profils" HospitalList={HospitalList} />
        </div>
      </div>
    )
  }

  return (
    <BoxWrapper pageName="My profile">
      <div className='container-form page__name'>
        <h2 className="page__name">My profile</h2>
        <h3 className="page__name">Share information from your information, handler your list.</h3>
        <hr />
      </div>
      <Template />
    </BoxWrapper>
  )
}

export default PersonalInformation
