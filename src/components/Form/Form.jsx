import React, { useState, useEffect } from 'react'
import arrow from '../../assets/img/arrow-back.png'
import Api from '../../Api/Api'
import ChronicDiseasesSelect from './select/ChronicDiseasesSelect'
import ShowProfile from '../ShowProfile/ShowProfile'
import Select from 'react-select'

function Form () {

  const postDataNewProfil = (e) => {
    e.preventDefault();

    //Data dans le formulaire
    let recupData = e.target.elements;

    // tableau de data pour l'ajout de profil
    const data = {
      name: recupData.name.value,
      surname: recupData.surname.value,
      gender: recupData.gender.value,
      birthDate: recupData.birthDate.value,
      bloodType: recupData.bloodType.value,
      picture: 'yolo',
      information: recupData.information.value,
      User: '/api/users/' + window.sessionStorage.id,
      maladieChroniques: []
    };

    // si des maladies chroniques ont été selectionné
    if(recupData.chronicDiseases.value !== ''){

      //Si il y a plusieurs maladie chronique
      if(typeof recupData.chronicDiseases[0] != 'undefined'){

        // Boucle sur les maladies chroniques pour les ajouter dans le tableau 'data'
        recupData.chronicDiseases.forEach(d => {
          data.maladieChroniques.push('/api/maladie_chroniques/' + d.value);
        })
      //  Sil il y a qu'une seule maladie chronique
      }else{
        data.maladieChroniques.push('/api/maladie_chroniques/' + recupData.chronicDiseases.value);
      }
    }
  //  Envoi du profil dans l'api dans l'api
    Api.post('/api/profils', data)
        .then((response) => {
          let idProfil = response.data.id;

          // Si idProfil et le champs médicaments ne sont pas vide on ajoute les médicaments
          if(idProfil !== '' && recupData.drug.value !== ''){
            const dataDrugs = {
              name: recupData.drug.value,
              Profil: '/api/profils/' + idProfil
            };

            // Envoi du médicament dans l'api + liaison avec le profil
            Api.post('/api/medicaments', dataDrugs)
                .then((response) => {
                  window.location.pathname = '/profile'
                })
                .catch((error) => {
                  console.log(error)
                })
          }
        })
        .catch((error) => {
          console.log(error)
        });
    };



  return (
    <div className="boxWrapper">
      <h1 className="title-form">My new profile</h1>
      <div>
        <div className="wrap-form">
          <div className='back-to-home'>
            <img className="arrow-back" src={arrow} alt="Arrow back home"/>
            <h2 className="back">Back to home</h2>
          </div>
          <form className="form-profile" onSubmit={(e) => {postDataNewProfil(e)}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <label>Gender</label>
            <div>
              <label>Male</label>
              <input checked type="radio" name="gender" value="m"/>
              <label>Female</label>
              <input type="radio" name="gender" value="f"/>
            </div>
            <div className='block-input'>
              <label>Name</label>
              <input type="text" name="name" required/>
            </div>
            <div className='block-input'>
              <label>First Name</label>
              <input type="text" name="surname" required/>
            </div>
            <div className='block-input'>
              <label>Age</label>
              <input type="date" name="birthDate" placeholder="46" required/>
            </div>
            <div className='block-input'>
              <label>Blood type</label>
              <select name="bloodType">
                <option value=""></option>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
            </div>
            <div className='block-input'>
              <label>Chronic disease</label>
              <ChronicDiseasesSelect/>
            </div>
            <div className='block-input'>
              <label>Drug</label>
              <input type="text" name="drug" />
            </div>
            <div className='block-input'>
              <label>More information</label>
              <textarea name="information"></textarea>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
