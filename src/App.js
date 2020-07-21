import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { id: "as", name: "Max", age: 28 },
      { id: "sd", name: "Kory", age: 25 },
      { id: "id", name: "Sydney", age: 25 },
    ],
    otherState: "Some other value",
  };

  nameChangedHandler = (event, id) => {
    // Of the array "persons", which has the index that's the same as the one passed as an arg?
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // Make a copy of the object with that id
    const person = { ...this.state.persons[personIndex] };

    // Change it's name to whatever value was input into the text box
    person.name = event.target.value;

    // Make a copy of the original array.
    const persons = [...this.state.persons];

    // Update only the person whose index we got as an arg
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                age={person.age}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle persons
        </button>
        {persons}
      </div>
    );
    // ^ The above and below are the same
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does this work now?"))
  }
}

export default App;
