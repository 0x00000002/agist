'use strict'

import { connect } from 'react-redux'
import View, { mapStateToProps, mapDispatchToProps } from './View'

jest.mock('react-redux', () => ({
  connect: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue({ component: 'fake-component' }))
}))

describe('containers.View', function () {
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

  describe('View', function () {
    it('should return a connected component', function () {
      expect(connect.mock.calls[0]).toEqual([
        mapStateToProps,
        mapDispatchToProps
      ])
      expect(View).toEqual({ component: 'fake-component' })
    })
  })
})
