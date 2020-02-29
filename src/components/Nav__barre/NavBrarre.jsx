import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import logo from '../../assets/logo_i_need.svg'
import { contextUser } from '../../Store/reactContext'

const PageContainer = ({ isLog, setUserId, setLog }) => {
  const [pathName, setPathName] = useState('')
  const history = useHistory()

  const DisconnectUser = () => {
    sessionStorage.setItem('id', '')
    setUserId('')
    setLog(false)
  }

  const NavConnected = () => {
    const location = useLocation()
    useEffect(() => {
      setPathName(location.pathname)
    }, [location])
    return (
      <nav className="connected">
        <button className={'button button--secondary'} onClick={() => { DisconnectUser(); history.push('/log/signin') }} >Disconnect</button>
        { pathName !== '/profile' ? <button onClick={() => { history.push('/profile') }} className={'button button--blue'}>Show a profile</button> : ''}
        { pathName !== '/' ? <button className={'button button--blue'} onClick={() => { history.push('/') }} >Map</button> : ''}
      </nav>)
  }

  const NavDisconnect = () => {
    return (
      <nav >
        <button className={'button button--primary'} onClick={() => { localStorage.removeItem('id'); history.push('/log/singnup') }} >Sign up</button>
        <button className={'button button--secondary'} onClick={() => { localStorage.removeItem('id'); history.push('/log/signin') }} >Log in</button>
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
