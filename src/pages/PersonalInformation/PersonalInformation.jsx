import React from 'react';
import './PersonalInformation.scss';
// import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton';
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile';
import arrow from '../../assets/img/arrow-back.png';

class PersonalInformation extends React.Component {

  render() {
      return (
        <div className="personal-information">
          <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
          <button className="specialty-button">search a specialty</button>
          <div className="boxWrapper-i">
            <h1 className="title-information">My profile</h1>
            <div className="wrap-information">
              <div className='back-to-home'>
                <img className="arrow-back" src={arrow} alt="Arrow back home"/>
                <h2 className="back">Back to home</h2>
              </div>
              {/* <SwitchButton /> */}
            </div>
            <MedicalProfile/>
          </div>
        </div>
      );
    }
  }

export default PersonalInformation;