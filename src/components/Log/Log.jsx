import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Log.scss'
import CatchPhrase from './modules/CatchPhrase'
import Form from './modules/Form'
import axios from 'axios'

const Home = function (props) {
  const [mode, setMode] = useState(0)
  const [form, setform] = useState({
    list: [
      {
        email: '',
        password: '',
        ConfirmPassword: ''
      },
      {
        email: '',
        password: ''
      }
    ]
  })

  const setNewform = (value, index) => {
    const newForm = Object.assign({}, form)
    newForm.list.forEach(inputs => {
      if (inputs.hasOwnProperty(index)) {
        inputs[index] = value
      }
    })
    setform(newForm)
  }
  return (
    <div className="container__Sign" >
      <section className="form__Sign">
        <h1>Create an account</h1>
        <form action="">
          <Form form={form.list[mode]} setNewform={setNewform} setMode={setMode} mode={mode}/>
        </form>
      </section>
      <CatchPhrase/>
    </div>
  )
}

export default Home
