import React, { useState, useEffect, useMemo } from 'react'
import UserCard from '../components/profileCards/CardProfileAddFav'
import { contextUser } from '../Store/reactContext'
import { useHistory } from 'react-router-dom'
import Api from '../Api/Api'

const UserPop = ({ idCardAdd, closePop }) => {
  const [cardsSelected, setCardsSelected] = useState([])
  const [currentProfiles, setCurrentProfiles] = useState([])
  let speciality = (idCardAdd.typeSpeciality + 's').toLocaleLowerCase()
  speciality = speciality == 'centredesantes' ? 'centreDeSantes' : speciality
  const history = useHistory()
  const toogleCard = (id) => {
    console.log(cardsSelected)
    let newCardsSelected = JSON.parse(JSON.stringify(cardsSelected))
    if (!newCardsSelected.includes(id)) {
      newCardsSelected.push(id)
    } else {
      newCardsSelected = newCardsSelected.filter((id2) => id2 !== id)
    }
    setCardsSelected(newCardsSelected)
  }

  const updateProfile = () => {
    const profilesToSend = currentProfiles.map((profile) => {
      if (cardsSelected.includes(profile.id)) {
        profile[speciality].push(idCardAdd.id)
        return profile
      } else if (profile[speciality].indexOf(idCardAdd.id) !== 1) {
        profile[speciality].splice(profile[speciality].indexOf(idCardAdd.id), 1)
        return profile
      }
    })
    if (profilesToSend.length) {
      Api.all(profilesToSend.map(({ id, name, surname, gender, birthDate, bloodType, picture, information, User, pharmacies, centreDeSantes, maladieChroniques, hopitals, medicaments }) => {
        return () => { Api.put('/api/profils/' + id, { name, surname, gender, birthDate, bloodType, picture, information, User, pharmacies, centreDeSantes, maladieChroniques, hopitals, medicaments }) }
      }))
        .then((res) => {
          closePop(false)
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  useEffect(() => {
    if (currentProfiles) {
      currentProfiles.map((props, key) => {
        props[speciality].forEach(profilSpeciality => {
          if (profilSpeciality.includes(idCardAdd.id)) {
            const cardsProfileSelected = JSON.parse(JSON.stringify(cardsSelected))
            cardsProfileSelected.push(currentProfiles[key].id)
            console.log(cardsProfileSelected)
            setCardsSelected(cardsProfileSelected)
          }
          console.log(profilSpeciality.includes(idCardAdd.id), profilSpeciality)
        })
      })
    }
  }, [currentProfiles])

  const ContentHasProfile = () => {
    const profiles = currentProfiles
    return (
      <div className="profile__card">
        <h2>add which profile ?</h2>
        <hr/>
        <div className="profiles_list">
          {profiles.map((props, key) => {
            const { surname, name, id } = props
            return (
              <UserCard id={id} active={ cardsSelected.includes(id)} toogleCard={toogleCard} surname={surname} name={name} key={'card_profile_' + key + name} />
            )
          })}
        </div>
        <div className="buttons">
          <button className="new-profile-button" onClick={() => { history.push('profile/new') } } >Create a new profile</button>
          <button onClick={updateProfile} >Done</button>
        </div>
      </div>
    )
  }
  const ContentHasNotProfile = (profiles) => {
    return (
      <div className="profile__card pop-log">
        <h3>Please to be able to add a place to your list, you have to open an account to the service first by clicking on the button.</h3>
        <button onClick={() => { history.push('/log/singnup') }} >Sign up</button>
        <p>You already have an account ? <span onClick={() => { history.push('/log/signin') }} className="col-secondary">Log in</span></p>
      </div>
    )
  }

  return (
    <contextUser.Consumer >
      {
        ({ profiles }) => {
          setCurrentProfiles(profiles)
          return (
            (profiles && <ContentHasProfile profiles={profiles} />) || <ContentHasNotProfile profiles={profiles} />
          )
        }
      }
    </contextUser.Consumer>
  )
}

export default UserPop
