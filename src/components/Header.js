import React from 'react'
import PropTypes from 'prop-types'
import errors from '../settings/errorHandling'
import ErrorBoundary from '../helpers/errorBoundary'

const Header = ({ gist: header = 'new', code, saver }) => {
  return (
    <ErrorBoundary reason={errors.header}>
      <h1>Gist <span className={'gistName'}>{header}</span></h1>
      <button
        onClick={(e) => saver(e)}
      >Save</button>
    </ErrorBoundary>
  )
}

Header.propTypes = {
  gist: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  saver: PropTypes.func.isRequired
}

export default Header
