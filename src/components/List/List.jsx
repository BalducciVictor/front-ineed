import React, { useEffect, useState } from 'react'
import Api from '../../Api/Api'
import logoHospistal from '../../assets/logo-hospital.png'
import Card from '../card/cardsItems'

function List ({ profile }) {
  // data API
  const [HealthCenterList, setHealthCenterList] = useState([])
  const [PharmacyList, setPharmacyList] = useState([])
  const [HospitalList, setHospitalList] = useState([])
  const [ReloadFav, setReloadFav] = useState(true)

  // modification state chronic disease
  useEffect(() => {
    getFavList()
  })

  // Get fav list for the profile
  const getFavList = () => {
    if (ReloadFav === true) {
      Api.get('/api/centre_de_santes?Profil=' + profile.id)
        .then(response => {
          setHealthCenterList(response.data['hydra:member'])
        })

      Api.get('/api/pharmacies?Profil=' + profile.id)
        .then(response => {
          setPharmacyList(response.data['hydra:member'])
        })

      Api.get('/api/hopitals?Profil=' + profile.id)
        .then(response => {
          setHospitalList(response.data['hydra:member'])
        })

      setReloadFav(false)
    }
  }

  const healthCenterToShow = []
  // healthCenterToShow = HealthCenterList.map(item => {
  //   const timeStart = new Date(item.timeStart)
  //   const timeEnd = new Date(item.timeEnd)

  //   return (
  //     <div className="fav-item" key={item.id}>
  //       <div className="wrapper-item">
  //         <div className="wrapper-hospital">
  //           <img className="icon-list" src={logoHospistal} alt="logo hospital"/>
  //           <div className="favName">{item.name}</div>
  //         </div>
  //         <hr/>
  //         <div className="moreInfo">
  //           <div>{item.address}</div>
  //           <div>{item.telephone}</div>
  //           <div>{telephone(timeStart.getHours() - 1)}h{rewriteTime(timeStart.getMinutes())} - {rewriteTime(timeEnd.getHours() - 1)}h{rewriteTime(timeEnd.getMinutes())}</div>
  //         </div>
  //       </div>
  //       <div className="remove-list">

  //       </div>
  //     </div>
  //   )
  // })

  let PharmacyToShow = []
  PharmacyToShow = PharmacyList.map(item => {
    return (
      <div className="fav-item" key={item.id}>
        {/* <div className="wrapper-hospital">
          <svg className="icon-list"><use xlinkHref="/many_svg.svg#heathCenter"/></svg>
          <div className="favName">{item.name}</div>
        </div>
        <hr/>
        <div className="moreInfo">
          <div>{item.address}</div>
          <div>{item.telephone}</div>
          <div>{item.horraires[0]}</div>
        </div> */}
      </div>
    )
  })

  let HospitalToShow = []
  HospitalToShow = HospitalList.map(item => {
    return (
      <div className="fav-item" key={item.id}>
        <div className="wrapper-hospital">
          <svg className="icon-list"><use xlinkHref="/many_svg.svg#speciality"/></svg>
          <div className="favName">{item.name}</div>
        </div>
        <hr/>
        <div className="moreInfo">
          <div>{item.address}</div>
          <div>{item.telephone}</div>
        </div>
      </div>
    )
  })

  getFavList()

  // Render of component List
  return (
    <div className="list">
      <h2>List of {profile.name} {profile.surname}</h2>
      <hr/>

      <h3>Health center : </h3>
      {
        HealthCenterList.map(({ name, address, telephone }, i) => {
          return <Card name={name} address={address} telephone={telephone} key={`card__porfile_${profile.surname}__${i}__health`} />
        })
      }

      <h3>Pharmacy : </h3>
      {
        PharmacyToShow.map(({ name, address, telephone }, i) => {
          return <Card name={name} address={address} telephone={telephone} key={`card__porfile_${profile.surname}__${i}__pharmacy`} />
        })
      }

      <h3>Hospital : </h3>
      {HospitalToShow}
    </div>
  )
}

export default List
