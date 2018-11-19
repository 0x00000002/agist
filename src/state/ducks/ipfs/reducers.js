import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const ipfsReducer = createReducer(null, {
  // [types.IPFS_FETCH_COMPLETED]: (state, action) => action.payload,

  [types.IPFS_FETCH_COMPLETED]: (state, action) => {
    return Object.assign({}, action.payload, { special: 'alex' })
  },

  [types.IPFS_SETUP_COMPLETED]: (state, action) => action.payload,
  [types.IPFS_UPDATE_COMPLETED]: (state, action) => action.payload,
  [types.IPFS_GETADDRESS_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ data: ipfsReducer })
