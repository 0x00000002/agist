'use strict'

import { connect } from 'react-redux'
import Main, { mapStateToProps, mapDispatchToProps } from './Main'

jest.mock('react-redux', () => ({
  connect: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue({ component: 'fake-component' }))
}))

describe('containers.Dashboard', function () {
  describe('mapStateToProps', function () {
    it('should return a remapped state', function () {
      expect(
        mapStateToProps({ user: 'fake-user' })
      ).toEqual({ user: 'fake-user' })
    })
  })

  describe('mapDispatchToProps', function () {
    it('should return a remapped dispatches', function () {
      expect(Object.keys(mapDispatchToProps)).toEqual([
        'userFetch'
      ])
    })
  })

  describe('Main', function () {
    it('should return a connected component', function () {
      expect(connect.mock.calls[0]).toEqual([
        mapStateToProps,
        mapDispatchToProps
      ])
      expect(Main).toEqual({ component: 'fake-component' })
    })
  })
})
