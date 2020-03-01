import React, { useEffect, useState } from 'react'
import Card from '../card/cardsItems'
import { contextUser } from '../../Store/reactContext'

//List of elements selected

const List = ({ PharmacyList, HospitalList, HealthCenterList, key, toogle, remove, cardOnClick }) => {
  const [cardSelected, setCardSelected] = useState([])
  const [init, setInit] = useState(false)
  const setCardSelectedByProfile = (profiles) => {
    if (!init && profiles) {
      setCardSelected(...[...profiles.map(({ pharmacies, hospitals, centreDeSantes }) => [...pharmacies || [0], ...hospitals || [0], ...centreDeSantes || [0]])])
      setInit(true)
    }
  }

  return (
    <contextUser.Consumer >
      { ({ profiles }) => {
        setCardSelectedByProfile(profiles)
        return (
          <div className="list">
            <hr/>
            { PharmacyList ? <h3 className="col-secondary">Pharmacy</h3> : ''}
            {
              PharmacyList && PharmacyList.map((Pharmacy, i) => {
                return <Card remove isAdd={cardSelected && cardSelected.length && cardSelected.indexOf(Pharmacy['@id']) !== -1 } click={cardOnClick} toogle={toogle} remove={remove} {...Pharmacy} type={'secondary'} key={`card__porfile_${key + Pharmacy['@id']}__${i}__pharmacy`} />
              })
            }
            { HospitalList ? <h3 className="col-primary">Hospital </h3> : ''}
            {
              HospitalList && HospitalList.map((hospital, i) => {
                return <Card remove isAdd={cardSelected && cardSelected.length && cardSelected.indexOf(hospital['@id']) !== -1 } click={cardOnClick} toogle={toogle} remove={remove} {...hospital} type={'primary'} key={`card__porfile_${key + hospital['@id']}__${i}__pharmacy`} />
              })
            }
            { HealthCenterList ? <h3 className="col-tree">Health center</h3> : '' }
            {
              HealthCenterList && HealthCenterList.map((HealthCenterList, i) => {
                return <Card remove isAdd={cardSelected && cardSelected.length && cardSelected.indexOf(HealthCenterList['@id']) !== -1 } click={cardOnClick} toogle={toogle} remove={remove} {...HealthCenterList} type={'tree'} key={`card__porfile_${key + HealthCenterList['@id']}__${i}__health`} />
              })
            }
          </div>
        )
      }
      }
    </contextUser.Consumer>
  )
}

export default List
