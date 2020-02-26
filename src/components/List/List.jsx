import React, { useEffect, useState } from 'react'
import Api from '../../Api/Api'
import logoHospistal from '../../assets/logo-hospital.png'
import Card from '../card/cardsItems'

function List ({ PharmacyList, HospitalList, HealthCenterList, key }) {
  return (
    <div className="list">
      <hr/>
      { PharmacyList ? <h3 className="col-secondary">Pharmacy</h3> : ''}
      {
        PharmacyList && PharmacyList.map((Pharmacy, i) => {
          return <Card {...Pharmacy} type={'secondary'} key={`card__porfile_${key}__${i}__pharmacy`} />
        })
      }
      { HospitalList ? <h3 className="col-primary">Hospital </h3> : ''}
      {
        HospitalList && HospitalList.map((hospital, i) => {
          return <Card {...hospital} type={'primary'} key={`card__porfile_${key}__${i}__pharmacy`} />
        })
      }
      { HealthCenterList ? <h3 className="col-tree">Health center</h3> : '' }
      {
        HealthCenterList && HealthCenterList.map((HealthCenterList, i) => {
          return <Card {...HealthCenterList} type={'tree'} key={`card__porfile_${key}__${i}__health`} />
        })
      }

    </div>
  )
}

export default List
