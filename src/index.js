import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './containers/App'
import configureStore from './state/store'
import { errors } from './settings'
import ErrorBoundary from './helpers/errorBoundary'
import * as serviceWorker from './helpers/serviceWorker'

const reduxStore = configureStore()

ReactDOM.render(
  <ErrorBoundary reason={errors.others}>
    <ReduxProvider store={reduxStore}>
      <BrowserRouter >
        <Route path='/*' component={App} />
      </BrowserRouter>
    </ReduxProvider>
  </ErrorBoundary>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
