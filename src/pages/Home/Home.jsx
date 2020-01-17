
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.scss';
import SignUp from '../../components/SignUp/SignUp.jsx';

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