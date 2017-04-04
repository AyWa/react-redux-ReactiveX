import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  router: routerReducer,
});

export default rootReducer;
