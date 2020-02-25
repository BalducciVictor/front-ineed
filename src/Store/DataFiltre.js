import { createContext } from 'react'
import apiRequest from '../Api/Api'

const contextUser = createContext({
  userID: sessionStorage.getItem('id')
})

const contextApi = createContext({
  hospitals: [],
  pharmacies: [],
  centres: []
})

const getStoreData = () => {
  return JSON.parse(sessionStorage.getItem('dataOrigin'))
}

const setStoreData = (data) => {
  sessionStorage.setItem('dataOrigin', JSON.stringify(data))
}

const saveOnStore = (newData) => {
  const dataFromStore = Object.assign({}, getStoreData())
  const dataMerge = Object.assign(dataFromStore, newData)
  setStoreData(dataMerge)
}

export { getStoreData, setStoreData, saveOnStore }
export default contextApi
