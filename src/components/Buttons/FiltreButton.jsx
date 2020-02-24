import React from 'react'

const ButtonFiltre = ({ template, active, toogle }) => {
  const changeActive = () => {
    const newActive = !active
    toogle({ state: newActive })
  }
  return (
    <div onClick={changeActive} className={`button__filtre ${active ? 'active' : ''}`}>
      { template }
    </div>
  )
}

export default ButtonFiltre
