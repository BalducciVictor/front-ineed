import React from 'react'
import map from '../../assets/img/map.png'

const Map = () => (
  <div className="map-search">
    <div className="flex--center">
      <img className="map" src={map} alt="Dots map blue"/>
    </div>
    <button className="profile-button" href="#">Search for a specialist</button>
  </div>
)

export default Map
