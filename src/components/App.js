import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary, { errors } from '../helpers/errorBoundary'
import { gistAddress, fetchCode } from './Fetch'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: ''
    }
  }

  saveFunc = () => {
    console.log(this.state.code + ' saved')
  }

  handleChange = (code) => {
    this.setState({ code })
  }

  render () {
    const pathname = this.props && this.props.location && this.props.location.pathname
    const gist = gistAddress(pathname)
    const code = fetchCode(gist)

    return (
      <ErrorBoundary reason={errors.others}>
        <Header gist={gist} code={code} saver={this.saveFunc} />
        <Code code={code} handler={this.handleChange} />
      </ErrorBoundary>
    )
  }
}

export default App
