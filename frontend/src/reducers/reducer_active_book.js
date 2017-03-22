import { BOOK_SELECTED } from '../actions/types'

// state argument is not app state only the state this reducer is
// responsible for
export default function (state=null, action) {
  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;
    default : return state;
  }
}
