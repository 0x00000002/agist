import { connect } from 'react-redux'
import Main from '../components/Main'
import { userOperations } from '../state/ducks/user'

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = {
  userFetch: userOperations.userFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
