import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from 'actions';
import { graphql } from 'react-apollo';
import { getRepository } from 'api/graphql/repository'
import {bookSelector} from 'selectors'
import {safe} from 'utilities'
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
      const repoName = safe(() => repository.repository.name, '')
      const repoPostedByLogin = safe(() => repository.postedBy.login, '')
      return (
        <li
          key={`${repoName}${repoPostedByLogin}`}
          className="list-group-item"
        >
          <div>
            login: {repoPostedByLogin}
          </div>
          <div>
            repo: {repoName}
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
      books: bookSelector(state),
    }
  ),
)(BookListQl);
