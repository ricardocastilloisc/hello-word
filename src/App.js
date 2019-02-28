import React, {Component} from 'react';

import './App.css';
import Cabecera from './components/Cabecera';
import P from './components/P'

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
        <P>
        {miau}
        </P>
      </div>
    );
  }
}

export default App;
