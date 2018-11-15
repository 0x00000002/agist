import React from 'react'
import PropTypes from 'prop-types'
import Code from './Code'

const R = require('ramda')

export const firstPathSegment = R.compose(R.nth(1), R.split('/')) // element 0 is empty after split ('/URI')

export const View = ({ location: { pathname: path } }) => {
  const permalink = firstPathSegment(path)

  return (
    <div>
      <header>
        <h1>Gist <span className={'gistName'}>{permalink}</span></h1>
      </header>
      <Code theCode={permalink} />
    </div>
  )
}

View.propTypes = {
  location: PropTypes.object.isRequired
}

export default View
