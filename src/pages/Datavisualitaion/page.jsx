import React, { Component } from 'react'
class App extends Component {
  formatData () {
    const { specialites, centres } = this.state
    let array = []
    if (specialites && centres) {
      specialites.forEach((specialite) => {
        specialite.CentreDeSante.forEach((centre) => {
          const string = `"@id":"${centre}"`.replace(/(\/)/gi, '\u005c' + '/')
          const re = new RegExp(`({(${string})[^}]+})`, 'gm')
          const newCentre = JSON.parse(centres.match(re))
          newCentre.specialite = [specialite.name]
          array.push(newCentre)
          // console.log(re);
        })
      })
    }
    console.log(array)

    array.forEach((element) => {
      if (element.name === 'Centre de santé René Laborie') {
        console.log(element)
      }
    })

    array = array.filter((centre) => {
      array.forEach((centre2) => {
        if (centre2.name === centre.name) {
          centre.specialite.push(centre2.specialite[0])
        }
      })
    })
  }

  render () {
    return (
      <div className="App2">

      </div>
    )
  }
}

export default App
