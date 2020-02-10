import React from 'react';
import './Background.scss';

import ShowProfile from '../ShowProfile/ShowProfile';
import AddProfile from '../AddProfile/AddProfile';
import Map from '../Map/Map';

const Background = () => (
  <div className="background-profiles">
    <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
    <div className="boxWrapper">
      <h1>Welcome</h1>
      <div className="list-profiles">
        <ShowProfile/>
        <AddProfile/>
        <Map/>
      </div>
    </div>
  </div>
)

export default Background;