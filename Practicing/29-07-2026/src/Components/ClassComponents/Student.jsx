import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abdul",
      age: 20
    };
  }

  increaseAge = () => {
    this.setState({
      age: this.state.age + 1
    });
  };

  render() {
    return (
      <div>
        <h2>Student Details</h2>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>

        <button onClick={this.increaseAge}>
          Increase Age
        </button>
      </div>
    );
  }
}

export default Student;
