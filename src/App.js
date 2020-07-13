import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Kory", age: 25 },
      { name: "Sydney", age: 25 },
    ],
    otherState: "Some other value",
  };

  switchNameHandler = (newName) => {
    // console.log("Whee");
    // Don't do this: this.state.persons[0].name = "Maximilian"
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Kory", age: 25 },
        { name: "Sydney", age: 26 },
      ],
      showPersons: false,
    });
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 25 },
        { name: "Sydney", age: 26 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
        Toggle persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, "Maxor")}
            >
              My Hobbies: Acting
            </Person>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
          </div>
        ) : null}
      </div>
    );
    // ^ The above and below are the same
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does this work now?"))
  }
}

export default App;
