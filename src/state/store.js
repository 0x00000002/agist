import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'
import { apiService, createLogger } from './middlewares'
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'

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
    )
  )
}
