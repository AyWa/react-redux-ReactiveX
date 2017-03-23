import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from 'actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
        >
          <button onClick={_ => this.props.selectBook(book)}>
            {book.title}
          </button>
        </li>
      );
    })
  }
  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}
// Anything return from this funciton will end up as props
// on the Booklist container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to all of our reducers
  return bindActionCreators({selectBook}, dispatch);
}
// Promote BookList from a component top a container
// it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
