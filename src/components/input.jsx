import React from 'react'
import PropTypes from 'prop-types'

const input = function ({ value, setValue, label, type }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default input

input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
