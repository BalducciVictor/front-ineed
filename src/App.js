import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import NewProfile from './pages/NewProfile/NewProfile';
import PersonalInformation from './pages/PersonalInformation/PersonalInformation';

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
          <Route  path='/profile' component={Profile} />
          <Route path='/new' component={NewProfile} />
          <Route path='/information' component={PersonalInformation} />     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
