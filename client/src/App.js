import React, { Component } from 'react';
import AppNavbar from './Components/Navbar';
import BodyForm from './Components/BodyForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({ data });
    console.log('app level', data);
  }

  render() {
    return (
      <div className="App">
        <AppNavbar sendData={d => this.handleData(d)} />
        <BodyForm data={this.state.data} />
      </div>
    );
  }
}

export default App;
