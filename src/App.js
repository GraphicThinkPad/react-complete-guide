import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  // This is a method, remember.
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <Person name="Kory" age="25" />
        <Person name="Sydney" age="25">My Hobbies: Acting</Person>
        <Person name="Max" age="28" />
      </div>
    );
    // ^ The above and below are the same
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does this work now?"))
  }
}

export default App;
