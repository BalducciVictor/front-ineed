import React from 'react'
import iconePepoel from '../../assets/iconePepoel.svg'
import { useHistory } from 'react-router-dom'

const ShowProfile = ({ name, surname, id, removeProfile }) => {
  const history = useHistory()

  return (

    <div className="profile">
      <div className="remove-profile">
        <a onClick={() => { removeProfile(id, surname, name) }} >Remove</a>
      </div>
      <div className="picture_and_name">
        <img className="user-picture" src={iconePepoel} alt="Picture user"/>
        <p className="profile-name">{name} {surname}</p>
      </div>
      <button className="profile-button" onClick={(e) => { history.push('/profile/information/' + id) }}>See the profile</button>
    </div>
  )
}

export default ShowProfile
