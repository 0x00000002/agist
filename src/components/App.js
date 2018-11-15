import React, { Component } from 'react'
import Code from './Code'
import ErrorBoundary, { errors } from '../helpers/errorBoundary'
import gistAddress from './Fetch'

class App extends Component {
  render () {
    const gist = gistAddress(this.props.location.pathname)

    return (
      <ErrorBoundary reason={errors.others}>
        <h1>Create A Gist</h1>
        <Code code={gist} />
      </ErrorBoundary>
    )
  }
}

export default App
