import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { errors } from '../settings'
import ErrorBoundary from '../errorBoundary'
import CodeMirror from 'react-codemirror'
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/xml/xml')
require('codemirror/mode/markdown/markdown')
require('codemirror/lib/codemirror.css')

const options = {
  lineNumbers: true,
  mode: 'javascript'
}

class Code extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: this.props.code || '/* ES5 highlighting only */'
    }
  }

  render () {
    return (
      <ErrorBoundary reason={errors.codeMirror}>
        <CodeMirror
          value={this.state.code}
          options={options}
        />
      </ErrorBoundary>
    )
  }
}

Code.propTypes = {
  code: PropTypes.string.isRequired
}

export default Code
