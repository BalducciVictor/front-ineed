import React, { useState, useEffect } from 'react'
import Api from '../../../Api/Api'
import Select from 'react-select'

function ChronicDiseasesSelect () {
  // data API
  const [chronicDisease, setChronicDisease] = useState([])

  // modification state chronic disease
  useEffect(() => {
    getDataSchronicDisease()
  })

  // get data Chronic Disease
  const getDataSchronicDisease = () => {
    if (!chronicDisease.length) {
      Api.get('/api/maladie_chroniques')
        .then(res => {
          const ChronicDiseases = res.data['hydra:member']
          setChronicDisease(res.data['hydra:member'])
        })
    }
  }

  let options = []

  options = chronicDisease.map(data => {
    return { value: data.id, label: data.name }
  })

  return (
    <Select
      isMulti
      name="chronicDiseases"
      options={options}
    />
  )
}

export default ChronicDiseasesSelect
