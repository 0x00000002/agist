import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const ipfsReducer = createReducer({}, {
  [types.IPFS_FETCH_COMPLETED]: (state, action) => ({ ...state, code: action.payload }),
  [types.IPFS_SETUP_COMPLETED]: (state, action) => action.payload,
  [types.IPFS_UPDATE_COMPLETED]: (state, action) => action.payload,
  [types.IPFS_GETADDRESS_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ data: ipfsReducer })
