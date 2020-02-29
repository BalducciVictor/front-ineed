import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CatchPhrase from './modules/CatchPhrase'
import Form from './modules/Form'

const Home = function (props) {
  const { typeLog } = useParams()
  const [mode, setMode] = useState(typeLog === 'singnup' ? 0 : 1)
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

  useEffect(() => {
    setMode(typeLog === 'singnup' ? 0 : 1)
  }, [typeLog])

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
        <p className="title__log" >{ mode === 1 ? 'WELCOME BACK !' : 'OPEN AN ACCOUNT' }</p>
        <form action="">
          <Form form={form.list[mode]} setNewform={setNewform} setMode={setMode} mode={mode}/>
        </form>
      </section>
      <CatchPhrase/>
    </div>
  )
}

export default Home
