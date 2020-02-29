import React, { useState, useEffect } from 'react'
import FiltreButton from '../Buttons/FiltreButton'
import InputSelect from '../InputSelect'
import ContextFiltre from '../../Store/ContextFiltre'
import Api from '../../Api/Api'

const opitionArrondissement = [
  { value: 1, label: '1th' },
  { value: 2, label: '2th' },
  { value: 3, label: '3th' },
  { value: 4, label: '4th' },
  { value: 5, label: '5th' },
  { value: 6, label: '6th' },
  { value: 7, label: '7th' },
  { value: 8, label: '8th' },
  { value: 9, label: '9th' },
  { value: 10, label: '10th' },
  { value: 11, label: '11th' },
  { value: 12, label: '12th' },
  { value: 13, label: '13th' },
  { value: 14, label: '14th' },
  { value: 15, label: '15th' },
  { value: 16, label: '16th' },
  { value: 17, label: '17th' },
  { value: 18, label: '18th' },
  { value: 19, label: '19th' },
  { value: 20, label: '20th' }
]

const Filtre = ({ setFiltreAll, filtreAll, filtreHospitals, setFiltreHospitals, filtrePharmacies, setFlitresPharmacies, setFiltreCentres, filtreCentres, mode, filtreArrondisment, setfiltreArrondisment }) => {
  const [specialite, setSpecialite] = useState([])
  const toogleAllButton = (valueDefault, set) => {
    const newValue = JSON.parse(JSON.stringify(valueDefault))
    if (newValue.includes('all')) {
      const i = newValue.indexOf('all')
      newValue.splice(i, 1)
    } else {
      newValue.push('all')
    }
    set(newValue)
  }

  useEffect(() => {
    Api.get('/api/specialites')
      .then(({ data }) => {
        const listSpecialiste = []
        data['hydra:member'].map(({ name, id }) => {
          listSpecialiste.push({
            value: id,
            label: name
          })
        })
        listSpecialiste.push({ label: 'All', value: 'all' })
        setSpecialite(listSpecialiste)
      })
  }, [])

  return (
    <div className="box__filtre">
      <p className="instruction">What can we help you find ?</p>
      <div className="fitres">
        <FiltreButton
          toogle={() => { setFiltreAll(!filtreAll); setFiltreHospitals([]); setFlitresPharmacies([]); setFiltreCentres([]) } }
          template="All" active={ filtreAll }
        />
        <FiltreButton
          toogle={() => {
            toogleAllButton(filtreHospitals, setFiltreHospitals); setFiltreAll(false)
          }}
          template="Hospitals" active={ filtreHospitals.includes('all') }
        />
        <FiltreButton
          toogle={() => { toogleAllButton(filtrePharmacies, setFlitresPharmacies); setFiltreAll(false) }}
          template="Pharmacies 24/24" active={ filtrePharmacies.includes('all') }
        />
        <InputSelect
          placeHolder="Health centres"
          defaultValue={filtreCentres}
          options={specialite}
          setValue={val => { setFiltreCentres(val); setFiltreAll(false) }}
        />
        { mode === 'mapGl' && <InputSelect
          placeHolder="Arrondissement"
          defaultValue={filtreArrondisment}
          options={ opitionArrondissement}
          setValue={val => { setfiltreArrondisment(val); setFiltreAll(false) }}
        />}
      </div>
    </div>
  )
}

export default Filtre
