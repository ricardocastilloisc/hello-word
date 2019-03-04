import React, {Component} from 'react';

export default class FormularioSimple extends Component {
  state = {};
  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState ({[name]: value});
  };

  imprimir = () =>
  {
      console.log(this.state);
  }
  render () {
    return (
      <form>
        <input name="nombre" onChange={this.handleChange} />
        <input name="apellido" onChange={this.handleChange} />
        <button type="button" onClick={this.imprimir}>Click Me!</button>
      </form>
    );
  }
}
