import React from 'react';

const WhySlide = () => (
  <section data-transition="zoom-in fade-out">
    <h2>How it works</h2>
    <ul>
      <li className="fragment"><a href="https://en.wikipedia.org/wiki/Observer_pattern">Observer pattern.</a></li>
      <li className="fragment"><a href="https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom">Virtual DOM.</a></li>
      <li className="fragment"><a href="https://reactjs.org/docs/components-and-props.html">Components.</a></li>
    </ul>
  </section>
);

export default WhySlide;
