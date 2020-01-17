
import React from './node_modules/react';
import { BrowserRouter as Router, Switch, Route, Link } from './node_modules/react-router-dom';
import './Home.scss';
import SignUp from '../components/SignUp/SignUp.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        <SignUp />
      </div>
    );
  }
}
export default Home