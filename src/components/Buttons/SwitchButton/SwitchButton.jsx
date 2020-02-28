import React from 'react'

const switchButton = ({ setNewSwitch, switchState, left, rigth }) => {
  return (
    <div className={`switch-button ${switchState === 0 ? 'left' : 'right'}`}>
      <div onClick={() => { setNewSwitch(0) }}><span className="left">{left}</span></div>
      <div onClick={() => { setNewSwitch(1) }}><span className="right">{rigth}</span></div>
    </div>
  )
}

export default switchButton
