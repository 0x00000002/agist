import React from 'react'
import PropTypes from 'prop-types'

const CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/xml/xml')
require('codemirror/mode/markdown/markdown')
require('codemirror/lib/codemirror.css')

const options = {
  lineNumbers: true,
  mode: 'javascript'
}

export const Code = ({ theCode }) => <CodeMirror value={theCode} options={options} />

Code.propTypes = {
  theCode: PropTypes.string.isRequired
}

export default Code
