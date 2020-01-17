import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import './components/SignUp/SignUp.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
