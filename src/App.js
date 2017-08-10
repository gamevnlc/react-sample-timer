import React, { Component } from 'react';
import logo from './assets/logo/cat.png';
import './assets/css/App.css';
import Timer from './timer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lorem Ipsum</h2>
        </div>
        <p className="App-intro">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </p>
        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
