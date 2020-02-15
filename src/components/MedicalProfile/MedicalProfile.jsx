import React, {useState, useEffect} from 'react';
import './MedicalProfile.scss';
import paul from '../../assets/paul.jpg';
import download from '../../assets/icon-download.png';
import edit from '../../assets/icon-edit.png';
import share from '../../assets/icon-share.png';
import ApiRequest from "../../Api/Api";

const MedicalProfile = ( { switchState, Profil }) => {

  const [MaladieChriniques, setMaladieChriniques] = useState([]);
  const [Meds, setMeds] = useState([]);

  useEffect(() => {
    getMaladieChriniques();
    getMeds();
  });

  const Api = new ApiRequest();

  const getMaladieChriniques = () => {
    // Si MaladieChronique est vide
    if (MaladieChriniques.length === 0) {
        // Récupération des maladies lié au profil
        Api.get('/api/maladie_chroniques?Profil=' + Profil.id)
        .then(response => {
          let listMaladies = [];

          response.data['hydra:member'].map(item => {
            listMaladies.push(<li key={item.id}>{item.name}</li>)
          });

          setMaladieChriniques(listMaladies)
        })
    }
  };

  const getMeds = () => {
    // Si Meds est vide
    if (Meds.length === 0) {
      // Récupération des Médicaments lié au profil
      Api.get('/api/medicaments?Profil=' + Profil.id)
          .then(response => {
            let listMeds = [];
            response.data['hydra:member'].map(item => {
              listMeds.push(<li key={item.id}>{item.name}</li>)
            });

            setMeds(listMeds)
          })
    }
  };


  return (
    <div  className={`medical-profile ${ switchState === 1 ? "active" : ""}` }>
    <h2>Medical profile</h2>
    <hr/>
    <div className="wrap-medical-profile">
      <div className="user-information">
        <img className="user" src={paul} alt="Picture user"/>
        <h3>{Profil.surname} {Profil.name}</h3>
        <p>{Profil.birthDate}</p>
        <h4>blood type</h4>
        <p>{Profil.bloodType}</p>
        <h4>Chronic disease</h4>
        <ul>
          {
            // TODO Afficher la liste des maladies chroniques
            MaladieChriniques
          }
        </ul>
        <h4>Drug</h4>
        <ul>
          {
            // TODO Afficher la liste des médicaments
              Meds

          }
        </ul>
      </div>
      <div className="icons">
        <div className="icon-share">
          <img className="share" src={share} alt="share picto"/>
          <span>Share</span>
        </div>
        <div className="icon-download">
          <img className="download" src={download} alt="download picto"/>
          <span>Download</span>
        </div>
        <div className="icon-edit">
          <img className="edit" src={edit} alt="edit picto"/>
          <span>Edit</span>
        </div>
      </div>
    </div>
  </div>
  )

}

export default MedicalProfile;