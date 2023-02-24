import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: "linda",
        },
        {
          id: 2,
          name: "Frank",
        },
        {
          id: 3,
          name: "Jacky",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {/* using map to iterate the array  */}
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
