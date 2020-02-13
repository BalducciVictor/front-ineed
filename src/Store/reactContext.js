import React from 'react'
import ApiRequest from '../Api/Api'

const apiRequest = new ApiRequest()
const context = React.createContext({
  $Get: (path, data) => {
    return apiRequest.signIn(path, data)
  },
  $profile: 0,
  $SignIn: (path, data) => {
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
  }
})

export default context
