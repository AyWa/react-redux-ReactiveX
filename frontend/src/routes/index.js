import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'components/Errors/404';
import Container from './Container';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Container} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
