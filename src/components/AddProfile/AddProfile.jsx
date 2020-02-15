import React from 'react';
import { Redirect } from 'react-router-dom';
import user from '../../assets/picto-user.png';

class AddProfile extends React.Component {

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
      return <Redirect to='/profile/new' />
    }
  }

  render() {
      return (
        <div className="create-profile">
          {this.renderRedirect()}
          <div className="flex--center">
            <img className="user" src={user} alt="Picto user"/>
          </div>
        <button className="profile-button" onClick={this.setRedirect}>Add new profile</button>
      </div>
      );
    }
  }

export default AddProfile;