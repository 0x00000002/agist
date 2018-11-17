import { connect } from 'react-redux'
import App from '../components/App'
import { ipfsOperations } from '../state/ducks/ipfs'

export const mapStateToProps = state => ({
  ipfs: state.ipfs
})

export const mapDispatchToProps = {
  ipfsFetch: ipfsOperations.ipfsFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
