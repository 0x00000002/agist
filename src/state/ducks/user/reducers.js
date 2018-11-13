import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const userReducer = createReducer(null, {
  [types.USER_FETCH_COMPLETED]: (state, action) => action.payload,
  [types.USER_SETUP_COMPLETED]: (state, action) => action.payload,
  [types.USER_UPDATE_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({
  data: userReducer
})
