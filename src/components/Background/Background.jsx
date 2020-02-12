import React from 'react';
import './Background.scss';

import ShowProfile from '../ShowProfile/ShowProfile';
import AddProfile from '../AddProfile/AddProfile';
import Map from '../Map/Map';

class Background extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div className="background-profiles">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        <button className="specialty-button">search a specialty</button>
        <div className="boxWrapper-p">
          <h1 className="title-profile">Welcome</h1>
          <div className="list-profiles">
            <ShowProfile/>
            <AddProfile/>
            <Map/>
          </div>
        </div>
      </div>
    )
  }
}
export default Background;