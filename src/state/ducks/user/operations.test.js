'use strict'

import * as operations from './operations'

describe('user.operations', function () {
  it('should export functions', function () {
    expect(Object.keys(operations)).toEqual(['userFetch', 'userSetup', 'userUpdate'])
  })
})
