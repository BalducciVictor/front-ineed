import React from 'react'
import axios from 'axios'
import Datvis from './dataVis.jsx'
import './styleDataVis.scss'
// import SwitchButton from '../../components/Buttons/SwitchButton/SwitchButton';
import MedicalProfile from '../../components/MedicalProfile/MedicalProfile'
import MapGl from '../../components/MapGl/mapGl'

class PersonalInformation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phrmacies: null,
      data: null,
      centres: null,
      specialites: null,
      dataClean: null
    }
  }

  async componentDidMount () {
    axios.get('http://13.59.220.41/api/arrondissements')
      .then((res) => {
        this.setState({
          data: res.data['hydra:member']
        })
      })
    axios.get('http://13.59.220.41/api/pharmacies?Arrondissement=14&Arrondissement[]=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C16%2C17%2C18%2C19%2C20')
      .then((res) => {
        this.setState({
          phrmacies: res.data['hydra:member']
        })
        console.log(res)
      })
  }

  render () {
    const { data, phrmacies } = this.state
    return (
      <div className="personal-information datavis">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        <button className="specialty-button">search a specialty</button>
        <div className="boxWrapper-i">
          <h1 className="title-information">My profile</h1>
          <div className="wrap-information">
            <MapGl phrmacies={phrmacies} ></MapGl>
          </div>
          { data ? <Datvis data={data} /> : <div /> }
        </div>
      </div>
    )
  }
}

export default PersonalInformation
