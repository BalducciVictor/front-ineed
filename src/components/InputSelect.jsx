import React, { useState, useEffect } from 'react'
import Select from 'react-select'

const customStyles = {
  container: (base, state) => ({
    ...base,
    // border: state.isFocused ? null : null,
    transition:
      'border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease',
    '&:hover': {
      boxShadow: '0 2px 4px 0 rgba(41, 56, 78, 0.1)'
    },
    'margin-left': '10px',
    'padding-top': '0px',
    'min-width': '180px',
    color: '#0494fa',
    'min-height': '40px',
    position: 'relative'
  }),
  control: (base, state) => ({
    ...base,
    'border-radius': '30px',
    'border-width': '2px',
    'border-color': '#D9D9D9',
    height: '42px'
  }),
  valueContainer: (base, state) => ({
    ...base,
    'align-items': 'center',
    padding: '0px 8px'
  }),
  multiValue: (base, state) => ({
    ...base,
    maxWidth: '100px',
    background: '#0494fa',
    color: 'white',
    'border-radius': '30px',
    margin: 'auto 4px'
  }),
  indicatorsContainer: (base, state) => ({
    ...base,
    padding: '0px 8px'
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    color: 'white',
    'font-size': '16px'
  }),
  input: (base, state) => ({
    ...base,
    height: '35px',
    color: '#0494fa'
  }),
  placeholder: (base, state) => ({
    ...base,
    color: '#0494fa'
  })
}

const ImputFiltre = ({ placeHolder, setValue, defaultValue, options }) => {
  const [defaultVal, setDefaultVal] = useState()
  const filtreValue = (values) => {
    if (values) {
      setValue(values.map(input => input.value))
    } else {
      setValue([])
    }
  }

  useEffect(() => {
    setDefaultVal(defaultValue.map((val) => {
      return options.find(({ value }) => value == val)
    }))
  }, [options.length, placeHolder, setValue, defaultValue])

  return (
    <Select isMulti selectOption={ (() => defaultVal)} value={defaultVal} onChange={values => filtreValue(values)} placeholder={placeHolder} options={options} styles={customStyles} />
  )
}

export default ImputFiltre
