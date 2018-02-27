import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Game from "./components/Game";
import Home from "./components/Home";
import Win from "./components/Win";

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Nav />
            <Route exact path="/win" component={Win} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/"component={Home} />
          </div>
      </Router>
    );
  }
}

export default App;
