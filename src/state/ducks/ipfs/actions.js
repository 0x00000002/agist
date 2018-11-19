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
    path: `/api/v0/get?arg=${address}`,
    method: 'GET'
  }
})

export const ipfsSetup = () => ({
  type: types.IPFS_SETUP,
  meta: {
    async: true,
    blocking: true,
    path: '/api/v0/version',
    method: 'GET'
  }
})

export const ipfsUpdate = (code) => ({
  type: types.IPFS_UPDATE,
  meta: {
    async: true,
    blocking: true,
    path: `/api/v0/add?arg=${code}`,
    method: 'POST'
  }
})

export const gistGetAddress = (path) => async dispatch => {
  const address = gistAddress(path)

  dispatch({
    type: types.IPFS_GETADDRESS_COMPLETED,
    payload: {
      address
    }
  })
}
