import React, { Component } from "react";
import classes from "./App.css";
import Person from "../Components/Persons/Person/Person.js";
import Persons from "../Components/Persons/Persons";

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
    let persons = null;
    let buttonClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      buttonClasses.push(classes.Red);
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
          className={buttonClasses.join(" ")}
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
