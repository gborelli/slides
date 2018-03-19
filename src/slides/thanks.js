import React from 'react';
import abstractLogo from '../img/abstract_logo.png';
const slidesUrl = 'https://risikoreactjs.netlify.com';

const ThankSlide = () => (
  <section>
    <h2 className="blood">Grazie.</h2>
    <div className="credits">
      <img src={abstractLogo} alt="abstract" />
      <p>
        @twitter giorgio_001<br/>
        giorgio.borelli@abstract.it
      </p>
    </div>
    <p><small><a href={slidesUrl}>{slidesUrl}</a></small></p>
  </section>
);


export default ThankSlide;
