import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Map from './mapSvg'
import Arrondissements from './Arrondissements'

const DataVis = function ({ specialites }) {
  const sortByArrondissment = () => {
    const arrondisment = {}
    for (const typeOf in specialites) {
      if (specialites[typeOf].data && specialites[typeOf].data.length) {
        console.log(specialites[typeOf].data)
        specialites[typeOf].data.forEach(specialite => {
          const numberArrondissement = specialite.Arrondissement.match(/(\d+)/)[0]
          if (arrondisment[numberArrondissement]) {
            arrondisment[numberArrondissement].push({ specialite: specialite['@type'] })
          } else {
            arrondisment[numberArrondissement] = [{ specialite: specialite['@type'] }]
          }
        })
      }
    }
    return arrondisment
  }

  const [arrondissements, setArrondissements] = useState(sortByArrondissment())
  const [ranger, setRanger] = useState()

  useEffect(() => {
    defindRager(arrondissements)
  }, [arrondissements])

  const defindRager = (arrondissment) => {
    if (!arrondissment) {
      return
    }
    setArrondissements(arrondissment)
    console.log(arrondissment, 'ici')

    const ranger = {
      min: 1000,
      max: 0,
      result: []
    }
    for (const key in arrondissment) {
      console.log(arrondissment[key].length)
      if (arrondissment[key].length < ranger.min) {
        ranger.min = arrondissment[key].length
      }
      if (arrondissment[key].length > ranger.max) {
        ranger.max = arrondissment[key].length
      }
    }

    let r = ranger.max - ranger.min
    r = r / 4

    for (let i = 1; i < 5; i++) {
      if (i === 1) {
        ranger.result.push({ start: ranger.min, end: r * i })
      } else {
        ranger.result.push({ start: ranger.result[i - 2].end, end: r * i })
      }
    }
    setRanger(ranger)
  }

  // console.log(specialite)

  return (
    <div className="view">
      <Map
        // updateCurrentArrondissements={(arrondissements) => updateCurrentArrondissements(arrondissements)}
        ranger={ranger}
        arrondissements={arrondissements}
      />
    </div>
  )
}

export default DataVis
{ /* { currentArrondissements.name ? <Arrondissements arrondissements={currentArrondissements} /> : ''} */ }
