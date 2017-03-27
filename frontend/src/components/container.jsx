import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './navigation';
import AddBook from '../containers/add-book';
import BookList from '../containers/book-list';

export default class Container extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={BookList} />
        <Route exact path="/add" component={AddBook} />
      </div>
    );
  }
}
