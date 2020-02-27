import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import pictoPharmacie from '../../assets/picto/ping-pharmacie.svg'
import ContexFiltre from '../../Store/ContexFiltre'

require('dotenv').config()

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hlaWsiLCJhIjoiY2s2a3pzMDE2MDk0azNucGF3cHI1bjhsZiJ9.O5OgNMJeOXTZTVfv7kAuwA'

function Map () {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 600,
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10.9,
    captureScroll: true,
    events: []
  })

  // MAPBOX_TOKEN

  const setMarker = (latitude, longitude, i) => {
    return (
      <Marker key={`KEY$__${i}`} latitude={Number(latitude)} longitude={Number(longitude)} >
        <img src={pictoPharmacie}></img>
      </Marker>)
  }
  return (
    <ContexFiltre.Consumer>
      {
        store =>
          <ReactMapGL {...viewport} onViewportChange={viewport => { setViewport(viewport) }} mapboxApiAccessToken={MAPBOX_TOKEN}>
            { store.pharmacies.map(({ latitude, longitude }, i) => setMarker(latitude, longitude, i)) }
          </ReactMapGL>
      }

    </ContexFiltre.Consumer>
  )
}

export default Map
