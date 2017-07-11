import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from 'routes/Landing'
import NotFound from 'routes/NotFound'
import AddBook from 'routes/Add';

import 'styles/common.scss'

const element = 'routes-content'
export default class Container extends Component {

  render() {
    return (
      <div className={element}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/add" component={AddBook} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
