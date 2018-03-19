import React from 'react';
import TFA from '../img/the_force_awakness.jpg';
import Lego from '../img/lego.jpg';
import Lego2 from '../img/lego2.jpg';
import Homer from '../img/homer.jpg';


const RedesignSlide = () => (
  <section>
    <section data-background-image={TFA} data-background-size="25%" />
    <section>
      <h2 className="blood">Web site redesign &amp;&amp; CMS</h2>
      <ul>
        <li>Progetti molto importanti</li>
        <li>L&#39;architettura software si complica</li>
        <li>Agenzia propone ReactJS</li>
      </ul>
    </section>
    <section>
      <h2>Headless</h2>
      <img className="stretch" src={Lego} alt="lego headless" />
    </section>
    <section>
      <h2 className="blood">Vantaggi</h2>
      <ul>
        <li>Autonomia del frontend</li>
        <li>Architettura modulare</li>
        <li>Flessibilità d'integrazione e deploy</li>
        <li>Distinzione netta competenze ed ambiti software</li>
      </ul>
    </section>

    <section>
      <h2 >Real life</h2>
      <img className="stretch" src={Lego2} alt="lego headless knight" />
    </section>

    <section>
      <h2 className="blood">Issues</h2>
      <ul>
        <li>Politica e ownership</li>
        <li>Comprensione e fiducia</li>
        <li>Competenze tecniche</li>
        <li>Disponibilità di risorse</li>
      </ul>
    </section>

    <section>
      <h2></h2>
      <img className="stretch" src={Homer} alt="homer" />
    </section>

  </section>
);

export default RedesignSlide;
