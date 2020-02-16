import React from 'react'

import paul from '../../assets/paul.jpg'

const ShowProfile = (props) => (
  <div className="profile">
    <div className="remove-profile">
      <a>Remove</a>
    </div>
    <div className="picture_and_name">
      <img className="user-picture" src={paul} alt="Picture user"/>
      <p className="profile-name">{props.name} {props.surname}</p>
    </div>
    <button className="profile-button" onClick={(e) => { window.location.href = '/profile/information/' + props.id }}>See the profile</button>
  </div>
)

export default ShowProfile
