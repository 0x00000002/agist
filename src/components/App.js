import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary from '../helpers/errorBoundary'
import errors from '../helpers/errorHandling'
// const IPFS = require('nano-ipfs-store')

class App extends Component {
  saveFunc = () => this.props.ipfsUpdate(this.state.code)
  handleChange = (code) => this.setState({ code })

  async componentDidMount () {
    await this.props.gistGetAddress(this.props.location.pathname)
    // const ipfs = IPFS.at('https://ipfs.infura.io:5001')
    // const cid1 = await ipfs.add("hello world")
    // console.log(cid1)
  }

  render () {
    const { ipfs, ipfsSetup, ipfsFetch } = this.props
    const data = ipfs && ipfs.data
    const gist = data && data.address
    const code = data && data.code

    gist && !code && ipfsFetch(gist)

    return (
      <ErrorBoundary reason={errors.others}>
        { !data && <span className={'loading'}>Loading data, please wait ...</span> }
        <Header gist={gist} code={code} saver={this.saveFunc} />
        { code && <Code code={code} handler={this.handleChange} /> }
      </ErrorBoundary>
    )
  }
}

export default App
