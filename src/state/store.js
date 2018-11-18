import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'
import { apiService, createLogger } from './middlewares'
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'
import ipfsBundle from 'ipfs-redux-bundle'

export default function configureStore (initialState) {
  const rootReducer = combineReducers(reducers)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        apiService,
        thunk,
        createLogger(true),
        immutableStateInvariantMiddleware()
      )
    ),
    ipfsBundle({
      // These are the defaults:
      tryCompanion: true, // set false to bypass ipfs-companion verification
      tryWindow: true, // set false to bypass window.ipfs verification
      tryApi: true, // set false to bypass js-ipfs-api verification. Uses data from ipfsApi variable in localStorage
      tryJsIpfs: false, // set true to attempt js-ipfs initialisation.
      getJsIpfs: null // must be set to a js-ipfs instance if tryJsIpfs is true.
    })
  )
}
