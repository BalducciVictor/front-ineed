import React from 'react'
import ShowProfile from '../ShowProfile/ShowProfile'
import AddProfile from '../AddProfile/AddProfile'
import axios from 'axios'
import Map from '../Map/Map'

class Background extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profils: []
    }
    this.clearUserData = this.clearUserData.bind(this)
  }

  componentDidMount () {
    this.call_getProfile()
  }

  // Call to retrieve profils by ID
  call_getProfile () {
    const data = { User: sessionStorage.getItem('id') }
    const configSend = { 'Content-Type': 'application/json' }
    axios.get('http://13.59.220.41/api/profils', data, configSend)
      .then(res => {
        let profils = res.data['hydra:member']
        profils = this.clearUserData(profils)
        console.log(profils)
        this.setState({
          profils: profils
        })
      })
      .catch(err => {
        // console.log (err.response.data);
      })
  }

  clearUserData (profils) {
    return profils.map((profil) => {
      const { name, surname } = profil
      return {
        name,
        surname
      }
    })
  }

  // <ShowProfile/>
  render () {
    const { profils } = this.state
    return (
      <div className="boxWrapper background-profiles">
        <h1 className="title-profile">Welcome</h1>
        <div className="list-profiles">
          { profils.length ? profils.map((profil, i) => {
            return <ShowProfile key={'profil' + profil.name + i} name={profil.name} surname={profil.surname} />
          }) : ''}
          <AddProfile/>
          <Map/>
        </div>
      </div>
    )
  }
}

export default Background
