import React, { Component } from 'react'
import PropTypes from 'prop-types'
import errors from '../helpers/errorHandling'
import ErrorBoundary from '../helpers/errorBoundary'

class Header extends Component {
  state = {
    button: 'Save',
    isDisabled: false
  }

  render () {
    const { address, code } = this.props

    const saveCode = async () => {
      this.setState({ button: ' saving', isDisabled: true })
      await this.props.updater(code)
      this.setState({ button: 'Save', isDisabled: false })
    }

    return (
      <ErrorBoundary reason={errors.header}>
        <h1>Gist <span className={'status'}>{address}</span></h1>
        <button
          onClick={(e) => saveCode()}
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
