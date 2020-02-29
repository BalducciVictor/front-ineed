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
    axios.get('http://13.59.220.41/api/profils?User=' + sessionStorage.getItem('id'))
      .then(res => {
        let profilsFromData = res.data['hydra:member']
        profilsFromData = clearUserData(profilsFromData)
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
  }, [profils.length])

  const openPop = (id, surname, name) => {
    setPopRemoveProfile({ state: true, id, surname, name })
  }

  const removeProfile = () => {
    Api.del('/api/profils/' + popRemoveProfile.id)
      .then(response => {
        history.push('/profile')
        const pop = popRemoveProfile
        pop.state = false
        setPopRemoveProfile(pop)
        callGetProfile()
      })
  }

  const PopContent = () => {
    return (
      <div className='pop-content'>
        <h2>Are you sure you want to delete this profile ? Data cannot be restored.</h2>
        <button onClick={removeProfile} >Delete profile</button>
        <p>Cancel</p>
      </div>
    )
  }

  const PopRegister = () => {
    return (
      <div className='pop-register'>
        <h2>Please to be able to add a place to your list, you have to open an account to the service first by clicking on the button.</h2>
        <button onClick={removeProfile} >Open an account</button>
        <p>You already have an account ? <span>Log in</span></p>
      </div>
    )
  }

  const Template = () => {
    return (
      <div className="list-profiles">
        <div className="relative list-profiles">
          <button className="new-profile-button" onClick={() => { history.push('profile/new') } } >Create a new profile</button>
          { profils.length ? profils.map((profil, i) => {
            return <ShowProfile key={profil.id} removeProfile={openPop} name={profil.name} surname={profil.surname} id={profil.id} />
          }) : ''}
        </div>
        <PopWrap data={popRemoveProfile} setData={setPopRemoveProfile} >
          <PopContent />
        </PopWrap>
      </div>
    )
  }

  return (
    <BoxWrapper >
      <div className="page__name">
        <h2>Choose a profil</h2>
        <hr/>
      </div>
      <Template />
    </BoxWrapper>
  )
}

export default Profils
