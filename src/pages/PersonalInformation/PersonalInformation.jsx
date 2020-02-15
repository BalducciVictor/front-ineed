import React, { useState } from 'react'
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton'
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile'
import FilterList from '../../components/FilterList/FilterList'
import List from '../../components/List/List'
import arrow from '../../assets/img/arrow-back.png'

const PersonalInformation = () => {
  const [switchState, setNewSwitch] = useState(0)

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
        <MedicalProfile switchState={switchState} />
        <div className={`wrap-list ${switchState === 0 ? 'active' : ''}`}>

        </div>
      </div>
    </div>
  )
}

export default PersonalInformation
