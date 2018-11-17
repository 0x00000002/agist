'use strict'

import * as types from './types'

describe('user.types', function () {
  it('should export types', function () {
    expect(types).toEqual({
      IPFS_FETCH: 'ipfs/IPFS_FETCH',
      IPFS_FETCH_COMPLETED: 'ipfs/IPFS_FETCH_COMPLETED',
      IPFS_FETCH_FAILED: 'ipfs/IPFS_FETCH_FAILED',
      IPFS_SETUP: 'ipfs/IPFS_SETUP',
      IPFS_SETUP_COMPLETED: 'ipfs/IPFS_SETUP_COMPLETED',
      IPFS_SETUP_FAILED: 'ipfs/IPFS_SETUP_FAILED',
      IPFS_UPDATE: 'ipfs/IPFS_UPDATE',
      IPFS_UPDATE_COMPLETED: 'ipfs/IPFS_UPDATE_COMPLETED',
      IPFS_UPDATE_FAILED: 'ipfs/IPFS_UPDATE_FAILED',
      IPFS_GETADDRESS: 'ipfs/IPFS_GETADDRESS',
      IPFS_GETADDRESS_COMPLETED: 'ipfs/IPFS_GETADDRESS_COMPLETED',
      IPFS_GETADDRESS_FAILED: 'ipfs/IPFS_GETADDRESS_FAILED'

    })
  })
})
