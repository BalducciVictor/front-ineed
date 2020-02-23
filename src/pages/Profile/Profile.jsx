import React, { useEffect, useState } from 'react'
import ShowProfile from '../../components/ShowProfile/ShowProfile'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import BoxWrapper from '../../components/BoxWrapper'

const Profils = () => {
  const [profils, setProfiles] = useState([])
  const history = useHistory()

  // Call to retrieve profils by ID
  const callGetProfile = () => {
    const data = { User: sessionStorage.getItem('id') }
    const configSend = { 'Content-Type': 'application/json' }
    axios.get('http://13.59.220.41/api/profils', data, configSend)
      .then(res => {
        let profilsFromData = res.data['hydra:member']
        profilsFromData = clearUserData(profilsFromData)
        setProfiles(profilsFromData)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  useEffect(() => {
    if (!profils.length) {
      callGetProfile()
    }
  })

  const clearUserData = (profils) => {
    return profils.map((profil) => {
      const { id, name, surname } = profil
      return {
        id,
        name,
        surname
      }
    })
  }

  const template = () => {
    return (
      <div className="list-profiles">
        <button className="" onClick={() => { history.push('profile/new') } } >Create a new profile</button>
        { profils.length ? profils.map((profil, i) => {
          return <ShowProfile key={profil.id} name={profil.name} surname={profil.surname} id={profil.id} />
        }) : ''}
      </div>
    )
  }

  return (
    sessionStorage.getItem('id') ? <BoxWrapper pageName="Choose a profile" Content={template} /> : ''
  )
}

export default Profils
