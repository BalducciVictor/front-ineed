import React from 'react'
import apiRequest from '../Api/Api'

const context = React.createContext({
  $Get: (path, data) => {
    return apiRequest.get(path, data)
  },
  $Post: (path, data) => {
    return apiRequest.post(path, data)
  },
  $SignUp: (data) => {
    return new Promise((resolve, reject) => {
      apiRequest.signUp(data)
        .then((profile) => {
          context.$profile = profile
          resolve(profile)
        })
        .catch((err) => {
          console.log('ok', context.$profile, this, context)
          reject(err)
        })
    })
  },
  $SignIn: (data) => {
    return new Promise((resolve, reject) => {
      apiRequest.signIn(data)
        .then((profile) => {
          resolve(profile)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
})

export default context
