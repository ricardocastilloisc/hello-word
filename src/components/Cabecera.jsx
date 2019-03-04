import React, {Component} from 'react';
import logo from '../logo.svg';

const styles = {
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
};

export default class Cabecera extends Component {
  manejaClick = () => {
    const {miau, manejaClick} = this.props;
    manejaClick (miau);
  };

  render () {
    const {miau} = this.props;
    return (
      <header style={styles.header}>
        <img
          onClick={this.manejaClick}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1 onClick={this.manejaClick} className="App-title">
          {miau}
        </h1>
      </header>
    );
  }
}
