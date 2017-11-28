import React from 'react';
import Level from '../components/level';
import Code from '../components/code';


export default () => (
  <section>
    <section>
      <h2>Ajax.</h2>
      <Level num={3} />
    </section>

    <section>
      <h3>$.ajax [POST]</h3>
      <Level num={2} />
      <div className="code-comparison">
        <Code>
          {`$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});`}
        </Code>

        <Code>{`var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader(
  'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'
);
request.send(data);
`}
        </Code>
      </div>
    </section>
    <section>
      <h3>$.ajax [GET]</h3>
      <Level num={3} />
      <div className="code-comparison">
        <Code>
          {`$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {
    ...
  },
  error: function() {
    ...
  }
});`}
        </Code>

        <Code>{`var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);
request.onload = function() {
  ...
};
request.onerror = function() {
  ...
};
request.send();`}
        </Code>
      </div>
    </section>

  </section>
);
