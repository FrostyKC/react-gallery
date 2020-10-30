import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
        <img src="images/packers.png" />
        <img src="images/Old_School_RuneScape_logo.png" />
        <img src="images/Ezreal.jpg" />
      </div>
    );
  }
}

export default App;
