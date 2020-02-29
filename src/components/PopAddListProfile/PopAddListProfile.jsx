import React, { useEffect, useState } from 'react'
import ShowProfile from '../ShowProfile/ShowProfile'
import axios from 'axios'

const PopAddListProfile = () => {

    const [profils, setProfils] = useState([])

    const clearUserData = (profils) => {
      return profils.map((profil) => {
        const { id, name, surname } = profil;
        return {
          id,
          name,
          surname
        }
      })
    };

    const callGetProfile = () => {
      axios.get('http://13.59.220.41/api/profils?User=' + sessionStorage.getItem('id'))
        .then(res => {
          let profilsFromData = res.data['hydra:member'];
          profilsFromData = clearUserData(profilsFromData);
          setProfils(profilsFromData);
        })
        .catch(err => {
          console.log(err.response.data);
        })
    };
    
    useEffect(() => {
      if (!profils.length) {
        callGetProfile();
      }
    });

    return (
      <div>
        { profils.length ? <ShowProfile key={profils.id} name={profils.name} surname={profils.surname} id={profils.id} /> : ''}
      </div>
    )
}

export default PopAddListProfile;