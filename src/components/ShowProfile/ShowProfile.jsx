import React from 'react'
import Api from '../../Api/Api'

import paul from '../../assets/paul.jpg'

const removeProfile = (profile) => {
  const isSure = window.confirm('Do you want remove this profil : ' + profile.surname + ' ' + profile.name)

  if (isSure) {
    Api.del('/api/profils/' + profile.id)
      .then(response => {
        window.location.href = '/profile'
      })
  }
}

const ShowProfile = (props) => (

  <div className="profile">
    <div className="remove-profile">
      <a onClick={(e) => { removeProfile(props) }}>Remove</a>
    </div>
    <div className="picture_and_name">
      <img className="user-picture" src={paul} alt="Picture user"/>
      <p className="profile-name">{props.name} {props.surname}</p>
    </div>
    <button className="profile-button" onClick={(e) => { window.location.href = '/profile/information/' + props.id }}>See the profile</button>
  </div>
)

export default ShowProfile
