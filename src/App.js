import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Flickr Rainbow</h2>
            <div className="inline">
            <p > Search for something on Flickr and we will get you a rainbow of it</p>
                <a href="https://jscardona12.github.io/MyWebPage/ " > by Juan Sebastian Cardona </a>
            </div>
            <input type="text"> </input>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
