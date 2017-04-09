import {handleActions} from 'redux-actions';
import {
  BOOK_SELECTED,
  BOOK_RESET,
} from 'actions/types'

export default handleActions({
  [BOOK_SELECTED]: (_, action) => action.payload,
  [BOOK_RESET]: _ => null,
}, null)
