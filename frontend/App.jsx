import React, { Component } from 'react';
import BookList from './src/containers/book-list';
import BookDetail from './src/containers/book-detail';

export * from './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="yolo">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
