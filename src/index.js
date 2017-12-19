import React from 'react';
import ReactDOM from 'react-dom';
import Reveal from 'reveal.js';

import Intro from './slides/intro';
import What from './slides/what';
import How from './slides/how';
import Start from './slides/start';
import Resources from './slides/resources';
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
        <What />
        <How />
        <Start />
        <Tutorial />
        <Resources />
        <Thanks />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
