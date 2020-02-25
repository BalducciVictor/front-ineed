import React, { useState, useEffect } from 'react'
import FiltreButton from '../Buttons/FiltreButton'
import InputSelect from '../InputSelect'
import ContextFiltre from '../../Store/ContextFiltre'
const specialite = [{ label: 'all', value: 'all' }, { label: 'Oto-rhino-laryngologie', value: 0 }, { label: 'Médecine générale', value: 1 }, { label: 'Kinésithérapie', value: 2 }, { label: 'Orthophonie', value: 3 }, { label: 'Dentaire', value: 4 }, { label: 'Imagerie', value: 5 }, { label: 'Rhumatologie', value: 6 }, { label: 'Gynécologie', value: 7 }, { label: 'Cardiologie', value: 8 }, { label: 'Ophtalmologie', value: 9 }, { label: 'Gastro-entérologie', value: 10 }, { label: 'Orthodontie', value: 11 }, { label: 'Dermatologie', value: 12 }, { label: 'Vaccinations internationales', value: 13 }, { label: 'Chirurgie dentaire', value: 14 }, { label: 'Homéopathie', value: 15 }, { label: 'Angiologie-phlébologie', value: 16 }, { label: 'Chirurgie esthétique', value: 17 }, { label: 'Endocrinologie', value: 18 }, { label: 'Soins infirmiers', value: 19 }, { label: 'Pédiatrie', value: 20 }, { label: 'Biologie', value: 21 }, { label: 'Psychologie', value: 22 }, { label: 'Médecine du sport', value: 23 }, { label: 'Orthoptie', value: 24 }, { label: 'Psychiatrie', value: 25 }, { label: 'Allergologie', value: 26 }, { label: 'Panoramique dentaire', value: 27 }, { label: 'Implantologie', value: 28 }, { label: 'Pneumologie', value: 29 }, { label: 'Podologie', value: 30 }, { label: 'Parodontologie', value: 31 }, { label: 'Pathologie Infectieuse et Tropicale', value: 32 }, { label: 'Pédicurie', value: 33 }, { label: 'Urologie', value: 34 }, { label: 'Pathologie infectieuse et tropicale', value: 35 }, { label: 'Neurologie', value: 36 }, { label: 'Pédicurie / Podologie', value: 37 }, { label: 'Stomatologie', value: 38 }, { label: 'Chirurgie viscérale', value: 39 }, { label: 'Andrologie', value: 40 }, { label: 'Pédopsychiatrie', value: 41 }, { label: 'Ostéodensitométrie', value: 42 }, { label: 'Chirurgie orthopédique', value: 43 }, { label: 'Médecine de voyage', value: 44 }, { label: 'Gériatrie', value: 45 }, { label: 'Tabacologie', value: 46 }, { label: 'Diététique', value: 47 }, { label: 'Echographie', value: 48 }, { label: 'Hématologie', value: 49 }, { label: 'Chirurgie Buccale', value: 50 }, { label: 'Pédodontie', value: 51 }, { label: 'Chirurgie Dentaire', value: 52 }, { label: 'Anesthésie', value: 53 }, { label: 'Phlébologie', value: 54 }, { label: 'Mammographie', value: 55 }, { label: 'Ionophorèse', value: 56 }, { label: 'Néphrologie', value: 57 }, { label: 'Chirurgie buccale', value: 58 }, { label: 'Chirurgie vasculaire', value: 59 }, { label: 'Médecine Interne', value: 60 }, { label: 'Chirurgie Esthétique', value: 61 }, { label: 'Acupuncture', value: 62 }, { label: 'Médecine agréée', value: 63 }, { label: 'Ostéopathie', value: 64 }, { label: 'Consultation Sage-femme', value: 65 }, { label: 'imagerie', value: 66 }, { label: 'Alcoologie', value: 67 }, { label: 'Médecine interne', value: 68 }, { label: 'Chirurgie plastique', value: 69 }]

const Filtre = ({ props }) => {
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

  return (
    <ContextFiltre.Consumer>
      { ({ setFiltreAll, filtreAll, filtreHospitals, setFiltreHospitals, filtrePharmacies, setFlitresPharmacies, setFiltreCentres, filtreCentres }) => {
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
                template="Hospitalss" active={ filtreHospitals.includes('all') }
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
      }
    </ContextFiltre.Consumer>
  )
}

export default Filtre
