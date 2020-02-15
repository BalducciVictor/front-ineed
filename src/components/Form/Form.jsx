import React, { useState, useEffect } from 'react'
import './Form.scss'
import DisconnectButton from '../Buttons/DisconnectButton/DisconnectButton'
import ShowProfileButton from '../Buttons/ShowProfileButton/ShowProfileButton'
import arrow from '../../assets/img/arrow-back.png'
import Api from '../../Api/Api'
import ChronicDiseasesSelect from './select/ChronicDiseasesSelect'
import ShowProfile from '../ShowProfile/ShowProfile'

function Form () {

  const apiRequest = new Api()

  const postDataNewProfil = (e) => {
    e.preventDefault();

    let recupData = e.target.elements;

    console.log(recupData.chronicDiseases.value);

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

    if(recupData.chronicDiseases.value !== ''){
      if(typeof recupData.chronicDiseases[0] != 'undefined'){
        recupData.chronicDiseases.forEach(d => {
          data.maladieChroniques.push('/api/maladie_chroniques/' + d.value);
        })
      }else{
        data.maladieChroniques.push('/api/maladie_chroniques/' + recupData.chronicDiseases.value);
      }
    }


    console.log('data : ');
    console.log(data);
    let idProfil = '';
  //  Envoi du profil dans l'api dans l'api
    apiRequest.post('/api/profils', data)
        .then((response) => {
          idProfil = response.data.id;
          console.log(response.data)

          //  TODO création des médicaments
          if(idProfil !== ''){
            const dataDrugs = {
              name: recupData.drug.value,
              Profil: '/api/profils/' + idProfil
            };

            apiRequest.post('/api/medicaments', dataDrugs)
                .then((response) => {
                  console.log(response.data)
                  window.location.pathname = '/profile'
                })
                .catch((error) => {
                  console.log(error)
                })
          }else {
            console.log('pas idProfil')
          }
        })
        .catch((error) => {
          console.log(error)
        });
    }



  return (
    <div className="background">
      <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
      <DisconnectButton/>
      <ShowProfileButton/>
      <div className="boxWrapper">
        <h1 className="title-form">My new profile</h1>
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
            <div>
              <label>Name</label>
              <input type="text" name="name" value="Dreidemy" required/>
            </div>
            <div>
              <label>First Name</label>
              <input type="text" name="surname" value="Romain" required/>
            </div>
            <div>
              <label>Age</label>
              <input type="date" name="birthDate" value="1999-06-19" placeholder="46" required/>
            </div>
            <div>
              <label>Blood type</label>
              <select name="bloodType">
                <option value=""></option>
                <option selected value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
            </div>
            <div>
              <label>Chronic disease</label>
              <ChronicDiseasesSelect/>
            </div>
            <div>
              <label>Drug</label>
              <input type="text" name="drug" value="Acetylleucine mylan 500" />
            </div>
            <div>
              <label>More information</label>
              <textarea name="information">Quelques informations</textarea>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
