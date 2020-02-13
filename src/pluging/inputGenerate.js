const genrateInput = (form) => {
  const InputModel = {
    value: '',
    condition: '',
    label: '',
    type: 'text'
  }

  if (typeof form === "object") {
    
  }

  return Object.keys(form).map(inputName => {
    const model = Object.assign({}, InputModel)
    model.name = inputName
    console.log(inputName)
    console.log(form[inputName], inputName, form)
    if (inputName === 'email') {
      model.value = form[inputName]
      model.type = 'email'
      model.label = 'Email'
    } else if (inputName === 'password') {
      model.value = form[inputName]
      model.type = 'password'
      model.label = 'Password'
    } else if (inputName === 'ConfirmPassword') {
      model.value = form[inputName]
      model.type = 'password'
      model.label = 'ConfirmPassword'
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
