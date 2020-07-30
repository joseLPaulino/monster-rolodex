import React, { Component } from "react";
import "./App.css";
import { Cardlist } from "./components/card-list/list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json(response))
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
          <h1>Monster Rolodex</h1>
        <SearchBox
            placeholder="search robot"
            handleChange = {this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
