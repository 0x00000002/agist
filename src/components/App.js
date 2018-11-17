import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary, { errors } from '../helpers/errorBoundary'
import { gistAddress, fetchCode } from './Fetch'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '',
      gist: ''
    }
  }

  saveFunc = () => console.log(this.state.code + ' saved')
  handleChange = (code) => this.setState({ code })

  async getData () {
    const pathname = this.props && this.props.location && this.props.location.pathname
    const gist = await gistAddress(pathname)
    const code = await fetchCode(gist)
    this.setState({ gist, code })
  }

  componentDidMount () {
    this.getData()
  }

  render () {
    const { gist, code } = this.state
    const componentReady = gist && code
    return (
      <ErrorBoundary reason={errors.others}>
        { !componentReady && <div>Loading Data...</div> }
        { componentReady && <Header gist={gist} code={code} saver={this.saveFunc} /> }
        { componentReady && <Code code={code} handler={this.handleChange} /> }
      </ErrorBoundary>
    )
  }
}

export default App
