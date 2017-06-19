import ApolloClient from 'api/graphql'
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
// app reducer
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  router: routerReducer,
  form: formReducer,
  apollo: ApolloClient.reducer(),
});

export default rootReducer;
