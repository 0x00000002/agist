import React, { Component } from 'react'
import Code from './Code'
import Header from './Header'
import ErrorBoundary from '../helpers/errorBoundary'
import errors from '../helpers/errorHandling'

class App extends Component {
  saveFunc = () => console.log(this.state.code + ' saved')
  handleChange = (code) => this.setState({ code })

  // async getData () {
  //   const pathname = this.props && this.props.location && this.props.location.pathname
  //   const gist = await gistAddress(pathname)
  //   const code = await fetchCode(gist)
  //   this.setState({ gist, code })
  // }

  componentDidMount () {
    this.props.gistGetAddress(this.props.location.pathname)
    this.props.ipfsFetch(
      this.props.ipfs &&
      this.props.ipfs.data &&
      this.props.ipfs.data.address
    )
  }

  render () {
    const data =
      this.props &&
      this.props.ipfs &&
      this.props.ipfs.data
    const componentReady = Boolean(data)
    const gist = data && data.address
    const code = (data && data.code)

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
