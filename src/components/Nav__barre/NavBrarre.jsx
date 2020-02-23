import React, { useEffect, useState } from 'react'
import { Link, useHistory, HashRouter, useLocation } from 'react-router-dom'
import logo from '../../assets/logo_i_need.svg'

const PageContainer = ({ isLog }) => {
  const [pathName, setPathName] = useState('')
  const history = useHistory()

  const Disconnect = () => {
    sessionStorage.setItem('id', '')
    setTimeout(() => {
      history.push('/log')
    }, 200)
  }

  const NavConnected = () => {
    const location = useLocation()
    useEffect(() => {
      setPathName(location.pathname)
    }, [location])
    return (
      <nav className="connected">
        <button className={'button button--secondary'} onClick={() => { Disconnect() }} >Disconnect</button>
        { pathName !== '/profile' ? <button onClick={() => { history.push('/profile') }} className={'button button--blue'}>Show a profile</button> : ''}
        { pathName !== '/' ? <button className={'button button--blue'} onClick={() => { history.push('/') }} >Map</button> : ''}
      </nav>)
  }

  const NavDisconnect = () => {
    return ( 
      <nav >
            <button className={'button button--primary'} onClick={() => { localStorage.removeItem('id'); history.push('/log') }} >Sign up</button>
            <button className={'button button--secondary'} onClick={() => { localStorage.removeItem('id'); history.push('/log') }} >Log in</button>
          </nav>
    )
  }

  return (
    <div className="nav-barre">
      <img className="logo__image" onClick={() => { history.push('/') }} src={logo} alt="logo"/>
      {
        isLog
          ? <NavConnected />
          : <NavDisconnect />
      }
    </div>
  )
}

export default PageContainer
