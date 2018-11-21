import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary from '../helpers/errorBoundary'
import errors from '../helpers/errorHandling'
const IPFS = require('nano-ipfs-store')

class App extends Component {
  saveFunc = async () => {
    const ipfs = IPFS.at('https://ipfs.infura.io:5001')
    const cid1 = await ipfs.add(this.state.code)
    alert(cid1)
    // this.props.ipfsUpdate(this.state.code)
  }
  handleChange = (code) => this.setState({ code })

  async componentDidMount () {
    await this.props.gistGetAddress(this.props.location.pathname)
    await this.props.ipfsFetch(this.props.ipfs.data.address)

  }

  render () {
    const { ipfs: { data } } = this.props
    const address = data && data.address
    const code = data && data.code

    return (
      <ErrorBoundary reason={errors.others}>
        { !code && <span className={'loading'}>Loading data, please wait ...</span> }
        { code &&
          <div>
            <Header address={address} code={code} saver={this.saveFunc} />
            <Code code={code} handler={this.handleChange} />
          </div>
        }
      </ErrorBoundary>
    )
  }
}

export default App
