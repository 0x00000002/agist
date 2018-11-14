import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorBoundary, { errors } from '../errorBoundary'
import Main from './Main'
import View from './View'
import pageNotFound from '../components/pageNotFound'

const App = () => (
  <ErrorBoundary reason={errors.others}>
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/*' component={View} />
      <Route component={pageNotFound} />
    </Switch>
  </ErrorBoundary>
)

export default App
