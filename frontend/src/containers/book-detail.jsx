import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>select a book to get started :)</div>;
    }
    return (
      <div>
        {this.props.book.title}
      </div>
    );
  }
}

export default connect(
  state => (
    {
      book: state.activeBook,
    }
  ),
)(BookDetail);
