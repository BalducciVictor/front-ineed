import React from 'react';
import './PersonalInformation.scss';

class PersonalInformation extends React.Component {

  render() {
      return (
        <div className="personal-information">
          <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
          <button className="specialty-button">search a specialty</button>
          <div className="boxWrapper-i">
            <h1 className="title-information">My profile</h1>
          </div>
        </div>
      );
    }
  }

export default PersonalInformation;