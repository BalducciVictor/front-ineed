import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_i_need.svg'
const PageContainer = () => {
  const connected = true
  return (
    <div className="nav-barre">
      <img src={logo} alt="logo"/>
      <nav className="connected">
        {
          connected ? 
            <button className={"disconnect-button"}>Disconnect</button>
          :
          <div>

          </div>
        }
      </nav>
    </div>
  )
}

export default PageContainer
