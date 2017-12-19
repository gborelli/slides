import React from 'react';
import Code from '../components/code';

const StartSlide = () => (
  <section>
    <section>
      <h2>Let&#8217;s start.</h2>
    </section>
    <section>
      <h3>Dependencies</h3>
      <ul>
        <li><a href="https://nodejs.org/it/">NodeJS</a></li>
        <li><a href="https://www.npmjs.com">NPM</a></li>
      </ul>
    </section>
    <section>
      <h2>Create react APP</h2>
      <Code>
        {'npm install -g create-react-app'}
      </Code>
      <Code>
        {`create-react-app my-app
cd my-app

npm start
`}
      </Code>
      <p><small>then point your browser to <span className="blood">http://localhost:3000</span></small></p>
    </section>
    <section>
      <h2>What happened?</h2>
      <ul>
        <li>README.md</li>
        <li>package.json</li>
        <li>package-lock.json</li>
        <li><span className="blood">node_modules</span></li>
        <li><span className="blood">public</span></li>
        <li><span className="blood">src</span>
          <ul>
            <li>App.js</li>
            <li>App.css</li>
          </ul>
        </li>

      </ul>
    </section>
    <section>
      <h2>App.js</h2>
      <Code>
        {`import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';`}
      </Code>
    </section>
    <section>
      <h2>App.js</h2>
      <Code>{`class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;`}
      </Code>
    </section>
    <section>
      <h2>Technologies</h2>
      <ul>
        <li>ES6 (ECMAscript 6)</li>
        <li><a href="https://reactjs.org/docs/introducing-jsx.html">JSX (javascript syntax extension)</a></li>
      </ul>
    </section>
  </section>
);

export default StartSlide;
