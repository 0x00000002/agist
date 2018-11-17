import { connect } from 'react-redux'
import App from '../components/App'
import { ipfsOperations } from '../state/ducks/ipfs'

export const mapStateToProps = state => ({
  ipfs: state.ipfs
})

export const mapDispatchToProps = {
  gistGetAddress: ipfsOperations.gistGetAddress,
  ipfsFetch: ipfsOperations.ipfsFetch,
  ipfsUpdate: ipfsOperations.ipfsUpdate,
  ipfsSetup: ipfsOperations.ipfsSetup
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
