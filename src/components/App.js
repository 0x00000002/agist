import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary from '../helpers/errorBoundary'
import errors from '../helpers/errorHandling'

class App extends Component {
  state = {
    code: this.props.ipfs && this.props.ipfs.data && this.props.ipfs.data.code
  }
  handleChange = (code) => this.setState({ code })

  async componentDidMount () {
    await this.props.gistGetAddress(this.props.location.pathname)
    await this.props.ipfsFetch(this.props.ipfs.data.address)
  }

  render () {
    const { ipfs: { data: { code, address } } } = this.props

    return (
      <ErrorBoundary reason={errors.others}>
        { !code && <span className={'loading'}>Loading gist, please wait ...</span> }
        { code &&
          <div>
            <Header address={address} code={this.state.code} updater={this.props.ipfsUpdate} />
            <Code code={code} handler={this.handleChange} />
          </div>
        }
      </ErrorBoundary>
    )
  }
}

export default App
