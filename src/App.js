import React, { Component } from 'react';
import './App.css';
import MainBase from './main/MainBase.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBase.BaseCompos />
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
