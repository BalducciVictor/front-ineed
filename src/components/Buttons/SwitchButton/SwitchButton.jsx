import React from 'react';
import './SwitchButton.scss';

export default ({setNewSwitch, switchState}) => {
  return (
      <div className={`switch-button ${ switchState === 0 ? 'left' :  'right' }`}>
        <label>
        My list
        <input name="radio" type="radio" onClick={()=> { setNewSwitch(0) }} value="optionone" id="optionone" checked={ switchState === 0 ? true : false }/>
        </label>
        <label className="right">
        My information
        <input name="radio" type="radio" value="optiontwo" onClick={()=> { setNewSwitch(1) }} id="optiontwo" checked={ switchState === 1 ? true : false }/>
        </label>
      </div>
      )
  }