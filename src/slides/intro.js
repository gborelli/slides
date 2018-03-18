import React from 'react';
import risiko from '../img/risiko.jpg';

const IntroSlide = () => (
  <section className="intro">
    <h1>
      <span className="blood">Risiko ReactJS</span>
      <small>strategie d’invasione.</small>
    </h1>
    <img src={risiko} alt="Risiko ReactJS" />
  </section>
);

export default IntroSlide;
