import React from 'react';

import './MapSearch.scss';

import map from '../../assets/map-background.png';


const MapSearch = () => (
  <div className="map-search">
    <a className="map-link" href="/"></a>
    <img className="map" src={map} alt="Dots map blue"/>
    <button className="profile-button">Search for a specialist</button>
  </div>
);
export default MapSearch;