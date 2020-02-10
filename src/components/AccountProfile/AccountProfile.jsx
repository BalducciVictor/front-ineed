import React from 'react';

import './AccountProfile.scss';

import paul from '../../assets/paul.jpg';


const AccountProfile = () => (
  <div className="profile">
    <div className="remove-profile">
      <a>Remove</a>
    </div>
    <img className="user" src={paul} alt="Picture user"/>
    <h2 className="profile-name">Paul CHARLES</h2>
    <button className="profile-button" href="#">See the profile</button>
  </div>
);
export default AccountProfile;