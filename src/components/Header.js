import React from 'react'
import PropTypes from 'prop-types'
import errors from '../helpers/errorHandling'
import ErrorBoundary from '../helpers/errorBoundary'
// const IPFS = require('nano-ipfs-store')
// const ipfs = IPFS.at('https://ipfs.infura.io:5001')
// const cid1 = await ipfs.add("hello world")
// console.log(cid1)

const Header = ({ address, code, saver }) => {
  return (
    <ErrorBoundary reason={errors.header}>
      <h1>Gist <span className={'gistName'}>{address}</span></h1>
      <button
        onClick={(code) => saver(code)}
      >Save</button>
    </ErrorBoundary>
  )
}

Header.propTypes = {
  gist: PropTypes.string,
  code: PropTypes.string,
  saver: PropTypes.func.isRequired
}

export default Header
