import React from 'react';
import './NewProfile.scss';

import Form from '../../components/Form/Form';
import map from '../../assets/img/map.png'

class NewProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container_profile">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        <img className="blue-map" src={map} alt="Dots map"/>
        <Form/>
      </div>
    );
  }
}

export default NewProfile;