import React from 'react'

const switchButton = ({ setNewSwitch, switchState }) => {
  return (
    <div className={`switch-button ${switchState === 0 ? 'left' : 'right'}`}>
      <div onClick={() => { setNewSwitch(1) }}>My list</div>
      <div onClick={() => { setNewSwitch(1) }}>My information</div>
    </div>
  )
}

export default switchButton
