import React, {Component} from 'react';
import logo from '../logo.svg';
import H1 from './H1';

const styles = {
  header: ({backgroundColor}) => ({
    backgroundColor,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  })
};

export default class Cabecera extends Component {
  state =
  {
    backgroundColor: '#222'
  }
  cambiarColorHeader = () =>
  {
    this.setState({backgroundColor: '#f00'})
  }
  manejaClick = () => {
    const {miau, manejaClick} = this.props;
    manejaClick (miau);
  };

  render () {
    const {miau} = this.props;
    const {backgroundColor} = this.state;
    return (
      <header onClick={this.cambiarColorHeader} style={styles.header({backgroundColor})}>
        <img
          onClick={this.manejaClick}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <H1 onClick={this.manejaClick}>
          {miau}
        </H1>
      </header>
    );
  }
}
