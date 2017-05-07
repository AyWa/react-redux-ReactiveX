import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'reusable/UI/Button'
import {InputField} from 'reusable/UI/Input'

const validate = (values) => {
  const errors = {}
  if (!values.nameBook) {
    errors.nameBook = 'Required'
  }
  return errors
}

const warn = (values) => {
  const warnings = {}
  if (values.nameBook && values.nameBook.length < 5) {
    warnings.nameBook = 'Hmm, you book name is bit short...'
  }
  return warnings
}

const renderField = (props) => {
  // const {
  //   input,
  //   label,
  //   type,
  //   meta: {
  //     touched,
  //     error,
  //     warning,
  //   },
  // } = props
  // console.log(props);
  return (
    <InputField {...props} />
    // <div>
    //   <label htmlFor={label}>{label}</label>
    //   <div>
    //     <Input {...input} placeholder={label} type={type} />
    //     {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    //   </div>
    // </div>
  )
}

class AddBookForm extends Component {
  render() {
    const {
      handleSubmit,
      onFormSubmit,
    } = this.props;
    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <h3>Add a book</h3>
        <Field name="nameBook" component={renderField} type="text" label="nameBook" />
        <Button type="submit" title="Submit" />
      </form>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'addBook', // a unique name for this form
  validate,
  warn,
})(AddBookForm);
