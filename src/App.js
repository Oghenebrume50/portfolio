import React from 'react';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Note from './components/Note';
import Work from './containers/Works';
import Footer from './containers/Footer';

import './App.css';

function initTracker() {
  ReactGA.initialize('UA-163914624-1');
  ReactGA.pageview('/');
}

function App() {
  return (
    
    <div className="App">
      {initTracker()}
      <Header/>
      <Note />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
