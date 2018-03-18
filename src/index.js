import React from 'react';
import ReactDOM from 'react-dom';
import Reveal from 'reveal.js';

import Intro from './slides/intro';
import Who from './slides/who';
import Background from './slides/background';
import TheNewHope from './slides/thenewhope';
import Redesign from './slides/redesign';
import Tutorial from './slides/tutorial';

import Thanks from './slides/thanks';


import './main.scss';
import '../public/favicon.ico';


class App extends React.Component {
  componentDidMount() {
    Reveal.initialize({
      history: true,
      transition: 'slide', // slide-in fade-out', // 'zoom ',
      previewLinks: true,
    });
  }

  render() {
    return (
      <div className="slides">
        <Intro />
        <Who />
        <Background />
        <TheNewHope />
        <Redesign />
        <Thanks />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
