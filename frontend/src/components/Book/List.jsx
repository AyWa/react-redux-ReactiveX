import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook, setModal, setAlert} from 'actions';
import { graphql } from 'react-apollo';
import { getRepository } from 'api/graphql/repository'
import {color, size} from 'utilities/types'
import Button from 'reusable/UI/Button'
import Tag from 'reusable/UI/Tag'
import Progress from 'reusable/UI/Progress'
import {TEST} from 'utilities/modals'
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
        <Button
          title="test modal"
          color={color.primary}
          onClick={_ => setModal({
            modal: TEST,
          })}
        />
        <Button
          title="test alert"
          isOutlined
          color={color.danger}
          onClick={_ => setAlert({
            header: `hey dd`,
            body: 'this is a strong error',
            modifier: color.danger,
          })}
        />
        <Tag
          title="test click"
          color={color.danger}
          onClick={e => console.log(e)}
        />
        <Tag
          title="test click"
          color={color.primary}
        />
        <Progress
          value={200}
          max={1000}
          color={color.primary}
          size={size.small}
        />
        <Progress
          value={50}
          max={100}
          color={color.info}
        />
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
