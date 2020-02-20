import React from 'react';

import './CreateProfile.scss';

import user from '../../assets/picto-user.png';


const CreateProfile = () => (
  <div className="create-profile">
    <a className="profile-link" href="/"></a>
    {/* <svg className="logo_user"><use xlinkHref="/many_svg.svg#picto-user"/></svg> */}
    <img className="user" src={user} alt="Picto user"/>
    <button className="profile-button" href="#">Add new profile</button>
  </div>
);
export default CreateProfile;