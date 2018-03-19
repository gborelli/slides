import React from 'react';
import TFA from '../img/the_force_awakness.jpg';
import Lego from '../img/lego.jpg';
import Lego2 from '../img/lego2.jpg';

const RedesignSlide = () => (
  <section>
    <section data-background-image={TFA} data-background-size="25%" />
    <section>
      <h2>Web site redesign &amp;&amp; CMS</h2>
      ## Redesign.

  - Progetto importante
  - Bando  agenzia propone ReactJS
  - Colgo la palla al balzo

    </section>
    <section>
      <h2>Headless</h2>
      <img className="stretch" src={Lego} alt="lego headless" />
    </section>

    <section>
      <h2>Real life</h2>
      <img className="stretch" src={Lego2} alt="lego headless knight" />
    </section>


    {/* Political problems alcolisti anonimi e business che pensa che giochi
    Qualcosa per far capire che il cms senza testa li spaventa
    Architettura dal punto di vista tecnico
    Assumiamo */}
  </section>
);

export default RedesignSlide;
