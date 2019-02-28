import React, { Component } from 'react';

import './App.css';
import Cabecera from './components/Cabecera';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Cabecera />
      <p className="App-intro">
        Hola mundo
      </p>
      </div>
    );
  }
}

export default App;
