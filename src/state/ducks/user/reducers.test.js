'use strict'

import { combineReducers } from 'redux'
import { createReducer } from '../../utils'
import reducer, { userReducer } from './reducers'

jest.mock('redux', () => ({
  combineReducers: jest
    .fn()
    .mockReturnValue({ reducer: 'fake-combined-reducer' })
}))
jest.mock('../../utils', () => ({
  createReducer: jest.fn().mockReturnValue('fake-reducer')
}))

describe('user.reducers', function () {
  describe('userReducer', function () {
    it('should call createReducer with correct args', function () {
      expect(userReducer).toEqual('fake-reducer')
      expect(createReducer.mock.calls[0][0]).toEqual(null)
      expect(Object.keys(createReducer.mock.calls[0][1])).toEqual([
        'agist/USER_FETCH_COMPLETED',
        'agist/USER_SETUP_COMPLETED',
        'agist/USER_UPDATE_COMPLETED'
      ])
    })

    it('should support USER_FETCH_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['agist/USER_FETCH_COMPLETED']({}, {
          payload: 'fake-payload'
        })
      ).toEqual('fake-payload')
    })
    it('should support USER_SETUP_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['agist/USER_SETUP_COMPLETED']({}, {
          payload: 'fake-payload'
        })
      ).toEqual('fake-payload')
    })
    it('should support USER_UPDATE_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['agist/USER_UPDATE_COMPLETED']({}, {
          payload: 'fake-payload'
        })
      ).toEqual('fake-payload')
    })
  })

  describe('reducer', function () {
    expect(combineReducers.mock.calls[0][0]).toEqual({ data: 'fake-reducer' })
    expect(reducer).toEqual({ reducer: 'fake-combined-reducer' })
  })
})
