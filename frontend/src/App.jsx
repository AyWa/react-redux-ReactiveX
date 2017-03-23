import yolo from 'images/plan.png';
import React, { Component } from 'react';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';
import aa from './utilities/api'

export * from './app.scss';

export default class App extends Component {
  render() {
    aa();
    return (
      <div className="yolo">
        <BookList />
        <BookDetail />
        <img src={yolo} alt="yolo" />
      </div>
    );
  }
}
