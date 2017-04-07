import { combineEpics } from 'redux-observable';
import bookEpic from './book';

export default combineEpics(
  bookEpic,
);
