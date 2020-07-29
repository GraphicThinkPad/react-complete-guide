import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js], shouldComponentUpdate ");
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          age={person.age}
        />
      );
    });
  }
}

export default Persons;
