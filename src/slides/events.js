import React from 'react';
import Level from '../components/level';
import Code from '../components/code';


const EventSlide () => (
  <section>
    <section>
      <h3>Handling events.</h3>
      <Level num={4} />
      <div className="code-comparison">
        <Code>
          {'$(el).on(\'click\', function () {...});'}
        </Code>

        <Code>{`el.addEventListener('click', function () {
  ...
});`}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).off(\'click\', eventHandler);'}
        </Code>

        <Code>
          {'el.removeEventListener(\'click\', eventHandler);'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).click();'}
        </Code>
        <Code>
          {'el.click();'}
        </Code>
      </div>
    </section>

  </section>
);

export default EventSlide;
