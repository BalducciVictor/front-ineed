import React from 'react';
import { Redirect } from 'react-router-dom';

import './CreateProfile.scss';

import user from '../../assets/picto-user.png';

class CreateProfile extends React.Component {

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/new' />
    }
  }

  render() {
      return (
        <div className="create-profile">
          {this.renderRedirect()}
        <a className="profile-link" href="/"></a>
        {/* <svg className="logo_user"><use xlinkHref="/many_svg.svg#picto-user"/></svg> */}
        <img className="user" src={user} alt="Picto user"/>
        <button className="profile-button" onClick={this.setRedirect}>Add new profile</button>
      </div>
      );
    }
  }

export default CreateProfile;