import React from 'react';
import './Profile.scss';

import Background from '../../components/Background/Background';
import Authentification from '../../components/Authentification/Authentification';

const Profile = () => (
  <div className='container-profile'>
    <Authentification/>
    <Background/>
  </div>
)

export default Profile;
