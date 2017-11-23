import React from 'react';
import ReactDOM from 'react-dom';
import Reveal from 'reveal.js';

import Intro from './slides/intro';
import Slide1 from './slides/slide1';
import Thanks from './slides/thanks';


import './main.scss';
import '../public/favicon.ico';


class App extends React.Component {
  componentDidMount() {
    Reveal.initialize({
      history: true,
      transition: 'zoom',
      previewLinks: true,
    });
  }

  render() {
    return (
      <div className="slides">
        <Intro />
        <Slide1 />
        <Thanks />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
