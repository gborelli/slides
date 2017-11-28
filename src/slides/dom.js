/* eslint-disable react/no-array-index-key */
import React from 'react';
import Level from '../components/level';
import Code from '../components/code';


export default () => (
  <section>
    <section>
      <h2>DOM</h2>
      <Level num={2} />
    </section>
    <section>
      <h3>Find Elements.</h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {'$(".my #awesome selector");'}
        </Code>

        <Code>{`document.querySelectorAll(
  '.my #awesome selector'
);
`}
        </Code>
      </div>
      <div className="code-comparison">
        <Code>
          {'$("#awesome");'}
        </Code>

        <Code>{`document.getElementById('awesome');
`}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {`$('.element-class');
`}
        </Code>

        <Code>{`document.querySelector(
  '.element-class'
);`}
        </Code>
      </div>

    </section>

    <section>
      <h3>Find Elements.<small>2</small></h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {'$(el).find(selector);'}
        </Code>

        <Code>{'el.querySelectorAll(selector);'}
        </Code>
      </div>
    </section>


    <section>
      <h3>Elements&apos; relatives.</h3>
      <Level num={3} />
      <div className="code-comparison">
        <Code>
          {'$(el).children();'}
        </Code>

        <Code>{'el.children'}
        </Code>
      </div>
      <div className="code-comparison">
        <Code>
          {'$(el).parent();'}
        </Code>

        <Code>{'el.parentNode'}
        </Code>
      </div>
    </section>

    <section>
      <h3>Attributes.</h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {'$(el).attr(\'tabindex\');'}
        </Code>

        <Code>{'el.getAttribute(\'tabindex\');'}
        </Code>
      </div>
      <div className="code-comparison">
        <Code>
          {'$(el).attr(\'tabindex\', 3);'}
        </Code>

        <Code>{'el.getAttribute(\'tabindex\', 3);'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).val();'}
        </Code>

        <Code>{'el.getAttribute(\'value\');'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).removeAttr(\'tabindex\');'}
        </Code>
        <Code>
          {'el.removeAttribute(\'tabindex\');'}
        </Code>
      </div>

    </section>

    <section>
      <h3>Css classes.</h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {'$(el).hasClass(\'my-class-name\');'}
        </Code>

        <Code>
          {'el.classList.contains(\'my-class-name\');'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).addClass(\'my-class-name\');'}
        </Code>

        <Code>
          {'el.classList.add(\'my-class-name\');'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).removeClass(\'my-class-name\');'}
        </Code>

        <Code>
          {'el.classList.remove(\'my-class-name\');'}
        </Code>
      </div>
    </section>
    <section>
      <h3>Css and style.</h3>
      <Level num={3} />
      <div className="code-comparison">
        <Code>
          {'$(el).css(\'border-top\')'}
        </Code>

        <Code>
          {'getComputedStyle(el)[\'border-top\']'}
        </Code>
      </div>
      <div className="code-comparison">
        <Code>
          {'$(el).css({\'border-witdh\': \'1px\'});'}
        </Code>

        <Code>
          {'el.style.borderWidth = \'20px\';'}
        </Code>
      </div>
    </section>

    <section>
      <h3>Tag Content.</h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {`$(el).text();
$(el).html();`}
        </Code>

        <Code>
          {'el.innerHTML;'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {`$(el).text('my awesome text');
$(el).html('<h2>my title</h2>');`}
        </Code>

        <Code>
          {'el.innerHTML = \'My text or HTML\';'}
        </Code>
      </div>

    </section>

    <section>
      <h3>Tag Content.<small>2</small></h3>
      <Level num={3} />
      <div className="code-comparison">
        <Code>
          {'$(parent).append(el);'}
        </Code>

        <Code>
          {'parent.appendChild(el);'}
        </Code>
      </div>

      <div className="code-comparison">


        <Code>
          {'$(parent).prepend(el);'}
        </Code>

        <Code>
          {'parent.insertBefore(el, parent.firstChild);'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).after(htmlStr);'}
        </Code>

        <Code>
          {'el.insertAdjacentHTML(\'afterend\', htmlStr);'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).before(htmlStr);'}
        </Code>

        <Code>
          {'el.insertAdjacentHTML(\'beforebegin\', htmlStr);'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).remove();'}
        </Code>

        <Code>
          {'el.parentNode.removeChild(el);'}
        </Code>
      </div>

    </section>

  </section>
);
