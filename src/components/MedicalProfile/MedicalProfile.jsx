import React from 'react';
import './MedicalProfile.scss';
import paul from '../../assets/paul.jpg';
import download from '../../assets/icon-download.png';
import edit from '../../assets/icon-edit.png';
import share from '../../assets/icon-share.png';
import { useState } from 'react';

const MedicalProfile = ( { switchState }) => {
  return (
    <div  className={`medical-profile ${ switchState === 1 ? "active" : ""}` }>
    <h2>Medical profile</h2>
    <hr/>
    <div className="wrap-medical-profile">
      <div className="user-information">
        <img className="user" src={paul} alt="Picture user"/>
        <h3>Paul Victor</h3>
        <p>march, 14 1954 (65 years)</p>
        <h4>blood type</h4>
        <p>0+</p>
        <h4>Chronic disease</h4>
        <ul>
          <li>Rheumatological diseases</li>
          <li>Heart and vascular diseases</li>
        </ul>
        <h4>Drug</h4>
        <ul>
          <li>ABACAVIR/LAMIVUDINE TEVA 600 mg/300 mg, comprimé pelliculé	 </li>
          <li>ABIES PECTINATA WELEDA, degré de dilution compris entre 2CH et 30CH ou entre 4DH et 60DH</li>
          <li>ACETYLLEUCINE MYLAN 500 mg, comprimé</li>
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