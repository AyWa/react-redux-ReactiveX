import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './components/errors/404';
import Container from './components/container';
import aa from './utilities/api';

export * from './app.scss';

export default class App extends Component {
  render() {
    aa();
    return (
      <div className="yolo">
        <Router>
          <div>
            <Switch>
              <Route path="/" component={Container} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
