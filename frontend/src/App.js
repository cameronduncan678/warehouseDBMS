import React, { Component } from 'react';
import './assets/css/App.css';

//Components
import Header from './components/Header';
import Dashboard from './components/Dasboard';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
