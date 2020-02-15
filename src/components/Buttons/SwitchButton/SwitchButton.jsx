import React from 'react'

const switchButton = ({ setNewSwitch, switchState }) => {
  return (
    <div className={`switch-button ${switchState === 0 ? 'left' : 'right'}`}>
      <div onClick={() => { setNewSwitch(0) }}><span>My list</span></div>
      <div onClick={() => { setNewSwitch(1) }}><span>My information</span></div>
    </div>
  )
}

export default switchButton
