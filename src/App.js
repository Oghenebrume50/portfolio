import React from 'react';
import ReactGA from 'react-ga';
import Social from './components/Socials';
import Header from './components/Header';

import './App.css';

function initTracker() {
  ReactGA.initialize('UA-163914624-1');
  ReactGA.pageview('/');
}

function App() {
  return (
    
    <div className="App">
      {initTracker()}
      <p>Hey there, I'm <span className="name">RAPHAEL NORIODE</span> a  <a href="https://drive.google.com/file/d/1IChMLMogOYuJPvQmZyPSGZZgu4-f3sIj/view?usp=sharing">
            Software developer
        </a>
      </p>
      <Header/>
      <Social/>
    </div>
  );
}

export default App;
