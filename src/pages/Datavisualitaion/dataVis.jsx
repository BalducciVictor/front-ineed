import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import MapCustom from './mapSvg'
import Arrondissements from './Arrondissements'

const DataVis = function ({ specialites, setMode, setfiltreArrondisment }) {
  const [arrondissements, setArrondissements] = useState({})
  const [ranger, setRanger] = useState()
  const [currentArrondissements, updateCurrentArrondissements] = useState()

  const sortByArrondissment = (object) => {
    const arrondisment = {}
    if (object.hospitals || object.pharmacies || object.centres) {
      let array = []
      if (object.hospitals) {
        array = array.concat(object.hospitals)
      }
      if (object.pharmacies) {
        array = array.concat(object.pharmacies)
      }
      if (object.pharmacies) {
        array = array.concat(object.centres)
      }

      array.forEach(specialite => {
        const numberArrondissement = specialite.Arrondissement.match(/(\d+)/)[0]
        console.log(numberArrondissement)
        if (!arrondisment[numberArrondissement]) {
          arrondisment[numberArrondissement] = [0]
        } else {
          arrondisment[numberArrondissement].push(0)
        }
      })
    } else {
      return
    }

    if (arrondisment) {
      setArrondissements(arrondisment)
    }
  }

  useEffect(() => {
    sortByArrondissment(specialites)
  }, [specialites.centres && specialites.centres.length, specialites.hospitals && specialites.hospitals.length, specialites.centres && specialites.centres.length])

  useEffect(() => {
    defindRager(specialites)
  }, [arrondissements])

  const sortArrayByArrondissements = (data) => data.sort((a, b) => parseFloat(a.total) - parseFloat(b.total)).reverse()

  const defindRager = () => {
    if (arrondissements) {
      const ranger = {
        min: 1000,
        max: 0,
        result: [],
        arrondissements: []
      }
      for (const key in arrondissements) {
        if (arrondissements[key].length < ranger.min) {
          ranger.min = arrondissements[key].length
        }
        if (arrondissements[key].length > ranger.max) {
          ranger.max = arrondissements[key].length
        }
      }

      let r = ranger.max - ranger.min
      r = r / 4

      for (let i = 1; i < 5; i++) {
        ranger.result.push(Math.round(r * i))
      }

      console.log(ranger)
      setRanger(ranger)
    }
  }

  return (
    <div>
      <MapCustom
        rangers={ranger}
        arrondissements={arrondissements}
        updateCurrentArrondissements={ (val) => { updateCurrentArrondissements(val) }}
      />
      <div>

        {currentArrondissements &&
        <div>
          {Object.values(arrondissements).map((arrondissement, i) => {
            if (i === currentArrondissements) {
              return (
                <div className="card" >
                  <div className="relative">
                    <div className="text">
                      <p className="paris">{`Paris, ${i}th`}</p>
                      <p className="all">{'All 12'}</p>
                      <p className="hospitals col-primary">{'2 Hospitals'}</p>
                      <p className="Cardiologist col-secondary">{'6 Cardiologist'}</p>
                      <p className="Pharmacies col-tree">{'4 Pharmacies'}</p>
                    </div>
                    <div onClick={() => { setMode('mapGl'); setfiltreArrondisment([i]) }} className="card--button"><div>Look at the map</div></div>
                  </div>
                </div>
              )
            }
            // currentArrondissements
          })}
        </div>
        }

      </div>
      <section className="ranger">
        <div className="one"><span>0</span><span>-</span><span>{ranger && ranger.result && ranger.result[0]}</span> </div>
        <div className="two"><span>{ranger && ranger.result && ranger.result[0]}</span><span>-</span><span>{ranger && ranger.result && ranger.result[1]}</span> </div>
        <div className="tree"><span>{ranger && ranger.result && ranger.result[1]}</span><span>-</span><span>{ranger && ranger.result && ranger.result[2]}</span> </div>
        <div className="four"><span>{ranger && ranger.result && ranger.result[2]}</span><span>-</span><span>{ranger && ranger.result && ranger.result[3]}</span> </div>
      </section>
    </div>
  )
}

export default DataVis
