import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from 'actions';
import image from 'images/plan.png'
import BookDetail from './book-detail';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          <button onClick={_ => selectBook(book)}>
            {book.title}
          </button>
        </li>
      );
    })
  }
  render() {
    return (
      <div>
        <ul className="list-group col-md-4">
          {this.renderList()}
        </ul>
        <BookDetail />
        <img src={image} alt="yolo" />
      </div>
    )
  }
}

export default connect(
  state => (
    {
      books: state.books,
    }
  ),
)(BookList);
