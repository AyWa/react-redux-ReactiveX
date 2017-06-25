import {handleActions} from 'redux-actions';
import {
  SET_ALERT,
  DISMISS_ALERT,
} from 'actions/types'

export const initialState = []

export default handleActions({
  [SET_ALERT]: (state, {payload}) => [...state, payload],
  [DISMISS_ALERT]: (state, {payload}) => state.filter(a => a.id !== payload),
}, initialState)
