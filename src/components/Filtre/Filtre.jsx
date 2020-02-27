import React, { useState, useEffect } from 'react'
import FiltreButton from '../Buttons/FiltreButton'
import InputSelect from '../InputSelect'
import ContextFiltre from '../../Store/ContextFiltre'
import Api from '../../Api/Api'

const Filtre = ({ setFiltreAll, filtreAll, filtreHospitals, setFiltreHospitals, filtrePharmacies, setFlitresPharmacies, setFiltreCentres, filtreCentres }) => {
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
      </div>
    </div>
  )
}

export default Filtre
