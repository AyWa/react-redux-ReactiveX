import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookAddForm from 'forms/BookAdd'
import {addBook} from 'actions'

class AddBook extends Component {
  render() {
    return (
      <BookAddForm onFormSubmit={this.props.addBook} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addBook}, dispatch);
}
export default connect(state => state, mapDispatchToProps)(AddBook);
