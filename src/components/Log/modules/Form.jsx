import React, { useState } from 'react'
import PropTypes from 'prop-types'
import genrateInput from '../../../pluging/inputGenerate'
import Input from '../../input'
import Context from '../../../Store/reactContext'
import context from '../../../Store/reactContext'

const Home = function ({ form, setNewform, setMode, mode }) {
  const signIn = (e, $SignIn, $profile) => {
    e.preventDefault()
    $profile++

    $SignIn('/login', form)
      .catch((err) => {
        console.log(err, 'ici')
      })
  }

  const inputs = genrateInput(form)
  return (
    <Context.Consumer value={form.email} >
      {({ $SignIn, $profile }) => (
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
          {$profile}
          {/* {messageErrorPassword === true && <p className="message_error">Passwords do not match</p>} */}
          <button onClick={ (e) => signIn(e, $SignIn, $profile)} >Sign up</button>
          <div>
            {
              mode === 0
                ? <p> `Already have an account ?<span onClick={() => (setMode(1))}>Log in </span> </p>
                : <p> You don't have an account ? <span onClick={() => { setMode(0) }}>Sign Up</span> </p>
            }
          </div>
        </div>
      )}
    </Context.Consumer>

  )
}

PropTypes.Home = {
  form: PropTypes.object,
  setNewform: PropTypes.function
}

export default Home
