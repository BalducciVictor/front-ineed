const genrateInput = (form) => {
  const InputModel = {
    value: '',
    condition: /.+/g,
    label: '',
    type: 'text'
  }

  return Object.keys(form).map(inputName => {
    const model = Object.assign({}, InputModel)
    model.name = inputName
    console.log(form[inputName], inputName, form)
    if (inputName === 'email') {
      model.value = form[inputName]
      model.type = 'email'
      model.label = 'Email'
      model.condition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    } else if (inputName === 'password') {
      model.value = form[inputName]
      model.type = 'password'
      model.label = 'Password'
      model.condition = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    } else if (inputName === 'ConfirmPassword') {
      model.value = form[inputName]
      model.type = 'password'
      model.label = 'ConfirmPassword'
      model.condition = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    } else {
      console.error('not a model at input')
      model.value = 'no value'
    }
    return model
  })
}

genrateInput.Home = {
}

export default genrateInput
