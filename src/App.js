import React, {Component} from 'react';
import axios from 'axios';
import FormularioSimple from './components/FormularioSimple';
import {stringify} from 'postcss';

class App extends Component {
  constructor () {
    super ();

    axios.post('https://jsonplaceholder.typicode.com/users',{
      name: 'Ricardo',
      username: 'richar',
    })
    .then(({data}) => {
      console.log(data)
    })
    .catch(err => {
      console.error(err); 
    })

/*     axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({data}) => {
      console.log(data)
    })
    .catch(err => {
      console.error(err); 
    }) */
    //console.log ('aca haremos llamados ajax con fetch');

    //get/post put
    /*    fetch ('https://jsonplaceholder.typicode.com/users')
      .then (x => x.json ())
      .then (x => console.log (x)); */

/*     fetch ('https://jsonplaceholder.typicode.com/users', {
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
  } */
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
