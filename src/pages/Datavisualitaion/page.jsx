import React, { Component } from 'react';
import './styles/style.scss';


const baseUrl = 'http://13.59.220.41';
const centreOfSante = 'http://13.59.220.41/api/centre_de_santes?Arrondissement=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20';

class App extends Component {



  formatData() {
    const { specialites, centres } = this.state;
    let array = [];
    if (specialites && centres) {
      specialites.forEach((specialite) => {
        specialite.CentreDeSante.forEach((centre) => {
          const string = `"@id":"${centre}"`.replace(/(\/)/gi, '\u005c' + '/');
          const re = new RegExp(`({(${string})[^}]+})`, 'gm');
          const newCentre = JSON.parse(centres.match(re));
          newCentre.specialite = [specialite.name];
          array.push(newCentre);
          // console.log(re);
        });
      });
    }
    console.log(array);

    array.forEach((element) => {
      if (element.name === 'Centre de santé René Laborie') {
        console.log(element);
      }
    });

    array = array.filter((centre) => {
      array.forEach((centre2) => {
        if (centre2.name === centre.name) {
          centre.specialite.push(centre2.specialite[0]);
        }
      });
    });
  }

  render() {
    
    return (
      <div className="App2">
        
      </div>
    );
  }
}

export default App;
