'use strict'

import * as types from './types'

describe('user.types', function () {
  it('should export types', function () {
    expect(types).toEqual({
      USER_FETCH: 'agist/USER_FETCH',
      USER_FETCH_COMPLETED: 'agist/USER_FETCH_COMPLETED',
      USER_FETCH_FAILED: 'agist/USER_FETCH_FAILED',
      USER_SETUP: 'agist/USER_SETUP',
      USER_SETUP_COMPLETED: 'agist/USER_SETUP_COMPLETED',
      USER_SETUP_FAILED: 'agist/USER_SETUP_FAILED',
      USER_UPDATE: 'agist/USER_UPDATE',
      USER_UPDATE_COMPLETED: 'agist/USER_UPDATE_COMPLETED',
      USER_UPDATE_FAILED: 'agist/USER_UPDATE_FAILED'
    })
  })
})
