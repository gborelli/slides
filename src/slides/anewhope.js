import React from 'react';
// import Code from '../components/code';
import ANHope from '../img/a_new_hope.jpg';
import Griffins from '../img/griffins.gif';

const NewHopeSlide = () => (
  <section>
    <section data-background-image={ANHope} data-background-size="25%" />
    <section>
      <h2 className="blood">Qualcosa si muove.</h2>
      <ul>
        <li>Piccolo team front-end interno.</li>
        <li>Fornisce le linee guida sul frontend.</li>
        <li>Risolve problemi al volo.</li>
        <li className="fragment blood">E nel tempo libero, si diverte con il refactoring.</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">Attività</h2>
      <ul>
        <li className="fragment">Gulp</li>
        <li className="fragment">Scss + postcss + autoprefixer</li>
        <li className="fragment">Imagemin + sourcemaps</li>
        <li className="fragment">UI Styleguide</li>
        <li className="fragment">ES6 + Webpack</li>
        <li className="fragment">Web Toolkit &amp;&amp; JSDoc</li>
        <li className="fragment">eslint + sass lint + editorconfig</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">È stato quasi un successo.</h2>
      <img src={Griffins} alt="Griffins" className="stretch" />
    </section>

    <section>
      <h2 className="blood">Issues</h2>
      <ul>
        <li className="fragment">Difficoltà di comunicazione con team esterni</li>
        <li className="fragment">Cambio fornitore</li>
      </ul>
    </section>
  </section>
);

export default NewHopeSlide;
