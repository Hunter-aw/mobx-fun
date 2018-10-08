import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import IcecreamForm from './IcecreamForm';

@inject(allStores => ({
  deleteIceCream: allStores.store.deleteIceCream,
  iceCreams: allStores.store.iceCreams
}))
@observer
class App extends Component {
  deleteIceCream = (e) => {
    this.props.deleteIceCream(e.target.previousSibling.data)
  }
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mobx</h1>
          <IcecreamForm/>
          <ul>
            {this.props.iceCreams.map((iceCreams, i)=>
                <li key={i} 
                    style={{color: iceCreams.color}}>
                    {iceCreams.flavor} 
                    <button onClick = {this.deleteIceCream}>Delete</button>
                    </li>)}
          </ul>
      </div>
    );
  }
}

export default App;
