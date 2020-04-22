import React from 'react';
import ReactGA from 'react-ga';
import Social from '../components/Socials';
import Header from '../components/Header';

import '../css/Home.css';

function initTracker() {
  ReactGA.initialize('UA-163914624-1');
  ReactGA.pageview('/');
}

function Home() {
  return (
    
    <div className="App">
      {initTracker()}
      <p>Hey there, I'm <span className="name">RAPHAEL NORIODE </span> 
        <span className='home_break'>
          a <a href="https://drive.google.com/file/d/1IChMLMogOYuJPvQmZyPSGZZgu4-f3sIj/view?usp=sharing">
            Software developer</a>
        </span>
      </p>
      <Header/>
      <Social/>
    </div>
  );
}

export default Home;
