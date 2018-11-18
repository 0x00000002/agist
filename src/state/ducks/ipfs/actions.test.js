'use strict'

import * as actions from './actions'
import * as types from './types'

describe('ipfs.actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'ipfsFetch',
      'ipfsSetup',
      'ipfsUpdate',
      'gistGetAddress'
    ])
  })

  describe('ipfsFetch', function () {
    it('should return a IPFS_FETCH action', function () {
      expect(actions.ipfsFetch('fake-address')).toEqual({
        type: types.IPFS_FETCH,
        meta: {
          async: true,
          blocking: true,
          path: '/data/testAuthentication',
          method: 'GET',
          body: { address: 'fake-address' }
        }
      })
    })
  })

  describe('ipfsSetup', function () {
    it('should return a IPFS_FETCH action', function () {
      expect(actions.ipfsSetup()).toEqual({
        type: types.IPFS_SETUP,
        meta: {
          async: true,
          blocking: true,
          path: '/data/testAuthentication',
          method: 'GET'
        }
      })
    })
  })

  describe('ipfsUpdate', function () {
    it('should return a IPFS_FETCH action', function () {
      expect(actions.ipfsUpdate('fake-address', 'fake-code')).toEqual({
        type: types.IPFS_UPDATE,
        meta: {
          async: true,
          blocking: true,
          path: '/pinning/pinFileToIPFS',
          method: 'POST',
          body: {
            'address': 'fake-address',
            'code': 'fake-code'
          }
        }
      })
    })
  })
})
