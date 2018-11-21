import React from 'react'
import PropTypes from 'prop-types'
import errors from '../helpers/errorHandling'
import ErrorBoundary from '../helpers/errorBoundary'
import CodeMirror from 'react-codemirror'
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/xml/xml')
require('codemirror/mode/markdown/markdown')
require('codemirror/lib/codemirror.css')

const options = {
  lineNumbers: true,
  mode: 'javascript'
}

const Code = ({ code, handler }) => {
  return (
    <ErrorBoundary reason={errors.codeMirror}>
      <CodeMirror
        value={code}
        options={options}
        onChange={(code) => handler(code)}
      />
    </ErrorBoundary>
  )
}

Code.propTypes = {
  code: PropTypes.string
}

export default Code
