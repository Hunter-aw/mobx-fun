import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mobx</h1>
          <ul>
            {this.props.store.iceCreams.map((iceCreams, i)=><li key={i}>{iceCreams.flavor}</li>)}
          </ul>
      </div>
    );
  }
}

export default App;
