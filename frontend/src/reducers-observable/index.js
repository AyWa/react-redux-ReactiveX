import { combineEpics } from 'redux-observable';
import bookEpic from './book';
import alerts from './alerts'

export default combineEpics(
  bookEpic,
  alerts,
);
