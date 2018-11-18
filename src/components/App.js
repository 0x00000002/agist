import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary from '../helpers/errorBoundary'
import errors from '../helpers/errorHandling'

class App extends Component {
  saveFunc = () => this.props.ipfsUpdate(this.state.code)
  handleChange = (code) => this.setState({ code })

  async componentDidMount () {
    await this.props.gistGetAddress(this.props.location.pathname)
  }

  render () {
    const { ipfs, ipfsSetup, ipfsFetch } = this.props
    const data = ipfs && ipfs.data
    const componentReady = Boolean(data !== undefined)

    const gist = data && data.address
    const code = data && data.code

    gist === '' && ipfsSetup()
    gist && ipfsFetch(gist)

    return (
      <ErrorBoundary reason={errors.others}>
        { !componentReady && <span className={'loading'}>Loading data, please wait ...</span> }
        { componentReady && <Header gist={gist} code={code} saver={this.saveFunc} /> }
        { componentReady && <Code code={code} handler={this.handleChange} /> }
      </ErrorBoundary>
    )
  }
}

export default App
