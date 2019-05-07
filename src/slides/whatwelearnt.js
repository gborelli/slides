import React from 'react';

const WhatWeLearned = () => (
  <section>
    <section>
      <h2 className="blood">Cosa abbiamo imparato</h2>
      <p>Dopo quasi un anno dal primo deploy</p>
    </section>
    <section>
      <h2 className="blood">Comunicazione e Coordinamento</h2>
      <ul>
        <li>Analisi e definizione specifiche</li>
        <li>Sviluppo</li>
        <li>Rilasci</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">Log</h2>
      <ul>
        <li>Dai servizi di backend a NodeJS</li>
        <li>Dal Frontend al backend</li>
        <li>Marcare la request con identificativo univoco per sessione e per chiamata dal FE</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">Gestione errori</h2>
      <ul>
        <li>Identificare al più presto il colpevole</li>
        <li>Errori bloccanti e non</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">Test && Docs</h2>
      <ul>
        <li>Enzyme</li>
        <li>JsDocs Type docs</li>
        <li>Storybook</li>
        <li>Jest</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">Cache</h2>
      <ul>
        <li>Redis</li>
        <li>Network</li>
        <li>Politiche di cache - cosa e per quanto tempo</li>
        <li>Warmup (?)</li>
      </ul>
    </section>
  </section>
);

export default WhatWeLearned;
