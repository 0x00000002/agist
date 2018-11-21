import React, { Component } from 'react'
import PropTypes from 'prop-types'
import errors from '../helpers/errorHandling'
import ErrorBoundary from '../helpers/errorBoundary'

class Header extends Component {
  state = {
    button: 'Save',
    isDisabled: false
  }

  async saveCode () {
    this.setState({ button: ' saving', isDisabled: true })
    await this.props.updater(this.props.code)
    this.setState({ button: 'Save', isDisabled: false })
  }

  render () {
    return (
      <ErrorBoundary reason={errors.header}>
        <h1>Gist <span className={'status'}>{this.props.address}</span></h1>
        <button
          onClick={(e) => this.saveCode()}
          disabled={this.state.isDisabled}
        >{this.state.button}
        </button>
      </ErrorBoundary>
    )
  }
}

Header.propTypes = {
  address: PropTypes.string.isRequired,
  code: PropTypes.string,
  updater: PropTypes.func.isRequired
}

export default Header
