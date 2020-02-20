import React, { useState, useEffect } from 'react'
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton'
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile'
import FilterList from '../../components/FilterList/FilterList'
import List from '../../components/List/List'
import DisconnectButton from '../../components/Buttons/DisconnectButton/DisconnectButton'
import ShowProfileButton from '../../components/Buttons/ShowProfileButton/ShowProfileButton'
import arrow from '../../assets/img/arrow-back.png'

import { useParams } from 'react-router-dom'
import Api from '../../Api/Api'

const PersonalInformation = () => {
  const [switchState, setNewSwitch] = useState(0)
  const [data, setData] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getInformationProfile()
  })

  const getInformationProfile = () => {
    if (data.length === 0) {
      Api.get('/api/profils/' + id)
        .then((response) => {
          console.log(response.data)
          setData(response.data)
        })
    }
  }

  const toogle = (value) => {
    setNewSwitch(value)
  }

  return (
    <div className="boxWrapper">
      <div className="personal-information">
        <h1 className="title-information">My profile</h1>
        <div className="wrap-information">
          <SwitchButton setNewSwitch={val => { toogle(val) }} switchState={switchState} />
        </div>
      </div>
      <MedicalProfile switchState={switchState} Profil={data} />
      <div className={`wrap-list ${switchState === 0 ? 'active' : ''}`}>
        {/* <FilterList />
        <List /> */}
      </div>
    </div>
  )
}

export default PersonalInformation
