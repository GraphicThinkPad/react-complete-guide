import React, { Component } from "react";
import styles from "./Person.css";
import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/withClass"
import PropTypes from "prop-types";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      // <div className={styles.Person}>
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
       {/* </div> */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, styles.Person);
