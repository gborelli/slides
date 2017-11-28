import React from 'react';
import ReactDOM from 'react-dom';
import Reveal from 'reveal.js';

import Intro from './slides/intro';
import What from './slides/what';
import DOM from './slides/dom';
import Utils from './slides/utils';
import Ajax from './slides/ajax';
import Plugins from './slides/plugins';
import Events from './slides/events';
import Wrap from './slides/wrap';
import Resources from './slides/resources';
import Why from './slides/why';
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
        <Why />
        <DOM />
        <Utils />
        <Events />
        <Ajax />
        <Plugins />
        <Wrap />
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
