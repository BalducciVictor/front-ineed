import React, { useState, useEffect } from 'react'
import arrow from '../../assets/img/arrow-back.png'
import apiRequest from '../../Api/Api'
import ShowProfile from '../ShowProfile/ShowProfile'
import Select from 'react-select'

function Form () {
  // data form
  const [gender, setGender] = useState('')
  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [age, setAge] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [chronicDiseases, setChronicDiseases] = useState('')
  const [drugs, setDrugs] = useState('')
  const [moreInformation, setMoreInformation] = useState('')

  // data API
  const [chronicDisease, setChronicDisease] = useState([])

  // modification state chronic disease
  useEffect(() => {
    getDataSchronicDisease()
  })

  // get data Chronic Disease
  const getDataSchronicDisease = () => {
    if (!chronicDisease.length) {
      apiRequest.get('/api/maladie_chroniques')
        .then(res => {
          const ChronicDiseases = res.data['hydra:member']
          setChronicDisease(res.data['hydra:member'])
        })
    }
  }
  // add chronic disease option in select
  const listItems = chronicDisease.map((data) => {
    return { value: data.name, label: data.name }
  })

  const postDataNewProfil = (e) => {
    e.preventDefault()
    alert('caroule')
    const data = {
      name: name,
      surname: firstName,
      gender: gender,
      birthDate: age,
      bloodType: bloodType,
      picture: 'yolo',
      information: moreInformation,
      User: 'string',
      medicaments: [
        drugs
      ],
      maladieChroniques: [
        chronicDiseases
      ]
    }
    apiRequest.post(`/api/profils/${'coucou'}`, data)
      .then(res => {
        console.log(res, 'tout vas bien')
      })
      .catch(err => {
        console.log(err, 'cest la merde')
      })
  }

  return (
    <div className="boxWrapper">
      <h1 className="title-form">My new profile</h1>
      <div>
        <div className="wrap-form">
          <form className="form-profile">
            <label>Gender</label>
            <div className='block-input'>
              <input type="radio" checked={ gender === 'Male'} onChange={() => setGender('h')}/>
              <label>Male</label>
              <input type="radio" checked={ gender === 'female'} onChange={() => setGender('f')}/>
              <label>Female</label>
            </div>
            <div className='block-input'>
              <label>Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Dupont" required/>
            </div>
            <div className='block-input'>
              <label>First Name</label>
              <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="Martin" required/>
            </div>
            <div className='block-input'>
              <label>Age</label>
              <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="46" required/>
            </div>
            <div className='block-input'>
              <label>Blood type</label>
              <select onChange={(e) => setBloodType(e.target.value)}>
                <option value=""></option>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
            </div>
            <div className='block-input'>
              <label>Chronic disease</label>
              <Select
                isMulti
                className="basic-multi-select"
                classNamePrefix="select" options={listItems}
              />
            </div>
            <div className='block-input'>
              <label>Drug</label>
              <input type="text" placeholder="Acetylleucine mylan 500" onChange={(e) => setDrugs(e.target.value)}/>
            </div>
            <div className='block-input'>
              <label>More information</label>
              <textarea onChange={(e) => setMoreInformation(e.target.value)} />
            </div>
            <input type="submit" value="Save" onClick={(e) => postDataNewProfil(e)}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
