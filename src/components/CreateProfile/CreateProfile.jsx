import React from 'react';

import './CreateProfile.scss';

const CreateProfile = () => (
  <div className="create-profile">
    <a className="profile-link" href="/"></a>
    <svg className="logo_user"><use xlinkHref="/many_svg.svg#picto-user"/></svg>
    <button className="profile-button">Add new profile</button>
  </div>
);
export default CreateProfile;