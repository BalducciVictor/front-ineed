
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

export default boxWrapper
