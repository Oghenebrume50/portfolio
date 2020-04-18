import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';

const trackingId = process.env.REACT_APP_TRACK_ID;
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById('root'));

