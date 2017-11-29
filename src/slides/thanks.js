import React from 'react';

const slidesUrl = 'https://github.com/gborelli/slides/tree/nojquery';

const ThankSlide () => (
  <section>
    <h1>Grazie.</h1>
    <p><small>@Giorgio</small></p>
    <p><a href={slidesUrl}>{slidesUrl}</a>
    </p>
  </section>
);


export default ThankSlide;
