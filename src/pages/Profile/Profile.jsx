import React from 'react';
import './Profile.scss';

import Window from '../../components/Window/Window';
import map from '../../assets/img/map.png'


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container_profile">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        <img className="blue-map" src={map} alt="Dots map"/>
        <Window/>
      </div>
    );
  }
}
export default Profile;
