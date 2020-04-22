import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './containers/Home';
import Projects from './containers/Projects';
import About from './containers/About';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Contact() {
  return <h2>Contact</h2>;
}