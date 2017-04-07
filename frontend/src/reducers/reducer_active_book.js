import {
  BOOK_SELECTED,
  BOOK_RESET,
} from 'actions/types'

// state argument is not app state only the state this reducer is
// responsible for
export default function (state=null, action) {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;
    case BOOK_RESET:
      return null;
    default : return state;
  }
}
