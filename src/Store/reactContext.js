import { createContext } from 'react'
import apiRequest from '../Api/Api'

const contextUser = createContext({
  userID: sessionStorage.getItem('id')
})

const contextApi = createContext({
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
          resolve(profile)
        })
        .catch((err) => {
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

export { contextApi, contextUser }
