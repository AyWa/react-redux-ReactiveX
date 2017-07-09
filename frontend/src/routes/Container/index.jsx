import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddBook from 'components/Book/Add';
import BookList from 'components/Book/List';
import NotFound from 'components/Errors/404'

import 'styles/common.scss'

const element = 'routes-content'
export default class Container extends Component {

  render() {
    return (
      <div className={element}>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route exact path="/add" component={AddBook} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
