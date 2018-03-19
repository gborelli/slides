import React from 'react';
import HulkSad from '../img/hulk_sad.jpg';
import DD from '../img/dungenos_and_dragons.gif';


const BackgroundSlide = () => (
  <section data-transition="zoom-in fade-out">
    <section>
      <h2>Background</h2>
      <ul>
        <li className="fragment">Web developer</li>
        <li className="fragment">Plone</li>
        <li className="fragment">Python</li>
        <li className="fragment">Javascript</li>
      </ul>
    </section>
    <section>
      <h3>2016 nuovo lavoro!</h3>
      <img className="stretch" src={DD} alt="Hulk" />
      <p>corporate ed un solo `cliente` da seguire.</p>
    </section>
    <section>
      <h3>
        <span className="blood">H</span><small>idden</small>
        <span className="blood">I</span><small>nput</small>
        <span className="blood">D</span><small>riven</small>
        <span className="blood">P</span><small>rogramming</small>
      </h3>
      <img className="stretch" src={HulkSad} alt="Hulk" />
      <p>disastro di JSP / CSS / Less / JQuery / Hidden input</p>
    </section>
  </section>
);

export default BackgroundSlide;
