
import React from 'react'

const boxWrapper = ({ pageName, Content, subText }) => {
  const setSubText = (el) => {
    if (el) {
      el.innerHTML = subText || ''
    }
  }
  return (
    <div className="boxWrapper">
      <div className="page__name">
        {
          pageName ? <h2 className="page__name">{pageName}</h2> : ''
        }
        {
          subText ? <h3 className="page__sub__text" ref={ (el) => setSubText(el) } /> : ''
        }
        {
          subText ? <hr className="boxWrapper__hr" /> : ''
        }
      </div>
      { Content ? <Content /> : '' }
    </div>
  )
}

export default boxWrapper
