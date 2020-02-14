import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import pictoPharmacie from '../../assets/picto/ping-pharmacie.svg'

require('dotenv').config()

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hlaWsiLCJhIjoiY2s2a3pzMDE2MDk0azNucGF3cHI1bjhsZiJ9.O5OgNMJeOXTZTVfv7kAuwA'

function Map ({ phrmacies }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 600,
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10.9,
    captureScroll: true,
    events: []
  })



  return (
    <ReactMapGL {...viewport} onViewportChange={viewport => { setViewport(viewport) }} mapboxApiAccessToken={MAPBOX_TOKEN}>
      {
        phrmacies ? phrmacies.map(({ latitude, longitude }, i) => <Marker key={`KEY$__${i}`} latitude={Number(latitude)} longitude={Number(longitude)} >
          <img src={pictoPharmacie}></img>
        </Marker>) : ''
      }
    </ReactMapGL>
  )
}

export default Map
