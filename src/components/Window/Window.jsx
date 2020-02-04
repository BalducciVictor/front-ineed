import React from 'react';
import './Window.scss';
import AccountProfile from '../../components/AccountProfile/AccountProfile';
import CreateProfile from '../../components/CreateProfile/CreateProfile';
import MapSearch from '../../components/MapSearch/MapSearch';

class Window extends React.Component {
  constructor() {
    super();
  }
    title(){
    if (window.location.pathname == '/profile') {
      return <h1>Welcome</h1>
    } else {
      return <p>coucou</p>
    }
    // Ajout autre page
  }
  render(){
    return (
      <div>
        <div className='s1'>
          <div className='s2'>
            {this.title()}
            <div className="list-profiles">
              <div className="choose-profile">
                <AccountProfile/>
                <CreateProfile/>
                <MapSearch/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    }
export default Window;