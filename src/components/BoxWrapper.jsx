
import React, { Component } from 'react'

class boxWrapper extends Component {
  render () {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child)
    })

    return (
      <div className="boxWrapper">
        {children}
      </div>
    )
  }
}

{ /* <div className="page__name">
{
  pageName ? <h2 className="page__name">{pageName}</h2> : ''
}
{
  subText ? <h3 className="page__sub__text" ref={ (el) => setSubText(el) } /> : ''
}
{
  subText ? <hr className="boxWrapper__hr" /> : ''
}
</div> */ }

export default boxWrapper
