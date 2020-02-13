import axios from 'axios'
import Context from '../Store/reactContext'
const PROTOCOLE = 'http'
const IP = '13.59.220.41'

class ApiRequest {
  constructor () {
    this.uri = `${PROTOCOLE}://${IP}`
    this.conf = { 'Content-Type': 'application/json' }
  }

  get (path, data) {
    return axios.get(this.uri + (path || ''), data || {}, this.conf)
  }

  signIn (path, data, a) {
    const json = {
      username: `${data.email}`,
      password: `${data.password}`
    }
    console.error(json)

    return new Promise((resolve, reject) => {
      this.get(path, json)
        .then(res => {
          resolve(res.data.id)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

// call_signIn(e){
//   //cancel default comportement
//   e.preventDefault();
//   let data = {"username": `${this.state.value_input_mail}`, "password": `${this.state.value_input_password}`};
//   const configSend = {'Content-Type': 'application/json'}
//   axios.post('http://13.59.220.41/login', data, configSend)
//     .then (res => {
//       console.log (res.data.id, 'ca marche');
//       //Set id in session storage
//       const id_user = res.data.id;
//       sessionStorage.setItem('id', `${id_user}`);
//       //Redirect
//       this.redirect();
//     })

//   });
// }
export default ApiRequest
