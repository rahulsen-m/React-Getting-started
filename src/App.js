import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // life cycle method
  // this will call once , when component will be mounted to the dom for the first time.
  // we will add our api fetching code here
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {/* using map to iterate the array  */}
        {filteredMonsters.map((monster) => {
          return (
            <div
              style={{ border: "1px solid black", marginTop: "5px" }}
              key={monster.id}
            >
              <h2>{monster.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
