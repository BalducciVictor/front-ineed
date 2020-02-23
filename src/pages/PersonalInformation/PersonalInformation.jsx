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

  const { id } = useParams()

  useEffect(() => {
    if (!profilInformation) {
      getInformationProfile()
    }
  })

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

  const template = () => {
    return (
      <div>
        <div className="personal-information">
          <h1 className="title-information">My profile</h1>
          <div className="wrap-information">
            <SwitchButton setNewSwitch={val => { toogle(val) }} switchState={switchState} />
          </div>
        </div>
        <MedicalProfile switchState={switchState} Profil={profilInformation} />
        <div className={`wrap-list ${switchState === 0 ? 'active' : ''}`}>
          {/* <FilterList />
          <List /> */}
        </div>
      </div>
    )
  }

  return (
    <BoxWrapper Content={template} PageName="My profile" />
  )
}

export default PersonalInformation
