import React from 'react'
import Api from '../../Api/Api'
import paul from '../../assets/paul.jpg'
import { useHistory } from 'react-router-dom'

const ShowProfile = ({ name, surname, id }) => {
  const history = useHistory()

  const removeProfile = () => {
    const isSure = window.confirm('Do you want remove this profil : ' + surname + ' ' + name)
    if (isSure) {
      Api.del('/api/profils/' + id)
        .then(response => {
          history.push('/profile')
        })
    }
  }

  return (

    <div className="profile">
      <div className="remove-profile">
        <a onClick={(e) => { removeProfile() }}>Remove</a>
      </div>
      <div className="picture_and_name">
        <img className="user-picture" src={paul} alt="Picture user"/>
        <p className="profile-name">{name} {surname}</p>
      </div>
      <button className="profile-button" onClick={(e) => { history.push('/profile/information/' + id) }}>See the profile</button>
    </div>
  )
}

export default ShowProfile
