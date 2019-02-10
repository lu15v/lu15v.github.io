import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from './header/Header';
import NavBar from './navBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Luis Ballinas" major="Software Engineer" desc="some brief desc"></Header>
        <NavBar nLink="4"></NavBar>
      </div>
    );
  }
}

export default App;
