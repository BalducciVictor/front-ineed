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
          <Route exact path='/profile'>
            <Profile/>
          </Route>
          <Route exact path='/profile/new'>
            <NewProfile/>
          </Route>    
          <Route exact path='/information'>
            <NewProfile/>
          </Route>   
        </Switch>
      </Router>
    </div>
  );
}

export default App;
