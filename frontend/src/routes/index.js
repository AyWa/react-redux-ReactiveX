import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from 'store'
import NotFound from 'components/Errors/404';
import Container from './Container';

export default class App extends Component {
  render() {
    return (
      <div>
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
