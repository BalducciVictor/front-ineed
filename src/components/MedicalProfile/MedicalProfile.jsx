import React from 'react';
import './MedicalProfile.scss';
import paul from '../../assets/paul.jpg';

class MedicalProfile extends React.Component {

  render() {
      return (
        <div className="medical-profile">
          <h2>Medical profile</h2>
          <hr/>
          <div className="icons">

          </div>
          <img className="user" src={paul} alt="Picture user"/>
          <div>
            <h3>Paul Victor</h3>
            <p>march, 14 1954 (65 years)</p>
          </div>
          <div>
            <h4>blood type</h4>
            <p>0+</p>
          </div>
          <div>
            <h4>Chronic disease</h4>
            <ul>
              <li>Diabetes</li>
              <li>Asthma</li>
            </ul>
          </div>
          <div>
            <h4>Drug</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      );
    }
  }

export default MedicalProfile;