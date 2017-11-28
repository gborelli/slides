import React from 'react';
import Level from '../components/level';
import Code from '../components/code';


export default () => (
  <section>
    <h2>Wrap it up, please.</h2>
    <Level num={3} />
    <Code>
      {`(function (toolkit) {
  toolkit.doSomething = function (param1, param2, ...) {
    // everything you need from JQuery...
  };

})(window.MyToolkit = window.MyToolkit || {});
`}
    </Code>
    <p>and then...</p>
    <Code>
      {`window.MyToolkit.doSomething(param1, param2, ...);
`}
    </Code>

  </section>
);
