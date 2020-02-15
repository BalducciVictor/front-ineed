import React from 'react';
import './ShowProfileButton.scss';

const ShowProfileButton = () => (
  <div className='wrap-profile-button'>
    <button className="show-profile-button" onClick={(e) => {window.location.href = '/profile'}} >Show a profile</button>
  </div>
)

export default ShowProfileButton;
