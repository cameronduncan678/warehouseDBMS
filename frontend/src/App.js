import React, { Component } from 'react';
import './assets/css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components
import Header from './components/Header';
import Dashboard from './components/Dasboard';
import Database from './components/Database';
import Items from './components/Items';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/database" component={Database} />
            <Route path="/items" component={Items} />
          </Switch>
        </Router >
      </div>
    );
  }
}

export default App;
