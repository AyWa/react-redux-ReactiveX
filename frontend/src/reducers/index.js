import ApolloClient from 'api/graphql'
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
// app reducer
import books from './reducer_books';
import activeBook from './reducer_active_book';
import modals from './modals';
import alerts from './alerts';

const rootReducer = combineReducers({
  books,
  activeBook,
  modals,
  alerts,
  router: routerReducer,
  form: formReducer,
  apollo: ApolloClient.reducer(),
});

export default rootReducer;
