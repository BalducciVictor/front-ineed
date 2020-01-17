import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route exact path='/'>
                <SignUp />
              </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
