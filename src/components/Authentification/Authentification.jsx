import React from 'react'

class Authentification extends React.Component {
    constructor(){
      super();
      this.state = {
      }
    }
    authentification(){
        if (sessionStorage.getItem('id')) {
            console.log('Vous est connecté')
        } else {
            window.location.pathname = '/';
        }
    }
    render() {
      return (
          <div>
            {this.authentification()}
          </div>
        )
      }
    }
    export default Authentification