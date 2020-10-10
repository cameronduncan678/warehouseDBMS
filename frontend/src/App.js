import React, { Component } from 'react';
import './assets/css/App.css';

//Components
import Header from './components/Header'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
