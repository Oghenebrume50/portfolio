import React from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Work from './containers/Works';
import Footer from './containers/Footer';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Note />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
