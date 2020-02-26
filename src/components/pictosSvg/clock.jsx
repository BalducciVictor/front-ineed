
import React from 'react'

const Clock = ({ type }) => {
  return (
    <svg className={`col-${type}`} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 18 18">
      <g className={`col-${type}`} id="clock" transform="translate(0.5 0.5)">
        <path className={`col-${type}`} id="Tracé_861" data-name="Tracé 861" d="M8.5,0A8.5,8.5,0,1,0,17,8.5,8.51,8.51,0,0,0,8.5,0Zm0,15.937A7.437,7.437,0,1,1,15.937,8.5,7.446,7.446,0,0,1,8.5,15.937Z" strokeWidth="1"/>
        <path className={`col-${type}`} id="Tracé_862" data-name="Tracé 862" d="M208.857,83.118h-1.062V88.65l3.343,3.343.751-.751-3.032-3.032Z" transform="translate(-199.825 -79.93)" strokeWidth="1"/>
      </g>
    </svg>
  )
}

export default Clock
