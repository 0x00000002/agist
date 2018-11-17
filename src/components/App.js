import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary, { errors } from '../helpers/errorBoundary'
import { gistAddress, fetchCode } from './Fetch'

class App extends Component {
  render () {
    const pathname = this.props && this.props.location && this.props.location.pathname
    const gist = gistAddress(pathname)
    const code = fetchCode(gist)

    function saveFunc () {
      alert('saved')
    }

    function handleChange () {
      return true
    }

    return (
      <ErrorBoundary reason={errors.others}>
        <Header gist={gist} code={code} saver={saveFunc} />
        <Code code={code} handler={handleChange} />
      </ErrorBoundary>
    )
  }
}

export default App
