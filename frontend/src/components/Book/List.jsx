import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from 'actions';
import BookDetail from './Detail';


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
