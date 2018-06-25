 import React, { Component } from 'react';
 import Welcome from './Welcome';
 import Menu from './Menu';
import logo from './logo.svg';
 import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Digital Cru</h1>
          <Welcome name='Kashif'/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Digtal Cru 2</h1>
        <Welcome name='Murtza'/>
        <Welcome name='Hafiz'/>
        <Menu label='Menu' />

      </div>
    );
  }
}


 export default App;

