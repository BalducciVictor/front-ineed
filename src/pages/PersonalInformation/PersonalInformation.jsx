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
    <div className="personal-information">

      <div className="boxWrapper-i">
        <h1 className="title-information">My profile</h1>
        <div className="wrap-information">
          <div className='back-to-home'>
            <img className="arrow-back" src={arrow} alt="Arrow back home"/>
            <h2 className="back">Back to home</h2>
          </div>
          <SwitchButton setNewSwitch={val => { toogle(val) }} switchState={switchState} />
        </div>
        <MedicalProfile switchState={switchState} />
        <div className={`wrap-list ${switchState === 0 ? 'active' : ''}`}>
          <FilterList />
          <List />
        </div>
      </div>
    </div>
  )
}

export default PersonalInformation
