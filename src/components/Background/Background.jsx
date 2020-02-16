import React from 'react'
import ShowProfile from '../ShowProfile/ShowProfile'
import AddProfile from '../AddProfile/AddProfile'
import axios from 'axios'

class Profils extends React.Component {
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
      const { id, name, surname } = profil
      return {
        id,
        name,
        surname
      }
    })
  }

  // <ShowProfile/>
  render () {
    const { profils } = this.state
    return (
      <div className="boxWrapper">
        <h1 className="title">Welcome</h1>
        <div className="list-profiles">
          { profils.length ? profils.map((profil, i) => {
            return <ShowProfile key={profil.id} name={profil.name} surname={profil.surname} id={profil.id} />
          }) : ''}
          <AddProfile/>
        </div>
      </div>
    )
  }
}

export default Profils
