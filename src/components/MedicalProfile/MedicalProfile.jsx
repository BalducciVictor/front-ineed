import React, { useState, useEffect } from 'react'
import './MedicalProfile.scss'
import paul from '../../assets/paul.jpg'
import download from '../../assets/icon-download.png'
import edit from '../../assets/icon-edit.png'
import share from '../../assets/icon-share.png'
import Api from '../../Api/Api'
import EditMedicalProfile from '../EditMedicalProfile/EditMedicalProfile'

const MedicalProfile = ({ switchState, Profil }) => {
  const [MaladieChriniques, setMaladieChriniques] = useState([])
  const [Meds, setMeds] = useState([])
  const [showEdit, setshowEdit] = useState(false)

  let birthDate = new Date()

  if (typeof Profil.birthDate !== 'undefined') {
    birthDate = new Date(Profil.birthDate)
  }

  useEffect(() => {
    getMaladieChriniques()
    getMeds()
  })

  const getMaladieChriniques = () => {
    // Si MaladieChronique est vide
    if (MaladieChriniques.length === 0) {
      // Récupération des maladies lié au profil
      Api.get('/api/maladie_chroniques?Profil=' + Profil.id)
        .then(response => {
          const listMaladies = []

          response.data['hydra:member'].map(item => {
            listMaladies.push(<li key={item.id}>{item.name}</li>)
          })

          setMaladieChriniques(listMaladies)
        })
    }
  }

  const getMeds = () => {
    // Si Meds est vide
    if (Meds.length === 0) {
      // Récupération des Médicaments lié au profil
      Api.get('/api/medicaments?Profil=' + Profil.id)
        .then(response => {
          const listMeds = []
          response.data['hydra:member'].map(item => {
            listMeds.push(<li key={item.id}>{item.name}</li>)
          })

          setMeds(listMeds)
        })
    }
  }

  return (
    <div className={`medical-profile${switchState === 1 ? ' active' : ''}` }>
      <h2>Medical profile</h2>
      <div className="wrap-medical-profile">
        <div className="user-information">
          <div className="icons">
            <div className="icon-share">
              <img className="share" src={share} alt="share picto"/>
              <span>Share</span>
            </div>
            <div className="icon-download">
              <img className="download" src={download} alt="download picto"/>
              <span>Download</span>
            </div>
            <div className="icon-edit" onClick={ ()=> setshowEdit(!showEdit)}>
              <img className="edit" src={edit} alt="edit picto"/>
              <span>Edit</span>
            </div>
          </div>
          <div className="user-main-information">
            <img className="user" src={paul} alt="Picture user"/>
            <h3>{Profil.surname} {Profil.name}</h3>
            <p>{birthDate.getDate()}/{birthDate.getMonth() + 1}/{birthDate.getFullYear()}</p>
          </div>
          <h4>Gender</h4>
          <p>{Profil.gender}</p>
          <h4>Blood type</h4>
          <p>{Profil.bloodType}</p>
          <h4>Chronic disease</h4>
          <ul>
            {MaladieChriniques}
          </ul>
          <h4>Drug</h4>
          <ul>
            {Meds}
          </ul>
        </div>
      </div>
      {showEdit && <EditMedicalProfile/>}
    </div>
  )
}

export default MedicalProfile
