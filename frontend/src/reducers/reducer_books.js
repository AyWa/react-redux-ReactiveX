import {handleActions} from 'redux-actions';
import {ADD_BOOK} from 'actions/types'

const init = [
  {title: 'Javascript'},
  {title: 'Harry Potter'},
  {title: 'The dark Tower'},
  {title: 'Eloquent Ruby'},
  {title: 'Yolo'},
]

export default handleActions({
  [ADD_BOOK]: (state, action) => [...state, {title: action.payload.nameBook}],
}, init)
