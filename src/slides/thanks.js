import React from 'react';

const slidesUrl = 'https://github.com/gborelli/slides/tree/risikoreact';

const ThankSlide = () => (
  <section>
    <h1>Grazie.</h1>
    <p><small>giorgio.borelli@abstract.it</small></p>
    <p><small>@twitter giorgio_001</small></p>
    <p><a href={slidesUrl}>{slidesUrl}</a>
    </p>
  </section>
);


export default ThankSlide;
