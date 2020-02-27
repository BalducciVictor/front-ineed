import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import style from './inputSelect.scss'

const ImputFiltre = ({ placeHolder }) => {
  const customStyles = {
    container: (base, state) => ({
      ...base,
      border: state.isFocused ? null : null,
      transition:
        'border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease',
      '&:hover': {
        boxShadow: '0 2px 4px 0 rgba(41, 56, 78, 0.1)'
      },
      'margin-left': '10px',
      'padding-top': '2px',
      width: '180px'
      // height: '40px;'
    }),
    control: (base, state) => ({
      ...base,
      'border-radius': '30px',
      'border-width': '2px'
    }),
    valueContainer: (base, state) => ({
      ...base
      // background: 'pink'
    }),
    multiValue: (base, state) => ({
      ...base,
      background: 'lightYellow',
      maxWidth: '100px'
    }),
    Input: (base, state) => ({
      ...base,
      height: '0px'
    })
  }

  return (
    <Select placeholder={placeHolder} value styles={customStyles} />
  )
}

export default ImputFiltre
