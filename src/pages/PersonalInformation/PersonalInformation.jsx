import React from 'react';
import './PersonalInformation.scss';
import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton';
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile';
import FilterList from '../../components/FilterList/FilterList';
import List from '../../components/List/List';
import DisconnectButton from '../../components/Buttons/DisconnectButton/DisconnectButton';
import ShowProfileButton from '../../components/Buttons/ShowProfileButton/ShowProfileButton';
import arrow from '../../assets/img/arrow-back.png';
import { useState } from 'react';

const PersonalInformation = () => {
  const [ switchState, setNewSwitch  ]= useState(0)

  const toogle = (value) => {
    setNewSwitch(value)
  }

  return(
    <div className="personal-information">
    <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
      <DisconnectButton/>
      <ShowProfileButton/>
    <div className="boxWrapper-i">
      <h1 className="title-information">My profile</h1>
      <div className="wrap-information">
        <div className='back-to-home'>
          <img className="arrow-back" src={arrow} alt="Arrow back home"/>
          <h2 className="back">Back to home</h2>
        </div>
        <SwitchButton setNewSwitch={val=>{toogle(val)}}  switchState={switchState} />
      </div>
      <MedicalProfile switchState={switchState}  />
      <div className={`wrap-list ${switchState === 0 ? 'active' : ''}`}>
        <FilterList />
        <List />
      </div>
    </div>
  </div>
  )
}

export default PersonalInformation;