import React, { useState } from 'react'
import PropTypes from 'prop-types'
import errors from '../helpers/errorHandling'
import ErrorBoundary from '../helpers/errorBoundary'

export default function Header ({ address, code, updater: save }) {
  const [buttonStatus, setButtonStatus] = useState(false)
  const [buttonName, setButtonName] = useState('Save')
  const saveCode = async () => {
    setButtonStatus(true)
    setButtonName('Saving...')
    await save(code)
    setButtonName('Save')
    setButtonStatus(false)
  }

  return (
    <ErrorBoundary reason={errors.header}>
      <h1>Gist <span className={'status'}>{address}</span></h1>
      <button
        onClick={() => saveCode()}
        disabled={buttonStatus}
      >{buttonName}
      </button>
    </ErrorBoundary>
  )
}

Header.propTypes = {
  address: PropTypes.string.isRequired,
  code: PropTypes.string,
  updater: PropTypes.func
}
