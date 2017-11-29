import React from 'react';
import Level from '../components/level';
import YinYang from '../components/yinyang';


const PluginSlide = () => (
  <section>
    <div className="plugins">
      <YinYang />
      <div className="slide-body">
        <h2>Plugins.</h2>
        <Level num={5} />
      </div>
    </div>
  </section>
);

export default PluginSlide;
