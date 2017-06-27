import _ from 'lodash'
import {createAction} from 'redux-actions'
import {dispatch} from 'store'
import * as types from './types.js'

const actions = Object.keys(types).map(key => (
  {
    [_.camelCase(key)]: createAction(types[key]),
  }
)).reduce(_.merge, {})

const lift = funct => args => dispatch(funct(args))

// add id for alert:
// not start at 0 because can be false
let alertId = 1;
const addAlertId = () => alertId++

// dispatch action type
export const selectBook = lift(actions.bookSelected)
export const addBook = lift(actions.addBook)
export const setModal = lift(actions.setModal)
export const dismissModal = lift(actions.dismissModal)
export const setAlert = payload =>
  lift(actions.setAlert)({...payload, ...{id: addAlertId()}})
export const dismissAlert = lift(actions.dismissAlert)
