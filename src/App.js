import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


// import MainNavigation from './Shared/Components/Navigation/MainNavigation';

import './App.css';

const  App =() => {
  return (
    
    <Router>
      <Switch>
    <Route path ='/'exact>
      <MainPage />
    </Route>
    <Route path ='/about'exact>
      <About />
    </Route>
    <Route path ='/skill' exact>
      <Skill />
    </Route>
    <Route path ='/projects' exact>
      <Projects />
    </Route>
    <Route path ='/contact' exact>
      <Contact />
    </Route>
    <Redirect to='/' />
    </Switch>
    </Router>

 
 
  )
}

export default App;
