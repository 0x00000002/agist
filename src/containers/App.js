import { connect } from 'react-redux'
import App from '../components/App'
import { userOperations } from '../state/ducks/user'

export const mapStateToProps = state => ({
  user: state.user,
})

export const mapDispatchToProps = {
  userFetch: userOperations.userFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
