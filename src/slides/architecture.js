import React from 'react';
import FA from '../img/frontend_architecture.png';

const ArchitectureSlide = () => (
  <section>
    <section>
      <h2 className="blood">Architecture</h2>
      <img src={FA} alt="Architecture" className="stretch" />
    </section>
    <section>
      <h2 className="blood">&lt;footer&gt;</h2>
      <p className="blood">Data layer</p>
      <ul>
        <li>E-commerce | Java + Rest API |</li>
        <li>CMS | Java + Rest API |</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">&lt;body&gt;</h2>
      <p className="blood">API &amp;&amp; SSR</p>
      <ul>
        <li>Apollo Graphql</li>
        <li>Express JS</li>
        <li>ES6 || Typescript</li>
        <li>Jest</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">&lt;head&gt;</h2>
      <p className="blood">UI layer</p>
      <ul>
        <li>React JS</li>
        <li>ES6</li>
        <li>Apollo Graphql</li>
        <li>Redux</li>
        <li>CSS modules &amp;&amp; Postcss</li>
        <li>Storybook</li>
        <li>Jest &amp;&amp; BrowserStack</li>
      </ul>
    </section>
    <section>
      <h2 className="blood">&lt;meta&gt;</h2>
      <p className="blood">Bonus track</p>
      <ul>
        <li>CI &amp;&amp; CD</li>
        <li>Tests</li>
        <li>Documentazione pubblica</li>
        <li>Styleguide pubblica</li>
      </ul>
    </section>
  </section>
);

export default ArchitectureSlide;
