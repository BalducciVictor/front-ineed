import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Components
import Home from './pages/Home/Home.jsx';

//Reset css
import './styleGlobaux/AppReset.scss';

//Fonts
import './styleGlobaux/fontFace.scss';

//Graphical Charter
import './styleGlobaux/graphicalCharter.scss';

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
