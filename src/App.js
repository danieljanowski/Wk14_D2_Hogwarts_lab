import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HogwartsContainer from './containers/HogwartsContainer';

class App extends Component {
  render() {
    return(
      <>
        <h1>Harry Potter Characters</h1>
        <HogwartsContainer />
      </>
    )
  };
}

export default App;
