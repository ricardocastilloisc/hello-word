import React, {Component} from 'react';
import FormularioSimple from './components/FormularioSimple';
import {stringify} from 'postcss';

class App extends Component {
  constructor () {
    super ();
    //console.log ('aca haremos llamados ajax con fetch');

    //get/post put
    /*    fetch ('https://jsonplaceholder.typicode.com/users')
      .then (x => x.json ())
      .then (x => console.log (x)); */

    fetch ('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        name: 'Ricardo',
        username: 'richar',
      }),
    })
      .then (x => x.json ())
      .then (x => console.log (x));
  }

  render () {
    return (
      <div className="App">
        <FormularioSimple />
      </div>
    );
  }
}

export default App;
