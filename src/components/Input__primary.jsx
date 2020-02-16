import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'


class input__primary extends React.Component {
  render(){
    const { value, setValue, label, type, condition} = this.props
    return (
      <div>
        <label>{label}</label>
        <input className={condition.test(value) ? "error" : ''} type={type} value={value} onChange={e => setValue(e.target.value)} />
        <span>{value.length > 3 && condition.test(value) == false ? 'field name_field has not good format'.replace('name_field',label.toLowerCase()) : '' }</span>
      </div>
    )
  }
}

export default input__primary

input__primary.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
