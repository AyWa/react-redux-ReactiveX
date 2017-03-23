import yolo from 'images/plan.png';
import React, { Component } from 'react';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';

export * from './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="yolo">
        <BookList />
        <BookDetail />
        <img src={yolo} alt="yolo" />
      </div>
    );
  }
}
