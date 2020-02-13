import React, { useState } from 'react'
import PropTypes from 'prop-types'
import genrateInput from '../../../pluging/inputGenerate'
import Input from '../../input'
import Context from '../../../Store/reactContext'
import context from '../../../Store/reactContext'

const Home = function ({ form, setNewform, setMode, mode }) {
  const signIn = ($SignIn) => {
    $SignIn(form)
    .then((res) => {
      window.location.pathname = '/profile';
    })
    .catch((err) => {
      console.log(err, 'ici')
    })
  }

  const signUp = ($signUp) => {
    $signUp(form)
      .catch((err) => {
        console.log(err, 'ici')
      })
  }

  const submit = (e, functions) => {
    e.preventDefault()
    const { $SignIn, $SignUp } = functions
    if (mode === 1) {
      signIn($SignIn)
    } else if (mode === 0) {
      signUp($SignUp)
      console.log('ok')
    } else {
      console.error('as not mode')
    }
  }

  const inputs = genrateInput(form)
  return (

    <div>
      { inputs.map((input) => {
        return <Input
          label={input.label}
          value={input.value}
          setValue={(value) => { setNewform(value, input.name) }}
          type={input.type}
          key={input.name}
        />
      })}
      {/* {messageErrorPassword === true && <p className="message_error">Passwords do not match</p>} */}
      <Context.Consumer >
        {({ $SignIn, $SignUp }) => (
          <button onClick={ (e) => submit(e, { $SignIn: $SignIn, $SignUp: $SignUp })} >Sign up</button>
        )}
      </Context.Consumer>
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
