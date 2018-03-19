import React from 'react';
import ReactDOM from 'react-dom';
import Reveal from 'reveal.js';

import Intro from './slides/intro';
import Background from './slides/background';
import ANewHope from './slides/anewhope';
import Redesign from './slides/redesign';
import Architecture from './slides/architecture';

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
        <Background />
        <ANewHope />
        <Redesign />
        <Architecture />
        <Thanks />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
