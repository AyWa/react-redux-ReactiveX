import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store'
import NotFound from './components/errors/404';
import Container from './components/container';
import aa from './api/config';

export * from './app.scss';

export default class App extends Component {
  render() {
    aa();
    return (
      <div className="yolo">
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route path="/" component={Container} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ConnectedRouter>
      </div>
    );
  }
}
