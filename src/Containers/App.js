import React, { Component } from "react";
import styles from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "as", name: "Max", age: 28 },
      { id: "sd", name: "Kory", age: 25 },
      { id: "id", name: "Sydney", age: 25 },
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props)
    return props
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

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
    console.log("[App.js] rendering...")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        : null}
        {persons}
      </div>
    );
    // ^ The above and below are the same
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does this work now?"))
  }
}

export default App;
