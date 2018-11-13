import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { sessionOperations } from '../state/ducks/session'
import { userOperations } from '../state/ducks/user'

export const mapStateToProps = state => ({
  session: state.session,
  user: state.user
})

export const mapDispatchToProps = {
  userFetch: userOperations.userFetch,
  sessionTokenGet: sessionOperations.sessionTokenGet
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
