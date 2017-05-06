import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddBook from 'components/Book/Add';
import BookList from 'components/Book/List';
import Navbar from 'components/Navbar';

export default class Container extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={BookList} />
        <Route exact path="/add" component={AddBook} />
      </div>
    );
  }
}
