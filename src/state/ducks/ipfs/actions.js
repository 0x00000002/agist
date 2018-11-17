import * as types from './types'

export const ipfsFetch = () => ({
  type: types.IPFS_FETCH,
  meta: {
    async: true,
    blocking: true,
    path: '/ipfs',
    method: 'GET'
  }
})

export const ipfsSetup = (gist) => ({
  type: types.IPFS_SETUP,
  meta: {
    async: true,
    blocking: true,
    path: '/ipfs/setup',
    method: 'PUT',
    body: { gist }
  }
})

export const ipfsUpdate = (code) => ({
  type: types.IPFS_UPDATE,
  meta: {
    async: true,
    blocking: true,
    path: '/ipfs/update',
    method: 'PUT',
    body: { code }
  }
})
