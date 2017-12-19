import React from 'react';
import Code from '../components/code';
import odissey from '../img/2001-a-space-odyssey.jpg';

const TutorialSlide = () => (
  <section>
    <section>
      <h2>Tutorial (?)</h2>
    </section>
    <section>
      <h3>New component.</h3>
      <p><small>file <span className="blood">src/myNewComponent.js</span></small></p>
      <Code>
        {`import React, { Component } from 'react';

class MyFirstComponent extends Component {
  render() {
    return (
      <div>
        <p>Hello World ++</p>
      </div>
    )
  }
}

export default MyFirstComponent;
`}
      </Code>
    </section>

    <section>
      <h3>New component.</h3>
      <p><small>file <span className="blood">src/App.js</span></small></p>
      <Code>{`import MyFirstComponent from './MyFirstComponent';
...
  render() {
    return (
      <div className="App">
        ...
        <MyFirstComponent />
        ...
      </div>
    )
  }
...`}
      </Code>
    </section>
    <section>
      <h2>State vs props.</h2>
      <Code>
        {`
  <MyFirstComponent value="My value" />
`}
      </Code>
      <Code>
        {`
class MyFirstComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
      </div>
    )
  }
}

`}
      </Code>

    </section>

    <section>
      <h2>State vs props.</h2>
      <Code>
        {`class MyFirstComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Test value'
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
      </div>
    )
  }
}`}
      </Code>
      <Code>{'this.setState({...}); // API to set the component state'}
      </Code>
    </section>

    <section>
      <h2>Ajax fetch API.</h2>
      <Code>
        {`fetch('<Service URL>')
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    // do something...
    console.log(data);
  })
  .catch(function(err) {
    // Error :(
    console.error(err);
  });
`}
      </Code>
      <p><small><a href="https://developer.mozilla.org/it/docs/Web/API/Fetch_API/Using_Fetch">Using fetch MDN</a></small></p>
    </section>
    <section>
      <h2>Set state using fetch.</h2>
      <Code>{`class MyFirstComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {}
    }
    this.getData = this.getData.bind(this);
  }

  getData () {
    fetch('<Service URL>')
      .then(function(response) {
        return response.json();
      })
      .then(function (data) {
        this.setState({data: data})
      })
  }
  componentDidMount () {
    this.getData();
  }

  ...
}`}
      </Code>
    </section>
    <section>
      <img src={odissey} alt="2001" />
    </section>

  </section>
);

export default TutorialSlide;
