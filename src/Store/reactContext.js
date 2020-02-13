import React from 'react'
import ApiRequest from '../Api/Api'

const apiRequest = new ApiRequest()

const context = React.createContext({
  $Get: (path, data) => {
    return apiRequest.get(path, data)
  },
  $Post: (path, data) => {
    return apiRequest.post(path, data)
  },
  $SignUp: (path, data) => {
    return new Promise((resolve, reject) => {
      apiRequest.signIn(path, data)
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
  $SignIn: (path, data) => {
    return new Promise((resolve, reject) => {
      apiRequest.signIn(path, data)
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
