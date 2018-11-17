import * as types from './types'
const R = require('ramda')

// we need the second element, because:
// element 0 is empty after split ('/URI')
const getFirstSegment = R.compose(R.nth(1), R.split('/'))
const gistAddress = path => getFirstSegment(path)

export const ipfsFetch = (address) => ({
  type: types.IPFS_FETCH,
  meta: {
    async: true,
    blocking: true,
    path: '/ipfs',
    method: 'GET',
    body: { address }
  }
})

export const ipfsSetup = (address) => ({
  type: types.IPFS_SETUP,
  meta: {
    async: true,
    blocking: true,
    path: '/ipfs/setup',
    method: 'PUT',
    body: { address }
  }
})

export const ipfsUpdate = (address, code) => ({
  type: types.IPFS_UPDATE,
  meta: {
    async: true,
    blocking: true,
    path: '/ipfs/update',
    method: 'PUT',
    body: { address, code }
  }
})

export const gistGetAddress = (path) => async dispatch => {
  dispatch({
    type: types.IPFS_GETADDRESS
  })

  const address = gistAddress(path)

  dispatch({
    type: types.IPFS_GETADDRESS_COMPLETED,
    payload: {
      address
    }
  })
}
