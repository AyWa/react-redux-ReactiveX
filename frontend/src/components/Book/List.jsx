import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook, setModal, setAlert} from 'actions';
import { graphql } from 'react-apollo';
import { getRepository } from 'api/graphql/repository'
import {color, size} from 'utilities/types'
import Button from 'reusable/UI/Button'
import Tag from 'reusable/UI/Tag'
import Progress from 'reusable/UI/Progress'
import Card from 'reusable/UI/Card'
import Image from 'reusable/UI/Image'
import {TEST} from 'utilities/modals'
import BookDetail from './Detail';

const footer = [
  <a>Save</a>,
  <a>Edit</a>,
  <a>Delete</a>,
]

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
    return this.props.data.feed.map((repository, i) => {
      return (
        <li key={`${repository.postedBy.login}${i}`} className="list-group-item">
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
          title="loading"
          color={color.warning}
          isLoading
        />
        <Button
          title="inverted disabled"
          color={color.success}
          isInverted
          disabled
        />
        <Button
          title="focused"
          color={color.primary}
          isFocused
        />
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
        <Card
          img={
            <Image
              size="4by3"
              src="http://bulma.io/images/placeholders/1280x960.png"
            />
          }
          initialState
          headerTitle="coucou"
          footer={footer}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </Card>
        <br />
        ---limit --
        <Card>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </Card>
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
