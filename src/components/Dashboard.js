import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

class Dashboard extends Component {
  render () {
    const user = this.props.user && this.props.user.data
    const isRegistered = Boolean(user && user.userData)

    return (
      <div>
        { isRegistered && <Redirect to='/deposit' /> }
        { !isRegistered && <Redirect to='/registration' /> }
      </div>
    )
  }
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
}

export default Dashboard
