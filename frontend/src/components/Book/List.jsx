import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from 'actions';
import { graphql } from 'react-apollo';
import { getRepository } from 'api/graphql/repository'
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
  renderFeed() {
    return this.props.data.feed.map((repository) => {
      return (
        <li key={repository.postedBy.login} className="list-group-item">
          <div>
            login: {repository.postedBy.login}
          </div>
          <div>
            repo: {repository.repository.name}
          </div>
        </li>
      );
    })
  }
  render() {
    const {
      feed,
    } = this.props.data

    return (
      <div>
        <ul className="list-group col-md-4">
          {this.renderList()}
        </ul>
        <BookDetail />
        <ul className="list-group col-md-4">
          {feed ? this.renderFeed() : ''}
        </ul>
      </div>
    )
  }
}

const BookListQl = graphql(getRepository)(BookList)

export default connect(
  state => (
    {
      books: state.books,
    }
  ),
)(BookListQl);
