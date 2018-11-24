import React, { Component } from 'react';
import AppNavbar from './Components/Navbar';
import BodyForm from './Components/BodyForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <BodyForm />
      </div>
    );
  }
}

export default App;
