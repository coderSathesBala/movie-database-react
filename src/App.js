import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js'
import Home from './Home.js'
import Practice from './Practice.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Practice />
        <header className="App-header">

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
