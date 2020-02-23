import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CatchPhrase from './modules/CatchPhrase'
import Form from './modules/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = function (props) {
  const [mode, setMode] = useState(1)
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
        <p className="title__log" >{ mode === 1 ? 'WELCOME BACK !' : 'OPEN AN ACCOUNT' } <FontAwesomeIcon icon="check-square" /> </p>
        <form action="">
          <Form form={form.list[mode]} setNewform={setNewform} setMode={setMode} mode={mode}/>
        </form>
      </section>
      <CatchPhrase/>
    </div>
  )
}

export default Home
