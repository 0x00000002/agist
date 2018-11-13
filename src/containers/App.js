import React from 'react'
import { Route, Switch } from 'react-router-dom'
import pageNotFound from '../components/pageNotFound'
import ErrorBoundary, { errors } from '../errorBoundary'
import Dashboard from '../components/Dashboard'

const App = () => (
  <ErrorBoundary reason={errors.others}>
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='*' component={pageNotFound} />
    </Switch>
  </ErrorBoundary>
)

export default App
