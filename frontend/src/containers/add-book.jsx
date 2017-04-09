import React, { Component } from 'react'
import { connect } from 'react-redux';
import BookAddForm from 'forms/BookAdd'
import {addBook} from 'actions'

class AddBook extends Component {
  render() {
    return (
      <BookAddForm onFormSubmit={addBook} />
    );
  }
}

export default connect(null)(AddBook);
