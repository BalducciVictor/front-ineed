
import React, { useState } from 'react'

const boxWrapper = ({ pageName, Content }) => {
  return (
    <div className="boxWrapper">
      {
        pageName ? <p className="page__name">{pageName}</p> : ''
      }
      <Content />
    </div>
  )
}

export default boxWrapper
