import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Rahul", lastName: "Sen" },

      company: "Mindfire",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {this.state.name.firstName} {this.state.name.lastName}{" "}
            and I am working in {this.state.company}!!
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  // its a updater function
                  return { name: { firstName: "Riyan", lastName: "Sen" } };
                },
                () => {
                  // its the callback after the update function is done
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
