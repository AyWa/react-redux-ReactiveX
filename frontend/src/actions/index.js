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

export const selectBook = lift(actions.bookSelected);
export const addBook = lift(actions.addBook);
