import React from 'react';
import Level from '../components/level';
import Code from '../components/code';


const UtilSlide () => (
  <section>
    <section>
      <h2>Utilities.</h2>
      <Level num={3} />
    </section>
    <section>
      <h3>$.inArray</h3>
      <Level num={1} />
      <div className="code-comparison">
        <Code>
          {'$.inArray(item, array);'}
        </Code>

        <Code>{
`var items = [1, 3, 4, 6];
items.indexOf(3); // 2`}
        </Code>
      </div>
    </section>


    <section>
      <h3>$(el).length</h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {'$(el).length;'}
        </Code>

        <Code>
          {'document.querySelectorAll(\'a\').length;'}
        </Code>
      </div>
    </section>


    <section>
      <h3>$.each</h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {`$.each(array, function(i, item){
...
});`}
        </Code>

        <Code>{
          `var items = [1, 3, 4, 6];
items.forEach(function(item, i){
  ...
});`}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {`$(el).each(function(i, item){
...
});`}
        </Code>

        <Code>{
          `var item = document.querySelectorAll('a');
item.forEach(function(item, i){
  ...
});`}
        </Code>
      </div>
    </section>


    <section>
      <h3>$.is</h3>
      <Level num={4} />
      <div className="code-comparison">
        <Code>
          {'$(el).is($(otherEl));'}
        </Code>

        <Code>
          {'el === otherEl;'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).is(\'a\');'}
        </Code>

        <Code>
          {'el.nodeName.toLowerCase() == \'a\';'}
        </Code>
      </div>

      <div className="code-comparison">
        <Code>
          {'$(el).is(\':visible\');'}
        </Code>

        <Code>
          {`!(
  el.offsetWidth === 0 &&
  el.offsetHeight === 0
);`}
        </Code>
      </div>

    </section>


    <section>
      <h3>$.parseJSON</h3>
      <Level num={1} />
      <div className="code-comparison">
        <Code>
          {'$.parseJSON(string);'}
        </Code>

        <Code>
          {
`JSON.parse(string);

JSON.stringify([1,2,3]); // "[1,2,3]"`}
        </Code>
      </div>
    </section>


    <section>
      <h3>$.extend</h3>
      <Level num={5} />
      <div className="code-comparison">
        <Code>
          {
`$.extend({}, objA, objB);
$.extend(true, {}, objA, objB);`}
        </Code>

        <Code>{
        `var deepExtend = function(out) {
  out = out || {};
  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    if (!obj)
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          out[key] = deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }
  return out;
};`}
        </Code>
      </div>
    </section>

  </section>
);

export default UtilSlide;
