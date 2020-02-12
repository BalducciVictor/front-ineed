import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import NewProfile from './pages/NewProfile/NewProfile';
import PersonalInformation from './pages/PersonalInformation/PersonalInformation';
import Datavisualitaion from './pages/Datavisualitaion/Datavisualisation.jsx';

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
<<<<<<< HEAD
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
=======
          <Route exact path='/' component={Home}/>
          <Route path='/profile' component={Profile} />
          <Route path='/new' component={NewProfile} />
          <Route path='/information' component={PersonalInformation} />  
          <Route path='/map' component={Datavisualitaion} />  
>>>>>>> eb9a19d997de473b84043c510809edda8b1c809c
        </Switch>
      </Router>
    </div>
  );
}

export default App;
