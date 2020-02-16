import React from 'react'

import paul from '../../assets/paul.jpg'

const ShowProfile = (props) => (
  <div className="profile">
    <div className="remove-profile">
      <a>Remove</a>
    </div>
    <div className="flex--center">
      <div>
        <img className="user-picture" src={props.picture} alt="Picture user"/>
        <h2 className="profile-name">{props.name} {props.surname}</h2>
      </div>
    </div>
    <button className="profile-button" onClick={(e) => {window.location.href = '/profile/information/' + props.id}}>See the profile</button>
  </div>
)

export default ShowProfile
