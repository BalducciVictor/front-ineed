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
        updateCurrentArrondissements={ (val) => { setfiltreArrondisment(val || [0]) }}
      />
      <div>

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
