import React from 'react'

const ButtonFiltre = ({ template, active, toogle }) => {
  const changeActive = () => {
    toogle(!active)
  }
  return (
    <div onClick={changeActive} className={`button__filtre ${active ? 'active' : ''}`}>
      { template }
    </div>
  )
}

export default ButtonFiltre
