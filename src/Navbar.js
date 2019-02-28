import React, { Component } from 'react';
import './Navbar.css';
import netflixLogo from './netflixLogo.jpg'

class Navbar extends Component {
  render() {
    return (
      <div className="App">
      <img src={netflixLogo} className="netflix-logo" alt="netflix-logo" height="50"/>
        <ul>
          <li className="navbar" id="home">Home</li>
          <li className="navbar" id="tv-shows">TV Shows</li>
          <li className="navbar" id="movies">Movies</li>
          <li className="navbar" id="search">Search Bar</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
