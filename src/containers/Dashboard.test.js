'use strict'

import { connect } from 'react-redux'
import Dashboard, { mapStateToProps, mapDispatchToProps } from './Dashboard'

jest.mock('react-redux', () => ({
  connect: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue({ component: 'fake-component' }))
}))

describe('containers.Dashboard', function () {
  describe('mapStateToProps', function () {
    it('should return a remapped state', function () {
      expect(
        mapStateToProps({ session: 'fake-session', user: 'fake-user' })
      ).toEqual({ session: 'fake-session', user: 'fake-user' })
    })
  })

  describe('mapDispatchToProps', function () {
    it('should return a remapped dispatches', function () {
      expect(Object.keys(mapDispatchToProps)).toEqual([
        'userFetch',
        'sessionTokenGet'
      ])
    })
  })

  describe('Dashboard', function () {
    it('should return a connected component', function () {
      expect(connect.mock.calls[0]).toEqual([
        mapStateToProps,
        mapDispatchToProps
      ])
      expect(Dashboard).toEqual({ component: 'fake-component' })
    })
  })
})
