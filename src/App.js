import React, {Component} from 'react';

import './App.css';
import Cabecera from './components/Cabecera';

class App extends Component {
  state = {
    miau: 'Bienvenido a miau',
  };

  cambiarTextoDelEstado = () => {
    this.setState({miau: 'hola mundo'});
  };
  manejaClick = texto => {
    console.log(texto);
  };
  render() {
    const {miau} = this.state;

    const texto = 'Bienvenido texto';
    const guau = 'Bienvenido gua';

    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick} />
        <p onClick={this.cambiarTextoDelEstado} className="App-intro">
          {miau}
        </p>
      </div>
    );
  }
}

export default App;
