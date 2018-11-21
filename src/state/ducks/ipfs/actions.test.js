'use strict'

import * as actions from './actions'
import * as types from './types'
import { gistAddress } from './actions'

describe('ipfs.actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'gistAddress',
      'ipfsFetch',
      'ipfsSetup',
      'ipfsUpdate',
      'gistGetAddress'
    ])
  })

  describe('ipfsFetch', function () {
    it('should return an IPFS_FETCH action', function () {
      expect(actions.ipfsFetch('fake-address')).toEqual({
        type: types.IPFS_FETCH,
        meta: {
          async: true,
          blocking: true,
          path: '/api/v0/cat?arg=fake-address',
          method: 'GET'
        }
      })
    })
    it('should return IPFS_FETCH_COMPLETE action on empty address', function () {
      expect(actions.ipfsFetch('')).toEqual({
        type: types.IPFS_FETCH_COMPLETED
      })
    })
  })

  describe('ipfsSetup', function () {
    it('should return an IPFS_SETUP action', function () {
      expect(actions.ipfsSetup()).toEqual({
        type: types.IPFS_SETUP,
        meta: {
          async: true,
          blocking: true,
          path: '/api/v0/version',
          method: 'GET'
        }
      })
    })
  })

  describe('ipfsUpdate', function () {
    it('should return an IPFS_UPDATE action', function () {
      const res = actions.ipfsUpdate('fake-address', 'fake-code')
      expect(res).toEqual({
        type: types.IPFS_UPDATE_COMPLETED,
        payload: {
          address: 'fake-address',
          code: 'fake-code'
        }
      })
    })
  })

  describe('gistGetAddress', function () {
    it('should parse path correctly', function () {
      expect(gistAddress('/fake-path')).toEqual('fake-path')
    })

    it('should return an IPFS_GETADDRESS_COMPLETED action', function () {
      const res = actions.gistGetAddress('/fake-address')
      expect(res).toEqual({
        type: types.IPFS_GETADDRESS_COMPLETED,
        payload: {
          address: 'fake-address'
        }
      })
    })
  })
})
