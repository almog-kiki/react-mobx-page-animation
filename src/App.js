import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import './App.scss';
import DefaultLayout  from './containers/DefaultLayout';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>            
              <Route  path="/" name="Home" component={withRouter(DefaultLayout)} />
            </Switch>
        </Router>
    );
  }
}

export default App;
