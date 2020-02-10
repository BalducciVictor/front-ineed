import React from 'react';

import './ShowProfile.scss';

import paul from '../../assets/paul.jpg';


const ShowProfile = () => (
  <div className="profile">
    <div className="remove-profile">
      <a>Remove</a>
    </div>
    <div className="flex--center">
      <div>
      <img className="user" src={paul} alt="Picture user"/>
      <h2 className="profile-name">Paul CHARLES</h2>
      </div>
    </div>
    <button className="profile-button" href="#">See the profile</button>
  </div>
);


export default ShowProfile;