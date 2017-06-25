import {handleActions} from 'redux-actions';
import {
  SET_MODAL,
  DISMISS_MODAL,
} from 'actions/types'

export const initialState = {}

export default handleActions({
  [SET_MODAL]: (_, action) => action.payload,
  [DISMISS_MODAL]: _ => initialState,
}, initialState)
