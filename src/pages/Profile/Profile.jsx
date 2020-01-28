import React from 'react';
import './Profile.scss';
import blueMap from '../../assets/map-background.png';
import Window from '../../components/Window/Window';
import CreateProfile from '../../components/CreateProfile/CreateProfile';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        <img className="blue-map" src={blueMap} alt="Dots map"/>
        <Window/>
        <div className="list-profiles">
          <div className="choose-profile">
            <CreateProfile/>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
