import React from "react";
import styles from "./Cockpit.css";

const cockpit = (props) => {
  let assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  let buttonClasses = [styles.Button];
  if (props.showPersons) {
    buttonClasses.push(styles.Red);
  }

  return (
    <div>
      <h1>Hi, I'm a React App!</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        alt={props.showPersons}
        onClick={props.clicked}
        className={buttonClasses.join(" ")}
      >
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
