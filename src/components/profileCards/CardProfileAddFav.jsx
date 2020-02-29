
import React, { useState, useEffect } from 'react'
import iconePepoel from '../../assets/iconePepoel.svg'

const Card = ({ surname, name, active, toogleCard, id }) => {
  return (
    <div onClick={() => { toogleCard(id) }}>
      <div className={`card__profile__add__fav ${active && 'active'}`}>
        <div className="picture_and_name">
          <img className="user-picture" src={iconePepoel} alt="Picture user"/>
          <p className="profile-name">{name}, {surname}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
