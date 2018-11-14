import React from 'react'
import PropTypes from 'prop-types'

export const Code = ({ theCode }) => <section><code>{theCode}</code></section>

Code.propTypes = {
  theCode: PropTypes.string.isRequired
}

export default Code
