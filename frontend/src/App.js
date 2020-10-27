import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

//Components
import Header from './components/Header';
import Dashboard from './components/Dasboard';
import Database from './components/Database';
import Items from './components/Items';
import Locations from './components/Locations';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/database" component={Database} />
              <Route path="/items" component={Items} />
              <Route path="/locations" component={Locations} />
            </Switch>
          </Router >
        </div>
      </Provider>
    );
  }
}

export default App;
