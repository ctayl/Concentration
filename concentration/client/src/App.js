import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/index";
import Game from "./components/Game/index";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Game />
     </div>
    );
  }
}

export default App;
