import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import pictoPharmacie from '../../assets/picto/ping-pharmacie.svg'
import pictoCentreDeSante from '../../assets/picto/ping-centreDeSante.svg'
import pictoHospital from '../../assets/picto/ping-hospitals.svg'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hlaWsiLCJhIjoiY2s2a3pzMDE2MDk0azNucGF3cHI1bjhsZiJ9.O5OgNMJeOXTZTVfv7kAuwA'

const MapBox = ({ specialite }) => {
  const [viewport, setViewport] = useState({
    width: 609,
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10.9,
    captureScroll: true,
    events: []
  })

  // MAPBOX_TOKEN

  const PictoMarker = ({ type }) => {
    if (type === 'hospital') {
      return (
        <img src={pictoHospital}></img>
      )
    }
    if (type === 'pharmacie') {
      return (
        <img src={pictoPharmacie}></img>
      )
    }
    if (type === 'centre') {
      return (
        <img src={pictoCentreDeSante}></img>
      )
    }
  }

  const SetMarkers = ({ hospitals, pharmacies, centres }) => {
    hospitals = hospitals || []
    pharmacies = pharmacies || []
    centres = centres || []

    hospitals = hospitals.map((hospital) => {
      hospital.type = 'hospital'
      return hospital
    })
    pharmacies = pharmacies.map((pharmacie) => {
      pharmacie.type = 'pharmacie'
      return pharmacie
    })

    centres = centres.map((centres) => {
      centres.type = 'centre'
      return centres
    })

    const all = hospitals.concat(pharmacies, centres)

    return (
      all.length
        ? all.map(({ latitude, longitude, type }, i) => {
          return (
            <Marker key={`KEY$__${i}`} latitude={Number(latitude)} longitude={Number(longitude)} >
              <PictoMarker type={type} />
            </Marker>
          )
        }) : ''
    )
  }
  return (
    <ReactMapGL {...viewport} style={{ width: '100%', minHeight: '30vw', flexGrow: 2, paddingTop: '80px' }} onViewportChange={viewport => { setViewport(viewport) }} mapboxApiAccessToken={MAPBOX_TOKEN}>
      {specialite ? <SetMarkers {...specialite}/> : ''}
    </ReactMapGL>
  )
}

export default MapBox
