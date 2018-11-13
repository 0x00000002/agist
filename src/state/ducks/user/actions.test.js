'use strict'

import * as actions from './actions'
import * as types from './types'

describe('user.actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual(['userFetch', 'userSetup', 'userUpdate'])
  })

  describe('userFetch', function () {
    it('should return a USER_FETCH action', function () {
      expect(actions.userFetch('fake-id-token')).toEqual({
        type: types.USER_FETCH,
        meta: {
          async: true,
          blocking: true,
          path: '/user',
          method: 'GET',
          auth: 'fake-id-token'
        }
      })
    })
  })

  describe('userSetup', function () {
    it('should return a USER_FETCH action', function () {
      expect(actions.userSetup('fake-id-token')).toEqual({
        type: types.USER_SETUP,
        meta: {
          async: true,
          blocking: true,
          path: '/user/setup',
          method: 'PUT',
          auth: 'fake-id-token',
          body: {
            'ethereumAddress': undefined,
            'termsAccepted': undefined,
            'userData': undefined
          }
        }
      })
    })
  })

  describe('userUpdate', function () {
    it('should return a USER_FETCH action', function () {
      expect(actions.userUpdate('fake-id-token')).toEqual({
        type: types.USER_UPDATE,
        meta: {
          async: true,
          blocking: true,
          path: '/user/update',
          method: 'PUT',
          auth: 'fake-id-token',
          body: {
            'ethereumAddress': undefined
          }
        }
      })
    })
  })
})
