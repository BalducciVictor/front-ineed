import React, { useState } from 'react'
import PropTypes from 'prop-types'
import genrateInput from '../../../pluging/inputGenerate'
import Input from '../../Input__primary'
import { contextApi, contextUser } from '../../../Store/reactContext'
import { useHistory } from 'react-router-dom'
import Api from '../../../Api/Api'

const Home = function ({ form, setNewform, setMode, mode }) {
  const history = useHistory()

  const signIn = (setLog, setUserId) => {
    Api.signIn(form)
      .then((userId) => {
        sessionStorage.setItem('id', userId)
        setUserId(userId)
        setLog(true)
        history.push('/')
      })
      .catch((err) => {
        console.log(err, 'ici')
      })
  }

  const signUp = (setLog, setUserId) => {
    if (form.password !== form.ConfirmPassword) {
      return
    }
    Api.signUp(form)
      .then(() => {
        signIn(setLog, setUserId)
      })
      .catch((err) => {
        console.log(err, 'ici')
      })
  }

  const submit = (e, setLog, setUserId) => {
    e.preventDefault()
    if (mode === 1) {
      signIn(setLog, setUserId)
    } else if (mode === 0) {
      signUp(setLog, setUserId)
    }
  }

  const inputs = genrateInput(form)
  return (

    <div>
      { inputs.map((input) => {
        return <Input
          {...input}
          setValue={(value) => { setNewform(value, input.name) }}
          key={input.name}
        />
      })}
      { form.ConfirmPassword && form.password != form.ConfirmPassword && <p className="message_error">Passwords do not match</p>}
      <contextUser.Consumer>
        { user => <button onClick={ (e) => submit(e, user.setLog, user.setUserId)} >Sign up</button>}
      </contextUser.Consumer>
      <div>
        {
          mode === 0
            ? <p> `Already have an account ?<span onClick={() => (setMode(1))}>Log in </span> </p>
            : <p> You don't have an account ? <span onClick={() => { setMode(0) }}>Sign Up</span> </p>
        }
      </div>
    </div>
  )
}

PropTypes.Home = {
  form: PropTypes.object,
  setNewform: PropTypes.function
}

export default Home
