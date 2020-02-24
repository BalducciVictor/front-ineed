import React, { useEffect, useState } from 'react'
import ShowProfile from '../../components/ShowProfile/ShowProfile'
import axios from 'axios'
import Api from '../../Api/Api'
import { useHistory } from 'react-router-dom'
import BoxWrapper from '../../components/BoxWrapper'
import PopWrap from '../../components/PopWrap/PopWrap'

const Profils = () => {
  const [profils, setProfiles] = useState([])
  const [popRemoveProfile, setPopRemoveProfile] = useState({
    name: '',
    surname: '',
    id: '',
    state: ''
  })
  const history = useHistory()

  // Call to retrieve profils by ID
  const callGetProfile = () => {
    const data = { User: sessionStorage.getItem('id') }
    const configSend = { 'Content-Type': 'application/json' }
    axios.get('http://13.59.220.41/api/profils', data, configSend)
      .then(res => {
        let profilsFromData = res.data['hydra:member']
          profilsFromData = clearUserData(profilsFromData)
          console.log(profilsFromData)
          setProfiles(profilsFromData)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }
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

  useEffect(() => {
      callGetProfile()
  }, [profils.length] )

  const openPop = (id,surname, name) => {
    setPopRemoveProfile({state : true ,id,surname, name})
  }

  const removeProfile = () => {
      Api.del('/api/profils/' + popRemoveProfile.id)
        .then(response => {
          history.push('/profile')
          let pop = popRemoveProfile
          pop.state = false
          setPopRemoveProfile(pop)
          callGetProfile()
      })
  }


  const PopContent = () => {
    return(
      <div>
        <button onClick={removeProfile} >Yes</button>
        <div>
          dfsf
        </div>
      </div>
    )
  }

  const template = () => {
    return (
      <div className="list-profiles">
        <button className="" onClick={() => { history.push('profile/new') } } >Create a new profile</button>
        { profils.length ? profils.map((profil, i) => {
          return <ShowProfile key={profil.id} removeProfile={openPop} name={profil.name} surname={profil.surname} id={profil.id} />
        }) : ''}
        <PopWrap data={popRemoveProfile} setData={setPopRemoveProfile} Content={PopContent}/>
      </div>
    )
  }

  return (
    sessionStorage.getItem('id') ? <BoxWrapper pageName="Choose a profile" Content={template} /> : ''
  )
}

export default Profils
